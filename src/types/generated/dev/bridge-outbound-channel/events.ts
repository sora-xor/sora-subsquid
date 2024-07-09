import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const messageAccepted =  {
    name: 'BridgeOutboundChannel.MessageAccepted',
    v85: new EventType(
        'BridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v85.GenericNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}
