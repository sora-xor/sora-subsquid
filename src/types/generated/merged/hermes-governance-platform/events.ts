import * as productionEvents from '../../production/hermes-governance-platform/events'
import * as stageEvents from '../../stage/hermes-governance-platform/events'
import * as testEvents from '../../test/hermes-governance-platform/events'
import * as devEvents from '../../dev/hermes-governance-platform/events'


export const voted = {
	name: 'HermesGovernancePlatform.Voted',
	v47: productionEvents.voted['v47'],
	v57: productionEvents.voted['v57'],
	v47Stage: stageEvents.voted['v47'],
	v57Stage: stageEvents.voted['v57'],
	v47Test: testEvents.voted['v47'],
	v57Test: testEvents.voted['v57'],
	v85Dev: devEvents.voted['v85'],
}

export const created = {
	name: 'HermesGovernancePlatform.Created',
	v47: productionEvents.created['v47'],
	v57: productionEvents.created['v57'],
	v47Stage: stageEvents.created['v47'],
	v57Stage: stageEvents.created['v57'],
	v47Test: testEvents.created['v47'],
	v57Test: testEvents.created['v57'],
	v85Dev: devEvents.created['v85'],
}

export const voterFundsWithdrawn = {
	name: 'HermesGovernancePlatform.VoterFundsWithdrawn',
	v47: productionEvents.voterFundsWithdrawn['v47'],
	v47Stage: stageEvents.voterFundsWithdrawn['v47'],
	v47Test: testEvents.voterFundsWithdrawn['v47'],
	v85Dev: devEvents.voterFundsWithdrawn['v85'],
}

export const creatorFundsWithdrawn = {
	name: 'HermesGovernancePlatform.CreatorFundsWithdrawn',
	v47: productionEvents.creatorFundsWithdrawn['v47'],
	v47Stage: stageEvents.creatorFundsWithdrawn['v47'],
	v47Test: testEvents.creatorFundsWithdrawn['v47'],
	v85Dev: devEvents.creatorFundsWithdrawn['v85'],
}

export const minimumHermesForVotingChanged = {
	name: 'HermesGovernancePlatform.MinimumHermesForVotingChanged',
	v47: productionEvents.minimumHermesForVotingChanged['v47'],
	v47Stage: stageEvents.minimumHermesForVotingChanged['v47'],
	v47Test: testEvents.minimumHermesForVotingChanged['v47'],
	v85Dev: devEvents.minimumHermesForVotingChanged['v85'],
}

export const minimumHermesForCreatingPollChanged = {
	name: 'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged',
	v47: productionEvents.minimumHermesForCreatingPollChanged['v47'],
	v47Stage: stageEvents.minimumHermesForCreatingPollChanged['v47'],
	v47Test: testEvents.minimumHermesForCreatingPollChanged['v47'],
	v85Dev: devEvents.minimumHermesForCreatingPollChanged['v85'],
}
