import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const poolIsInitialized =  {
    name: 'PoolXYK.PoolIsInitialized',
    v85: new EventType(
        'PoolXYK.PoolIsInitialized',
        v85.AccountId32
    ),
}
