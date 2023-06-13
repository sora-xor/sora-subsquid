import { Block, Context, CallItem } from '../../processor'
import { LiquidityProxySwapCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'
import { CallRec, handleAndSaveExtrinsic, SwapAmount } from '../../utils/swaps'

export async function swapsHandler(ctx: Context, block: Block, callItem: CallItem<'LiquidityProxy.swap', true>): Promise<void> {
    ctx.log.debug('Caught swap extrinsic')

	const call = new LiquidityProxySwapCall(ctx, callItem.call)

	let callRec: CallRec
	if (call.isV1) {
		const { inputAssetId, outputAssetId, swapAmount: swapAmountV1, selectedSourceTypes } = call.asV1
		let swapAmount: SwapAmount
		if (swapAmountV1.__kind === 'WithDesiredInput') {
			swapAmount = {
				kind: 'WithDesiredInput',
				desiredAmountIn: swapAmountV1.value.desiredAmountIn,
				minAmountOut: swapAmountV1.value.minAmountOut
			}
		} else {
			swapAmount = {
				kind: 'WithDesiredOutput',
				desiredAmountOut: swapAmountV1.value.desiredAmountOut,
				maxAmountIn: swapAmountV1.value.maxAmountIn
			}
		}
		callRec = {
			inputAssetId: toAssetId(inputAssetId),
			outputAssetId: toAssetId(outputAssetId),
			swapAmount,
			liquiditySources: selectedSourceTypes.map(type => type.__kind)
		}
	} else if (call.isV42) {
		const { inputAssetId, outputAssetId, swapAmount: swapAmountV42, selectedSourceTypes } = call.asV42
		let swapAmount: SwapAmount
		if (swapAmountV42.__kind === 'WithDesiredInput') {
			swapAmount = {
				kind: 'WithDesiredInput',
				desiredAmountIn: swapAmountV42.desiredAmountIn,
				minAmountOut: swapAmountV42.minAmountOut
			}
		} else {
			swapAmount = {
				kind: 'WithDesiredOutput',
				desiredAmountOut: swapAmountV42.desiredAmountOut,
				maxAmountIn: swapAmountV42.maxAmountIn
			}
		}
		callRec = {
			inputAssetId: toAssetId(inputAssetId.code),
			outputAssetId: toAssetId(outputAssetId.code),
			swapAmount,
			liquiditySources: selectedSourceTypes.map(type => type.__kind)
		}
	} else {
		throw unsupportedSpecError(block)
	}

    await handleAndSaveExtrinsic(ctx, block, callItem, callRec)

    ctx.log.debug(`===== Saved swap with ${callItem.extrinsic.hash} txid =====`)
}
