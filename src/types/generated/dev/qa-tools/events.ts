import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const orderBooksCreated =  {
    name: 'QaTools.OrderBooksCreated',
    /**
     * Requested order books have been created.
     */
    v85: new EventType(
        'QaTools.OrderBooksCreated',
        sts.unit()
    ),
}

export const orderBooksFilled =  {
    name: 'QaTools.OrderBooksFilled',
    /**
     * Requested order book have been filled.
     */
    v85: new EventType(
        'QaTools.OrderBooksFilled',
        sts.unit()
    ),
}

export const xykInitialized =  {
    name: 'QaTools.XykInitialized',
    /**
     * Xyk liquidity source has been initialized successfully.
     */
    v85: new EventType(
        'QaTools.XykInitialized',
        sts.struct({
            /**
             * Exact prices for token pairs achievable after the initialization.
             * Should correspond 1-to-1 to the initialization input and be quite close to the given values.
             */
            pricesAchieved: sts.array(() => v85.AssetPairInput),
        })
    ),
}

export const xstInitialized =  {
    name: 'QaTools.XstInitialized',
    /**
     * XST liquidity source has been initialized successfully.
     */
    v85: new EventType(
        'QaTools.XstInitialized',
        sts.struct({
            /**
             * Exact `quote`/`exchange` calls achievable after the initialization.
             * Should correspond 1-to-1 to the initialization input and be quite close to the given values.
             */
            quotesAchieved: sts.array(() => v85.SyntheticOutput),
        })
    ),
}

export const mcbcInitialized =  {
    name: 'QaTools.McbcInitialized',
    /**
     * Multicollateral bonding curve liquidity source has been initialized successfully.
     */
    v85: new EventType(
        'QaTools.McbcInitialized',
        sts.struct({
            /**
             * Exact reference prices achieved for the collateral assets.
             */
            collateralRefPrices: sts.array(() => sts.tuple(() => [v85.AssetId32, v85.AssetPrices])),
        })
    ),
}
