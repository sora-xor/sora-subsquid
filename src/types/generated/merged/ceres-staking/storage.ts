import * as productionStorage from '../../production/ceres-staking/storage'
import * as stageStorage from '../../stage/ceres-staking/storage'
import * as testStorage from '../../test/ceres-staking/storage'
import * as devStorage from '../../dev/ceres-staking/storage'


export const stakers = {
	name: 'CeresStaking.Stakers',
	v19: productionStorage.stakers['v19'],
	v19Stage: stageStorage.stakers['v19'],
	v19Test: testStorage.stakers['v19'],
	v85Dev: devStorage.stakers['v85'],
}

export const totalDeposited = {
	name: 'CeresStaking.TotalDeposited',
	v19: productionStorage.totalDeposited['v19'],
	v19Stage: stageStorage.totalDeposited['v19'],
	v19Test: testStorage.totalDeposited['v19'],
	v85Dev: devStorage.totalDeposited['v85'],
}

export const rewardsRemaining = {
	name: 'CeresStaking.RewardsRemaining',
	v19: productionStorage.rewardsRemaining['v19'],
	v19Stage: stageStorage.rewardsRemaining['v19'],
	v19Test: testStorage.rewardsRemaining['v19'],
	v85Dev: devStorage.rewardsRemaining['v85'],
}

export const authorityAccount = {
	name: 'CeresStaking.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v26Stage: stageStorage.authorityAccount['v26'],
	v26Test: testStorage.authorityAccount['v26'],
	v85Dev: devStorage.authorityAccount['v85'],
}
