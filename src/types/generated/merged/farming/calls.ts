import * as productionCalls from '../../production/farming/calls'
import * as stageCalls from '../../stage/farming/calls'
import * as testCalls from '../../test/farming/calls'
import * as devCalls from '../../dev/farming/calls'


export const migrateTo11 = {
	name: 'Farming.migrate_to_1_1',
	v7: productionCalls.migrateTo11['v7'],
	v7Stage: stageCalls.migrateTo11['v7'],
	v7Test: testCalls.migrateTo11['v7'],
}

export const setLpMinXorForBonusReward = {
	name: 'Farming.set_lp_min_xor_for_bonus_reward',
	v77: productionCalls.setLpMinXorForBonusReward['v77'],
	v77Stage: stageCalls.setLpMinXorForBonusReward['v77'],
	v77Test: testCalls.setLpMinXorForBonusReward['v77'],
	v85Dev: devCalls.setLpMinXorForBonusReward['v85'],
}
