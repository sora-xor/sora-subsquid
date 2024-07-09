import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v85: new StorageType('Multisig.Multisigs', 'Optional', [v85.AccountId32, sts.bytes()], v85.Type_766) as MultisigsV85,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<(v85.Type_766 | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, Bytes][]): Promise<(v85.Type_766 | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: Bytes): AsyncIterable<[v85.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: Bytes): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Type_766 | undefined)][]>
}
