import * as productionEvents from '../../production/band/events'
import * as stageEvents from '../../stage/band/events'
import * as testEvents from '../../test/band/events'
import * as devEvents from '../../dev/band/events'


export const symbolsRelayed = {
	name: 'Band.SymbolsRelayed',
	v45: productionEvents.symbolsRelayed['v45'],
	v57: productionEvents.symbolsRelayed['v57'],
	v45Stage: stageEvents.symbolsRelayed['v45'],
	v57Stage: stageEvents.symbolsRelayed['v57'],
	v45Test: testEvents.symbolsRelayed['v45'],
	v57Test: testEvents.symbolsRelayed['v57'],
	v85Dev: devEvents.symbolsRelayed['v85'],
}

export const relayersAdded = {
	name: 'Band.RelayersAdded',
	v45: productionEvents.relayersAdded['v45'],
	v45Stage: stageEvents.relayersAdded['v45'],
	v45Test: testEvents.relayersAdded['v45'],
	v85Dev: devEvents.relayersAdded['v85'],
}

export const relayersRemoved = {
	name: 'Band.RelayersRemoved',
	v45: productionEvents.relayersRemoved['v45'],
	v45Stage: stageEvents.relayersRemoved['v45'],
	v45Test: testEvents.relayersRemoved['v45'],
	v85Dev: devEvents.relayersRemoved['v85'],
}
