import { CallItem } from "@subsquid/substrate-processor/lib/interfaces/dataSelection"
import BigNumber from "bignumber.js"
import { formatDateTimestamp } from "."
import { Block, Context } from "../processor"
import { LiquidityProxyExchangeEvent } from "../types/events"
import { assetSnapshotsStorage, formatU128ToBalance } from "./assets"
import { XOR } from "./consts"
import { findEventWithExtrinsic } from "./events"
import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from "./history"
import { Address, AssetId } from "../types"

export type SwapAmount = SwapAmount_WithDesiredInput | SwapAmount_WithDesiredOutput

export interface SwapAmount_WithDesiredInput {
    kind: 'WithDesiredInput'
    desiredAmountIn: bigint
    minAmountOut: bigint
}

export interface SwapAmount_WithDesiredOutput {
    kind: 'WithDesiredOutput'
    desiredAmountOut: bigint
    maxAmountIn: bigint
}

export type LiquiditySourceType = (
	  'XYKPool'
	| 'BondingCurvePool'
	| 'MulticollateralBondingCurvePool'
	| 'MockPool'
	| 'MockPool2'
	| 'MockPool3'
	| 'MockPool4'
	| 'XSTPool'
)

export type CallRec = {
	inputAssetId: AssetId
	outputAssetId: AssetId
	swapAmount: SwapAmount
	liquiditySources: LiquiditySourceType[]
	receiver?: Address
}

const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: AssetId): string[] => {
	if (swapAmount.kind === 'WithDesiredOutput') {
		return [
			formatU128ToBalance(swapAmount.maxAmountIn, assetId),
			formatU128ToBalance(swapAmount.desiredAmountOut, assetId)
		]
	} else {
		return [
			formatU128ToBalance(swapAmount.desiredAmountIn, assetId),
			formatU128ToBalance(swapAmount.minAmountOut, assetId)
		]
	}
}

export const handleAndSaveExtrinsic = async (
	ctx: Context,
	block: Block,
	callEntity: CallItem<'LiquidityProxy.swap', true> | CallItem<'LiquidityProxy.swap_transfer', true>,
	callRec: CallRec
): Promise<void> => {

	const extrinsicHash = callEntity.extrinsic.hash
	const blockHeight = block.header.height
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const { liquiditySources, swapAmount, outputAssetId, inputAssetId, receiver } = callRec

    const details: {
		baseAssetId?: string
		targetAssetId?: string
		selectedMarket?: string
		baseAssetAmount?: string
		targetAssetAmount?: string
		liquidityProviderFee?: string
		to?: string
	} = {}

    details.baseAssetId = inputAssetId
    details.targetAssetId = outputAssetId
    details.selectedMarket = liquiditySources.toString()

    if (receiver) {
        details.to = receiver
    }

    if (historyElement.execution.success) {
		const eventEntity = findEventWithExtrinsic('LiquidityProxy.Exchange', block, extrinsicHash)
        if (!eventEntity) {
			ctx.log.error(`[${blockHeight}] Cannot find event "LiquidityProxy.Exchange" with extrinsic hash ${extrinsicHash}`)
			return
		} else {
			// ctx.log.info(`Found event on block ${blockHeight}: LiquidityProxy.Exchange`)
		}
		const event = new LiquidityProxyExchangeEvent(ctx, eventEntity.event)

		let eventRec: {
			baseAssetAmount: bigint
			targetAssetAmount: bigint
			liquidityProviderFee: bigint
		}
		if (event.isV1) {
			const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = event.asV1
			eventRec = { baseAssetAmount, targetAssetAmount, liquidityProviderFee }
		} else if (event.isV42) {
			const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = event.asV42
			eventRec = { baseAssetAmount, targetAssetAmount, liquidityProviderFee }
		} else {
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}
		const { baseAssetAmount, targetAssetAmount, liquidityProviderFee } = eventRec

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount, inputAssetId)
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount, outputAssetId)
        details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee, XOR)
    } else {
        details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, inputAssetId)[0]
        details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, outputAssetId)[1]
        details.liquidityProviderFee = '0'
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    // update assets volume
    if (historyElement.execution.success) {
        await assetSnapshotsStorage.updateVolume(ctx, inputAssetId, BigNumber(details.baseAssetAmount), blockTimestamp)
        await assetSnapshotsStorage.updateVolume(ctx, outputAssetId, BigNumber(details.targetAssetAmount), blockTimestamp)
    }
}