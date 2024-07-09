import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v85: new StorageType('Preimage.StatusFor', 'Optional', [v85.H256], v85.Type_862) as StatusForV85,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.Type_862 | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.Type_862 | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.Type_862 | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.Type_862 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.Type_862 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.Type_862 | undefined)][]>
}

export const preimageFor =  {
    v85: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v85.H256, sts.number()])], sts.bytes()) as PreimageForV85,
}

export interface PreimageForV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v85.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v85.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, number][]>
    getKeys(block: Block, key: [v85.H256, number]): Promise<[v85.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v85.H256, number]): AsyncIterable<[v85.H256, number][]>
    getPairs(block: Block): Promise<[k: [v85.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v85.H256, number]): Promise<[k: [v85.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v85.H256, number]): AsyncIterable<[k: [v85.H256, number], v: (Bytes | undefined)][]>
}
