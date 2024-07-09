import * as productionCalls from '../../production/substrate-bridge-inbound-channel/calls'
import * as stageCalls from '../../stage/substrate-bridge-inbound-channel/calls'
import * as testCalls from '../../test/substrate-bridge-inbound-channel/calls'
import * as devCalls from '../../dev/substrate-bridge-inbound-channel/calls'


export const submit = {
	name: 'SubstrateBridgeInboundChannel.submit',
	v64: productionCalls.submit['v64'],
	v70: productionCalls.submit['v70'],
	v84: productionCalls.submit['v84'],
	v64Stage: stageCalls.submit['v64'],
	v70Stage: stageCalls.submit['v70'],
	v84Stage: stageCalls.submit['v84'],
	v64Test: testCalls.submit['v64'],
	v70Test: testCalls.submit['v70'],
	v84Test: testCalls.submit['v84'],
	v85Dev: devCalls.submit['v85'],
}
