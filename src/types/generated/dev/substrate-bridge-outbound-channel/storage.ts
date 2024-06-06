import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const interval =  {
    /**
     *  Interval between committing messages.
     */
    v85: new StorageType('SubstrateBridgeOutboundChannel.Interval', 'Default', [], sts.number()) as IntervalV85,
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
    v85: new StorageType('SubstrateBridgeOutboundChannel.MessageQueues', 'Default', [v85.SubNetworkId], sts.array(() => v85.BridgeMessage)) as MessageQueuesV85,
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface MessageQueuesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.BridgeMessage[]
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.BridgeMessage[] | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.BridgeMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.BridgeMessage[] | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BridgeMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BridgeMessage[] | undefined)][]>
}

export const channelNonces =  {
    v85: new StorageType('SubstrateBridgeOutboundChannel.ChannelNonces', 'Default', [v85.SubNetworkId], sts.bigint()) as ChannelNoncesV85,
}

export interface ChannelNoncesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
}

export const latestCommitment =  {
    v85: new StorageType('SubstrateBridgeOutboundChannel.LatestCommitment', 'Optional', [v85.SubNetworkId], v85.GenericCommitmentWithBlock) as LatestCommitmentV85,
}

export interface LatestCommitmentV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.GenericCommitmentWithBlock | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.GenericCommitmentWithBlock | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.GenericCommitmentWithBlock | undefined)][]>
}
