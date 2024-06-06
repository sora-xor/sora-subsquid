import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const lockTokens =  {
    name: 'CeresTokenLocker.lock_tokens',
    /**
     * Lock tokens
     */
    v85: new CallType(
        'CeresTokenLocker.lock_tokens',
        sts.struct({
            assetId: v85.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const withdrawTokens =  {
    name: 'CeresTokenLocker.withdraw_tokens',
    /**
     * Withdraw tokens
     */
    v85: new CallType(
        'CeresTokenLocker.withdraw_tokens',
        sts.struct({
            assetId: v85.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const changeFee =  {
    name: 'CeresTokenLocker.change_fee',
    /**
     * Change fee
     */
    v85: new CallType(
        'CeresTokenLocker.change_fee',
        sts.struct({
            newFee: sts.bigint(),
        })
    ),
}
