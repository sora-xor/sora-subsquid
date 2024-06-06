import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const referenceAssetChanged =  {
    name: 'XSTPool.ReferenceAssetChanged',
    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v85: new EventType(
        'XSTPool.ReferenceAssetChanged',
        v85.AssetId32
    ),
}

export const syntheticAssetEnabled =  {
    name: 'XSTPool.SyntheticAssetEnabled',
    /**
     * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
     */
    v85: new EventType(
        'XSTPool.SyntheticAssetEnabled',
        sts.tuple([v85.AssetId32, v85.SymbolName])
    ),
}

export const syntheticAssetDisabled =  {
    name: 'XSTPool.SyntheticAssetDisabled',
    /**
     * Synthetic asset has been disabled. [Synthetic Asset Id]
     */
    v85: new EventType(
        'XSTPool.SyntheticAssetDisabled',
        v85.AssetId32
    ),
}

export const syntheticAssetFeeChanged =  {
    name: 'XSTPool.SyntheticAssetFeeChanged',
    /**
     * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
     */
    v85: new EventType(
        'XSTPool.SyntheticAssetFeeChanged',
        sts.tuple([v85.AssetId32, v85.FixedPoint])
    ),
}

export const syntheticBaseAssetFloorPriceChanged =  {
    name: 'XSTPool.SyntheticBaseAssetFloorPriceChanged',
    /**
     * Floor price of the synthetic base asset has been changed. [New Floor Price]
     */
    v85: new EventType(
        'XSTPool.SyntheticBaseAssetFloorPriceChanged',
        sts.bigint()
    ),
}

export const syntheticAssetRemoved =  {
    name: 'XSTPool.SyntheticAssetRemoved',
    /**
     * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
     */
    v85: new EventType(
        'XSTPool.SyntheticAssetRemoved',
        sts.tuple([v85.AssetId32, v85.SymbolName])
    ),
}
