import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v60 from './v60'

export class AssetsAssetInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetInfos'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get isV60(): boolean {
        return this.getTypeHash() === '94bdb27ff45979d08e9c7a1caf2f5085757d4f09d9ea4b9195572af205168c2f'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get asV60(): AssetsAssetInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetsAssetInfosStorageV60 {
    get(key: v60.AssetId32): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]>
    getAll(): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getMany(keys: v60.AssetId32[]): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
}

export class AssetsAssetOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetOwners'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get isV60(): boolean {
        return this.getTypeHash() === '088c8720b3f53953e645cba72b2f87d61b305d7f52bfdddca4a631775822faf7'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get asV60(): AssetsAssetOwnersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetsAssetOwnersStorageV60 {
    get(key: v60.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: v60.AssetId32[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: Uint8Array][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: Uint8Array][]>
}

export class AssetsAssetRecordAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Assets'
    }

    protected getName() {
        return 'AssetRecordAssetId'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e7ed1c7fbac7cd5f2fa7d5c6f2fa8f512c21ee365a2dc41abce2582978d964ec'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get asV60(): AssetsAssetRecordAssetIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetsAssetRecordAssetIdStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.AssetRecord | undefined)>
    getAll(): Promise<v60.AssetRecord[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.AssetRecord | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.AssetRecord][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.AssetRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.AssetRecord][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.AssetRecord][]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV60(): AuthorshipAuthorStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get asV60(): BabeAuthorVrfRandomnessStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface BabeAuthorVrfRandomnessStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV60(): BabeAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV60 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV60(): BabeCurrentSlotStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV60 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get asV60(): BabeEpochConfigStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface BabeEpochConfigStorageV60 {
    get(): Promise<(v60.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV60(): BabeEpochIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV60 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV60(): BabeEpochStartStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV60 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV60(): BabeGenesisSlotStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV60 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV60(): BabeInitializedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV60 {
    get(): Promise<((v60.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV60(): BabeLatenessStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV60 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV60(): BabeNextAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV60 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV60(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV60(): BabeNextEpochConfigStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV60 {
    get(): Promise<(v60.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV60(): BabeNextRandomnessStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV60 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV60(): BabePendingEpochConfigChangeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV60 {
    get(): Promise<(v60.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
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
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
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
    get asV60(): BabeRandomnessStorageV60 {
        assert(this.isV60)
        return this as any
    }
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
export interface BabeRandomnessStorageV60 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
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
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
    get asV60(): BabeSegmentIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
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
export interface BabeSegmentIndexStorageV60 {
    get(): Promise<number>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV60(): BabeUnderConstructionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV60 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class BagsListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV60(): BagsListCounterForListNodesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface BagsListCounterForListNodesStorageV60 {
    get(): Promise<number>
}

export class BagsListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV60(): BagsListListBagsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface BagsListListBagsStorageV60 {
    get(key: bigint): Promise<(v60.Bag | undefined)>
    getAll(): Promise<v60.Bag[]>
    getMany(keys: bigint[]): Promise<(v60.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v60.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v60.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v60.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v60.Bag][]>
}

export class BagsListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV60(): BagsListListNodesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface BagsListListNodesStorageV60 {
    get(key: Uint8Array): Promise<(v60.Node | undefined)>
    getAll(): Promise<v60.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Node][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV60(): BalancesAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV60 {
    get(key: Uint8Array): Promise<v60.AccountData>
    getAll(): Promise<v60.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v60.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV60(): BalancesInactiveIssuanceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV60 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV60(): BalancesLocksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV60 {
    get(key: Uint8Array): Promise<v60.BalanceLock[]>
    getAll(): Promise<v60.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v60.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV60(): BalancesReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV60 {
    get(key: Uint8Array): Promise<v60.ReserveData[]>
    getAll(): Promise<v60.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v60.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.ReserveData[]][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV60(): BalancesTotalIssuanceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV60 {
    get(): Promise<bigint>
}

export class BandDynamicFeeParametersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'DynamicFeeParameters'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f2c645c74fe40b8672d790a8004247c4a6854632b56b65312583cb5baa894b59'
    }

    get asV60(): BandDynamicFeeParametersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandDynamicFeeParametersStorageV60 {
    get(): Promise<v60.FeeCalculationParameters>
}

export class BandSymbolCheckBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'SymbolCheckBlock'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a8ff51b1d52588d671233c876f9a64b48aa4e693d1fea92dcbde4d663f72a959'
    }

    get asV60(): BandSymbolCheckBlockStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandSymbolCheckBlockStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [number, Uint8Array][]): Promise<boolean[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: boolean][]>
}

export class BandSymbolRatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'SymbolRates'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '1463cb9392939423c1cd0fbfd71ec390f4dc66703aca420fdc0a53769675a3b3'
    }

    get asV60(): BandSymbolRatesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandSymbolRatesStorageV60 {
    get(key: Uint8Array): Promise<(v60.BandRate | undefined)>
    getAll(): Promise<(v60.BandRate | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<(v60.BandRate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (v60.BandRate | undefined)][]>
}

export class BandTrustedRelayersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'TrustedRelayers'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    get asV60(): BandTrustedRelayersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BandTrustedRelayersStorageV60 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class BeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authorities set
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  The current authorities set
     */
    get asV60(): BeefyAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current authorities set
 */
export interface BeefyAuthoritiesStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class BeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get asV60(): BeefyNextAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface BeefyNextAuthoritiesStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class BeefyValidatorSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'ValidatorSetId'
    }

    /**
     *  The current validator set id
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current validator set id
     */
    get asV60(): BeefyValidatorSetIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current validator set id
 */
export interface BeefyValidatorSetIdStorageV60 {
    get(): Promise<bigint>
}

export class BeefyLightClientCurrentValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'CurrentValidatorSet'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV60(): BeefyLightClientCurrentValidatorSetStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientCurrentValidatorSetStorageV60 {
    get(key: v60.SubNetworkId): Promise<(v60.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v60.BeefyAuthoritySet[]>
    getMany(keys: v60.SubNetworkId[]): Promise<(v60.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
}

export class BeefyLightClientLatestBeefyBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestBeefyBlock'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV60(): BeefyLightClientLatestBeefyBlockStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientLatestBeefyBlockStorageV60 {
    get(key: v60.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
}

export class BeefyLightClientLatestMMRRootsStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestMMRRoots'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '76aad9b2f69624cc0ac9edade0a395aae72489d2c38a9c8a53b515fa48d04b0b'
    }

    get asV60(): BeefyLightClientLatestMMRRootsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientLatestMMRRootsStorageV60 {
    get(key: v60.SubNetworkId): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v60.SubNetworkId[]): Promise<Uint8Array[][]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: Uint8Array[]][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: Uint8Array[]][]>
}

export class BeefyLightClientLatestRandomSeedStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestRandomSeed'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '71e0decea676f8576efdb835fd40eaa20cee34c08589ca24818aa93fc545680e'
    }

    get asV60(): BeefyLightClientLatestRandomSeedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientLatestRandomSeedStorageV60 {
    get(key: v60.SubNetworkId): Promise<[Uint8Array, number]>
    getAll(): Promise<[Uint8Array, number][]>
    getMany(keys: v60.SubNetworkId[]): Promise<[Uint8Array, number][]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: [Uint8Array, number]][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: [Uint8Array, number]][]>
}

export class BeefyLightClientNextValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'NextValidatorSet'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV60(): BeefyLightClientNextValidatorSetStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientNextValidatorSetStorageV60 {
    get(key: v60.SubNetworkId): Promise<(v60.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v60.BeefyAuthoritySet[]>
    getMany(keys: v60.SubNetworkId[]): Promise<(v60.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: v60.BeefyAuthoritySet][]>
}

export class BeefyLightClientThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'e98f7bd664e2ea3524489905648b217400e58d4063ec1a8e53bba73266a424b2'
    }

    get asV60(): BeefyLightClientThisNetworkIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BeefyLightClientThisNetworkIdStorageV60 {
    get(): Promise<v60.SubNetworkId>
}

export class BridgeDataSignerApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Approvals
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0018725b380dd161f91c8218f80f948a5cdba579e99333e2bc5f8ae6d5334e72'
    }

    /**
     *  Approvals
     */
    get asV60(): BridgeDataSignerApprovalsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Approvals
 */
export interface BridgeDataSignerApprovalsStorageV60 {
    get(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getAll(): Promise<[Uint8Array, Uint8Array][][]>
    getMany(keys: [v60.GenericNetworkId, Uint8Array][]): Promise<[Uint8Array, Uint8Array][][]>
    getKeys(): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v60.GenericNetworkId): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
}

export class BridgeDataSignerPeersStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'Peers'
    }

    /**
     *  Peers
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    /**
     *  Peers
     */
    get asV60(): BridgeDataSignerPeersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Peers
 */
export interface BridgeDataSignerPeersStorageV60 {
    get(key: v60.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v60.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v60.GenericNetworkId[]>
    getKeys(key: v60.GenericNetworkId): Promise<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<v60.GenericNetworkId[]>
    getPairs(): Promise<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v60.GenericNetworkId): Promise<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
}

export class BridgeDataSignerPendingPeerUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeDataSigner'
    }

    protected getName() {
        return 'PendingPeerUpdate'
    }

    /**
     *  Pending peers
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2259adffe846960292971baa4d957900e8c68078a50aff9ad4f50897d0102227'
    }

    /**
     *  Pending peers
     */
    get asV60(): BridgeDataSignerPendingPeerUpdateStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pending peers
 */
export interface BridgeDataSignerPendingPeerUpdateStorageV60 {
    get(key: v60.GenericNetworkId): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v60.GenericNetworkId[]): Promise<boolean[]>
    getKeys(): Promise<v60.GenericNetworkId[]>
    getKeys(key: v60.GenericNetworkId): Promise<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<v60.GenericNetworkId[]>
    getPairs(): Promise<[k: v60.GenericNetworkId, v: boolean][]>
    getPairs(key: v60.GenericNetworkId): Promise<[k: v60.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<[k: v60.GenericNetworkId, v: boolean][]>
}

export class BridgeInboundChannelChannelAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelAddresses'
    }

    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    get asV60(): BridgeInboundChannelChannelAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Source channel (OutboundChannel contract) on the ethereum side
 */
export interface BridgeInboundChannelChannelAddressesStorageV60 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class BridgeInboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV60(): BridgeInboundChannelChannelNoncesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeInboundChannelChannelNoncesStorageV60 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeInboundChannelInboundChannelAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'InboundChannelAddresses'
    }

    /**
     *  InboundChannel contract address on the ethereum side
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  InboundChannel contract address on the ethereum side
     */
    get asV60(): BridgeInboundChannelInboundChannelAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  InboundChannel contract address on the ethereum side
 */
export interface BridgeInboundChannelInboundChannelAddressesStorageV60 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class BridgeInboundChannelInboundChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'InboundChannelNonces'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV60(): BridgeInboundChannelInboundChannelNoncesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeInboundChannelInboundChannelNoncesStorageV60 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeInboundChannelRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeInboundChannel'
    }

    protected getName() {
        return 'RewardFraction'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV60(): BridgeInboundChannelRewardFractionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeInboundChannelRewardFractionStorageV60 {
    get(): Promise<number>
}

export class BridgeMultisigAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  Multisignature accounts.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cd3338caa601a4e2cc7a00dec626fae008fcbe18f6658819525a09e67bf3e568'
    }

    /**
     *  Multisignature accounts.
     */
    get asV60(): BridgeMultisigAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Multisignature accounts.
 */
export interface BridgeMultisigAccountsStorageV60 {
    get(key: Uint8Array): Promise<(v60.MultisigAccount | undefined)>
    getAll(): Promise<v60.MultisigAccount[]>
    getMany(keys: Uint8Array[]): Promise<(v60.MultisigAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.MultisigAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.MultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.MultisigAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.MultisigAccount][]>
}

export class BridgeMultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV60(): BridgeMultisigCallsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeMultisigCallsStorageV60 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class BridgeMultisigDispatchedCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'DispatchedCalls'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'e2028db08037cfc67445208df734fa0d45be263177b39a42155e067199ca2c4c'
    }

    get asV60(): BridgeMultisigDispatchedCallsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeMultisigDispatchedCallsStorageV60 {
    get(key1: Uint8Array, key2: v60.BridgeTimepoint): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, v60.BridgeTimepoint][]): Promise<null[]>
    getKeys(): Promise<[Uint8Array, v60.BridgeTimepoint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.BridgeTimepoint][]>
    getKeys(key1: Uint8Array, key2: v60.BridgeTimepoint): Promise<[Uint8Array, v60.BridgeTimepoint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.BridgeTimepoint): AsyncIterable<[Uint8Array, v60.BridgeTimepoint][]>
    getPairs(): Promise<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array, key2: v60.BridgeTimepoint): Promise<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.BridgeTimepoint): AsyncIterable<[k: [Uint8Array, v60.BridgeTimepoint], v: null][]>
}

export class BridgeMultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f276292c2ec28ca6923fb8d9f85c0ce563f7cb13e1b3b18598f5f354a6570f2b'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV60(): BridgeMultisigMultisigsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface BridgeMultisigMultisigsStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v60.Multisig | undefined)>
    getAll(): Promise<v60.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v60.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Multisig][]>
}

export class BridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV60(): BridgeOutboundChannelChannelNoncesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeOutboundChannelChannelNoncesStorageV60 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeOutboundChannelFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'Fee'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): BridgeOutboundChannelFeeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeOutboundChannelFeeStorageV60 {
    get(): Promise<bigint>
}

export class BridgeOutboundChannelIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'Interval'
    }

    /**
     *  Interval between committing messages.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV60(): BridgeOutboundChannelIntervalStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface BridgeOutboundChannelIntervalStorageV60 {
    get(): Promise<number>
}

export class BridgeOutboundChannelMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'MessageQueues'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'becbc7253dd748b1e180dc34a7ee1e2b33615439bf5e1213a0e496f21e134a4d'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV60(): BridgeOutboundChannelMessageQueuesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface BridgeOutboundChannelMessageQueuesStorageV60 {
    get(key: bigint): Promise<v60.Message[]>
    getAll(): Promise<v60.Message[][]>
    getMany(keys: bigint[]): Promise<v60.Message[][]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v60.Message[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v60.Message[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v60.Message[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v60.Message[]][]>
}

export class BridgeOutboundChannelQueuesTotalGasStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'QueuesTotalGas'
    }

    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '562642e80114763badea02d1e1f1ca3ec06ced33d0cb004f035c6617dcb1cbfc'
    }

    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    get asV60(): BridgeOutboundChannelQueuesTotalGasStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
 */
