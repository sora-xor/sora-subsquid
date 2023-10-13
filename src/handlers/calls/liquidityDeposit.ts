import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { PoolXykDepositLiquidityCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { logCallHandler } from '../../utils/log'


export async function liquidityDepositCallHandler(ctx: Context, block: Block, callItem: CallItem<'PoolXYK.deposit_liquidity'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new PoolXykDepositLiquidityCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

	const baseAssetId = getAssetId(data.inputAssetA)
	const targetAssetId = getAssetId(data.inputAssetB)
	const assetADesired = data.inputADesired as AssetAmount
	const assetBDesired = data.inputBDesired as AssetAmount
	const baseAssetAmount = formatU128ToBalance(assetADesired, baseAssetId)
	const targetAssetAmount = formatU128ToBalance(assetBDesired, targetAssetId)
	
    const details = {
        type: 'Deposit',
        baseAssetId,
        targetAssetId,
        baseAssetAmount,
        targetAssetAmount,
    }

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

    await addDataToHistoryElement(ctx, block, historyElement, details)

    ctx.log.debug(`[${block.header.height}] ===== Saved liquidity deposit with ${extrinsicHash} txid =====`)

    await poolsStorage.getOrCreatePool(ctx, block, baseAssetId, targetAssetId)
    await updateHistoryElementStats(ctx, block,historyElement)
}
