import * as productionEvents from '../../production/farming/events'
import * as stageEvents from '../../stage/farming/events'
import * as testEvents from '../../test/farming/events'
import * as devEvents from '../../dev/farming/events'


export const lpMinXorForBonusRewardUpdated = {
	name: 'Farming.LpMinXorForBonusRewardUpdated',
	v77: productionEvents.lpMinXorForBonusRewardUpdated['v77'],
	v77Stage: stageEvents.lpMinXorForBonusRewardUpdated['v77'],
	v77Test: testEvents.lpMinXorForBonusRewardUpdated['v77'],
	v85Dev: devEvents.lpMinXorForBonusRewardUpdated['v85'],
}
