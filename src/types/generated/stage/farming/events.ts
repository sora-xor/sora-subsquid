import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const lpMinXorForBonusRewardUpdated =  {
    name: 'Farming.LpMinXorForBonusRewardUpdated',
    /**
     * When Minimum XOR amount for Liquidity Provider Bonus Reward is updated
     */
    v77: new EventType(
        'Farming.LpMinXorForBonusRewardUpdated',
        sts.struct({
            newLpMinXorForBonusReward: sts.bigint(),
            oldLpMinXorForBonusReward: sts.bigint(),
        })
    ),
}
