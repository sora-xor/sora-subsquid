import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const tokenInfos =  {
    v85: new StorageType('DemeterFarmingPlatform.TokenInfos', 'Optional', [v85.AssetId32], v85.TokenInfo) as TokenInfosV85,
}

export interface TokenInfosV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.TokenInfo | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.TokenInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.TokenInfo | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.TokenInfo | undefined)][]>
}

export const userInfos =  {
    v85: new StorageType('DemeterFarmingPlatform.UserInfos', 'Default', [v85.AccountId32], sts.array(() => v85.UserInfo)) as UserInfosV85,
}

export interface UserInfosV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.UserInfo[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.UserInfo[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.UserInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.UserInfo[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.UserInfo[] | undefined)][]>
}

export const pools =  {
    v85: new StorageType('DemeterFarmingPlatform.Pools', 'Default', [v85.AssetId32, v85.AssetId32], sts.array(() => v85.PoolData)) as PoolsV85,
}

export interface PoolsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.PoolData[]
    get(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<(v85.PoolData[] | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AssetId32][]): Promise<(v85.PoolData[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AssetId32], v: (v85.PoolData[] | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v85: new StorageType('DemeterFarmingPlatform.PalletStorageVersion', 'Default', [], v85.Type_834) as PalletStorageVersionV85,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_834
    get(block: Block): Promise<(v85.Type_834 | undefined)>
}

export const authorityAccount =  {
    v85: new StorageType('DemeterFarmingPlatform.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const feeAccount =  {
    /**
     *  Account for fees
     */
    v85: new StorageType('DemeterFarmingPlatform.FeeAccount', 'Default', [], v85.AccountId32) as FeeAccountV85,
}

/**
 *  Account for fees
 */
export interface FeeAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
