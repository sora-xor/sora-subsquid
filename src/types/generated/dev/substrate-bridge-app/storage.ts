import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const assetKinds =  {
    v85: new StorageType('SubstrateBridgeApp.AssetKinds', 'Optional', [v85.SubNetworkId, v85.AssetId32], v85.Type_615) as AssetKindsV85,
}

export interface AssetKindsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<(v85.Type_615 | undefined)>
    getMany(block: Block, keys: [v85.SubNetworkId, v85.AssetId32][]): Promise<(v85.Type_615 | undefined)[]>
    getKeys(block: Block): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.Type_615 | undefined)][]>
}

export const sidechainPrecision =  {
    v85: new StorageType('SubstrateBridgeApp.SidechainPrecision', 'Optional', [v85.SubNetworkId, v85.AssetId32], sts.number()) as SidechainPrecisionV85,
}

export interface SidechainPrecisionV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v85.SubNetworkId, v85.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (number | undefined)][]>
}

export const sidechainAssetId =  {
    v85: new StorageType('SubstrateBridgeApp.SidechainAssetId', 'Optional', [v85.SubNetworkId, v85.AssetId32], v85.GenericAssetId) as SidechainAssetIdV85,
}

export interface SidechainAssetIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<(v85.GenericAssetId | undefined)>
    getMany(block: Block, keys: [v85.SubNetworkId, v85.AssetId32][]): Promise<(v85.GenericAssetId | undefined)[]>
    getKeys(block: Block): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[v85.SubNetworkId, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): Promise<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.AssetId32): AsyncIterable<[k: [v85.SubNetworkId, v85.AssetId32], v: (v85.GenericAssetId | undefined)][]>
}

export const thischainAssetId =  {
    v85: new StorageType('SubstrateBridgeApp.ThischainAssetId', 'Optional', [v85.SubNetworkId, v85.GenericAssetId], v85.AssetId32) as ThischainAssetIdV85,
}

export interface ThischainAssetIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.SubNetworkId, key2: v85.GenericAssetId): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: [v85.SubNetworkId, v85.GenericAssetId][]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[v85.SubNetworkId, v85.GenericAssetId][]>
    getKeys(block: Block, key1: v85.SubNetworkId): Promise<[v85.SubNetworkId, v85.GenericAssetId][]>
    getKeys(block: Block, key1: v85.SubNetworkId, key2: v85.GenericAssetId): Promise<[v85.SubNetworkId, v85.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.SubNetworkId, v85.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[v85.SubNetworkId, v85.GenericAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.GenericAssetId): AsyncIterable<[v85.SubNetworkId, v85.GenericAssetId][]>
    getPairs(block: Block): Promise<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId): Promise<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId, key2: v85.GenericAssetId): Promise<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: v85.GenericAssetId): AsyncIterable<[k: [v85.SubNetworkId, v85.GenericAssetId], v: (v85.AssetId32 | undefined)][]>
}
