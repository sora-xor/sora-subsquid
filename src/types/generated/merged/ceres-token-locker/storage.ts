import * as productionStorage from '../../production/ceres-token-locker/storage'
import * as stageStorage from '../../stage/ceres-token-locker/storage'
import * as testStorage from '../../test/ceres-token-locker/storage'
import * as devStorage from '../../dev/ceres-token-locker/storage'


export const feesAccount = {
	name: 'CeresTokenLocker.FeesAccount',
	v26: productionStorage.feesAccount['v26'],
	v26Stage: stageStorage.feesAccount['v26'],
	v26Test: testStorage.feesAccount['v26'],
	v85Dev: devStorage.feesAccount['v85'],
}

export const authorityAccount = {
	name: 'CeresTokenLocker.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v26Stage: stageStorage.authorityAccount['v26'],
	v26Test: testStorage.authorityAccount['v26'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const feeAmount = {
	name: 'CeresTokenLocker.FeeAmount',
	v26: productionStorage.feeAmount['v26'],
	v26Stage: stageStorage.feeAmount['v26'],
	v26Test: testStorage.feeAmount['v26'],
	v85Dev: devStorage.feeAmount['v85'],
}

export const tokenLockerData = {
	name: 'CeresTokenLocker.TokenLockerData',
	v26: productionStorage.tokenLockerData['v26'],
	v37: productionStorage.tokenLockerData['v37'],
	v42: productionStorage.tokenLockerData['v42'],
	v26Stage: stageStorage.tokenLockerData['v26'],
	v37Stage: stageStorage.tokenLockerData['v37'],
	v42Stage: stageStorage.tokenLockerData['v42'],
	v26Test: testStorage.tokenLockerData['v26'],
	v37Test: testStorage.tokenLockerData['v37'],
	v42Test: testStorage.tokenLockerData['v42'],
	v85Dev: devStorage.tokenLockerData['v85'],
}

export const palletStorageVersion = {
	name: 'CeresTokenLocker.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v85Dev: devStorage.palletStorageVersion['v85'],
}
