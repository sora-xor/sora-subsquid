import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const penaltiesAccount =  {
    /**
     *  Account for collecting penalties
     */
    v85: new StorageType('CeresLaunchpad.PenaltiesAccount', 'Default', [], v85.AccountId32) as PenaltiesAccountV85,
}

/**
 *  Account for collecting penalties
 */
export interface PenaltiesAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const ceresBurnFeeAmount =  {
    /**
     *  Amount of CERES for burn fee
     */
    v85: new StorageType('CeresLaunchpad.CeresBurnFeeAmount', 'Default', [], sts.bigint()) as CeresBurnFeeAmountV85,
}

/**
 *  Amount of CERES for burn fee
 */
export interface CeresBurnFeeAmountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const ceresForContributionInIlo =  {
    /**
     *  Amount of CERES for contribution in ILO
     */
    v85: new StorageType('CeresLaunchpad.CeresForContributionInILO', 'Default', [], sts.bigint()) as CeresForContributionInIloV85,
}

/**
 *  Amount of CERES for contribution in ILO
 */
export interface CeresForContributionInIloV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const feePercentOnRaisedFunds =  {
    /**
     *  Fee percent on raised funds in successful ILO
     */
    v85: new StorageType('CeresLaunchpad.FeePercentOnRaisedFunds', 'Default', [], sts.bigint()) as FeePercentOnRaisedFundsV85,
}

/**
 *  Fee percent on raised funds in successful ILO
 */
export interface FeePercentOnRaisedFundsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES burn amount fee
     */
    v85: new StorageType('CeresLaunchpad.AuthorityAccount', 'Default', [], v85.AccountId32) as AuthorityAccountV85,
}

/**
 *  Account which has permissions for changing CERES burn amount fee
 */
export interface AuthorityAccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const ilOs =  {
    v85: new StorageType('CeresLaunchpad.ILOs', 'Optional', [v85.AssetId32], v85.ILOInfo) as IlOsV85,
}

export interface IlOsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AssetId32): Promise<(v85.ILOInfo | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(v85.ILOInfo | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (v85.ILOInfo | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (v85.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (v85.ILOInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (v85.ILOInfo | undefined)][]>
}

export const contributions =  {
    v85: new StorageType('CeresLaunchpad.Contributions', 'Default', [v85.AssetId32, v85.AccountId32], v85.ContributionInfo) as ContributionsV85,
}

export interface ContributionsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.ContributionInfo
    get(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<(v85.ContributionInfo | undefined)>
    getMany(block: Block, keys: [v85.AssetId32, v85.AccountId32][]): Promise<(v85.ContributionInfo | undefined)[]>
    getKeys(block: Block): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeys(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[v85.AssetId32, v85.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
    getPairs(block: Block, key1: v85.AssetId32, key2: v85.AccountId32): Promise<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AssetId32, key2: v85.AccountId32): AsyncIterable<[k: [v85.AssetId32, v85.AccountId32], v: (v85.ContributionInfo | undefined)][]>
}

export const whitelistedContributors =  {
    v85: new StorageType('CeresLaunchpad.WhitelistedContributors', 'Default', [], sts.array(() => v85.AccountId32)) as WhitelistedContributorsV85,
}

export interface WhitelistedContributorsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}

export const whitelistedIloOrganizers =  {
    v85: new StorageType('CeresLaunchpad.WhitelistedIloOrganizers', 'Default', [], sts.array(() => v85.AccountId32)) as WhitelistedIloOrganizersV85,
}

export interface WhitelistedIloOrganizersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block): Promise<(v85.AccountId32[] | undefined)>
}
