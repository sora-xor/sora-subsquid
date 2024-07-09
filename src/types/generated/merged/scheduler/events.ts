import * as productionEvents from '../../production/scheduler/events'
import * as stageEvents from '../../stage/scheduler/events'
import * as testEvents from '../../test/scheduler/events'
import * as devEvents from '../../dev/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	v1: productionEvents.scheduled['v1'],
	v42: productionEvents.scheduled['v42'],
	v1Stage: stageEvents.scheduled['v1'],
	v42Stage: stageEvents.scheduled['v42'],
	v1Test: testEvents.scheduled['v1'],
	v42Test: testEvents.scheduled['v42'],
	v85Dev: devEvents.scheduled['v85'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	v1: productionEvents.canceled['v1'],
	v42: productionEvents.canceled['v42'],
	v1Stage: stageEvents.canceled['v1'],
	v42Stage: stageEvents.canceled['v42'],
	v1Test: testEvents.canceled['v1'],
	v42Test: testEvents.canceled['v42'],
	v85Dev: devEvents.canceled['v85'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	v1: productionEvents.dispatched['v1'],
	v42: productionEvents.dispatched['v42'],
	v53: productionEvents.dispatched['v53'],
	v1Stage: stageEvents.dispatched['v1'],
	v42Stage: stageEvents.dispatched['v42'],
	v53Stage: stageEvents.dispatched['v53'],
	v1Test: testEvents.dispatched['v1'],
	v42Test: testEvents.dispatched['v42'],
	v53Test: testEvents.dispatched['v53'],
	v85Dev: devEvents.dispatched['v85'],
}

export const callLookupFailed = {
	name: 'Scheduler.CallLookupFailed',
	v42: productionEvents.callLookupFailed['v42'],
	v42Stage: stageEvents.callLookupFailed['v42'],
	v42Test: testEvents.callLookupFailed['v42'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	v53: productionEvents.callUnavailable['v53'],
	v53Stage: stageEvents.callUnavailable['v53'],
	v53Test: testEvents.callUnavailable['v53'],
	v85Dev: devEvents.callUnavailable['v85'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	v53: productionEvents.periodicFailed['v53'],
	v53Stage: stageEvents.periodicFailed['v53'],
	v53Test: testEvents.periodicFailed['v53'],
	v85Dev: devEvents.periodicFailed['v85'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	v53: productionEvents.permanentlyOverweight['v53'],
	v53Stage: stageEvents.permanentlyOverweight['v53'],
	v53Test: testEvents.permanentlyOverweight['v53'],
	v85Dev: devEvents.permanentlyOverweight['v85'],
}
