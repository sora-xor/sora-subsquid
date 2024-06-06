import * as productionStorage from '../../production/demeter-farming-platform/storage'
import * as stageStorage from '../../stage/demeter-farming-platform/storage'
import * as testStorage from '../../test/demeter-farming-platform/storage'
import * as devStorage from '../../dev/demeter-farming-platform/storage'


export const tokenInfos = {
	name: 'DemeterFarmingPlatform.TokenInfos',
	v33: productionStorage.tokenInfos['v33'],
	v42: productionStorage.tokenInfos['v42'],
	v33Stage: stageStorage.tokenInfos['v33'],
	v42Stage: stageStorage.tokenInfos['v42'],
	v33Test: testStorage.tokenInfos['v33'],
	v42Test: testStorage.tokenInfos['v42'],
	v85Dev: devStorage.tokenInfos['v85'],
}

export const userInfos = {
	name: 'DemeterFarmingPlatform.UserInfos',
	v33: productionStorage.userInfos['v33'],
	v42: productionStorage.userInfos['v42'],
	v43: productionStorage.userInfos['v43'],
	v33Stage: stageStorage.userInfos['v33'],
	v42Stage: stageStorage.userInfos['v42'],
	v43Stage: stageStorage.userInfos['v43'],
	v33Test: testStorage.userInfos['v33'],
	v42Test: testStorage.userInfos['v42'],
	v43Test: testStorage.userInfos['v43'],
	v85Dev: devStorage.userInfos['v85'],
}

export const pools = {
	name: 'DemeterFarmingPlatform.Pools',
	v33: productionStorage.pools['v33'],
	v42: productionStorage.pools['v42'],
	v43: productionStorage.pools['v43'],
	v33Stage: stageStorage.pools['v33'],
	v42Stage: stageStorage.pools['v42'],
	v43Stage: stageStorage.pools['v43'],
	v33Test: testStorage.pools['v33'],
	v42Test: testStorage.pools['v42'],
	v43Test: testStorage.pools['v43'],
	v85Dev: devStorage.pools['v85'],
}

export const authorityAccount = {
	name: 'DemeterFarmingPlatform.AuthorityAccount',
	v33: productionStorage.authorityAccount['v33'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v33Test: testStorage.authorityAccount['v33'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const feeAccount = {
	name: 'DemeterFarmingPlatform.FeeAccount',
	v33: productionStorage.feeAccount['v33'],
	v33Stage: stageStorage.feeAccount['v33'],
	v33Test: testStorage.feeAccount['v33'],
	v85Dev: devStorage.feeAccount['v85'],
}

export const palletStorageVersion = {
	name: 'DemeterFarmingPlatform.PalletStorageVersion',
	v43: productionStorage.palletStorageVersion['v43'],
	v43Stage: stageStorage.palletStorageVersion['v43'],
	v43Test: testStorage.palletStorageVersion['v43'],
	v85Dev: devStorage.palletStorageVersion['v85'],
}
