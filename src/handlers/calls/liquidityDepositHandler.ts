import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsWithExtrinsic } from '../../utils/events'
import { Block, CallEntity, Context } from '../../processor'

export async function handleLiquidityDeposit(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || call.name !== 'PoolXYK.deposit_liquidity') return

    ctx.log.debug('Caught liquidity adding extrinsic')

    // TODO: check this condition
    if (!Array.isArray(call.call.args)) return
    const [, assetAId, assetBId, assetADesired, assetBDesired] = call.call.args

    const baseAssetId = getAssetId(assetAId)
    const targetAssetId = getAssetId(assetBId)

    const details = {
        type: 'Deposit',
        baseAssetId,
        targetAssetId,
        baseAssetAmount: formatU128ToBalance(assetADesired.toString(), baseAssetId),
        targetAssetAmount: formatU128ToBalance(assetBDesired.toString(), targetAssetId)
    }

    const extrinsicHash = call.extrinsic.hash

    const transfers = [
        ...findEventsWithExtrinsic('Balances.Transfer', block, extrinsicHash),
        ...findEventsWithExtrinsic('Tokens.Transfer', block, extrinsicHash)
    ]

    if (transfers.length === 2) {
        // TODO: check this assertion
        const [baseAssetTransfer, targetAssetTransfer] = transfers

        // TODO: use generated types with versioning
        const { amount: amountA } = baseAssetTransfer.event.args
        const { amount: amountB } = targetAssetTransfer.event.args

        details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
        details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
    }

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)
    if (!historyElement) return
    await addDataToHistoryElement(ctx, historyElement, details)

    ctx.log.debug(`===== Saved liquidity deposit with ${extrinsicHash} txid =====`)

    await poolsStorage.getPool(ctx, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, historyElement)
}
