import * as devStorage from '../../dev/bridge-outbound-channel/storage'


export const interval = {
	name: 'BridgeOutboundChannel.Interval',
	v85Dev: devStorage.interval['v85'],
}

export const messageQueues = {
	name: 'BridgeOutboundChannel.MessageQueues',
	v85Dev: devStorage.messageQueues['v85'],
}

export const queueTotalGas = {
	name: 'BridgeOutboundChannel.QueueTotalGas',
	v85Dev: devStorage.queueTotalGas['v85'],
}

export const channelNonces = {
	name: 'BridgeOutboundChannel.ChannelNonces',
	v85Dev: devStorage.channelNonces['v85'],
}

export const latestCommitment = {
	name: 'BridgeOutboundChannel.LatestCommitment',
	v85Dev: devStorage.latestCommitment['v85'],
}

export const evmSubmitGas = {
	name: 'BridgeOutboundChannel.EvmSubmitGas',
	v85Dev: devStorage.evmSubmitGas['v85'],
}
