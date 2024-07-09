import * as productionStorage from '../../production/hermes-governance-platform/storage'
import * as stageStorage from '../../stage/hermes-governance-platform/storage'
import * as testStorage from '../../test/hermes-governance-platform/storage'
import * as devStorage from '../../dev/hermes-governance-platform/storage'


export const hermesVotings = {
	name: 'HermesGovernancePlatform.HermesVotings',
	v47: productionStorage.hermesVotings['v47'],
	v57: productionStorage.hermesVotings['v57'],
	v47Stage: stageStorage.hermesVotings['v47'],
	v57Stage: stageStorage.hermesVotings['v57'],
	v47Test: testStorage.hermesVotings['v47'],
	v57Test: testStorage.hermesVotings['v57'],
	v85Dev: devStorage.hermesVotings['v85'],
}

export const hermesPollData = {
	name: 'HermesGovernancePlatform.HermesPollData',
	v47: productionStorage.hermesPollData['v47'],
	v57: productionStorage.hermesPollData['v57'],
	v47Stage: stageStorage.hermesPollData['v47'],
	v57Stage: stageStorage.hermesPollData['v57'],
	v47Test: testStorage.hermesPollData['v47'],
	v57Test: testStorage.hermesPollData['v57'],
	v85Dev: devStorage.hermesPollData['v85'],
}

export const minimumHermesVotingAmount = {
	name: 'HermesGovernancePlatform.MinimumHermesVotingAmount',
	v47: productionStorage.minimumHermesVotingAmount['v47'],
	v47Stage: stageStorage.minimumHermesVotingAmount['v47'],
	v47Test: testStorage.minimumHermesVotingAmount['v47'],
	v85Dev: devStorage.minimumHermesVotingAmount['v85'],
}

export const minimumHermesAmountForCreatingPoll = {
	name: 'HermesGovernancePlatform.MinimumHermesAmountForCreatingPoll',
	v47: productionStorage.minimumHermesAmountForCreatingPoll['v47'],
	v47Stage: stageStorage.minimumHermesAmountForCreatingPoll['v47'],
	v47Test: testStorage.minimumHermesAmountForCreatingPoll['v47'],
	v85Dev: devStorage.minimumHermesAmountForCreatingPoll['v85'],
}

export const authorityAccount = {
	name: 'HermesGovernancePlatform.AuthorityAccount',
	v47: productionStorage.authorityAccount['v47'],
	v47Stage: stageStorage.authorityAccount['v47'],
	v47Test: testStorage.authorityAccount['v47'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const palletStorageVersion = {
	name: 'HermesGovernancePlatform.PalletStorageVersion',
	v57: productionStorage.palletStorageVersion['v57'],
	v57Stage: stageStorage.palletStorageVersion['v57'],
	v57Test: testStorage.palletStorageVersion['v57'],
	v85Dev: devStorage.palletStorageVersion['v85'],
}
