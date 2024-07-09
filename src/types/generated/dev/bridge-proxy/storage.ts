import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const transactions =  {
    v85: new StorageType('BridgeProxy.Transactions', 'Optional', [sts.tuple(() => [v85.GenericNetworkId, v85.AccountId32]), v85.H256], v85.BridgeRequest) as TransactionsV85,
}

export interface TransactionsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: [v85.GenericNetworkId, v85.AccountId32], key2: v85.H256): Promise<(v85.BridgeRequest | undefined)>
    getMany(block: Block, keys: [[v85.GenericNetworkId, v85.AccountId32], v85.H256][]): Promise<(v85.BridgeRequest | undefined)[]>
    getKeys(block: Block): Promise<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getKeys(block: Block, key1: [v85.GenericNetworkId, v85.AccountId32]): Promise<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getKeys(block: Block, key1: [v85.GenericNetworkId, v85.AccountId32], key2: v85.H256): Promise<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v85.GenericNetworkId, v85.AccountId32]): AsyncIterable<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v85.GenericNetworkId, v85.AccountId32], key2: v85.H256): AsyncIterable<[[v85.GenericNetworkId, v85.AccountId32], v85.H256][]>
    getPairs(block: Block): Promise<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v85.GenericNetworkId, v85.AccountId32]): Promise<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v85.GenericNetworkId, v85.AccountId32], key2: v85.H256): Promise<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v85.GenericNetworkId, v85.AccountId32]): AsyncIterable<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v85.GenericNetworkId, v85.AccountId32], key2: v85.H256): AsyncIterable<[k: [[v85.GenericNetworkId, v85.AccountId32], v85.H256], v: (v85.BridgeRequest | undefined)][]>
}

export const senders =  {
    v85: new StorageType('BridgeProxy.Senders', 'Optional', [v85.GenericNetworkId, v85.H256], v85.AccountId32) as SendersV85,
}

export interface SendersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: [v85.GenericNetworkId, v85.H256][]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeys(block: Block, key1: v85.GenericNetworkId): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeys(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.H256): AsyncIterable<[v85.GenericNetworkId, v85.H256][]>
    getPairs(block: Block): Promise<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId): Promise<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId, key2: v85.H256): Promise<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.H256): AsyncIterable<[k: [v85.GenericNetworkId, v85.H256], v: (v85.AccountId32 | undefined)][]>
}

export const lockedAssets =  {
    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    v85: new StorageType('BridgeProxy.LockedAssets', 'Default', [v85.GenericNetworkId, v85.AssetId32], sts.bigint()) as LockedAssetsV85,
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface LockedAssetsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v85.GenericNetworkId, key2: v85.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v85.GenericNetworkId, v85.AssetId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v85.GenericNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.GenericNetworkId): Promise<[v85.GenericNetworkId, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.GenericNetworkId, key2: v85.AssetId32): Promise<[v85.GenericNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.GenericNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[v85.GenericNetworkId, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.AssetId32): AsyncIterable<[v85.GenericNetworkId, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId): Promise<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v85.GenericNetworkId, key2: v85.AssetId32): Promise<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId): AsyncIterable<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.GenericNetworkId, key2: v85.AssetId32): AsyncIterable<[k: [v85.GenericNetworkId, v85.AssetId32], v: (bigint | undefined)][]>
}

export const transferLimit =  {
    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    v85: new StorageType('BridgeProxy.TransferLimit', 'Default', [], v85.TransferLimitSettings) as TransferLimitV85,
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface TransferLimitV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.TransferLimitSettings
    get(block: Block): Promise<(v85.TransferLimitSettings | undefined)>
}

export const consumedTransferLimit =  {
    /**
     *  Consumed transfer limit.
     */
    v85: new StorageType('BridgeProxy.ConsumedTransferLimit', 'Default', [], sts.bigint()) as ConsumedTransferLimitV85,
}

/**
 *  Consumed transfer limit.
 */
export interface ConsumedTransferLimitV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const transferLimitUnlockSchedule =  {
    /**
     *  Schedule for consumed transfer limit reduce.
     */
    v85: new StorageType('BridgeProxy.TransferLimitUnlockSchedule', 'Default', [sts.number()], sts.bigint()) as TransferLimitUnlockScheduleV85,
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface TransferLimitUnlockScheduleV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const limitedAssets =  {
    /**
     *  Assets with transfer limitation.
     */
    v85: new StorageType('BridgeProxy.LimitedAssets', 'Default', [v85.AssetId32], sts.boolean()) as LimitedAssetsV85,
}

/**
 *  Assets with transfer limitation.
 */
export interface LimitedAssetsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v85.AssetId32): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (boolean | undefined)][]>
}
