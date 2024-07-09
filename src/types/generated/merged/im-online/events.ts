import * as productionEvents from '../../production/im-online/events'
import * as stageEvents from '../../stage/im-online/events'
import * as testEvents from '../../test/im-online/events'
import * as devEvents from '../../dev/im-online/events'


export const heartbeatReceived = {
	name: 'ImOnline.HeartbeatReceived',
	v1: productionEvents.heartbeatReceived['v1'],
	v42: productionEvents.heartbeatReceived['v42'],
	v1Stage: stageEvents.heartbeatReceived['v1'],
	v42Stage: stageEvents.heartbeatReceived['v42'],
	v1Test: testEvents.heartbeatReceived['v1'],
	v42Test: testEvents.heartbeatReceived['v42'],
	v85Dev: devEvents.heartbeatReceived['v85'],
}

export const allGood = {
	name: 'ImOnline.AllGood',
	v1: productionEvents.allGood['v1'],
	v1Stage: stageEvents.allGood['v1'],
	v1Test: testEvents.allGood['v1'],
	v85Dev: devEvents.allGood['v85'],
}

export const someOffline = {
	name: 'ImOnline.SomeOffline',
	v1: productionEvents.someOffline['v1'],
	v42: productionEvents.someOffline['v42'],
	v1Stage: stageEvents.someOffline['v1'],
	v42Stage: stageEvents.someOffline['v42'],
	v1Test: testEvents.someOffline['v1'],
	v42Test: testEvents.someOffline['v42'],
	v85Dev: devEvents.someOffline['v85'],
}
