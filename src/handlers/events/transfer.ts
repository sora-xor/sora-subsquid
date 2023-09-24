import { Block, Context, EventItem } from '../../types'

import { getAssetsTransferEventData } from '../../utils/events'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'

export async function transferEventHandler(
	ctx: Context,
	block: Block,
	eventItem: (
		| EventItem<'Tokens.Transfer'>
		| EventItem<'Balances.Transfer'>
	)
): Promise<void> {
	const { assetId, from, to, amount } = getAssetsTransferEventData(ctx, block, eventItem)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, block, from)

		if (!pool) throw new Error(`[${block.header.height}] Cannot get pool ` + from)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves - amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves - amount
		}

		PoolsPrices.set(true)
	}

	// deposit token to pool
	if (poolAccounts.has(to)) {
		const pool = await poolsStorage.getPoolById(ctx, block, to)

		if (!pool) throw new Error(`[${block.header.height}] Cannot get pool ` + to)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves + amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves + amount
		}

		PoolsPrices.set(true)
	}
}