import * as productionCalls from '../../production/band/calls'
import * as stageCalls from '../../stage/band/calls'
import * as testCalls from '../../test/band/calls'
import * as devCalls from '../../dev/band/calls'


export const relay = {
	name: 'Band.relay',
	v45: productionCalls.relay['v45'],
	v45Stage: stageCalls.relay['v45'],
	v45Test: testCalls.relay['v45'],
	v85Dev: devCalls.relay['v85'],
}

export const forceRelay = {
	name: 'Band.force_relay',
	v45: productionCalls.forceRelay['v45'],
	v45Stage: stageCalls.forceRelay['v45'],
	v45Test: testCalls.forceRelay['v45'],
	v85Dev: devCalls.forceRelay['v85'],
}

export const addRelayers = {
	name: 'Band.add_relayers',
	v45: productionCalls.addRelayers['v45'],
	v45Stage: stageCalls.addRelayers['v45'],
	v45Test: testCalls.addRelayers['v45'],
	v85Dev: devCalls.addRelayers['v85'],
}

export const removeRelayers = {
	name: 'Band.remove_relayers',
	v45: productionCalls.removeRelayers['v45'],
	v45Stage: stageCalls.removeRelayers['v45'],
	v45Test: testCalls.removeRelayers['v45'],
	v85Dev: devCalls.removeRelayers['v85'],
}

export const setDynamicFeeParameters = {
	name: 'Band.set_dynamic_fee_parameters',
	v59: productionCalls.setDynamicFeeParameters['v59'],
	v59Stage: stageCalls.setDynamicFeeParameters['v59'],
	v59Test: testCalls.setDynamicFeeParameters['v59'],
	v85Dev: devCalls.setDynamicFeeParameters['v85'],
}
