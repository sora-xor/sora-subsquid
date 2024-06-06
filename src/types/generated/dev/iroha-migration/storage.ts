import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const balances =  {
    v85: new StorageType('IrohaMigration.Balances', 'Optional', [sts.string()], sts.bigint()) as BalancesV85,
}

export interface BalancesV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(bigint | undefined)>
    getMany(block: Block, keys: string[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (bigint | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (bigint | undefined)][]>
}

export const referrers =  {
    v85: new StorageType('IrohaMigration.Referrers', 'Optional', [sts.string()], sts.string()) as ReferrersV85,
}

export interface ReferrersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(string | undefined)>
    getMany(block: Block, keys: string[]): Promise<(string | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (string | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (string | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (string | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (string | undefined)][]>
}

export const publicKeys =  {
    v85: new StorageType('IrohaMigration.PublicKeys', 'Default', [sts.string()], sts.array(() => sts.tuple(() => [sts.boolean(), sts.string()]))) as PublicKeysV85,
}

export interface PublicKeysV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [boolean, string][]
    get(block: Block, key: string): Promise<([boolean, string][] | undefined)>
    getMany(block: Block, keys: string[]): Promise<([boolean, string][] | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: ([boolean, string][] | undefined)][]>
}

export const quorums =  {
    v85: new StorageType('IrohaMigration.Quorums', 'Default', [sts.string()], sts.number()) as QuorumsV85,
}

export interface QuorumsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: string): Promise<(number | undefined)>
    getMany(block: Block, keys: string[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (number | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (number | undefined)][]>
}

export const account =  {
    v85: new StorageType('IrohaMigration.Account', 'Optional', [], v85.AccountId32) as AccountV85,
}

export interface AccountV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v85.AccountId32 | undefined)>
}

export const migratedAccounts =  {
    v85: new StorageType('IrohaMigration.MigratedAccounts', 'Optional', [sts.string()], v85.AccountId32) as MigratedAccountsV85,
}

export interface MigratedAccountsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(v85.AccountId32 | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v85.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v85.AccountId32 | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v85.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v85.AccountId32 | undefined)][]>
}

export const pendingMultiSigAccounts =  {
    v85: new StorageType('IrohaMigration.PendingMultiSigAccounts', 'Default', [sts.string()], v85.PendingMultisigAccount) as PendingMultiSigAccountsV85,
}

export interface PendingMultiSigAccountsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.PendingMultisigAccount
    get(block: Block, key: string): Promise<(v85.PendingMultisigAccount | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v85.PendingMultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v85.PendingMultisigAccount | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v85.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v85.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v85.PendingMultisigAccount | undefined)][]>
}

export const pendingReferrals =  {
    v85: new StorageType('IrohaMigration.PendingReferrals', 'Default', [sts.string()], sts.array(() => v85.AccountId32)) as PendingReferralsV85,
}

export interface PendingReferralsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block, key: string): Promise<(v85.AccountId32[] | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v85.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v85.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v85.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v85.AccountId32[] | undefined)][]>
}
