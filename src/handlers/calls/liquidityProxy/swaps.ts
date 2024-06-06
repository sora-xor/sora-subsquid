import BigNumber from 'bignumber.js'
import { BlockContext, Call } from '../../../types'
import { SwapAmount } from '../../../utils/swaps'
import { getCallData, getEventData } from '../../../utils/entities'
import { assetSnapshotsStorage, formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { networkSnapshotsStorage } from '../../../utils/network'
import { assertDefined, toAddress } from '../../../utils'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls, events } from '../../../types/generated/merged'
import { AssetId } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'

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

export async function swapsCallHandler(
	ctx: BlockContext,
	call: Call<'LiquidityProxy.swap'> | Call<'LiquidityProxy.swap_transfer'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = call.name === 'LiquidityProxy.swap'
		? getCallData(ctx, calls.liquidityProxy.swap, call)
		: getCallData(ctx, calls.liquidityProxy.swapTransfer, call)

	const baseAssetId = getAssetId(data.inputAssetId)
	const targetAssetId = getAssetId(data.outputAssetId)
	const liquiditySources = data.selectedSourceTypes.map((type) => type.__kind)

	const swapAmount: SwapAmount =
		data.swapAmount.__kind === 'WithDesiredInput'
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
		to?: string
	} = {}

	details.baseAssetId = baseAssetId
    details.targetAssetId = targetAssetId
    details.selectedMarket = liquiditySources.toString()
    details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount, baseAssetId)[0]
    details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount, targetAssetId)[1]

	if (data.swapAmount.__kind === 'WithDesiredOutput') {
		if ('value' in data.swapAmount) {
			data.swapAmount.value
		} else {
			data.swapAmount.desiredAmountOut
		}
	}

	if ('receiver' in data) {
		details.to = toAddress(data.receiver as any)
	}

	assertDefined(call.extrinsic)
	const exchangeEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['LiquidityProxy.Exchange'])

	if (exchangeEvent) {
		const exchangeEventData = getEventData(ctx, events.liquidityProxy.exchange, exchangeEvent)

		const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = exchangeEventData

		details.baseAssetAmount = formatU128ToBalance(baseAssetAmount, baseAssetId)
		details.targetAssetAmount = formatU128ToBalance(targetAssetAmount, targetAssetId)

		const aVolumeUSD = await assetSnapshotsStorage.updateVolume(ctx, baseAssetId, BigNumber(details.baseAssetAmount))
		const bVolumeUSD = await assetSnapshotsStorage.updateVolume(ctx, targetAssetId, BigNumber(details.targetAssetAmount))
		// get the minimal volume (sell\buy)
		const volumeUSD = BigNumber.min(aVolumeUSD, bVolumeUSD)

		await networkSnapshotsStorage.updateVolumeStats(ctx, volumeUSD)
	}

	await createCallHistoryElement(ctx, call, details)
}
