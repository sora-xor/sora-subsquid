import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v66 from '../v66'
import * as v68 from '../v68'
import * as v71 from '../v71'
import * as v74 from '../v74'

export const exchange =  {
    name: 'LiquidityProxy.Exchange',
    /**
     *  Exchange of tokens has been performed
     *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v1: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v1.AccountId, v1.DEXId, v1.AssetId, v1.AssetId, v1.Balance, v1.Balance, v1.Balance])
    ),
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v42: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v42.AccountId32, sts.number(), v42.AssetId32, v42.AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => v42.LiquiditySourceId)])
    ),
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v71: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v71.AccountId32, sts.number(), v71.AssetId32, v71.AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => v71.LiquiditySourceId)])
    ),
    /**
     * Exchange of tokens has been performed
     * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
     */
    v74: new EventType(
        'LiquidityProxy.Exchange',
        sts.tuple([v74.AccountId32, sts.number(), v74.AssetId32, v74.AssetId32, sts.bigint(), sts.bigint(), sts.array(() => sts.tuple(() => [v74.AssetId32, sts.bigint()])), sts.array(() => v74.LiquiditySourceId)])
    ),
}

export const liquiditySourceEnabled =  {
    name: 'LiquidityProxy.LiquiditySourceEnabled',
    /**
     *  Liquidity source was enabled
     */
    v38: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v38.LiquiditySourceType
    ),
    /**
     * Liquidity source was enabled
     */
    v71: new EventType(
        'LiquidityProxy.LiquiditySourceEnabled',
        v71.LiquiditySourceType
    ),
}

export const liquiditySourceDisabled =  {
    name: 'LiquidityProxy.LiquiditySourceDisabled',
    /**
     *  Liquidity source was disabled
     */
    v38: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v38.LiquiditySourceType
    ),
    /**
     * Liquidity source was disabled
     */
    v71: new EventType(
        'LiquidityProxy.LiquiditySourceDisabled',
        v71.LiquiditySourceType
    ),
}

export const batchSwapExecuted =  {
    name: 'LiquidityProxy.BatchSwapExecuted',
    /**
     * Batch of swap transfers has been performed
     * [ADAR Fee, Input amount]
     */
    v57: new EventType(
        'LiquidityProxy.BatchSwapExecuted',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * Batch of swap transfers has been performed
     * [Input asset ADAR Fee, Input amount, Additional Data]
     */
    v74: new EventType(
        'LiquidityProxy.BatchSwapExecuted',
        sts.tuple([sts.bigint(), sts.bigint(), sts.option(() => v74.BoundedVec)])
    ),
}

export const xorlessTransfer =  {
    name: 'LiquidityProxy.XorlessTransfer',
    /**
     * XORless transfer has been performed
     * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
     */
    v66: new EventType(
        'LiquidityProxy.XorlessTransfer',
        sts.tuple([v66.AssetId32, v66.AccountId32, v66.AccountId32, sts.bigint(), sts.option(() => v66.BoundedVec)])
    ),
}

export const adarFeeWithdrawn =  {
    name: 'LiquidityProxy.ADARFeeWithdrawn',
    /**
     * ADAR fee which is withdrawn from reused outcome asset amount
     * [Asset Id, ADAR Fee]
     */
    v68: new EventType(
        'LiquidityProxy.ADARFeeWithdrawn',
        sts.tuple([v68.AssetId32, sts.bigint()])
    ),
}
