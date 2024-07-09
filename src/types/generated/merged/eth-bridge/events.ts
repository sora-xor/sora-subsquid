import * as productionEvents from '../../production/eth-bridge/events'
import * as stageEvents from '../../stage/eth-bridge/events'
import * as testEvents from '../../test/eth-bridge/events'
import * as devEvents from '../../dev/eth-bridge/events'


export const requestRegistered = {
	name: 'EthBridge.RequestRegistered',
	v1: productionEvents.requestRegistered['v1'],
	v1Stage: stageEvents.requestRegistered['v1'],
	v1Test: testEvents.requestRegistered['v1'],
	v85Dev: devEvents.requestRegistered['v85'],
}

export const approvalsCollected = {
	name: 'EthBridge.ApprovalsCollected',
	v1: productionEvents.approvalsCollected['v1'],
	v1Stage: stageEvents.approvalsCollected['v1'],
	v1Test: testEvents.approvalsCollected['v1'],
	v85Dev: devEvents.approvalsCollected['v85'],
}

export const requestFinalizationFailed = {
	name: 'EthBridge.RequestFinalizationFailed',
	v1: productionEvents.requestFinalizationFailed['v1'],
	v1Stage: stageEvents.requestFinalizationFailed['v1'],
	v1Test: testEvents.requestFinalizationFailed['v1'],
	v85Dev: devEvents.requestFinalizationFailed['v85'],
}

export const incomingRequestFinalizationFailed = {
	name: 'EthBridge.IncomingRequestFinalizationFailed',
	v1: productionEvents.incomingRequestFinalizationFailed['v1'],
	v1Stage: stageEvents.incomingRequestFinalizationFailed['v1'],
	v1Test: testEvents.incomingRequestFinalizationFailed['v1'],
	v85Dev: devEvents.incomingRequestFinalizationFailed['v85'],
}

export const incomingRequestFinalized = {
	name: 'EthBridge.IncomingRequestFinalized',
	v1: productionEvents.incomingRequestFinalized['v1'],
	v1Stage: stageEvents.incomingRequestFinalized['v1'],
	v1Test: testEvents.incomingRequestFinalized['v1'],
	v85Dev: devEvents.incomingRequestFinalized['v85'],
}

export const requestAborted = {
	name: 'EthBridge.RequestAborted',
	v1: productionEvents.requestAborted['v1'],
	v1Stage: stageEvents.requestAborted['v1'],
	v1Test: testEvents.requestAborted['v1'],
	v85Dev: devEvents.requestAborted['v85'],
}

export const cancellationFailed = {
	name: 'EthBridge.CancellationFailed',
	v3: productionEvents.cancellationFailed['v3'],
	v3Stage: stageEvents.cancellationFailed['v3'],
	v3Test: testEvents.cancellationFailed['v3'],
	v85Dev: devEvents.cancellationFailed['v85'],
}

export const registerRequestFailed = {
	name: 'EthBridge.RegisterRequestFailed',
	v53: productionEvents.registerRequestFailed['v53'],
	v53Stage: stageEvents.registerRequestFailed['v53'],
	v53Test: testEvents.registerRequestFailed['v53'],
	v85Dev: devEvents.registerRequestFailed['v85'],
}
