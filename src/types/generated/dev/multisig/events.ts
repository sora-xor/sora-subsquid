import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    v85: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v85.AccountId32,
            multisig: v85.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    v85: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v85.AccountId32,
            timepoint: v85.Timepoint,
            multisig: v85.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    v85: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v85.AccountId32,
            timepoint: v85.Timepoint,
            multisig: v85.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v85.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    v85: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v85.AccountId32,
            timepoint: v85.Timepoint,
            multisig: v85.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
