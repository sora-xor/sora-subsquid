import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const poolAdded =  {
    name: 'ApolloPlatform.PoolAdded',
    /**
     * Pool added [who, asset_id]
     */
    v85: new EventType(
        'ApolloPlatform.PoolAdded',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}

export const lent =  {
    name: 'ApolloPlatform.Lent',
    /**
     * Lent [who, asset_id, amount]
     */
    v85: new EventType(
        'ApolloPlatform.Lent',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const borrowed =  {
    name: 'ApolloPlatform.Borrowed',
    /**
     * Borrowed [who, collateral_asset, collateral_amount, borrow_asset, borrow_amount]
     */
    v85: new EventType(
        'ApolloPlatform.Borrowed',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint(), v85.AssetId32, sts.bigint()])
    ),
}

export const claimedLendingRewards =  {
    name: 'ApolloPlatform.ClaimedLendingRewards',
    /**
     * ClaimedLendingRewards [who, asset_id, amount]
     */
    v85: new EventType(
        'ApolloPlatform.ClaimedLendingRewards',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const claimedBorrowingRewards =  {
    name: 'ApolloPlatform.ClaimedBorrowingRewards',
    /**
     * ClaimedBorrowingRewards [who, asset_id, amount]
     */
    v85: new EventType(
        'ApolloPlatform.ClaimedBorrowingRewards',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'ApolloPlatform.Withdrawn',
    /**
     * Withdrawn [who, asset_id, amount]
     */
    v85: new EventType(
        'ApolloPlatform.Withdrawn',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const repaid =  {
    name: 'ApolloPlatform.Repaid',
    /**
     * Repaid [who, asset_id, amount]
     */
    v85: new EventType(
        'ApolloPlatform.Repaid',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}

export const changedRewardsAmount =  {
    name: 'ApolloPlatform.ChangedRewardsAmount',
    v85: new EventType(
        'ApolloPlatform.ChangedRewardsAmount',
        sts.tuple([v85.AccountId32, sts.boolean(), sts.bigint()])
    ),
}

export const changedRewardsAmountPerBlock =  {
    name: 'ApolloPlatform.ChangedRewardsAmountPerBlock',
    v85: new EventType(
        'ApolloPlatform.ChangedRewardsAmountPerBlock',
        sts.tuple([v85.AccountId32, sts.boolean(), sts.bigint()])
    ),
}

export const liquidated =  {
    name: 'ApolloPlatform.Liquidated',
    /**
     * Liquidated [who, asset_id]
     */
    v85: new EventType(
        'ApolloPlatform.Liquidated',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}

export const poolRemoved =  {
    name: 'ApolloPlatform.PoolRemoved',
    /**
     * Pool removed [who, asset_id]
     */
    v85: new EventType(
        'ApolloPlatform.PoolRemoved',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}

export const poolInfoEdited =  {
    name: 'ApolloPlatform.PoolInfoEdited',
    /**
     * Pool info edited [who, asset_id]
     */
    v85: new EventType(
        'ApolloPlatform.PoolInfoEdited',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}
