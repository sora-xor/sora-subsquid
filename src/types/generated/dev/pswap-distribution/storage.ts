import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const subscribedAccounts =  {
    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    v85: new StorageType('PswapDistribution.SubscribedAccounts', 'Optional', [v85.AccountId32], sts.tuple(() => [sts.number(), v85.AccountId32, sts.number(), sts.number()])) as SubscribedAccountsV85,
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface SubscribedAccountsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<([number, v85.AccountId32, number, number] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<([number, v85.AccountId32, number, number] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: ([number, v85.AccountId32, number, number] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: ([number, v85.AccountId32, number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: ([number, v85.AccountId32, number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: ([number, v85.AccountId32, number, number] | undefined)][]>
}

export const burnRate =  {
    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    v85: new StorageType('PswapDistribution.BurnRate', 'Default', [], v85.FixedPoint) as BurnRateV85,
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface BurnRateV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const burnUpdateInfo =  {
    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    v85: new StorageType('PswapDistribution.BurnUpdateInfo', 'Default', [], sts.tuple(() => [v85.FixedPoint, v85.FixedPoint])) as BurnUpdateInfoV85,
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface BurnUpdateInfoV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.FixedPoint, v85.FixedPoint]
    get(block: Block): Promise<([v85.FixedPoint, v85.FixedPoint] | undefined)>
}

export const shareholderAccounts =  {
    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    v85: new StorageType('PswapDistribution.ShareholderAccounts', 'Default', [v85.AccountId32], v85.FixedPoint) as ShareholderAccountsV85,
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface ShareholderAccountsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block, key: v85.AccountId32): Promise<(v85.FixedPoint | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.FixedPoint | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.FixedPoint | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.FixedPoint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.FixedPoint | undefined)][]>
}

export const claimableShares =  {
    /**
     *  Sum of all shares of incentive token owners.
     */
    v85: new StorageType('PswapDistribution.ClaimableShares', 'Default', [], v85.FixedPoint) as ClaimableSharesV85,
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface ClaimableSharesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}

export const buyBackTbcdFraction =  {
    /**
     *  Fraction of PSWAP that could be buy backed to TBCD
     */
    v85: new StorageType('PswapDistribution.BuyBackTBCDFraction', 'Default', [], v85.FixedPoint) as BuyBackTbcdFractionV85,
}

/**
 *  Fraction of PSWAP that could be buy backed to TBCD
 */
export interface BuyBackTbcdFractionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedPoint
    get(block: Block): Promise<(v85.FixedPoint | undefined)>
}
