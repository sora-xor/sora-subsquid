import * as productionCalls from '../../production/balances/calls'
import * as stageCalls from '../../stage/balances/calls'
import * as testCalls from '../../test/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	v1: productionCalls.transfer['v1'],
	v1Stage: stageCalls.transfer['v1'],
	v1Test: testCalls.transfer['v1'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	v1: productionCalls.setBalance['v1'],
	v1Stage: stageCalls.setBalance['v1'],
	v1Test: testCalls.setBalance['v1'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	v1: productionCalls.forceTransfer['v1'],
	v1Stage: stageCalls.forceTransfer['v1'],
	v1Test: testCalls.forceTransfer['v1'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	v1: productionCalls.transferKeepAlive['v1'],
	v1Stage: stageCalls.transferKeepAlive['v1'],
	v1Test: testCalls.transferKeepAlive['v1'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	v42: productionCalls.transferAll['v42'],
	v42Stage: stageCalls.transferAll['v42'],
	v42Test: testCalls.transferAll['v42'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	v42: productionCalls.forceUnreserve['v42'],
	v42Stage: stageCalls.forceUnreserve['v42'],
	v42Test: testCalls.forceUnreserve['v42'],
}
