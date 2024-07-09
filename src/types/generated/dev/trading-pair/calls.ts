import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const register =  {
    name: 'TradingPair.register',
    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    v85: new CallType(
        'TradingPair.register',
        sts.struct({
            dexId: sts.number(),
            baseAssetId: v85.AssetId32,
            targetAssetId: v85.AssetId32,
        })
    ),
}
