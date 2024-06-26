import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const setReferenceAsset =  {
    name: 'XSTPool.set_reference_asset',
    /**
     * Change reference asset which is used to determine collateral assets value.
     * Intended to be e.g., stablecoin DAI.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `reference_asset_id`: asset id of the new reference asset.
     */
    v85: new CallType(
        'XSTPool.set_reference_asset',
        sts.struct({
            referenceAssetId: v85.AssetId32,
        })
    ),
}

export const enableSyntheticAsset =  {
    name: 'XSTPool.enable_synthetic_asset',
    v85: new CallType(
        'XSTPool.enable_synthetic_asset',
        sts.struct({
            assetId: v85.AssetId32,
            referenceSymbol: v85.SymbolName,
            feeRatio: v85.FixedPoint,
        })
    ),
}

export const registerSyntheticAsset =  {
    name: 'XSTPool.register_synthetic_asset',
    /**
     * Register and enable new synthetic asset with `reference_symbol` price binding
     */
    v85: new CallType(
        'XSTPool.register_synthetic_asset',
        sts.struct({
            assetSymbol: v85.AssetSymbol,
            assetName: v85.AssetName,
            referenceSymbol: v85.SymbolName,
            feeRatio: v85.FixedPoint,
        })
    ),
}

export const disableSyntheticAsset =  {
    name: 'XSTPool.disable_synthetic_asset',
    /**
     * Disable synthetic asset.
     * 
     * Removes synthetic from exchanging
     * and removes XSTPool liquidity source for corresponding trading pair.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to disable.
     */
    v85: new CallType(
        'XSTPool.disable_synthetic_asset',
        sts.struct({
            syntheticAsset: v85.AssetId32,
        })
    ),
}

export const removeSyntheticAsset =  {
    name: 'XSTPool.remove_synthetic_asset',
    /**
     * Entirely remove synthetic asset (including linked symbol info)
     */
    v85: new CallType(
        'XSTPool.remove_synthetic_asset',
        sts.struct({
            syntheticAsset: v85.AssetId32,
        })
    ),
}

export const setSyntheticAssetFee =  {
    name: 'XSTPool.set_synthetic_asset_fee',
    /**
     * Set synthetic asset fee.
     * 
     * This fee will be used to determine the amount of synthetic base asset (e.g. XST) to be
     * burned when user buys synthetic asset.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to set fee for,
     * - `fee_ratio`: fee ratio with precision = 18, so 1000000000000000000 = 1 = 100% fee.
     */
    v85: new CallType(
        'XSTPool.set_synthetic_asset_fee',
        sts.struct({
            syntheticAsset: v85.AssetId32,
            feeRatio: v85.FixedPoint,
        })
    ),
}

export const setSyntheticBaseAssetFloorPrice =  {
    name: 'XSTPool.set_synthetic_base_asset_floor_price',
    /**
     * Set floor price for the synthetic base asset
     * 
     * - `origin`: root account
     * - `floor_price`: floor price for the synthetic base asset
     */
    v85: new CallType(
        'XSTPool.set_synthetic_base_asset_floor_price',
        sts.struct({
            floorPrice: sts.bigint(),
        })
    ),
}
