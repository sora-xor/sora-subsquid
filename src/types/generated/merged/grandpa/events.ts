import * as productionEvents from '../../production/grandpa/events'
import * as stageEvents from '../../stage/grandpa/events'
import * as testEvents from '../../test/grandpa/events'
import * as devEvents from '../../dev/grandpa/events'


export const newAuthorities = {
	name: 'Grandpa.NewAuthorities',
	v1: productionEvents.newAuthorities['v1'],
	v42: productionEvents.newAuthorities['v42'],
	v1Stage: stageEvents.newAuthorities['v1'],
	v42Stage: stageEvents.newAuthorities['v42'],
	v1Test: testEvents.newAuthorities['v1'],
	v42Test: testEvents.newAuthorities['v42'],
	v85Dev: devEvents.newAuthorities['v85'],
}

export const paused = {
	name: 'Grandpa.Paused',
	v1: productionEvents.paused['v1'],
	v1Stage: stageEvents.paused['v1'],
	v1Test: testEvents.paused['v1'],
	v85Dev: devEvents.paused['v85'],
}

export const resumed = {
	name: 'Grandpa.Resumed',
	v1: productionEvents.resumed['v1'],
	v1Stage: stageEvents.resumed['v1'],
	v1Test: testEvents.resumed['v1'],
	v85Dev: devEvents.resumed['v85'],
}
