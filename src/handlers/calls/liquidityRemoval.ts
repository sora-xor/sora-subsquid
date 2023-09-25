import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { poolsStorage } from '../../utils/pools'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { PoolXykWithdrawLiquidityCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'

export async function liquidityRemovalCallHandler(ctx: Context, block: Block, callItem: CallItem<'PoolXYK.withdraw_liquidity'>): Promise<void> {
    ctx.log.debug(`[${block.header.height}] Caught liquidity removal extrinsic`)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new PoolXykWithdrawLiquidityCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

	const baseAssetId = getAssetId(data.outputAssetA)
	const targetAssetId = getAssetId(data.outputAssetB)
	const baseAssetAmount = formatU128ToBalance(data.outputAMin as AssetAmount, baseAssetId)
	const targetAssetAmount = formatU128ToBalance(data.outputBMin as AssetAmount, targetAssetId)

    const details = {
        type: 'Removal',
        baseAssetId,
        targetAssetId,
        baseAssetAmount,
        targetAssetAmount,
    }

    if (historyElement.execution.success) {

        const transfers = findEventsByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer', 'Tokens.Transfer'])

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers
    
			// We assume that events go in the same order as in the blockchain
			// First the event with the base asset, and then the event with the target asset
            const { amount: amountA } = getAssetsTransferEventData(ctx, block, baseAssetTransfer)
            const { amount: amountB } = getAssetsTransferEventData(ctx, block, targetAssetTransfer)
    
            details.baseAssetAmount = formatU128ToBalance(amountA, baseAssetId)
            details.targetAssetAmount = formatU128ToBalance(amountB, targetAssetId)
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)

    ctx.log.debug(`[${block.header.height}] ===== Saved liquidity removal with ${extrinsicHash} txid =====`)

    await poolsStorage.getOrCreatePool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, block,historyElement)
}
