import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const channelNonces =  {
    v85: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v85.SubNetworkId], sts.bigint()) as ChannelNoncesV85,
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
