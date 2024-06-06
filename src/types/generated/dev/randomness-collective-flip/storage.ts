import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v85: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v85.H256)) as RandomMaterialV85,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256[]
    get(block: Block): Promise<(v85.H256[] | undefined)>
}
