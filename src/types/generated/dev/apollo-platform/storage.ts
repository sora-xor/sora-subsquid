import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const userLendingInfo =  {
    /**
     *  Lent asset -> AccountId -> LendingPosition
     */
    v85: new StorageType('ApolloPlatform.UserLendingInfo', 'Optional', [v85.AssetId32, v85.AccountId32], v85.LendingPosition) as UserLendingInfoV85,
}

/**
 *  Lent asset -> AccountId -> LendingPosition
 */
export interface UserLendingInfoV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<(v85.LendingPosition | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AccountId32][]): Promise<(v85.LendingPosition | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.LendingPosition | undefined)][]>
}

export const userBorrowingInfo =  {
    /**
     *  Borrowed asset -> AccountId -> (Collateral asset, BorrowingPosition)
     */
    v85: new StorageType('ApolloPlatform.UserBorrowingInfo', 'Optional', [v85.AssetId32, v85.AccountId32], sts.array(() => sts.tuple(() => [v85.AssetId32, v85.BorrowingPosition]))) as UserBorrowingInfoV85,
}

/**
 *  Borrowed asset -> AccountId -> (Collateral asset, BorrowingPosition)
 */
export interface UserBorrowingInfoV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<([v85.AssetId32, v85.BorrowingPosition][] | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AccountId32][]): Promise<([v85.AssetId32, v85.BorrowingPosition][] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: ([v85.AssetId32, v85.BorrowingPosition][] | undefined)][]>
}

export const poolData =  {
    v85: new StorageType('ApolloPlatform.PoolData', 'Optional', [v85.AssetId32], v85.PoolInfo) as PoolDataV85,
}

export interface PoolDataV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.PoolInfo | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.PoolInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.PoolInfo | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.PoolInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.PoolInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.PoolInfo | undefined)][]>
}

export const poolsByBlock =  {
    /**
     *  BlockNumber -> AssetId (for updating pools interests by block)
     */
    v85: new StorageType('ApolloPlatform.PoolsByBlock', 'Optional', [sts.number()], v85.AssetId32) as PoolsByBlockV85,
}

/**
 *  BlockNumber -> AssetId (for updating pools interests by block)
 */
export interface PoolsByBlockV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.AssetId32 | undefined)][]>
}

export const authorityAccount =  {
    v85: new StorageType('ApolloPlatform.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const treasuryAccount =  {
    v85: new StorageType('ApolloPlatform.TreasuryAccount', 'Default', [], v85.AccountId32) as TreasuryAccountV85,
}

export interface TreasuryAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const lendingRewards =  {
    /**
     *  Default lending rewards
     */
    v85: new StorageType('ApolloPlatform.LendingRewards', 'Default', [], sts.bigint()) as LendingRewardsV85,
}

/**
 *  Default lending rewards
 */
export interface LendingRewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const borrowingRewards =  {
    /**
     *  Default borrowing rewards
     */
    v85: new StorageType('ApolloPlatform.BorrowingRewards', 'Default', [], sts.bigint()) as BorrowingRewardsV85,
}

/**
 *  Default borrowing rewards
 */
export interface BorrowingRewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const lendingRewardsPerBlock =  {
    /**
     *  Default lending rewards per block
     */
    v85: new StorageType('ApolloPlatform.LendingRewardsPerBlock', 'Default', [], sts.bigint()) as LendingRewardsPerBlockV85,
}

/**
 *  Default lending rewards per block
 */
export interface LendingRewardsPerBlockV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const borrowingRewardsPerBlock =  {
    /**
     *  Default borrowing rewards
     */
    v85: new StorageType('ApolloPlatform.BorrowingRewardsPerBlock', 'Default', [], sts.bigint()) as BorrowingRewardsPerBlockV85,
}

/**
 *  Default borrowing rewards
 */
export interface BorrowingRewardsPerBlockV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
