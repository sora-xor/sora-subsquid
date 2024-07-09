import * as productionEvents from '../../production/ceres-staking/events'
import * as stageEvents from '../../stage/ceres-staking/events'
import * as testEvents from '../../test/ceres-staking/events'
import * as devEvents from '../../dev/ceres-staking/events'


export const deposited = {
	name: 'CeresStaking.Deposited',
	v19: productionEvents.deposited['v19'],
	v19Stage: stageEvents.deposited['v19'],
	v19Test: testEvents.deposited['v19'],
	v85Dev: devEvents.deposited['v85'],
}

export const withdrawn = {
	name: 'CeresStaking.Withdrawn',
	v19: productionEvents.withdrawn['v19'],
	v19Stage: stageEvents.withdrawn['v19'],
	v19Test: testEvents.withdrawn['v19'],
	v85Dev: devEvents.withdrawn['v85'],
}

export const rewardsChanged = {
	name: 'CeresStaking.RewardsChanged',
	v26: productionEvents.rewardsChanged['v26'],
	v26Stage: stageEvents.rewardsChanged['v26'],
	v26Test: testEvents.rewardsChanged['v26'],
	v85Dev: devEvents.rewardsChanged['v85'],
}