export interface BridgeOutboundChannelQueuesTotalGasStorageV60 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class BridgeProxyConsumedTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'ConsumedTransferLimit'
    }

    /**
     *  Consumed transfer limit.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Consumed transfer limit.
     */
    get asV60(): BridgeProxyConsumedTransferLimitStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Consumed transfer limit.
 */
export interface BridgeProxyConsumedTransferLimitStorageV60 {
    get(): Promise<bigint>
}

export class BridgeProxyLimitedAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'LimitedAssets'
    }

    /**
     *  Assets with transfer limitation.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'c174344dfddcf1721ee1639e2dd3674a34e0feb5b0b7408e99c10363afb45d50'
    }

    /**
     *  Assets with transfer limitation.
     */
    get asV60(): BridgeProxyLimitedAssetsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Assets with transfer limitation.
 */
export interface BridgeProxyLimitedAssetsStorageV60 {
    get(key: v60.AssetId32): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v60.AssetId32[]): Promise<boolean[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: boolean][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: boolean][]>
}

export class BridgeProxyLockedAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'LockedAssets'
    }

    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72028d2a273ff5bf4de7b2dc6214e6136859bf8e40d4fcf347ddccc0c260386f'
    }

    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    get asV60(): BridgeProxyLockedAssetsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface BridgeProxyLockedAssetsStorageV60 {
    get(key1: v60.GenericNetworkId, key2: v60.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v60.GenericNetworkId, v60.AssetId32][]): Promise<bigint[]>
    getKeys(): Promise<[v60.GenericNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.GenericNetworkId): Promise<[v60.GenericNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.GenericNetworkId, key2: v60.AssetId32): Promise<[v60.GenericNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.GenericNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[v60.GenericNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId, key2: v60.AssetId32): AsyncIterable<[v60.GenericNetworkId, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
    getPairs(key1: v60.GenericNetworkId): Promise<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
    getPairs(key1: v60.GenericNetworkId, key2: v60.AssetId32): Promise<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId, key2: v60.AssetId32): AsyncIterable<[k: [v60.GenericNetworkId, v60.AssetId32], v: bigint][]>
}

export class BridgeProxySendersStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Senders'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'c009c4f18cbf05b12a1f843bbfda19189457fea80027cf7b19a8798618cbce2e'
    }

    get asV60(): BridgeProxySendersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeProxySendersStorageV60 {
    get(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [v60.GenericNetworkId, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v60.GenericNetworkId): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: Uint8Array][]>
}

export class BridgeProxySidechainFeePaidStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'SidechainFeePaid'
    }

    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    get isV60(): boolean {
        return this.getTypeHash() === '18105a375da97c8d25485c70df3cd51a33320e2a6ba4fc63196540378cd0d239'
    }

    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    get asV60(): BridgeProxySidechainFeePaidStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface BridgeProxySidechainFeePaidStorageV60 {
    get(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [v60.GenericNetworkId, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v60.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v60.GenericNetworkId): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v60.GenericNetworkId, key2: Uint8Array): Promise<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v60.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v60.GenericNetworkId, Uint8Array], v: bigint][]>
}

export class BridgeProxyTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Transactions'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '529c3a4707b15a768a1be2b7f8c99840e4aabfe3e516de73c085d8329a9ad46d'
    }

    get asV60(): BridgeProxyTransactionsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface BridgeProxyTransactionsStorageV60 {
    get(key1: [v60.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<(v60.BridgeRequest | undefined)>
    getAll(): Promise<v60.BridgeRequest[]>
    getMany(keys: [[v60.GenericNetworkId, Uint8Array], Uint8Array][]): Promise<(v60.BridgeRequest | undefined)[]>
    getKeys(): Promise<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v60.GenericNetworkId, Uint8Array]): Promise<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v60.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v60.GenericNetworkId, Uint8Array]): AsyncIterable<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v60.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[[v60.GenericNetworkId, Uint8Array], Uint8Array][]>
    getPairs(): Promise<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
    getPairs(key1: [v60.GenericNetworkId, Uint8Array]): Promise<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
    getPairs(key1: [v60.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v60.GenericNetworkId, Uint8Array]): AsyncIterable<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v60.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[k: [[v60.GenericNetworkId, Uint8Array], Uint8Array], v: v60.BridgeRequest][]>
}

export class BridgeProxyTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'TransferLimit'
    }

    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '528249b1b19c80ce4829cb789f6272e9b2eac8a898ffda956ff359869f83a090'
    }

    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    get asV60(): BridgeProxyTransferLimitStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface BridgeProxyTransferLimitStorageV60 {
    get(): Promise<v60.TransferLimitSettings>
}

export class BridgeProxyTransferLimitUnlockScheduleStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'TransferLimitUnlockSchedule'
    }

    /**
     *  Schedule for consumed transfer limit reduce.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  Schedule for consumed transfer limit reduce.
     */
    get asV60(): BridgeProxyTransferLimitUnlockScheduleStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface BridgeProxyTransferLimitUnlockScheduleStorageV60 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class CeresGovernancePlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV60(): CeresGovernancePlatformPalletStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresGovernancePlatformPalletStorageVersionStorageV60 {
    get(): Promise<v60.StorageVersion>
}

export class CeresGovernancePlatformPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'PollData'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '15cbbd5cb0d096a2e62904eec97fa3683b36340edf341f8de1945437573d764b'
    }

    get asV60(): CeresGovernancePlatformPollDataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresGovernancePlatformPollDataStorageV60 {
    get(key: Uint8Array): Promise<v60.PollInfo>
    getAll(): Promise<v60.PollInfo[]>
    getMany(keys: Uint8Array[]): Promise<v60.PollInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.PollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.PollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.PollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.PollInfo][]>
}

export class CeresGovernancePlatformVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get isV60(): boolean {
        return this.getTypeHash() === '9173d95a25234ebe48baeb1a51daf8291918a9b434e54431b06b2cd1f6dbc4f2'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV60(): CeresGovernancePlatformVotingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface CeresGovernancePlatformVotingStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v60.VotingInfo>
    getAll(): Promise<v60.VotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v60.VotingInfo[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.VotingInfo][]>
}

export class CeresLaunchpadAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    get asV60(): CeresLaunchpadAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface CeresLaunchpadAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresLaunchpadCeresBurnFeeAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'CeresBurnFeeAmount'
    }

    /**
     *  Amount of CERES for burn fee
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for burn fee
     */
    get asV60(): CeresLaunchpadCeresBurnFeeAmountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresLaunchpadCeresBurnFeeAmountStorageV60 {
    get(): Promise<bigint>
}

export class CeresLaunchpadCeresForContributionInILOStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'CeresForContributionInILO'
    }

    /**
     *  Amount of CERES for contribution in ILO
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for contribution in ILO
     */
    get asV60(): CeresLaunchpadCeresForContributionInILOStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresLaunchpadCeresForContributionInILOStorageV60 {
    get(): Promise<bigint>
}

export class CeresLaunchpadContributionsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'Contributions'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '237eb32bdfb9ba5649a5186003df98b3645d63740dfe6da2431e4ef225d6adb6'
    }

    get asV60(): CeresLaunchpadContributionsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresLaunchpadContributionsStorageV60 {
    get(key1: v60.AssetId32, key2: Uint8Array): Promise<v60.ContributionInfo>
    getAll(): Promise<v60.ContributionInfo[]>
    getMany(keys: [v60.AssetId32, Uint8Array][]): Promise<v60.ContributionInfo[]>
    getKeys(): Promise<[v60.AssetId32, Uint8Array][]>
    getKeys(key1: v60.AssetId32): Promise<[v60.AssetId32, Uint8Array][]>
    getKeys(key1: v60.AssetId32, key2: Uint8Array): Promise<[v60.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[v60.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32, key2: Uint8Array): AsyncIterable<[v60.AssetId32, Uint8Array][]>
    getPairs(): Promise<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
    getPairs(key1: v60.AssetId32): Promise<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
    getPairs(key1: v60.AssetId32, key2: Uint8Array): Promise<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32, key2: Uint8Array): AsyncIterable<[k: [v60.AssetId32, Uint8Array], v: v60.ContributionInfo][]>
}

export class CeresLaunchpadFeePercentOnRaisedFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'FeePercentOnRaisedFunds'
    }

    /**
     *  Fee percent on raised funds in successful ILO
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fee percent on raised funds in successful ILO
     */
    get asV60(): CeresLaunchpadFeePercentOnRaisedFundsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface CeresLaunchpadFeePercentOnRaisedFundsStorageV60 {
    get(): Promise<bigint>
}

export class CeresLaunchpadILOsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'ILOs'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'ca84a1a09dc4d0e7482ffddea595231e8c4bcce744ba2b7a266be8396342b1cc'
    }

    get asV60(): CeresLaunchpadILOsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresLaunchpadILOsStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.ILOInfo | undefined)>
    getAll(): Promise<v60.ILOInfo[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.ILOInfo | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.ILOInfo][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.ILOInfo][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.ILOInfo][]>
}

export class CeresLaunchpadPenaltiesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'PenaltiesAccount'
    }

    /**
     *  Account for collecting penalties
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting penalties
     */
    get asV60(): CeresLaunchpadPenaltiesAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account for collecting penalties
 */
export interface CeresLaunchpadPenaltiesAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresLaunchpadWhitelistedContributorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedContributors'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV60(): CeresLaunchpadWhitelistedContributorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedContributorsStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class CeresLaunchpadWhitelistedIloOrganizersStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedIloOrganizers'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV60(): CeresLaunchpadWhitelistedIloOrganizersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedIloOrganizersStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class CeresLiquidityLockerAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing CERES amount fee
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES amount fee
     */
    get asV60(): CeresLiquidityLockerAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface CeresLiquidityLockerAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionOneAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionOneAccount'
    }

    /**
     *  Account for collecting fees from Option 1
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 1
     */
    get asV60(): CeresLiquidityLockerFeesOptionOneAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 1
 */
export interface CeresLiquidityLockerFeesOptionOneAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionTwoAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionTwoAccount'
    }

    /**
     *  Account for collecting fees from Option 2
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 2
     */
    get asV60(): CeresLiquidityLockerFeesOptionTwoAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 2
 */
export interface CeresLiquidityLockerFeesOptionTwoAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresLiquidityLockerFeesOptionTwoCeresAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'FeesOptionTwoCeresAmount'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV60(): CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV60 {
    get(): Promise<bigint>
}

export class CeresLiquidityLockerLockerDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'LockerData'
    }

    /**
     *  Contains data about lockups for each account
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e923765799e65e5eeadcbc5d6159c57be4d7b0f66ce7fda6f358f2e98eb67079'
    }

    /**
     *  Contains data about lockups for each account
     */
    get asV60(): CeresLiquidityLockerLockerDataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Contains data about lockups for each account
 */
export interface CeresLiquidityLockerLockerDataStorageV60 {
    get(key: Uint8Array): Promise<v60.LockInfo[]>
    getAll(): Promise<v60.LockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v60.LockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.LockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.LockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.LockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.LockInfo[]][]>
}

export class CeresLiquidityLockerPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLiquidityLocker'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV60(): CeresLiquidityLockerPalletStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresLiquidityLockerPalletStorageVersionStorageV60 {
    get(): Promise<v60.StorageVersion>
}

export class CeresStakingAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing remaining rewards
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing remaining rewards
     */
    get asV60(): CeresStakingAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface CeresStakingAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresStakingRewardsRemainingStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'RewardsRemaining'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): CeresStakingRewardsRemainingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresStakingRewardsRemainingStorageV60 {
    get(): Promise<bigint>
}

export class CeresStakingStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'Stakers'
    }

    /**
     *  AccountId -> StakingInfo
     */
    get isV60(): boolean {
        return this.getTypeHash() === '50b5f6a0d0df44de77201073b82e298698ffffd86dc6cced006718dba7ffc8c0'
    }

    /**
     *  AccountId -> StakingInfo
     */
    get asV60(): CeresStakingStakersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  AccountId -> StakingInfo
 */
export interface CeresStakingStakersStorageV60 {
    get(key: Uint8Array): Promise<v60.StakingInfo>
    getAll(): Promise<v60.StakingInfo[]>
    getMany(keys: Uint8Array[]): Promise<v60.StakingInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.StakingInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.StakingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.StakingInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.StakingInfo][]>
}

export class CeresStakingTotalDepositedStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'TotalDeposited'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): CeresStakingTotalDepositedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresStakingTotalDepositedStorageV60 {
    get(): Promise<bigint>
}

export class CeresTokenLockerAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing fee
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing fee
     */
    get asV60(): CeresTokenLockerAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which has permissions for changing fee
 */
export interface CeresTokenLockerAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresTokenLockerFeeAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'FeeAmount'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV60(): CeresTokenLockerFeeAmountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresTokenLockerFeeAmountStorageV60 {
    get(): Promise<bigint>
}

export class CeresTokenLockerFeesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'FeesAccount'
    }

    /**
     *  Account for collecting fees
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees
     */
    get asV60(): CeresTokenLockerFeesAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account for collecting fees
 */
export interface CeresTokenLockerFeesAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class CeresTokenLockerPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV60(): CeresTokenLockerPalletStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresTokenLockerPalletStorageVersionStorageV60 {
    get(): Promise<v60.StorageVersion>
}

export class CeresTokenLockerTokenLockerDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'TokenLockerData'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'e4118245f8d3d415793878b8a96bd927121dc142963e1a87c7ca1d6f1f835087'
    }

    get asV60(): CeresTokenLockerTokenLockerDataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface CeresTokenLockerTokenLockerDataStorageV60 {
    get(key: Uint8Array): Promise<v60.TokenLockInfo[]>
    getAll(): Promise<v60.TokenLockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v60.TokenLockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.TokenLockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.TokenLockInfo[]][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV60(): CouncilMembersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV60(): CouncilPrimeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV60(): CouncilProposalCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV60 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'c9197acd43ad129e2b3f040aeb9c3f28b234204548169ab6159e86b8c14eff79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV60(): CouncilProposalOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV60 {
    get(key: Uint8Array): Promise<(v60.Call | undefined)>
    getAll(): Promise<v60.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV60(): CouncilProposalsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV60(): CouncilVotingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV60 {
    get(key: Uint8Array): Promise<(v60.Votes | undefined)>
    getAll(): Promise<v60.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Votes][]>
}

export class DEXAPIEnabledSourceTypesStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXAPI'
    }

    protected getName() {
        return 'EnabledSourceTypes'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV60(): DEXAPIEnabledSourceTypesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DEXAPIEnabledSourceTypesStorageV60 {
    get(): Promise<v60.LiquiditySourceType[]>
}

export class DEXManagerDEXInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXManager'
    }

    protected getName() {
        return 'DEXInfos'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '494dff123a3c227cdb05691512a6deb17a90a41b14b3c18babca089a87d64b6a'
    }

    get asV60(): DEXManagerDEXInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DEXManagerDEXInfosStorageV60 {
    get(key: number): Promise<(v60.DEXInfo | undefined)>
    getAll(): Promise<v60.DEXInfo[]>
    getMany(keys: number[]): Promise<(v60.DEXInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.DEXInfo][]>
    getPairs(key: number): Promise<[k: number, v: v60.DEXInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.DEXInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.DEXInfo][]>
}

export class DemeterFarmingPlatformAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV60(): DemeterFarmingPlatformAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DemeterFarmingPlatformAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class DemeterFarmingPlatformFeeAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'FeeAccount'
    }

    /**
     *  Account for fees
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for fees
     */
    get asV60(): DemeterFarmingPlatformFeeAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account for fees
 */
export interface DemeterFarmingPlatformFeeAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class DemeterFarmingPlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV60(): DemeterFarmingPlatformPalletStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface DemeterFarmingPlatformPalletStorageVersionStorageV60 {
    get(): Promise<v60.StorageVersion>
}

export class DemeterFarmingPlatformPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'Pools'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '3322eef7d20cbfd46bf81f181224e3f02fd1041ab3f29f9f60b3b7b9221f4038'
    }

    get asV60(): DemeterFarmingPlatformPoolsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DemeterFarmingPlatformPoolsStorageV60 {
    get(key1: v60.AssetId32, key2: v60.AssetId32): Promise<v60.PoolData[]>
    getAll(): Promise<v60.PoolData[][]>
    getMany(keys: [v60.AssetId32, v60.AssetId32][]): Promise<v60.PoolData[][]>
    getKeys(): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
    getPairs(key1: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
    getPairs(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: v60.PoolData[]][]>
}

export class DemeterFarmingPlatformTokenInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'TokenInfos'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'c293db5a1f986c2c9303f85d25385bf1dab66f7f0513d0a14acf885790e9a53d'
    }

    get asV60(): DemeterFarmingPlatformTokenInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DemeterFarmingPlatformTokenInfosStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.TokenInfo | undefined)>
    getAll(): Promise<v60.TokenInfo[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.TokenInfo | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.TokenInfo][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.TokenInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.TokenInfo][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.TokenInfo][]>
}

export class DemeterFarmingPlatformUserInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'UserInfos'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '1e0a771d7fcd1d3fd082883b3342ec55cf08b83b3739a9de033c04d65f17bb65'
    }

    get asV60(): DemeterFarmingPlatformUserInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface DemeterFarmingPlatformUserInfosStorageV60 {
    get(key: Uint8Array): Promise<v60.UserInfo[]>
    getAll(): Promise<v60.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v60.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.UserInfo[]][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV60(): DemocracyBlacklistStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV60 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV60(): DemocracyCancellationsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV60 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV60(): DemocracyDepositOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV60 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV60(): DemocracyLastTabledWasExternalStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV60 {
    get(): Promise<boolean>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV60(): DemocracyLowestUnbakedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV60 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV60(): DemocracyNextExternalStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV60 {
    get(): Promise<([v60.Bounded, v60.VoteThreshold] | undefined)>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV60(): DemocracyPublicPropCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV60 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV60(): DemocracyPublicPropsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV60 {
    get(): Promise<[number, v60.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV60(): DemocracyReferendumCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV60 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV60(): DemocracyReferendumInfoOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV60 {
    get(key: number): Promise<(v60.ReferendumInfo | undefined)>
    getAll(): Promise<v60.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v60.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v60.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.ReferendumInfo][]>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV60(): DemocracyVotingOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV60 {
    get(key: Uint8Array): Promise<v60.Voting>
    getAll(): Promise<v60.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v60.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Voting][]>
}

export class ERC20AppAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AppAddresses'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '94b675ea41072b9359087e5adccacf527ed4a9ed9a99f11dba5e13ac035ddf1d'
    }

    get asV60(): ERC20AppAppAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ERC20AppAppAddressesStorageV60 {
    get(key1: bigint, key2: v60.Type_605): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v60.Type_605][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v60.Type_605][]>
    getKeys(key1: bigint): Promise<[bigint, v60.Type_605][]>
    getKeys(key1: bigint, key2: v60.Type_605): Promise<[bigint, v60.Type_605][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v60.Type_605][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v60.Type_605][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v60.Type_605): AsyncIterable<[bigint, v60.Type_605][]>
    getPairs(): Promise<[k: [bigint, v60.Type_605], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v60.Type_605], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v60.Type_605): Promise<[k: [bigint, v60.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v60.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v60.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v60.Type_605): AsyncIterable<[k: [bigint, v60.Type_605], v: Uint8Array][]>
}

export class ERC20AppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '4653381b9f9b80b4e96c703f717cbad4e2b31422802d799e5521d5229ef6b117'
    }

    get asV60(): ERC20AppAssetKindsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ERC20AppAssetKindsStorageV60 {
    get(key1: bigint, key2: v60.AssetId32): Promise<(v60.Type_605 | undefined)>
    getAll(): Promise<v60.Type_605[]>
    getMany(keys: [bigint, v60.AssetId32][]): Promise<(v60.Type_605 | undefined)[]>
    getKeys(): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint, key2: v60.AssetId32): Promise<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[bigint, v60.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
    getPairs(key1: bigint, key2: v60.AssetId32): Promise<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[k: [bigint, v60.AssetId32], v: v60.Type_605][]>
}

export class ERC20AppAssetsByAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetsByAddresses'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'cabae4a11d1a8928d6ce6db2352af2e5e57d7d29bb64c87a7a383de8bcd7284e'
    }

    get asV60(): ERC20AppAssetsByAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ERC20AppAssetsByAddressesStorageV60 {
    get(key1: bigint, key2: Uint8Array): Promise<(v60.AssetId32 | undefined)>
    getAll(): Promise<v60.AssetId32[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v60.AssetId32 | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v60.AssetId32][]>
}

export class ERC20AppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '19021d933553128a4a3550a3cd26d6bfe7c74b0a22bc5ca6bc9099781e369dda'
    }

    get asV60(): ERC20AppSidechainPrecisionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ERC20AppSidechainPrecisionStorageV60 {
    get(key1: bigint, key2: v60.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [bigint, v60.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint, key2: v60.AssetId32): Promise<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[bigint, v60.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v60.AssetId32], v: number][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v60.AssetId32], v: number][]>
    getPairs(key1: bigint, key2: v60.AssetId32): Promise<[k: [bigint, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[k: [bigint, v60.AssetId32], v: number][]>
}

export class ERC20AppTokenAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'TokenAddresses'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '9fef01747a54dcdcec1535e02949fcb28b01f8388694c4fc22fdc9be19173bc8'
    }

    get asV60(): ERC20AppTokenAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ERC20AppTokenAddressesStorageV60 {
    get(key1: bigint, key2: v60.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v60.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v60.AssetId32][]>
    getKeys(key1: bigint, key2: v60.AssetId32): Promise<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[bigint, v60.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v60.AssetId32): Promise<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v60.AssetId32): AsyncIterable<[k: [bigint, v60.AssetId32], v: Uint8Array][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV60(): ElectionProviderMultiPhaseCurrentPhaseStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV60 {
    get(): Promise<v60.Phase>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV60(): ElectionProviderMultiPhaseDesiredTargetsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV60 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV60(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV60 {
    get(): Promise<(v60.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV60(): ElectionProviderMultiPhaseQueuedSolutionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV60 {
    get(): Promise<(v60.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV60(): ElectionProviderMultiPhaseRoundStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV60 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV60(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV60 {
    get(): Promise<[v60.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
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
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
    get asV60(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
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
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV60 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
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
    get isV60(): boolean {
        return this.getTypeHash() === '860f23403a5b9592ac7098f4a1420d32719bc8612e4102bb2e54d1fa53040870'
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
    get asV60(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV60 {
        assert(this.isV60)
        return this as any
    }
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
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV60 {
    get(key: number): Promise<(v60.SignedSubmission | undefined)>
    getAll(): Promise<v60.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v60.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v60.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV60(): ElectionProviderMultiPhaseSnapshotStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV60 {
    get(): Promise<(v60.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV60(): ElectionProviderMultiPhaseSnapshotMetadataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV60 {
    get(): Promise<(v60.SolutionOrSnapshotSize | undefined)>
}

export class ElectionsPhragmenCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV60(): ElectionsPhragmenCandidatesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsPhragmenCandidatesStorageV60 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class ElectionsPhragmenElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV60(): ElectionsPhragmenElectionRoundsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsPhragmenElectionRoundsStorageV60 {
    get(): Promise<number>
}

export class ElectionsPhragmenMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV60(): ElectionsPhragmenMembersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsPhragmenMembersStorageV60 {
    get(): Promise<v60.SeatHolder[]>
}

export class ElectionsPhragmenRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV60(): ElectionsPhragmenRunnersUpStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsPhragmenRunnersUpStorageV60 {
    get(): Promise<v60.SeatHolder[]>
}

export class ElectionsPhragmenVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionsPhragmen'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV60(): ElectionsPhragmenVotingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsPhragmenVotingStorageV60 {
    get(key: Uint8Array): Promise<v60.Voter>
    getAll(): Promise<v60.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v60.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Voter][]>
}

export class EthAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f6e63f3fc6a0b70e43f7767d90e82b949b2eb97bf0c14069fb5b49d1210133e5'
    }

    get asV60(): EthAppAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface EthAppAddressesStorageV60 {
    get(key: bigint): Promise<([Uint8Array, v60.AssetId32, number] | undefined)>
    getAll(): Promise<[Uint8Array, v60.AssetId32, number][]>
    getMany(keys: bigint[]): Promise<([Uint8Array, v60.AssetId32, number] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [Uint8Array, v60.AssetId32, number]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [Uint8Array, v60.AssetId32, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [Uint8Array, v60.AssetId32, number]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [Uint8Array, v60.AssetId32, number]][]>
}

export class EthBridgeAccountRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'AccountRequests'
    }

    /**
     *  Requests made by an account.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '80e7ebcfba4ea3d2339b3fa00a88c2be174158840f5c46a9fccaf24be1a46f4a'
    }

    /**
     *  Requests made by an account.
     */
    get asV60(): EthBridgeAccountRequestsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Requests made by an account.
 */
export interface EthBridgeAccountRequestsStorageV60 {
    get(key: Uint8Array): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: Uint8Array[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array][]][]>
}

export class EthBridgeAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Thischain authority account.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Thischain authority account.
     */
    get asV60(): EthBridgeAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Thischain authority account.
 */
export interface EthBridgeAuthorityAccountStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class EthBridgeBridgeAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeAccount'
    }

    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    get asV60(): EthBridgeBridgeAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface EthBridgeBridgeAccountStorageV60 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeBridgeContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeContractAddress'
    }

    /**
     *  Smart-contract address on Sidechain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '355713e400144f415b9b61e2254a9efeb50395baba05604bf6adaa990a4d3b45'
    }

    /**
     *  Smart-contract address on Sidechain.
     */
    get asV60(): EthBridgeBridgeContractAddressStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface EthBridgeBridgeContractAddressStorageV60 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeBridgeSignatureVersionsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeSignatureVersions'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '3031aeed3f8d041e6b91e771fbaeafea93f01e45f18aed4ffe6b3bf95a261f51'
    }

    get asV60(): EthBridgeBridgeSignatureVersionsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface EthBridgeBridgeSignatureVersionsStorageV60 {
    get(key: number): Promise<v60.BridgeSignatureVersion>
    getAll(): Promise<v60.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<v60.BridgeSignatureVersion[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.BridgeSignatureVersion][]>
}

export class EthBridgeBridgeStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'BridgeStatuses'
    }

    /**
     *  Bridge status.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2fe91d4188f8af4130b30883066f5e7b01f1913f81e8e71d1b7b49c61a3d5d5f'
    }

    /**
     *  Bridge status.
     */
    get asV60(): EthBridgeBridgeStatusesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Bridge status.
 */
export interface EthBridgeBridgeStatusesStorageV60 {
    get(key: number): Promise<(v60.BridgeStatus | undefined)>
    getAll(): Promise<v60.BridgeStatus[]>
    getMany(keys: number[]): Promise<(v60.BridgeStatus | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.BridgeStatus][]>
    getPairs(key: number): Promise<[k: number, v: v60.BridgeStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.BridgeStatus][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.BridgeStatus][]>
}

export class EthBridgeLoadToIncomingRequestHashStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'LoadToIncomingRequestHash'
    }

    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '12f7a945d4fbc0b952f64f333ece0fc731504f19e339f04cd8175df719be78f8'
    }

    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    get asV60(): EthBridgeLoadToIncomingRequestHashStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface EthBridgeLoadToIncomingRequestHashStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgeMigratingRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'MigratingRequests'
    }

    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    get asV60(): EthBridgeMigratingRequestsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface EthBridgeMigratingRequestsStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class EthBridgeNextNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'NextNetworkId'
    }

    /**
     *  Next Network ID counter.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next Network ID counter.
     */
    get asV60(): EthBridgeNextNetworkIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Next Network ID counter.
 */
export interface EthBridgeNextNetworkIdStorageV60 {
    get(): Promise<number>
}

export class EthBridgePeerAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PeerAccountId'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2fa4eaf8f8f4c5fa25ec1f74077ec31c202b5623aa84fb7abc3db119eac5619d'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get asV60(): EthBridgePeerAccountIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Peer account ID on Thischain.
 */
export interface EthBridgePeerAccountIdStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgePeerAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PeerAddress'
    }

    /**
     *  Peer address on Sidechain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '9732e896cb0dbf7bf56d6dfde250c60ff9f4f69c74ea7ce7a9e834041f84f80c'
    }

    /**
     *  Peer address on Sidechain.
     */
    get asV60(): EthBridgePeerAddressStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Peer address on Sidechain.
 */
export interface EthBridgePeerAddressStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

export class EthBridgePeersStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'Peers'
    }

    /**
     *  Network peers set.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Network peers set.
     */
    get asV60(): EthBridgePeersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Network peers set.
 */
export interface EthBridgePeersStorageV60 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class EthBridgePendingBridgeSignatureVersionsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingBridgeSignatureVersions'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '4c3a59cc57b46b097da713499cb977af06a9d415a78675aeb9cc7a01064c091e'
    }

    get asV60(): EthBridgePendingBridgeSignatureVersionsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface EthBridgePendingBridgeSignatureVersionsStorageV60 {
    get(key: number): Promise<(v60.BridgeSignatureVersion | undefined)>
    getAll(): Promise<v60.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<(v60.BridgeSignatureVersion | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.BridgeSignatureVersion][]>
}

export class EthBridgePendingEthPeersSyncStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingEthPeersSync'
    }

    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8276423868ca2c9f75a371a21955637dc44064d5600123273f17ac3d301b6ce3'
    }

    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    get asV60(): EthBridgePendingEthPeersSyncStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface EthBridgePendingEthPeersSyncStorageV60 {
    get(): Promise<v60.EthPeersSync>
}

