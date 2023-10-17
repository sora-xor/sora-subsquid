import { BlockContext, EventItem } from '../../types'

import { getAssetsTransferEventData } from '../../utils/events'
import { debug, logEventHandler } from '../../utils/logs'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'

export async function transferEventHandler(
	ctx: BlockContext,
	eventItem: (
		| EventItem<'Tokens.Transfer'>
		| EventItem<'Balances.Transfer'>
	)
): Promise<void> {
	logEventHandler(ctx, eventItem)

	const { assetId, from, to, amount } = getAssetsTransferEventData(ctx, eventItem)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, from)

		if (!pool) throw new Error(`[${ctx.block.header.height}][EventHandler] Cannot get pool '${from}'`)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves - amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves - amount
		}

		debug(ctx, 'EventHandler', `Update pool '${pool.id}'`);
		PoolsPrices.set(true)
	}

	// deposit token to pool
	if (poolAccounts.has(to)) {
		const pool = await poolsStorage.getPoolById(ctx, to)

		if (!pool) throw new Error(`[${ctx.block.header.height}][EventHandler] Cannot get pool '${to}'`)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves + amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves + amount
		}

		debug(ctx, 'EventHandler', `Update pool '${pool.id}'`);
		PoolsPrices.set(true)
	}
}