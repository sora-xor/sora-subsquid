import * as productionCalls from '../../production/preimage/calls'
import * as stageCalls from '../../stage/preimage/calls'
import * as testCalls from '../../test/preimage/calls'
import * as devCalls from '../../dev/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	v53: productionCalls.notePreimage['v53'],
	v53Stage: stageCalls.notePreimage['v53'],
	v53Test: testCalls.notePreimage['v53'],
	v85Dev: devCalls.notePreimage['v85'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	v53: productionCalls.unnotePreimage['v53'],
	v53Stage: stageCalls.unnotePreimage['v53'],
	v53Test: testCalls.unnotePreimage['v53'],
	v85Dev: devCalls.unnotePreimage['v85'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	v53: productionCalls.requestPreimage['v53'],
	v53Stage: stageCalls.requestPreimage['v53'],
	v53Test: testCalls.requestPreimage['v53'],
	v85Dev: devCalls.requestPreimage['v85'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	v53: productionCalls.unrequestPreimage['v53'],
	v53Stage: stageCalls.unrequestPreimage['v53'],
	v53Test: testCalls.unrequestPreimage['v53'],
	v85Dev: devCalls.unrequestPreimage['v85'],
}
