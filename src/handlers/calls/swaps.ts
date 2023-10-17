import { BlockContext, CallItem } from '../../types'
import { LiquidityProxySwapCall, LiquidityProxySwapTransferCall } from '../../types/generated/calls'
import { receiveExtrinsicSwapAmounts, SwapAmount } from '../../utils/swaps'
import { getEntityData } from '../../utils/entities'
import { assetSnapshotsStorage, formatU128ToBalance, getAssetId } from '../../utils/assets'
import { findEventByExtrinsicHash } from '../../utils/events'
import { LiquidityProxyExchangeEvent } from '../../types/generated/events'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import BigNumber from 'bignumber.js'
import { XOR } from '../../utils/consts'
import { toAddress } from '../../utils'
import { debug, logCallHandler } from '../../utils/log'

export async function swapsCallHandler(ctx: BlockContext, callItem: CallItem<'LiquidityProxy.swap'> | CallItem<'LiquidityProxy.swap_transfer'>): Promise<void> {
    logCallHandler(ctx, callItem)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, callItem)

	const call = callItem.name === 'LiquidityProxy.swap'
		? new LiquidityProxySwapCall(ctx, callItem.call)
		: new LiquidityProxySwapTransferCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const inputAssetId = getAssetId(data.inputAssetId)
	const outputAssetId = getAssetId(data.outputAssetId)
	const liquiditySources = data.selectedSourceTypes.map(type => type.__kind)
	const swapAmount: SwapAmount = data.swapAmount.__kind === 'WithDesiredInput'
		? {
			kind: 'WithDesiredInput',
			desiredAmountIn: 'value' in data.swapAmount ? data.swapAmount.value.desiredAmountIn : data.swapAmount.desiredAmountIn,
			minAmountOut: 'value' in data.swapAmount ? data.swapAmount.value.minAmountOut : data.swapAmount.minAmountOut,
		}
		: {
			kind: 'WithDesiredOutput',
			desiredAmountOut: 'value' in data.swapAmount ? data.swapAmount.value.desiredAmountOut : data.swapAmount.desiredAmountOut,
			maxAmountIn: 'value' in data.swapAmount ? data.swapAmount.value.maxAmountIn : data.swapAmount.maxAmountIn,
		}

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

    if ('receiver' in data) {
        details.to = toAddress(data.receiver)
    }

    if (historyElement.execution.success) {
		const liquidityProxyExchangeEventItem = findEventByExtrinsicHash(ctx, extrinsicHash, ['LiquidityProxy.Exchange'], true)
		const liquidityProxyExchangeEvent = new LiquidityProxyExchangeEvent(ctx, liquidityProxyExchangeEventItem.event)
		const liquidityProxyExchangeEventData = getEntityData(ctx, liquidityProxyExchangeEvent, liquidityProxyExchangeEventItem)

		const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = liquidityProxyExchangeEventData

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount, inputAssetId)
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount, outputAssetId)
        details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee, XOR)
    } else {
        details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, inputAssetId)[0]
        details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, outputAssetId)[1]
        details.liquidityProviderFee = '0'
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx,historyElement)

    // update assets volume
    if (historyElement.execution.success) {
        await assetSnapshotsStorage.updateVolume(ctx, inputAssetId, BigNumber(details.baseAssetAmount))
        await assetSnapshotsStorage.updateVolume(ctx, outputAssetId, BigNumber(details.targetAssetAmount))
    }

    debug(ctx, 'CallHandler', `Saved swap with ${callItem.extrinsic.hash} txid`)
}
