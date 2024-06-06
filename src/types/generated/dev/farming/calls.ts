import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const setLpMinXorForBonusReward =  {
    name: 'Farming.set_lp_min_xor_for_bonus_reward',
    v85: new CallType(
        'Farming.set_lp_min_xor_for_bonus_reward',
        sts.struct({
            newLpMinXorForBonusReward: sts.bigint(),
        })
    ),
}
