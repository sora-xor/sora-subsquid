import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const messageAccepted =  {
    name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
    v85: new EventType(
        'SubstrateBridgeOutboundChannel.MessageAccepted',
        sts.struct({
            networkId: v85.SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        })
    ),
}

export const intervalUpdated =  {
    name: 'SubstrateBridgeOutboundChannel.IntervalUpdated',
    v85: new EventType(
        'SubstrateBridgeOutboundChannel.IntervalUpdated',
        sts.struct({
            interval: sts.number(),
        })
    ),
}
