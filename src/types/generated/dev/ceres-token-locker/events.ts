import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const locked =  {
    name: 'CeresTokenLocker.Locked',
    /**
     * Funds Locked [who, amount, asset]
     */
    v85: new EventType(
        'CeresTokenLocker.Locked',
        sts.tuple([v85.AccountId32, sts.bigint(), v85.AssetId32])
    ),
}

export const withdrawn =  {
    name: 'CeresTokenLocker.Withdrawn',
    /**
     * Funds Withdrawn [who, amount, asset]
     */
    v85: new EventType(
        'CeresTokenLocker.Withdrawn',
        sts.tuple([v85.AccountId32, sts.bigint(), v85.AssetId32])
    ),
}

export const feeChanged =  {
    name: 'CeresTokenLocker.FeeChanged',
    /**
     * Fee Changed [who, amount]
     */
    v85: new EventType(
        'CeresTokenLocker.FeeChanged',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}
