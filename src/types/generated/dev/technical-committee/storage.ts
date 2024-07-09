import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v85: new StorageType('TechnicalCommittee.Proposals', 'Default', [], sts.array(() => v85.H256)) as ProposalsV85,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256[]
    get(block: Block): Promise<(v85.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v85: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v85.H256], v85.Call) as ProposalOfV85,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.Call | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.Call | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.Call | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v85: new StorageType('TechnicalCommittee.Voting', 'Optional', [v85.H256], v85.Votes) as VotingV85,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<(v85.Votes | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(v85.Votes | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (v85.Votes | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (v85.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (v85.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (v85.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v85: new StorageType('TechnicalCommittee.ProposalCount', 'Default', [], sts.number()) as ProposalCountV85,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v85: new StorageType('TechnicalCommittee.Members', 'Default', [], sts.array(() => v85.AccountId32)) as MembersV85,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v85: new StorageType('TechnicalCommittee.Prime', 'Optional', [], v85.AccountId32) as PrimeV85,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}
