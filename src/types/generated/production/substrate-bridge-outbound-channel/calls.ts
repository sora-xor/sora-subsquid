import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const updateInterval =  {
    name: 'SubstrateBridgeOutboundChannel.update_interval',
    v72: new CallType(
        'SubstrateBridgeOutboundChannel.update_interval',
        sts.struct({
            newInterval: sts.number(),
        })
    ),
}
