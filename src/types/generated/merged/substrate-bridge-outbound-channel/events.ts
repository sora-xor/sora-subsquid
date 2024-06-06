import * as productionEvents from '../../production/substrate-bridge-outbound-channel/events'
import * as stageEvents from '../../stage/substrate-bridge-outbound-channel/events'
import * as testEvents from '../../test/substrate-bridge-outbound-channel/events'
import * as devEvents from '../../dev/substrate-bridge-outbound-channel/events'


export const messageAccepted = {
	name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
	v64: productionEvents.messageAccepted['v64'],
	v70: productionEvents.messageAccepted['v70'],
	v64Stage: stageEvents.messageAccepted['v64'],
	v70Stage: stageEvents.messageAccepted['v70'],
	v64Test: testEvents.messageAccepted['v64'],
	v70Test: testEvents.messageAccepted['v70'],
	v85Dev: devEvents.messageAccepted['v85'],
}

export const intervalUpdated = {
	name: 'SubstrateBridgeOutboundChannel.IntervalUpdated',
	v72: productionEvents.intervalUpdated['v72'],
	v72Stage: stageEvents.intervalUpdated['v72'],
	v72Test: testEvents.intervalUpdated['v72'],
	v85Dev: devEvents.intervalUpdated['v85'],
}
