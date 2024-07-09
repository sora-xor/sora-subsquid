import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const depositLiquidity =  {
    name: 'PoolXYK.deposit_liquidity',
    v85: new CallType(
        'PoolXYK.deposit_liquidity',
        sts.struct({
            dexId: sts.number(),
            inputAssetA: v85.AssetId32,
            inputAssetB: v85.AssetId32,
            inputADesired: sts.bigint(),
            inputBDesired: sts.bigint(),
            inputAMin: sts.bigint(),
            inputBMin: sts.bigint(),
        })
    ),
}

export const withdrawLiquidity =  {
    name: 'PoolXYK.withdraw_liquidity',
    v85: new CallType(
        'PoolXYK.withdraw_liquidity',
        sts.struct({
            dexId: sts.number(),
            outputAssetA: v85.AssetId32,
            outputAssetB: v85.AssetId32,
            markerAssetDesired: sts.bigint(),
            outputAMin: sts.bigint(),
            outputBMin: sts.bigint(),
        })
    ),
}

export const initializePool =  {
    name: 'PoolXYK.initialize_pool',
    v85: new CallType(
        'PoolXYK.initialize_pool',
        sts.struct({
            dexId: sts.number(),
            assetA: v85.AssetId32,
            assetB: v85.AssetId32,
        })
    ),
}
