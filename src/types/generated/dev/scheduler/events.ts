import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    v85: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const canceled =  {
    name: 'Scheduler.Canceled',
    /**
     * Canceled some task.
     */
    v85: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v85: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v85.DispatchError),
        })
    ),
}

export const callUnavailable =  {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v85: new EventType(
        'Scheduler.CallUnavailable',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const periodicFailed =  {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    v85: new EventType(
        'Scheduler.PeriodicFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const permanentlyOverweight =  {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    v85: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
