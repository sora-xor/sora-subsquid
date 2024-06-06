import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const addPool =  {
    name: 'ApolloPlatform.add_pool',
    /**
     * Add pool
     */
    v85: new CallType(
        'ApolloPlatform.add_pool',
        sts.struct({
            assetId: v85.AssetId32,
            loanToValue: sts.bigint(),
            liquidationThreshold: sts.bigint(),
            optimalUtilizationRate: sts.bigint(),
            baseRate: sts.bigint(),
            slopeRate1: sts.bigint(),
            slopeRate2: sts.bigint(),
            reserveFactor: sts.bigint(),
        })
    ),
}

export const lend =  {
    name: 'ApolloPlatform.lend',
    /**
     * Lend token
     */
    v85: new CallType(
        'ApolloPlatform.lend',
        sts.struct({
            lendingAsset: v85.AssetId32,
            lendingAmount: sts.bigint(),
        })
    ),
}

export const borrow =  {
    name: 'ApolloPlatform.borrow',
    /**
     * Borrow token
     */
    v85: new CallType(
        'ApolloPlatform.borrow',
        sts.struct({
            collateralAsset: v85.AssetId32,
            borrowingAsset: v85.AssetId32,
            borrowingAmount: sts.bigint(),
        })
    ),
}

export const getRewards =  {
    name: 'ApolloPlatform.get_rewards',
    /**
     * Get rewards
     */
    v85: new CallType(
        'ApolloPlatform.get_rewards',
        sts.struct({
            assetId: v85.AssetId32,
            isLending: sts.boolean(),
        })
    ),
}

export const withdraw =  {
    name: 'ApolloPlatform.withdraw',
    /**
     * Withdraw
     */
    v85: new CallType(
        'ApolloPlatform.withdraw',
        sts.struct({
            withdrawnAsset: v85.AssetId32,
            withdrawnAmount: sts.bigint(),
        })
    ),
}

export const repay =  {
    name: 'ApolloPlatform.repay',
    /**
     * Repay
     */
    v85: new CallType(
        'ApolloPlatform.repay',
        sts.struct({
            collateralAsset: v85.AssetId32,
            borrowingAsset: v85.AssetId32,
            amountToRepay: sts.bigint(),
        })
    ),
}

export const changeRewardsAmount =  {
    name: 'ApolloPlatform.change_rewards_amount',
    /**
     * Change rewards amount
     */
    v85: new CallType(
        'ApolloPlatform.change_rewards_amount',
        sts.struct({
            isLending: sts.boolean(),
            amount: sts.bigint(),
        })
    ),
}

export const changeRewardsPerBlock =  {
    name: 'ApolloPlatform.change_rewards_per_block',
    /**
     * Change rewards per block
     */
    v85: new CallType(
        'ApolloPlatform.change_rewards_per_block',
        sts.struct({
            isLending: sts.boolean(),
            amount: sts.bigint(),
        })
    ),
}

export const liquidate =  {
    name: 'ApolloPlatform.liquidate',
    /**
     * Liquidate
     */
    v85: new CallType(
        'ApolloPlatform.liquidate',
        sts.struct({
            user: v85.AccountId32,
            assetId: v85.AssetId32,
        })
    ),
}

export const removePool =  {
    name: 'ApolloPlatform.remove_pool',
    /**
     * Remove pool
     */
    v85: new CallType(
        'ApolloPlatform.remove_pool',
        sts.struct({
            assetIdToRemove: v85.AssetId32,
        })
    ),
}

export const editPoolInfo =  {
    name: 'ApolloPlatform.edit_pool_info',
    /**
     * Edit pool info
     */
    v85: new CallType(
        'ApolloPlatform.edit_pool_info',
        sts.struct({
            assetId: v85.AssetId32,
            newLoanToValue: sts.bigint(),
            newLiquidationThreshold: sts.bigint(),
            newOptimalUtilizationRate: sts.bigint(),
            newBaseRate: sts.bigint(),
            newSlopeRate1: sts.bigint(),
            newSlopeRate2: sts.bigint(),
            newReserveFactor: sts.bigint(),
        })
    ),
}
