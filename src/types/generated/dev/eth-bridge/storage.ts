import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const requestsQueue =  {
    /**
     *  Registered requests queue handled by off-chain workers.
     */
    v85: new StorageType('EthBridge.RequestsQueue', 'Default', [sts.number()], sts.array(() => v85.H256)) as RequestsQueueV85,
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface RequestsQueueV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256[]
    get(block: Block, key: number): Promise<(v85.H256[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.H256[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.H256[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.H256[] | undefined)][]>
}

export const requests =  {
    /**
     *  Registered requests.
     */
    v85: new StorageType('EthBridge.Requests', 'Optional', [sts.number(), v85.H256], v85.OffchainRequest) as RequestsV85,
}

/**
 *  Registered requests.
 */
export interface RequestsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.H256): Promise<(v85.OffchainRequest | undefined)>
    getMany(block: Block, keys: [number, v85.H256][]): Promise<(v85.OffchainRequest | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number, key2: v85.H256): Promise<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[number, v85.H256][]>
    getPairs(block: Block): Promise<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H256): Promise<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[k: [number, v85.H256], v: (v85.OffchainRequest | undefined)][]>
}

export const loadToIncomingRequestHash =  {
    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    v85: new StorageType('EthBridge.LoadToIncomingRequestHash', 'Default', [sts.number(), v85.H256], v85.H256) as LoadToIncomingRequestHashV85,
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface LoadToIncomingRequestHashV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256
    get(block: Block, key1: number, key2: v85.H256): Promise<(v85.H256 | undefined)>
    getMany(block: Block, keys: [number, v85.H256][]): Promise<(v85.H256 | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number, key2: v85.H256): Promise<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[number, v85.H256][]>
    getPairs(block: Block): Promise<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H256): Promise<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[k: [number, v85.H256], v: (v85.H256 | undefined)][]>
}

export const requestStatuses =  {
    /**
     *  Requests statuses.
     */
    v85: new StorageType('EthBridge.RequestStatuses', 'Optional', [sts.number(), v85.H256], v85.RequestStatus) as RequestStatusesV85,
}

/**
 *  Requests statuses.
 */
export interface RequestStatusesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.H256): Promise<(v85.RequestStatus | undefined)>
    getMany(block: Block, keys: [number, v85.H256][]): Promise<(v85.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number, key2: v85.H256): Promise<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[number, v85.H256][]>
    getPairs(block: Block): Promise<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H256): Promise<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[k: [number, v85.H256], v: (v85.RequestStatus | undefined)][]>
}

export const requestSubmissionHeight =  {
    /**
     *  Requests submission height map (on substrate).
     */
    v85: new StorageType('EthBridge.RequestSubmissionHeight', 'Default', [sts.number(), v85.H256], sts.number()) as RequestSubmissionHeightV85,
}

/**
 *  Requests submission height map (on substrate).
 */
export interface RequestSubmissionHeightV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v85.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v85.H256][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number, key2: v85.H256): Promise<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[number, v85.H256][]>
    getPairs(block: Block): Promise<[k: [number, v85.H256], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H256], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H256): Promise<[k: [number, v85.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H256], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[k: [number, v85.H256], v: (number | undefined)][]>
}

export const requestApprovals =  {
    /**
     *  Outgoing requests approvals.
     */
    v85: new StorageType('EthBridge.RequestApprovals', 'Default', [sts.number(), v85.H256], sts.array(() => v85.SignatureParams)) as RequestApprovalsV85,
}

/**
 *  Outgoing requests approvals.
 */
export interface RequestApprovalsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.SignatureParams[]
    get(block: Block, key1: number, key2: v85.H256): Promise<(v85.SignatureParams[] | undefined)>
    getMany(block: Block, keys: [number, v85.H256][]): Promise<(v85.SignatureParams[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H256][]>
    getKeys(block: Block, key1: number, key2: v85.H256): Promise<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[number, v85.H256][]>
    getPairs(block: Block): Promise<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H256): Promise<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H256): AsyncIterable<[k: [number, v85.H256], v: (v85.SignatureParams[] | undefined)][]>
}

export const accountRequests =  {
    /**
     *  Requests made by an account.
     */
    v85: new StorageType('EthBridge.AccountRequests', 'Default', [v85.AccountId32], sts.array(() => sts.tuple(() => [sts.number(), v85.H256]))) as AccountRequestsV85,
}

/**
 *  Requests made by an account.
 */
