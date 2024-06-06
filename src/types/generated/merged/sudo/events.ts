import * as productionEvents from '../../production/sudo/events'
import * as stageEvents from '../../stage/sudo/events'
import * as testEvents from '../../test/sudo/events'
import * as devEvents from '../../dev/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	v22: productionEvents.sudid['v22'],
	v22Stage: stageEvents.sudid['v22'],
	v22Test: testEvents.sudid['v22'],
	v85Dev: devEvents.sudid['v85'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	v22: productionEvents.keyChanged['v22'],
	v22Stage: stageEvents.keyChanged['v22'],
	v22Test: testEvents.keyChanged['v22'],
	v85Dev: devEvents.keyChanged['v85'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	v22: productionEvents.sudoAsDone['v22'],
	v22Stage: stageEvents.sudoAsDone['v22'],
	v22Test: testEvents.sudoAsDone['v22'],
	v85Dev: devEvents.sudoAsDone['v85'],
}
