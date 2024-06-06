import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const submit =  {
    name: 'BridgeInboundChannel.submit',
    v85: new CallType(
        'BridgeInboundChannel.submit',
        sts.struct({
            networkId: v85.GenericNetworkId,
            commitment: v85.GenericCommitment,
            proof: v85.MultiProof,
        })
    ),
}

export const registerEvmChannel =  {
    name: 'BridgeInboundChannel.register_evm_channel',
    v85: new CallType(
        'BridgeInboundChannel.register_evm_channel',
        sts.struct({
            networkId: v85.H256,
            channelAddress: v85.H160,
        })
    ),
}
