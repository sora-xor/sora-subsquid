import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'
import * as v84 from '../v84'

export const latestDigest =  {
    /**
     *  Latest digest
     */
    v64: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v64.AuxiliaryDigestItem)) as LatestDigestV64,
    /**
     *  Latest digest
     */
    v70: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v70.AuxiliaryDigestItem)) as LatestDigestV70,
    /**
     *  Latest digest
     */
    v84: new StorageType('LeafProvider.LatestDigest', 'Optional', [], sts.array(() => v84.AuxiliaryDigestItem)) as LatestDigestV84,
}

/**
 *  Latest digest
 */
export interface LatestDigestV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v64.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LatestDigestV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AuxiliaryDigestItem[] | undefined)>
}

/**
 *  Latest digest
 */
export interface LatestDigestV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v84.AuxiliaryDigestItem[] | undefined)>
}
