import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const tokenRegistered =  {
    name: 'DemeterFarmingPlatform.TokenRegistered',
    /**
     * Token registered [who, what]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.TokenRegistered',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}

export const poolAdded =  {
    name: 'DemeterFarmingPlatform.PoolAdded',
    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.PoolAdded',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean()])
    ),
}

export const rewardWithdrawn =  {
    name: 'DemeterFarmingPlatform.RewardWithdrawn',
    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.RewardWithdrawn',
        sts.tuple([v85.AccountId32, sts.bigint(), v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean()])
    ),
}

export const withdrawn =  {
    name: 'DemeterFarmingPlatform.Withdrawn',
    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.Withdrawn',
        sts.tuple([v85.AccountId32, sts.bigint(), v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean()])
    ),
}

export const poolRemoved =  {
    name: 'DemeterFarmingPlatform.PoolRemoved',
    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.PoolRemoved',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean()])
    ),
}

export const deposited =  {
    name: 'DemeterFarmingPlatform.Deposited',
    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.Deposited',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const multiplierChanged =  {
    name: 'DemeterFarmingPlatform.MultiplierChanged',
    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.MultiplierChanged',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean(), sts.number()])
    ),
}

export const depositFeeChanged =  {
    name: 'DemeterFarmingPlatform.DepositFeeChanged',
    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.DepositFeeChanged',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const tokenInfoChanged =  {
    name: 'DemeterFarmingPlatform.TokenInfoChanged',
    /**
     * Token info changed [who, what]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.TokenInfoChanged',
        sts.tuple([v85.AccountId32, v85.AssetId32])
    ),
}

export const totalTokensChanged =  {
    name: 'DemeterFarmingPlatform.TotalTokensChanged',
    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.TotalTokensChanged',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const infoChanged =  {
    name: 'DemeterFarmingPlatform.InfoChanged',
    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v85: new EventType(
        'DemeterFarmingPlatform.InfoChanged',
        sts.tuple([v85.AccountId32, v85.AssetId32, v85.AssetId32, v85.AssetId32, sts.boolean(), sts.bigint()])
    ),
}
