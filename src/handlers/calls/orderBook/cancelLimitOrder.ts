import { createCallHistoryElement } from '../../../utils/history'
import { getAssetId } from '../../../utils/assets'
import { logStartProcessingCall } from '../../../utils/logs'
import { BlockContext, Call, AssetId } from '../../../types'
import { findEventsByExtrinsicHash } from '../../../utils/events'
import { assertDefined } from '../../../utils'
import { getEventData } from '../../../utils/entities'
import { events } from '../../../types/generated/merged'

export async function orderBookCancelLimitOrderCallHandler(ctx: BlockContext, call: Call<'OrderBook.cancel_limit_order'> | Call<'OrderBook.cancel_limit_orders_batch'>): Promise<void> {
  logStartProcessingCall(ctx, call)

  assertDefined(call.extrinsic?.hash)
  const cancelEvents = findEventsByExtrinsicHash(ctx, call.extrinsic.hash, ['OrderBook.LimitOrderCanceled'])

  const details = cancelEvents.reduce((buffer, cancelEvent) => {
	const { orderBookId, orderId } = getEventData(ctx, events.orderBook.limitOrderCanceled, cancelEvent)

    buffer.push({
      dexId: orderBookId.dexId,
      baseAssetId: getAssetId(orderBookId.base),
      quoteAssetId: getAssetId(orderBookId.quote),
      orderId: Number(orderId),
    })

    return buffer
  }, [] as { dexId: any; baseAssetId: AssetId; quoteAssetId: AssetId; orderId: number; }[])

  await createCallHistoryElement(ctx, call, details);
}
