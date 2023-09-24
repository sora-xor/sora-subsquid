import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v63 from './v63'

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
    get isV63(): boolean {
        return this.getTypeHash() === '94bdb27ff45979d08e9c7a1caf2f5085757d4f09d9ea4b9195572af205168c2f'
    }

    /**
     *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
     */
    get asV63(): AssetsAssetInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Asset Id -> (Symbol, Name, Precision, Is Mintable, Content Source, Description)
 */
export interface AssetsAssetInfosStorageV63 {
    get(key: v63.AssetId32): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]>
    getAll(): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getMany(keys: v63.AssetId32[]): Promise<[Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)][]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: [Uint8Array, Uint8Array, number, boolean, (Uint8Array | undefined), (Uint8Array | undefined)]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '088c8720b3f53953e645cba72b2f87d61b305d7f52bfdddca4a631775822faf7'
    }

    /**
     *  Asset Id -> Owner Account Id
     */
    get asV63(): AssetsAssetOwnersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Asset Id -> Owner Account Id
 */
export interface AssetsAssetOwnersStorageV63 {
    get(key: v63.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: v63.AssetId32[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: Uint8Array][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: Uint8Array][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e7ed1c7fbac7cd5f2fa7d5c6f2fa8f512c21ee365a2dc41abce2582978d964ec'
    }

    /**
     *  Asset Id -> AssetRecord<T>
     */
    get asV63(): AssetsAssetRecordAssetIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Asset Id -> AssetRecord<T>
 */
export interface AssetsAssetRecordAssetIdStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.AssetRecord | undefined)>
    getAll(): Promise<v63.AssetRecord[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.AssetRecord | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.AssetRecord][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.AssetRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.AssetRecord][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.AssetRecord][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV63(): AuthorshipAuthorStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get asV63(): BabeAuthorVrfRandomnessStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface BabeAuthorVrfRandomnessStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV63(): BabeAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV63(): BabeCurrentSlotStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get asV63(): BabeEpochConfigStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface BabeEpochConfigStorageV63 {
    get(): Promise<(v63.BabeEpochConfiguration | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV63(): BabeEpochIndexStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV63(): BabeEpochStartStorageV63 {
        assert(this.isV63)
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
export interface BabeEpochStartStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV63(): BabeGenesisSlotStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV63(): BabeInitializedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV63 {
    get(): Promise<((v63.PreDigest | undefined) | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV63(): BabeLatenessStorageV63 {
        assert(this.isV63)
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
export interface BabeLatenessStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV63(): BabeNextAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV63(): BabeNextEpochConfigStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV63 {
    get(): Promise<(v63.BabeEpochConfiguration | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV63(): BabeNextRandomnessStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV63(): BabePendingEpochConfigChangeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV63 {
    get(): Promise<(v63.NextConfigDescriptor | undefined)>
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
    get isV63(): boolean {
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
    get asV63(): BabeRandomnessStorageV63 {
        assert(this.isV63)
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
export interface BabeRandomnessStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): BabeSegmentIndexStorageV63 {
        assert(this.isV63)
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
export interface BabeSegmentIndexStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV63(): BabeUnderConstructionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV63(): BagsListCounterForListNodesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface BagsListCounterForListNodesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV63(): BagsListListBagsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface BagsListListBagsStorageV63 {
    get(key: bigint): Promise<(v63.Bag | undefined)>
    getAll(): Promise<v63.Bag[]>
    getMany(keys: bigint[]): Promise<(v63.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v63.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v63.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v63.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v63.Bag][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV63(): BagsListListNodesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface BagsListListNodesStorageV63 {
    get(key: Uint8Array): Promise<(v63.Node | undefined)>
    getAll(): Promise<v63.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Node][]>
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
    get isV63(): boolean {
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
    get asV63(): BalancesAccountStorageV63 {
        assert(this.isV63)
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
export interface BalancesAccountStorageV63 {
    get(key: Uint8Array): Promise<v63.AccountData>
    getAll(): Promise<v63.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v63.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.AccountData][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV63(): BalancesInactiveIssuanceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV63(): BalancesLocksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV63 {
    get(key: Uint8Array): Promise<v63.BalanceLock[]>
    getAll(): Promise<v63.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v63.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.BalanceLock[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV63(): BalancesReservesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV63 {
    get(key: Uint8Array): Promise<v63.ReserveData[]>
    getAll(): Promise<v63.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v63.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.ReserveData[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV63(): BalancesTotalIssuanceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV63 {
    get(): Promise<bigint>
}

export class BandDynamicFeeParametersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'DynamicFeeParameters'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f2c645c74fe40b8672d790a8004247c4a6854632b56b65312583cb5baa894b59'
    }

    get asV63(): BandDynamicFeeParametersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BandDynamicFeeParametersStorageV63 {
    get(): Promise<v63.FeeCalculationParameters>
}

export class BandSymbolCheckBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'SymbolCheckBlock'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'a8ff51b1d52588d671233c876f9a64b48aa4e693d1fea92dcbde4d663f72a959'
    }

    get asV63(): BandSymbolCheckBlockStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BandSymbolCheckBlockStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '1463cb9392939423c1cd0fbfd71ec390f4dc66703aca420fdc0a53769675a3b3'
    }

    get asV63(): BandSymbolRatesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BandSymbolRatesStorageV63 {
    get(key: Uint8Array): Promise<(v63.BandRate | undefined)>
    getAll(): Promise<(v63.BandRate | undefined)[]>
    getMany(keys: Uint8Array[]): Promise<(v63.BandRate | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: (v63.BandRate | undefined)][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: (v63.BandRate | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: (v63.BandRate | undefined)][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: (v63.BandRate | undefined)][]>
}

export class BandTrustedRelayersStorage extends StorageBase {
    protected getPrefix() {
        return 'Band'
    }

    protected getName() {
        return 'TrustedRelayers'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    get asV63(): BandTrustedRelayersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BandTrustedRelayersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  The current authorities set
     */
    get asV63(): BeefyAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current authorities set
 */
export interface BeefyAuthoritiesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get asV63(): BeefyNextAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface BeefyNextAuthoritiesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current validator set id
     */
    get asV63(): BeefyValidatorSetIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current validator set id
 */
export interface BeefyValidatorSetIdStorageV63 {
    get(): Promise<bigint>
}

export class BeefyLightClientCurrentValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'CurrentValidatorSet'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV63(): BeefyLightClientCurrentValidatorSetStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientCurrentValidatorSetStorageV63 {
    get(key: v63.SubNetworkId): Promise<(v63.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v63.BeefyAuthoritySet[]>
    getMany(keys: v63.SubNetworkId[]): Promise<(v63.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
}

export class BeefyLightClientLatestBeefyBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestBeefyBlock'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV63(): BeefyLightClientLatestBeefyBlockStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientLatestBeefyBlockStorageV63 {
    get(key: v63.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
}

export class BeefyLightClientLatestMMRRootsStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestMMRRoots'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '76aad9b2f69624cc0ac9edade0a395aae72489d2c38a9c8a53b515fa48d04b0b'
    }

    get asV63(): BeefyLightClientLatestMMRRootsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientLatestMMRRootsStorageV63 {
    get(key: v63.SubNetworkId): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v63.SubNetworkId[]): Promise<Uint8Array[][]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: Uint8Array[]][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: Uint8Array[]][]>
}

export class BeefyLightClientLatestRandomSeedStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'LatestRandomSeed'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '71e0decea676f8576efdb835fd40eaa20cee34c08589ca24818aa93fc545680e'
    }

    get asV63(): BeefyLightClientLatestRandomSeedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientLatestRandomSeedStorageV63 {
    get(key: v63.SubNetworkId): Promise<[Uint8Array, number]>
    getAll(): Promise<[Uint8Array, number][]>
    getMany(keys: v63.SubNetworkId[]): Promise<[Uint8Array, number][]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: [Uint8Array, number]][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: [Uint8Array, number]][]>
}

export class BeefyLightClientNextValidatorSetStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'NextValidatorSet'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'c8b1a6c37912477c80925ae870a649673d9e03afd501d50d273ae6b70040eb31'
    }

    get asV63(): BeefyLightClientNextValidatorSetStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientNextValidatorSetStorageV63 {
    get(key: v63.SubNetworkId): Promise<(v63.BeefyAuthoritySet | undefined)>
    getAll(): Promise<v63.BeefyAuthoritySet[]>
    getMany(keys: v63.SubNetworkId[]): Promise<(v63.BeefyAuthoritySet | undefined)[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: v63.BeefyAuthoritySet][]>
}

export class BeefyLightClientThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyLightClient'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'e98f7bd664e2ea3524489905648b217400e58d4063ec1a8e53bba73266a424b2'
    }

    get asV63(): BeefyLightClientThisNetworkIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BeefyLightClientThisNetworkIdStorageV63 {
    get(): Promise<v63.SubNetworkId>
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
    get isV63(): boolean {
        return this.getTypeHash() === '0018725b380dd161f91c8218f80f948a5cdba579e99333e2bc5f8ae6d5334e72'
    }

    /**
     *  Approvals
     */
    get asV63(): BridgeDataSignerApprovalsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Approvals
 */
export interface BridgeDataSignerApprovalsStorageV63 {
    get(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getAll(): Promise<[Uint8Array, Uint8Array][][]>
    getMany(keys: [v63.GenericNetworkId, Uint8Array][]): Promise<[Uint8Array, Uint8Array][][]>
    getKeys(): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v63.GenericNetworkId): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairs(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: [Uint8Array, Uint8Array][]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    /**
     *  Peers
     */
    get asV63(): BridgeDataSignerPeersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Peers
 */
export interface BridgeDataSignerPeersStorageV63 {
    get(key: v63.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v63.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v63.GenericNetworkId[]>
    getKeys(key: v63.GenericNetworkId): Promise<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<v63.GenericNetworkId[]>
    getPairs(): Promise<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v63.GenericNetworkId): Promise<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '2259adffe846960292971baa4d957900e8c68078a50aff9ad4f50897d0102227'
    }

    /**
     *  Pending peers
     */
    get asV63(): BridgeDataSignerPendingPeerUpdateStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pending peers
 */
export interface BridgeDataSignerPendingPeerUpdateStorageV63 {
    get(key: v63.GenericNetworkId): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v63.GenericNetworkId[]): Promise<boolean[]>
    getKeys(): Promise<v63.GenericNetworkId[]>
    getKeys(key: v63.GenericNetworkId): Promise<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<v63.GenericNetworkId[]>
    getPairs(): Promise<[k: v63.GenericNetworkId, v: boolean][]>
    getPairs(key: v63.GenericNetworkId): Promise<[k: v63.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.GenericNetworkId, v: boolean][]>
    getPairsPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<[k: v63.GenericNetworkId, v: boolean][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  Source channel (OutboundChannel contract) on the ethereum side
     */
    get asV63(): BridgeInboundChannelChannelAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Source channel (OutboundChannel contract) on the ethereum side
 */
export interface BridgeInboundChannelChannelAddressesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV63(): BridgeInboundChannelChannelNoncesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeInboundChannelChannelNoncesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    /**
     *  InboundChannel contract address on the ethereum side
     */
    get asV63(): BridgeInboundChannelInboundChannelAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  InboundChannel contract address on the ethereum side
 */
export interface BridgeInboundChannelInboundChannelAddressesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV63(): BridgeInboundChannelInboundChannelNoncesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeInboundChannelInboundChannelNoncesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV63(): BridgeInboundChannelRewardFractionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeInboundChannelRewardFractionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cd3338caa601a4e2cc7a00dec626fae008fcbe18f6658819525a09e67bf3e568'
    }

    /**
     *  Multisignature accounts.
     */
    get asV63(): BridgeMultisigAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Multisignature accounts.
 */
export interface BridgeMultisigAccountsStorageV63 {
    get(key: Uint8Array): Promise<(v63.MultisigAccount | undefined)>
    getAll(): Promise<v63.MultisigAccount[]>
    getMany(keys: Uint8Array[]): Promise<(v63.MultisigAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.MultisigAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.MultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.MultisigAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.MultisigAccount][]>
}

export class BridgeMultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeMultisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV63(): BridgeMultisigCallsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeMultisigCallsStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'e2028db08037cfc67445208df734fa0d45be263177b39a42155e067199ca2c4c'
    }

    get asV63(): BridgeMultisigDispatchedCallsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeMultisigDispatchedCallsStorageV63 {
    get(key1: Uint8Array, key2: v63.BridgeTimepoint): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, v63.BridgeTimepoint][]): Promise<null[]>
    getKeys(): Promise<[Uint8Array, v63.BridgeTimepoint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.BridgeTimepoint][]>
    getKeys(key1: Uint8Array, key2: v63.BridgeTimepoint): Promise<[Uint8Array, v63.BridgeTimepoint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.BridgeTimepoint): AsyncIterable<[Uint8Array, v63.BridgeTimepoint][]>
    getPairs(): Promise<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
    getPairs(key1: Uint8Array, key2: v63.BridgeTimepoint): Promise<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.BridgeTimepoint): AsyncIterable<[k: [Uint8Array, v63.BridgeTimepoint], v: null][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f276292c2ec28ca6923fb8d9f85c0ce563f7cb13e1b3b18598f5f354a6570f2b'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV63(): BridgeMultisigMultisigsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface BridgeMultisigMultisigsStorageV63 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v63.Multisig | undefined)>
    getAll(): Promise<v63.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v63.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Multisig][]>
}

export class BridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '534845d707414d74e73b66208cdd4214c5ba2f4ef9877a030a675597bc275623'
    }

    get asV63(): BridgeOutboundChannelChannelNoncesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeOutboundChannelChannelNoncesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): BridgeOutboundChannelFeeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeOutboundChannelFeeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV63(): BridgeOutboundChannelIntervalStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface BridgeOutboundChannelIntervalStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'becbc7253dd748b1e180dc34a7ee1e2b33615439bf5e1213a0e496f21e134a4d'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV63(): BridgeOutboundChannelMessageQueuesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface BridgeOutboundChannelMessageQueuesStorageV63 {
    get(key: bigint): Promise<v63.Message[]>
    getAll(): Promise<v63.Message[][]>
    getMany(keys: bigint[]): Promise<v63.Message[][]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v63.Message[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v63.Message[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v63.Message[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v63.Message[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '562642e80114763badea02d1e1f1ca3ec06ced33d0cb004f035c6617dcb1cbfc'
    }

    /**
     *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
     */
    get asV63(): BridgeOutboundChannelQueuesTotalGasStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total gas for each queue. Updated by mutating the queues with methods `append_message_queue` and `take_message_queue`.
 */
export interface BridgeOutboundChannelQueuesTotalGasStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Consumed transfer limit.
     */
    get asV63(): BridgeProxyConsumedTransferLimitStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Consumed transfer limit.
 */
export interface BridgeProxyConsumedTransferLimitStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'c174344dfddcf1721ee1639e2dd3674a34e0feb5b0b7408e99c10363afb45d50'
    }

    /**
     *  Assets with transfer limitation.
     */
    get asV63(): BridgeProxyLimitedAssetsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Assets with transfer limitation.
 */
export interface BridgeProxyLimitedAssetsStorageV63 {
    get(key: v63.AssetId32): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: v63.AssetId32[]): Promise<boolean[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: boolean][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: boolean][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: boolean][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '72028d2a273ff5bf4de7b2dc6214e6136859bf8e40d4fcf347ddccc0c260386f'
    }

    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    get asV63(): BridgeProxyLockedAssetsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface BridgeProxyLockedAssetsStorageV63 {
    get(key1: v63.GenericNetworkId, key2: v63.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v63.GenericNetworkId, v63.AssetId32][]): Promise<bigint[]>
    getKeys(): Promise<[v63.GenericNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.GenericNetworkId): Promise<[v63.GenericNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.GenericNetworkId, key2: v63.AssetId32): Promise<[v63.GenericNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.GenericNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[v63.GenericNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId, key2: v63.AssetId32): AsyncIterable<[v63.GenericNetworkId, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
    getPairs(key1: v63.GenericNetworkId): Promise<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
    getPairs(key1: v63.GenericNetworkId, key2: v63.AssetId32): Promise<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId, key2: v63.AssetId32): AsyncIterable<[k: [v63.GenericNetworkId, v63.AssetId32], v: bigint][]>
}

export class BridgeProxySendersStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Senders'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'c009c4f18cbf05b12a1f843bbfda19189457fea80027cf7b19a8798618cbce2e'
    }

    get asV63(): BridgeProxySendersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeProxySendersStorageV63 {
    get(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [v63.GenericNetworkId, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v63.GenericNetworkId): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairs(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: Uint8Array][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '18105a375da97c8d25485c70df3cd51a33320e2a6ba4fc63196540378cd0d239'
    }

    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    get asV63(): BridgeProxySidechainFeePaidStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface BridgeProxySidechainFeePaidStorageV63 {
    get(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [v63.GenericNetworkId, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeys(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[v63.GenericNetworkId, Uint8Array][]>
    getPairs(): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v63.GenericNetworkId): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairs(key1: v63.GenericNetworkId, key2: Uint8Array): Promise<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v63.GenericNetworkId, key2: Uint8Array): AsyncIterable<[k: [v63.GenericNetworkId, Uint8Array], v: bigint][]>
}

export class BridgeProxyTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'BridgeProxy'
    }

    protected getName() {
        return 'Transactions'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '529c3a4707b15a768a1be2b7f8c99840e4aabfe3e516de73c085d8329a9ad46d'
    }

    get asV63(): BridgeProxyTransactionsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface BridgeProxyTransactionsStorageV63 {
    get(key1: [v63.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<(v63.BridgeRequest | undefined)>
    getAll(): Promise<v63.BridgeRequest[]>
    getMany(keys: [[v63.GenericNetworkId, Uint8Array], Uint8Array][]): Promise<(v63.BridgeRequest | undefined)[]>
    getKeys(): Promise<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v63.GenericNetworkId, Uint8Array]): Promise<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeys(key1: [v63.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v63.GenericNetworkId, Uint8Array]): AsyncIterable<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [v63.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[[v63.GenericNetworkId, Uint8Array], Uint8Array][]>
    getPairs(): Promise<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
    getPairs(key1: [v63.GenericNetworkId, Uint8Array]): Promise<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
    getPairs(key1: [v63.GenericNetworkId, Uint8Array], key2: Uint8Array): Promise<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v63.GenericNetworkId, Uint8Array]): AsyncIterable<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
    getPairsPaged(pageSize: number, key1: [v63.GenericNetworkId, Uint8Array], key2: Uint8Array): AsyncIterable<[k: [[v63.GenericNetworkId, Uint8Array], Uint8Array], v: v63.BridgeRequest][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '528249b1b19c80ce4829cb789f6272e9b2eac8a898ffda956ff359869f83a090'
    }

    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    get asV63(): BridgeProxyTransferLimitStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface BridgeProxyTransferLimitStorageV63 {
    get(): Promise<v63.TransferLimitSettings>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  Schedule for consumed transfer limit reduce.
     */
    get asV63(): BridgeProxyTransferLimitUnlockScheduleStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface BridgeProxyTransferLimitUnlockScheduleStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV63(): CeresGovernancePlatformPalletStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresGovernancePlatformPalletStorageVersionStorageV63 {
    get(): Promise<v63.StorageVersion>
}

export class CeresGovernancePlatformPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresGovernancePlatform'
    }

    protected getName() {
        return 'PollData'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '15cbbd5cb0d096a2e62904eec97fa3683b36340edf341f8de1945437573d764b'
    }

    get asV63(): CeresGovernancePlatformPollDataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresGovernancePlatformPollDataStorageV63 {
    get(key: Uint8Array): Promise<v63.PollInfo>
    getAll(): Promise<v63.PollInfo[]>
    getMany(keys: Uint8Array[]): Promise<v63.PollInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.PollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.PollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.PollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.PollInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '9173d95a25234ebe48baeb1a51daf8291918a9b434e54431b06b2cd1f6dbc4f2'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV63(): CeresGovernancePlatformVotingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface CeresGovernancePlatformVotingStorageV63 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<v63.VotingInfo>
    getAll(): Promise<v63.VotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<v63.VotingInfo[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.VotingInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    get asV63(): CeresLaunchpadAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface CeresLaunchpadAuthorityAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for burn fee
     */
    get asV63(): CeresLaunchpadCeresBurnFeeAmountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresLaunchpadCeresBurnFeeAmountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for contribution in ILO
     */
    get asV63(): CeresLaunchpadCeresForContributionInILOStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresLaunchpadCeresForContributionInILOStorageV63 {
    get(): Promise<bigint>
}

export class CeresLaunchpadContributionsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'Contributions'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '237eb32bdfb9ba5649a5186003df98b3645d63740dfe6da2431e4ef225d6adb6'
    }

    get asV63(): CeresLaunchpadContributionsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresLaunchpadContributionsStorageV63 {
    get(key1: v63.AssetId32, key2: Uint8Array): Promise<v63.ContributionInfo>
    getAll(): Promise<v63.ContributionInfo[]>
    getMany(keys: [v63.AssetId32, Uint8Array][]): Promise<v63.ContributionInfo[]>
    getKeys(): Promise<[v63.AssetId32, Uint8Array][]>
    getKeys(key1: v63.AssetId32): Promise<[v63.AssetId32, Uint8Array][]>
    getKeys(key1: v63.AssetId32, key2: Uint8Array): Promise<[v63.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[v63.AssetId32, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32, key2: Uint8Array): AsyncIterable<[v63.AssetId32, Uint8Array][]>
    getPairs(): Promise<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
    getPairs(key1: v63.AssetId32): Promise<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
    getPairs(key1: v63.AssetId32, key2: Uint8Array): Promise<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32, key2: Uint8Array): AsyncIterable<[k: [v63.AssetId32, Uint8Array], v: v63.ContributionInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fee percent on raised funds in successful ILO
     */
    get asV63(): CeresLaunchpadFeePercentOnRaisedFundsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface CeresLaunchpadFeePercentOnRaisedFundsStorageV63 {
    get(): Promise<bigint>
}

export class CeresLaunchpadILOsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'ILOs'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'ca84a1a09dc4d0e7482ffddea595231e8c4bcce744ba2b7a266be8396342b1cc'
    }

    get asV63(): CeresLaunchpadILOsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresLaunchpadILOsStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.ILOInfo | undefined)>
    getAll(): Promise<v63.ILOInfo[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.ILOInfo | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.ILOInfo][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.ILOInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.ILOInfo][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.ILOInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting penalties
     */
    get asV63(): CeresLaunchpadPenaltiesAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account for collecting penalties
 */
export interface CeresLaunchpadPenaltiesAccountStorageV63 {
    get(): Promise<Uint8Array>
}

export class CeresLaunchpadWhitelistedContributorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedContributors'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV63(): CeresLaunchpadWhitelistedContributorsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedContributorsStorageV63 {
    get(): Promise<Uint8Array[]>
}

export class CeresLaunchpadWhitelistedIloOrganizersStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresLaunchpad'
    }

    protected getName() {
        return 'WhitelistedIloOrganizers'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV63(): CeresLaunchpadWhitelistedIloOrganizersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresLaunchpadWhitelistedIloOrganizersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing CERES amount fee
     */
    get asV63(): CeresLiquidityLockerAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface CeresLiquidityLockerAuthorityAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 1
     */
    get asV63(): CeresLiquidityLockerFeesOptionOneAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 1
 */
export interface CeresLiquidityLockerFeesOptionOneAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees from Option 2
     */
    get asV63(): CeresLiquidityLockerFeesOptionTwoAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account for collecting fees from Option 2
 */
export interface CeresLiquidityLockerFeesOptionTwoAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV63(): CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresLiquidityLockerFeesOptionTwoCeresAmountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e923765799e65e5eeadcbc5d6159c57be4d7b0f66ce7fda6f358f2e98eb67079'
    }

    /**
     *  Contains data about lockups for each account
     */
    get asV63(): CeresLiquidityLockerLockerDataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Contains data about lockups for each account
 */
export interface CeresLiquidityLockerLockerDataStorageV63 {
    get(key: Uint8Array): Promise<v63.LockInfo[]>
    getAll(): Promise<v63.LockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v63.LockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.LockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.LockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.LockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.LockInfo[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV63(): CeresLiquidityLockerPalletStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresLiquidityLockerPalletStorageVersionStorageV63 {
    get(): Promise<v63.StorageVersion>
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing remaining rewards
     */
    get asV63(): CeresStakingAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface CeresStakingAuthorityAccountStorageV63 {
    get(): Promise<Uint8Array>
}

export class CeresStakingRewardsRemainingStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'RewardsRemaining'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): CeresStakingRewardsRemainingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresStakingRewardsRemainingStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '50b5f6a0d0df44de77201073b82e298698ffffd86dc6cced006718dba7ffc8c0'
    }

    /**
     *  AccountId -> StakingInfo
     */
    get asV63(): CeresStakingStakersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  AccountId -> StakingInfo
 */
export interface CeresStakingStakersStorageV63 {
    get(key: Uint8Array): Promise<v63.StakingInfo>
    getAll(): Promise<v63.StakingInfo[]>
    getMany(keys: Uint8Array[]): Promise<v63.StakingInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.StakingInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.StakingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.StakingInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.StakingInfo][]>
}

export class CeresStakingTotalDepositedStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresStaking'
    }

    protected getName() {
        return 'TotalDeposited'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): CeresStakingTotalDepositedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresStakingTotalDepositedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing fee
     */
    get asV63(): CeresTokenLockerAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which has permissions for changing fee
 */
export interface CeresTokenLockerAuthorityAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of CERES for locker fees option two
     */
    get asV63(): CeresTokenLockerFeeAmountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface CeresTokenLockerFeeAmountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for collecting fees
     */
    get asV63(): CeresTokenLockerFeesAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account for collecting fees
 */
export interface CeresTokenLockerFeesAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV63(): CeresTokenLockerPalletStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface CeresTokenLockerPalletStorageVersionStorageV63 {
    get(): Promise<v63.StorageVersion>
}

export class CeresTokenLockerTokenLockerDataStorage extends StorageBase {
    protected getPrefix() {
        return 'CeresTokenLocker'
    }

    protected getName() {
        return 'TokenLockerData'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'e4118245f8d3d415793878b8a96bd927121dc142963e1a87c7ca1d6f1f835087'
    }

    get asV63(): CeresTokenLockerTokenLockerDataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface CeresTokenLockerTokenLockerDataStorageV63 {
    get(key: Uint8Array): Promise<v63.TokenLockInfo[]>
    getAll(): Promise<v63.TokenLockInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v63.TokenLockInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.TokenLockInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.TokenLockInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.TokenLockInfo[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV63(): CouncilMembersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV63(): CouncilPrimeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV63(): CouncilProposalCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e0397d935067d8d67b9695c1151f41f307067163ca7fcaee16b4c283803e76c9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV63(): CouncilProposalOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV63 {
    get(key: Uint8Array): Promise<(v63.Call | undefined)>
    getAll(): Promise<v63.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Call][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV63(): CouncilProposalsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV63(): CouncilVotingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV63 {
    get(key: Uint8Array): Promise<(v63.Votes | undefined)>
    getAll(): Promise<v63.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Votes][]>
}

export class DEXAPIEnabledSourceTypesStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXAPI'
    }

    protected getName() {
        return 'EnabledSourceTypes'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV63(): DEXAPIEnabledSourceTypesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DEXAPIEnabledSourceTypesStorageV63 {
    get(): Promise<v63.LiquiditySourceType[]>
}

export class DEXManagerDEXInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DEXManager'
    }

    protected getName() {
        return 'DEXInfos'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '494dff123a3c227cdb05691512a6deb17a90a41b14b3c18babca089a87d64b6a'
    }

    get asV63(): DEXManagerDEXInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DEXManagerDEXInfosStorageV63 {
    get(key: number): Promise<(v63.DEXInfo | undefined)>
    getAll(): Promise<v63.DEXInfo[]>
    getMany(keys: number[]): Promise<(v63.DEXInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.DEXInfo][]>
    getPairs(key: number): Promise<[k: number, v: v63.DEXInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.DEXInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.DEXInfo][]>
}

export class DemeterFarmingPlatformAuthorityAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'AuthorityAccount'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV63(): DemeterFarmingPlatformAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DemeterFarmingPlatformAuthorityAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account for fees
     */
    get asV63(): DemeterFarmingPlatformFeeAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account for fees
 */
export interface DemeterFarmingPlatformFeeAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV63(): DemeterFarmingPlatformPalletStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface DemeterFarmingPlatformPalletStorageVersionStorageV63 {
    get(): Promise<v63.StorageVersion>
}

export class DemeterFarmingPlatformPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'Pools'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '3322eef7d20cbfd46bf81f181224e3f02fd1041ab3f29f9f60b3b7b9221f4038'
    }

    get asV63(): DemeterFarmingPlatformPoolsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DemeterFarmingPlatformPoolsStorageV63 {
    get(key1: v63.AssetId32, key2: v63.AssetId32): Promise<v63.PoolData[]>
    getAll(): Promise<v63.PoolData[][]>
    getMany(keys: [v63.AssetId32, v63.AssetId32][]): Promise<v63.PoolData[][]>
    getKeys(): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
    getPairs(key1: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
    getPairs(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: v63.PoolData[]][]>
}

export class DemeterFarmingPlatformTokenInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'TokenInfos'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'c293db5a1f986c2c9303f85d25385bf1dab66f7f0513d0a14acf885790e9a53d'
    }

    get asV63(): DemeterFarmingPlatformTokenInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DemeterFarmingPlatformTokenInfosStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.TokenInfo | undefined)>
    getAll(): Promise<v63.TokenInfo[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.TokenInfo | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.TokenInfo][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.TokenInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.TokenInfo][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.TokenInfo][]>
}

export class DemeterFarmingPlatformUserInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'DemeterFarmingPlatform'
    }

    protected getName() {
        return 'UserInfos'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '1e0a771d7fcd1d3fd082883b3342ec55cf08b83b3739a9de033c04d65f17bb65'
    }

    get asV63(): DemeterFarmingPlatformUserInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface DemeterFarmingPlatformUserInfosStorageV63 {
    get(key: Uint8Array): Promise<v63.UserInfo[]>
    getAll(): Promise<v63.UserInfo[][]>
    getMany(keys: Uint8Array[]): Promise<v63.UserInfo[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.UserInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.UserInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.UserInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.UserInfo[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV63(): DemocracyBlacklistStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV63(): DemocracyCancellationsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV63(): DemocracyDepositOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV63(): DemocracyLastTabledWasExternalStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV63(): DemocracyLowestUnbakedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV63(): DemocracyNextExternalStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV63 {
    get(): Promise<([v63.Bounded, v63.VoteThreshold] | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV63(): DemocracyPublicPropCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV63(): DemocracyPublicPropsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV63 {
    get(): Promise<[number, v63.Bounded, Uint8Array][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV63(): DemocracyReferendumCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV63(): DemocracyReferendumInfoOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV63 {
    get(key: number): Promise<(v63.ReferendumInfo | undefined)>
    getAll(): Promise<v63.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v63.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v63.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.ReferendumInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV63(): DemocracyVotingOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV63 {
    get(key: Uint8Array): Promise<v63.Voting>
    getAll(): Promise<v63.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v63.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Voting][]>
}

export class ERC20AppAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AppAddresses'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '94b675ea41072b9359087e5adccacf527ed4a9ed9a99f11dba5e13ac035ddf1d'
    }

    get asV63(): ERC20AppAppAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ERC20AppAppAddressesStorageV63 {
    get(key1: bigint, key2: v63.Type_605): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v63.Type_605][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v63.Type_605][]>
    getKeys(key1: bigint): Promise<[bigint, v63.Type_605][]>
    getKeys(key1: bigint, key2: v63.Type_605): Promise<[bigint, v63.Type_605][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v63.Type_605][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v63.Type_605][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v63.Type_605): AsyncIterable<[bigint, v63.Type_605][]>
    getPairs(): Promise<[k: [bigint, v63.Type_605], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v63.Type_605], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v63.Type_605): Promise<[k: [bigint, v63.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v63.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v63.Type_605], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v63.Type_605): AsyncIterable<[k: [bigint, v63.Type_605], v: Uint8Array][]>
}

export class ERC20AppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '4653381b9f9b80b4e96c703f717cbad4e2b31422802d799e5521d5229ef6b117'
    }

    get asV63(): ERC20AppAssetKindsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ERC20AppAssetKindsStorageV63 {
    get(key1: bigint, key2: v63.AssetId32): Promise<(v63.Type_605 | undefined)>
    getAll(): Promise<v63.Type_605[]>
    getMany(keys: [bigint, v63.AssetId32][]): Promise<(v63.Type_605 | undefined)[]>
    getKeys(): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint, key2: v63.AssetId32): Promise<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[bigint, v63.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
    getPairs(key1: bigint, key2: v63.AssetId32): Promise<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[k: [bigint, v63.AssetId32], v: v63.Type_605][]>
}

export class ERC20AppAssetsByAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'AssetsByAddresses'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'cabae4a11d1a8928d6ce6db2352af2e5e57d7d29bb64c87a7a383de8bcd7284e'
    }

    get asV63(): ERC20AppAssetsByAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ERC20AppAssetsByAddressesStorageV63 {
    get(key1: bigint, key2: Uint8Array): Promise<(v63.AssetId32 | undefined)>
    getAll(): Promise<v63.AssetId32[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v63.AssetId32 | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v63.AssetId32][]>
}

export class ERC20AppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '19021d933553128a4a3550a3cd26d6bfe7c74b0a22bc5ca6bc9099781e369dda'
    }

    get asV63(): ERC20AppSidechainPrecisionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ERC20AppSidechainPrecisionStorageV63 {
    get(key1: bigint, key2: v63.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [bigint, v63.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint, key2: v63.AssetId32): Promise<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[bigint, v63.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v63.AssetId32], v: number][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v63.AssetId32], v: number][]>
    getPairs(key1: bigint, key2: v63.AssetId32): Promise<[k: [bigint, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[k: [bigint, v63.AssetId32], v: number][]>
}

export class ERC20AppTokenAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'ERC20App'
    }

    protected getName() {
        return 'TokenAddresses'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '9fef01747a54dcdcec1535e02949fcb28b01f8388694c4fc22fdc9be19173bc8'
    }

    get asV63(): ERC20AppTokenAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ERC20AppTokenAddressesStorageV63 {
    get(key1: bigint, key2: v63.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, v63.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint): Promise<[bigint, v63.AssetId32][]>
    getKeys(key1: bigint, key2: v63.AssetId32): Promise<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[bigint, v63.AssetId32][]>
    getPairs(): Promise<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
    getPairs(key1: bigint, key2: v63.AssetId32): Promise<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: v63.AssetId32): AsyncIterable<[k: [bigint, v63.AssetId32], v: Uint8Array][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV63(): ElectionProviderMultiPhaseCurrentPhaseStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV63 {
    get(): Promise<v63.Phase>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV63(): ElectionProviderMultiPhaseDesiredTargetsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV63(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV63 {
    get(): Promise<(v63.ElectionScore | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV63(): ElectionProviderMultiPhaseQueuedSolutionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV63 {
    get(): Promise<(v63.ReadySolution | undefined)>
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
    get isV63(): boolean {
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
    get asV63(): ElectionProviderMultiPhaseRoundStorageV63 {
        assert(this.isV63)
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
export interface ElectionProviderMultiPhaseRoundStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV63 {
        assert(this.isV63)
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
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV63 {
    get(): Promise<[v63.ElectionScore, number, number][]>
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
    get isV63(): boolean {
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
    get asV63(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV63 {
        assert(this.isV63)
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
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV63 {
        assert(this.isV63)
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
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV63 {
    get(key: number): Promise<(v63.SignedSubmission | undefined)>
    getAll(): Promise<v63.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v63.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v63.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.SignedSubmission][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV63(): ElectionProviderMultiPhaseSnapshotStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV63 {
    get(): Promise<(v63.RoundSnapshot | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV63(): ElectionProviderMultiPhaseSnapshotMetadataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV63 {
    get(): Promise<(v63.SolutionOrSnapshotSize | undefined)>
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
    get isV63(): boolean {
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
    get asV63(): ElectionsPhragmenCandidatesStorageV63 {
        assert(this.isV63)
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
export interface ElectionsPhragmenCandidatesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV63(): ElectionsPhragmenElectionRoundsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsPhragmenElectionRoundsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV63(): ElectionsPhragmenMembersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsPhragmenMembersStorageV63 {
    get(): Promise<v63.SeatHolder[]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV63(): ElectionsPhragmenRunnersUpStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsPhragmenRunnersUpStorageV63 {
    get(): Promise<v63.SeatHolder[]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV63(): ElectionsPhragmenVotingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsPhragmenVotingStorageV63 {
    get(key: Uint8Array): Promise<v63.Voter>
    getAll(): Promise<v63.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v63.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Voter][]>
}

export class EthAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'EthApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f6e63f3fc6a0b70e43f7767d90e82b949b2eb97bf0c14069fb5b49d1210133e5'
    }

    get asV63(): EthAppAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface EthAppAddressesStorageV63 {
    get(key: bigint): Promise<([Uint8Array, v63.AssetId32, number] | undefined)>
    getAll(): Promise<[Uint8Array, v63.AssetId32, number][]>
    getMany(keys: bigint[]): Promise<([Uint8Array, v63.AssetId32, number] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [Uint8Array, v63.AssetId32, number]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [Uint8Array, v63.AssetId32, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [Uint8Array, v63.AssetId32, number]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [Uint8Array, v63.AssetId32, number]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '80e7ebcfba4ea3d2339b3fa00a88c2be174158840f5c46a9fccaf24be1a46f4a'
    }

    /**
     *  Requests made by an account.
     */
    get asV63(): EthBridgeAccountRequestsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Requests made by an account.
 */
export interface EthBridgeAccountRequestsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Thischain authority account.
     */
    get asV63(): EthBridgeAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Thischain authority account.
 */
export interface EthBridgeAuthorityAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
     */
    get asV63(): EthBridgeBridgeAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
 */
export interface EthBridgeBridgeAccountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '355713e400144f415b9b61e2254a9efeb50395baba05604bf6adaa990a4d3b45'
    }

    /**
     *  Smart-contract address on Sidechain.
     */
    get asV63(): EthBridgeBridgeContractAddressStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Smart-contract address on Sidechain.
 */
export interface EthBridgeBridgeContractAddressStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '3031aeed3f8d041e6b91e771fbaeafea93f01e45f18aed4ffe6b3bf95a261f51'
    }

    get asV63(): EthBridgeBridgeSignatureVersionsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface EthBridgeBridgeSignatureVersionsStorageV63 {
    get(key: number): Promise<v63.BridgeSignatureVersion>
    getAll(): Promise<v63.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<v63.BridgeSignatureVersion[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.BridgeSignatureVersion][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '2fe91d4188f8af4130b30883066f5e7b01f1913f81e8e71d1b7b49c61a3d5d5f'
    }

    /**
     *  Bridge status.
     */
    get asV63(): EthBridgeBridgeStatusesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Bridge status.
 */
export interface EthBridgeBridgeStatusesStorageV63 {
    get(key: number): Promise<(v63.BridgeStatus | undefined)>
    getAll(): Promise<v63.BridgeStatus[]>
    getMany(keys: number[]): Promise<(v63.BridgeStatus | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.BridgeStatus][]>
    getPairs(key: number): Promise<[k: number, v: v63.BridgeStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.BridgeStatus][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.BridgeStatus][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '12f7a945d4fbc0b952f64f333ece0fc731504f19e339f04cd8175df719be78f8'
    }

    /**
     *  Used to identify an incoming request by the corresponding load request.
     */
    get asV63(): EthBridgeLoadToIncomingRequestHashStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Used to identify an incoming request by the corresponding load request.
 */
export interface EthBridgeLoadToIncomingRequestHashStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
     *  `RequestsQueue` before migration procedure started.
     */
    get asV63(): EthBridgeMigratingRequestsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Requests migrating from version '0.1.0' to '0.2.0'. These requests should be removed from
 *  `RequestsQueue` before migration procedure started.
 */
export interface EthBridgeMigratingRequestsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next Network ID counter.
     */
    get asV63(): EthBridgeNextNetworkIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Next Network ID counter.
 */
export interface EthBridgeNextNetworkIdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '2fa4eaf8f8f4c5fa25ec1f74077ec31c202b5623aa84fb7abc3db119eac5619d'
    }

    /**
     *  Peer account ID on Thischain.
     */
    get asV63(): EthBridgePeerAccountIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Peer account ID on Thischain.
 */
export interface EthBridgePeerAccountIdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '9732e896cb0dbf7bf56d6dfde250c60ff9f4f69c74ea7ce7a9e834041f84f80c'
    }

    /**
     *  Peer address on Sidechain.
     */
    get asV63(): EthBridgePeerAddressStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Peer address on Sidechain.
 */
export interface EthBridgePeerAddressStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Network peers set.
     */
    get asV63(): EthBridgePeersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Network peers set.
 */
export interface EthBridgePeersStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '4c3a59cc57b46b097da713499cb977af06a9d415a78675aeb9cc7a01064c091e'
    }

    get asV63(): EthBridgePendingBridgeSignatureVersionsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface EthBridgePendingBridgeSignatureVersionsStorageV63 {
    get(key: number): Promise<(v63.BridgeSignatureVersion | undefined)>
    getAll(): Promise<v63.BridgeSignatureVersion[]>
    getMany(keys: number[]): Promise<(v63.BridgeSignatureVersion | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairs(key: number): Promise<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.BridgeSignatureVersion][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.BridgeSignatureVersion][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '8276423868ca2c9f75a371a21955637dc44064d5600123273f17ac3d301b6ce3'
    }

    /**
     *  Used for compatibility with XOR and VAL contracts.
     */
    get asV63(): EthBridgePendingEthPeersSyncStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Used for compatibility with XOR and VAL contracts.
 */
export interface EthBridgePendingEthPeersSyncStorageV63 {
    get(): Promise<v63.EthPeersSync>
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
    get isV63(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  Network pending (being added/removed) peer.
     */
    get asV63(): EthBridgePendingPeerStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Network pending (being added/removed) peer.
 */
export interface EthBridgePendingPeerStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'b3083eb0cf9af664a98c61f4d238f1459c0f39d74d6d6f09c8896e3be0a8ff80'
    }

    /**
     *  Registered asset kind.
     */
    get asV63(): EthBridgeRegisteredAssetStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered asset kind.
 */
export interface EthBridgeRegisteredAssetStorageV63 {
    get(key1: number, key2: v63.AssetId32): Promise<(v63.AssetKind | undefined)>
    getAll(): Promise<v63.AssetKind[]>
    getMany(keys: [number, v63.AssetId32][]): Promise<(v63.AssetKind | undefined)[]>
    getKeys(): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number, key2: v63.AssetId32): Promise<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[number, v63.AssetId32][]>
    getPairs(): Promise<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
    getPairs(key1: number): Promise<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
    getPairs(key1: number, key2: v63.AssetId32): Promise<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
    getPairsPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[k: [number, v63.AssetId32], v: v63.AssetKind][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '31f3ab89a8056378ebff3e30eb6d9f7bb656e7335081ff3a2abc581a5c720828'
    }

    /**
     *  Registered token `AssetId` on Thischain.
     */
    get asV63(): EthBridgeRegisteredSidechainAssetStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered token `AssetId` on Thischain.
 */
export interface EthBridgeRegisteredSidechainAssetStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<(v63.AssetId32 | undefined)>
    getAll(): Promise<v63.AssetId32[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v63.AssetId32 | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.AssetId32][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.AssetId32][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.AssetId32][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '91a1aa7ee9b00300cbd9b0251a207d8d62401c39f2871352e8c1dee325efa6eb'
    }

    /**
     *  Registered asset address on Sidechain.
     */
    get asV63(): EthBridgeRegisteredSidechainTokenStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered asset address on Sidechain.
 */
export interface EthBridgeRegisteredSidechainTokenStorageV63 {
    get(key1: number, key2: v63.AssetId32): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, v63.AssetId32][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number, key2: v63.AssetId32): Promise<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[number, v63.AssetId32][]>
    getPairs(): Promise<[k: [number, v63.AssetId32], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, v63.AssetId32], v: Uint8Array][]>
    getPairs(key1: number, key2: v63.AssetId32): Promise<[k: [number, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v63.AssetId32], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[k: [number, v63.AssetId32], v: Uint8Array][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f9a2dfdb9d8457b2d4c32bd51f878babe7e134c16a62fb8a76cbe59c06a71788'
    }

    /**
     *  Outgoing requests approvals.
     */
    get asV63(): EthBridgeRequestApprovalsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Outgoing requests approvals.
 */
export interface EthBridgeRequestApprovalsStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<v63.SignatureParams[]>
    getAll(): Promise<v63.SignatureParams[][]>
    getMany(keys: [number, Uint8Array][]): Promise<v63.SignatureParams[][]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.SignatureParams[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '783467a44eeb9862d3371681e516ce5dcf85669490ea9de558a35bb294de220d'
    }

    /**
     *  Requests statuses.
     */
    get asV63(): EthBridgeRequestStatusesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Requests statuses.
 */
export interface EthBridgeRequestStatusesStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<(v63.RequestStatus | undefined)>
    getAll(): Promise<v63.RequestStatus[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v63.RequestStatus | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.RequestStatus][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.RequestStatus][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.RequestStatus][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.RequestStatus][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  Requests submission height map (on substrate).
     */
    get asV63(): EthBridgeRequestSubmissionHeightStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Requests submission height map (on substrate).
 */
export interface EthBridgeRequestSubmissionHeightStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd8a5e8971bc06bf0f053bf5f14332d3db494ce23470afc8474c34b146e780e03'
    }

    /**
     *  Registered requests.
     */
    get asV63(): EthBridgeRequestsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered requests.
 */
export interface EthBridgeRequestsStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<(v63.OffchainRequest | undefined)>
    getAll(): Promise<v63.OffchainRequest[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v63.OffchainRequest | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.OffchainRequest][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Registered requests queue handled by off-chain workers.
     */
    get asV63(): EthBridgeRequestsQueueStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered requests queue handled by off-chain workers.
 */
export interface EthBridgeRequestsQueueStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f908ea4fe7e24f099213f31b98f416392e225e6ec493179e3447d5a4809fbb34'
    }

    /**
     *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
     *  contract.
     */
    get asV63(): EthBridgeSidechainAssetPrecisionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
 *  contract.
 */
export interface EthBridgeSidechainAssetPrecisionStorageV63 {
    get(key1: number, key2: v63.AssetId32): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, v63.AssetId32][]): Promise<number[]>
    getKeys(): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number): Promise<[number, v63.AssetId32][]>
    getKeys(key1: number, key2: v63.AssetId32): Promise<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[number, v63.AssetId32][]>
    getPairs(): Promise<[k: [number, v63.AssetId32], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v63.AssetId32], v: number][]>
    getPairs(key1: number, key2: v63.AssetId32): Promise<[k: [number, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v63.AssetId32): AsyncIterable<[k: [number, v63.AssetId32], v: number][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora VAL master contract address.
     */
    get asV63(): EthBridgeValMasterContractAddressStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Sora VAL master contract address.
 */
export interface EthBridgeValMasterContractAddressStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '29a254f9bd2eb3ca10740b8d93c1ac4aaf4085b890c834f2b7850fb612c42290'
    }

    /**
     *  Sora XOR master contract address.
     */
    get asV63(): EthBridgeXorMasterContractAddressStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Sora XOR master contract address.
 */
export interface EthBridgeXorMasterContractAddressStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '71086e2f350a221b3d06b04566a2c978fda99a376c1ac5e6ac9daa10891c4856'
    }

    /**
     *  Best known block.
     */
    get asV63(): EthereumLightClientBestBlockStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Best known block.
 */
export interface EthereumLightClientBestBlockStorageV63 {
    get(key: bigint): Promise<([v63.HeaderId, bigint] | undefined)>
    getAll(): Promise<[v63.HeaderId, bigint][]>
    getMany(keys: bigint[]): Promise<([v63.HeaderId, bigint] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [v63.HeaderId, bigint]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [v63.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [v63.HeaderId, bigint]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [v63.HeaderId, bigint]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '4df06536a31d3a47e8cd804fe51684f73bf4009af886d2b85820fd39591caf09'
    }

    /**
     *  Range of blocks that we want to prune.
     */
    get asV63(): EthereumLightClientBlocksToPruneStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Range of blocks that we want to prune.
 */
export interface EthereumLightClientBlocksToPruneStorageV63 {
    get(key: bigint): Promise<(v63.PruningRange | undefined)>
    getAll(): Promise<v63.PruningRange[]>
    getMany(keys: bigint[]): Promise<(v63.PruningRange | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v63.PruningRange][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v63.PruningRange][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v63.PruningRange][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v63.PruningRange][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'bb0dddb9c476c5caf5bbcebd3d6a7b796b3121332bb0c1b59b2a2bcac1d59c15'
    }

    /**
     *  Best finalized block.
     */
    get asV63(): EthereumLightClientFinalizedBlockStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Best finalized block.
 */
export interface EthereumLightClientFinalizedBlockStorageV63 {
    get(key: bigint): Promise<(v63.HeaderId | undefined)>
    getAll(): Promise<v63.HeaderId[]>
    getMany(keys: bigint[]): Promise<(v63.HeaderId | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v63.HeaderId][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v63.HeaderId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v63.HeaderId][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v63.HeaderId][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '13f0432c3bffd9dc7139ddb892692a3b755984ec4ca08e01d457f4db48113f52'
    }

    /**
     *  Map of imported headers by hash.
     */
    get asV63(): EthereumLightClientHeadersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Map of imported headers by hash.
 */
export interface EthereumLightClientHeadersStorageV63 {
    get(key1: bigint, key2: Uint8Array): Promise<(v63.StoredHeader | undefined)>
    getAll(): Promise<v63.StoredHeader[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(v63.StoredHeader | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: v63.StoredHeader][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '06ae4db4936a5d4ab8dda2a1e8aa81de5b77c1f6148a0d99d2884ca621108b27'
    }

    /**
     *  Map of imported header hashes by number.
     */
    get asV63(): EthereumLightClientHeadersByNumberStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Map of imported header hashes by number.
 */
export interface EthereumLightClientHeadersByNumberStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'de7f3bc1016bbc3db50e6e8f91c6d240565ef935a91fe5bcfa471d6c370fafec'
    }

    /**
     *  Network config
     */
    get asV63(): EthereumLightClientNetworkConfigStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Network config
 */
export interface EthereumLightClientNetworkConfigStorageV63 {
    get(key: bigint): Promise<(v63.NetworkConfig | undefined)>
    getAll(): Promise<v63.NetworkConfig[]>
    getMany(keys: bigint[]): Promise<(v63.NetworkConfig | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v63.NetworkConfig][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v63.NetworkConfig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v63.NetworkConfig][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v63.NetworkConfig][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '249c9c4291c29f152c2de37c4b3fdd1ab1e61fd8e7c808fd84f54736f16ecc92'
    }

    /**
     *  Farmers of the pool. Pool => Farmers
     */
    get asV63(): FarmingPoolFarmersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface FarmingPoolFarmersStorageV63 {
    get(key: Uint8Array): Promise<v63.PoolFarmer[]>
    getAll(): Promise<v63.PoolFarmer[][]>
    getMany(keys: Uint8Array[]): Promise<v63.PoolFarmer[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.PoolFarmer[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.PoolFarmer[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.PoolFarmer[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.PoolFarmer[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    get asV63(): FarmingPoolsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface FarmingPoolsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV63(): GrandpaCurrentSetIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV63(): GrandpaNextForcedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV63(): GrandpaPendingChangeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV63 {
    get(): Promise<(v63.StoredPendingChange | undefined)>
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
    get isV63(): boolean {
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
    get asV63(): GrandpaSetIdSessionStorageV63 {
        assert(this.isV63)
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
export interface GrandpaSetIdSessionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV63(): GrandpaStalledStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV63(): GrandpaStateStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV63 {
    get(): Promise<v63.StoredState>
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    get asV63(): HermesGovernancePlatformAuthorityAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface HermesGovernancePlatformAuthorityAccountStorageV63 {
    get(): Promise<Uint8Array>
}

export class HermesGovernancePlatformHermesPollDataStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'HermesPollData'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '4a73927344032df6712a2911a1487647f31bc63f2577fc7d39388bfb0f0308ea'
    }

    get asV63(): HermesGovernancePlatformHermesPollDataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface HermesGovernancePlatformHermesPollDataStorageV63 {
    get(key: Uint8Array): Promise<(v63.HermesPollInfo | undefined)>
    getAll(): Promise<v63.HermesPollInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v63.HermesPollInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.HermesPollInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.HermesPollInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.HermesPollInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.HermesPollInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e8c421f187831137f6701c59673332ca218f18607faf33b1a48848a34441556b'
    }

    /**
     *  A vote of a particular user for a particular poll
     */
    get asV63(): HermesGovernancePlatformHermesVotingsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesGovernancePlatformHermesVotingsStorageV63 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v63.HermesVotingInfo | undefined)>
    getAll(): Promise<v63.HermesVotingInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v63.HermesVotingInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.HermesVotingInfo][]>
}

export class HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesAmountForCreatingPoll'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesAmountForCreatingPollStorageV63 {
    get(): Promise<bigint>
}

export class HermesGovernancePlatformMinimumHermesVotingAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'HermesGovernancePlatform'
    }

    protected getName() {
        return 'MinimumHermesVotingAmount'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): HermesGovernancePlatformMinimumHermesVotingAmountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface HermesGovernancePlatformMinimumHermesVotingAmountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Pallet storage version
     */
    get asV63(): HermesGovernancePlatformPalletStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Pallet storage version
 */
export interface HermesGovernancePlatformPalletStorageVersionStorageV63 {
    get(): Promise<v63.StorageVersion>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV63(): IdentityIdentityOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV63 {
    get(key: Uint8Array): Promise<(v63.Registration | undefined)>
    getAll(): Promise<v63.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Registration][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV63(): IdentityRegistrarsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV63 {
    get(): Promise<(v63.RegistrarInfo | undefined)[]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV63(): IdentitySubsOfStorageV63 {
        assert(this.isV63)
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
export interface IdentitySubsOfStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV63(): IdentitySuperOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV63 {
    get(key: Uint8Array): Promise<([Uint8Array, v63.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v63.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v63.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v63.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v63.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v63.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v63.Data]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get asV63(): ImOnlineAuthoredBlocksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): ImOnlineHeartbeatAfterStorageV63 {
        assert(this.isV63)
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
export interface ImOnlineHeartbeatAfterStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV63(): ImOnlineKeysStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV63(): ImOnlineReceivedHeartbeatsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV63 {
    get(key1: number, key2: number): Promise<([number, v63.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v63.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v63.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v63.BoundedOpaqueNetworkState]][]>
}

export class IrohaMigrationAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Account'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV63(): IrohaMigrationAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationAccountStorageV63 {
    get(): Promise<(Uint8Array | undefined)>
}

export class IrohaMigrationBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'Balances'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '3348da89bdf5466014a306124750332c00db1e5604dcf237df0e249bc59342e3'
    }

    get asV63(): IrohaMigrationBalancesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationBalancesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'dae54a6ba4e3c01cfb611244e5949762c53e2ea975eca1baeaa51c26f9896c26'
    }

    get asV63(): IrohaMigrationMigratedAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationMigratedAccountsStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '1fe0318a0c07b45c66ee761568acfca2a7719a33e793e4890223d636c6b39091'
    }

    get asV63(): IrohaMigrationPendingMultiSigAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationPendingMultiSigAccountsStorageV63 {
    get(key: string): Promise<v63.PendingMultisigAccount>
    getAll(): Promise<v63.PendingMultisigAccount[]>
    getMany(keys: string[]): Promise<v63.PendingMultisigAccount[]>
    getKeys(): Promise<string[]>
    getKeys(key: string): Promise<string[]>
    getKeysPaged(pageSize: number): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, key: string): AsyncIterable<string[]>
    getPairs(): Promise<[k: string, v: v63.PendingMultisigAccount][]>
    getPairs(key: string): Promise<[k: string, v: v63.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: string, v: v63.PendingMultisigAccount][]>
    getPairsPaged(pageSize: number, key: string): AsyncIterable<[k: string, v: v63.PendingMultisigAccount][]>
}

export class IrohaMigrationPendingReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'IrohaMigration'
    }

    protected getName() {
        return 'PendingReferrals'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '1ba0cc0c2ab7fc4d2b17eda5fa1c2aa9f42f7161e9cc639d47a225a03c36950e'
    }

    get asV63(): IrohaMigrationPendingReferralsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationPendingReferralsStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '850ce950d572c98c30b6b59de1ce3260e87a95f7de365f8b6a9453d7e4039fe7'
    }

    get asV63(): IrohaMigrationPublicKeysStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationPublicKeysStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'a0c0387632acb412d8417fc42bc087b9f1fa6c1f2d2ac21a4d502cc571a90c54'
    }

    get asV63(): IrohaMigrationQuorumsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationQuorumsStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'd523afc93c9a0f4dbc152c5816d8fcb87607740fb04483263145fca5324c809d'
    }

    get asV63(): IrohaMigrationReferrersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface IrohaMigrationReferrersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8610f92d22951c30343ddf3b634b811adae7e0af568a2d6246b360799c08ac9d'
    }

    /**
     *  Latest digest
     */
    get asV63(): LeafProviderLatestDigestStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Latest digest
 */
export interface LeafProviderLatestDigestStorageV63 {
    get(): Promise<(v63.AuxiliaryDigestItem[] | undefined)>
}

export class MigrationAppAddressesStorage extends StorageBase {
    protected getPrefix() {
        return 'MigrationApp'
    }

    protected getName() {
        return 'Addresses'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '3b2b84bd882e55420f90073a16b9916f4f6fcc8bc594cbefc4727a08113e64f6'
    }

    get asV63(): MigrationAppAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MigrationAppAddressesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'ffc087e1323413e73a9729e444bf115bb89bc74cab9f4347c9dc890a14ae8d68'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get asV63(): MmrNodesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface MmrNodesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get asV63(): MmrNumberOfLeavesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface MmrNumberOfLeavesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Latest MMR Root hash.
     */
    get asV63(): MmrRootHashStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Latest MMR Root hash.
 */
export interface MmrRootHashStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get asV63(): MmrLeafBeefyAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Details of current BEEFY authority set.
 */
export interface MmrLeafBeefyAuthoritiesStorageV63 {
    get(): Promise<v63.BeefyAuthoritySet>
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
    get isV63(): boolean {
        return this.getTypeHash() === '4e31661c602c61bd506a823ecb5a2ea8d54298e6ef7feee775bc254fd6075bcb'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get asV63(): MmrLeafBeefyNextAuthoritiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface MmrLeafBeefyNextAuthoritiesStorageV63 {
    get(): Promise<v63.BeefyAuthoritySet>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
     *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
     */
    get asV63(): MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
 *  be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
 */
export interface MulticollateralBondingCurvePoolAlwaysDistributeCoefficientStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === '15b3436e33ecfd7e102d164ef537d53523cd1f78e59aacaa07319af29bf6a78b'
    }

    /**
     *  Reward multipliers for special assets. Asset Id => Reward Multiplier
     */
    get asV63(): MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Reward multipliers for special assets. Asset Id => Reward Multiplier
 */
export interface MulticollateralBondingCurvePoolAssetsWithOptionalRewardMultiplierStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.FixedPoint | undefined)>
    getAll(): Promise<v63.FixedPoint[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.FixedPoint | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.FixedPoint][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.FixedPoint][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.FixedPoint][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
     */
    get asV63(): MulticollateralBondingCurvePoolBaseFeeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%
 */
export interface MulticollateralBondingCurvePoolBaseFeeStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV63(): MulticollateralBondingCurvePoolCollateralReservesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface MulticollateralBondingCurvePoolCollateralReservesStorageV63 {
    get(key: v63.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '40f955200298848e4a22bd095789113e3c02166a0644d704e07d60362a3804e3'
    }

    /**
     *  Accounts that receive 20% buy/sell margin according to predefined proportions
     */
    get asV63(): MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Accounts that receive 20% buy/sell margin according to predefined proportions
 */
export interface MulticollateralBondingCurvePoolDistributionAccountsEntryStorageV63 {
    get(): Promise<v63.DistributionAccounts>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  Collateral Assets allowed to be sold by the token bonding curve
     */
    get asV63(): MulticollateralBondingCurvePoolEnabledTargetsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Collateral Assets allowed to be sold by the token bonding curve
 */
export interface MulticollateralBondingCurvePoolEnabledTargetsStorageV63 {
    get(): Promise<v63.AssetId32[]>
}

export class MulticollateralBondingCurvePoolFreeReservesAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'FreeReservesAccountId'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    get asV63(): MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolFreeReservesAccountIdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account which stores actual PSWAP intended for rewards
     */
    get asV63(): MulticollateralBondingCurvePoolIncentivesAccountIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Account which stores actual PSWAP intended for rewards
 */
export interface MulticollateralBondingCurvePoolIncentivesAccountIdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
     */
    get asV63(): MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL
 */
export interface MulticollateralBondingCurvePoolIncentivisedCurrenciesNumStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Buy price starting constant. This is the price users pay for new XOR.
     */
    get asV63(): MulticollateralBondingCurvePoolInitialPriceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Buy price starting constant. This is the price users pay for new XOR.
 */
export interface MulticollateralBondingCurvePoolInitialPriceStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
     *  however this constant is not modified
     */
    get asV63(): MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
 *  however this constant is not modified
 */
export interface MulticollateralBondingCurvePoolInitialPswapRewardsSupplyStorageV63 {
    get(): Promise<bigint>
}

export class MulticollateralBondingCurvePoolPendingFreeReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PendingFreeReserves'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '41d56122ce80e93912ff89326630a7e78a3770743d4faaaf1a83763cf4ff80db'
    }

    get asV63(): MulticollateralBondingCurvePoolPendingFreeReservesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPendingFreeReservesStorageV63 {
    get(): Promise<[v63.AssetId32, bigint][]>
}

export class MulticollateralBondingCurvePoolPriceChangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'MulticollateralBondingCurvePool'
    }

    protected getName() {
        return 'PriceChangeRate'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    get asV63(): MulticollateralBondingCurvePoolPriceChangeRateStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MulticollateralBondingCurvePoolPriceChangeRateStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Cofficients in buy price function.
     */
    get asV63(): MulticollateralBondingCurvePoolPriceChangeStepStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Cofficients in buy price function.
 */
export interface MulticollateralBondingCurvePoolPriceChangeStepStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI
     */
    get asV63(): MulticollateralBondingCurvePoolReferenceAssetIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI
 */
export interface MulticollateralBondingCurvePoolReferenceAssetIdStorageV63 {
    get(): Promise<v63.AssetId32>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    /**
     *  Technical account used to store collateral tokens.
     */
    get asV63(): MulticollateralBondingCurvePoolReservesAccStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Technical account used to store collateral tokens.
 */
export interface MulticollateralBondingCurvePoolReservesAccStorageV63 {
    get(): Promise<v63.TechAccountId>
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
    get isV63(): boolean {
        return this.getTypeHash() === '3c9c4caf05cc3fd846962b03aafca3eef49a71f81879b4d15b7c6e662da4b97e'
    }

    /**
     *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
     */
    get asV63(): MulticollateralBondingCurvePoolRewardsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
 */
export interface MulticollateralBondingCurvePoolRewardsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
     */
    get asV63(): MulticollateralBondingCurvePoolSellPriceCoefficientStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
 */
export interface MulticollateralBondingCurvePoolSellPriceCoefficientStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of PSWAP owned by accounts
     */
    get asV63(): MulticollateralBondingCurvePoolTotalRewardsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total amount of PSWAP owned by accounts
 */
export interface MulticollateralBondingCurvePoolTotalRewardsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV63(): MultisigMultisigsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV63 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v63.Type_730 | undefined)>
    getAll(): Promise<v63.Type_730[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v63.Type_730 | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.Type_730][]>
}

export class MultisigVerifierPeerKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'PeerKeys'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f5f244fe3426ad4fb05bf161397f7f52ec3a5cbf4f51418cd2f5605097b2e6c4'
    }

    get asV63(): MultisigVerifierPeerKeysStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MultisigVerifierPeerKeysStorageV63 {
    get(key: v63.GenericNetworkId): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: v63.GenericNetworkId[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<v63.GenericNetworkId[]>
    getKeys(key: v63.GenericNetworkId): Promise<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.GenericNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<v63.GenericNetworkId[]>
    getPairs(): Promise<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairs(key: v63.GenericNetworkId): Promise<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: v63.GenericNetworkId): AsyncIterable<[k: v63.GenericNetworkId, v: Uint8Array[]][]>
}

export class MultisigVerifierThisNetworkIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultisigVerifier'
    }

    protected getName() {
        return 'ThisNetworkId'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '023bf7911eb6719a61550d0ecbc989af2e92400d2a595c04afa1f92d4f6bdca6'
    }

    get asV63(): MultisigVerifierThisNetworkIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface MultisigVerifierThisNetworkIdStorageV63 {
    get(): Promise<v63.GenericNetworkId>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV63(): OffencesConcurrentReportsIndexStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV63(): OffencesReportsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV63 {
    get(key: Uint8Array): Promise<(v63.OffenceDetails | undefined)>
    getAll(): Promise<v63.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v63.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.OffenceDetails][]>
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
    get isV63(): boolean {
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
    get asV63(): OffencesReportsByKindIndexStorageV63 {
        assert(this.isV63)
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
export interface OffencesReportsByKindIndexStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'a9a4634dbfaf89d5e8065d6f375312008207fb0df8a769802806756f030fa9f4'
    }

    get asV63(): OracleProxyEnabledOraclesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OracleProxyEnabledOraclesStorageV63 {
    get(): Promise<v63.Oracle[]>
}

export class OracleProxySymbolProvidersStorage extends StorageBase {
    protected getPrefix() {
        return 'OracleProxy'
    }

    protected getName() {
        return 'SymbolProviders'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '59d555c6e6b4211dd00871be545b4b88c9b1437a76b92cc04bb994aa71fff20a'
    }

    get asV63(): OracleProxySymbolProvidersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OracleProxySymbolProvidersStorageV63 {
    get(key: Uint8Array): Promise<(v63.Oracle | undefined)>
    getAll(): Promise<v63.Oracle[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Oracle | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Oracle][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Oracle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Oracle][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Oracle][]>
}

export class OrderBookAggregatedAsksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'AggregatedAsks'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '355b9b5ae25ae1466002e63bcbe67704f0126ec88f18a61f2416a81969a5dded'
    }

    get asV63(): OrderBookAggregatedAsksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookAggregatedAsksStorageV63 {
    get(key: v63.OrderBookId): Promise<[v63.BalanceUnit, v63.BalanceUnit][]>
    getAll(): Promise<[v63.BalanceUnit, v63.BalanceUnit][][]>
    getMany(keys: v63.OrderBookId[]): Promise<[v63.BalanceUnit, v63.BalanceUnit][][]>
    getKeys(): Promise<v63.OrderBookId[]>
    getKeys(key: v63.OrderBookId): Promise<v63.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<v63.OrderBookId[]>
    getPairs(): Promise<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairs(key: v63.OrderBookId): Promise<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairsPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
}

export class OrderBookAggregatedBidsStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'AggregatedBids'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '355b9b5ae25ae1466002e63bcbe67704f0126ec88f18a61f2416a81969a5dded'
    }

    get asV63(): OrderBookAggregatedBidsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookAggregatedBidsStorageV63 {
    get(key: v63.OrderBookId): Promise<[v63.BalanceUnit, v63.BalanceUnit][]>
    getAll(): Promise<[v63.BalanceUnit, v63.BalanceUnit][][]>
    getMany(keys: v63.OrderBookId[]): Promise<[v63.BalanceUnit, v63.BalanceUnit][][]>
    getKeys(): Promise<v63.OrderBookId[]>
    getKeys(key: v63.OrderBookId): Promise<v63.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<v63.OrderBookId[]>
    getPairs(): Promise<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairs(key: v63.OrderBookId): Promise<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
    getPairsPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<[k: v63.OrderBookId, v: [v63.BalanceUnit, v63.BalanceUnit][]][]>
}

export class OrderBookAsksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'Asks'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '5d28e5ec0cc9622e6f86d123c0075fe4092ea8e8faa84e3db4508f4fad1ad1f1'
    }

    get asV63(): OrderBookAsksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookAsksStorageV63 {
    get(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [v63.OrderBookId, v63.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeys(key1: v63.OrderBookId): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeys(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId, key2: v63.BalanceUnit): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getPairs(): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v63.OrderBookId): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId, key2: v63.BalanceUnit): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
}

export class OrderBookBidsStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'Bids'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '5d28e5ec0cc9622e6f86d123c0075fe4092ea8e8faa84e3db4508f4fad1ad1f1'
    }

    get asV63(): OrderBookBidsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookBidsStorageV63 {
    get(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [v63.OrderBookId, v63.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeys(key1: v63.OrderBookId): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeys(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId, key2: v63.BalanceUnit): AsyncIterable<[v63.OrderBookId, v63.BalanceUnit][]>
    getPairs(): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v63.OrderBookId): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairs(key1: v63.OrderBookId, key2: v63.BalanceUnit): Promise<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId, key2: v63.BalanceUnit): AsyncIterable<[k: [v63.OrderBookId, v63.BalanceUnit], v: bigint[]][]>
}

export class OrderBookExpirationsAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'ExpirationsAgenda'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'b8dddbbccdb8ced9aa4d8839505de2ef0f198d0c583f8ca773764bef1cb20abd'
    }

    get asV63(): OrderBookExpirationsAgendaStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookExpirationsAgendaStorageV63 {
    get(key: number): Promise<[v63.OrderBookId, bigint][]>
    getAll(): Promise<[v63.OrderBookId, bigint][][]>
    getMany(keys: number[]): Promise<[v63.OrderBookId, bigint][][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block, so
     *  they might be operated later.
     */
    get asV63(): OrderBookIncompleteExpirationsSinceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block, so
 *  they might be operated later.
 */
export interface OrderBookIncompleteExpirationsSinceStorageV63 {
    get(): Promise<(number | undefined)>
}

export class OrderBookLimitOrdersStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'LimitOrders'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'c16b3777ad9e749f363086a3ab26caca9db71ebfc45584a0fe630ad3f2379566'
    }

    get asV63(): OrderBookLimitOrdersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookLimitOrdersStorageV63 {
    get(key1: v63.OrderBookId, key2: bigint): Promise<(v63.LimitOrder | undefined)>
    getAll(): Promise<v63.LimitOrder[]>
    getMany(keys: [v63.OrderBookId, bigint][]): Promise<(v63.LimitOrder | undefined)[]>
    getKeys(): Promise<[v63.OrderBookId, bigint][]>
    getKeys(key1: v63.OrderBookId): Promise<[v63.OrderBookId, bigint][]>
    getKeys(key1: v63.OrderBookId, key2: bigint): Promise<[v63.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[v63.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, key1: v63.OrderBookId, key2: bigint): AsyncIterable<[v63.OrderBookId, bigint][]>
    getPairs(): Promise<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
    getPairs(key1: v63.OrderBookId): Promise<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
    getPairs(key1: v63.OrderBookId, key2: bigint): Promise<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId): AsyncIterable<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
    getPairsPaged(pageSize: number, key1: v63.OrderBookId, key2: bigint): AsyncIterable<[k: [v63.OrderBookId, bigint], v: v63.LimitOrder][]>
}

export class OrderBookOrderBooksStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'OrderBooks'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'cf55c982801e473e096fdde476a7958d0b6ae0046fecf5d68b347c00d2832023'
    }

    get asV63(): OrderBookOrderBooksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookOrderBooksStorageV63 {
    get(key: v63.OrderBookId): Promise<(v63.OrderBook | undefined)>
    getAll(): Promise<v63.OrderBook[]>
    getMany(keys: v63.OrderBookId[]): Promise<(v63.OrderBook | undefined)[]>
    getKeys(): Promise<v63.OrderBookId[]>
    getKeys(key: v63.OrderBookId): Promise<v63.OrderBookId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.OrderBookId[]>
    getKeysPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<v63.OrderBookId[]>
    getPairs(): Promise<[k: v63.OrderBookId, v: v63.OrderBook][]>
    getPairs(key: v63.OrderBookId): Promise<[k: v63.OrderBookId, v: v63.OrderBook][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.OrderBookId, v: v63.OrderBook][]>
    getPairsPaged(pageSize: number, key: v63.OrderBookId): AsyncIterable<[k: v63.OrderBookId, v: v63.OrderBook][]>
}

export class OrderBookUserLimitOrdersStorage extends StorageBase {
    protected getPrefix() {
        return 'OrderBook'
    }

    protected getName() {
        return 'UserLimitOrders'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '37e179c291c5c9edd3735d10e0ef72338ba4b9c426d02d3c4fd585af631f4fc4'
    }

    get asV63(): OrderBookUserLimitOrdersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface OrderBookUserLimitOrdersStorageV63 {
    get(key1: Uint8Array, key2: v63.OrderBookId): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: [Uint8Array, v63.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<[Uint8Array, v63.OrderBookId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.OrderBookId][]>
    getKeys(key1: Uint8Array, key2: v63.OrderBookId): Promise<[Uint8Array, v63.OrderBookId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.OrderBookId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.OrderBookId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.OrderBookId): AsyncIterable<[Uint8Array, v63.OrderBookId][]>
    getPairs(): Promise<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
    getPairs(key1: Uint8Array, key2: v63.OrderBookId): Promise<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.OrderBookId): AsyncIterable<[k: [Uint8Array, v63.OrderBookId], v: bigint[]][]>
}

export class ParachainBridgeAppAllowedParachainAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'AllowedParachainAssets'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '86cd54395d6bbf8f2f19c821851b7346628829ff06f16e6474c5999c0027ecd1'
    }

    get asV63(): ParachainBridgeAppAllowedParachainAssetsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ParachainBridgeAppAllowedParachainAssetsStorageV63 {
    get(key1: v63.SubNetworkId, key2: number): Promise<v63.AssetId32[]>
    getAll(): Promise<v63.AssetId32[][]>
    getMany(keys: [v63.SubNetworkId, number][]): Promise<v63.AssetId32[][]>
    getKeys(): Promise<[v63.SubNetworkId, number][]>
    getKeys(key1: v63.SubNetworkId): Promise<[v63.SubNetworkId, number][]>
    getKeys(key1: v63.SubNetworkId, key2: number): Promise<[v63.SubNetworkId, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[v63.SubNetworkId, number][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId, key2: number): AsyncIterable<[v63.SubNetworkId, number][]>
    getPairs(): Promise<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
    getPairs(key1: v63.SubNetworkId): Promise<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
    getPairs(key1: v63.SubNetworkId, key2: number): Promise<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId, key2: number): AsyncIterable<[k: [v63.SubNetworkId, number], v: v63.AssetId32[]][]>
}

export class ParachainBridgeAppAssetKindsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'AssetKinds'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f3597faa3edb4e43a673224f23310dc97ef006d0ae47880b07e949cbdcc64152'
    }

    get asV63(): ParachainBridgeAppAssetKindsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ParachainBridgeAppAssetKindsStorageV63 {
    get(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<(v63.Type_605 | undefined)>
    getAll(): Promise<v63.Type_605[]>
    getMany(keys: [v63.SubNetworkId, v63.AssetId32][]): Promise<(v63.Type_605 | undefined)[]>
    getKeys(): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.SubNetworkId): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId, key2: v63.AssetId32): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
    getPairs(key1: v63.SubNetworkId): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
    getPairs(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId, key2: v63.AssetId32): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: v63.Type_605][]>
}

export class ParachainBridgeAppRelaychainAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'RelaychainAsset'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '8f3cb4f654360e0179a243ccda3d99112ea56080d54141a2c21a6bca1ea515ed'
    }

    get asV63(): ParachainBridgeAppRelaychainAssetStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ParachainBridgeAppRelaychainAssetStorageV63 {
    get(key: v63.SubNetworkId): Promise<(v63.AssetId32 | undefined)>
    getAll(): Promise<v63.AssetId32[]>
    getMany(keys: v63.SubNetworkId[]): Promise<(v63.AssetId32 | undefined)[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: v63.AssetId32][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: v63.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: v63.AssetId32][]>
}

export class ParachainBridgeAppSidechainPrecisionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainBridgeApp'
    }

    protected getName() {
        return 'SidechainPrecision'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '297ea364a7fc6eb3da3bc454ce86c79e1a7cfe088917276137b42e83b4137b72'
    }

    get asV63(): ParachainBridgeAppSidechainPrecisionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ParachainBridgeAppSidechainPrecisionStorageV63 {
    get(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [v63.SubNetworkId, v63.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.SubNetworkId): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeys(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.SubNetworkId, key2: v63.AssetId32): AsyncIterable<[v63.SubNetworkId, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
    getPairs(key1: v63.SubNetworkId): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
    getPairs(key1: v63.SubNetworkId, key2: v63.AssetId32): Promise<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
    getPairsPaged(pageSize: number, key1: v63.SubNetworkId, key2: v63.AssetId32): AsyncIterable<[k: [v63.SubNetworkId, v63.AssetId32], v: number][]>
}

export class PermissionsOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Owners'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '29f954775d53c1667af2b6c5beebf9a0ec9235bc714491ffab7869f753b3ac4b'
    }

    get asV63(): PermissionsOwnersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface PermissionsOwnersStorageV63 {
    get(key1: number, key2: v63.Scope): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [number, v63.Scope][]): Promise<Uint8Array[][]>
}

export class PermissionsPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Permissions'
    }

    protected getName() {
        return 'Permissions'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '2e24752437406132f411b5c0fb0ad3e24405640e2b9f66112b580c5fe6827d45'
    }

    get asV63(): PermissionsPermissionsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface PermissionsPermissionsStorageV63 {
    get(key1: Uint8Array, key2: v63.Scope): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: [Uint8Array, v63.Scope][]): Promise<number[][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '86921a28c2bff25852fa80d825bb9d290cc81085c0c151b10b38de01e7a483e2'
    }

    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    get asV63(): PoolXYKAccountPoolsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface PoolXYKAccountPoolsStorageV63 {
    get(key1: Uint8Array, key2: v63.AssetId32): Promise<v63.AssetId32[]>
    getAll(): Promise<v63.AssetId32[][]>
    getMany(keys: [Uint8Array, v63.AssetId32][]): Promise<v63.AssetId32[][]>
    getKeys(): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v63.AssetId32): Promise<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
    getPairs(key1: Uint8Array, key2: v63.AssetId32): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.AssetId32[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '25861e3eb8d593dcefaf31526d48572261838c6694d4aed7e9402b8cb074688d'
    }

    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    get asV63(): PoolXYKPoolProvidersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolXYKPoolProvidersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '910a3bb1caf1e196a7ccf135050c070a21ea4dd14718d9a95f4eeea7cf648521'
    }

    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    get asV63(): PoolXYKPropertiesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PoolXYKPropertiesStorageV63 {
    get(key1: v63.AssetId32, key2: v63.AssetId32): Promise<([Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array][]>
    getMany(keys: [v63.AssetId32, v63.AssetId32][]): Promise<([Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairs(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [Uint8Array, Uint8Array]][]>
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
    get isV63(): boolean {
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
    get asV63(): PoolXYKReservesStorageV63 {
        assert(this.isV63)
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
export interface PoolXYKReservesStorageV63 {
    get(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[bigint, bigint]>
    getAll(): Promise<[bigint, bigint][]>
    getMany(keys: [v63.AssetId32, v63.AssetId32][]): Promise<[bigint, bigint][]>
    getKeys(): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeys(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[v63.AssetId32, v63.AssetId32][]>
    getPairs(): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
    getPairs(key1: v63.AssetId32, key2: v63.AssetId32): Promise<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
    getPairsPaged(pageSize: number, key1: v63.AssetId32, key2: v63.AssetId32): AsyncIterable<[k: [v63.AssetId32, v63.AssetId32], v: [bigint, bigint]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    get asV63(): PoolXYKTotalIssuancesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface PoolXYKTotalIssuancesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV63(): PreimagePreimageForStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface PreimagePreimageForStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV63(): PreimageStatusForStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV63 {
    get(key: Uint8Array): Promise<(v63.Type_827 | undefined)>
    getAll(): Promise<v63.Type_827[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Type_827 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Type_827][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Type_827][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Type_827][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Type_827][]>
}

export class PriceToolsPriceInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceTools'
    }

    protected getName() {
        return 'PriceInfos'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '96f6555f64c75ef0a7bb3fe51bc47315e7e8a8875eb6c54d9d729b68555db30e'
    }

    get asV63(): PriceToolsPriceInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface PriceToolsPriceInfosStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.AggregatedPriceInfo | undefined)>
    getAll(): Promise<v63.AggregatedPriceInfo[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.AggregatedPriceInfo | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.AggregatedPriceInfo][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.AggregatedPriceInfo][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.AggregatedPriceInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Amount of incentive tokens to be burned on each distribution.
     */
    get asV63(): PswapDistributionBurnRateStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of incentive tokens to be burned on each distribution.
 */
export interface PswapDistributionBurnRateStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === '55f990237a70f0c13e17944664b6d84f9e9dfa7399201c400580ad01364f5679'
    }

    /**
     *  (Burn Rate Increase Delta, Burn Rate Max)
     */
    get asV63(): PswapDistributionBurnUpdateInfoStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  (Burn Rate Increase Delta, Burn Rate Max)
 */
export interface PswapDistributionBurnUpdateInfoStorageV63 {
    get(): Promise<[v63.FixedPoint, v63.FixedPoint]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Fraction of PSWAP that could be buy backed to XST
     */
    get asV63(): PswapDistributionBuyBackXSTFractionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Fraction of PSWAP that could be buy backed to XST
 */
export interface PswapDistributionBuyBackXSTFractionStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e365f94b43a2babdffb536594311f62361cc55ba0f1a6f5f0b5fbd86711c99b1'
    }

    /**
     *  Sum of all shares of incentive token owners.
     */
    get asV63(): PswapDistributionClaimableSharesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Sum of all shares of incentive token owners.
 */
export interface PswapDistributionClaimableSharesStorageV63 {
    get(): Promise<v63.FixedPoint>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f6e17663055000a8cbfc548a6af4ea3e45e641e00411282adcc669441724cb4d'
    }

    /**
     *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
     */
    get asV63(): PswapDistributionShareholderAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
 */
export interface PswapDistributionShareholderAccountsStorageV63 {
    get(key: Uint8Array): Promise<v63.FixedPoint>
    getAll(): Promise<v63.FixedPoint[]>
    getMany(keys: Uint8Array[]): Promise<v63.FixedPoint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.FixedPoint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.FixedPoint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.FixedPoint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.FixedPoint][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '35ad191b773a1a6e1f8e386eed0f70149f4111fd86cd85b3ed027e57010babb1'
    }

    /**
     *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
     *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
     */
    get asV63(): PswapDistributionSubscribedAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Store for information about accounts containing fees, that participate in incentive distribution mechanism.
 *  Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
 */
export interface PswapDistributionSubscribedAccountsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV63(): RandomnessCollectiveFlipRandomMaterialStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV63 {
    get(): Promise<Uint8Array[]>
}

export class ReferralsReferralsStorage extends StorageBase {
    protected getPrefix() {
        return 'Referrals'
    }

    protected getName() {
        return 'Referrals'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
    }

    get asV63(): ReferralsReferralsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ReferralsReferralsStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    get asV63(): ReferralsReferrerBalancesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ReferralsReferrerBalancesStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    get asV63(): ReferralsReferrersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface ReferralsReferrersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    get asV63(): RewardsCurrentClaimableValStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface RewardsCurrentClaimableValStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '40dee5301d47440e1915385db120922ca14fcee4870cb58962d0faeca6e70604'
    }

    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    get asV63(): RewardsEthAddressesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface RewardsEthAddressesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    get asV63(): RewardsMigrationPendingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface RewardsMigrationPendingStorageV63 {
    get(): Promise<boolean>
}

export class RewardsPswapFarmOwnersStorage extends StorageBase {
    protected getPrefix() {
        return 'Rewards'
    }

    protected getName() {
        return 'PswapFarmOwners'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV63(): RewardsPswapFarmOwnersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface RewardsPswapFarmOwnersStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'ecf6de9663572f26ccba4e31898894dc37eb9eab0e872fdf148b68ff4b5aaa51'
    }

    get asV63(): RewardsPswapWaifuOwnersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface RewardsPswapWaifuOwnersStorageV63 {
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

    get isV63(): boolean {
        return this.getTypeHash() === 'e4f6281a7dab8ee982f1ecb211a6059f823a6c9e8bd9aa4205aa1c989df3a74a'
    }

    get asV63(): RewardsReservesAccStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface RewardsReservesAccStorageV63 {
    get(): Promise<v63.TechAccountId>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    get asV63(): RewardsTotalClaimableValStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface RewardsTotalClaimableValStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    get asV63(): RewardsTotalValRewardsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface RewardsTotalValRewardsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'ecc68acda02cc8f77850a99cfbd18a1d08c36d877d8b5986e0a1f0db4eaefd2c'
    }

    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    get asV63(): RewardsUmiNftClaimedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface RewardsUmiNftClaimedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f811bbf14795bfbb2d48b655363943f543be46cea31a2ecbcf364a7b23386259'
    }

    /**
     *  UMI NFT receivers storage
     */
    get asV63(): RewardsUmiNftReceiversStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  UMI NFT receivers storage
 */
export interface RewardsUmiNftReceiversStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd0e9d55fbe42f88ef385a832da65fec5d3ba91129b6e3296ab8a566b0e3bdf30'
    }

    /**
     *  The storage of available UMI NFTs.
     */
    get asV63(): RewardsUmiNftsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The storage of available UMI NFTs.
 */
export interface RewardsUmiNftsStorageV63 {
    get(): Promise<v63.AssetId32[]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of VAL burned since last vesting
     */
    get asV63(): RewardsValBurnedSinceLastVestingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface RewardsValBurnedSinceLastVestingStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '0536eb37be29c8b1e5dff115694b293ec3ecf2cbefa233afcb0ceaecf7840723'
    }

    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    get asV63(): RewardsValOwnersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface RewardsValOwnersStorageV63 {
    get(key: Uint8Array): Promise<v63.RewardInfo>
    getAll(): Promise<v63.RewardInfo[]>
    getMany(keys: Uint8Array[]): Promise<v63.RewardInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.RewardInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.RewardInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.RewardInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.RewardInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '77c856184db4f799c9a20a12a5598ed25f97430da580aed6c66e0c02ba298685'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV63(): SchedulerAgendaStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV63 {
    get(key: number): Promise<(v63.Scheduled | undefined)[]>
    getAll(): Promise<(v63.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v63.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v63.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v63.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v63.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v63.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV63(): SchedulerIncompleteSinceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV63(): SchedulerLookupStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV63(): SessionCurrentIndexStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asV63(): SessionDisabledValidatorsStorageV63 {
        assert(this.isV63)
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
export interface SessionDisabledValidatorsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV63(): SessionKeyOwnerStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '6108e83622ab26c07cbbe2e10fefc83d1d48217fa5e5c0e670c57839e349da52'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV63(): SessionNextKeysStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV63 {
    get(key: Uint8Array): Promise<(v63.SessionKeys | undefined)>
    getAll(): Promise<v63.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v63.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.SessionKeys][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV63(): SessionQueuedChangedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'afa050130a79f0e712375751e7b359ca34764df069b74eaba6288cbdd4791e71'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV63(): SessionQueuedKeysStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV63 {
    get(): Promise<[Uint8Array, v63.SessionKeys][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV63(): SessionValidatorsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get asV63(): StakingActiveEraStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface StakingActiveEraStorageV63 {
    get(): Promise<(v63.ActiveEraInfo | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV63(): StakingBondedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingBondedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV63(): StakingBondedErasStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV63(): StakingCanceledSlashPayoutStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get asV63(): StakingChillThresholdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV63(): StakingCounterForNominatorsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForNominatorsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV63(): StakingCounterForValidatorsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForValidatorsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV63(): StakingCurrentEraStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get asV63(): StakingCurrentPlannedSessionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of VAL burned during this era.
     */
    get asV63(): StakingEraValBurnedStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The amount of VAL burned during this era.
 */
export interface StakingEraValBurnedStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV63(): StakingErasRewardPointsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV63 {
    get(key: number): Promise<v63.EraRewardPoints>
    getAll(): Promise<v63.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v63.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v63.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.EraRewardPoints][]>
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
    get isV63(): boolean {
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
    get asV63(): StakingErasStakersStorageV63 {
        assert(this.isV63)
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
export interface StakingErasStakersStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<v63.Exposure>
    getAll(): Promise<v63.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v63.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
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
    get isV63(): boolean {
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
    get asV63(): StakingErasStakersClippedStorageV63 {
        assert(this.isV63)
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
export interface StakingErasStakersClippedStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<v63.Exposure>
    getAll(): Promise<v63.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v63.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.Exposure][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get asV63(): StakingErasStartSessionIndexStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface StakingErasStartSessionIndexStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV63(): StakingErasTotalStakeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV63(): StakingErasValidatorPrefsStorageV63 {
        assert(this.isV63)
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
export interface StakingErasValidatorPrefsStorageV63 {
    get(key1: number, key2: Uint8Array): Promise<v63.ValidatorPrefs>
    getAll(): Promise<v63.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v63.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v63.ValidatorPrefs][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV63(): StakingErasValidatorRewardStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV63(): StakingForceEraStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV63 {
    get(): Promise<v63.Forcing>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV63(): StakingInvulnerablesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV63(): StakingLedgerStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV63 {
    get(key: Uint8Array): Promise<(v63.StakingLedger | undefined)>
    getAll(): Promise<v63.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v63.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.StakingLedger][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV63(): StakingMaxNominatorsCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV63(): StakingMaxValidatorsCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV63(): StakingMinCommissionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV63(): StakingMinNominatorBondStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV63(): StakingMinValidatorBondStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV63(): StakingMinimumActiveStakeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV63(): StakingMinimumValidatorCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV63(): StakingNominatorSlashInEraStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): StakingNominatorsStorageV63 {
        assert(this.isV63)
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
export interface StakingNominatorsStorageV63 {
    get(key: Uint8Array): Promise<(v63.Nominations | undefined)>
    getAll(): Promise<v63.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Nominations][]>
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
    get isV63(): boolean {
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
    get asV63(): StakingOffendingValidatorsStorageV63 {
        assert(this.isV63)
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
export interface StakingOffendingValidatorsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV63(): StakingPayeeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingPayeeStorageV63 {
    get(key: Uint8Array): Promise<v63.RewardDestination>
    getAll(): Promise<v63.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v63.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.RewardDestination][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV63(): StakingSlashRewardFractionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV63(): StakingSlashingSpansStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV63 {
    get(key: Uint8Array): Promise<(v63.SlashingSpans | undefined)>
    getAll(): Promise<v63.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v63.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.SlashingSpans][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV63(): StakingSpanSlashStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV63 {
    get(key: [Uint8Array, number]): Promise<v63.SpanRecord>
    getAll(): Promise<v63.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v63.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v63.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v63.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v63.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v63.SpanRecord][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e50373253e08a19a381d5580f2e767cdc52933ee85b8bb4727f9f66cac117cae'
    }

    /**
     *  The time span since genesis, incremented at the end of each era.
     */
    get asV63(): StakingTimeSinceGenesisStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The time span since genesis, incremented at the end of each era.
 */
export interface StakingTimeSinceGenesisStorageV63 {
    get(): Promise<v63.DurationWrapper>
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
    get isV63(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV63(): StakingUnappliedSlashesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV63 {
    get(key: number): Promise<v63.UnappliedSlash[]>
    getAll(): Promise<v63.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v63.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v63.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v63.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v63.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v63.UnappliedSlash[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of active validators.
     */
    get asV63(): StakingValidatorCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The ideal number of active validators.
 */
export interface StakingValidatorCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV63(): StakingValidatorSlashInEraStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV63(): StakingValidatorsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingValidatorsStorageV63 {
    get(key: Uint8Array): Promise<v63.ValidatorPrefs>
    getAll(): Promise<v63.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v63.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.ValidatorPrefs][]>
}

export class SubstrateBridgeInboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeInboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV63(): SubstrateBridgeInboundChannelChannelNoncesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface SubstrateBridgeInboundChannelChannelNoncesStorageV63 {
    get(key: v63.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
}

export class SubstrateBridgeOutboundChannelChannelNoncesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubstrateBridgeOutboundChannel'
    }

    protected getName() {
        return 'ChannelNonces'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '81557a11b27f627729a12f57f72a2d0fab91e8fef67bbddef95ee874e43d7d46'
    }

    get asV63(): SubstrateBridgeOutboundChannelChannelNoncesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface SubstrateBridgeOutboundChannelChannelNoncesStorageV63 {
    get(key: v63.SubNetworkId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.SubNetworkId[]): Promise<bigint[]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: bigint][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Interval between committing messages.
     */
    get asV63(): SubstrateBridgeOutboundChannelIntervalStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Interval between committing messages.
 */
export interface SubstrateBridgeOutboundChannelIntervalStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '12598e9ed710edd17fbbc1e4bbd7c9c8d7c1b44920a082933852de96bb889e9c'
    }

    /**
     *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
     *  (to keep correct value in [QueuesTotalGas]).
     */
    get asV63(): SubstrateBridgeOutboundChannelMessageQueuesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Messages waiting to be committed. To update the queue, use `append_message_queue` and `take_message_queue` methods
 *  (to keep correct value in [QueuesTotalGas]).
 */
export interface SubstrateBridgeOutboundChannelMessageQueuesStorageV63 {
    get(key: v63.SubNetworkId): Promise<v63.BridgeMessage[]>
    getAll(): Promise<v63.BridgeMessage[][]>
    getMany(keys: v63.SubNetworkId[]): Promise<v63.BridgeMessage[][]>
    getKeys(): Promise<v63.SubNetworkId[]>
    getKeys(key: v63.SubNetworkId): Promise<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.SubNetworkId[]>
    getKeysPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<v63.SubNetworkId[]>
    getPairs(): Promise<[k: v63.SubNetworkId, v: v63.BridgeMessage[]][]>
    getPairs(key: v63.SubNetworkId): Promise<[k: v63.SubNetworkId, v: v63.BridgeMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.SubNetworkId, v: v63.BridgeMessage[]][]>
    getPairsPaged(pageSize: number, key: v63.SubNetworkId): AsyncIterable<[k: v63.SubNetworkId, v: v63.BridgeMessage[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV63(): SudoKeyStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV63(): SystemAccountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV63 {
    get(key: Uint8Array): Promise<v63.AccountInfo>
    getAll(): Promise<v63.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v63.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.AccountInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV63(): SystemAllExtrinsicsLenStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV63(): SystemBlockHashStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV63(): SystemBlockWeightStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV63 {
    get(): Promise<v63.PerDispatchClass>
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
    get isV63(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV63(): SystemDigestStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV63 {
    get(): Promise<v63.Digest>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV63(): SystemEventCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): SystemEventTopicsStorageV63 {
        assert(this.isV63)
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
export interface SystemEventTopicsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '654e11925907f9f2426d7aaa80303d61d59afec1ec161cc8dd9478a06cd7c275'
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
    get asV63(): SystemEventsStorageV63 {
        assert(this.isV63)
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
export interface SystemEventsStorageV63 {
    get(): Promise<v63.EventRecord[]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV63(): SystemExecutionPhaseStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV63 {
    get(): Promise<(v63.Type_200 | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV63(): SystemExtrinsicCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV63(): SystemExtrinsicDataStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV63(): SystemLastRuntimeUpgradeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV63 {
    get(): Promise<(v63.LastRuntimeUpgradeInfo | undefined)>
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV63(): SystemNumberStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV63(): SystemParentHashStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV63(): SystemUpgradedToTripleRefCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV63(): SystemUpgradedToU32RefCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'c878da98ba9c031d571b432ade6370b723cbbc8f237ef1939ac0c4c6ecfa87da'
    }

    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    get asV63(): TechnicalTechAccountsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechnicalTechAccountsStorageV63 {
    get(key: Uint8Array): Promise<(v63.TechAccountId | undefined)>
    getAll(): Promise<v63.TechAccountId[]>
    getMany(keys: Uint8Array[]): Promise<(v63.TechAccountId | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.TechAccountId][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.TechAccountId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.TechAccountId][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.TechAccountId][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV63(): TechnicalCommitteeMembersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV63(): TechnicalCommitteePrimeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV63(): TechnicalCommitteeProposalCountStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'e0397d935067d8d67b9695c1151f41f307067163ca7fcaee16b4c283803e76c9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV63(): TechnicalCommitteeProposalOfStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV63 {
    get(key: Uint8Array): Promise<(v63.Call | undefined)>
    getAll(): Promise<v63.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Call][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV63(): TechnicalCommitteeProposalsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV63(): TechnicalCommitteeVotingStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV63 {
    get(key: Uint8Array): Promise<(v63.Votes | undefined)>
    getAll(): Promise<v63.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v63.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Votes][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV63(): TechnicalMembershipMembersStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV63(): TechnicalMembershipPrimeStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV63(): TimestampDidUpdateStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV63(): TimestampNowStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV63 {
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
    get isV63(): boolean {
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
    get asV63(): TokensAccountsStorageV63 {
        assert(this.isV63)
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
export interface TokensAccountsStorageV63 {
    get(key1: Uint8Array, key2: v63.AssetId32): Promise<v63.Type_665>
    getAll(): Promise<v63.Type_665[]>
    getMany(keys: [Uint8Array, v63.AssetId32][]): Promise<v63.Type_665[]>
    getKeys(): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v63.AssetId32): Promise<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
    getPairs(key1: Uint8Array, key2: v63.AssetId32): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_665][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'bfd7ec9023cb1f693975281c68fc1fc4cf366a9747bc836a3c98afc37b1c0388'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV63(): TokensLocksStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV63 {
    get(key1: Uint8Array, key2: v63.AssetId32): Promise<v63.Type_663[]>
    getAll(): Promise<v63.Type_663[][]>
    getMany(keys: [Uint8Array, v63.AssetId32][]): Promise<v63.Type_663[][]>
    getKeys(): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v63.AssetId32): Promise<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
    getPairs(key1: Uint8Array, key2: v63.AssetId32): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.Type_663[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '64fe379b73bd0117b4a793327bdb630f8582bc9c808e76187dff5f6b668b1576'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV63(): TokensReservesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface TokensReservesStorageV63 {
    get(key1: Uint8Array, key2: v63.AssetId32): Promise<v63.ReserveData[]>
    getAll(): Promise<v63.ReserveData[][]>
    getMany(keys: [Uint8Array, v63.AssetId32][]): Promise<v63.ReserveData[][]>
    getKeys(): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v63.AssetId32][]>
    getKeys(key1: Uint8Array, key2: v63.AssetId32): Promise<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[Uint8Array, v63.AssetId32][]>
    getPairs(): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
    getPairs(key1: Uint8Array, key2: v63.AssetId32): Promise<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v63.AssetId32): AsyncIterable<[k: [Uint8Array, v63.AssetId32], v: v63.ReserveData[]][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV63(): TokensTotalIssuanceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV63 {
    get(key: v63.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
}

export class TradingPairEnabledSourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'EnabledSources'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'a6aecb7ca8096876d568cf8b4bc04f0f7f7d3ffe082d8e1b7017448e9cf1d5c8'
    }

    get asV63(): TradingPairEnabledSourcesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface TradingPairEnabledSourcesStorageV63 {
    get(key1: number, key2: v63.TradingPair): Promise<(v63.LiquiditySourceType[] | undefined)>
    getAll(): Promise<v63.LiquiditySourceType[][]>
    getMany(keys: [number, v63.TradingPair][]): Promise<(v63.LiquiditySourceType[] | undefined)[]>
    getKeys(): Promise<[number, v63.TradingPair][]>
    getKeys(key1: number): Promise<[number, v63.TradingPair][]>
    getKeys(key1: number, key2: v63.TradingPair): Promise<[number, v63.TradingPair][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v63.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v63.TradingPair][]>
    getKeysPaged(pageSize: number, key1: number, key2: v63.TradingPair): AsyncIterable<[number, v63.TradingPair][]>
    getPairs(): Promise<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
    getPairs(key1: number): Promise<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
    getPairs(key1: number, key2: v63.TradingPair): Promise<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v63.TradingPair): AsyncIterable<[k: [number, v63.TradingPair], v: v63.LiquiditySourceType[]][]>
}

export class TradingPairLockedLiquiditySourcesStorage extends StorageBase {
    protected getPrefix() {
        return 'TradingPair'
    }

    protected getName() {
        return 'LockedLiquiditySources'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '40ff80c97aa9e77fa3e488210b0244a6e903dcb8bb2bab96195ce9012cb444a5'
    }

    get asV63(): TradingPairLockedLiquiditySourcesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface TradingPairLockedLiquiditySourcesStorageV63 {
    get(): Promise<v63.LiquiditySourceType[]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): TransactionPaymentNextFeeMultiplierStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV63 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV63(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV63(): TransactionPaymentStorageVersionStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV63 {
    get(): Promise<v63.Releases>
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
    get isV63(): boolean {
        return this.getTypeHash() === '4b5d49e82b760937552ae22f16177bfa396b3c8f32469fac40efaf42738bbf8e'
    }

    /**
     *  Information about crowdloan
     */
    get asV63(): VestedRewardsCrowdloanInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Information about crowdloan
 */
export interface VestedRewardsCrowdloanInfosStorageV63 {
    get(key: Uint8Array): Promise<(v63.CrowdloanInfo | undefined)>
    getAll(): Promise<v63.CrowdloanInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v63.CrowdloanInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.CrowdloanInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.CrowdloanInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.CrowdloanInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.CrowdloanInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '9ba63c4324aab6be9eb9243aeb76282adc876a75a16f7647d197b8f0a224d3bc'
    }

    /**
     *  Information about crowdloan rewards claimed by user
     */
    get asV63(): VestedRewardsCrowdloanUserInfosStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface VestedRewardsCrowdloanUserInfosStorageV63 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v63.CrowdloanUserInfo | undefined)>
    getAll(): Promise<v63.CrowdloanUserInfo[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v63.CrowdloanUserInfo | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v63.CrowdloanUserInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'a065205d3ebbb157b5b0e521a08365c0ad77257b3c4c8b3388dbabdcb82e3e24'
    }

    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    get asV63(): VestedRewardsRewardsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface VestedRewardsRewardsStorageV63 {
    get(key: Uint8Array): Promise<v63.Type_748>
    getAll(): Promise<v63.Type_748[]>
    getMany(keys: Uint8Array[]): Promise<v63.Type_748[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.Type_748][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.Type_748][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.Type_748][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.Type_748][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    get asV63(): VestedRewardsTotalRewardsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface VestedRewardsTotalRewardsStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cf8137723f51c40bc1d70ebf23210228540088004e8562bdf97e01fd47be739b'
    }

    /**
     *  Current reserves balance for collateral tokens, used for client usability.
     */
    get asV63(): XSTPoolCollateralReservesStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Current reserves balance for collateral tokens, used for client usability.
 */
export interface XSTPoolCollateralReservesStorageV63 {
    get(key: v63.AssetId32): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v63.AssetId32[]): Promise<bigint[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: bigint][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'ae88fbc2f24db5dbf123749f07478fa3632354ae3d71f37fc65cfa26fb149933'
    }

    /**
     *  Reference symbols and their synthetic assets.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
     */
    get asV63(): XSTPoolEnabledSymbolsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Reference symbols and their synthetic assets.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSynthetics`].
 */
export interface XSTPoolEnabledSymbolsStorageV63 {
    get(key: Uint8Array): Promise<(v63.AssetId32 | undefined)>
    getAll(): Promise<v63.AssetId32[]>
    getMany(keys: Uint8Array[]): Promise<(v63.AssetId32 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v63.AssetId32][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v63.AssetId32][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v63.AssetId32][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v63.AssetId32][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === '11652b8a4e128438a7255df00af9e544ec8cbae4470f9218265bb68bb0777c99'
    }

    /**
     *  Synthetic assets and their reference symbols.
     * 
     *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
     */
    get asV63(): XSTPoolEnabledSyntheticsStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Synthetic assets and their reference symbols.
 * 
 *  It's a programmer responsibility to keep this collection consistent with [`EnabledSymbols`].
 */
export interface XSTPoolEnabledSyntheticsStorageV63 {
    get(key: v63.AssetId32): Promise<(v63.SyntheticInfo | undefined)>
    getAll(): Promise<v63.SyntheticInfo[]>
    getMany(keys: v63.AssetId32[]): Promise<(v63.SyntheticInfo | undefined)[]>
    getKeys(): Promise<v63.AssetId32[]>
    getKeys(key: v63.AssetId32): Promise<v63.AssetId32[]>
    getKeysPaged(pageSize: number): AsyncIterable<v63.AssetId32[]>
    getKeysPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<v63.AssetId32[]>
    getPairs(): Promise<[k: v63.AssetId32, v: v63.SyntheticInfo][]>
    getPairs(key: v63.AssetId32): Promise<[k: v63.AssetId32, v: v63.SyntheticInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v63.AssetId32, v: v63.SyntheticInfo][]>
    getPairsPaged(pageSize: number, key: v63.AssetId32): AsyncIterable<[k: v63.AssetId32, v: v63.SyntheticInfo][]>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'cdb0230a56a975ab1148a414bd233e5bc34ec597f50a99f36ef72f8bb6faf13d'
    }

    /**
     *  Asset that is used to compare collateral assets by value, e.g., DAI.
     */
    get asV63(): XSTPoolReferenceAssetIdStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Asset that is used to compare collateral assets by value, e.g., DAI.
 */
export interface XSTPoolReferenceAssetIdStorageV63 {
    get(): Promise<v63.AssetId32>
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Floor price for the synthetic base asset.
     */
    get asV63(): XSTPoolSyntheticBaseAssetFloorPriceStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  Floor price for the synthetic base asset.
 */
export interface XSTPoolSyntheticBaseAssetFloorPriceStorageV63 {
    get(): Promise<bigint>
}

export class XorFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'XorFee'
    }

    protected getName() {
        return 'Multiplier'
    }

    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV63(): XorFeeMultiplierStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

export interface XorFeeMultiplierStorageV63 {
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
    get isV63(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    get asV63(): XorFeeXorToValStorageV63 {
        assert(this.isV63)
        return this as any
    }
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorFeeXorToValStorageV63 {
    get(): Promise<bigint>
}
