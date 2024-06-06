import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const orderBookCreateAndFillBatch =  {
    name: 'QaTools.order_book_create_and_fill_batch',
    /**
     * Create multiple many order books with parameters and fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * In order to create empty order books, one can leave settings empty.
     * 
     * Parameters:
     * - `origin`: root
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `settings`: Parameters for creation of the order book and placing the orders in each order book.
     */
    v85: new CallType(
        'QaTools.order_book_create_and_fill_batch',
        sts.struct({
            bidsOwner: v85.AccountId32,
            asksOwner: v85.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v85.OrderBookId, v85.OrderBookAttributes, v85.FillInput])),
        })
    ),
}

export const orderBookFillBatch =  {
    name: 'QaTools.order_book_fill_batch',
    /**
     * Fill the order books according to given parameters.
     * 
     * Balance for placing the orders is minted automatically.
     * 
     * Parameters:
     * - `origin`: root
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `settings`: Parameters for placing the orders in each order book.
     */
    v85: new CallType(
        'QaTools.order_book_fill_batch',
        sts.struct({
            bidsOwner: v85.AccountId32,
            asksOwner: v85.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v85.OrderBookId, v85.FillInput])),
        })
    ),
}

export const xykInitialize =  {
    name: 'QaTools.xyk_initialize',
    /**
     * Initialize xyk pool liquidity source.
     * 
     * Parameters:
     * - `origin`: Root
     * - `account`: Some account to use during the initialization
     * - `pairs`: Asset pairs to initialize.
     */
    v85: new CallType(
        'QaTools.xyk_initialize',
        sts.struct({
            account: v85.AccountId32,
            pairs: sts.array(() => v85.AssetPairInput),
        })
    ),
}

export const xstInitialize =  {
    name: 'QaTools.xst_initialize',
    /**
     * Initialize xst liquidity source. In xst's `quote`, one of the assets is the synthetic base
     * (XST) and the other one is a synthetic asset.
     * 
     * Parameters:
     * - `origin`: Root
     * - `base_prices`: Synthetic base asset price update. Usually buy price > sell.
     * - `synthetics_prices`: Synthetic initialization;
     * registration of an asset + setting up prices for target quotes.
     * - `relayer`: Account which will be the author of prices fed to `band` pallet;
     * 
     * Emits events with actual quotes achieved after initialization;
     * more details in [`liquidity_sources::initialize_xst`]
     */
    v85: new CallType(
        'QaTools.xst_initialize',
        sts.struct({
            basePrices: sts.option(() => v85.BaseInput),
            syntheticsPrices: sts.array(() => v85.SyntheticInput),
            relayer: v85.AccountId32,
        })
    ),
}

export const mcbcInitialize =  {
    name: 'QaTools.mcbc_initialize',
    /**
     * Initialize mcbc liquidity source.
     * 
     * Parameters:
     * - `origin`: Root
     * - `base_supply`: Control supply of XOR,
     * - `other_collaterals`: Variables related to arbitrary collateral-specific pricing,
     * - `tbcd_collateral`: TBCD-specific pricing variables.
     */
    v85: new CallType(
        'QaTools.mcbc_initialize',
        sts.struct({
            baseSupply: sts.option(() => v85.BaseSupply),
            otherCollaterals: sts.array(() => v85.OtherCollateralInput),
            tbcdCollateral: sts.option(() => v85.TbcdCollateralInput),
        })
    ),
}

export const priceToolsSetAssetPrice =  {
    name: 'QaTools.price_tools_set_asset_price',
    /**
     * Set prices of an asset in `price_tools` pallet.
     * Ignores pallet restrictions on price speed change.
     * 
     * Parameters:
     * - `origin`: Root
     * - `asset_per_xor`: Prices (1 XOR in terms of the corresponding asset).
     * - `asset_id`: Asset identifier; can be some common constant for easier input.
     */
    v85: new CallType(
        'QaTools.price_tools_set_asset_price',
        sts.struct({
            assetPerXor: v85.AssetPrices,
            assetId: v85.InputAssetId,
        })
    ),
}
