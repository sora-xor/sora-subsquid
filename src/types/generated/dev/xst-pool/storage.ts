import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enabledSynthetics =  {
    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    v85: new StorageType('XSTPool.EnabledSynthetics', 'Optional', [v85.AssetId32], v85.SyntheticInfo) as EnabledSyntheticsV85,
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface EnabledSyntheticsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.SyntheticInfo | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.SyntheticInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.SyntheticInfo | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.SyntheticInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.SyntheticInfo | undefined)][]>
}

export const enabledSymbols =  {
    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    v85: new StorageType('XSTPool.EnabledSymbols', 'Optional', [v85.SymbolName], v85.AssetId32) as EnabledSymbolsV85,
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface EnabledSymbolsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SymbolName): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: v85.SymbolName[]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<v85.SymbolName[]>
    getKeys(block: Block, key: v85.SymbolName): Promise<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<v85.SymbolName[]>
    getPairs(block: Block): Promise<[k: v85.SymbolName, v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key: v85.SymbolName): Promise<[k: v85.SymbolName, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SymbolName, v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<[k: v85.SymbolName, v: (v85.AssetId32 | undefined)][]>
}

export const referenceAssetId =  {
    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    v85: new StorageType('XSTPool.ReferenceAssetId', 'Default', [], v85.AssetId32) as ReferenceAssetIdV85,
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface ReferenceAssetIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32
    get(block: Block): Promise<(v85.AssetId32 | undefined)>
}

export const collateralReserves =  {
    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    v85: new StorageType('XSTPool.CollateralReserves', 'Default', [v85.AssetId32], sts.bigint()) as CollateralReservesV85,
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface CollateralReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
}

export const syntheticBaseAssetFloorPrice =  {
    /**
     *  Floor price for the synthetic base asset.
     */
    v85: new StorageType('XSTPool.SyntheticBaseAssetFloorPrice', 'Default', [], sts.bigint()) as SyntheticBaseAssetFloorPriceV85,
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface SyntheticBaseAssetFloorPriceV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
