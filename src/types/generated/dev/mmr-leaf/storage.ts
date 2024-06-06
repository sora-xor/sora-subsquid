import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v85: new StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v85.BeefyAuthoritySet) as BeefyAuthoritiesV85,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.BeefyAuthoritySet
    get(block: Block): Promise<(v85.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v85: new StorageType('MmrLeaf.BeefyNextAuthorities', 'Default', [], v85.BeefyAuthoritySet) as BeefyNextAuthoritiesV85,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.BeefyAuthoritySet
    get(block: Block): Promise<(v85.BeefyAuthoritySet | undefined)>
}
