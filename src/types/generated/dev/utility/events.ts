import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v85: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v85.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    v85: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    v85: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    v85: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v85: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v85.DispatchError,
        })
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    v85: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v85.DispatchError),
        })
    ),
}