export interface AccountRequestsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v85.H256][]
    get(block: Block, key: v85.AccountId32): Promise<([number, v85.H256][] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<([number, v85.H256][] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: ([number, v85.H256][] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: ([number, v85.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: ([number, v85.H256][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: ([number, v85.H256][] | undefined)][]>
}

export const registeredAsset =  {
    /**
     *  Registered asset kind.
     */
    v85: new StorageType('EthBridge.RegisteredAsset', 'Optional', [sts.number(), v85.AssetId32], v85.AssetKind) as RegisteredAssetV85,
}

/**
 *  Registered asset kind.
 */
export interface RegisteredAssetV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.AssetId32): Promise<(v85.AssetKind | undefined)>
    getMany(block: Block, keys: [number, v85.AssetId32][]): Promise<(v85.AssetKind | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v85.AssetId32): Promise<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[number, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.AssetId32): Promise<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.AssetKind | undefined)][]>
}

export const sidechainAssetPrecision =  {
    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    v85: new StorageType('EthBridge.SidechainAssetPrecision', 'Default', [sts.number(), v85.AssetId32], sts.number()) as SidechainAssetPrecisionV85,
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface SidechainAssetPrecisionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: number, key2: v85.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, v85.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v85.AssetId32): Promise<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[number, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.AssetId32): Promise<[k: [number, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[k: [number, v85.AssetId32], v: (number | undefined)][]>
}

export const registeredSidechainAsset =  {
    /**
     *  Registered token `AssetId` on Thischain.
     */
    v85: new StorageType('EthBridge.RegisteredSidechainAsset', 'Optional', [sts.number(), v85.H160], v85.AssetId32) as RegisteredSidechainAssetV85,
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface RegisteredSidechainAssetV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.H160): Promise<(v85.AssetId32 | undefined)>
    getMany(block: Block, keys: [number, v85.H160][]): Promise<(v85.AssetId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H160][]>
    getKeys(block: Block, key1: number, key2: v85.H160): Promise<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H160): AsyncIterable<[number, v85.H160][]>
    getPairs(block: Block): Promise<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H160): Promise<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H160): AsyncIterable<[k: [number, v85.H160], v: (v85.AssetId32 | undefined)][]>
}

export const registeredSidechainToken =  {
    /**
     *  Registered asset address on Sidechain.
     */
    v85: new StorageType('EthBridge.RegisteredSidechainToken', 'Optional', [sts.number(), v85.AssetId32], v85.H160) as RegisteredSidechainTokenV85,
}

/**
 *  Registered asset address on Sidechain.
 */
export interface RegisteredSidechainTokenV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.AssetId32): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: [number, v85.AssetId32][]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.AssetId32][]>
    getKeys(block: Block, key1: number, key2: v85.AssetId32): Promise<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[number, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.AssetId32): Promise<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.AssetId32): AsyncIterable<[k: [number, v85.AssetId32], v: (v85.H160 | undefined)][]>
}

export const peers =  {
    /**
     *  Network peers set.
     */
    v85: new StorageType('EthBridge.Peers', 'Default', [sts.number()], sts.array(() => v85.AccountId32)) as PeersV85,
}

/**
 *  Network peers set.
 */
export interface PeersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block, key: number): Promise<(v85.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.AccountId32[] | undefined)][]>
}

export const pendingPeer =  {
    /**
     *  Network pending (being added/removed) peer.
     */
    v85: new StorageType('EthBridge.PendingPeer', 'Optional', [sts.number()], v85.AccountId32) as PendingPeerV85,
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface PendingPeerV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.AccountId32 | undefined)][]>
}

export const pendingEthPeersSync =  {
    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    v85: new StorageType('EthBridge.PendingEthPeersSync', 'Default', [], v85.EthPeersSync) as PendingEthPeersSyncV85,
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface PendingEthPeersSyncV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.EthPeersSync
    get(block: Block): Promise<(v85.EthPeersSync | undefined)>
}

export const peerAccountId =  {
    /**
     *  Peer account ID on Thischain.
     */
    v85: new StorageType('EthBridge.PeerAccountId', 'Optional', [sts.number(), v85.H160], v85.AccountId32) as PeerAccountIdV85,
}

/**
 *  Peer account ID on Thischain.
 */
export interface PeerAccountIdV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v85.H160): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: [number, v85.H160][]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.H160][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.H160][]>
    getKeys(block: Block, key1: number, key2: v85.H160): Promise<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.H160): AsyncIterable<[number, v85.H160][]>
    getPairs(block: Block): Promise<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.H160): Promise<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.H160): AsyncIterable<[k: [number, v85.H160], v: (v85.AccountId32 | undefined)][]>
}

