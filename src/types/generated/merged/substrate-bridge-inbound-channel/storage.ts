import * as productionStorage from '../../production/substrate-bridge-inbound-channel/storage'
import * as stageStorage from '../../stage/substrate-bridge-inbound-channel/storage'
import * as testStorage from '../../test/substrate-bridge-inbound-channel/storage'
import * as devStorage from '../../dev/substrate-bridge-inbound-channel/storage'


export const channelNonces = {
	name: 'SubstrateBridgeInboundChannel.ChannelNonces',
	v64: productionStorage.channelNonces['v64'],
	v70: productionStorage.channelNonces['v70'],
	v64Stage: stageStorage.channelNonces['v64'],
	v70Stage: stageStorage.channelNonces['v70'],
	v64Test: testStorage.channelNonces['v64'],
	v70Test: testStorage.channelNonces['v70'],
	v85Dev: devStorage.channelNonces['v85'],
}
