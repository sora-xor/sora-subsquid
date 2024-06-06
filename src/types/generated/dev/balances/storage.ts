import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v85: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV85,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v85: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV85,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
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
    v85: new StorageType('Balances.Account', 'Default', [v85.AccountId32], v85.AccountData) as AccountV85,
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
export interface AccountV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountData
    get(block: Block, key: v85.AccountId32): Promise<(v85.AccountData | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.AccountData | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v85: new StorageType('Balances.Locks', 'Default', [v85.AccountId32], sts.array(() => v85.BalanceLock)) as LocksV85,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.BalanceLock[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v85: new StorageType('Balances.Reserves', 'Default', [v85.AccountId32], sts.array(() => v85.ReserveData)) as ReservesV85,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.ReserveData[]
    get(block: Block, key: v85.AccountId32): Promise<(v85.ReserveData[] | undefined)>
    getMany(block: Block, keys: v85.AccountId32[]): Promise<(v85.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v85.AccountId32[]>
    getKeys(block: Block, key: v85.AccountId32): Promise<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<v85.AccountId32[]>
    getPairs(block: Block): Promise<[k: v85.AccountId32, v: (v85.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v85.AccountId32): Promise<[k: v85.AccountId32, v: (v85.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.AccountId32, v: (v85.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.AccountId32): AsyncIterable<[k: v85.AccountId32, v: (v85.ReserveData[] | undefined)][]>
}
