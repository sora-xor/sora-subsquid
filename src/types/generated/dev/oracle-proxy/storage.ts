import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enabledOracles =  {
    v85: new StorageType('OracleProxy.EnabledOracles', 'Default', [], sts.array(() => v85.Oracle)) as EnabledOraclesV85,
}

export interface EnabledOraclesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Oracle[]
    get(block: Block): Promise<(v85.Oracle[] | undefined)>
}

export const symbolProviders =  {
    v85: new StorageType('OracleProxy.SymbolProviders', 'Optional', [v85.SymbolName], v85.Oracle) as SymbolProvidersV85,
}

export interface SymbolProvidersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SymbolName): Promise<(v85.Oracle | undefined)>
    getMany(block: Block, keys: v85.SymbolName[]): Promise<(v85.Oracle | undefined)[]>
    getKeys(block: Block): Promise<v85.SymbolName[]>
    getKeys(block: Block, key: v85.SymbolName): Promise<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<v85.SymbolName[]>
    getPairs(block: Block): Promise<[k: v85.SymbolName, v: (v85.Oracle | undefined)][]>
    getPairs(block: Block, key: v85.SymbolName): Promise<[k: v85.SymbolName, v: (v85.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SymbolName, v: (v85.Oracle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<[k: v85.SymbolName, v: (v85.Oracle | undefined)][]>
}
