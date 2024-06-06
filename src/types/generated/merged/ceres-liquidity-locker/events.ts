import * as productionEvents from '../../production/ceres-liquidity-locker/events'
import * as stageEvents from '../../stage/ceres-liquidity-locker/events'
import * as testEvents from '../../test/ceres-liquidity-locker/events'
import * as devEvents from '../../dev/ceres-liquidity-locker/events'


export const locked = {
	name: 'CeresLiquidityLocker.Locked',
	v22: productionEvents.locked['v22'],
	v37: productionEvents.locked['v37'],
	v22Stage: stageEvents.locked['v22'],
	v37Stage: stageEvents.locked['v37'],
	v22Test: testEvents.locked['v22'],
	v37Test: testEvents.locked['v37'],
	v85Dev: devEvents.locked['v85'],
}
