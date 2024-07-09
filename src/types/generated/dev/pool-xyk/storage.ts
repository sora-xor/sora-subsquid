import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const reserves =  {
    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    v85: new StorageType('PoolXYK.Reserves', 'Default', [v85.AssetId32, v85.AssetId32], sts.tuple(() => [sts.bigint(), sts.bigint()])) as ReservesV85,
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface ReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, bigint]
    get(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<([bigint, bigint] | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AssetId32][]): Promise<([bigint, bigint] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([bigint, bigint] | undefined)][]>
}

export const poolProviders =  {
    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    v85: new StorageType('PoolXYK.PoolProviders', 'Optional', [v85.AccountId32, v85.AccountId32], sts.bigint()) as PoolProvidersV85,
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolProvidersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AccountId32, key2: v85.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.AccountId32): Promise<[v85.AccountId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AccountId32], v: (bigint | undefined)][]>
}

export const accountPools =  {
    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    v85: new StorageType('PoolXYK.AccountPools', 'Default', [v85.AccountId32, v85.AssetId32], sts.array(() => v85.AssetId32)) as AccountPoolsV85,
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface AccountPoolsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32[]
    get(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<(v85.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.AssetId32][]): Promise<(v85.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.AssetId32[] | undefined)][]>
}

export const totalIssuances =  {
    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    v85: new StorageType('PoolXYK.TotalIssuances', 'Optional', [v85.AccountId32], sts.bigint()) as TotalIssuancesV85,
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface TotalIssuancesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (bigint | undefined)][]>
}

export const properties =  {
    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    v85: new StorageType('PoolXYK.Properties', 'Optional', [v85.AssetId32, v85.AssetId32], sts.tuple(() => [v85.AccountId32, v85.AccountId32])) as PropertiesV85,
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PropertiesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<([v85.AccountId32, v85.AccountId32] | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AssetId32][]): Promise<([v85.AccountId32, v85.AccountId32] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: ([v85.AccountId32, v85.AccountId32] | undefined)][]>
}
