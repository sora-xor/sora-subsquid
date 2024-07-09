import * as devStorage from '../../dev/bridge-inbound-channel/storage'


export const channelNonces = {
	name: 'BridgeInboundChannel.ChannelNonces',
	v85Dev: devStorage.channelNonces['v85'],
}

export const reportedChannelNonces = {
	name: 'BridgeInboundChannel.ReportedChannelNonces',
	v85Dev: devStorage.reportedChannelNonces['v85'],
}

export const evmChannelAddresses = {
	name: 'BridgeInboundChannel.EvmChannelAddresses',
	v85Dev: devStorage.evmChannelAddresses['v85'],
}
