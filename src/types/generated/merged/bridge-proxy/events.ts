import * as productionEvents from '../../production/bridge-proxy/events'
import * as stageEvents from '../../stage/bridge-proxy/events'
import * as testEvents from '../../test/bridge-proxy/events'
import * as devEvents from '../../dev/bridge-proxy/events'


export const requestStatusUpdate = {
	name: 'BridgeProxy.RequestStatusUpdate',
	v64: productionEvents.requestStatusUpdate['v64'],
	v64Stage: stageEvents.requestStatusUpdate['v64'],
	v64Test: testEvents.requestStatusUpdate['v64'],
	v85Dev: devEvents.requestStatusUpdate['v85'],
}

export const refundFailed = {
	name: 'BridgeProxy.RefundFailed',
	v64: productionEvents.refundFailed['v64'],
	v64Stage: stageEvents.refundFailed['v64'],
	v64Test: testEvents.refundFailed['v64'],
	v85Dev: devEvents.refundFailed['v85'],
}
