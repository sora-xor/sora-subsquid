import * as productionStorage from '../../production/order-book/storage'
import * as stageStorage from '../../stage/order-book/storage'
import * as testStorage from '../../test/order-book/storage'
import * as devStorage from '../../dev/order-book/storage'


export const orderBooks = {
	name: 'OrderBook.OrderBooks',
	v71: productionStorage.orderBooks['v71'],
	v71Stage: stageStorage.orderBooks['v71'],
	v71Test: testStorage.orderBooks['v71'],
	v85Dev: devStorage.orderBooks['v85'],
}

export const limitOrders = {
	name: 'OrderBook.LimitOrders',
	v71: productionStorage.limitOrders['v71'],
	v71Stage: stageStorage.limitOrders['v71'],
	v71Test: testStorage.limitOrders['v71'],
	v85Dev: devStorage.limitOrders['v85'],
}

export const bids = {
	name: 'OrderBook.Bids',
	v71: productionStorage.bids['v71'],
	v71Stage: stageStorage.bids['v71'],
	v71Test: testStorage.bids['v71'],
	v85Dev: devStorage.bids['v85'],
}

export const asks = {
	name: 'OrderBook.Asks',
	v71: productionStorage.asks['v71'],
	v71Stage: stageStorage.asks['v71'],
	v71Test: testStorage.asks['v71'],
	v85Dev: devStorage.asks['v85'],
}

export const aggregatedBids = {
	name: 'OrderBook.AggregatedBids',
	v71: productionStorage.aggregatedBids['v71'],
	v71Stage: stageStorage.aggregatedBids['v71'],
	v71Test: testStorage.aggregatedBids['v71'],
	v85Dev: devStorage.aggregatedBids['v85'],
}

export const aggregatedAsks = {
	name: 'OrderBook.AggregatedAsks',
	v71: productionStorage.aggregatedAsks['v71'],
	v71Stage: stageStorage.aggregatedAsks['v71'],
	v71Test: testStorage.aggregatedAsks['v71'],
	v85Dev: devStorage.aggregatedAsks['v85'],
}

export const userLimitOrders = {
	name: 'OrderBook.UserLimitOrders',
	v71: productionStorage.userLimitOrders['v71'],
	v71Stage: stageStorage.userLimitOrders['v71'],
	v71Test: testStorage.userLimitOrders['v71'],
	v85Dev: devStorage.userLimitOrders['v85'],
}

export const expirationsAgenda = {
	name: 'OrderBook.ExpirationsAgenda',
	v71: productionStorage.expirationsAgenda['v71'],
	v71Stage: stageStorage.expirationsAgenda['v71'],
	v71Test: testStorage.expirationsAgenda['v71'],
	v85Dev: devStorage.expirationsAgenda['v85'],
}

export const alignmentCursor = {
	name: 'OrderBook.AlignmentCursor',
	v71: productionStorage.alignmentCursor['v71'],
	v71Stage: stageStorage.alignmentCursor['v71'],
	v71Test: testStorage.alignmentCursor['v71'],
	v85Dev: devStorage.alignmentCursor['v85'],
}

export const incompleteExpirationsSince = {
	name: 'OrderBook.IncompleteExpirationsSince',
	v71: productionStorage.incompleteExpirationsSince['v71'],
	v71Stage: stageStorage.incompleteExpirationsSince['v71'],
	v71Test: testStorage.incompleteExpirationsSince['v71'],
	v85Dev: devStorage.incompleteExpirationsSince['v85'],
}
