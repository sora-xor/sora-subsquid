import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v85: new StorageType('BagsList.ListNodes', 'Optional', [v85.AccountId32], v85.Node) as ListNodesV85,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(v85.Node | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.Node | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.Node | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v85: new StorageType('BagsList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV85,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const listBags =  {
    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    v85: new StorageType('BagsList.ListBags', 'Optional', [sts.bigint()], v85.Bag) as ListBagsV85,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v85.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v85.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v85.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v85.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v85.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v85.Bag | undefined)][]>
}
