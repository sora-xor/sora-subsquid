import * as productionStorage from '../../production/ceres-liquidity-locker/storage'
import * as stageStorage from '../../stage/ceres-liquidity-locker/storage'
import * as testStorage from '../../test/ceres-liquidity-locker/storage'
import * as devStorage from '../../dev/ceres-liquidity-locker/storage'


export const feesOptionOneAccount = {
	name: 'CeresLiquidityLocker.FeesOptionOneAccount',
	v22: productionStorage.feesOptionOneAccount['v22'],
	v22Stage: stageStorage.feesOptionOneAccount['v22'],
	v22Test: testStorage.feesOptionOneAccount['v22'],
	v85Dev: devStorage.feesOptionOneAccount['v85'],
}

export const feesOptionTwoAccount = {
	name: 'CeresLiquidityLocker.FeesOptionTwoAccount',
	v22: productionStorage.feesOptionTwoAccount['v22'],
	v22Stage: stageStorage.feesOptionTwoAccount['v22'],
	v22Test: testStorage.feesOptionTwoAccount['v22'],
	v85Dev: devStorage.feesOptionTwoAccount['v85'],
}

export const feesOptionTwoCeresAmount = {
	name: 'CeresLiquidityLocker.FeesOptionTwoCeresAmount',
	v22: productionStorage.feesOptionTwoCeresAmount['v22'],
	v22Stage: stageStorage.feesOptionTwoCeresAmount['v22'],
	v22Test: testStorage.feesOptionTwoCeresAmount['v22'],
	v85Dev: devStorage.feesOptionTwoCeresAmount['v85'],
}

export const authorityAccount = {
	name: 'CeresLiquidityLocker.AuthorityAccount',
	v22: productionStorage.authorityAccount['v22'],
	v22Stage: stageStorage.authorityAccount['v22'],
	v22Test: testStorage.authorityAccount['v22'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const lockerData = {
	name: 'CeresLiquidityLocker.LockerData',
	v22: productionStorage.lockerData['v22'],
	v37: productionStorage.lockerData['v37'],
	v42: productionStorage.lockerData['v42'],
	v22Stage: stageStorage.lockerData['v22'],
	v37Stage: stageStorage.lockerData['v37'],
	v42Stage: stageStorage.lockerData['v42'],
	v22Test: testStorage.lockerData['v22'],
	v37Test: testStorage.lockerData['v37'],
	v42Test: testStorage.lockerData['v42'],
	v85Dev: devStorage.lockerData['v85'],
}

export const palletStorageVersion = {
	name: 'CeresLiquidityLocker.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v85Dev: devStorage.palletStorageVersion['v85'],
}
