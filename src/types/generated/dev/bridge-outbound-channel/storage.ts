import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v85: new StorageType('BridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV85,
}

/**
 *  Interval between committing messages.
 */
export interface IntervalV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const messageQueues =  {
    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    v85: new StorageType('BridgeOutboundChannel.MessageQueues', 'Default', [v85.GenericNetworkId], sts.array(() => v85.GenericBridgeMessage)) as MessageQueuesV85,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.GenericBridgeMessage[]
    get(block: Block, key: v85.GenericNetworkId): Promise<(v85.GenericBridgeMessage[] | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(v85.GenericBridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (v85.GenericBridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (v85.GenericBridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (v85.GenericBridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (v85.GenericBridgeMessage[] | undefined)][]>
}

export const queueTotalGas =  {
    v85: new StorageType('BridgeOutboundChannel.QueueTotalGas', 'Default', [v85.GenericNetworkId], sts.bigint()) as QueueTotalGasV85,
}

export interface QueueTotalGasV85  {
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

export const channelNonces =  {
    v85: new StorageType('BridgeOutboundChannel.ChannelNonces', 'Default', [v85.GenericNetworkId], sts.bigint()) as ChannelNoncesV85,
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

export const latestCommitment =  {
    v85: new StorageType('BridgeOutboundChannel.LatestCommitment', 'Optional', [v85.GenericNetworkId], v85.GenericCommitmentWithBlock) as LatestCommitmentV85,
}

export interface LatestCommitmentV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.GenericNetworkId): Promise<(v85.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v85.GenericNetworkId[]): Promise<(v85.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v85.GenericNetworkId[]>
    getKeys(block: Block, key: v85.GenericNetworkId): Promise<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<v85.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.GenericNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v85.GenericNetworkId): Promise<[k: v85.GenericNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.GenericNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.GenericNetworkId): AsyncIterable<[k: v85.GenericNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
}

export const evmSubmitGas =  {
    v85: new StorageType('BridgeOutboundChannel.EVMSubmitGas', 'Default', [v85.H256], sts.bigint()) as EvmSubmitGasV85,
}

export interface EvmSubmitGasV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.H256): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (bigint | undefined)][]>
}
