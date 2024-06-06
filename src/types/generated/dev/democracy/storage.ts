import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v85: new StorageType('Democracy.PublicPropCount', 'Default', [], sts.number()) as PublicPropCountV85,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v85: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v85.Bounded, v85.AccountId32]))) as PublicPropsV85,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v85.Bounded, v85.AccountId32][]
    get(block: Block): Promise<([number, v85.Bounded, v85.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v85: new StorageType('Democracy.DepositOf', 'Optional', [sts.number()], sts.tuple(() => [sts.array(() => v85.AccountId32), sts.bigint()])) as DepositOfV85,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([v85.AccountId32[], bigint] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v85.AccountId32[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v85.AccountId32[], bigint] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v85.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v85.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v85.AccountId32[], bigint] | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v85: new StorageType('Democracy.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountV85,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v85: new StorageType('Democracy.LowestUnbaked', 'Default', [], sts.number()) as LowestUnbakedV85,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v85: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v85.ReferendumInfo) as ReferendumInfoOfV85,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v85: new StorageType('Democracy.VotingOf', 'Default', [v85.AccountId32], v85.Voting) as VotingOfV85,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Voting
    get(block: Block, key: v85.AccountId32): Promise<(v85.Voting | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.Voting | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.Voting | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.Voting | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v85: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV85,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const nextExternal =  {
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v85: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v85.Bounded, v85.VoteThreshold])) as NextExternalV85,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v85.Bounded, v85.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v85: new StorageType('Democracy.Blacklist', 'Optional', [v85.H256], sts.tuple(() => [sts.number(), sts.array(() => v85.AccountId32)])) as BlacklistV85,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.H256): Promise<([number, v85.AccountId32[]] | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<([number, v85.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: ([number, v85.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: ([number, v85.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: ([number, v85.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: ([number, v85.AccountId32[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v85: new StorageType('Democracy.Cancellations', 'Default', [v85.H256], sts.boolean()) as CancellationsV85,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v85.H256): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v85.H256[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v85.H256[]>
    getKeys(block: Block, key: v85.H256): Promise<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<v85.H256[]>
    getPairs(block: Block): Promise<[k: v85.H256, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v85.H256): Promise<[k: v85.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.H256): AsyncIterable<[k: v85.H256, v: (boolean | undefined)][]>
}
