import * as productionStorage from '../../production/substrate-bridge-outbound-channel/storage'
import * as stageStorage from '../../stage/substrate-bridge-outbound-channel/storage'
import * as testStorage from '../../test/substrate-bridge-outbound-channel/storage'
import * as devStorage from '../../dev/substrate-bridge-outbound-channel/storage'


export const interval = {
	name: 'SubstrateBridgeOutboundChannel.Interval',
	v64: productionStorage.interval['v64'],
	v64Stage: stageStorage.interval['v64'],
	v64Test: testStorage.interval['v64'],
	v85Dev: devStorage.interval['v85'],
}

export const messageQueues = {
	name: 'SubstrateBridgeOutboundChannel.MessageQueues',
	v64: productionStorage.messageQueues['v64'],
	v70: productionStorage.messageQueues['v70'],
	v64Stage: stageStorage.messageQueues['v64'],
	v70Stage: stageStorage.messageQueues['v70'],
	v64Test: testStorage.messageQueues['v64'],
	v70Test: testStorage.messageQueues['v70'],
	v85Dev: devStorage.messageQueues['v85'],
}

export const channelNonces = {
	name: 'SubstrateBridgeOutboundChannel.ChannelNonces',
	v64: productionStorage.channelNonces['v64'],
	v70: productionStorage.channelNonces['v70'],
	v64Stage: stageStorage.channelNonces['v64'],
	v70Stage: stageStorage.channelNonces['v70'],
	v64Test: testStorage.channelNonces['v64'],
	v70Test: testStorage.channelNonces['v70'],
	v85Dev: devStorage.channelNonces['v85'],
}

export const latestCommitment = {
	name: 'SubstrateBridgeOutboundChannel.LatestCommitment',
	v65: productionStorage.latestCommitment['v65'],
	v70: productionStorage.latestCommitment['v70'],
	v84: productionStorage.latestCommitment['v84'],
	v65Stage: stageStorage.latestCommitment['v65'],
	v70Stage: stageStorage.latestCommitment['v70'],
	v84Stage: stageStorage.latestCommitment['v84'],
	v65Test: testStorage.latestCommitment['v65'],
	v70Test: testStorage.latestCommitment['v70'],
	v84Test: testStorage.latestCommitment['v84'],
	v85Dev: devStorage.latestCommitment['v85'],
}
