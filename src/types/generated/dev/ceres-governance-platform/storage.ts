import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const voting =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v85: new StorageType('CeresGovernancePlatform.Voting', 'Optional', [v85.H256, v85.AccountId32], v85.VotingInfo) as VotingV85,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface VotingV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<(v85.VotingInfo | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.AccountId32][]): Promise<(v85.VotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AccountId32): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AccountId32): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.VotingInfo | undefined)][]>
}

export const pollData =  {
    v85: new StorageType('CeresGovernancePlatform.PollData', 'Optional', [v85.H256], v85.PollInfo) as PollDataV85,
}

export interface PollDataV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.PollInfo | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.PollInfo | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.PollInfo | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v85: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v85.Type_821) as PalletStorageVersionV85,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_821
    get(block: Block): Promise<(v85.Type_821 | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for creating a poll
     */
    v85: new StorageType('CeresGovernancePlatform.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for creating a poll
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
