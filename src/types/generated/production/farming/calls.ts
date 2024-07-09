import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const migrateTo11 =  {
    name: 'Farming.migrate_to_1_1',
    v7: new CallType(
        'Farming.migrate_to_1_1',
        sts.unit()
    ),
}

export const setLpMinXorForBonusReward =  {
    name: 'Farming.set_lp_min_xor_for_bonus_reward',
    v77: new CallType(
        'Farming.set_lp_min_xor_for_bonus_reward',
        sts.struct({
            newLpMinXorForBonusReward: sts.bigint(),
        })
    ),
}
