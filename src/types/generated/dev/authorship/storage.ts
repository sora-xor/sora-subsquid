import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const author =  {
    /**
     *  Author of current block.
     */
    v85: new StorageType('Authorship.Author', 'Optional', [], v85.AccountId32) as AuthorV85,
}

/**
 *  Author of current block.
 */
export interface AuthorV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
