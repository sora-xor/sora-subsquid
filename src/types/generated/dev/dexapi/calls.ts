import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enableLiquiditySource =  {
    name: 'DEXAPI.enable_liquidity_source',
    v85: new CallType(
        'DEXAPI.enable_liquidity_source',
        sts.struct({
            source: v85.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'DEXAPI.disable_liquidity_source',
    v85: new CallType(
        'DEXAPI.disable_liquidity_source',
        sts.struct({
            source: v85.LiquiditySourceType,
        })
    ),
}
