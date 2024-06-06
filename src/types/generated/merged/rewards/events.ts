import * as productionEvents from '../../production/rewards/events'
import * as stageEvents from '../../stage/rewards/events'
import * as testEvents from '../../test/rewards/events'
import * as devEvents from '../../dev/rewards/events'


export const claimed = {
	name: 'Rewards.Claimed',
	v1: productionEvents.claimed['v1'],
	v1Stage: stageEvents.claimed['v1'],
	v1Test: testEvents.claimed['v1'],
	v85Dev: devEvents.claimed['v85'],
}

export const migrationCompleted = {
	name: 'Rewards.MigrationCompleted',
	v19: productionEvents.migrationCompleted['v19'],
	v19Stage: stageEvents.migrationCompleted['v19'],
	v19Test: testEvents.migrationCompleted['v19'],
	v85Dev: devEvents.migrationCompleted['v85'],
}
