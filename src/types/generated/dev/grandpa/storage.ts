import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const state =  {
    /**
     *  State of the current authority set.
     */
    v85: new StorageType('Grandpa.State', 'Default', [], v85.StoredState) as StateV85,
}

/**
 *  State of the current authority set.
 */
export interface StateV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.StoredState
    get(block: Block): Promise<(v85.StoredState | undefined)>
}

export const pendingChange =  {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v85: new StorageType('Grandpa.PendingChange', 'Optional', [], v85.StoredPendingChange) as PendingChangeV85,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.StoredPendingChange | undefined)>
}

export const nextForced =  {
    /**
     *  next block number where we can force a change.
     */
    v85: new StorageType('Grandpa.NextForced', 'Optional', [], sts.number()) as NextForcedV85,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v85: new StorageType('Grandpa.Stalled', 'Optional', [], sts.tuple(() => [sts.number(), sts.number()])) as StalledV85,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([number, number] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v85: new StorageType('Grandpa.CurrentSetId', 'Default', [], sts.bigint()) as CurrentSetIdV85,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    v85: new StorageType('Grandpa.SetIdSession', 'Optional', [sts.bigint()], sts.number()) as SetIdSessionV85,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(number | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (number | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (number | undefined)][]>
}
