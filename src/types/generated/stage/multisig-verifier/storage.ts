import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'
import * as v84 from '../v84'

export const peerKeys =  {
    v64: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v64.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV64,
    v70: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v70.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV70,
    v84: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v84.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV84,
}

export interface PeerKeysV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v64.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v64.GenericNetworkId[]>
    getKeys(block: Block, key: v64.GenericNetworkId): Promise<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<v64.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v64.GenericNetworkId): Promise<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.GenericNetworkId): AsyncIterable<[k: v64.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export interface PeerKeysV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export interface PeerKeysV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v84.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v84.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v84.GenericNetworkId[]>
    getKeys(block: Block, key: v84.GenericNetworkId): Promise<v84.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v84.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v84.GenericNetworkId): AsyncIterable<v84.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v84.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v84.GenericNetworkId): Promise<[k: v84.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v84.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v84.GenericNetworkId): AsyncIterable<[k: v84.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export const thisNetworkId =  {
    v64: new StorageType('MultisigVerifier.ThisNetworkId', 'Default', [], v64.GenericNetworkId) as ThisNetworkIdV64,
}

export interface ThisNetworkIdV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64.GenericNetworkId
    get(block: Block): Promise<(v64.GenericNetworkId | undefined)>
}
