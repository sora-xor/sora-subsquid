import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const pools =  {
    /**
     *  Pools whose farmers are refreshed at the specific block. Block => Pools
     */
    v85: new StorageType('Farming.Pools', 'Default', [sts.number()], sts.array(() => v85.AccountId32)) as PoolsV85,
}

/**
 *  Pools whose farmers are refreshed at the specific block. Block => Pools
 */
export interface PoolsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block, key: number): Promise<(v85.AccountId32[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v85.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v85.AccountId32[] | undefined)][]>
}

export const poolFarmers =  {
    /**
     *  Farmers of the pool. Pool => Farmers
     */
    v85: new StorageType('Farming.PoolFarmers', 'Default', [v85.AccountId32], sts.array(() => v85.PoolFarmer)) as PoolFarmersV85,
}

/**
 *  Farmers of the pool. Pool => Farmers
 */
export interface PoolFarmersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.PoolFarmer[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.PoolFarmer[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.PoolFarmer[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.PoolFarmer[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.PoolFarmer[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.PoolFarmer[] | undefined)][]>
}

export const lpMinXorForBonusReward =  {
    v85: new StorageType('Farming.LpMinXorForBonusReward', 'Default', [], sts.bigint()) as LpMinXorForBonusRewardV85,
}

export interface LpMinXorForBonusRewardV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
