import * as productionEvents from '../../production/substrate-dispatch/events'
import * as stageEvents from '../../stage/substrate-dispatch/events'
import * as testEvents from '../../test/substrate-dispatch/events'
import * as devEvents from '../../dev/substrate-dispatch/events'


export const messageDispatched = {
	name: 'SubstrateDispatch.MessageDispatched',
	v64: productionEvents.messageDispatched['v64'],
	v70: productionEvents.messageDispatched['v70'],
	v84: productionEvents.messageDispatched['v84'],
	v64Stage: stageEvents.messageDispatched['v64'],
	v70Stage: stageEvents.messageDispatched['v70'],
	v84Stage: stageEvents.messageDispatched['v84'],
	v64Test: testEvents.messageDispatched['v64'],
	v70Test: testEvents.messageDispatched['v70'],
	v84Test: testEvents.messageDispatched['v84'],
	v85Dev: devEvents.messageDispatched['v85'],
}

export const messageRejected = {
	name: 'SubstrateDispatch.MessageRejected',
	v64: productionEvents.messageRejected['v64'],
	v70: productionEvents.messageRejected['v70'],
	v84: productionEvents.messageRejected['v84'],
	v64Stage: stageEvents.messageRejected['v64'],
	v70Stage: stageEvents.messageRejected['v70'],
	v84Stage: stageEvents.messageRejected['v84'],
	v64Test: testEvents.messageRejected['v64'],
	v70Test: testEvents.messageRejected['v70'],
	v84Test: testEvents.messageRejected['v84'],
	v85Dev: devEvents.messageRejected['v85'],
}

export const messageDecodeFailed = {
	name: 'SubstrateDispatch.MessageDecodeFailed',
	v64: productionEvents.messageDecodeFailed['v64'],
	v70: productionEvents.messageDecodeFailed['v70'],
	v84: productionEvents.messageDecodeFailed['v84'],
	v64Stage: stageEvents.messageDecodeFailed['v64'],
	v70Stage: stageEvents.messageDecodeFailed['v70'],
	v84Stage: stageEvents.messageDecodeFailed['v84'],
	v64Test: testEvents.messageDecodeFailed['v64'],
	v70Test: testEvents.messageDecodeFailed['v70'],
	v84Test: testEvents.messageDecodeFailed['v84'],
	v85Dev: devEvents.messageDecodeFailed['v85'],
}
