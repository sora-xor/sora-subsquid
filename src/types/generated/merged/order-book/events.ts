import * as productionEvents from '../../production/order-book/events'
import * as stageEvents from '../../stage/order-book/events'
import * as testEvents from '../../test/order-book/events'
import * as devEvents from '../../dev/order-book/events'


export const orderBookCreated = {
	name: 'OrderBook.OrderBookCreated',
	v71: productionEvents.orderBookCreated['v71'],
	v71Stage: stageEvents.orderBookCreated['v71'],
	v71Test: testEvents.orderBookCreated['v71'],
	v85Dev: devEvents.orderBookCreated['v85'],
}

export const orderBookDeleted = {
	name: 'OrderBook.OrderBookDeleted',
	v71: productionEvents.orderBookDeleted['v71'],
	v71Stage: stageEvents.orderBookDeleted['v71'],
	v71Test: testEvents.orderBookDeleted['v71'],
	v85Dev: devEvents.orderBookDeleted['v85'],
}

export const orderBookStatusChanged = {
	name: 'OrderBook.OrderBookStatusChanged',
	v71: productionEvents.orderBookStatusChanged['v71'],
	v71Stage: stageEvents.orderBookStatusChanged['v71'],
	v71Test: testEvents.orderBookStatusChanged['v71'],
	v85Dev: devEvents.orderBookStatusChanged['v85'],
}

export const orderBookUpdated = {
	name: 'OrderBook.OrderBookUpdated',
	v71: productionEvents.orderBookUpdated['v71'],
	v71Stage: stageEvents.orderBookUpdated['v71'],
	v71Test: testEvents.orderBookUpdated['v71'],
	v85Dev: devEvents.orderBookUpdated['v85'],
}

export const limitOrderPlaced = {
	name: 'OrderBook.LimitOrderPlaced',
	v71: productionEvents.limitOrderPlaced['v71'],
	v71Stage: stageEvents.limitOrderPlaced['v71'],
	v71Test: testEvents.limitOrderPlaced['v71'],
	v85Dev: devEvents.limitOrderPlaced['v85'],
}

export const limitOrderConvertedToMarketOrder = {
	name: 'OrderBook.LimitOrderConvertedToMarketOrder',
	v71: productionEvents.limitOrderConvertedToMarketOrder['v71'],
	v71Stage: stageEvents.limitOrderConvertedToMarketOrder['v71'],
	v71Test: testEvents.limitOrderConvertedToMarketOrder['v71'],
	v85Dev: devEvents.limitOrderConvertedToMarketOrder['v85'],
}

export const limitOrderIsSplitIntoMarketOrderAndLimitOrder = {
	name: 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
	v71: productionEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v71'],
	v71Stage: stageEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v71'],
	v71Test: testEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v71'],
	v85Dev: devEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v85'],
}

export const limitOrderCanceled = {
	name: 'OrderBook.LimitOrderCanceled',
	v71: productionEvents.limitOrderCanceled['v71'],
	v71Stage: stageEvents.limitOrderCanceled['v71'],
	v71Test: testEvents.limitOrderCanceled['v71'],
	v85Dev: devEvents.limitOrderCanceled['v85'],
}

export const limitOrderExecuted = {
	name: 'OrderBook.LimitOrderExecuted',
	v71: productionEvents.limitOrderExecuted['v71'],
	v71Stage: stageEvents.limitOrderExecuted['v71'],
	v71Test: testEvents.limitOrderExecuted['v71'],
	v85Dev: devEvents.limitOrderExecuted['v85'],
}

export const limitOrderFilled = {
	name: 'OrderBook.LimitOrderFilled',
	v71: productionEvents.limitOrderFilled['v71'],
	v71Stage: stageEvents.limitOrderFilled['v71'],
	v71Test: testEvents.limitOrderFilled['v71'],
	v85Dev: devEvents.limitOrderFilled['v85'],
}

export const limitOrderUpdated = {
	name: 'OrderBook.LimitOrderUpdated',
	v71: productionEvents.limitOrderUpdated['v71'],
	v71Stage: stageEvents.limitOrderUpdated['v71'],
	v71Test: testEvents.limitOrderUpdated['v71'],
	v85Dev: devEvents.limitOrderUpdated['v85'],
}

export const marketOrderExecuted = {
	name: 'OrderBook.MarketOrderExecuted',
	v71: productionEvents.marketOrderExecuted['v71'],
	v71Stage: stageEvents.marketOrderExecuted['v71'],
	v71Test: testEvents.marketOrderExecuted['v71'],
	v85Dev: devEvents.marketOrderExecuted['v85'],
}

export const expirationFailure = {
	name: 'OrderBook.ExpirationFailure',
	v71: productionEvents.expirationFailure['v71'],
	v71Stage: stageEvents.expirationFailure['v71'],
	v71Test: testEvents.expirationFailure['v71'],
	v85Dev: devEvents.expirationFailure['v85'],
}

export const alignmentFailure = {
	name: 'OrderBook.AlignmentFailure',
	v71: productionEvents.alignmentFailure['v71'],
	v71Stage: stageEvents.alignmentFailure['v71'],
	v71Test: testEvents.alignmentFailure['v71'],
	v85Dev: devEvents.alignmentFailure['v85'],
}
