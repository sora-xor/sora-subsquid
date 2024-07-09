import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    v85: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v85.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    v85: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v85.DispatchError,
            dispatchInfo: v85.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v85: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    v85: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v85.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    v85: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v85.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    v85: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v85.AccountId32,
            hash: v85.H256,
        })
    ),
}
