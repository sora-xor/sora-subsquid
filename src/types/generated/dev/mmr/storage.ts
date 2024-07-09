import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const rootHash =  {
    /**
     *  Latest MMR Root hash.
     */
    v85: new StorageType('Mmr.RootHash', 'Default', [], v85.H256) as RootHashV85,
}

/**
 *  Latest MMR Root hash.
 */
export interface RootHashV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256
    get(block: Block): Promise<(v85.H256 | undefined)>
}

export const numberOfLeaves =  {
    /**
     *  Current size of the MMR (number of leaves).
     */
    v85: new StorageType('Mmr.NumberOfLeaves', 'Default', [], sts.bigint()) as NumberOfLeavesV85,
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface NumberOfLeavesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nodes =  {
    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    v85: new StorageType('Mmr.Nodes', 'Optional', [sts.bigint()], v85.H256) as NodesV85,
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface NodesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v85.H256 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v85.H256 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v85.H256 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v85.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v85.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v85.H256 | undefined)][]>
}
