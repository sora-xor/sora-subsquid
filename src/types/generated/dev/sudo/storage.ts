import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v85: new StorageType('Sudo.Key', 'Optional', [], v85.AccountId32) as KeyV85,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
