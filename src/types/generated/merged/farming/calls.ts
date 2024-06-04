import * as productionCalls from '../../production/farming/calls'
import * as stageCalls from '../../stage/farming/calls'
import * as testCalls from '../../test/farming/calls'


export const migrateTo11 = {
	name: 'Farming.migrate_to_1_1',
	v7: productionCalls.migrateTo11['v7'],
	v33Stage: stageCalls.migrateTo11['v33'],
	v33Test: testCalls.migrateTo11['v33'],
}

export const setLpMinXorForBonusReward = {
	name: 'Farming.set_lp_min_xor_for_bonus_reward',
	v77: productionCalls.setLpMinXorForBonusReward['v77'],
}
