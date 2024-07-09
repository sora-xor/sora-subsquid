import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const requestStatusUpdate =  {
    name: 'BridgeProxy.RequestStatusUpdate',
    v85: new EventType(
        'BridgeProxy.RequestStatusUpdate',
        sts.tuple([v85.H256, v85.MessageStatus])
    ),
}

export const refundFailed =  {
    name: 'BridgeProxy.RefundFailed',
    v85: new EventType(
        'BridgeProxy.RefundFailed',
        v85.H256
    ),
}
