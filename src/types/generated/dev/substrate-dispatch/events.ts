import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const messageDispatched =  {
    name: 'SubstrateDispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v70: new EventType(
        'SubstrateDispatch.MessageDispatched',
        sts.tuple([v70.MessageId, sts.result(() => sts.unit(), () => v70.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'SubstrateDispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v70: new EventType(
        'SubstrateDispatch.MessageRejected',
        v70.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'SubstrateDispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v70: new EventType(
        'SubstrateDispatch.MessageDecodeFailed',
        v70.MessageId
    ),
}
