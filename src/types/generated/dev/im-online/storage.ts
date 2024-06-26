import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const heartbeatAfter =  {
    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    v85: new StorageType('ImOnline.HeartbeatAfter', 'Default', [], sts.number()) as HeartbeatAfterV85,
}

/**
 *  The block number after which it's ok to send heartbeats in the current
 *  session.
 * 
 *  At the beginning of each session we set this to a value that should fall
 *  roughly in the middle of the session duration. The idea is to first wait for
 *  the validators to produce a block in the current session, so that the
 *  heartbeat later on will not be necessary.
 * 
 *  This value will only be used as a fallback if we fail to get a proper session
 *  progress estimate from `NextSessionRotation`, as those estimates should be
 *  more accurate then the value we calculate for `HeartbeatAfter`.
 */
export interface HeartbeatAfterV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const keys =  {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    v85: new StorageType('ImOnline.Keys', 'Default', [], sts.array(() => sts.bytes())) as KeysV85,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const receivedHeartbeats =  {
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v85: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], v85.WrapperOpaque) as ReceivedHeartbeatsV85,
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v85.WrapperOpaque | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v85.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v85.WrapperOpaque | undefined)][]>
}

export const authoredBlocks =  {
    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    v85: new StorageType('ImOnline.AuthoredBlocks', 'Default', [sts.number(), v85.AccountId32], sts.number()) as AuthoredBlocksV85,
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v85.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v85.AccountId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v85.AccountId32): Promise<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.AccountId32): AsyncIterable<[number, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v85.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.AccountId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.AccountId32): Promise<[k: [number, v85.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.AccountId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.AccountId32): AsyncIterable<[k: [number, v85.AccountId32], v: (number | undefined)][]>
}
