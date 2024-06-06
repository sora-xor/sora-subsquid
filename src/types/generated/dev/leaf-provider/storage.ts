import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v85: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v85.AuxiliaryDigestItem)) as LatestDigestV85,
}

/**
 *  Latest digest
 */
export interface LatestDigestV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AuxiliaryDigestItem[] | undefined)>
}
