import * as productionCalls from '../../production/session/calls'
import * as stageCalls from '../../stage/session/calls'
import * as testCalls from '../../test/session/calls'
import * as devCalls from '../../dev/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	v1: productionCalls.setKeys['v1'],
	v42: productionCalls.setKeys['v42'],
	v1Stage: stageCalls.setKeys['v1'],
	v42Stage: stageCalls.setKeys['v42'],
	v1Test: testCalls.setKeys['v1'],
	v42Test: testCalls.setKeys['v42'],
	v85Dev: devCalls.setKeys['v85'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	v1: productionCalls.purgeKeys['v1'],
	v1Stage: stageCalls.purgeKeys['v1'],
	v1Test: testCalls.purgeKeys['v1'],
	v85Dev: devCalls.purgeKeys['v85'],
}
