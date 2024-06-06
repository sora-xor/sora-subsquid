import * as productionCalls from '../../production/sudo/calls'
import * as stageCalls from '../../stage/sudo/calls'
import * as testCalls from '../../test/sudo/calls'
import * as devCalls from '../../dev/sudo/calls'


export const sudo = {
	name: 'Sudo.sudo',
	v22: productionCalls.sudo['v22'],
	v22Stage: stageCalls.sudo['v22'],
	v22Test: testCalls.sudo['v22'],
	v85Dev: devCalls.sudo['v85'],
}

export const sudoUncheckedWeight = {
	name: 'Sudo.sudo_unchecked_weight',
	v22: productionCalls.sudoUncheckedWeight['v22'],
	v22Stage: stageCalls.sudoUncheckedWeight['v22'],
	v22Test: testCalls.sudoUncheckedWeight['v22'],
	v85Dev: devCalls.sudoUncheckedWeight['v85'],
}

export const setKey = {
	name: 'Sudo.set_key',
	v22: productionCalls.setKey['v22'],
	v22Stage: stageCalls.setKey['v22'],
	v22Test: testCalls.setKey['v22'],
	v85Dev: devCalls.setKey['v85'],
}

export const sudoAs = {
	name: 'Sudo.sudo_as',
	v22: productionCalls.sudoAs['v22'],
	v22Stage: stageCalls.sudoAs['v22'],
	v22Test: testCalls.sudoAs['v22'],
	v85Dev: devCalls.sudoAs['v85'],
}
