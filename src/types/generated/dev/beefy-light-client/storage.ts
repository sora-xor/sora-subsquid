import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const latestMmrRoots =  {
    v85: new StorageType('BeefyLightClient.LatestMMRRoots', 'Default', [v85.SubNetworkId], sts.array(() => v85.H256)) as LatestMmrRootsV85,
}

export interface LatestMmrRootsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.H256[]
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.H256[] | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.H256[] | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.H256[] | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.H256[] | undefined)][]>
}

export const latestBeefyBlock =  {
    v85: new StorageType('BeefyLightClient.LatestBeefyBlock', 'Default', [v85.SubNetworkId], sts.bigint()) as LatestBeefyBlockV85,
}

export interface LatestBeefyBlockV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v85.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (bigint | undefined)][]>
}

export const latestRandomSeed =  {
    v85: new StorageType('BeefyLightClient.LatestRandomSeed', 'Default', [v85.SubNetworkId], sts.tuple(() => [v85.H256, sts.number()])) as LatestRandomSeedV85,
}

export interface LatestRandomSeedV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.H256, number]
    get(block: Block, key: v85.SubNetworkId): Promise<([v85.H256, number] | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<([v85.H256, number] | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: ([v85.H256, number] | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: ([v85.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: ([v85.H256, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: ([v85.H256, number] | undefined)][]>
}

export const currentValidatorSet =  {
    v85: new StorageType('BeefyLightClient.CurrentValidatorSet', 'Optional', [v85.SubNetworkId], v85.BeefyAuthoritySet) as CurrentValidatorSetV85,
}

export interface CurrentValidatorSetV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
}

export const nextValidatorSet =  {
    v85: new StorageType('BeefyLightClient.NextValidatorSet', 'Optional', [v85.SubNetworkId], v85.BeefyAuthoritySet) as NextValidatorSetV85,
}

export interface NextValidatorSetV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.SubNetworkId): Promise<(v85.BeefyAuthoritySet | undefined)>
    getMany(block: Block, keys: v85.SubNetworkId[]): Promise<(v85.BeefyAuthoritySet | undefined)[]>
    getKeys(block: Block): Promise<v85.SubNetworkId[]>
    getKeys(block: Block, key: v85.SubNetworkId): Promise<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<v85.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairs(block: Block, key: v85.SubNetworkId): Promise<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.SubNetworkId): AsyncIterable<[k: v85.SubNetworkId, v: (v85.BeefyAuthoritySet | undefined)][]>
}

export const thisNetworkId =  {
    v85: new StorageType('BeefyLightClient.ThisNetworkId', 'Default', [], v85.SubNetworkId) as ThisNetworkIdV85,
}

export interface ThisNetworkIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.SubNetworkId
    get(block: Block): Promise<(v85.SubNetworkId | undefined)>
}
