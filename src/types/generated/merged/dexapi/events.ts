import * as productionEvents from '../../production/dexapi/events'
import * as stageEvents from '../../stage/dexapi/events'
import * as testEvents from '../../test/dexapi/events'
import * as devEvents from '../../dev/dexapi/events'


export const directExchange = {
	name: 'DEXAPI.DirectExchange',
	v1: productionEvents.directExchange['v1'],
	v1Stage: stageEvents.directExchange['v1'],
	v1Test: testEvents.directExchange['v1'],
}

export const liquiditySourceEnabled = {
	name: 'DEXAPI.LiquiditySourceEnabled',
	v70: productionEvents.liquiditySourceEnabled['v70'],
	v71: productionEvents.liquiditySourceEnabled['v71'],
	v70Stage: stageEvents.liquiditySourceEnabled['v70'],
	v71Stage: stageEvents.liquiditySourceEnabled['v71'],
	v70Test: testEvents.liquiditySourceEnabled['v70'],
	v71Test: testEvents.liquiditySourceEnabled['v71'],
	v85Dev: devEvents.liquiditySourceEnabled['v85'],
}

export const liquiditySourceDisabled = {
	name: 'DEXAPI.LiquiditySourceDisabled',
	v70: productionEvents.liquiditySourceDisabled['v70'],
	v71: productionEvents.liquiditySourceDisabled['v71'],
	v70Stage: stageEvents.liquiditySourceDisabled['v70'],
	v71Stage: stageEvents.liquiditySourceDisabled['v71'],
	v70Test: testEvents.liquiditySourceDisabled['v70'],
	v71Test: testEvents.liquiditySourceDisabled['v71'],
	v85Dev: devEvents.liquiditySourceDisabled['v85'],
}
