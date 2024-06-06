import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const rewards =  {
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v85: new StorageType('VestedRewards.Rewards', 'Default', [v85.AccountId32], v85.Type_784) as RewardsV85,
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_784
    get(block: Block, key: v85.AccountId32): Promise<(v85.Type_784 | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.Type_784 | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.Type_784 | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.Type_784 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.Type_784 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.Type_784 | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    v85: new StorageType('VestedRewards.TotalRewards', 'Default', [], sts.bigint()) as TotalRewardsV85,
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface TotalRewardsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const crowdloanInfos =  {
    /**
     *  Information about crowdloan
     */
    v85: new StorageType('VestedRewards.CrowdloanInfos', 'Optional', [v85.CrowdloanTag], v85.CrowdloanInfo) as CrowdloanInfosV85,
}

/**
 *  Information about crowdloan
 */
export interface CrowdloanInfosV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.CrowdloanTag): Promise<(v85.CrowdloanInfo | undefined)>
    getMany(block: Block, keys: v85.CrowdloanTag[]): Promise<(v85.CrowdloanInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.CrowdloanTag[]>
    getKeys(block: Block, key: v85.CrowdloanTag): Promise<v85.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.CrowdloanTag): AsyncIterable<v85.CrowdloanTag[]>
    getPairs(block: Block): Promise<[k: v85.CrowdloanTag, v: (v85.CrowdloanInfo | undefined)][]>
    getPairs(block: Block, key: v85.CrowdloanTag): Promise<[k: v85.CrowdloanTag, v: (v85.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.CrowdloanTag, v: (v85.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.CrowdloanTag): AsyncIterable<[k: v85.CrowdloanTag, v: (v85.CrowdloanInfo | undefined)][]>
}

export const crowdloanUserInfos =  {
    /**
     *  Information about crowdloan rewards claimed by user
     */
    v85: new StorageType('VestedRewards.CrowdloanUserInfos', 'Optional', [v85.AccountId32, v85.CrowdloanTag], v85.CrowdloanUserInfo) as CrowdloanUserInfosV85,
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface CrowdloanUserInfosV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AccountId32, key2: v85.CrowdloanTag): Promise<(v85.CrowdloanUserInfo | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.CrowdloanTag][]): Promise<(v85.CrowdloanUserInfo | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.CrowdloanTag][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.CrowdloanTag][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.CrowdloanTag): Promise<[v85.AccountId32, v85.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.CrowdloanTag): AsyncIterable<[v85.AccountId32, v85.CrowdloanTag][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.CrowdloanTag): Promise<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.CrowdloanTag): AsyncIterable<[k: [v85.AccountId32, v85.CrowdloanTag], v: (v85.CrowdloanUserInfo | undefined)][]>
}
