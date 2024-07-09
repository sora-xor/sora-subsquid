import * as productionStorage from '../../production/pool-xyk/storage'
import * as stageStorage from '../../stage/pool-xyk/storage'
import * as testStorage from '../../test/pool-xyk/storage'
import * as devStorage from '../../dev/pool-xyk/storage'


export const reserves = {
	name: 'PoolXyk.Reserves',
	v1: productionStorage.reserves['v1'],
	v42: productionStorage.reserves['v42'],
	v1Stage: stageStorage.reserves['v1'],
	v42Stage: stageStorage.reserves['v42'],
	v1Test: testStorage.reserves['v1'],
	v42Test: testStorage.reserves['v42'],
	v85Dev: devStorage.reserves['v85'],
}

export const markerTokensIndex = {
	name: 'PoolXyk.MarkerTokensIndex',
	v1: productionStorage.markerTokensIndex['v1'],
	v1Stage: stageStorage.markerTokensIndex['v1'],
	v1Test: testStorage.markerTokensIndex['v1'],
}

export const properties = {
	name: 'PoolXyk.Properties',
	v1: productionStorage.properties['v1'],
	v7: productionStorage.properties['v7'],
	v42: productionStorage.properties['v42'],
	v1Stage: stageStorage.properties['v1'],
	v7Stage: stageStorage.properties['v7'],
	v42Stage: stageStorage.properties['v42'],
	v1Test: testStorage.properties['v1'],
	v7Test: testStorage.properties['v7'],
	v42Test: testStorage.properties['v42'],
	v85Dev: devStorage.properties['v85'],
}

export const poolProviders = {
	name: 'PoolXyk.PoolProviders',
	v7: productionStorage.poolProviders['v7'],
	v7Stage: stageStorage.poolProviders['v7'],
	v7Test: testStorage.poolProviders['v7'],
	v85Dev: devStorage.poolProviders['v85'],
}

export const totalIssuances = {
	name: 'PoolXyk.TotalIssuances',
	v7: productionStorage.totalIssuances['v7'],
	v7Stage: stageStorage.totalIssuances['v7'],
	v7Test: testStorage.totalIssuances['v7'],
	v85Dev: devStorage.totalIssuances['v85'],
}

export const accountPools = {
	name: 'PoolXyk.AccountPools',
	v19: productionStorage.accountPools['v19'],
	v42: productionStorage.accountPools['v42'],
	v19Stage: stageStorage.accountPools['v19'],
	v42Stage: stageStorage.accountPools['v42'],
	v19Test: testStorage.accountPools['v19'],
	v42Test: testStorage.accountPools['v42'],
	v85Dev: devStorage.accountPools['v85'],
}
