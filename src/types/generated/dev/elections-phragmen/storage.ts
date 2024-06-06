import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v85: new StorageType('ElectionsPhragmen.Members', 'Default', [], sts.array(() => v85.SeatHolder)) as MembersV85,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.SeatHolder[]
    get(block: Block): Promise<(v85.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v85: new StorageType('ElectionsPhragmen.RunnersUp', 'Default', [], sts.array(() => v85.SeatHolder)) as RunnersUpV85,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.SeatHolder[]
    get(block: Block): Promise<(v85.SeatHolder[] | undefined)>
}

export const candidates =  {
    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v85: new StorageType('ElectionsPhragmen.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v85.AccountId32, sts.bigint()]))) as CandidatesV85,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.AccountId32, bigint][]
    get(block: Block): Promise<([v85.AccountId32, bigint][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v85: new StorageType('ElectionsPhragmen.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV85,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const voting =  {
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    v85: new StorageType('ElectionsPhragmen.Voting', 'Default', [v85.AccountId32], v85.Voter) as VotingV85,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Voter
    get(block: Block, key: v85.AccountId32): Promise<(v85.Voter | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.Voter | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.Voter | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.Voter | undefined)][]>
}
