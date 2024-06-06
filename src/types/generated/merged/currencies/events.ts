import * as productionEvents from '../../production/currencies/events'
import * as stageEvents from '../../stage/currencies/events'
import * as testEvents from '../../test/currencies/events'


export const transferred = {
	name: 'Currencies.Transferred',
	v1: productionEvents.transferred['v1'],
	v1Stage: stageEvents.transferred['v1'],
	v1Test: testEvents.transferred['v1'],
}

export const balanceUpdated = {
	name: 'Currencies.BalanceUpdated',
	v1: productionEvents.balanceUpdated['v1'],
	v1Stage: stageEvents.balanceUpdated['v1'],
	v1Test: testEvents.balanceUpdated['v1'],
}

export const deposited = {
	name: 'Currencies.Deposited',
	v1: productionEvents.deposited['v1'],
	v1Stage: stageEvents.deposited['v1'],
	v1Test: testEvents.deposited['v1'],
}

export const withdrawn = {
	name: 'Currencies.Withdrawn',
	v1: productionEvents.withdrawn['v1'],
	v1Stage: stageEvents.withdrawn['v1'],
	v1Test: testEvents.withdrawn['v1'],
}
