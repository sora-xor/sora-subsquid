import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const accounts =  {
    /**
     *  Multisignature accounts.
     */
    v85: new StorageType('BridgeMultisig.Accounts', 'Optional', [v85.AccountId32], v85.MultisigAccount) as AccountsV85,
}

/**
 *  Multisignature accounts.
 */
export interface AccountsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(v85.MultisigAccount | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.MultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.MultisigAccount | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.MultisigAccount | undefined)][]>
}

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v85: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v85.AccountId32, sts.bytes()], v85.Multisig) as MultisigsV85,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<(v85.Multisig | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, Bytes][]): Promise<(v85.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: Bytes): AsyncIterable<[v85.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: Bytes): Promise<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: Bytes): AsyncIterable<[k: [v85.AccountId32, Bytes], v: (v85.Multisig | undefined)][]>
}

export const calls =  {
    v85: new StorageType('BridgeMultisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [sts.bytes(), v85.AccountId32, sts.bigint()])) as CallsV85,
}

export interface CallsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([Bytes, v85.AccountId32, bigint] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([Bytes, v85.AccountId32, bigint] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([Bytes, v85.AccountId32, bigint] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([Bytes, v85.AccountId32, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([Bytes, v85.AccountId32, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([Bytes, v85.AccountId32, bigint] | undefined)][]>
}

export const dispatchedCalls =  {
    v85: new StorageType('BridgeMultisig.DispatchedCalls', 'Default', [sts.bytes(), v85.BridgeTimepoint], sts.unit()) as DispatchedCallsV85,
}

export interface DispatchedCallsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: Bytes, key2: v85.BridgeTimepoint): Promise<(null | undefined)>
    getMany(block: Block, keys: [Bytes, v85.BridgeTimepoint][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v85.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v85.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes, key2: v85.BridgeTimepoint): Promise<[Bytes, v85.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v85.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v85.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v85.BridgeTimepoint): AsyncIterable<[Bytes, v85.BridgeTimepoint][]>
    getPairs(block: Block): Promise<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v85.BridgeTimepoint): Promise<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v85.BridgeTimepoint): AsyncIterable<[k: [Bytes, v85.BridgeTimepoint], v: (null | undefined)][]>
}
