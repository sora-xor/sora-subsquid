import * as productionCalls from '../../production/ceres-governance-platform/calls'
import * as stageCalls from '../../stage/ceres-governance-platform/calls'
import * as testCalls from '../../test/ceres-governance-platform/calls'
import * as devCalls from '../../dev/ceres-governance-platform/calls'


export const vote = {
	name: 'CeresGovernancePlatform.vote',
	v26: productionCalls.vote['v26'],
	v26Stage: stageCalls.vote['v26'],
	v26Test: testCalls.vote['v26'],
	v85Dev: devCalls.vote['v85'],
}

export const createPoll = {
	name: 'CeresGovernancePlatform.create_poll',
	v26: productionCalls.createPoll['v26'],
	v37: productionCalls.createPoll['v37'],
	v70: productionCalls.createPoll['v70'],
	v26Stage: stageCalls.createPoll['v26'],
	v37Stage: stageCalls.createPoll['v37'],
	v70Stage: stageCalls.createPoll['v70'],
	v26Test: testCalls.createPoll['v26'],
	v37Test: testCalls.createPoll['v37'],
	v70Test: testCalls.createPoll['v70'],
	v85Dev: devCalls.createPoll['v85'],
}

export const withdraw = {
	name: 'CeresGovernancePlatform.withdraw',
	v26: productionCalls.withdraw['v26'],
	v26Stage: stageCalls.withdraw['v26'],
	v26Test: testCalls.withdraw['v26'],
	v85Dev: devCalls.withdraw['v85'],
}
