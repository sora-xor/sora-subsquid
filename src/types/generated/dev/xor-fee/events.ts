import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const feeWithdrawn =  {
    name: 'XorFee.FeeWithdrawn',
    /**
     * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    v85: new EventType(
        'XorFee.FeeWithdrawn',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}

export const referrerRewarded =  {
    name: 'XorFee.ReferrerRewarded',
    /**
     * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    v85: new EventType(
        'XorFee.ReferrerRewarded',
        sts.tuple([v85.AccountId32, v85.AccountId32, sts.bigint()])
    ),
}

export const weightToFeeMultiplierUpdated =  {
    name: 'XorFee.WeightToFeeMultiplierUpdated',
    /**
     * New multiplier for weight to fee conversion is set
     * (*1_000_000_000_000_000_000). [New value]
     */
    v85: new EventType(
        'XorFee.WeightToFeeMultiplierUpdated',
        v85.FixedU128
    ),
}
