import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const feesAccount =  {
    /**
     *  Account for collecting fees
     */
    v85: new StorageType('CeresTokenLocker.FeesAccount', 'Default', [], v85.AccountId32) as FeesAccountV85,
}

/**
 *  Account for collecting fees
 */
export interface FeesAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing fee
     */
    v85: new StorageType('CeresTokenLocker.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for changing fee
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
    v85: new StorageType('CeresTokenLocker.PalletStorageVersion', 'Default', [], v85.Type_814) as PalletStorageVersionV85,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_814
    get(block: Block): Promise<(v85.Type_814 | undefined)>
}

export const feeAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v85: new StorageType('CeresTokenLocker.FeeAmount', 'Default', [], sts.bigint()) as FeeAmountV85,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeeAmountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const tokenLockerData =  {
    v85: new StorageType('CeresTokenLocker.TokenLockerData', 'Default', [v85.AccountId32], sts.array(() => v85.TokenLockInfo)) as TokenLockerDataV85,
}

export interface TokenLockerDataV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.TokenLockInfo[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.TokenLockInfo[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.TokenLockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.TokenLockInfo[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.TokenLockInfo[] | undefined)][]>
}
