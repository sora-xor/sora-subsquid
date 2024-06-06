import { createCallHistoryElement } from '../../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../../utils/assets'
import { logStartProcessingCall } from '../../../utils/logs'
import { BlockContext, Call, AssetId } from '../../../types'
import { findEventByExtrinsicHash, findEventsByExtrinsicHash } from '../../../utils/events'
import { assertDefined } from '../../../utils'
import { getCallData, getEventData } from '../../../utils/entities'
import { events, calls } from '../../../types/generated/merged'

export async function orderBookPlaceLimitOrderCallHandler(ctx: BlockContext, call: Call<'OrderBook.place_limit_order'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const { orderBookId, price, amount, side, lifespan } = getCallData(ctx, calls.orderBook.placeLimitOrder, call)

	const baseAssetId = getAssetId(orderBookId.base)
	const quoteAssetId = getAssetId(orderBookId.quote)

	const details = {
		dexId: orderBookId.dexId,
		baseAssetId,
		quoteAssetId,
		orderId: null as number | null,
		price: formatU128ToBalance(price, quoteAssetId),
		amount: formatU128ToBalance(amount, baseAssetId),
		side: side.__kind,
		lifetime: lifespan ? Number(lifespan) / 1000 : null,
	}

	assertDefined(call.extrinsic?.hash)
	const limitOrderPlacedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['OrderBook.LimitOrderPlaced'])

	if (limitOrderPlacedEvent) {
		const { orderId } = getEventData(ctx, events.orderBook.limitOrderPlaced, limitOrderPlacedEvent)
		details.orderId = Number(orderId)
	}

	await createCallHistoryElement(ctx, call, details)
}
