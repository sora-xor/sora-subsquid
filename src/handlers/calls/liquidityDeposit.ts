import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsByExtrinsicHash, getAssetTransferEventData } from '../../utils/events'
import { Block, CallItem, Context } from '../../processor'
import { PoolXykDepositLiquidityCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'


export async function liquidityDepositHandler(ctx: Context, block: Block, callItem: CallItem<'PoolXYK.deposit_liquidity', true>): Promise<void> {
    ctx.log.debug('Caught liquidity adding extrinsic')

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new PoolXykDepositLiquidityCall(ctx, callItem.call)

    let callRec: {
        assetAId: Uint8Array
        assetBId: Uint8Array
        assetADesired: bigint
        assetBDesired: bigint
    }
    if (call.isV1) {
        const { inputAssetA, inputAssetB, inputADesired, inputBDesired } = call.asV1
        callRec = {
            assetAId: inputAssetA,
            assetBId: inputAssetB,
            assetADesired: inputADesired,
            assetBDesired: inputBDesired
        }
    } else if (call.isV42) {
        const { inputAssetA, inputAssetB, inputADesired, inputBDesired } = call.asV42
        callRec = {
            assetAId: inputAssetA.code,
            assetBId: inputAssetB.code,
            assetADesired: inputADesired,
            assetBDesired: inputBDesired
        }
    } else {
        throw unsupportedSpecError(block)
    }

    const baseAssetId = toAssetId(callRec.assetAId)
    const targetAssetId = toAssetId(callRec.assetBId)
    const details = {
        type: 'Deposit',
        baseAssetId: baseAssetId,
        targetAssetId: toAssetId(callRec.assetBId),
        baseAssetAmount: formatU128ToBalance(callRec.assetADesired, baseAssetId),
        targetAssetAmount: formatU128ToBalance(callRec.assetBDesired, targetAssetId)
    }

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

    await addDataToHistoryElement(ctx, block, historyElement, details)

    ctx.log.debug(`===== Saved liquidity deposit with ${extrinsicHash} txid =====`)

    await poolsStorage.getOrCreatePool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, block,historyElement)
}
