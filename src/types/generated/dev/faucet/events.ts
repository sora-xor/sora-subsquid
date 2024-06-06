import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const transferred =  {
    name: 'Faucet.Transferred',
    v85: new EventType(
        'Faucet.Transferred',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}

export const limitUpdated =  {
    name: 'Faucet.LimitUpdated',
    v85: new EventType(
        'Faucet.LimitUpdated',
        sts.bigint()
    ),
}
