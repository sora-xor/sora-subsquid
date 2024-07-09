import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing remaining rewards
     */
    v85: new StorageType('CeresStaking.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const stakers =  {
    /**
     *  AccountId -> StakingInfo
     */
    v85: new StorageType('CeresStaking.Stakers', 'Default', [v85.AccountId32], v85.StakingInfo) as StakersV85,
}

/**
 *  AccountId -> StakingInfo
 */
export interface StakersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.StakingInfo
    get(block: Block, key: v85.AccountId32): Promise<(v85.StakingInfo | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.StakingInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.StakingInfo | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.StakingInfo | undefined)][]>
}

export const totalDeposited =  {
    v85: new StorageType('CeresStaking.TotalDeposited', 'Default', [], sts.bigint()) as TotalDepositedV85,
}

export interface TotalDepositedV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const rewardsRemaining =  {
    v85: new StorageType('CeresStaking.RewardsRemaining', 'Default', [], sts.bigint()) as RewardsRemainingV85,
}

export interface RewardsRemainingV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
