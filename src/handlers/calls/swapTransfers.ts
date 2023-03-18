import { Block, CallEntity, Context } from '../../processor'
import { LiquidityProxySwapTransferCall } from '../../types/calls'
import { CallRec, handleAndSaveExtrinsic, SwapAmount } from '../../utils/swaps'

export async function swapTransfersHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'LiquidityProxy.swap_transfer') return

    ctx.log.debug('Caught swap transfer extrinsic')

	const call = new LiquidityProxySwapTransferCall(ctx, callEntity.call)

	let callRec: CallRec
	if (call.isV33) {
		const { inputAssetId, outputAssetId, swapAmount: swapAmountV1, selectedSourceTypes, receiver } = call.asV33
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
			inputAssetId,
			outputAssetId,
			swapAmount,
			liquiditySources: selectedSourceTypes.map(type => type.__kind),
			receiver
		}
	} else if (call.isV42) {
		const { inputAssetId, outputAssetId, swapAmount: swapAmountV42, selectedSourceTypes, receiver } = call.asV42
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
			inputAssetId: inputAssetId.code,
			outputAssetId: outputAssetId.code,
			swapAmount,
			liquiditySources: selectedSourceTypes.map(type => type.__kind),
			receiver
		}
	} else {
		throw new Error('Unsupported spec')
	}

    await handleAndSaveExtrinsic(ctx, block, callEntity, callRec)

    ctx.log.debug(`===== Saved swap and transfer with ${callEntity.extrinsic.hash} txid =====`)
}