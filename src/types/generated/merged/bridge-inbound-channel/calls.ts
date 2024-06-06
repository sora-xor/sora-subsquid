import * as devCalls from '../../dev/bridge-inbound-channel/calls'


export const submit = {
	name: 'BridgeInboundChannel.submit',
	v85Dev: devCalls.submit['v85'],
}

export const registerEvmChannel = {
	name: 'BridgeInboundChannel.register_evm_channel',
	v85Dev: devCalls.registerEvmChannel['v85'],
}
