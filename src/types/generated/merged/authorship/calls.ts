import * as productionCalls from '../../production/authorship/calls'
import * as stageCalls from '../../stage/authorship/calls'
import * as testCalls from '../../test/authorship/calls'


export const setUncles = {
	name: 'Authorship.set_uncles',
	v1: productionCalls.setUncles['v1'],
	v42: productionCalls.setUncles['v42'],
	v1Stage: stageCalls.setUncles['v1'],
	v42Stage: stageCalls.setUncles['v42'],
	v1Test: testCalls.setUncles['v1'],
	v42Test: testCalls.setUncles['v42'],
}
