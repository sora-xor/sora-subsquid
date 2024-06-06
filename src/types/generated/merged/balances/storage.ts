import * as productionStorage from '../../production/balances/storage'
import * as stageStorage from '../../stage/balances/storage'
import * as testStorage from '../../test/balances/storage'
import * as devStorage from '../../dev/balances/storage'


export const totalIssuance = {
	name: 'Balances.TotalIssuance',
	v1: productionStorage.totalIssuance['v1'],
	v1Stage: stageStorage.totalIssuance['v1'],
	v1Test: testStorage.totalIssuance['v1'],
	v85Dev: devStorage.totalIssuance['v85'],
}

export const account = {
	name: 'Balances.Account',
	v1: productionStorage.account['v1'],
	v1Stage: stageStorage.account['v1'],
	v1Test: testStorage.account['v1'],
	v85Dev: devStorage.account['v85'],
}

export const locks = {
	name: 'Balances.Locks',
	v1: productionStorage.locks['v1'],
	v1Stage: stageStorage.locks['v1'],
	v1Test: testStorage.locks['v1'],
	v85Dev: devStorage.locks['v85'],
}

export const storageVersion = {
	name: 'Balances.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v1Stage: stageStorage.storageVersion['v1'],
	v42Stage: stageStorage.storageVersion['v42'],
	v1Test: testStorage.storageVersion['v1'],
	v42Test: testStorage.storageVersion['v42'],
}

export const reserves = {
	name: 'Balances.Reserves',
	v42: productionStorage.reserves['v42'],
	v42Stage: stageStorage.reserves['v42'],
	v42Test: testStorage.reserves['v42'],
	v85Dev: devStorage.reserves['v85'],
}

export const inactiveIssuance = {
	name: 'Balances.InactiveIssuance',
	v53: productionStorage.inactiveIssuance['v53'],
	v53Stage: stageStorage.inactiveIssuance['v53'],
	v53Test: testStorage.inactiveIssuance['v53'],
	v85Dev: devStorage.inactiveIssuance['v85'],
}
