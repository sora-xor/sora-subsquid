import * as productionCalls from '../../production/technical-membership/calls'
import * as stageCalls from '../../stage/technical-membership/calls'
import * as testCalls from '../../test/technical-membership/calls'
import * as devCalls from '../../dev/technical-membership/calls'


export const addMember = {
	name: 'TechnicalMembership.add_member',
	v1: productionCalls.addMember['v1'],
	v1Stage: stageCalls.addMember['v1'],
	v1Test: testCalls.addMember['v1'],
	v85Dev: devCalls.addMember['v85'],
}

export const removeMember = {
	name: 'TechnicalMembership.remove_member',
	v1: productionCalls.removeMember['v1'],
	v1Stage: stageCalls.removeMember['v1'],
	v1Test: testCalls.removeMember['v1'],
	v85Dev: devCalls.removeMember['v85'],
}

export const swapMember = {
	name: 'TechnicalMembership.swap_member',
	v1: productionCalls.swapMember['v1'],
	v1Stage: stageCalls.swapMember['v1'],
	v1Test: testCalls.swapMember['v1'],
	v85Dev: devCalls.swapMember['v85'],
}

export const resetMembers = {
	name: 'TechnicalMembership.reset_members',
	v1: productionCalls.resetMembers['v1'],
	v1Stage: stageCalls.resetMembers['v1'],
	v1Test: testCalls.resetMembers['v1'],
	v85Dev: devCalls.resetMembers['v85'],
}

export const changeKey = {
	name: 'TechnicalMembership.change_key',
	v1: productionCalls.changeKey['v1'],
	v1Stage: stageCalls.changeKey['v1'],
	v1Test: testCalls.changeKey['v1'],
	v85Dev: devCalls.changeKey['v85'],
}

export const setPrime = {
	name: 'TechnicalMembership.set_prime',
	v1: productionCalls.setPrime['v1'],
	v1Stage: stageCalls.setPrime['v1'],
	v1Test: testCalls.setPrime['v1'],
	v85Dev: devCalls.setPrime['v85'],
}

export const clearPrime = {
	name: 'TechnicalMembership.clear_prime',
	v1: productionCalls.clearPrime['v1'],
	v1Stage: stageCalls.clearPrime['v1'],
	v1Test: testCalls.clearPrime['v1'],
	v85Dev: devCalls.clearPrime['v85'],
}
