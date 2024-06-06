import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const exchange =  {
    name: 'LiquidityProxy.Exchange',
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v85: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v85.AccountId32, sts.number(), v85.AssetId32, v85.AssetId32, sts.bigint(), sts.bigint(), sts.array(() => sts.tuple(() => [v85.AssetId32, sts.bigint()])), sts.array(() => v85.LiquiditySourceId)])
    ),
}

export const liquiditySourceEnabled =  {
    name: 'LiquidityProxy.LiquiditySourceEnabled',
    /**
     * Liquidity source was enabled
     */
    v85: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v85.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'LiquidityProxy.LiquiditySourceDisabled',
    /**
     * Liquidity source was disabled
     */
    v85: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v85.LiquiditySourceType
    ),
}

export const batchSwapExecuted =  {
    name: 'LiquidityProxy.BatchSwapExecuted',
    /**
     * Batch of swap transfers has been performed
     * [Input asset ADAR Fee, Input amount, Additional Data]
     */
    v85: new EventType(
        'LiquidityProxy.BatchSwapExecuted',
        sts.tuple([sts.bigint(), sts.bigint(), sts.option(() => v85.BoundedVec)])
    ),
}

export const xorlessTransfer =  {
    name: 'LiquidityProxy.XorlessTransfer',
    /**
     * XORless transfer has been performed
     * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
     */
    v85: new EventType(
        'LiquidityProxy.XorlessTransfer',
        sts.tuple([v85.AssetId32, v85.AccountId32, v85.AccountId32, sts.bigint(), sts.option(() => sts.bytes())])
    ),
}

export const adarFeeWithdrawn =  {
    name: 'LiquidityProxy.ADARFeeWithdrawn',
    /**
     * ADAR fee which is withdrawn from reused outcome asset amount
     * [Asset Id, ADAR Fee]
     */
    v85: new EventType(
        'LiquidityProxy.ADARFeeWithdrawn',
        sts.tuple([v85.AssetId32, sts.bigint()])
    ),
}
