import * as productionStorage from '../../production/ceres-governance-platform/storage'
import * as stageStorage from '../../stage/ceres-governance-platform/storage'
import * as testStorage from '../../test/ceres-governance-platform/storage'
import * as devStorage from '../../dev/ceres-governance-platform/storage'


export const voting = {
	name: 'CeresGovernancePlatform.Voting',
	v26: productionStorage.voting['v26'],
	v70: productionStorage.voting['v70'],
	v26Stage: stageStorage.voting['v26'],
	v70Stage: stageStorage.voting['v70'],
	v26Test: testStorage.voting['v26'],
	v70Test: testStorage.voting['v70'],
	v85Dev: devStorage.voting['v85'],
}

export const pollData = {
	name: 'CeresGovernancePlatform.PollData',
	v26: productionStorage.pollData['v26'],
	v37: productionStorage.pollData['v37'],
	v70: productionStorage.pollData['v70'],
	v26Stage: stageStorage.pollData['v26'],
	v37Stage: stageStorage.pollData['v37'],
	v70Stage: stageStorage.pollData['v70'],
	v26Test: testStorage.pollData['v26'],
	v37Test: testStorage.pollData['v37'],
	v70Test: testStorage.pollData['v70'],
	v85Dev: devStorage.pollData['v85'],
}

export const palletStorageVersion = {
	name: 'CeresGovernancePlatform.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v70: productionStorage.palletStorageVersion['v70'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v70Stage: stageStorage.palletStorageVersion['v70'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v70Test: testStorage.palletStorageVersion['v70'],
	v85Dev: devStorage.palletStorageVersion['v85'],
}

export const authorityAccount = {
	name: 'CeresGovernancePlatform.AuthorityAccount',
	v70: productionStorage.authorityAccount['v70'],
	v70Stage: stageStorage.authorityAccount['v70'],
	v70Test: testStorage.authorityAccount['v70'],
	v85Dev: devStorage.authorityAccount['v85'],
}
