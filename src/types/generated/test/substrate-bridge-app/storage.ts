import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v77 from '../v77'

export const assetKinds =  {
    v77: new StorageType('SubstrateBridgeApp.AssetKinds', 'Optional', [v77.SubNetworkId, v77.AssetId32], v77.Type_562) as AssetKindsV77,
}

export interface AssetKindsV77  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<(v77.Type_562 | undefined)>
    getMany(block: Block, keys: [v77.SubNetworkId, v77.AssetId32][]): Promise<(v77.Type_562 | undefined)[]>
    getKeys(block: Block): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.Type_562 | undefined)][]>
}

export const sidechainPrecision =  {
    v77: new StorageType('SubstrateBridgeApp.SidechainPrecision', 'Optional', [v77.SubNetworkId, v77.AssetId32], sts.number()) as SidechainPrecisionV77,
}

export interface SidechainPrecisionV77  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v77.SubNetworkId, v77.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (number | undefined)][]>
}

export const sidechainAssetId =  {
    v77: new StorageType('SubstrateBridgeApp.SidechainAssetId', 'Optional', [v77.SubNetworkId, v77.AssetId32], v77.GenericAssetId) as SidechainAssetIdV77,
}

export interface SidechainAssetIdV77  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<(v77.GenericAssetId | undefined)>
    getMany(block: Block, keys: [v77.SubNetworkId, v77.AssetId32][]): Promise<(v77.GenericAssetId | undefined)[]>
    getKeys(block: Block): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeys(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[v77.SubNetworkId, v77.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): Promise<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.AssetId32): AsyncIterable<[k: [v77.SubNetworkId, v77.AssetId32], v: (v77.GenericAssetId | undefined)][]>
}

export const thischainAssetId =  {
    v77: new StorageType('SubstrateBridgeApp.ThischainAssetId', 'Optional', [v77.SubNetworkId, v77.GenericAssetId], v77.AssetId32) as ThischainAssetIdV77,
}

export interface ThischainAssetIdV77  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v77.SubNetworkId, key2: v77.GenericAssetId): Promise<(v77.AssetId32 | undefined)>
    getMany(block: Block, keys: [v77.SubNetworkId, v77.GenericAssetId][]): Promise<(v77.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[v77.SubNetworkId, v77.GenericAssetId][]>
    getKeys(block: Block, key1: v77.SubNetworkId): Promise<[v77.SubNetworkId, v77.GenericAssetId][]>
    getKeys(block: Block, key1: v77.SubNetworkId, key2: v77.GenericAssetId): Promise<[v77.SubNetworkId, v77.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v77.SubNetworkId, v77.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[v77.SubNetworkId, v77.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.GenericAssetId): AsyncIterable<[v77.SubNetworkId, v77.GenericAssetId][]>
    getPairs(block: Block): Promise<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId): Promise<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v77.SubNetworkId, key2: v77.GenericAssetId): Promise<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId): AsyncIterable<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v77.SubNetworkId, key2: v77.GenericAssetId): AsyncIterable<[k: [v77.SubNetworkId, v77.GenericAssetId], v: (v77.AssetId32 | undefined)][]>
}
