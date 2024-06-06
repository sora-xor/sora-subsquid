import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const peers =  {
    /**
     *  Peers
     */
    v85: new StorageType('BridgeDataSigner.Peers', 'Optional', [v85.GenericNetworkId], sts.array(() => sts.bytes())) as PeersV85,
}

/**
 *  Peers
 */
export interface PeersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export const pendingPeerUpdate =  {
    /**
     *  Pending peers
     */
    v85: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v85.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV85,
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v85.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (boolean | undefined)][]>
}

export const approvals =  {
    /**
     *  Approvals
     */
    v85: new StorageType('BridgeDataSigner.Approvals', 'Default', [v85.GenericNetworkId, v85.H256], sts.array(() => sts.tuple(() => [sts.bytes(), v85.Signature]))) as ApprovalsV85,
}

/**
 *  Approvals
 */
export interface ApprovalsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, v85.Signature][]
    get(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<([Bytes, v85.Signature][] | undefined)>
    getMany(block: Block, keys: [v85.GenericNetworkId, v85.H256][]): Promise<([Bytes, v85.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeys(block: Block, key1: v85.GenericNetworkId): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeys(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.H256): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getPairs(block: Block): Promise<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId): Promise<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.H256): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: ([Bytes, v85.Signature][] | undefined)][]>
}