export class EthBridgePendingPeerStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'PendingPeer'
    }

    /**
     *  Network pending (being added/removed) peer.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Network pending (being added/removed) peer.
     */
    get asV60(): EthBridgePendingPeerStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface EthBridgePendingPeerStorageV60 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class EthBridgeRegisteredAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredAsset'
    }

    /**
     *  Registered asset kind.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'b3083eb0cf9af664a98c61f4d238f1459c0f39d74d6d6f09c8896e3be0a8ff80'
    }

    /**
     *  Registered asset kind.
     */
    get asV60(): EthBridgeRegisteredAssetStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered asset kind.
 */
export interface EthBridgeRegisteredAssetStorageV60 {
    get(key1: number, key2: v60.AssetId32): Promise<(v60.AssetKind | undefined)>
    getAll(): Promise<v60.AssetKind[]>
    getMany(keys: [number, v60.AssetId32][]): Promise<(v60.AssetKind | undefined)[]>
    getKeys(): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number, key2: v60.AssetId32): Promise<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[number, v60.AssetId32][]>
    getPairs(): Promise<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
    getPairs(key1: number): Promise<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
    getPairs(key1: number, key2: v60.AssetId32): Promise<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[k: [number, v60.AssetId32], v: v60.AssetKind][]>
}

export class EthBridgeRegisteredSidechainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredSidechainAsset'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '31f3ab89a8056378ebff3e30eb6d9f7bb656e7335081ff3a2abc581a5c720828'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get asV60(): EthBridgeRegisteredSidechainAssetStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface EthBridgeRegisteredSidechainAssetStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<(v60.AssetId32 | undefined)>
    getAll(): Promise<v60.AssetId32[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v60.AssetId32 | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.AssetId32][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.AssetId32][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.AssetId32][]>
}

export class EthBridgeRegisteredSidechainTokenStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RegisteredSidechainToken'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '91a1aa7ee9b00300cbd9b0251a207d8d62401c39f2871352e8c1dee325efa6eb'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get asV60(): EthBridgeRegisteredSidechainTokenStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered asset address on Sidechain.
 */
export interface EthBridgeRegisteredSidechainTokenStorageV60 {
    get(key1: number, key2: v60.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, v60.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number, key2: v60.AssetId32): Promise<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[number, v60.AssetId32][]>
    getPairs(): Promise<[k: [number, v60.AssetId32], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, v60.AssetId32], v: Uint8Array][]>
    getPairs(key1: number, key2: v60.AssetId32): Promise<[k: [number, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v60.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[k: [number, v60.AssetId32], v: Uint8Array][]>
}

export class EthBridgeRequestApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestApprovals'
    }

    /**
     *  Outgoing requests approvals.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f9a2dfdb9d8457b2d4c32bd51f878babe7e134c16a62fb8a76cbe59c06a71788'
    }

    /**
     *  Outgoing requests approvals.
     */
    get asV60(): EthBridgeRequestApprovalsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Outgoing requests approvals.
 */
export interface EthBridgeRequestApprovalsStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<v60.SignatureParams[]>
    getAll(): Promise<v60.SignatureParams[][]>
    getMany(keys: [number, Uint8Array][]): Promise<v60.SignatureParams[][]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.SignatureParams[]][]>
}

export class EthBridgeRequestStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestStatuses'
    }

    /**
     *  Requests statuses.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '783467a44eeb9862d3371681e516ce5dcf85669490ea9de558a35bb294de220d'
    }

    /**
     *  Requests statuses.
     */
    get asV60(): EthBridgeRequestStatusesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Requests statuses.
 */
export interface EthBridgeRequestStatusesStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<(v60.RequestStatus | undefined)>
    getAll(): Promise<v60.RequestStatus[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v60.RequestStatus | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.RequestStatus][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.RequestStatus][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.RequestStatus][]>
}

export class EthBridgeRequestSubmissionHeightStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestSubmissionHeight'
    }

    /**
     *  Requests submission height map (on substrate).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  Requests submission height map (on substrate).
     */
    get asV60(): EthBridgeRequestSubmissionHeightStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Requests submission height map (on substrate).
 */
export interface EthBridgeRequestSubmissionHeightStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class EthBridgeRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'Requests'
    }

    /**
     *  Registered requests.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd8a5e8971bc06bf0f053bf5f14332d3db494ce23470afc8474c34b146e780e03'
    }

    /**
     *  Registered requests.
     */
    get asV60(): EthBridgeRequestsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered requests.
 */
export interface EthBridgeRequestsStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<(v60.OffchainRequest | undefined)>
    getAll(): Promise<v60.OffchainRequest[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v60.OffchainRequest | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.OffchainRequest][]>
}

export class EthBridgeRequestsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'RequestsQueue'
    }

    /**
     *  Registered requests queue handled by off-chain workers.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Registered requests queue handled by off-chain workers.
     */
    get asV60(): EthBridgeRequestsQueueStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface EthBridgeRequestsQueueStorageV60 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class EthBridgeSidechainAssetPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'SidechainAssetPrecision'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f908ea4fe7e24f099213f31b98f416392e225e6ec493179e3447d5a4809fbb34'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get asV60(): EthBridgeSidechainAssetPrecisionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface EthBridgeSidechainAssetPrecisionStorageV60 {
    get(key1: number, key2: v60.AssetId32): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, v60.AssetId32][]): Promise<number[]>
    getKeys(): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number): Promise<[number, v60.AssetId32][]>
    getKeys(key1: number, key2: v60.AssetId32): Promise<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[number, v60.AssetId32][]>
    getPairs(): Promise<[k: [number, v60.AssetId32], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v60.AssetId32], v: number][]>
    getPairs(key1: number, key2: v60.AssetId32): Promise<[k: [number, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v60.AssetId32): AsyncIterable<[k: [number, v60.AssetId32], v: number][]>
}

export class EthBridgeValMasterContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'ValMasterContractAddress'
    }

    /**
     *  Sora VAL master contract address.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora VAL master contract address.
     */
    get asV60(): EthBridgeValMasterContractAddressStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Sora VAL master contract address.
 */
export interface EthBridgeValMasterContractAddressStorageV60 {
    get(): Promise<Uint8Array>
}

export class EthBridgeXorMasterContractAddressStorage extends StorageBase {
    protected getPrefix() {
        return 'EthBridge'
    }

    protected getName() {
        return 'XorMasterContractAddress'
    }

    /**
     *  Sora XOR master contract address.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora XOR master contract address.
     */
    get asV60(): EthBridgeXorMasterContractAddressStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Sora XOR master contract address.
 */
export interface EthBridgeXorMasterContractAddressStorageV60 {
    get(): Promise<Uint8Array>
}

export class EthereumLightClientBestBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'BestBlock'
    }

    /**
     *  Best known block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '71086e2f350a221b3d06b04566a2c978fda99a376c1ac5e6ac9daa10891c4856'
    }

    /**
     *  Best known block.
     */
    get asV60(): EthereumLightClientBestBlockStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Best known block.
 */
export interface EthereumLightClientBestBlockStorageV60 {
    get(key: bigint): Promise<([v60.HeaderId, bigint] | undefined)>
    getAll(): Promise<[v60.HeaderId, bigint][]>
    getMany(keys: bigint[]): Promise<([v60.HeaderId, bigint] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [v60.HeaderId, bigint]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [v60.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [v60.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [v60.HeaderId, bigint]][]>
}

export class EthereumLightClientBlocksToPruneStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'BlocksToPrune'
    }

    /**
     *  Range of blocks that we want to prune.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4df06536a31d3a47e8cd804fe51684f73bf4009af886d2b85820fd39591caf09'
    }

    /**
     *  Range of blocks that we want to prune.
     */
    get asV60(): EthereumLightClientBlocksToPruneStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Range of blocks that we want to prune.
 */
export interface EthereumLightClientBlocksToPruneStorageV60 {
    get(key: bigint): Promise<(v60.PruningRange | undefined)>
    getAll(): Promise<v60.PruningRange[]>
    getMany(keys: bigint[]): Promise<(v60.PruningRange | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v60.PruningRange][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v60.PruningRange][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v60.PruningRange][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v60.PruningRange][]>
}

export class EthereumLightClientFinalizedBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'FinalizedBlock'
    }

    /**
     *  Best finalized block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'bb0dddb9c476c5caf5bbcebd3d6a7b796b3121332bb0c1b59b2a2bcac1d59c15'
    }

    /**
     *  Best finalized block.
     */
    get asV60(): EthereumLightClientFinalizedBlockStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Best finalized block.
 */
export interface EthereumLightClientFinalizedBlockStorageV60 {
    get(key: bigint): Promise<(v60.HeaderId | undefined)>
    getAll(): Promise<v60.HeaderId[]>
    getMany(keys: bigint[]): Promise<(v60.HeaderId | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v60.HeaderId][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v60.HeaderId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v60.HeaderId][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v60.HeaderId][]>
}

export class EthereumLightClientHeadersStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'Headers'
    }

    /**
     *  Map of imported headers by hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '13f0432c3bffd9dc7139ddb892692a3b755984ec4ca08e01d457f4db48113f52'
    }

    /**
     *  Map of imported headers by hash.
     */
    get asV60(): EthereumLightClientHeadersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Map of imported headers by hash.
 */
export interface EthereumLightClientHeadersStorageV60 {
    get(key1: bigint, key2: Uint8Array): Promise<(v60.StoredHeader | undefined)>
    getAll(): Promise<v60.StoredHeader[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v60.StoredHeader | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v60.StoredHeader][]>
}

export class EthereumLightClientHeadersByNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'HeadersByNumber'
    }

    /**
     *  Map of imported header hashes by number.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '06ae4db4936a5d4ab8dda2a1e8aa81de5b77c1f6148a0d99d2884ca621108b27'
    }

    /**
     *  Map of imported header hashes by number.
     */
    get asV60(): EthereumLightClientHeadersByNumberStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Map of imported header hashes by number.
 */
export interface EthereumLightClientHeadersByNumberStorageV60 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array[]][]>
}

export class EthereumLightClientNetworkConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'EthereumLightClient'
    }

    protected getName() {
        return 'NetworkConfig'
    }

    /**
     *  Network config
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'de7f3bc1016bbc3db50e6e8f91c6d240565ef935a91fe5bcfa471d6c370fafec'
    }

    /**
     *  Network config
     */
    get asV60(): EthereumLightClientNetworkConfigStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Network config
 */
export interface EthereumLightClientNetworkConfigStorageV60 {
    get(key: bigint): Promise<(v60.NetworkConfig | undefined)>
    getAll(): Promise<v60.NetworkConfig[]>
    getMany(keys: bigint[]): Promise<(v60.NetworkConfig | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v60.NetworkConfig][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v60.NetworkConfig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v60.NetworkConfig][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v60.NetworkConfig][]>
}

export class FarmingPoolFarmersStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'PoolFarmers'
    }

    /**
     *  Farmers of the pool. Pool => Farmers
     */
    get isV60(): boolean {
        return this.getTypeHash() === '249c9c4291c29f152c2de37c4b3fdd1ab1e61fd8e7c808fd84f54736f16ecc92'
    }

    /**
     *  Farmers of the pool. Pool => Farmers
     */
    get asV60(): FarmingPoolFarmersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface FarmingPoolFarmersStorageV60 {
    get(key: Uint8Array): Promise<v60.PoolFarmer[]>
    getAll(): Promise<v60.PoolFarmer[][]>
    getMany(keys: Uint8Array[]): Promise<v60.PoolFarmer[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.PoolFarmer[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.PoolFarmer[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.PoolFarmer[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.PoolFarmer[]][]>
}

export class FarmingPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    get asV60(): FarmingPoolsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface FarmingPoolsStorageV60 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV60(): GrandpaCurrentSetIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV60 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV60(): GrandpaNextForcedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV60 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV60(): GrandpaPendingChangeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV60 {
    get(): Promise<(v60.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV60(): GrandpaSetIdSessionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV60 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV60(): GrandpaStalledStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV60 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV60(): GrandpaStateStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV60 {
    get(): Promise<v60.StoredState>
}

export class HermesGovernancePlatformAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    get asV60(): HermesGovernancePlatformAuthorityAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface HermesGovernancePlatformAuthorityAccountStorageV60 {
    get(): Promise<Uint8Array>
}

export class HermesGovernancePlatformHermesPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'HermesPollData'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '4a73927344032df6712a2911a1487647f31bc63f2577fc7d39388bfb0f0308ea'
    }

    get asV60(): HermesGovernancePlatformHermesPollDataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface HermesGovernancePlatformHermesPollDataStorageV60 {
    get(key: Uint8Array): Promise<(v60.HermesPollInfo | undefined)>
    getAll(): Promise<v60.HermesPollInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v60.HermesPollInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.HermesPollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.HermesPollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.HermesPollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.HermesPollInfo][]>
}

export class HermesGovernancePlatformHermesVotingsStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'HermesVotings'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e8c421f187831137f6701c59673332ca218f18607faf33b1a48848a34441556b'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV60(): HermesGovernancePlatformHermesVotingsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesGovernancePlatformHermesVotingsStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v60.HermesVotingInfo | undefined)>
    getAll(): Promise<v60.HermesVotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v60.HermesVotingInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.HermesVotingInfo][]>
}

export class HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesAmountForCreatingPoll'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV60 {
    get(): Promise<bigint>
}

