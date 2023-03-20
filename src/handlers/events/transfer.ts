import { toHex } from '@subsquid/substrate-processor'
import { Block, Context, EventEntity } from '../../processor'

import { getTransferEventData } from '../../utils/events'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'

export async function transferEventHandler(ctx: Context, block: Block, event: EventEntity): Promise<void> {
	if (event.name !== 'Tokens.Transfer') return

	const { assetId, from, to, amount } = getTransferEventData(ctx, event)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, block, from)

		if (!pool) throw new Error('Cannot get pool ' + toHex(from))

		if (pool.baseAsset.id === toHex(assetId)) {
			pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount.toString())
		} else if (pool.targetAsset.id === toHex(assetId)) {
			pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount.toString())
		}

		PoolsPrices.set(true)
	}

	// deposit token to pool
	if (poolAccounts.has(to)) {
		const pool = await poolsStorage.getPoolById(ctx, block, to)

		if (!pool) throw new Error('Cannot get pool ' + toHex(to))

		if (pool.baseAsset.id === toHex(assetId)) {
			pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount.toString())
		} else if (pool.targetAsset.id === toHex(assetId)) {
			pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount.toString())
		}

		PoolsPrices.set(true)
	}
}