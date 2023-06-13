import { Block, Context, EventItem } from '../../processor'

import { getTransferEventData } from '../../utils/events'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'

export async function transferHandler(
	ctx: Context,
	block: Block,
	eventItem: (
		| EventItem<'Tokens.Transfer', true>
		| EventItem<'Balances.Transfer', true>
	)
): Promise<void> {
	const { assetId, from, to, amount } = getTransferEventData(ctx, block, eventItem)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, block, from)

		if (!pool) throw new Error('Cannot get pool ' + from)

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

		if (!pool) throw new Error('Cannot get pool ' + to)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves + amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves + amount
		}

		PoolsPrices.set(true)
	}
}