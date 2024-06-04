import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v71 from '../v71'

export const orderBooks =  {
    v71: new StorageType('OrderBook.OrderBooks', 'Optional', [v71.OrderBookId], v71.OrderBook) as OrderBooksV71,
}

export interface OrderBooksV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v71.OrderBookId): Promise<(v71.OrderBook | undefined)>
    getMany(block: Block, keys: v71.OrderBookId[]): Promise<(v71.OrderBook | undefined)[]>
    getKeys(block: Block): Promise<v71.OrderBookId[]>
    getKeys(block: Block, key: v71.OrderBookId): Promise<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<v71.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v71.OrderBookId, v: (v71.OrderBook | undefined)][]>
    getPairs(block: Block, key: v71.OrderBookId): Promise<[k: v71.OrderBookId, v: (v71.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v71.OrderBookId, v: (v71.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<[k: v71.OrderBookId, v: (v71.OrderBook | undefined)][]>
}

export const limitOrders =  {
    v71: new StorageType('OrderBook.LimitOrders', 'Optional', [v71.OrderBookId, sts.bigint()], v71.LimitOrder) as LimitOrdersV71,
}

export interface LimitOrdersV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v71.OrderBookId, key2: bigint): Promise<(v71.LimitOrder | undefined)>
    getMany(block: Block, keys: [v71.OrderBookId, bigint][]): Promise<(v71.LimitOrder | undefined)[]>
    getKeys(block: Block): Promise<[v71.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v71.OrderBookId): Promise<[v71.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v71.OrderBookId, key2: bigint): Promise<[v71.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v71.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[v71.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: bigint): AsyncIterable<[v71.OrderBookId, bigint][]>
    getPairs(block: Block): Promise<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId): Promise<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId, key2: bigint): Promise<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: bigint): AsyncIterable<[k: [v71.OrderBookId, bigint], v: (v71.LimitOrder | undefined)][]>
}

export const bids =  {
    v71: new StorageType('OrderBook.Bids', 'Optional', [v71.OrderBookId, v71.BalanceUnit], sts.array(() => sts.bigint())) as BidsV71,
}

export interface BidsV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v71.OrderBookId, v71.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeys(block: Block, key1: v71.OrderBookId): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeys(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const asks =  {
    v71: new StorageType('OrderBook.Asks', 'Optional', [v71.OrderBookId, v71.BalanceUnit], sts.array(() => sts.bigint())) as AsksV71,
}

export interface AsksV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v71.OrderBookId, v71.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeys(block: Block, key1: v71.OrderBookId): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeys(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): AsyncIterable<[v71.OrderBookId, v71.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): Promise<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.OrderBookId, key2: v71.BalanceUnit): AsyncIterable<[k: [v71.OrderBookId, v71.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const aggregatedBids =  {
    v71: new StorageType('OrderBook.AggregatedBids', 'Default', [v71.OrderBookId], sts.array(() => sts.tuple(() => [v71.BalanceUnit, v71.BalanceUnit]))) as AggregatedBidsV71,
}

export interface AggregatedBidsV71  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v71.BalanceUnit, v71.BalanceUnit][]
    get(block: Block, key: v71.OrderBookId): Promise<([v71.BalanceUnit, v71.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v71.OrderBookId[]): Promise<([v71.BalanceUnit, v71.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v71.OrderBookId[]>
    getKeys(block: Block, key: v71.OrderBookId): Promise<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<v71.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v71.OrderBookId): Promise<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
}

export const aggregatedAsks =  {
    v71: new StorageType('OrderBook.AggregatedAsks', 'Default', [v71.OrderBookId], sts.array(() => sts.tuple(() => [v71.BalanceUnit, v71.BalanceUnit]))) as AggregatedAsksV71,
}

export interface AggregatedAsksV71  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v71.BalanceUnit, v71.BalanceUnit][]
    get(block: Block, key: v71.OrderBookId): Promise<([v71.BalanceUnit, v71.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v71.OrderBookId[]): Promise<([v71.BalanceUnit, v71.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v71.OrderBookId[]>
    getKeys(block: Block, key: v71.OrderBookId): Promise<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<v71.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v71.OrderBookId): Promise<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<[k: v71.OrderBookId, v: ([v71.BalanceUnit, v71.BalanceUnit][] | undefined)][]>
}

export const userLimitOrders =  {
    v71: new StorageType('OrderBook.UserLimitOrders', 'Optional', [v71.AccountId32, v71.OrderBookId], sts.array(() => sts.bigint())) as UserLimitOrdersV71,
}

export interface UserLimitOrdersV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v71.AccountId32, key2: v71.OrderBookId): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v71.AccountId32, v71.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v71.AccountId32, v71.OrderBookId][]>
    getKeys(block: Block, key1: v71.AccountId32): Promise<[v71.AccountId32, v71.OrderBookId][]>
    getKeys(block: Block, key1: v71.AccountId32, key2: v71.OrderBookId): Promise<[v71.AccountId32, v71.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v71.AccountId32, v71.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.AccountId32): AsyncIterable<[v71.AccountId32, v71.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v71.AccountId32, key2: v71.OrderBookId): AsyncIterable<[v71.AccountId32, v71.OrderBookId][]>
    getPairs(block: Block): Promise<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.AccountId32): Promise<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v71.AccountId32, key2: v71.OrderBookId): Promise<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.AccountId32): AsyncIterable<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v71.AccountId32, key2: v71.OrderBookId): AsyncIterable<[k: [v71.AccountId32, v71.OrderBookId], v: (bigint[] | undefined)][]>
}

export const expirationsAgenda =  {
    v71: new StorageType('OrderBook.ExpirationsAgenda', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [v71.OrderBookId, sts.bigint()]))) as ExpirationsAgendaV71,
}

export interface ExpirationsAgendaV71  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v71.OrderBookId, bigint][]
    get(block: Block, key: number): Promise<([v71.OrderBookId, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v71.OrderBookId, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v71.OrderBookId, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v71.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v71.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v71.OrderBookId, bigint][] | undefined)][]>
}

export const alignmentCursor =  {
    v71: new StorageType('OrderBook.AlignmentCursor', 'Optional', [v71.OrderBookId], sts.bigint()) as AlignmentCursorV71,
}

export interface AlignmentCursorV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v71.OrderBookId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v71.OrderBookId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v71.OrderBookId[]>
    getKeys(block: Block, key: v71.OrderBookId): Promise<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v71.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<v71.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v71.OrderBookId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v71.OrderBookId): Promise<[k: v71.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v71.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v71.OrderBookId): AsyncIterable<[k: v71.OrderBookId, v: (bigint | undefined)][]>
}

export const incompleteExpirationsSince =  {
    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block
     *  so they might be operated later.
     */
    v71: new StorageType('OrderBook.IncompleteExpirationsSince', 'Optional', [], sts.number()) as IncompleteExpirationsSinceV71,
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block
 *  so they might be operated later.
 */
export interface IncompleteExpirationsSinceV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
