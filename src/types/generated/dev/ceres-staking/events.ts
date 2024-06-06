import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const deposited =  {
    name: 'CeresStaking.Deposited',
    /**
     * Ceres deposited. [who, amount]
     */
    v85: new EventType(
        'CeresStaking.Deposited',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'CeresStaking.Withdrawn',
    /**
     * Staked Ceres and rewards withdrawn. [who, staked, rewards]
     */
    v85: new EventType(
        'CeresStaking.Withdrawn',
        sts.tuple([v85.AccountId32, sts.bigint(), sts.bigint()])
    ),
}

export const rewardsChanged =  {
    name: 'CeresStaking.RewardsChanged',
    /**
     * Rewards changed [balance]
     */
    v85: new EventType(
        'CeresStaking.RewardsChanged',
        sts.bigint()
    ),
}
