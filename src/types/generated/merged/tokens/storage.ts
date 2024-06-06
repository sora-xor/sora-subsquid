import * as productionStorage from '../../production/tokens/storage'
import * as stageStorage from '../../stage/tokens/storage'
import * as testStorage from '../../test/tokens/storage'
import * as devStorage from '../../dev/tokens/storage'


export const totalIssuance = {
	name: 'Tokens.TotalIssuance',
	v1: productionStorage.totalIssuance['v1'],
	v42: productionStorage.totalIssuance['v42'],
	v1Stage: stageStorage.totalIssuance['v1'],
	v42Stage: stageStorage.totalIssuance['v42'],
	v1Test: testStorage.totalIssuance['v1'],
	v42Test: testStorage.totalIssuance['v42'],
	v85Dev: devStorage.totalIssuance['v85'],
}

export const locks = {
	name: 'Tokens.Locks',
	v1: productionStorage.locks['v1'],
	v42: productionStorage.locks['v42'],
	v1Stage: stageStorage.locks['v1'],
	v42Stage: stageStorage.locks['v42'],
	v1Test: testStorage.locks['v1'],
	v42Test: testStorage.locks['v42'],
	v85Dev: devStorage.locks['v85'],
}

export const accounts = {
	name: 'Tokens.Accounts',
	v1: productionStorage.accounts['v1'],
	v42: productionStorage.accounts['v42'],
	v1Stage: stageStorage.accounts['v1'],
	v42Stage: stageStorage.accounts['v42'],
	v1Test: testStorage.accounts['v1'],
	v42Test: testStorage.accounts['v42'],
	v85Dev: devStorage.accounts['v85'],
}

export const reserves = {
	name: 'Tokens.Reserves',
	v42: productionStorage.reserves['v42'],
	v42Stage: stageStorage.reserves['v42'],
	v42Test: testStorage.reserves['v42'],
	v85Dev: devStorage.reserves['v85'],
}
