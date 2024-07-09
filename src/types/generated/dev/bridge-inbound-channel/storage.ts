import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const channelNonces =  {
    v85: new StorageType('BridgeInboundChannel.ChannelNonces', 'Default', [v85.GenericNetworkId], sts.bigint()) as ChannelNoncesV85,
}

export interface ChannelNoncesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.GenericNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
}

export const reportedChannelNonces =  {
    v85: new StorageType('BridgeInboundChannel.ReportedChannelNonces', 'Default', [v85.GenericNetworkId], sts.bigint()) as ReportedChannelNoncesV85,
}

export interface ReportedChannelNoncesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.GenericNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (bigint | undefined)][]>
}

export const evmChannelAddresses =  {
    v85: new StorageType('BridgeInboundChannel.EVMChannelAddresses', 'Optional', [v85.H256], v85.H160) as EvmChannelAddressesV85,
}

export interface EvmChannelAddressesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.H160 | undefined)][]>
}
