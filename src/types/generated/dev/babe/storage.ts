import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v85: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV85,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v85: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as AuthoritiesV85,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v85: new StorageType('Babe.GenesisSlot', 'Default', [], v85.Slot) as GenesisSlotV85,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Slot
    get(block: Block): Promise<(v85.Slot | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v85: new StorageType('Babe.CurrentSlot', 'Default', [], v85.Slot) as CurrentSlotV85,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Slot
    get(block: Block): Promise<(v85.Slot | undefined)>
}

export const randomness =  {
    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    v85: new StorageType('Babe.Randomness', 'Default', [], sts.bytes()) as RandomnessV85,
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface RandomnessV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v85: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v85.NextConfigDescriptor) as PendingEpochConfigChangeV85,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.NextConfigDescriptor | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    v85: new StorageType('Babe.NextRandomness', 'Default', [], sts.bytes()) as NextRandomnessV85,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v85: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as NextAuthoritiesV85,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const segmentIndex =  {
    /**
     *  Randomness under construction.
     * 
     *  We make a trade-off between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    v85: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV85,
}

/**
 *  Randomness under construction.
 * 
 *  We make a trade-off between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface SegmentIndexV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    v85: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => sts.bytes())) as UnderConstructionV85,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: number): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v85: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v85.PreDigest)) as InitializedV85,
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v85.PreDigest | undefined) | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    v85: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], sts.option(() => sts.bytes())) as AuthorVrfRandomnessV85,
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface AuthorVrfRandomnessV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (Bytes | undefined)
    get(block: Block): Promise<((Bytes | undefined) | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    v85: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [sts.number(), sts.number()])) as EpochStartV85,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block): Promise<([number, number] | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    v85: new StorageType('Babe.Lateness', 'Default', [], sts.number()) as LatenessV85,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    v85: new StorageType('Babe.EpochConfig', 'Optional', [], v85.BabeEpochConfiguration) as EpochConfigV85,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface EpochConfigV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.BabeEpochConfiguration | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v85: new StorageType('Babe.NextEpochConfig', 'Optional', [], v85.BabeEpochConfiguration) as NextEpochConfigV85,
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.BabeEpochConfiguration | undefined)>
}
