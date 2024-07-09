import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const reservesAcc =  {
    v85: new StorageType('Rewards.ReservesAcc', 'Default', [], v85.TechAccountId) as ReservesAccV85,
}

export interface ReservesAccV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.TechAccountId
    get(block: Block): Promise<(v85.TechAccountId | undefined)>
}

export const valOwners =  {
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v85: new StorageType('Rewards.ValOwners', 'Default', [v85.H160], v85.RewardInfo) as ValOwnersV85,
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface ValOwnersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.RewardInfo
    get(block: Block, key: v85.H160): Promise<(v85.RewardInfo | undefined)>
    getMany(block: Block, keys: v85.H160[]): Promise<(v85.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.H160[]>
    getKeys(block: Block, key: v85.H160): Promise<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<v85.H160[]>
    getPairs(block: Block): Promise<[k: v85.H160, v: (v85.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v85.H160): Promise<[k: v85.H160, v: (v85.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H160, v: (v85.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<[k: v85.H160, v: (v85.RewardInfo | undefined)][]>
}

export const pswapFarmOwners =  {
    v85: new StorageType('Rewards.PswapFarmOwners', 'Default', [v85.H160], sts.bigint()) as PswapFarmOwnersV85,
}

export interface PswapFarmOwnersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.H160[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.H160[]>
    getKeys(block: Block, key: v85.H160): Promise<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<v85.H160[]>
    getPairs(block: Block): Promise<[k: v85.H160, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.H160): Promise<[k: v85.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<[k: v85.H160, v: (bigint | undefined)][]>
}

export const pswapWaifuOwners =  {
    v85: new StorageType('Rewards.PswapWaifuOwners', 'Default', [v85.H160], sts.bigint()) as PswapWaifuOwnersV85,
}

export interface PswapWaifuOwnersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.H160[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.H160[]>
    getKeys(block: Block, key: v85.H160): Promise<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<v85.H160[]>
    getPairs(block: Block): Promise<[k: v85.H160, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.H160): Promise<[k: v85.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<[k: v85.H160, v: (bigint | undefined)][]>
}

export const umiNftReceivers =  {
    /**
     *  UMI NFT receivers storage
     */
    v85: new StorageType('Rewards.UmiNftReceivers', 'Default', [v85.H160], sts.array(() => sts.bigint())) as UmiNftReceiversV85,
}

/**
 *  UMI NFT receivers storage
 */
export interface UmiNftReceiversV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint[]
    get(block: Block, key: v85.H160): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: v85.H160[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<v85.H160[]>
    getKeys(block: Block, key: v85.H160): Promise<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<v85.H160[]>
    getPairs(block: Block): Promise<[k: v85.H160, v: (bigint[] | undefined)][]>
    getPairs(block: Block, key: v85.H160): Promise<[k: v85.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<[k: v85.H160, v: (bigint[] | undefined)][]>
}

export const valBurnedSinceLastVesting =  {
    /**
     *  Amount of VAL burned since last vesting
     */
    v85: new StorageType('Rewards.ValBurnedSinceLastVesting', 'Default', [], sts.bigint()) as ValBurnedSinceLastVestingV85,
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface ValBurnedSinceLastVestingV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const currentClaimableVal =  {
    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    v85: new StorageType('Rewards.CurrentClaimableVal', 'Default', [], sts.bigint()) as CurrentClaimableValV85,
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface CurrentClaimableValV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const ethAddresses =  {
    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    v85: new StorageType('Rewards.EthAddresses', 'Default', [sts.number()], sts.array(() => v85.H160)) as EthAddressesV85,
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface EthAddressesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H160[]
    get(block: Block, key: number): Promise<(v85.H160[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.H160[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.H160[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.H160[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.H160[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.H160[] | undefined)][]>
}

export const totalValRewards =  {
    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    v85: new StorageType('Rewards.TotalValRewards', 'Default', [], sts.bigint()) as TotalValRewardsV85,
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface TotalValRewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const totalClaimableVal =  {
    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    v85: new StorageType('Rewards.TotalClaimableVal', 'Default', [], sts.bigint()) as TotalClaimableValV85,
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface TotalClaimableValV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const migrationPending =  {
    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    v85: new StorageType('Rewards.MigrationPending', 'Default', [], sts.boolean()) as MigrationPendingV85,
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface MigrationPendingV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const umiNfts =  {
    /**
     *  The storage of available UMI NFTs.
     */
    v85: new StorageType('Rewards.UmiNfts', 'Default', [], sts.array(() => v85.AssetId32)) as UmiNftsV85,
}

/**
 *  The storage of available UMI NFTs.
 */
export interface UmiNftsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AssetId32[]
    get(block: Block): Promise<(v85.AssetId32[] | undefined)>
}

export const umiNftClaimed =  {
    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    v85: new StorageType('Rewards.UmiNftClaimed', 'Default', [v85.H160], sts.boolean()) as UmiNftClaimedV85,
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface UmiNftClaimedV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v85.H160): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v85.H160[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v85.H160[]>
    getKeys(block: Block, key: v85.H160): Promise<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<v85.H160[]>
    getPairs(block: Block): Promise<[k: v85.H160, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v85.H160): Promise<[k: v85.H160, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H160, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H160): AsyncIterable<[k: v85.H160, v: (boolean | undefined)][]>
}
