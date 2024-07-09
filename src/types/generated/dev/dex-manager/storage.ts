import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const dexInfos =  {
    v85: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v85.DEXInfo) as DexInfosV85,
}

export interface DexInfosV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.DEXInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.DEXInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.DEXInfo | undefined)][]>
}
