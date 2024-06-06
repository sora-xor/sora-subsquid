import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const messageDispatched =  {
    name: 'SubstrateDispatch.MessageDispatched',
    /**
     * Message has been dispatched with given result.
     */
    v85: new EventType(
        'SubstrateDispatch.MessageDispatched',
        sts.tuple([v85.MessageId, sts.result(() => sts.unit(), () => v85.DispatchError)])
    ),
}

export const messageRejected =  {
    name: 'SubstrateDispatch.MessageRejected',
    /**
     * Message has been rejected
     */
    v85: new EventType(
        'SubstrateDispatch.MessageRejected',
        v85.MessageId
    ),
}

export const messageDecodeFailed =  {
    name: 'SubstrateDispatch.MessageDecodeFailed',
    /**
     * We have failed to decode a Call from the message.
     */
    v85: new EventType(
        'SubstrateDispatch.MessageDecodeFailed',
        v85.MessageId
    ),
}
