import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v85: new StorageType('Timestamp.Now', 'Default', [], sts.bigint()) as NowV85,
}

/**
 *  Current time for the current block.
 */
export interface NowV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    v85: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateV85,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
