import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { findEventsByExtrinsicHash, getAssetTransferEventData } from '../../utils/events'
import { poolsStorage } from '../../utils/pools'
import { Block, CallItem, Context } from '../../processor'
import { PoolXykWithdrawLiquidityCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function liquidityRemovalHandler(ctx: Context, block: Block, callItem: CallItem<'PoolXYK.withdraw_liquidity', true>): Promise<void> {
    ctx.log.debug('Caught liquidity removal extrinsic')

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new PoolXykWithdrawLiquidityCall(ctx, callItem.call)

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
        throw unsupportedSpecError(block)
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

        const transfers = findEventsByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer', 'Tokens.Transfer'])

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers
    
			// We assume that events go in the same order as in the blockchain
			// First the event with the base asset, and then the event with the target asset
            const { amount: amountA } = getAssetTransferEventData(ctx, block, baseAssetTransfer)
            const { amount: amountB } = getAssetTransferEventData(ctx, block, targetAssetTransfer)
    
            details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
            details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)

    ctx.log.debug(`===== Saved liquidity removal with ${extrinsicHash} txid =====`)

    await poolsStorage.getOrCreatePool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, block,historyElement)
}
