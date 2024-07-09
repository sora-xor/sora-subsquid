import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const reservesAcc =  {
    /**
     *  Technical account used to store collateral tokens.
     */
    v85: new StorageType('MulticollateralBondingCurvePool.ReservesAcc', 'Default', [], v85.TechAccountId) as ReservesAccV85,
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface ReservesAccV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.TechAccountId
    get(block: Block): Promise<(v85.TechAccountId | undefined)>
}

export const freeReservesAccountId =  {
    v85: new StorageType('MulticollateralBondingCurvePool.FreeReservesAccountId', 'Optional', [], v85.AccountId32) as FreeReservesAccountIdV85,
}

export interface FreeReservesAccountIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const pendingFreeReserves =  {
    v85: new StorageType('MulticollateralBondingCurvePool.PendingFreeReserves', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [v85.AssetId32, sts.bigint()]))) as PendingFreeReservesV85,
}

export interface PendingFreeReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.AssetId32, bigint][]
    get(block: Block, key: number): Promise<([v85.AssetId32, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v85.AssetId32, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v85.AssetId32, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v85.AssetId32, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v85.AssetId32, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v85.AssetId32, bigint][] | undefined)][]>
}

export const initialPrice =  {
    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    v85: new StorageType('MulticollateralBondingCurvePool.InitialPrice', 'Default', [], v85.FixedPoint) as InitialPriceV85,
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface InitialPriceV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const priceChangeStep =  {
    /**
     *  Coefficients in buy price function.
     */
    v85: new StorageType('MulticollateralBondingCurvePool.PriceChangeStep', 'Default', [], v85.FixedPoint) as PriceChangeStepV85,
}

/**
 *  Coefficients in buy price function.
 */
export interface PriceChangeStepV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const priceChangeRate =  {
    v85: new StorageType('MulticollateralBondingCurvePool.PriceChangeRate', 'Default', [], v85.FixedPoint) as PriceChangeRateV85,
}

export interface PriceChangeRateV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const sellPriceCoefficient =  {
    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    v85: new StorageType('MulticollateralBondingCurvePool.SellPriceCoefficient', 'Default', [], v85.FixedPoint) as SellPriceCoefficientV85,
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface SellPriceCoefficientV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const alwaysDistributeCoefficient =  {
    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    v85: new StorageType('MulticollateralBondingCurvePool.AlwaysDistributeCoefficient', 'Default', [], v85.FixedPoint) as AlwaysDistributeCoefficientV85,
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface AlwaysDistributeCoefficientV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const baseFee =  {
    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
     */
    v85: new StorageType('MulticollateralBondingCurvePool.BaseFee', 'Default', [], v85.FixedPoint) as BaseFeeV85,
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
 */
export interface BaseFeeV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const distributionAccountsEntry =  {
    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    v85: new StorageType('MulticollateralBondingCurvePool.DistributionAccountsEntry', 'Default', [], v85.DistributionAccounts) as DistributionAccountsEntryV85,
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface DistributionAccountsEntryV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.DistributionAccounts
    get(block: Block): Promise<(v85.DistributionAccounts | undefined)>
}

export const enabledTargets =  {
    /**
     *  Collateral Assets allowed to be sold by the token bonding curve
     */
    v85: new StorageType('MulticollateralBondingCurvePool.EnabledTargets', 'Default', [], sts.array(() => v85.AssetId32)) as EnabledTargetsV85,
}

/**
 *  Collateral Assets allowed to be sold by the token bonding curve
 */
export interface EnabledTargetsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32[]
    get(block: Block): Promise<(v85.AssetId32[] | undefined)>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI
     */
    v85: new StorageType('MulticollateralBondingCurvePool.ReferenceAssetId', 'Default', [], v85.AssetId32) as ReferenceAssetIdV85,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI
 */
export interface ReferenceAssetIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32
    get(block: Block): Promise<(v85.AssetId32 | undefined)>
}

export const rewards =  {
    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    v85: new StorageType('MulticollateralBondingCurvePool.Rewards', 'Default', [v85.AccountId32], sts.tuple(() => [sts.bigint(), sts.bigint()])) as RewardsV85,
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface RewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, bigint]
    get(block: Block, key: v85.AccountId32): Promise<([bigint, bigint] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<([bigint, bigint] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: ([bigint, bigint] | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Total amount of PSWAP owned by accounts
     */
    v85: new StorageType('MulticollateralBondingCurvePool.TotalRewards', 'Default', [], sts.bigint()) as TotalRewardsV85,
}

/**
 *  Total amount of PSWAP owned by accounts
 */
export interface TotalRewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const incentivisedCurrenciesNum =  {
    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
     */
    v85: new StorageType('MulticollateralBondingCurvePool.IncentivisedCurrenciesNum', 'Default', [], sts.number()) as IncentivisedCurrenciesNumV85,
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
 */
export interface IncentivisedCurrenciesNumV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const incentivesAccountId =  {
    /**
     *  Account which stores actual PSWAP intended for rewards
     */
    v85: new StorageType('MulticollateralBondingCurvePool.IncentivesAccountId', 'Optional', [], v85.AccountId32) as IncentivesAccountIdV85,
}

/**
 *  Account which stores actual PSWAP intended for rewards
 */
export interface IncentivesAccountIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const assetsWithOptionalRewardMultiplier =  {
    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    v85: new StorageType('MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier', 'Optional', [v85.AssetId32], v85.FixedPoint) as AssetsWithOptionalRewardMultiplierV85,
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface AssetsWithOptionalRewardMultiplierV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.FixedPoint | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.FixedPoint | undefined)][]>
}

export const initialPswapRewardsSupply =  {
    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified
     */
    v85: new StorageType('MulticollateralBondingCurvePool.InitialPswapRewardsSupply', 'Default', [], sts.bigint()) as InitialPswapRewardsSupplyV85,
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified
 */
export interface InitialPswapRewardsSupplyV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v85: new StorageType('MulticollateralBondingCurvePool.CollateralReserves', 'Default', [v85.AssetId32], sts.bigint()) as CollateralReservesV85,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
}
