import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enabledSources =  {
    v85: new StorageType('TradingPair.EnabledSources', 'Optional', [sts.number(), v85.TradingPair], sts.array(() => v85.LiquiditySourceType)) as EnabledSourcesV85,
}

export interface EnabledSourcesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.TradingPair): Promise<(v85.LiquiditySourceType[] | undefined)>
    getMany(block: Block, keys: [number, v85.TradingPair][]): Promise<(v85.LiquiditySourceType[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.TradingPair][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.TradingPair][]>
    getKeys(block: Block, key1: number, key2: v85.TradingPair): Promise<[number, v85.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.TradingPair][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.TradingPair): AsyncIterable<[number, v85.TradingPair][]>
    getPairs(block: Block): Promise<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.TradingPair): Promise<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.TradingPair): AsyncIterable<[k: [number, v85.TradingPair], v: (v85.LiquiditySourceType[] | undefined)][]>
}

export const lockedLiquiditySources =  {
    v85: new StorageType('TradingPair.LockedLiquiditySources', 'Default', [], sts.array(() => v85.LiquiditySourceType)) as LockedLiquiditySourcesV85,
}

export interface LockedLiquiditySourcesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.LiquiditySourceType[]
    get(block: Block): Promise<(v85.LiquiditySourceType[] | undefined)>
}
