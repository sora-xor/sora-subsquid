import * as productionCalls from '../../production/trading-pair/calls'
import * as stageCalls from '../../stage/trading-pair/calls'
import * as testCalls from '../../test/trading-pair/calls'
import * as devCalls from '../../dev/trading-pair/calls'


export const register = {
	name: 'TradingPair.register',
	v1: productionCalls.register['v1'],
	v42: productionCalls.register['v42'],
	v1Stage: stageCalls.register['v1'],
	v42Stage: stageCalls.register['v42'],
	v1Test: testCalls.register['v1'],
	v42Test: testCalls.register['v42'],
	v85Dev: devCalls.register['v85'],
}
