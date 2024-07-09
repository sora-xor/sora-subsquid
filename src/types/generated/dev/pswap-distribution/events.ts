import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const feesExchanged =  {
    name: 'PswapDistribution.FeesExchanged',
    /**
     * Fees successfully exchanged for appropriate amount of pool tokens.
     * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
     */
    v85: new EventType(
        'PswapDistribution.FeesExchanged',
        sts.tuple([sts.number(), v85.AccountId32, v85.AssetId32, sts.bigint(), v85.AssetId32, sts.bigint()])
    ),
}

export const feesExchangeFailed =  {
    name: 'PswapDistribution.FeesExchangeFailed',
    /**
     * Problem occurred that resulted in fees exchange not done.
     * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
     */
    v85: new EventType(
        'PswapDistribution.FeesExchangeFailed',
        sts.tuple([sts.number(), v85.AccountId32, v85.AssetId32, sts.bigint(), v85.AssetId32, v85.DispatchError])
    ),
}

export const incentiveDistributed =  {
    name: 'PswapDistribution.IncentiveDistributed',
    /**
     * Incentives successfully sent out to shareholders.
     * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
     */
    v85: new EventType(
        'PswapDistribution.IncentiveDistributed',
        sts.tuple([sts.number(), v85.AccountId32, v85.AssetId32, sts.bigint(), sts.bigint()])
    ),
}

export const incentiveDistributionFailed =  {
    name: 'PswapDistribution.IncentiveDistributionFailed',
    /**
     * Problem occurred that resulted in incentive distribution not done.
     * [DEX Id, Fees Account Id]
     */
    v85: new EventType(
        'PswapDistribution.IncentiveDistributionFailed',
        sts.tuple([sts.number(), v85.AccountId32])
    ),
}

export const burnRateChanged =  {
    name: 'PswapDistribution.BurnRateChanged',
    /**
     * Burn rate updated.
     * [Current Burn Rate]
     */
    v85: new EventType(
        'PswapDistribution.BurnRateChanged',
        v85.FixedPoint
    ),
}

export const nothingToExchange =  {
    name: 'PswapDistribution.NothingToExchange',
    /**
     * Fees Account contains zero base tokens, thus exchange is dismissed.
     * [DEX Id, Fees Account Id]
     */
    v85: new EventType(
        'PswapDistribution.NothingToExchange',
        sts.tuple([sts.number(), v85.AccountId32])
    ),
}

export const nothingToDistribute =  {
    name: 'PswapDistribution.NothingToDistribute',
    /**
     * Fees Account contains zero incentive tokens, thus distribution is dismissed.
     * [DEX Id, Fees Account Id]
     */
    v85: new EventType(
        'PswapDistribution.NothingToDistribute',
        sts.tuple([sts.number(), v85.AccountId32])
    ),
}

export const incentivesBurnedAfterExchange =  {
    name: 'PswapDistribution.IncentivesBurnedAfterExchange',
    /**
     * This is needed for other pallet that will use this variables, for example this is
     * farming pallet.
     * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
     * Incentives burned (Incentives that is not revived (to burn)]).
     */
    v85: new EventType(
        'PswapDistribution.IncentivesBurnedAfterExchange',
        sts.tuple([sts.number(), v85.AssetId32, sts.bigint(), sts.bigint()])
    ),
}
