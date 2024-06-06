import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const poolInitialized =  {
    name: 'MulticollateralBondingCurvePool.PoolInitialized',
    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.PoolInitialized',
        sts.tuple([sts.number(), v85.AssetId32])
    ),
}

export const referenceAssetChanged =  {
    name: 'MulticollateralBondingCurvePool.ReferenceAssetChanged',
    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.ReferenceAssetChanged',
        v85.AssetId32
    ),
}

export const optionalRewardMultiplierUpdated =  {
    name: 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
        sts.tuple([v85.AssetId32, sts.option(() => v85.FixedPoint)])
    ),
}

export const priceBiasChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceBiasChanged',
    /**
     * Price bias was changed. [New Price Bias]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.PriceBiasChanged',
        sts.bigint()
    ),
}

export const priceChangeConfigChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
    /**
     * Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
}

export const failedToDistributeFreeReserves =  {
    name: 'MulticollateralBondingCurvePool.FailedToDistributeFreeReserves',
    /**
     * Free reserves distribution routine failed. [Error]
     */
    v85: new EventType(
        'MulticollateralBondingCurvePool.FailedToDistributeFreeReserves',
        v85.DispatchError
    ),
}
