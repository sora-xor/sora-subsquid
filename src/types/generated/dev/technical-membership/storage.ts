import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v85: new StorageType('TechnicalMembership.Members', 'Default', [], sts.array(() => v85.AccountId32)) as MembersV85,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v85: new StorageType('TechnicalMembership.Prime', 'Optional', [], v85.AccountId32) as PrimeV85,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
