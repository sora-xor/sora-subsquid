import * as productionEvents from '../../production/ceres-token-locker/events'
import * as stageEvents from '../../stage/ceres-token-locker/events'
import * as testEvents from '../../test/ceres-token-locker/events'
import * as devEvents from '../../dev/ceres-token-locker/events'


export const locked = {
	name: 'CeresTokenLocker.Locked',
	v26: productionEvents.locked['v26'],
	v42: productionEvents.locked['v42'],
	v26Stage: stageEvents.locked['v26'],
	v42Stage: stageEvents.locked['v42'],
	v26Test: testEvents.locked['v26'],
	v42Test: testEvents.locked['v42'],
	v85Dev: devEvents.locked['v85'],
}

export const withdrawn = {
	name: 'CeresTokenLocker.Withdrawn',
	v26: productionEvents.withdrawn['v26'],
	v42: productionEvents.withdrawn['v42'],
	v26Stage: stageEvents.withdrawn['v26'],
	v42Stage: stageEvents.withdrawn['v42'],
	v26Test: testEvents.withdrawn['v26'],
	v42Test: testEvents.withdrawn['v42'],
	v85Dev: devEvents.withdrawn['v85'],
}

export const feeChanged = {
	name: 'CeresTokenLocker.FeeChanged',
	v26: productionEvents.feeChanged['v26'],
	v26Stage: stageEvents.feeChanged['v26'],
	v26Test: testEvents.feeChanged['v26'],
	v85Dev: devEvents.feeChanged['v85'],
}
