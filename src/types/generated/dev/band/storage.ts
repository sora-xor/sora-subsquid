import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const trustedRelayers =  {
    v85: new StorageType('Band.TrustedRelayers', 'Optional', [], sts.array(() => v85.AccountId32)) as TrustedRelayersV85,
}

export interface TrustedRelayersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}

export const symbolRates =  {
    v85: new StorageType('Band.SymbolRates', 'Default', [v85.SymbolName], sts.option(() => v85.BandRate)) as SymbolRatesV85,
}

export interface SymbolRatesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v85.BandRate | undefined)
    get(block: Block, key: v85.SymbolName): Promise<((v85.BandRate | undefined) | undefined)>
    getMany(block: Block, keys: v85.SymbolName[]): Promise<((v85.BandRate | undefined) | undefined)[]>
    getKeys(block: Block): Promise<v85.SymbolName[]>
    getKeys(block: Block, key: v85.SymbolName): Promise<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SymbolName[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<v85.SymbolName[]>
    getPairs(block: Block): Promise<[k: v85.SymbolName, v: ((v85.BandRate | undefined) | undefined)][]>
    getPairs(block: Block, key: v85.SymbolName): Promise<[k: v85.SymbolName, v: ((v85.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SymbolName, v: ((v85.BandRate | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SymbolName): AsyncIterable<[k: v85.SymbolName, v: ((v85.BandRate | undefined) | undefined)][]>
}

export const symbolCheckBlock =  {
    v85: new StorageType('Band.SymbolCheckBlock', 'Default', [sts.number(), v85.SymbolName], sts.boolean()) as SymbolCheckBlockV85,
}

export interface SymbolCheckBlockV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key1: number, key2: v85.SymbolName): Promise<(boolean | undefined)>
    getMany(block: Block, keys: [number, v85.SymbolName][]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.SymbolName][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.SymbolName][]>
    getKeys(block: Block, key1: number, key2: v85.SymbolName): Promise<[number, v85.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.SymbolName][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.SymbolName): AsyncIterable<[number, v85.SymbolName][]>
    getPairs(block: Block): Promise<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.SymbolName): Promise<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.SymbolName): AsyncIterable<[k: [number, v85.SymbolName], v: (boolean | undefined)][]>
}

export const dynamicFeeParameters =  {
    v85: new StorageType('Band.DynamicFeeParameters', 'Default', [], v85.FeeCalculationParameters) as DynamicFeeParametersV85,
}

export interface DynamicFeeParametersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FeeCalculationParameters
    get(block: Block): Promise<(v85.FeeCalculationParameters | undefined)>
}
