import * as productionCalls from '../../production/substrate-bridge-outbound-channel/calls'
import * as stageCalls from '../../stage/substrate-bridge-outbound-channel/calls'
import * as testCalls from '../../test/substrate-bridge-outbound-channel/calls'
import * as devCalls from '../../dev/substrate-bridge-outbound-channel/calls'


export const updateInterval = {
	name: 'SubstrateBridgeOutboundChannel.update_interval',
	v72: productionCalls.updateInterval['v72'],
	v72Stage: stageCalls.updateInterval['v72'],
	v72Test: testCalls.updateInterval['v72'],
	v85Dev: devCalls.updateInterval['v85'],
}
