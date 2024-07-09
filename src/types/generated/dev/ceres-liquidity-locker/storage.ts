import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const feesOptionOneAccount =  {
    /**
     *  Account for collecting fees from Option 1
     */
    v85: new StorageType('CeresLiquidityLocker.FeesOptionOneAccount', 'Default', [], v85.AccountId32) as FeesOptionOneAccountV85,
}

/**
 *  Account for collecting fees from Option 1
 */
export interface FeesOptionOneAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const feesOptionTwoAccount =  {
    /**
     *  Account for collecting fees from Option 2
     */
    v85: new StorageType('CeresLiquidityLocker.FeesOptionTwoAccount', 'Default', [], v85.AccountId32) as FeesOptionTwoAccountV85,
}

/**
 *  Account for collecting fees from Option 2
 */
export interface FeesOptionTwoAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const feesOptionTwoCeresAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v85: new StorageType('CeresLiquidityLocker.FeesOptionTwoCeresAmount', 'Default', [], sts.bigint()) as FeesOptionTwoCeresAmountV85,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeesOptionTwoCeresAmountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES amount fee
     */
    v85: new StorageType('CeresLiquidityLocker.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v85: new StorageType('CeresLiquidityLocker.PalletStorageVersion', 'Default', [], v85.StorageVersion) as PalletStorageVersionV85,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.StorageVersion
    get(block: Block): Promise<(v85.StorageVersion | undefined)>
}

export const lockerData =  {
    /**
     *  Contains data about lockups for each account
     */
    v85: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v85.AccountId32], sts.array(() => v85.LockInfo)) as LockerDataV85,
}

/**
 *  Contains data about lockups for each account
 */
export interface LockerDataV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.LockInfo[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.LockInfo[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.LockInfo[] | undefined)][]>
}
