import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const reserve =  {
    name: 'Referrals.reserve',
    /**
     * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    v85: new CallType(
        'Referrals.reserve',
        sts.struct({
            balance: sts.bigint(),
        })
    ),
}

export const unreserve =  {
    name: 'Referrals.unreserve',
    /**
     * Unreserves the balance and transfers it back to the account
     */
    v85: new CallType(
        'Referrals.unreserve',
        sts.struct({
            balance: sts.bigint(),
        })
    ),
}

export const setReferrer =  {
    name: 'Referrals.set_referrer',
    /**
     * Sets the referrer for the account
     */
    v85: new CallType(
        'Referrals.set_referrer',
        sts.struct({
            referrer: v85.AccountId32,
        })
    ),
}