export class HermesGovernancePlatformMinimumHermesVotingAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesVotingAmount'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): HermesGovernancePlatformMinimumHermesVotingAmountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesVotingAmountStorageV60 {
    get(): Promise<bigint>
}

export class HermesGovernancePlatformPalletStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'PalletStorageVersion'
    }

    /**
     *  Pallet storage version
     */
    get isV60(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV60(): HermesGovernancePlatformPalletStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface HermesGovernancePlatformPalletStorageVersionStorageV60 {
    get(): Promise<v60.StorageVersion>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV60(): IdentityIdentityOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV60 {
    get(key: Uint8Array): Promise<(v60.Registration | undefined)>
    getAll(): Promise<v60.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV60(): IdentityRegistrarsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV60 {
    get(): Promise<(v60.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV60(): IdentitySubsOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV60 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV60(): IdentitySuperOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV60 {
    get(key: Uint8Array): Promise<([Uint8Array, v60.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v60.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v60.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v60.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v60.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v60.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v60.Data]][]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get asV60(): ImOnlineAuthoredBlocksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get asV60(): ImOnlineHeartbeatAfterStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in the current
 *  session.
 * 
 *  At the beginning of each session we set this to a value that should fall
 *  roughly in the middle of the session duration. The idea is to first wait for
 *  the validators to produce a block in the current session, so that the
 *  heartbeat later on will not be necessary.
 * 
 *  This value will only be used as a fallback if we fail to get a proper session
 *  progress estimate from `NextSessionRotation`, as those estimates should be
 *  more accurate then the value we calculate for `HeartbeatAfter`.
 */
export interface ImOnlineHeartbeatAfterStorageV60 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV60(): ImOnlineKeysStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV60(): ImOnlineReceivedHeartbeatsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV60 {
    get(key1: number, key2: number): Promise<([number, v60.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v60.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v60.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v60.BoundedOpaqueNetworkState]][]>
}

export class IrohaMigrationAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Account'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV60(): IrohaMigrationAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationAccountStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class IrohaMigrationBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Balances'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '3348da89bdf5466014a306124750332c00db1e5604dcf237df0e249bc59342e3'
    }

    get asV60(): IrohaMigrationBalancesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationBalancesStorageV60 {
    get(key: string): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: string[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: bigint][]>
    getPairs(key: string): Promise<[k: string, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: bigint][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: bigint][]>
}

export class IrohaMigrationMigratedAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'MigratedAccounts'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'dae54a6ba4e3c01cfb611244e5949762c53e2ea975eca1baeaa51c26f9896c26'
    }

    get asV60(): IrohaMigrationMigratedAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationMigratedAccountsStorageV60 {
    get(key: string): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: string[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: Uint8Array][]>
    getPairs(key: string): Promise<[k: string, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: Uint8Array][]>
}

export class IrohaMigrationPendingMultiSigAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PendingMultiSigAccounts'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '1fe0318a0c07b45c66ee761568acfca2a7719a33e793e4890223d636c6b39091'
    }

    get asV60(): IrohaMigrationPendingMultiSigAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationPendingMultiSigAccountsStorageV60 {
    get(key: string): Promise<v60.PendingMultisigAccount>
    getAll(): Promise<v60.PendingMultisigAccount[]>
    getMany(keys: string[]): Promise<v60.PendingMultisigAccount[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: v60.PendingMultisigAccount][]>
    getPairs(key: string): Promise<[k: string, v: v60.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: v60.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: v60.PendingMultisigAccount][]>
}

export class IrohaMigrationPendingReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PendingReferrals'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '1ba0cc0c2ab7fc4d2b17eda5fa1c2aa9f42f7161e9cc639d47a225a03c36950e'
    }

    get asV60(): IrohaMigrationPendingReferralsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationPendingReferralsStorageV60 {
    get(key: string): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: string[]): Promise<Uint8Array[][]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: Uint8Array[]][]>
    getPairs(key: string): Promise<[k: string, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: Uint8Array[]][]>
}

export class IrohaMigrationPublicKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PublicKeys'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '850ce950d572c98c30b6b59de1ce3260e87a95f7de365f8b6a9453d7e4039fe7'
    }

    get asV60(): IrohaMigrationPublicKeysStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationPublicKeysStorageV60 {
    get(key: string): Promise<[boolean, string][]>
    getAll(): Promise<[boolean, string][][]>
    getMany(keys: string[]): Promise<[boolean, string][][]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: [boolean, string][]][]>
    getPairs(key: string): Promise<[k: string, v: [boolean, string][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: [boolean, string][]][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: [boolean, string][]][]>
}

export class IrohaMigrationQuorumsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Quorums'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a0c0387632acb412d8417fc42bc087b9f1fa6c1f2d2ac21a4d502cc571a90c54'
    }

    get asV60(): IrohaMigrationQuorumsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationQuorumsStorageV60 {
    get(key: string): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: string[]): Promise<number[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: number][]>
    getPairs(key: string): Promise<[k: string, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: number][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: number][]>
}

export class IrohaMigrationReferrersStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Referrers'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'd523afc93c9a0f4dbc152c5816d8fcb87607740fb04483263145fca5324c809d'
    }

    get asV60(): IrohaMigrationReferrersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface IrohaMigrationReferrersStorageV60 {
    get(key: string): Promise<(string | undefined)>
    getAll(): Promise<string[]>
    getMany(keys: string[]): Promise<(string | undefined)[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: string][]>
    getPairs(key: string): Promise<[k: string, v: string][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: string][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: string][]>
}

export class LeafProviderLatestDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'LeafProvider'
    }

    protected getName() {
        return 'LatestDigest'
    }

    /**
     *  Latest digest
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8610f92d22951c30343ddf3b634b811adae7e0af568a2d6246b360799c08ac9d'
    }

    /**
     *  Latest digest
     */
    get asV60(): LeafProviderLatestDigestStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Latest digest
 */
export interface LeafProviderLatestDigestStorageV60 {
    get(): Promise<(v60.AuxiliaryDigestItem[] | undefined)>
}

export class MigrationAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'MigrationApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    get asV60(): MigrationAppAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MigrationAppAddressesStorageV60 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'Nodes'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'ffc087e1323413e73a9729e444bf115bb89bc74cab9f4347c9dc890a14ae8d68'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get asV60(): MmrNodesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface MmrNodesStorageV60 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNumberOfLeavesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'NumberOfLeaves'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get asV60(): MmrNumberOfLeavesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface MmrNumberOfLeavesStorageV60 {
    get(): Promise<bigint>
}

export class MmrRootHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'RootHash'
    }

    /**
     *  Latest MMR Root hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Latest MMR Root hash.
     */
    get asV60(): MmrRootHashStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Latest MMR Root hash.
 */
export interface MmrRootHashStorageV60 {
    get(): Promise<Uint8Array>
}

export class MmrLeafBeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyAuthorities'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get asV60(): MmrLeafBeefyAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Details of current BEEFY authority set.
 */
export interface MmrLeafBeefyAuthoritiesStorageV60 {
    get(): Promise<v60.BeefyAuthoritySet>
}

export class MmrLeafBeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MmrLeaf'
    }

    protected getName() {
        return 'BeefyNextAuthorities'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get asV60(): MmrLeafBeefyNextAuthoritiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface MmrLeafBeefyNextAuthoritiesStorageV60 {
    get(): Promise<v60.BeefyAuthoritySet>
}

export class MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'AlwaysDistributeCoefficient'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get asV60(): MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'AssetsWithOptionalRewardMultiplier'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get isV60(): boolean {
        return this.getTypeHash() === '15b3436e33ecfd7e102d164ef537d53523cd1f78e59aacaa07319af29bf6a78b'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get asV60(): MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.FixedPoint | undefined)>
    getAll(): Promise<v60.FixedPoint[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.FixedPoint | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.FixedPoint][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.FixedPoint][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.FixedPoint][]>
}

export class MulticollateralBondingCurvePoolBaseFeeStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'BaseFee'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
     */
    get asV60(): MulticollateralBondingCurvePoolBaseFeeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
 */
export interface MulticollateralBondingCurvePoolBaseFeeStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolCollateralReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'CollateralReserves'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV60(): MulticollateralBondingCurvePoolCollateralReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface MulticollateralBondingCurvePoolCollateralReservesStorageV60 {
    get(key: v60.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
}

export class MulticollateralBondingCurvePoolDistributionAccountsEntryStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'DistributionAccountsEntry'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get isV60(): boolean {
        return this.getTypeHash() === '40f955200298848e4a22bd095789113e3c02166a0644d704e07d60362a3804e3'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get asV60(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV60 {
    get(): Promise<v60.DistributionAccounts>
}

export class MulticollateralBondingCurvePoolEnabledTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'EnabledTargets'
    }

    /**
     *  Collateral Assets allowed to be sold by the token bonding curve
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  Collateral Assets allowed to be sold by the token bonding curve
     */
    get asV60(): MulticollateralBondingCurvePoolEnabledTargetsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Collateral Assets allowed to be sold by the token bonding curve
 */
export interface MulticollateralBondingCurvePoolEnabledTargetsStorageV60 {
    get(): Promise<v60.AssetId32[]>
}

export class MulticollateralBondingCurvePoolFreeReservesAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'FreeReservesAccountId'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV60(): MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MulticollateralBondingCurvePoolIncentivesAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'IncentivesAccountId'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards
     */
    get asV60(): MulticollateralBondingCurvePoolIncentivesAccountIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Account which stores actual PSWAP intended for rewards
 */
export interface MulticollateralBondingCurvePoolIncentivesAccountIdStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'IncentivisedCurrenciesNum'
    }

    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
     */
    get asV60(): MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
 */
export interface MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV60 {
    get(): Promise<number>
}

export class MulticollateralBondingCurvePoolInitialPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'InitialPrice'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get asV60(): MulticollateralBondingCurvePoolInitialPriceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface MulticollateralBondingCurvePoolInitialPriceStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'InitialPswapRewardsSupply'
    }

    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified
     */
    get asV60(): MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified
 */
export interface MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV60 {
    get(): Promise<bigint>
}

export class MulticollateralBondingCurvePoolPendingFreeReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PendingFreeReserves'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '41d56122ce80e93912ff89326630a7e78a3770743d4faaaf1a83763cf4ff80db'
    }

    get asV60(): MulticollateralBondingCurvePoolPendingFreeReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPendingFreeReservesStorageV60 {
    get(): Promise<[v60.AssetId32, bigint][]>
}

export class MulticollateralBondingCurvePoolPriceChangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PriceChangeRate'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    get asV60(): MulticollateralBondingCurvePoolPriceChangeRateStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPriceChangeRateStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolPriceChangeStepStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PriceChangeStep'
    }

    /**
     *  Cofficients in buy price function.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Cofficients in buy price function.
     */
    get asV60(): MulticollateralBondingCurvePoolPriceChangeStepStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Cofficients in buy price function.
 */
export interface MulticollateralBondingCurvePoolPriceChangeStepStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolReferenceAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'ReferenceAssetId'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI
     */
    get asV60(): MulticollateralBondingCurvePoolReferenceAssetIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI
 */
export interface MulticollateralBondingCurvePoolReferenceAssetIdStorageV60 {
    get(): Promise<v60.AssetId32>
}

export class MulticollateralBondingCurvePoolReservesAccStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'ReservesAcc'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV60(): MulticollateralBondingCurvePoolReservesAccStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV60 {
    get(): Promise<v60.TechAccountId>
}

export class MulticollateralBondingCurvePoolRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'Rewards'
    }

    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3c9c4caf05cc3fd846962b03aafca3eef49a71f81879b4d15b7c6e662da4b97e'
    }

    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    get asV60(): MulticollateralBondingCurvePoolRewardsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface MulticollateralBondingCurvePoolRewardsStorageV60 {
    get(key: Uint8Array): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, bigint]][]>
}

export class MulticollateralBondingCurvePoolSellPriceCoefficientStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'SellPriceCoefficient'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get asV60(): MulticollateralBondingCurvePoolSellPriceCoefficientStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface MulticollateralBondingCurvePoolSellPriceCoefficientStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class MulticollateralBondingCurvePoolTotalRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'TotalRewards'
    }

    /**
     *  Total amount of PSWAP owned by accounts
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of PSWAP owned by accounts
     */
    get asV60(): MulticollateralBondingCurvePoolTotalRewardsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total amount of PSWAP owned by accounts
 */
export interface MulticollateralBondingCurvePoolTotalRewardsStorageV60 {
    get(): Promise<bigint>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV60(): MultisigMultisigsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v60.Type_731 | undefined)>
    getAll(): Promise<v60.Type_731[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v60.Type_731 | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.Type_731][]>
}

export class MultisigVerifierPeerKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'PeerKeys'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    get asV60(): MultisigVerifierPeerKeysStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MultisigVerifierPeerKeysStorageV60 {
    get(key: v60.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v60.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v60.GenericNetworkId[]>
    getKeys(key: v60.GenericNetworkId): Promise<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<v60.GenericNetworkId[]>
    getPairs(): Promise<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v60.GenericNetworkId): Promise<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v60.GenericNetworkId): AsyncIterable<[k: v60.GenericNetworkId, v: Uint8Array[]][]>
}

