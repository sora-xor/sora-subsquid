import * as productionEvents from '../../production/faucet/events'
import * as stageEvents from '../../stage/faucet/events'
import * as testEvents from '../../test/faucet/events'
import * as devEvents from '../../dev/faucet/events'


export const transferred = {
	name: 'Faucet.Transferred',
	v22: productionEvents.transferred['v22'],
	v22Stage: stageEvents.transferred['v22'],
	v22Test: testEvents.transferred['v22'],
	v85Dev: devEvents.transferred['v85'],
}

export const limitUpdated = {
	name: 'Faucet.LimitUpdated',
	v85Dev: devEvents.limitUpdated['v85'],
}
