import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const assetKinds =  {
    v85: new StorageType('ParachainBridgeApp.AssetKinds', 'Optional', [v85.SubNetworkId, v85.AssetId32], v85.Type_615) as AssetKindsV85,
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
    v85: new StorageType('ParachainBridgeApp.SidechainPrecision', 'Optional', [v85.SubNetworkId, v85.AssetId32], sts.number()) as SidechainPrecisionV85,
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

export const allowedParachainAssets =  {
    v85: new StorageType('ParachainBridgeApp.AllowedParachainAssets', 'Default', [v85.SubNetworkId, sts.number()], sts.array(() => v85.AssetId32)) as AllowedParachainAssetsV85,
}

export interface AllowedParachainAssetsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32[]
    get(block: Block, key1: v85.SubNetworkId, key2: number): Promise<(v85.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v85.SubNetworkId, number][]): Promise<(v85.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.SubNetworkId, number][]>
    getKeys(block: Block, key1: v85.SubNetworkId): Promise<[v85.SubNetworkId, number][]>
    getKeys(block: Block, key1: v85.SubNetworkId, key2: number): Promise<[v85.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[v85.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: number): AsyncIterable<[v85.SubNetworkId, number][]>
    getPairs(block: Block): Promise<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId): Promise<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v85.SubNetworkId, key2: number): Promise<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId): AsyncIterable<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.SubNetworkId, key2: number): AsyncIterable<[k: [v85.SubNetworkId, number], v: (v85.AssetId32[] | undefined)][]>
}

export const relaychainAsset =  {
    v85: new StorageType('ParachainBridgeApp.RelaychainAsset', 'Optional', [v85.SubNetworkId], v85.AssetId32) as RelaychainAssetV85,
}

export interface RelaychainAssetV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.AssetId32 | undefined)][]>
}
