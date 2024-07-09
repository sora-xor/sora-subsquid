import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v85: new StorageType('Session.Validators', 'Default', [], sts.array(() => v85.AccountId32)) as ValidatorsV85,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v85: new StorageType('Session.CurrentIndex', 'Default', [], sts.number()) as CurrentIndexV85,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v85: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV85,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v85: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v85.AccountId32, v85.SessionKeys]))) as QueuedKeysV85,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.AccountId32, v85.SessionKeys][]
    get(block: Block): Promise<([v85.AccountId32, v85.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    v85: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV85,
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v85: new StorageType('Session.NextKeys', 'Optional', [v85.AccountId32], v85.SessionKeys) as NextKeysV85,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(v85.SessionKeys | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v85: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v85.KeyTypeId, sts.bytes()])], v85.AccountId32) as KeyOwnerV85,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v85.KeyTypeId, Bytes]): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: [v85.KeyTypeId, Bytes][]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v85.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v85.KeyTypeId, Bytes]): Promise<[v85.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v85.KeyTypeId, Bytes]): AsyncIterable<[v85.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v85.KeyTypeId, Bytes], v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v85.KeyTypeId, Bytes]): Promise<[k: [v85.KeyTypeId, Bytes], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.KeyTypeId, Bytes], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v85.KeyTypeId, Bytes]): AsyncIterable<[k: [v85.KeyTypeId, Bytes], v: (v85.AccountId32 | undefined)][]>
}
