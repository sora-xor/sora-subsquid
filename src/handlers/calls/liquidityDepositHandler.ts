import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsWithExtrinsic, getTransferEventData } from '../../utils/events'
import { Block, CallEntity, Context } from '../../processor'
import { PoolXykDepositLiquidityCall } from '../../types/calls'
import { toHex } from '@subsquid/substrate-processor'

export async function liquidityDepositHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'PoolXYK.deposit_liquidity') return

    ctx.log.debug('Caught liquidity adding extrinsic')

    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const call = new PoolXykDepositLiquidityCall(ctx, callEntity.call)

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
        throw new Error('Unsupported spec')
    }

    const baseAssetId = callRec.assetAId
    const targetAssetId = callRec.assetBId
    const details = {
        type: 'Deposit',
        baseAssetId: toHex(baseAssetId),
        targetAssetId: toHex(callRec.assetBId),
        baseAssetAmount: formatU128ToBalance(callRec.assetADesired, baseAssetId),
        targetAssetAmount: formatU128ToBalance(callRec.assetBDesired, targetAssetId)
    }

    const transfers = findEventsWithExtrinsic(['Balances.Transfer', 'Tokens.Transfer'], block, extrinsicHash)

    if (transfers.length === 2) {
        const [baseAssetTransfer, targetAssetTransfer] = transfers


		// We assume that events go in the same order as in the blockchain
		// First the event with the base asset, and then the event with the target asset
        const { amount: amountA } = getTransferEventData(ctx, baseAssetTransfer)
        const { amount: amountB } = getTransferEventData(ctx, targetAssetTransfer)

        details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
        details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
    }

    await addDataToHistoryElement(ctx, historyElement, details)

    ctx.log.debug(`===== Saved liquidity deposit with ${extrinsicHash} txid =====`)

    await poolsStorage.getPool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, historyElement)
}
