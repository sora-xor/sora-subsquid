import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const locked =  {
    name: 'CeresLiquidityLocker.Locked',
    /**
     * Funds Locked [who, amount, timestamp]
     */
    v85: new EventType(
        'CeresLiquidityLocker.Locked',
        sts.tuple([v85.AccountId32, sts.bigint(), sts.bigint()])
    ),
}
