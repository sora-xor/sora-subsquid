import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v84 from '../v84'

export const liquidatedThisBlock =  {
    /**
     *  Flag indicates that liquidation took place in this block. Only one liquidation per block is
     *  allowed, the flag is dropped every block.
     */
    v84: new StorageType('Kensetsu.LiquidatedThisBlock', 'Default', [], sts.boolean()) as LiquidatedThisBlockV84,
}

/**
 *  Flag indicates that liquidation took place in this block. Only one liquidation per block is
 *  allowed, the flag is dropped every block.
 */
export interface LiquidatedThisBlockV84  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const badDebt =  {
    /**
     *  System bad debt, the amount of KUSD not secured with collateral.
     */
    v84: new StorageType('Kensetsu.BadDebt', 'Default', [], sts.bigint()) as BadDebtV84,
}

/**
 *  System bad debt, the amount of KUSD not secured with collateral.
 */
export interface BadDebtV84  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const collateralInfos =  {
    /**
     *  Parametes for collaterals, include risk parameters and interest recalculation coefficients
     */
    v84: new StorageType('Kensetsu.CollateralInfos', 'Optional', [v84.AssetId32], v84.CollateralInfo) as CollateralInfosV84,
}

/**
 *  Parametes for collaterals, include risk parameters and interest recalculation coefficients
 */
export interface CollateralInfosV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v84.AssetId32): Promise<(v84.CollateralInfo | undefined)>
    getMany(block: Block, keys: v84.AssetId32[]): Promise<(v84.CollateralInfo | undefined)[]>
    getKeys(block: Block): Promise<v84.AssetId32[]>
    getKeys(block: Block, key: v84.AssetId32): Promise<v84.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v84.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v84.AssetId32): AsyncIterable<v84.AssetId32[]>
    getPairs(block: Block): Promise<[k: v84.AssetId32, v: (v84.CollateralInfo | undefined)][]>
    getPairs(block: Block, key: v84.AssetId32): Promise<[k: v84.AssetId32, v: (v84.CollateralInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v84.AssetId32, v: (v84.CollateralInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v84.AssetId32): AsyncIterable<[k: v84.AssetId32, v: (v84.CollateralInfo | undefined)][]>
}

export const borrowTax =  {
    /**
     *  Risk parameter
     *  Borrows tax to buy back and burn KEN
     */
    v84: new StorageType('Kensetsu.BorrowTax', 'Default', [], v84.Percent) as BorrowTaxV84,
}

/**
 *  Risk parameter
 *  Borrows tax to buy back and burn KEN
 */
export interface BorrowTaxV84  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v84.Percent
    get(block: Block): Promise<(v84.Percent | undefined)>
}

export const liquidationPenalty =  {
    /**
     *  Liquidation penalty
     */
    v84: new StorageType('Kensetsu.LiquidationPenalty', 'Default', [], v84.Percent) as LiquidationPenaltyV84,
}

/**
 *  Liquidation penalty
 */
export interface LiquidationPenaltyV84  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v84.Percent
    get(block: Block): Promise<(v84.Percent | undefined)>
}

export const nextCdpId =  {
    /**
     *  CDP counter used for CDP id
     */
    v84: new StorageType('Kensetsu.NextCDPId', 'Default', [], sts.bigint()) as NextCdpIdV84,
}

/**
 *  CDP counter used for CDP id
 */
export interface NextCdpIdV84  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const cdpDepository =  {
    /**
     *  Storage of all CDPs, where key is a unique CDP identifier
     */
    v84: new StorageType('Kensetsu.CDPDepository', 'Optional', [sts.bigint()], v84.CollateralizedDebtPosition) as CdpDepositoryV84,
}

/**
 *  Storage of all CDPs, where key is a unique CDP identifier
 */
export interface CdpDepositoryV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v84.CollateralizedDebtPosition | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v84.CollateralizedDebtPosition | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v84.CollateralizedDebtPosition | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v84.CollateralizedDebtPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v84.CollateralizedDebtPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v84.CollateralizedDebtPosition | undefined)][]>
}

export const cdpOwnerIndex =  {
    /**
     *  Index links owner to CDP ids, not needed by protocol, but used by front-end
     */
    v84: new StorageType('Kensetsu.CdpOwnerIndex', 'Optional', [v84.AccountId32], sts.array(() => sts.bigint())) as CdpOwnerIndexV84,
}

/**
 *  Index links owner to CDP ids, not needed by protocol, but used by front-end
 */
export interface CdpOwnerIndexV84  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v84.AccountId32): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: v84.AccountId32[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<v84.AccountId32[]>
    getKeys(block: Block, key: v84.AccountId32): Promise<v84.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v84.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v84.AccountId32): AsyncIterable<v84.AccountId32[]>
    getPairs(block: Block): Promise<[k: v84.AccountId32, v: (bigint[] | undefined)][]>
    getPairs(block: Block, key: v84.AccountId32): Promise<[k: v84.AccountId32, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v84.AccountId32, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v84.AccountId32): AsyncIterable<[k: v84.AccountId32, v: (bigint[] | undefined)][]>
}
