import * as devEvents from '../../dev/dispatch/events'


export const messageDispatched = {
	name: 'Dispatch.MessageDispatched',
	v85Dev: devEvents.messageDispatched['v85'],
}

export const messageRejected = {
	name: 'Dispatch.MessageRejected',
	v85Dev: devEvents.messageRejected['v85'],
}

export const messageDecodeFailed = {
	name: 'Dispatch.MessageDecodeFailed',
	v85Dev: devEvents.messageDecodeFailed['v85'],
}
