import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const liquidatedThisBlock =  {
    /**
     *  Flag indicates that liquidation took place in this block. Only one liquidation per block is
     *  allowed, the flag is dropped every block.
     */
    v85: new StorageType('Kensetsu.LiquidatedThisBlock', 'Default', [], sts.boolean()) as LiquidatedThisBlockV85,
}

/**
 *  Flag indicates that liquidation took place in this block. Only one liquidation per block is
 *  allowed, the flag is dropped every block.
 */
export interface LiquidatedThisBlockV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const badDebt =  {
    /**
     *  System bad debt, the amount of KUSD not secured with collateral.
     */
    v85: new StorageType('Kensetsu.BadDebt', 'Default', [], sts.bigint()) as BadDebtV85,
}

/**
 *  System bad debt, the amount of KUSD not secured with collateral.
 */
export interface BadDebtV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const collateralInfos =  {
    /**
     *  Parametes for collaterals, include risk parameters and interest recalculation coefficients
     */
    v85: new StorageType('Kensetsu.CollateralInfos', 'Optional', [v85.AssetId32], v85.CollateralInfo) as CollateralInfosV85,
}

/**
 *  Parametes for collaterals, include risk parameters and interest recalculation coefficients
 */
export interface CollateralInfosV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.CollateralInfo | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.CollateralInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.CollateralInfo | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.CollateralInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.CollateralInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.CollateralInfo | undefined)][]>
}

export const borrowTax =  {
    /**
     *  Risk parameter
     *  Borrows tax to buy back and burn KEN
     */
    v85: new StorageType('Kensetsu.BorrowTax', 'Default', [], v85.Percent) as BorrowTaxV85,
}

/**
 *  Risk parameter
 *  Borrows tax to buy back and burn KEN
 */
export interface BorrowTaxV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Percent
    get(block: Block): Promise<(v85.Percent | undefined)>
}

export const liquidationPenalty =  {
    /**
     *  Liquidation penalty
     */
    v85: new StorageType('Kensetsu.LiquidationPenalty', 'Default', [], v85.Percent) as LiquidationPenaltyV85,
}

/**
 *  Liquidation penalty
 */
export interface LiquidationPenaltyV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Percent
    get(block: Block): Promise<(v85.Percent | undefined)>
}

export const nextCdpId =  {
    /**
     *  CDP counter used for CDP id
     */
    v85: new StorageType('Kensetsu.NextCDPId', 'Default', [], sts.bigint()) as NextCdpIdV85,
}

/**
 *  CDP counter used for CDP id
 */
export interface NextCdpIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const cdpDepository =  {
    /**
     *  Storage of all CDPs, where key is a unique CDP identifier
     */
    v85: new StorageType('Kensetsu.CDPDepository', 'Optional', [sts.bigint()], v85.CollateralizedDebtPosition) as CdpDepositoryV85,
}

/**
 *  Storage of all CDPs, where key is a unique CDP identifier
 */
export interface CdpDepositoryV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v85.CollateralizedDebtPosition | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v85.CollateralizedDebtPosition | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v85.CollateralizedDebtPosition | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v85.CollateralizedDebtPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v85.CollateralizedDebtPosition | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v85.CollateralizedDebtPosition | undefined)][]>
}

export const cdpOwnerIndex =  {
    /**
     *  Index links owner to CDP ids, not needed by protocol, but used by front-end
     */
    v85: new StorageType('Kensetsu.CdpOwnerIndex', 'Optional', [v85.AccountId32], sts.array(() => sts.bigint())) as CdpOwnerIndexV85,
}

/**
 *  Index links owner to CDP ids, not needed by protocol, but used by front-end
 */
export interface CdpOwnerIndexV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (bigint[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (bigint[] | undefined)][]>
}