export class MultisigVerifierThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '023bf7911eb6719a61550d0ecbc989af2e92400d2a595c04afa1f92d4f6bdca6'
    }

    get asV60(): MultisigVerifierThisNetworkIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface MultisigVerifierThisNetworkIdStorageV60 {
    get(): Promise<v60.GenericNetworkId>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV60(): OffencesConcurrentReportsIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV60(): OffencesReportsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV60 {
    get(key: Uint8Array): Promise<(v60.OffenceDetails | undefined)>
    getAll(): Promise<v60.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v60.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.OffenceDetails][]>
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ReportsByKindIndex'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get asV60(): OffencesReportsByKindIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface OffencesReportsByKindIndexStorageV60 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class OracleProxyEnabledOraclesStorage extends StorageBase {
    protected getPrefix() {
        return 'OracleProxy'
    }

    protected getName() {
        return 'EnabledOracles'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a9a4634dbfaf89d5e8065d6f375312008207fb0df8a769802806756f030fa9f4'
    }

    get asV60(): OracleProxyEnabledOraclesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OracleProxyEnabledOraclesStorageV60 {
    get(): Promise<v60.Oracle[]>
}

export class OracleProxySymbolProvidersStorage extends StorageBase {
    protected getPrefix() {
        return 'OracleProxy'
    }

    protected getName() {
        return 'SymbolProviders'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '59d555c6e6b4211dd00871be545b4b88c9b1437a76b92cc04bb994aa71fff20a'
    }

    get asV60(): OracleProxySymbolProvidersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OracleProxySymbolProvidersStorageV60 {
    get(key: Uint8Array): Promise<(v60.Oracle | undefined)>
    getAll(): Promise<v60.Oracle[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Oracle | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Oracle][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Oracle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Oracle][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Oracle][]>
}

export class OrderBookAggregatedAsksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'AggregatedAsks'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '355b9b5ae25ae1466002e63bcbe67704f0126ec88f18a61f2416a81969a5dded'
    }

    get asV60(): OrderBookAggregatedAsksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookAggregatedAsksStorageV60 {
    get(key: v60.OrderBookId): Promise<[v60.BalanceUnit, v60.BalanceUnit][]>
    getAll(): Promise<[v60.BalanceUnit, v60.BalanceUnit][][]>
    getMany(keys: v60.OrderBookId[]): Promise<[v60.BalanceUnit, v60.BalanceUnit][][]>
    getKeys(): Promise<v60.OrderBookId[]>
    getKeys(key: v60.OrderBookId): Promise<v60.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<v60.OrderBookId[]>
    getPairs(): Promise<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairs(key: v60.OrderBookId): Promise<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairsPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
}

export class OrderBookAggregatedBidsStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'AggregatedBids'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '355b9b5ae25ae1466002e63bcbe67704f0126ec88f18a61f2416a81969a5dded'
    }

    get asV60(): OrderBookAggregatedBidsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookAggregatedBidsStorageV60 {
    get(key: v60.OrderBookId): Promise<[v60.BalanceUnit, v60.BalanceUnit][]>
    getAll(): Promise<[v60.BalanceUnit, v60.BalanceUnit][][]>
    getMany(keys: v60.OrderBookId[]): Promise<[v60.BalanceUnit, v60.BalanceUnit][][]>
    getKeys(): Promise<v60.OrderBookId[]>
    getKeys(key: v60.OrderBookId): Promise<v60.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<v60.OrderBookId[]>
    getPairs(): Promise<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairs(key: v60.OrderBookId): Promise<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
    getPairsPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<[k: v60.OrderBookId, v: [v60.BalanceUnit, v60.BalanceUnit][]][]>
}

export class OrderBookAsksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'Asks'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '5d28e5ec0cc9622e6f86d123c0075fe4092ea8e8faa84e3db4508f4fad1ad1f1'
    }

    get asV60(): OrderBookAsksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookAsksStorageV60 {
    get(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [v60.OrderBookId, v60.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeys(key1: v60.OrderBookId): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeys(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId, key2: v60.BalanceUnit): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getPairs(): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v60.OrderBookId): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId, key2: v60.BalanceUnit): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
}

export class OrderBookBidsStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'Bids'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '5d28e5ec0cc9622e6f86d123c0075fe4092ea8e8faa84e3db4508f4fad1ad1f1'
    }

    get asV60(): OrderBookBidsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookBidsStorageV60 {
    get(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [v60.OrderBookId, v60.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeys(key1: v60.OrderBookId): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeys(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId, key2: v60.BalanceUnit): AsyncIterable<[v60.OrderBookId, v60.BalanceUnit][]>
    getPairs(): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v60.OrderBookId): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v60.OrderBookId, key2: v60.BalanceUnit): Promise<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId, key2: v60.BalanceUnit): AsyncIterable<[k: [v60.OrderBookId, v60.BalanceUnit], v: bigint[]][]>
}

export class OrderBookExpirationsAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'ExpirationsAgenda'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'b8dddbbccdb8ced9aa4d8839505de2ef0f198d0c583f8ca773764bef1cb20abd'
    }

    get asV60(): OrderBookExpirationsAgendaStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookExpirationsAgendaStorageV60 {
    get(key: number): Promise<[v60.OrderBookId, bigint][]>
    getAll(): Promise<[v60.OrderBookId, bigint][][]>
    getMany(keys: number[]): Promise<[v60.OrderBookId, bigint][][]>
}

export class OrderBookIncompleteExpirationsSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'IncompleteExpirationsSince'
    }

    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block, so
     *  they might be operated later.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block, so
     *  they might be operated later.
     */
    get asV60(): OrderBookIncompleteExpirationsSinceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block, so
 *  they might be operated later.
 */
export interface OrderBookIncompleteExpirationsSinceStorageV60 {
    get(): Promise<(number | undefined)>
}

export class OrderBookLimitOrdersStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'LimitOrders'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'c16b3777ad9e749f363086a3ab26caca9db71ebfc45584a0fe630ad3f2379566'
    }

    get asV60(): OrderBookLimitOrdersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookLimitOrdersStorageV60 {
    get(key1: v60.OrderBookId, key2: bigint): Promise<(v60.LimitOrder | undefined)>
    getAll(): Promise<v60.LimitOrder[]>
    getMany(keys: [v60.OrderBookId, bigint][]): Promise<(v60.LimitOrder | undefined)[]>
    getKeys(): Promise<[v60.OrderBookId, bigint][]>
    getKeys(key1: v60.OrderBookId): Promise<[v60.OrderBookId, bigint][]>
    getKeys(key1: v60.OrderBookId, key2: bigint): Promise<[v60.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[v60.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, key1: v60.OrderBookId, key2: bigint): AsyncIterable<[v60.OrderBookId, bigint][]>
    getPairs(): Promise<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
    getPairs(key1: v60.OrderBookId): Promise<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
    getPairs(key1: v60.OrderBookId, key2: bigint): Promise<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId): AsyncIterable<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
    getPairsPaged(pageSize: number, key1: v60.OrderBookId, key2: bigint): AsyncIterable<[k: [v60.OrderBookId, bigint], v: v60.LimitOrder][]>
}

export class OrderBookOrderBooksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'OrderBooks'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'cf55c982801e473e096fdde476a7958d0b6ae0046fecf5d68b347c00d2832023'
    }

    get asV60(): OrderBookOrderBooksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookOrderBooksStorageV60 {
    get(key: v60.OrderBookId): Promise<(v60.OrderBook | undefined)>
    getAll(): Promise<v60.OrderBook[]>
    getMany(keys: v60.OrderBookId[]): Promise<(v60.OrderBook | undefined)[]>
    getKeys(): Promise<v60.OrderBookId[]>
    getKeys(key: v60.OrderBookId): Promise<v60.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<v60.OrderBookId[]>
    getPairs(): Promise<[k: v60.OrderBookId, v: v60.OrderBook][]>
    getPairs(key: v60.OrderBookId): Promise<[k: v60.OrderBookId, v: v60.OrderBook][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.OrderBookId, v: v60.OrderBook][]>
    getPairsPaged(pageSize: number, key: v60.OrderBookId): AsyncIterable<[k: v60.OrderBookId, v: v60.OrderBook][]>
}

export class OrderBookUserLimitOrdersStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'UserLimitOrders'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '37e179c291c5c9edd3735d10e0ef72338ba4b9c426d02d3c4fd585af631f4fc4'
    }

    get asV60(): OrderBookUserLimitOrdersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface OrderBookUserLimitOrdersStorageV60 {
    get(key1: Uint8Array, key2: v60.OrderBookId): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [Uint8Array, v60.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[Uint8Array, v60.OrderBookId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.OrderBookId][]>
    getKeys(key1: Uint8Array, key2: v60.OrderBookId): Promise<[Uint8Array, v60.OrderBookId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.OrderBookId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.OrderBookId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.OrderBookId): AsyncIterable<[Uint8Array, v60.OrderBookId][]>
    getPairs(): Promise<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
    getPairs(key1: Uint8Array, key2: v60.OrderBookId): Promise<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.OrderBookId): AsyncIterable<[k: [Uint8Array, v60.OrderBookId], v: bigint[]][]>
}

export class PermissionsOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Owners'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '29f954775d53c1667af2b6c5beebf9a0ec9235bc714491ffab7869f753b3ac4b'
    }

    get asV60(): PermissionsOwnersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface PermissionsOwnersStorageV60 {
    get(key1: number, key2: v60.Scope): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [number, v60.Scope][]): Promise<Uint8Array[][]>
}

export class PermissionsPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Permissions'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '2e24752437406132f411b5c0fb0ad3e24405640e2b9f66112b580c5fe6827d45'
    }

    get asV60(): PermissionsPermissionsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface PermissionsPermissionsStorageV60 {
    get(key1: Uint8Array, key2: v60.Scope): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: [Uint8Array, v60.Scope][]): Promise<number[][]>
}

export class PoolXYKAccountPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'AccountPools'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get isV60(): boolean {
        return this.getTypeHash() === '86921a28c2bff25852fa80d825bb9d290cc81085c0c151b10b38de01e7a483e2'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get asV60(): PoolXYKAccountPoolsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface PoolXYKAccountPoolsStorageV60 {
    get(key1: Uint8Array, key2: v60.AssetId32): Promise<v60.AssetId32[]>
    getAll(): Promise<v60.AssetId32[][]>
    getMany(keys: [Uint8Array, v60.AssetId32][]): Promise<v60.AssetId32[][]>
    getKeys(): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v60.AssetId32): Promise<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
    getPairs(key1: Uint8Array, key2: v60.AssetId32): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.AssetId32[]][]>
}

export class PoolXYKPoolProvidersStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'PoolProviders'
    }

    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    get isV60(): boolean {
        return this.getTypeHash() === '25861e3eb8d593dcefaf31526d48572261838c6694d4aed7e9402b8cb074688d'
    }

    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    get asV60(): PoolXYKPoolProvidersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolXYKPoolProvidersStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
}

export class PoolXYKPropertiesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'Properties'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get isV60(): boolean {
        return this.getTypeHash() === '910a3bb1caf1e196a7ccf135050c070a21ea4dd14718d9a95f4eeea7cf648521'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get asV60(): PoolXYKPropertiesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PoolXYKPropertiesStorageV60 {
    get(key1: v60.AssetId32, key2: v60.AssetId32): Promise<([Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array][]>
    getMany(keys: [v60.AssetId32, v60.AssetId32][]): Promise<([Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [Uint8Array, Uint8Array]][]>
}

export class PoolXYKReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'fea274fa999d9252d3a54561d987771e16490ba753dc3852f2c8fc41b14327f4'
    }

    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    get asV60(): PoolXYKReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface PoolXYKReservesStorageV60 {
    get(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: [v60.AssetId32, v60.AssetId32][]): Promise<[bigint, bigint][]>
    getKeys(): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeys(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[v60.AssetId32, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v60.AssetId32, key2: v60.AssetId32): Promise<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v60.AssetId32, key2: v60.AssetId32): AsyncIterable<[k: [v60.AssetId32, v60.AssetId32], v: [bigint, bigint]][]>
}

export class PoolXYKTotalIssuancesStorage extends StorageBase {
    protected getPrefix() {
        return 'PoolXYK'
    }

    protected getName() {
        return 'TotalIssuances'
    }

    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    get isV60(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    get asV60(): PoolXYKTotalIssuancesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface PoolXYKTotalIssuancesStorageV60 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV60(): PreimagePreimageForStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface PreimagePreimageForStorageV60 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV60(): PreimageStatusForStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV60 {
    get(key: Uint8Array): Promise<(v60.Type_828 | undefined)>
    getAll(): Promise<v60.Type_828[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Type_828 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Type_828][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Type_828][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Type_828][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Type_828][]>
}

export class PriceToolsPriceInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceTools'
    }

    protected getName() {
        return 'PriceInfos'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '96f6555f64c75ef0a7bb3fe51bc47315e7e8a8875eb6c54d9d729b68555db30e'
    }

    get asV60(): PriceToolsPriceInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface PriceToolsPriceInfosStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.AggregatedPriceInfo | undefined)>
    getAll(): Promise<v60.AggregatedPriceInfo[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.AggregatedPriceInfo | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.AggregatedPriceInfo][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.AggregatedPriceInfo][]>
}

export class PswapDistributionBurnRateStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BurnRate'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get asV60(): PswapDistributionBurnRateStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface PswapDistributionBurnRateStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class PswapDistributionBurnUpdateInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BurnUpdateInfo'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get isV60(): boolean {
        return this.getTypeHash() === '55f990237a70f0c13e17944664b6d84f9e9dfa7399201c400580ad01364f5679'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get asV60(): PswapDistributionBurnUpdateInfoStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface PswapDistributionBurnUpdateInfoStorageV60 {
    get(): Promise<[v60.FixedPoint, v60.FixedPoint]>
}

export class PswapDistributionBuyBackXSTFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'BuyBackXSTFraction'
    }

    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    get asV60(): PswapDistributionBuyBackXSTFractionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Fraction of PSWAP that could be buy backed to XST
 */
export interface PswapDistributionBuyBackXSTFractionStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class PswapDistributionClaimableSharesStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'ClaimableShares'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get asV60(): PswapDistributionClaimableSharesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface PswapDistributionClaimableSharesStorageV60 {
    get(): Promise<v60.FixedPoint>
}

export class PswapDistributionShareholderAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'ShareholderAccounts'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f6e17663055000a8cbfc548a6af4ea3e45e641e00411282adcc669441724cb4d'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get asV60(): PswapDistributionShareholderAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface PswapDistributionShareholderAccountsStorageV60 {
    get(key: Uint8Array): Promise<v60.FixedPoint>
    getAll(): Promise<v60.FixedPoint[]>
    getMany(keys: Uint8Array[]): Promise<v60.FixedPoint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.FixedPoint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.FixedPoint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.FixedPoint][]>
}

export class PswapDistributionSubscribedAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'PswapDistribution'
    }

    protected getName() {
        return 'SubscribedAccounts'
    }

    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '35ad191b773a1a6e1f8e386eed0f70149f4111fd86cd85b3ed027e57010babb1'
    }

    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    get asV60(): PswapDistributionSubscribedAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface PswapDistributionSubscribedAccountsStorageV60 {
    get(key: Uint8Array): Promise<([number, Uint8Array, number, number] | undefined)>
    getAll(): Promise<[number, Uint8Array, number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array, number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array, number, number]][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV60(): RandomnessCollectiveFlipRandomMaterialStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class ReferralsReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'Referrals'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
    }

    get asV60(): ReferralsReferralsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ReferralsReferralsStorageV60 {
    get(key: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array[]][]>
}

export class ReferralsReferrerBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'ReferrerBalances'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    get asV60(): ReferralsReferrerBalancesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ReferralsReferrerBalancesStorageV60 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class ReferralsReferrersStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'Referrers'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    get asV60(): ReferralsReferrersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface ReferralsReferrersStorageV60 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class RewardsCurrentClaimableValStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'CurrentClaimableVal'
    }

    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    get asV60(): RewardsCurrentClaimableValStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface RewardsCurrentClaimableValStorageV60 {
    get(): Promise<bigint>
}

export class RewardsEthAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'EthAddresses'
    }

    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    get isV60(): boolean {
        return this.getTypeHash() === '40dee5301d47440e1915385db120922ca14fcee4870cb58962d0faeca6e70604'
    }

    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    get asV60(): RewardsEthAddressesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface RewardsEthAddressesStorageV60 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class RewardsMigrationPendingStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'MigrationPending'
    }

    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    get asV60(): RewardsMigrationPendingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface RewardsMigrationPendingStorageV60 {
    get(): Promise<boolean>
}

export class RewardsPswapFarmOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'PswapFarmOwners'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV60(): RewardsPswapFarmOwnersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface RewardsPswapFarmOwnersStorageV60 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class RewardsPswapWaifuOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'PswapWaifuOwners'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV60(): RewardsPswapWaifuOwnersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface RewardsPswapWaifuOwnersStorageV60 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class RewardsReservesAccStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ReservesAcc'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    get asV60(): RewardsReservesAccStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface RewardsReservesAccStorageV60 {
    get(): Promise<v60.TechAccountId>
}

export class RewardsTotalClaimableValStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'TotalClaimableVal'
    }

    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    get asV60(): RewardsTotalClaimableValStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface RewardsTotalClaimableValStorageV60 {
    get(): Promise<bigint>
}

export class RewardsTotalValRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'TotalValRewards'
    }

    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    get asV60(): RewardsTotalValRewardsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface RewardsTotalValRewardsStorageV60 {
    get(): Promise<bigint>
}

export class RewardsUmiNftClaimedStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNftClaimed'
    }

    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'ecc68acda02cc8f77850a99cfbd18a1d08c36d877d8b5986e0a1f0db4eaefd2c'
    }

    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    get asV60(): RewardsUmiNftClaimedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface RewardsUmiNftClaimedStorageV60 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class RewardsUmiNftReceiversStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNftReceivers'
    }

    /**
     *  UMI NFT receivers storage
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f811bbf14795bfbb2d48b655363943f543be46cea31a2ecbcf364a7b23386259'
    }

    /**
     *  UMI NFT receivers storage
     */
    get asV60(): RewardsUmiNftReceiversStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  UMI NFT receivers storage
 */
export interface RewardsUmiNftReceiversStorageV60 {
    get(key: Uint8Array): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: Uint8Array[]): Promise<bigint[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
}

export class RewardsUmiNftsStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'UmiNfts'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get asV60(): RewardsUmiNftsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The storage of available UMI NFTs.
 */
export interface RewardsUmiNftsStorageV60 {
    get(): Promise<v60.AssetId32[]>
}

export class RewardsValBurnedSinceLastVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ValBurnedSinceLastVesting'
    }

    /**
     *  Amount of VAL burned since last vesting
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL burned since last vesting
     */
    get asV60(): RewardsValBurnedSinceLastVestingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface RewardsValBurnedSinceLastVestingStorageV60 {
    get(): Promise<bigint>
}

