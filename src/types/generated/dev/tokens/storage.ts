import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const totalIssuance =  {
    /**
     *  The total issuance of a token type.
     */
    v85: new StorageType('Tokens.TotalIssuance', 'Default', [v85.AssetId32], sts.bigint()) as TotalIssuanceV85,
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.AssetId32[]>
    getKeys(block: Block, key: v85.AssetId32): Promise<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<v85.AssetId32[]>
    getPairs(block: Block): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.AssetId32): Promise<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AssetId32): AsyncIterable<[k: v85.AssetId32, v: (bigint | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v85: new StorageType('Tokens.Locks', 'Default', [v85.AccountId32, v85.AssetId32], sts.array(() => v85.Type_698)) as LocksV85,
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_698[]
    get(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<(v85.Type_698[] | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.AssetId32][]): Promise<(v85.Type_698[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_698[] | undefined)][]>
}

export const accounts =  {
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v85: new StorageType('Tokens.Accounts', 'Default', [v85.AccountId32, v85.AssetId32], v85.Type_700) as AccountsV85,
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_700
    get(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<(v85.Type_700 | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.AssetId32][]): Promise<(v85.Type_700 | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_700 | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v85: new StorageType('Tokens.Reserves', 'Default', [v85.AccountId32, v85.AssetId32], sts.array(() => v85.Type_702)) as ReservesV85,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Type_702[]
    get(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<(v85.Type_702[] | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.AssetId32][]): Promise<(v85.Type_702[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[v85.AccountId32, v85.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.AssetId32): Promise<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.AssetId32): AsyncIterable<[k: [v85.AccountId32, v85.AssetId32], v: (v85.Type_702[] | undefined)][]>
}
