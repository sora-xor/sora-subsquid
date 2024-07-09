import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const submit =  {
    name: 'SubstrateBridgeInboundChannel.submit',
    v85: new CallType(
        'SubstrateBridgeInboundChannel.submit',
        sts.struct({
            networkId: v85.SubNetworkId,
            commitment: v85.GenericCommitment,
            proof: v85.MultiProof,
        })
    ),
}
