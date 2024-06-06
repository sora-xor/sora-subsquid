import * as productionCalls from '../../production/hermes-governance-platform/calls'
import * as stageCalls from '../../stage/hermes-governance-platform/calls'
import * as testCalls from '../../test/hermes-governance-platform/calls'
import * as devCalls from '../../dev/hermes-governance-platform/calls'


export const vote = {
	name: 'HermesGovernancePlatform.vote',
	v47: productionCalls.vote['v47'],
	v57: productionCalls.vote['v57'],
	v47Stage: stageCalls.vote['v47'],
	v57Stage: stageCalls.vote['v57'],
	v47Test: testCalls.vote['v47'],
	v57Test: testCalls.vote['v57'],
	v85Dev: devCalls.vote['v85'],
}

export const createPoll = {
	name: 'HermesGovernancePlatform.create_poll',
	v47: productionCalls.createPoll['v47'],
	v57: productionCalls.createPoll['v57'],
	v47Stage: stageCalls.createPoll['v47'],
	v57Stage: stageCalls.createPoll['v57'],
	v47Test: testCalls.createPoll['v47'],
	v57Test: testCalls.createPoll['v57'],
	v85Dev: devCalls.createPoll['v85'],
}

export const withdrawFundsVoter = {
	name: 'HermesGovernancePlatform.withdraw_funds_voter',
	v47: productionCalls.withdrawFundsVoter['v47'],
	v47Stage: stageCalls.withdrawFundsVoter['v47'],
	v47Test: testCalls.withdrawFundsVoter['v47'],
	v85Dev: devCalls.withdrawFundsVoter['v85'],
}

export const withdrawFundsCreator = {
	name: 'HermesGovernancePlatform.withdraw_funds_creator',
	v47: productionCalls.withdrawFundsCreator['v47'],
	v47Stage: stageCalls.withdrawFundsCreator['v47'],
	v47Test: testCalls.withdrawFundsCreator['v47'],
	v85Dev: devCalls.withdrawFundsCreator['v85'],
}

export const changeMinHermesForVoting = {
	name: 'HermesGovernancePlatform.change_min_hermes_for_voting',
	v47: productionCalls.changeMinHermesForVoting['v47'],
	v47Stage: stageCalls.changeMinHermesForVoting['v47'],
	v47Test: testCalls.changeMinHermesForVoting['v47'],
	v85Dev: devCalls.changeMinHermesForVoting['v85'],
}

export const changeMinHermesForCreatingPoll = {
	name: 'HermesGovernancePlatform.change_min_hermes_for_creating_poll',
	v47: productionCalls.changeMinHermesForCreatingPoll['v47'],
	v47Stage: stageCalls.changeMinHermesForCreatingPoll['v47'],
	v47Test: testCalls.changeMinHermesForCreatingPoll['v47'],
	v85Dev: devCalls.changeMinHermesForCreatingPoll['v85'],
}
