import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'
import * as v84 from '../v84'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v64: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v64.SubNetworkId,
            commitment: v64.GenericCommitment,
            proof: v64.MultiProof,
        })
    ),
    v70: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v70.SubNetworkId,
            commitment: v70.GenericCommitment,
            proof: v70.MultiProof,
        })
    ),
    v84: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v84.SubNetworkId,
            commitment: v84.GenericCommitment,
            proof: v84.MultiProof,
        })
    ),
}
