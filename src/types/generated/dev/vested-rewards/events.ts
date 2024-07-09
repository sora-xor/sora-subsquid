import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const rewardsVested =  {
    name: 'VestedRewards.RewardsVested',
    /**
     * Rewards vested, limits were raised. [vested amount]
     */
    v85: new EventType(
        'VestedRewards.RewardsVested',
        sts.bigint()
    ),
}

export const actualDoesntMatchAvailable =  {
    name: 'VestedRewards.ActualDoesntMatchAvailable',
    /**
     * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
     */
    v85: new EventType(
        'VestedRewards.ActualDoesntMatchAvailable',
        v85.RewardReason
    ),
}

export const failedToSaveCalculatedReward =  {
    name: 'VestedRewards.FailedToSaveCalculatedReward',
    /**
     * Saving reward for account has failed in a distribution series. [account]
     */
    v85: new EventType(
        'VestedRewards.FailedToSaveCalculatedReward',
        v85.AccountId32
    ),
}

export const crowdloanClaimed =  {
    name: 'VestedRewards.CrowdloanClaimed',
    /**
     * Claimed crowdloan rewards
     */
    v85: new EventType(
        'VestedRewards.CrowdloanClaimed',
        sts.tuple([v85.AccountId32, v85.AssetId32, sts.bigint()])
    ),
}
