import * as productionEvents from '../../production/pool-xyk/events'
import * as stageEvents from '../../stage/pool-xyk/events'
import * as testEvents from '../../test/pool-xyk/events'
import * as devEvents from '../../dev/pool-xyk/events'


export const poolIsInitialized = {
	name: 'PoolXYK.PoolIsInitialized',
	v1: productionEvents.poolIsInitialized['v1'],
	v1Stage: stageEvents.poolIsInitialized['v1'],
	v1Test: testEvents.poolIsInitialized['v1'],
	v85Dev: devEvents.poolIsInitialized['v85'],
}