export class RewardsValOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'ValOwners'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0536eb37be29c8b1e5dff115694b293ec3ecf2cbefa233afcb0ceaecf7840723'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get asV60(): RewardsValOwnersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface RewardsValOwnersStorageV60 {
    get(key: Uint8Array): Promise<v60.RewardInfo>
    getAll(): Promise<v60.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<v60.RewardInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.RewardInfo][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '77c856184db4f799c9a20a12a5598ed25f97430da580aed6c66e0c02ba298685'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV60(): SchedulerAgendaStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV60 {
    get(key: number): Promise<(v60.Scheduled | undefined)[]>
    getAll(): Promise<(v60.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v60.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v60.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v60.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v60.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v60.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV60(): SchedulerIncompleteSinceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV60 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV60(): SchedulerLookupStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV60 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV60(): SessionCurrentIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV60 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asV60(): SessionDisabledValidatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV60 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV60(): SessionKeyOwnerStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV60 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '6108e83622ab26c07cbbe2e10fefc83d1d48217fa5e5c0e670c57839e349da52'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV60(): SessionNextKeysStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV60 {
    get(key: Uint8Array): Promise<(v60.SessionKeys | undefined)>
    getAll(): Promise<v60.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v60.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV60(): SessionQueuedChangedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV60 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'afa050130a79f0e712375751e7b359ca34764df069b74eaba6288cbdd4791e71'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV60(): SessionQueuedKeysStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV60 {
    get(): Promise<[Uint8Array, v60.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV60(): SessionValidatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get asV60(): StakingActiveEraStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface StakingActiveEraStorageV60 {
    get(): Promise<(v60.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV60(): StakingBondedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingBondedStorageV60 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV60(): StakingBondedErasStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV60 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV60(): StakingCanceledSlashPayoutStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV60 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get asV60(): StakingChillThresholdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV60 {
    get(): Promise<(number | undefined)>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV60(): StakingCounterForNominatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForNominatorsStorageV60 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV60(): StakingCounterForValidatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForValidatorsStorageV60 {
    get(): Promise<number>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV60(): StakingCurrentEraStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV60 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get asV60(): StakingCurrentPlannedSessionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV60 {
    get(): Promise<number>
}

export class StakingEraValBurnedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EraValBurned'
    }

    /**
     *  The amount of VAL burned during this era.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of VAL burned during this era.
     */
    get asV60(): StakingEraValBurnedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The amount of VAL burned during this era.
 */
export interface StakingEraValBurnedStorageV60 {
    get(): Promise<bigint>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV60(): StakingErasRewardPointsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV60 {
    get(key: number): Promise<v60.EraRewardPoints>
    getAll(): Promise<v60.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v60.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v60.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.EraRewardPoints][]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV60(): StakingErasStakersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<v60.Exposure>
    getAll(): Promise<v60.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v60.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV60(): StakingErasStakersClippedStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<v60.Exposure>
    getAll(): Promise<v60.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v60.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.Exposure][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get asV60(): StakingErasStartSessionIndexStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface StakingErasStartSessionIndexStorageV60 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV60(): StakingErasTotalStakeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV60 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV60(): StakingErasValidatorPrefsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<v60.ValidatorPrefs>
    getAll(): Promise<v60.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v60.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v60.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV60(): StakingErasValidatorRewardStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV60 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV60(): StakingForceEraStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV60 {
    get(): Promise<v60.Forcing>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV60(): StakingInvulnerablesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV60(): StakingLedgerStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV60 {
    get(key: Uint8Array): Promise<(v60.StakingLedger | undefined)>
    getAll(): Promise<v60.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v60.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV60(): StakingMaxNominatorsCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV60 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV60(): StakingMaxValidatorsCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV60 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV60(): StakingMinCommissionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV60 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV60(): StakingMinNominatorBondStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV60 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV60(): StakingMinValidatorBondStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV60 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV60(): StakingMinimumActiveStakeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV60 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV60(): StakingMinimumValidatorCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV60 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV60(): StakingNominatorSlashInEraStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV60(): StakingNominatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The map from nominator stash key to their nomination preferences, namely the validators that
 *  they wish to support.
 * 
 *  Note that the keys of this storage map might become non-decodable in case the
 *  [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
 *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
 *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
 *  nominators will effectively not-exist, until they re-submit their preferences such that it
 *  is within the bounds of the newly set `Config::MaxNominations`.
 * 
 *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
 *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
 *  number of keys that exist.
 * 
 *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
 *  [`Call::chill_other`] dispatchable by anyone.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingNominatorsStorageV60 {
    get(key: Uint8Array): Promise<(v60.Nominations | undefined)>
    getAll(): Promise<v60.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Nominations][]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV60(): StakingOffendingValidatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV60 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV60(): StakingPayeeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingPayeeStorageV60 {
    get(key: Uint8Array): Promise<v60.RewardDestination>
    getAll(): Promise<v60.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v60.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.RewardDestination][]>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV60(): StakingSlashRewardFractionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV60 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV60(): StakingSlashingSpansStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV60 {
    get(key: Uint8Array): Promise<(v60.SlashingSpans | undefined)>
    getAll(): Promise<v60.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v60.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.SlashingSpans][]>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV60(): StakingSpanSlashStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV60 {
    get(key: [Uint8Array, number]): Promise<v60.SpanRecord>
    getAll(): Promise<v60.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v60.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v60.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v60.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v60.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v60.SpanRecord][]>
}

export class StakingTimeSinceGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'TimeSinceGenesis'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e50373253e08a19a381d5580f2e767cdc52933ee85b8bb4727f9f66cac117cae'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get asV60(): StakingTimeSinceGenesisStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface StakingTimeSinceGenesisStorageV60 {
    get(): Promise<v60.DurationWrapper>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV60(): StakingUnappliedSlashesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV60 {
    get(key: number): Promise<v60.UnappliedSlash[]>
    getAll(): Promise<v60.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v60.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v60.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v60.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v60.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v60.UnappliedSlash[]][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of active validators.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of active validators.
     */
    get asV60(): StakingValidatorCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The ideal number of active validators.
 */
export interface StakingValidatorCountStorageV60 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV60(): StakingValidatorSlashInEraStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV60 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV60(): StakingValidatorsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingValidatorsStorageV60 {
    get(key: Uint8Array): Promise<v60.ValidatorPrefs>
    getAll(): Promise<v60.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v60.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.ValidatorPrefs][]>
}

export class SubstrateBridgeAppAllowedParachainAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'AllowedParachainAssets'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '86cd54395d6bbf8f2f19c821851b7346628829ff06f16e6474c5999c0027ecd1'
    }

    get asV60(): SubstrateBridgeAppAllowedParachainAssetsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeAppAllowedParachainAssetsStorageV60 {
    get(key1: v60.SubNetworkId, key2: number): Promise<v60.AssetId32[]>
    getAll(): Promise<v60.AssetId32[][]>
    getMany(keys: [v60.SubNetworkId, number][]): Promise<v60.AssetId32[][]>
    getKeys(): Promise<[v60.SubNetworkId, number][]>
    getKeys(key1: v60.SubNetworkId): Promise<[v60.SubNetworkId, number][]>
    getKeys(key1: v60.SubNetworkId, key2: number): Promise<[v60.SubNetworkId, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[v60.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId, key2: number): AsyncIterable<[v60.SubNetworkId, number][]>
    getPairs(): Promise<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
    getPairs(key1: v60.SubNetworkId): Promise<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
    getPairs(key1: v60.SubNetworkId, key2: number): Promise<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId, key2: number): AsyncIterable<[k: [v60.SubNetworkId, number], v: v60.AssetId32[]][]>
}

export class SubstrateBridgeAppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f3597faa3edb4e43a673224f23310dc97ef006d0ae47880b07e949cbdcc64152'
    }

    get asV60(): SubstrateBridgeAppAssetKindsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeAppAssetKindsStorageV60 {
    get(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<(v60.Type_605 | undefined)>
    getAll(): Promise<v60.Type_605[]>
    getMany(keys: [v60.SubNetworkId, v60.AssetId32][]): Promise<(v60.Type_605 | undefined)[]>
    getKeys(): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.SubNetworkId): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId, key2: v60.AssetId32): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
    getPairs(key1: v60.SubNetworkId): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
    getPairs(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId, key2: v60.AssetId32): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: v60.Type_605][]>
}

export class SubstrateBridgeAppBridgeTransferLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'BridgeTransferLimit'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    get asV60(): SubstrateBridgeAppBridgeTransferLimitStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeAppBridgeTransferLimitStorageV60 {
    get(): Promise<(bigint | undefined)>
}

export class SubstrateBridgeAppRelaychainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'RelaychainAsset'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '8f3cb4f654360e0179a243ccda3d99112ea56080d54141a2c21a6bca1ea515ed'
    }

    get asV60(): SubstrateBridgeAppRelaychainAssetStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeAppRelaychainAssetStorageV60 {
    get(key: v60.SubNetworkId): Promise<(v60.AssetId32 | undefined)>
    getAll(): Promise<v60.AssetId32[]>
    getMany(keys: v60.SubNetworkId[]): Promise<(v60.AssetId32 | undefined)[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: v60.AssetId32][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: v60.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: v60.AssetId32][]>
}

export class SubstrateBridgeAppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeApp'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '297ea364a7fc6eb3da3bc454ce86c79e1a7cfe088917276137b42e83b4137b72'
    }

    get asV60(): SubstrateBridgeAppSidechainPrecisionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeAppSidechainPrecisionStorageV60 {
    get(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [v60.SubNetworkId, v60.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.SubNetworkId): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeys(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v60.SubNetworkId, key2: v60.AssetId32): AsyncIterable<[v60.SubNetworkId, v60.AssetId32][]>
    getPairs(): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
    getPairs(key1: v60.SubNetworkId): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
    getPairs(key1: v60.SubNetworkId, key2: v60.AssetId32): Promise<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v60.SubNetworkId, key2: v60.AssetId32): AsyncIterable<[k: [v60.SubNetworkId, v60.AssetId32], v: number][]>
}

export class SubstrateBridgeInboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV60(): SubstrateBridgeInboundChannelChannelNoncesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeInboundChannelChannelNoncesStorageV60 {
    get(key: v60.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
}

export class SubstrateBridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV60(): SubstrateBridgeOutboundChannelChannelNoncesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface SubstrateBridgeOutboundChannelChannelNoncesStorageV60 {
    get(key: v60.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: bigint][]>
}

export class SubstrateBridgeOutboundChannelIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'Interval'
    }

    /**
     *  Interval between committing messages.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV60(): SubstrateBridgeOutboundChannelIntervalStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface SubstrateBridgeOutboundChannelIntervalStorageV60 {
    get(): Promise<number>
}

export class SubstrateBridgeOutboundChannelMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'MessageQueues'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get isV60(): boolean {
        return this.getTypeHash() === '12598e9ed710edd17fbbc1e4bbd7c9c8d7c1b44920a082933852de96bb889e9c'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV60(): SubstrateBridgeOutboundChannelMessageQueuesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface SubstrateBridgeOutboundChannelMessageQueuesStorageV60 {
    get(key: v60.SubNetworkId): Promise<v60.BridgeMessage[]>
    getAll(): Promise<v60.BridgeMessage[][]>
    getMany(keys: v60.SubNetworkId[]): Promise<v60.BridgeMessage[][]>
    getKeys(): Promise<v60.SubNetworkId[]>
    getKeys(key: v60.SubNetworkId): Promise<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<v60.SubNetworkId[]>
    getPairs(): Promise<[k: v60.SubNetworkId, v: v60.BridgeMessage[]][]>
    getPairs(key: v60.SubNetworkId): Promise<[k: v60.SubNetworkId, v: v60.BridgeMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.SubNetworkId, v: v60.BridgeMessage[]][]>
    getPairsPaged(pageSize: number, key: v60.SubNetworkId): AsyncIterable<[k: v60.SubNetworkId, v: v60.BridgeMessage[]][]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV60(): SudoKeyStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV60(): SystemAccountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV60 {
    get(key: Uint8Array): Promise<v60.AccountInfo>
    getAll(): Promise<v60.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v60.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV60(): SystemAllExtrinsicsLenStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV60 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV60(): SystemBlockHashStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV60 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV60(): SystemBlockWeightStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV60 {
    get(): Promise<v60.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV60(): SystemDigestStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV60 {
    get(): Promise<v60.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV60(): SystemEventCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV60 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV60(): SystemEventTopicsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV60 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '03fcae813d01ee22e6a051c22ea29a5d329f1d7f01dfd883652e8dc32f8d88f0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV60(): SystemEventsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV60 {
    get(): Promise<v60.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV60(): SystemExecutionPhaseStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV60 {
    get(): Promise<(v60.Type_200 | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV60(): SystemExtrinsicCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV60 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV60(): SystemExtrinsicDataStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV60 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV60(): SystemLastRuntimeUpgradeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV60 {
    get(): Promise<(v60.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV60(): SystemNumberStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV60 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV60(): SystemParentHashStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV60 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV60(): SystemUpgradedToTripleRefCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV60 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV60(): SystemUpgradedToU32RefCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV60 {
    get(): Promise<boolean>
}

export class TechnicalTechAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Technical'
    }

    protected getName() {
        return 'TechAccounts'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'c878da98ba9c031d571b432ade6370b723cbbc8f237ef1939ac0c4c6ecfa87da'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get asV60(): TechnicalTechAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechnicalTechAccountsStorageV60 {
    get(key: Uint8Array): Promise<(v60.TechAccountId | undefined)>
    getAll(): Promise<v60.TechAccountId[]>
    getMany(keys: Uint8Array[]): Promise<(v60.TechAccountId | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.TechAccountId][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.TechAccountId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.TechAccountId][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.TechAccountId][]>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV60(): TechnicalCommitteeMembersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV60(): TechnicalCommitteePrimeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV60(): TechnicalCommitteeProposalCountStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV60 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'c9197acd43ad129e2b3f040aeb9c3f28b234204548169ab6159e86b8c14eff79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV60(): TechnicalCommitteeProposalOfStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV60 {
    get(key: Uint8Array): Promise<(v60.Call | undefined)>
    getAll(): Promise<v60.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV60(): TechnicalCommitteeProposalsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV60(): TechnicalCommitteeVotingStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV60 {
    get(key: Uint8Array): Promise<(v60.Votes | undefined)>
    getAll(): Promise<v60.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v60.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV60(): TechnicalMembershipMembersStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageV60 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV60(): TechnicalMembershipPrimeStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageV60 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV60(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV60(): TimestampDidUpdateStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV60 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV60(): TimestampNowStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV60 {
    get(): Promise<bigint>
}

export class TokensAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'e5706f0fa378994768b50e389341994888eb6806896396f817b638a95c28fad2'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV60(): TokensAccountsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV60 {
    get(key1: Uint8Array, key2: v60.AssetId32): Promise<v60.Type_666>
    getAll(): Promise<v60.Type_666[]>
    getMany(keys: [Uint8Array, v60.AssetId32][]): Promise<v60.Type_666[]>
    getKeys(): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v60.AssetId32): Promise<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
    getPairs(key1: Uint8Array, key2: v60.AssetId32): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_666][]>
}

export class TokensLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'bfd7ec9023cb1f693975281c68fc1fc4cf366a9747bc836a3c98afc37b1c0388'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV60(): TokensLocksStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV60 {
    get(key1: Uint8Array, key2: v60.AssetId32): Promise<v60.Type_664[]>
    getAll(): Promise<v60.Type_664[][]>
    getMany(keys: [Uint8Array, v60.AssetId32][]): Promise<v60.Type_664[][]>
    getKeys(): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v60.AssetId32): Promise<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
    getPairs(key1: Uint8Array, key2: v60.AssetId32): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.Type_664[]][]>
}

export class TokensReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV60(): boolean {
        return this.getTypeHash() === '64fe379b73bd0117b4a793327bdb630f8582bc9c808e76187dff5f6b668b1576'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV60(): TokensReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface TokensReservesStorageV60 {
    get(key1: Uint8Array, key2: v60.AssetId32): Promise<v60.ReserveData[]>
    getAll(): Promise<v60.ReserveData[][]>
    getMany(keys: [Uint8Array, v60.AssetId32][]): Promise<v60.ReserveData[][]>
    getKeys(): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v60.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v60.AssetId32): Promise<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[Uint8Array, v60.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
    getPairs(key1: Uint8Array, key2: v60.AssetId32): Promise<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v60.AssetId32): AsyncIterable<[k: [Uint8Array, v60.AssetId32], v: v60.ReserveData[]][]>
}

export class TokensTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total issuance of a token type.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV60(): TokensTotalIssuanceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV60 {
    get(key: v60.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
}

export class TradingPairEnabledSourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'EnabledSources'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'a6aecb7ca8096876d568cf8b4bc04f0f7f7d3ffe082d8e1b7017448e9cf1d5c8'
    }

    get asV60(): TradingPairEnabledSourcesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface TradingPairEnabledSourcesStorageV60 {
    get(key1: number, key2: v60.TradingPair): Promise<(v60.LiquiditySourceType[] | undefined)>
    getAll(): Promise<v60.LiquiditySourceType[][]>
    getMany(keys: [number, v60.TradingPair][]): Promise<(v60.LiquiditySourceType[] | undefined)[]>
    getKeys(): Promise<[number, v60.TradingPair][]>
    getKeys(key1: number): Promise<[number, v60.TradingPair][]>
    getKeys(key1: number, key2: v60.TradingPair): Promise<[number, v60.TradingPair][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v60.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v60.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number, key2: v60.TradingPair): AsyncIterable<[number, v60.TradingPair][]>
    getPairs(): Promise<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
    getPairs(key1: number): Promise<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
    getPairs(key1: number, key2: v60.TradingPair): Promise<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v60.TradingPair): AsyncIterable<[k: [number, v60.TradingPair], v: v60.LiquiditySourceType[]][]>
}

export class TradingPairLockedLiquiditySourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'LockedLiquiditySources'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV60(): TradingPairLockedLiquiditySourcesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface TradingPairLockedLiquiditySourcesStorageV60 {
    get(): Promise<v60.LiquiditySourceType[]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): TransactionPaymentNextFeeMultiplierStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV60 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV60(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV60(): TransactionPaymentStorageVersionStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV60 {
    get(): Promise<v60.Releases>
}

export class VestedRewardsCrowdloanInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanInfos'
    }

    /**
     *  Information about crowdloan
     */
    get isV60(): boolean {
        return this.getTypeHash() === '4b5d49e82b760937552ae22f16177bfa396b3c8f32469fac40efaf42738bbf8e'
    }

    /**
     *  Information about crowdloan
     */
    get asV60(): VestedRewardsCrowdloanInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Information about crowdloan
 */
export interface VestedRewardsCrowdloanInfosStorageV60 {
    get(key: Uint8Array): Promise<(v60.CrowdloanInfo | undefined)>
    getAll(): Promise<v60.CrowdloanInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v60.CrowdloanInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.CrowdloanInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.CrowdloanInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.CrowdloanInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.CrowdloanInfo][]>
}

export class VestedRewardsCrowdloanUserInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'CrowdloanUserInfos'
    }

    /**
     *  Information about crowdloan rewards claimed by user
     */
    get isV60(): boolean {
        return this.getTypeHash() === '9ba63c4324aab6be9eb9243aeb76282adc876a75a16f7647d197b8f0a224d3bc'
    }

    /**
     *  Information about crowdloan rewards claimed by user
     */
    get asV60(): VestedRewardsCrowdloanUserInfosStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface VestedRewardsCrowdloanUserInfosStorageV60 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v60.CrowdloanUserInfo | undefined)>
    getAll(): Promise<v60.CrowdloanUserInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v60.CrowdloanUserInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v60.CrowdloanUserInfo][]>
}

export class VestedRewardsRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'Rewards'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'a065205d3ebbb157b5b0e521a08365c0ad77257b3c4c8b3388dbabdcb82e3e24'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get asV60(): VestedRewardsRewardsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface VestedRewardsRewardsStorageV60 {
    get(key: Uint8Array): Promise<v60.Type_749>
    getAll(): Promise<v60.Type_749[]>
    getMany(keys: Uint8Array[]): Promise<v60.Type_749[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.Type_749][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.Type_749][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.Type_749][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.Type_749][]>
}

export class VestedRewardsTotalRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'VestedRewards'
    }

    protected getName() {
        return 'TotalRewards'
    }

    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    get asV60(): VestedRewardsTotalRewardsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface VestedRewardsTotalRewardsStorageV60 {
    get(): Promise<bigint>
}

export class XSTPoolCollateralReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'CollateralReserves'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV60(): XSTPoolCollateralReservesStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface XSTPoolCollateralReservesStorageV60 {
    get(key: v60.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v60.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: bigint][]>
}

export class XSTPoolEnabledSymbolsStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'EnabledSymbols'
    }

    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'ae88fbc2f24db5dbf123749f07478fa3632354ae3d71f37fc65cfa26fb149933'
    }

    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    get asV60(): XSTPoolEnabledSymbolsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface XSTPoolEnabledSymbolsStorageV60 {
    get(key: Uint8Array): Promise<(v60.AssetId32 | undefined)>
    getAll(): Promise<v60.AssetId32[]>
    getMany(keys: Uint8Array[]): Promise<(v60.AssetId32 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v60.AssetId32][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v60.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v60.AssetId32][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v60.AssetId32][]>
}

export class XSTPoolEnabledSyntheticsStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'EnabledSynthetics'
    }

    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    get isV60(): boolean {
        return this.getTypeHash() === '11652b8a4e128438a7255df00af9e544ec8cbae4470f9218265bb68bb0777c99'
    }

    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    get asV60(): XSTPoolEnabledSyntheticsStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface XSTPoolEnabledSyntheticsStorageV60 {
    get(key: v60.AssetId32): Promise<(v60.SyntheticInfo | undefined)>
    getAll(): Promise<v60.SyntheticInfo[]>
    getMany(keys: v60.AssetId32[]): Promise<(v60.SyntheticInfo | undefined)[]>
    getKeys(): Promise<v60.AssetId32[]>
    getKeys(key: v60.AssetId32): Promise<v60.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v60.AssetId32[]>
    getKeysPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<v60.AssetId32[]>
    getPairs(): Promise<[k: v60.AssetId32, v: v60.SyntheticInfo][]>
    getPairs(key: v60.AssetId32): Promise<[k: v60.AssetId32, v: v60.SyntheticInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v60.AssetId32, v: v60.SyntheticInfo][]>
    getPairsPaged(pageSize: number, key: v60.AssetId32): AsyncIterable<[k: v60.AssetId32, v: v60.SyntheticInfo][]>
}

export class XSTPoolReferenceAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'ReferenceAssetId'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV60(): XSTPoolReferenceAssetIdStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface XSTPoolReferenceAssetIdStorageV60 {
    get(): Promise<v60.AssetId32>
}

export class XSTPoolSyntheticBaseAssetFloorPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'XSTPool'
    }

    protected getName() {
        return 'SyntheticBaseAssetFloorPrice'
    }

    /**
     *  Floor price for the synthetic base asset.
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Floor price for the synthetic base asset.
     */
    get asV60(): XSTPoolSyntheticBaseAssetFloorPriceStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface XSTPoolSyntheticBaseAssetFloorPriceStorageV60 {
    get(): Promise<bigint>
}

export class XorFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'XorFee'
    }

    protected getName() {
        return 'Multiplier'
    }

    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV60(): XorFeeMultiplierStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

export interface XorFeeMultiplierStorageV60 {
    get(): Promise<bigint>
}

export class XorFeeXorToValStorage extends StorageBase {
    protected getPrefix() {
        return 'XorFee'
    }

    protected getName() {
        return 'XorToVal'
    }

    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    get isV60(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    get asV60(): XorFeeXorToValStorageV60 {
        assert(this.isV60)
        return this as any
    }
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorFeeXorToValStorageV60 {
    get(): Promise<bigint>
}
