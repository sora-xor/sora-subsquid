import * as productionCalls from '../../production/order-book/calls'
import * as stageCalls from '../../stage/order-book/calls'
import * as testCalls from '../../test/order-book/calls'
import * as devCalls from '../../dev/order-book/calls'


export const createOrderbook = {
	name: 'OrderBook.create_orderbook',
	v71: productionCalls.createOrderbook['v71'],
	v71Stage: stageCalls.createOrderbook['v71'],
	v71Test: testCalls.createOrderbook['v71'],
	v85Dev: devCalls.createOrderbook['v85'],
}

export const deleteOrderbook = {
	name: 'OrderBook.delete_orderbook',
	v71: productionCalls.deleteOrderbook['v71'],
	v71Stage: stageCalls.deleteOrderbook['v71'],
	v71Test: testCalls.deleteOrderbook['v71'],
	v85Dev: devCalls.deleteOrderbook['v85'],
}

export const updateOrderbook = {
	name: 'OrderBook.update_orderbook',
	v71: productionCalls.updateOrderbook['v71'],
	v71Stage: stageCalls.updateOrderbook['v71'],
	v71Test: testCalls.updateOrderbook['v71'],
	v85Dev: devCalls.updateOrderbook['v85'],
}

export const changeOrderbookStatus = {
	name: 'OrderBook.change_orderbook_status',
	v71: productionCalls.changeOrderbookStatus['v71'],
	v71Stage: stageCalls.changeOrderbookStatus['v71'],
	v71Test: testCalls.changeOrderbookStatus['v71'],
	v85Dev: devCalls.changeOrderbookStatus['v85'],
}

export const placeLimitOrder = {
	name: 'OrderBook.place_limit_order',
	v71: productionCalls.placeLimitOrder['v71'],
	v71Stage: stageCalls.placeLimitOrder['v71'],
	v71Test: testCalls.placeLimitOrder['v71'],
	v85Dev: devCalls.placeLimitOrder['v85'],
}

export const cancelLimitOrder = {
	name: 'OrderBook.cancel_limit_order',
	v71: productionCalls.cancelLimitOrder['v71'],
	v71Stage: stageCalls.cancelLimitOrder['v71'],
	v71Test: testCalls.cancelLimitOrder['v71'],
	v85Dev: devCalls.cancelLimitOrder['v85'],
}

export const cancelLimitOrdersBatch = {
	name: 'OrderBook.cancel_limit_orders_batch',
	v71: productionCalls.cancelLimitOrdersBatch['v71'],
	v71Stage: stageCalls.cancelLimitOrdersBatch['v71'],
	v71Test: testCalls.cancelLimitOrdersBatch['v71'],
	v85Dev: devCalls.cancelLimitOrdersBatch['v85'],
}

export const executeMarketOrder = {
	name: 'OrderBook.execute_market_order',
	v71: productionCalls.executeMarketOrder['v71'],
	v71Stage: stageCalls.executeMarketOrder['v71'],
	v71Test: testCalls.executeMarketOrder['v71'],
	v85Dev: devCalls.executeMarketOrder['v85'],
}
