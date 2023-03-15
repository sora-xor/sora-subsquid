import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { findEventsWithExtrinsic } from '../../utils/events'
import { poolsStorage } from '../../utils/pools'
import { Block, CallEntity, Context } from '../../processor'

export async function handleLiquidityRemoval(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || call.name !== 'PoolXYK.withdraw_liquidity') return

    ctx.log.debug('Caught liquidity removal extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    // TODO: use generated types with versioning
    const { dexId, outputAssetA, outputAssetB, poolTokensDesired, outputAMin, outputBMin } = call.call.args

    const baseAssetId = getAssetId(outputAssetA)
    const targetAssetId = getAssetId(outputAssetB)

    const details = {
        type: 'Removal',
        baseAssetId,
        targetAssetId,
        baseAssetAmount: formatU128ToBalance(outputAMin, baseAssetId),
        targetAssetAmount: formatU128ToBalance(outputBMin, targetAssetId)
    }

    const extrinsicHash = call.extrinsic.hash

    if (historyElement.execution.success) {

        const transfers = [
            ...findEventsWithExtrinsic('Balances.Transfer', block, extrinsicHash),
            ...findEventsWithExtrinsic('Tokens.Transfer', block, extrinsicHash)
        ]

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers

            const { amount: amountA } = baseAssetTransfer.event.args
            const { amount: amountB } = targetAssetTransfer.event.args

            details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
            details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)

    ctx.log.debug(`===== Saved liquidity removal with ${extrinsicHash} txid =====`)

    await poolsStorage.getPool(ctx, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, historyElement)
}
