import * as productionCalls from '../../production/referrals/calls'
import * as stageCalls from '../../stage/referrals/calls'
import * as testCalls from '../../test/referrals/calls'
import * as devCalls from '../../dev/referrals/calls'


export const reserve = {
	name: 'Referrals.reserve',
	v22: productionCalls.reserve['v22'],
	v22Stage: stageCalls.reserve['v22'],
	v22Test: testCalls.reserve['v22'],
	v85Dev: devCalls.reserve['v85'],
}

export const unreserve = {
	name: 'Referrals.unreserve',
	v22: productionCalls.unreserve['v22'],
	v22Stage: stageCalls.unreserve['v22'],
	v22Test: testCalls.unreserve['v22'],
	v85Dev: devCalls.unreserve['v85'],
}

export const setReferrer = {
	name: 'Referrals.set_referrer',
	v22: productionCalls.setReferrer['v22'],
	v22Stage: stageCalls.setReferrer['v22'],
	v22Test: testCalls.setReferrer['v22'],
	v85Dev: devCalls.setReferrer['v85'],
}
