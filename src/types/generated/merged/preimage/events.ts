import * as productionEvents from '../../production/preimage/events'
import * as stageEvents from '../../stage/preimage/events'
import * as testEvents from '../../test/preimage/events'
import * as devEvents from '../../dev/preimage/events'


export const noted = {
	name: 'Preimage.Noted',
	v53: productionEvents.noted['v53'],
	v53Stage: stageEvents.noted['v53'],
	v53Test: testEvents.noted['v53'],
	v85Dev: devEvents.noted['v85'],
}

export const requested = {
	name: 'Preimage.Requested',
	v53: productionEvents.requested['v53'],
	v53Stage: stageEvents.requested['v53'],
	v53Test: testEvents.requested['v53'],
	v85Dev: devEvents.requested['v85'],
}

export const cleared = {
	name: 'Preimage.Cleared',
	v53: productionEvents.cleared['v53'],
	v53Stage: stageEvents.cleared['v53'],
	v53Test: testEvents.cleared['v53'],
	v85Dev: devEvents.cleared['v85'],
}
