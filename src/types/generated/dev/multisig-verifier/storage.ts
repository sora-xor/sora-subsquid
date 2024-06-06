import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const peerKeys =  {
    v85: new StorageType('MultisigVerifier.PeerKeys', 'Optional', [v85.GenericNetworkId], sts.array(() => sts.bytes())) as PeerKeysV85,
}

export interface PeerKeysV85  {
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
