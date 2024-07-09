import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const minted =  {
    name: 'Technical.Minted',
    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    v85: new EventType(
        'Technical.Minted',
        sts.tuple([v85.TechAssetId, v85.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const burned =  {
    name: 'Technical.Burned',
    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    v85: new EventType(
        'Technical.Burned',
        sts.tuple([v85.TechAssetId, v85.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const outputTransferred =  {
    name: 'Technical.OutputTransferred',
    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v85: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v85.TechAssetId, v85.TechAccountId, v85.AccountId32, sts.bigint()])
    ),
}

export const inputTransferred =  {
    name: 'Technical.InputTransferred',
    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v85: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v85.TechAssetId, v85.AccountId32, v85.TechAccountId, sts.bigint()])
    ),
}

export const swapSuccess =  {
    name: 'Technical.SwapSuccess',
    /**
     * Swap operaction is finalised [initiator, finaliser].
     * TechAccountId is only pure TechAccountId.
     */
    v85: new EventType(
        'Technical.SwapSuccess',
        v85.AccountId32
    ),
}
