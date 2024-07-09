import * as productionCalls from '../../production/ceres-staking/calls'
import * as stageCalls from '../../stage/ceres-staking/calls'
import * as testCalls from '../../test/ceres-staking/calls'
import * as devCalls from '../../dev/ceres-staking/calls'


export const deposit = {
	name: 'CeresStaking.deposit',
	v19: productionCalls.deposit['v19'],
	v19Stage: stageCalls.deposit['v19'],
	v19Test: testCalls.deposit['v19'],
	v85Dev: devCalls.deposit['v85'],
}

export const withdraw = {
	name: 'CeresStaking.withdraw',
	v19: productionCalls.withdraw['v19'],
	v19Stage: stageCalls.withdraw['v19'],
	v19Test: testCalls.withdraw['v19'],
	v85Dev: devCalls.withdraw['v85'],
}

export const changeRewardsRemaining = {
	name: 'CeresStaking.change_rewards_remaining',
	v26: productionCalls.changeRewardsRemaining['v26'],
	v26Stage: stageCalls.changeRewardsRemaining['v26'],
	v26Test: testCalls.changeRewardsRemaining['v26'],
	v85Dev: devCalls.changeRewardsRemaining['v85'],
}
