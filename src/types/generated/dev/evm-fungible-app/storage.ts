import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const appAddresses =  {
    v85: new StorageType('EVMFungibleApp.AppAddresses', 'Optional', [v85.H256], v85.H160) as AppAddressesV85,
}

export interface AppAddressesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.H160 | undefined)][]>
}

export const assetKinds =  {
    v85: new StorageType('EVMFungibleApp.AssetKinds', 'Optional', [v85.H256, v85.AssetId32], v85.Type_615) as AssetKindsV85,
}

export interface AssetKindsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<(v85.Type_615 | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.AssetId32][]): Promise<(v85.Type_615 | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
}

export const tokenAddresses =  {
    v85: new StorageType('EVMFungibleApp.TokenAddresses', 'Optional', [v85.H256, v85.AssetId32], v85.H160) as TokenAddressesV85,
}

export interface TokenAddressesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.AssetId32][]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (v85.H160 | undefined)][]>
}

export const assetsByAddresses =  {
    v85: new StorageType('EVMFungibleApp.AssetsByAddresses', 'Optional', [v85.H256, v85.H160], v85.AssetId32) as AssetsByAddressesV85,
}

export interface AssetsByAddressesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.H160): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.H160][]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.H160][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.H160][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.H160): Promise<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.H160): AsyncIterable<[v85.H256, v85.H160][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.H160): Promise<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.H160): AsyncIterable<[k: [v85.H256, v85.H160], v: (v85.AssetId32 | undefined)][]>
}

export const sidechainPrecision =  {
    v85: new StorageType('EVMFungibleApp.SidechainPrecision', 'Optional', [v85.H256, v85.AssetId32], sts.number()) as SidechainPrecisionV85,
}

export interface SidechainPrecisionV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[v85.H256, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.AssetId32): Promise<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AssetId32): AsyncIterable<[k: [v85.H256, v85.AssetId32], v: (number | undefined)][]>
}

export const collectedFees =  {
    /**
     *  Collected fees
     */
    v85: new StorageType('EVMFungibleApp.CollectedFees', 'Default', [v85.H256], sts.bigint()) as CollectedFeesV85,
}

/**
 *  Collected fees
 */
export interface CollectedFeesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.H256): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (bigint | undefined)][]>
}

export const baseFees =  {
    /**
     *  Base fees
     */
    v85: new StorageType('EVMFungibleApp.BaseFees', 'Optional', [v85.H256], v85.BaseFeeInfo) as BaseFeesV85,
}

/**
 *  Base fees
 */
export interface BaseFeesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.BaseFeeInfo | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.BaseFeeInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.BaseFeeInfo | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.BaseFeeInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.BaseFeeInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.BaseFeeInfo | undefined)][]>
}

export const spentFees =  {
    /**
     *  Fees spend by relayer
     */
    v85: new StorageType('EVMFungibleApp.SpentFees', 'Default', [v85.H256, v85.H160], sts.bigint()) as SpentFeesV85,
}

/**
 *  Fees spend by relayer
 */
export interface SpentFeesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v85.H256, key2: v85.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.H160][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.H160][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.H160][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.H160): Promise<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.H160): AsyncIterable<[v85.H256, v85.H160][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.H160): Promise<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.H160): AsyncIterable<[k: [v85.H256, v85.H160], v: (bigint | undefined)][]>
}
