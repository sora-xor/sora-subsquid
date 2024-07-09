import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const referrers =  {
    v85: new StorageType('Referrals.Referrers', 'Optional', [v85.AccountId32], v85.AccountId32) as ReferrersV85,
}

export interface ReferrersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountId32 | undefined)][]>
}

export const referrerBalances =  {
    v85: new StorageType('Referrals.ReferrerBalances', 'Optional', [v85.AccountId32], sts.bigint()) as ReferrerBalancesV85,
}

export interface ReferrerBalancesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (bigint | undefined)][]>
}

export const referrals =  {
    v85: new StorageType('Referrals.Referrals', 'Default', [v85.AccountId32], sts.array(() => v85.AccountId32)) as ReferralsV85,
}

export interface ReferralsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.AccountId32[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountId32[] | undefined)][]>
}
