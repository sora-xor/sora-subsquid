import * as productionStorage from '../../production/farming/storage'
import * as stageStorage from '../../stage/farming/storage'
import * as testStorage from '../../test/farming/storage'
import * as devStorage from '../../dev/farming/storage'


export const pools = {
	name: 'Farming.Pools',
	v7: productionStorage.pools['v7'],
	v7Stage: stageStorage.pools['v7'],
	v7Test: testStorage.pools['v7'],
	v85Dev: devStorage.pools['v85'],
}

export const poolFarmers = {
	name: 'Farming.PoolFarmers',
	v7: productionStorage.poolFarmers['v7'],
	v7Stage: stageStorage.poolFarmers['v7'],
	v7Test: testStorage.poolFarmers['v7'],
	v85Dev: devStorage.poolFarmers['v85'],
}

export const savedValues = {
	name: 'Farming.SavedValues',
	v7: productionStorage.savedValues['v7'],
	v7Stage: stageStorage.savedValues['v7'],
	v7Test: testStorage.savedValues['v7'],
}

export const lpMinXorForBonusReward = {
	name: 'Farming.LpMinXorForBonusReward',
	v77: productionStorage.lpMinXorForBonusReward['v77'],
	v77Stage: stageStorage.lpMinXorForBonusReward['v77'],
	v77Test: testStorage.lpMinXorForBonusReward['v77'],
	v85Dev: devStorage.lpMinXorForBonusReward['v85'],
}
