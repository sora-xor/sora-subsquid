import * as productionStorage from '../../production/trading-pair/storage'
import * as stageStorage from '../../stage/trading-pair/storage'
import * as testStorage from '../../test/trading-pair/storage'
import * as devStorage from '../../dev/trading-pair/storage'


export const enabledSources = {
	name: 'TradingPair.EnabledSources',
	v1: productionStorage.enabledSources['v1'],
	v42: productionStorage.enabledSources['v42'],
	v71: productionStorage.enabledSources['v71'],
	v1Stage: stageStorage.enabledSources['v1'],
	v42Stage: stageStorage.enabledSources['v42'],
	v71Stage: stageStorage.enabledSources['v71'],
	v1Test: testStorage.enabledSources['v1'],
	v42Test: testStorage.enabledSources['v42'],
	v71Test: testStorage.enabledSources['v71'],
	v85Dev: devStorage.enabledSources['v85'],
}

export const lockedLiquiditySources = {
	name: 'TradingPair.LockedLiquiditySources',
	v38: productionStorage.lockedLiquiditySources['v38'],
	v71: productionStorage.lockedLiquiditySources['v71'],
	v38Stage: stageStorage.lockedLiquiditySources['v38'],
	v71Stage: stageStorage.lockedLiquiditySources['v71'],
	v38Test: testStorage.lockedLiquiditySources['v38'],
	v71Test: testStorage.lockedLiquiditySources['v71'],
	v85Dev: devStorage.lockedLiquiditySources['v85'],
}
