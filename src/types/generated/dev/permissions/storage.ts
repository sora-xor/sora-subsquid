import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const owners =  {
    v85: new StorageType('Permissions.Owners', 'Default', [sts.number(), v85.Scope], sts.array(() => v85.AccountId32)) as OwnersV85,
}

export interface OwnersV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.AccountId32[]
    get(block: Block, key1: number, key2: v85.Scope): Promise<(v85.AccountId32[] | undefined)>
    getMany(block: Block, keys: [number, v85.Scope][]): Promise<(v85.AccountId32[] | undefined)[]>
}

export const permissions =  {
    v85: new StorageType('Permissions.Permissions', 'Default', [v85.AccountId32, v85.Scope], sts.array(() => sts.number())) as PermissionsV85,
}

export interface PermissionsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block, key1: v85.AccountId32, key2: v85.Scope): Promise<(number[] | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.Scope][]): Promise<(number[] | undefined)[]>
}
