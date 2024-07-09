import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const hermesVotings =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v85: new StorageType('HermesGovernancePlatform.HermesVotings', 'Optional', [v85.H256, v85.AccountId32], v85.HermesVotingInfo) as HermesVotingsV85,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesVotingsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<(v85.HermesVotingInfo | undefined)>
    getMany(block: Block, keys: [v85.H256, v85.AccountId32][]): Promise<(v85.HermesVotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v85.H256, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.H256): Promise<[v85.H256, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AccountId32): AsyncIterable<[v85.H256, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v85.H256): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v85.H256, key2: v85.AccountId32): Promise<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.H256, key2: v85.AccountId32): AsyncIterable<[k: [v85.H256, v85.AccountId32], v: (v85.HermesVotingInfo | undefined)][]>
}

export const hermesPollData =  {
    v85: new StorageType('HermesGovernancePlatform.HermesPollData', 'Optional', [v85.H256], v85.HermesPollInfo) as HermesPollDataV85,
}

export interface HermesPollDataV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.HermesPollInfo | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.HermesPollInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.HermesPollInfo | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.HermesPollInfo | undefined)][]>
}

export const minimumHermesVotingAmount =  {
    v85: new StorageType('HermesGovernancePlatform.MinimumHermesVotingAmount', 'Default', [], sts.bigint()) as MinimumHermesVotingAmountV85,
}

export interface MinimumHermesVotingAmountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumHermesAmountForCreatingPoll =  {
    v85: new StorageType('HermesGovernancePlatform.MinimumHermesAmountForCreatingPoll', 'Default', [], sts.bigint()) as MinimumHermesAmountForCreatingPollV85,
}

export interface MinimumHermesAmountForCreatingPollV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    v85: new StorageType('HermesGovernancePlatform.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v85: new StorageType('HermesGovernancePlatform.PalletStorageVersion', 'Default', [], v85.Type_860) as PalletStorageVersionV85,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_860
    get(block: Block): Promise<(v85.Type_860 | undefined)>
}
