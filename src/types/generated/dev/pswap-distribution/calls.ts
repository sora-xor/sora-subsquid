import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const claimIncentive =  {
    name: 'PswapDistribution.claim_incentive',
    v85: new CallType(
        'PswapDistribution.claim_incentive',
        sts.unit()
    ),
}
