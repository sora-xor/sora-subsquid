import * as productionCalls from '../../production/im-online/calls'
import * as stageCalls from '../../stage/im-online/calls'
import * as testCalls from '../../test/im-online/calls'
import * as devCalls from '../../dev/im-online/calls'


export const heartbeat = {
	name: 'ImOnline.heartbeat',
	v1: productionCalls.heartbeat['v1'],
	v1Stage: stageCalls.heartbeat['v1'],
	v1Test: testCalls.heartbeat['v1'],
	v85Dev: devCalls.heartbeat['v85'],
}
