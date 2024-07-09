import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const round =  {
    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    v85: new StorageType('ElectionProviderMultiPhase.Round', 'Default', [], sts.number()) as RoundV85,
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface RoundV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const currentPhase =  {
    /**
     *  Current phase.
     */
    v85: new StorageType('ElectionProviderMultiPhase.CurrentPhase', 'Default', [], v85.Phase) as CurrentPhaseV85,
}

/**
 *  Current phase.
 */
export interface CurrentPhaseV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Phase
    get(block: Block): Promise<(v85.Phase | undefined)>
}

export const queuedSolution =  {
    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    v85: new StorageType('ElectionProviderMultiPhase.QueuedSolution', 'Optional', [], v85.ReadySolution) as QueuedSolutionV85,
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface QueuedSolutionV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.ReadySolution | undefined)>
}

export const snapshot =  {
    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    v85: new StorageType('ElectionProviderMultiPhase.Snapshot', 'Optional', [], v85.RoundSnapshot) as SnapshotV85,
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface SnapshotV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.RoundSnapshot | undefined)>
}

export const desiredTargets =  {
    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    v85: new StorageType('ElectionProviderMultiPhase.DesiredTargets', 'Optional', [], sts.number()) as DesiredTargetsV85,
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface DesiredTargetsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const snapshotMetadata =  {
    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    v85: new StorageType('ElectionProviderMultiPhase.SnapshotMetadata', 'Optional', [], v85.SolutionOrSnapshotSize) as SnapshotMetadataV85,
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface SnapshotMetadataV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.SolutionOrSnapshotSize | undefined)>
}

export const signedSubmissionNextIndex =  {
    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    v85: new StorageType('ElectionProviderMultiPhase.SignedSubmissionNextIndex', 'Default', [], sts.number()) as SignedSubmissionNextIndexV85,
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface SignedSubmissionNextIndexV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const signedSubmissionIndices =  {
    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    v85: new StorageType('ElectionProviderMultiPhase.SignedSubmissionIndices', 'Default', [], sts.array(() => sts.tuple(() => [v85.ElectionScore, sts.number(), sts.number()]))) as SignedSubmissionIndicesV85,
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface SignedSubmissionIndicesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.ElectionScore, number, number][]
    get(block: Block): Promise<([v85.ElectionScore, number, number][] | undefined)>
}

export const signedSubmissionsMap =  {
    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    v85: new StorageType('ElectionProviderMultiPhase.SignedSubmissionsMap', 'Optional', [sts.number()], v85.SignedSubmission) as SignedSubmissionsMapV85,
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface SignedSubmissionsMapV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v85.SignedSubmission | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.SignedSubmission | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.SignedSubmission | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.SignedSubmission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.SignedSubmission | undefined)][]>
}

export const minimumUntrustedScore =  {
    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    v85: new StorageType('ElectionProviderMultiPhase.MinimumUntrustedScore', 'Optional', [], v85.ElectionScore) as MinimumUntrustedScoreV85,
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface MinimumUntrustedScoreV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.ElectionScore | undefined)>
}