export const peerAddress =  {
    /**
     *  Peer address on Sidechain.
     */
    v85: new StorageType('EthBridge.PeerAddress', 'Default', [sts.number(), v85.AccountId32], v85.H160) as PeerAddressV85,
}

/**
 *  Peer address on Sidechain.
 */
export interface PeerAddressV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H160
    get(block: Block, key1: number, key2: v85.AccountId32): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: [number, v85.AccountId32][]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<[number, v85.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v85.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v85.AccountId32): Promise<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v85.AccountId32): AsyncIterable<[number, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key1: number, key2: v85.AccountId32): Promise<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v85.AccountId32): AsyncIterable<[k: [number, v85.AccountId32], v: (v85.H160 | undefined)][]>
}

export const bridgeAccount =  {
    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    v85: new StorageType('EthBridge.BridgeAccount', 'Optional', [sts.number()], v85.AccountId32) as BridgeAccountV85,
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface BridgeAccountV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.AccountId32 | undefined)][]>
}

export const authorityAccount =  {
    /**
     *  Thischain authority account.
     */
    v85: new StorageType('EthBridge.AuthorityAccount', 'Optional', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Thischain authority account.
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const bridgeStatuses =  {
    /**
     *  Bridge status.
     */
    v85: new StorageType('EthBridge.BridgeStatuses', 'Optional', [sts.number()], v85.BridgeStatus) as BridgeStatusesV85,
}

/**
 *  Bridge status.
 */
export interface BridgeStatusesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.BridgeStatus | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.BridgeStatus | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.BridgeStatus | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.BridgeStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.BridgeStatus | undefined)][]>
}

export const bridgeContractAddress =  {
    /**
     *  Smart-contract address on Sidechain.
     */
    v85: new StorageType('EthBridge.BridgeContractAddress', 'Default', [sts.number()], v85.H160) as BridgeContractAddressV85,
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface BridgeContractAddressV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H160
    get(block: Block, key: number): Promise<(v85.H160 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.H160 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.H160 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.H160 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.H160 | undefined)][]>
}

export const xorMasterContractAddress =  {
    /**
     *  Sora XOR master contract address.
     */
    v85: new StorageType('EthBridge.XorMasterContractAddress', 'Default', [], v85.H160) as XorMasterContractAddressV85,
}

/**
 *  Sora XOR master contract address.
 */
export interface XorMasterContractAddressV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H160
    get(block: Block): Promise<(v85.H160 | undefined)>
}

export const valMasterContractAddress =  {
    /**
     *  Sora VAL master contract address.
     */
    v85: new StorageType('EthBridge.ValMasterContractAddress', 'Default', [], v85.H160) as ValMasterContractAddressV85,
}

/**
 *  Sora VAL master contract address.
 */
export interface ValMasterContractAddressV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H160
    get(block: Block): Promise<(v85.H160 | undefined)>
}

export const nextNetworkId =  {
    /**
     *  Next Network ID counter.
     */
    v85: new StorageType('EthBridge.NextNetworkId', 'Default', [], sts.number()) as NextNetworkIdV85,
}

/**
 *  Next Network ID counter.
 */
export interface NextNetworkIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const migratingRequests =  {
    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    v85: new StorageType('EthBridge.MigratingRequests', 'Default', [], sts.array(() => v85.H256)) as MigratingRequestsV85,
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface MigratingRequestsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256[]
    get(block: Block): Promise<(v85.H256[] | undefined)>
}

export const bridgeSignatureVersions =  {
    v85: new StorageType('EthBridge.BridgeSignatureVersions', 'Default', [sts.number()], v85.BridgeSignatureVersion) as BridgeSignatureVersionsV85,
}

export interface BridgeSignatureVersionsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.BridgeSignatureVersion
    get(block: Block, key: number): Promise<(v85.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
}

export const pendingBridgeSignatureVersions =  {
    v85: new StorageType('EthBridge.PendingBridgeSignatureVersions', 'Optional', [sts.number()], v85.BridgeSignatureVersion) as PendingBridgeSignatureVersionsV85,
}

export interface PendingBridgeSignatureVersionsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.BridgeSignatureVersion | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.BridgeSignatureVersion | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.BridgeSignatureVersion | undefined)][]>
}
