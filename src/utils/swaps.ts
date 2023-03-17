import { toHex } from "@subsquid/substrate-processor"
import { CallItem } from "@subsquid/substrate-processor/lib/interfaces/dataSelection"
import { formatDateTimestamp } from "."
import { Block, Context } from "../processor"
import { LiquidityProxyExchangeEvent } from "../types/events"
import { assetSnapshotsStorage, formatU128ToBalance } from "./assets"
import { XOR } from "./consts"
import { findEventWithExtrinsic } from "./events"
import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from "./history"

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
	inputAssetId: Uint8Array
	outputAssetId: Uint8Array
	swapAmount: SwapAmount
	liquiditySources: LiquiditySourceType[]
	receiver?: Uint8Array
}

const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: Uint8Array): string[] => {
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
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    // TODO: FIX
    const { liquiditySources, swapAmount, outputAssetId, inputAssetId, receiver } = callRec

    const details: any = {}

    details.baseAssetId = toHex(inputAssetId)
    details.targetAssetId = toHex(outputAssetId)
    details.selectedMarket = liquiditySources.toString()

    if (receiver) {
        details.to = toHex(receiver)
    }

    if (historyElement.execution.success) {
		const eventEntity = findEventWithExtrinsic('LiquidityProxy.Exchange', block, extrinsicHash)
        if (!eventEntity) throw new Error('Cannot find event: LiquidityProxy.Exchange')
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
			throw new Error('Unsupported spec')
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
        await assetSnapshotsStorage.updateVolume(ctx, inputAssetId, details.baseAssetAmount, blockTimestamp)
        await assetSnapshotsStorage.updateVolume(ctx, outputAssetId, details.targetAssetAmount, blockTimestamp)
    }
}