import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const registerToken =  {
    name: 'DemeterFarmingPlatform.register_token',
    /**
     * Register token for farming
     */
    v85: new CallType(
        'DemeterFarmingPlatform.register_token',
        sts.struct({
            poolAsset: v85.AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: v85.AccountId32,
        })
    ),
}

export const addPool =  {
    name: 'DemeterFarmingPlatform.add_pool',
    /**
     * Add pool
     */
    v85: new CallType(
        'DemeterFarmingPlatform.add_pool',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            multiplier: sts.number(),
            depositFee: sts.bigint(),
            isCore: sts.boolean(),
        })
    ),
}

export const deposit =  {
    name: 'DemeterFarmingPlatform.deposit',
    /**
     * Deposit to pool
     */
    v85: new CallType(
        'DemeterFarmingPlatform.deposit',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            pooledTokens: sts.bigint(),
        })
    ),
}

export const getRewards =  {
    name: 'DemeterFarmingPlatform.get_rewards',
    /**
     * Get rewards
     */
    v85: new CallType(
        'DemeterFarmingPlatform.get_rewards',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
}

export const withdraw =  {
    name: 'DemeterFarmingPlatform.withdraw',
    /**
     * Withdraw
     */
    v85: new CallType(
        'DemeterFarmingPlatform.withdraw',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            pooledTokens: sts.bigint(),
            isFarm: sts.boolean(),
        })
    ),
}

export const removePool =  {
    name: 'DemeterFarmingPlatform.remove_pool',
    /**
     * Remove pool
     */
    v85: new CallType(
        'DemeterFarmingPlatform.remove_pool',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
        })
    ),
}

export const changePoolMultiplier =  {
    name: 'DemeterFarmingPlatform.change_pool_multiplier',
    /**
     * Change pool multiplier
     */
    v85: new CallType(
        'DemeterFarmingPlatform.change_pool_multiplier',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            newMultiplier: sts.number(),
        })
    ),
}

export const changeTotalTokens =  {
    name: 'DemeterFarmingPlatform.change_total_tokens',
    /**
     * Change total tokens
     */
    v85: new CallType(
        'DemeterFarmingPlatform.change_total_tokens',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            totalTokens: sts.bigint(),
        })
    ),
}

export const changeInfo =  {
    name: 'DemeterFarmingPlatform.change_info',
    /**
     * Change info
     */
    v85: new CallType(
        'DemeterFarmingPlatform.change_info',
        sts.struct({
            changedUser: v85.AccountId32,
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            poolTokens: sts.bigint(),
        })
    ),
}

export const changePoolDepositFee =  {
    name: 'DemeterFarmingPlatform.change_pool_deposit_fee',
    /**
     * Change pool deposit fee
     */
    v85: new CallType(
        'DemeterFarmingPlatform.change_pool_deposit_fee',
        sts.struct({
            baseAsset: v85.AssetId32,
            poolAsset: v85.AssetId32,
            rewardAsset: v85.AssetId32,
            isFarm: sts.boolean(),
            depositFee: sts.bigint(),
        })
    ),
}

export const changeTokenInfo =  {
    name: 'DemeterFarmingPlatform.change_token_info',
    /**
     * Change token info
     */
    v85: new CallType(
        'DemeterFarmingPlatform.change_token_info',
        sts.struct({
            poolAsset: v85.AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: v85.AccountId32,
        })
    ),
}
