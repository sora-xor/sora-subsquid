import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { findEventsWithExtrinsic, getTransferEventData } from '../../utils/events'
import { poolsStorage } from '../../utils/pools'
import { Block, CallEntity, Context } from '../../processor'
import { PoolXykWithdrawLiquidityCall } from '../../types/calls'
import { toAssetId } from '../../utils'

export async function liquidityRemovalHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'PoolXYK.withdraw_liquidity') return

    ctx.log.debug('Caught liquidity removal extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const call = new PoolXykWithdrawLiquidityCall(ctx, callEntity.call)

    let callRec: {
        assetAId: Uint8Array
        assetBId: Uint8Array
        assetAMin: bigint
        assetBMin: bigint
    }
    if (call.isV1) {
        const { outputAssetA, outputAssetB, outputAMin, outputBMin } = call.asV1
        callRec = {
            assetAId: outputAssetA,
            assetBId: outputAssetB,
            assetAMin: outputAMin,
            assetBMin: outputBMin
        }
    } else if (call.isV42) {
        const { outputAssetA, outputAssetB, outputAMin, outputBMin } = call.asV42
        callRec = {
            assetAId: outputAssetA.code,
            assetBId: outputAssetB.code,
            assetAMin: outputAMin,
            assetBMin: outputBMin
        }
    } else {
        throw new Error(`[${blockHeight}] Unsupported spec`)
    }

    const baseAssetId = toAssetId(callRec.assetAId)
    const targetAssetId = toAssetId(callRec.assetBId)
    const details = {
        type: 'Removal',
        baseAssetId: baseAssetId,
        targetAssetId: targetAssetId,
        baseAssetAmount: formatU128ToBalance(callRec.assetAMin, baseAssetId),
        targetAssetAmount: formatU128ToBalance(callRec.assetBMin, targetAssetId)
    }

    if (historyElement.execution.success) {

        const transfers = findEventsWithExtrinsic(['Balances.Transfer', 'Tokens.Transfer'], block, extrinsicHash)

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers
    
			// We assume that events go in the same order as in the blockchain
			// First the event with the base asset, and then the event with the target asset
            const { amount: amountA } = getTransferEventData(ctx, block, baseAssetTransfer)
            const { amount: amountB } = getTransferEventData(ctx, block, targetAssetTransfer)
    
            details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
            details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)

    ctx.log.debug(`===== Saved liquidity removal with ${extrinsicHash} txid =====`)

    await poolsStorage.getPool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, historyElement)
}
