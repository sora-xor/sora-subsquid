import { AssetId, BlockContext, Event } from '../../types'

import { getAssetsTransferEventData } from '../../utils/events'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'
import { orderBooksStorage } from '../../utils/orderBook'
import { assertDefined } from '../../utils'
import { initializedAtBlock } from '../models/initializePools'

export async function transferEventHandler(
	ctx: BlockContext,
	event: Event<'Tokens.Transfer'> | Event<'Balances.Transfer'> | Event<'Currencies.Transferred'>,
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	if (initializedAtBlock === ctx.block.header.height) {
		return
	}

	if (event.name === 'Balances.Transfer' && ctx.block.header.specVersion < 42) {
		return
	}

	const { assetId, from, to, amount } = getAssetsTransferEventData(ctx, event)

	// withdraw token from pool
	if (poolAccounts.has(from)) {
		const pool = await poolsStorage.getPoolById(ctx, from)
		assertDefined(pool)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves - amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves - amount
		}

		getEventHandlerLog(ctx, event).debug({ poolId: pool.id }, 'Pool information saved after withdrawal')
		PoolsPrices.set(true)
	}

	// deposit token to pool
	if (poolAccounts.has(to)) {
		const pool = await poolsStorage.getPoolById(ctx, to)
		assertDefined(pool)

		if (pool.baseAsset.id === assetId) {
			pool.baseAssetReserves = pool.baseAssetReserves + amount
		} else if (pool.targetAsset.id === assetId) {
			pool.targetAssetReserves = pool.targetAssetReserves + amount
		}

		getEventHandlerLog(ctx, event).debug({ poolId: pool.id }, 'Pool information saved after deposit')
		PoolsPrices.set(true)
	}

	// withdraw token from order book
	if (orderBooksStorage.accountIds.has(from)) {
		const book = await orderBooksStorage.getOrderBookByAccountId(ctx, from)

		assertDefined(book)
	
		if (book.baseAsset.id === assetId) {
			book.baseAssetReserves = book.baseAssetReserves - amount
		} else if (book.quoteAsset.id === assetId) {
			book.quoteAssetReserves = book.quoteAssetReserves - amount
		}
	
		getEventHandlerLog(ctx, event).debug({ id: book.id }, 'Order Book information saved after withdrawal')
	}
	// deposit token to order book
	if (orderBooksStorage.accountIds.has(to)) {
		const book = await orderBooksStorage.getOrderBookByAccountId(ctx, to)

		assertDefined(book)
	
		if (book.baseAsset.id === assetId) {
			book.baseAssetReserves = book.baseAssetReserves + amount
		} else if (book.quoteAsset.id === assetId) {
			book.quoteAssetReserves = book.quoteAssetReserves + amount
		}
	
		getEventHandlerLog(ctx, event).debug({ id: book.id }, 'Order Book information saved after deposit')
	}
}
