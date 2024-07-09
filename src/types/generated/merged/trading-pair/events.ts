import * as productionEvents from '../../production/trading-pair/events'
import * as stageEvents from '../../stage/trading-pair/events'
import * as testEvents from '../../test/trading-pair/events'
import * as devEvents from '../../dev/trading-pair/events'


export const tradingPairStored = {
	name: 'TradingPair.TradingPairStored',
	v1: productionEvents.tradingPairStored['v1'],
	v42: productionEvents.tradingPairStored['v42'],
	v1Stage: stageEvents.tradingPairStored['v1'],
	v42Stage: stageEvents.tradingPairStored['v42'],
	v1Test: testEvents.tradingPairStored['v1'],
	v42Test: testEvents.tradingPairStored['v42'],
	v85Dev: devEvents.tradingPairStored['v85'],
}
