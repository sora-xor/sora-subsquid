import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const assetOwners =  {
    /**
     *  Asset Id -> Owner Account Id
     */
    v85: new StorageType('Assets.AssetOwners', 'Optional', [v85.AssetId32], v85.AccountId32) as AssetOwnersV85,
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetOwnersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.AccountId32 | undefined)][]>
}

export const assetInfos =  {
    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    v85: new StorageType('Assets.AssetInfos', 'Default', [v85.AssetId32], sts.tuple(() => [v85.AssetSymbol, v85.AssetName, sts.number(), sts.boolean(), sts.option(() => v85.ContentSource), sts.option(() => v85.Description)])) as AssetInfosV85,
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetInfosV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)]
    get(block: Block, key: v85.AssetId32): Promise<([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: ([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: ([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: ([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: ([v85.AssetSymbol, v85.AssetName, number, boolean, (v85.ContentSource | undefined), (v85.Description | undefined)] | undefined)][]>
}

export const assetRecordAssetId =  {
    /**
     *  Asset Id -> AssetRecord<T>
     */
    v85: new StorageType('Assets.AssetRecordAssetId', 'Optional', [v85.AssetId32], v85.AssetRecord) as AssetRecordAssetIdV85,
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetRecordAssetIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.AssetRecord | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.AssetRecord | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.AssetRecord | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.AssetRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.AssetRecord | undefined)][]>
}
