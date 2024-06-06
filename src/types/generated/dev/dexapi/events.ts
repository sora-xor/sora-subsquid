import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const liquiditySourceEnabled =  {
    name: 'DEXAPI.LiquiditySourceEnabled',
    /**
     * Liquidity source is enabled
     */
    v85: new EventType(
        'DEXAPI.LiquiditySourceEnabled',
        v85.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'DEXAPI.LiquiditySourceDisabled',
    /**
     * Liquidity source is disabled
     */
    v85: new EventType(
        'DEXAPI.LiquiditySourceDisabled',
        v85.LiquiditySourceType
    ),
}
