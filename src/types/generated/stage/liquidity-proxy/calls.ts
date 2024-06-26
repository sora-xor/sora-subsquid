import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v45 from '../v45'
import * as v50 from '../v50'
import * as v63 from '../v63'
import * as v66 from '../v66'
import * as v71 from '../v71'
import * as v74 from '../v74'

export const swap =  {
    name: 'LiquidityProxy.swap',
    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v1: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: v1.DEXId,
            inputAssetId: v1.AssetId,
            outputAssetId: v1.AssetId,
            swapAmount: v1.SwapAmount,
            selectedSourceTypes: sts.array(() => v1.LiquiditySourceType),
            filterMode: v1.FilterMode,
        })
    ),
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v42: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: sts.number(),
            inputAssetId: v42.AssetId32,
            outputAssetId: v42.AssetId32,
            swapAmount: v42.SwapAmount,
            selectedSourceTypes: sts.array(() => v42.LiquiditySourceType),
            filterMode: v42.FilterMode,
        })
    ),
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v71: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: sts.number(),
            inputAssetId: v71.AssetId32,
            outputAssetId: v71.AssetId32,
            swapAmount: v71.SwapAmount,
            selectedSourceTypes: sts.array(() => v71.LiquiditySourceType),
            filterMode: v71.FilterMode,
        })
    ),
}

export const swapTransfer =  {
    name: 'LiquidityProxy.swap_transfer',
    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `receiver`: the account that receives the output,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v33: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v33.AccountId,
            dexId: v33.DEXId,
            inputAssetId: v33.AssetId,
            outputAssetId: v33.AssetId,
            swapAmount: v33.SwapAmount,
            selectedSourceTypes: sts.array(() => v33.LiquiditySourceType),
            filterMode: v33.FilterMode,
        })
    ),
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v42: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v42.AccountId32,
            dexId: sts.number(),
            inputAssetId: v42.AssetId32,
            outputAssetId: v42.AssetId32,
            swapAmount: v42.SwapAmount,
            selectedSourceTypes: sts.array(() => v42.LiquiditySourceType),
            filterMode: v42.FilterMode,
        })
    ),
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v71: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v71.AccountId32,
            dexId: sts.number(),
            inputAssetId: v71.AssetId32,
            outputAssetId: v71.AssetId32,
            swapAmount: v71.SwapAmount,
            selectedSourceTypes: sts.array(() => v71.LiquiditySourceType),
            filterMode: v71.FilterMode,
        })
    ),
}

export const enableLiquiditySource =  {
    name: 'LiquidityProxy.enable_liquidity_source',
    /**
     *  Enables XST or TBC liquidity source.
     * 
     *  - `liquidity_source`: the liquidity source to be enabled.
     */
    v38: new CallType(
        'LiquidityProxy.enable_liquidity_source',
        sts.struct({
            liquiditySource: v38.LiquiditySourceType,
        })
    ),
    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    v71: new CallType(
        'LiquidityProxy.enable_liquidity_source',
        sts.struct({
            liquiditySource: v71.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'LiquidityProxy.disable_liquidity_source',
    /**
     *  Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     *  - `liquidity_source`: the liquidity source to be disabled.
     */
    v38: new CallType(
        'LiquidityProxy.disable_liquidity_source',
        sts.struct({
            liquiditySource: v38.LiquiditySourceType,
        })
    ),
    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    v71: new CallType(
        'LiquidityProxy.disable_liquidity_source',
        sts.struct({
            liquiditySource: v71.LiquiditySourceType,
        })
    ),
}

export const swapTransferBatch =  {
    name: 'LiquidityProxy.swap_transfer_batch',
    v45: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            receivers: sts.array(() => v45.BatchReceiverInfo),
            dexId: sts.number(),
            inputAssetId: v45.AssetId32,
            outputAssetId: v45.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v45.LiquiditySourceType),
            filterMode: v45.FilterMode,
        })
    ),
    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v50: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v50.SwapBatchInfo),
            inputAssetId: v50.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v50.LiquiditySourceType),
            filterMode: v50.FilterMode,
        })
    ),
    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v63: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v63.SwapBatchInfo),
            inputAssetId: v63.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v63.LiquiditySourceType),
            filterMode: v63.FilterMode,
        })
    ),
    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v71: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v71.SwapBatchInfo),
            inputAssetId: v71.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v71.LiquiditySourceType),
            filterMode: v71.FilterMode,
        })
    ),
    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     * - `additional_data`: data to include in swap success event.
     */
    v74: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v74.SwapBatchInfo),
            inputAssetId: v74.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v74.LiquiditySourceType),
            filterMode: v74.FilterMode,
            additionalData: sts.option(() => v74.BoundedVec),
        })
    ),
}

export const setAdarCommissionRatio =  {
    name: 'LiquidityProxy.set_adar_commission_ratio',
    v57: new CallType(
        'LiquidityProxy.set_adar_commission_ratio',
        sts.struct({
            commissionRatio: sts.bigint(),
        })
    ),
}

export const xorlessTransfer =  {
    name: 'LiquidityProxy.xorless_transfer',
    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    v66: new CallType(
        'LiquidityProxy.xorless_transfer',
        sts.struct({
            dexId: sts.number(),
            assetId: v66.AssetId32,
            receiver: v66.AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => v66.LiquiditySourceType),
            filterMode: v66.FilterMode,
            additionalData: sts.option(() => v66.BoundedVec),
        })
    ),
    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    v71: new CallType(
        'LiquidityProxy.xorless_transfer',
        sts.struct({
            dexId: sts.number(),
            assetId: v71.AssetId32,
            receiver: v71.AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => v71.LiquiditySourceType),
            filterMode: v71.FilterMode,
            additionalData: sts.option(() => v71.BoundedVec),
        })
    ),
}
