import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const orderBooks =  {
    /**
     *  The storage contains the information about order book, it's parameters and statuses.
     */
    v85: new StorageType('OrderBook.OrderBooks', 'Optional', [v85.OrderBookId], v85.OrderBook) as OrderBooksV85,
}

/**
 *  The storage contains the information about order book, it's parameters and statuses.
 */
export interface OrderBooksV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.OrderBookId): Promise<(v85.OrderBook | undefined)>
    getMany(block: Block, keys: v85.OrderBookId[]): Promise<(v85.OrderBook | undefined)[]>
    getKeys(block: Block): Promise<v85.OrderBookId[]>
    getKeys(block: Block, key: v85.OrderBookId): Promise<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<v85.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v85.OrderBookId, v: (v85.OrderBook | undefined)][]>
    getPairs(block: Block, key: v85.OrderBookId): Promise<[k: v85.OrderBookId, v: (v85.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.OrderBookId, v: (v85.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<[k: v85.OrderBookId, v: (v85.OrderBook | undefined)][]>
}

export const limitOrders =  {
    /**
     *  The storage contains the information about all limit orders in all order books.
     */
    v85: new StorageType('OrderBook.LimitOrders', 'Optional', [v85.OrderBookId, sts.bigint()], v85.LimitOrder) as LimitOrdersV85,
}

/**
 *  The storage contains the information about all limit orders in all order books.
 */
export interface LimitOrdersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.OrderBookId, key2: bigint): Promise<(v85.LimitOrder | undefined)>
    getMany(block: Block, keys: [v85.OrderBookId, bigint][]): Promise<(v85.LimitOrder | undefined)[]>
    getKeys(block: Block): Promise<[v85.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v85.OrderBookId): Promise<[v85.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v85.OrderBookId, key2: bigint): Promise<[v85.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[v85.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: bigint): AsyncIterable<[v85.OrderBookId, bigint][]>
    getPairs(block: Block): Promise<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId): Promise<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId, key2: bigint): Promise<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: bigint): AsyncIterable<[k: [v85.OrderBookId, bigint], v: (v85.LimitOrder | undefined)][]>
}

export const bids =  {
    /**
     *  The index contains the list with the bid order `id` for each price.
     */
    v85: new StorageType('OrderBook.Bids', 'Optional', [v85.OrderBookId, v85.BalanceUnit], sts.array(() => sts.bigint())) as BidsV85,
}

/**
 *  The index contains the list with the bid order `id` for each price.
 */
export interface BidsV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v85.OrderBookId, v85.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeys(block: Block, key1: v85.OrderBookId): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeys(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const asks =  {
    /**
     *  The index contains the list with the ask order `id` for each price.
     */
    v85: new StorageType('OrderBook.Asks', 'Optional', [v85.OrderBookId, v85.BalanceUnit], sts.array(() => sts.bigint())) as AsksV85,
}

/**
 *  The index contains the list with the ask order `id` for each price.
 */
export interface AsksV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v85.OrderBookId, v85.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeys(block: Block, key1: v85.OrderBookId): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeys(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): AsyncIterable<[v85.OrderBookId, v85.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): Promise<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.OrderBookId, key2: v85.BalanceUnit): AsyncIterable<[k: [v85.OrderBookId, v85.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const aggregatedBids =  {
    /**
     *  The index contains the aggregated information about bids with total volume of orders for each price.
     */
    v85: new StorageType('OrderBook.AggregatedBids', 'Default', [v85.OrderBookId], sts.array(() => sts.tuple(() => [v85.BalanceUnit, v85.BalanceUnit]))) as AggregatedBidsV85,
}

/**
 *  The index contains the aggregated information about bids with total volume of orders for each price.
 */
export interface AggregatedBidsV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.BalanceUnit, v85.BalanceUnit][]
    get(block: Block, key: v85.OrderBookId): Promise<([v85.BalanceUnit, v85.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v85.OrderBookId[]): Promise<([v85.BalanceUnit, v85.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v85.OrderBookId[]>
    getKeys(block: Block, key: v85.OrderBookId): Promise<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<v85.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v85.OrderBookId): Promise<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
}

export const aggregatedAsks =  {
    /**
     *  The index contains the aggregated information about asks with total volume of orders for each price.
     */
    v85: new StorageType('OrderBook.AggregatedAsks', 'Default', [v85.OrderBookId], sts.array(() => sts.tuple(() => [v85.BalanceUnit, v85.BalanceUnit]))) as AggregatedAsksV85,
}

/**
 *  The index contains the aggregated information about asks with total volume of orders for each price.
 */
export interface AggregatedAsksV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.BalanceUnit, v85.BalanceUnit][]
    get(block: Block, key: v85.OrderBookId): Promise<([v85.BalanceUnit, v85.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v85.OrderBookId[]): Promise<([v85.BalanceUnit, v85.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v85.OrderBookId[]>
    getKeys(block: Block, key: v85.OrderBookId): Promise<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<v85.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v85.OrderBookId): Promise<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<[k: v85.OrderBookId, v: ([v85.BalanceUnit, v85.BalanceUnit][] | undefined)][]>
}

export const userLimitOrders =  {
    /**
     *  The index contains the list with the order `id` for the user in different order books.
     */
    v85: new StorageType('OrderBook.UserLimitOrders', 'Optional', [v85.AccountId32, v85.OrderBookId], sts.array(() => sts.bigint())) as UserLimitOrdersV85,
}

/**
 *  The index contains the list with the order `id` for the user in different order books.
 */
export interface UserLimitOrdersV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v85.AccountId32, key2: v85.OrderBookId): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v85.AccountId32, v85.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v85.AccountId32, v85.OrderBookId][]>
    getKeys(block: Block, key1: v85.AccountId32): Promise<[v85.AccountId32, v85.OrderBookId][]>
    getKeys(block: Block, key1: v85.AccountId32, key2: v85.OrderBookId): Promise<[v85.AccountId32, v85.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v85.AccountId32, v85.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[v85.AccountId32, v85.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.OrderBookId): AsyncIterable<[v85.AccountId32, v85.OrderBookId][]>
    getPairs(block: Block): Promise<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32): Promise<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v85.AccountId32, key2: v85.OrderBookId): Promise<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32): AsyncIterable<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v85.AccountId32, key2: v85.OrderBookId): AsyncIterable<[k: [v85.AccountId32, v85.OrderBookId], v: (bigint[] | undefined)][]>
}

export const expirationsAgenda =  {
    /**
     *  The tech storage that is used in the order expiration mechanism.
     */
    v85: new StorageType('OrderBook.ExpirationsAgenda', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [v85.OrderBookId, sts.bigint()]))) as ExpirationsAgendaV85,
}

/**
 *  The tech storage that is used in the order expiration mechanism.
 */
export interface ExpirationsAgendaV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v85.OrderBookId, bigint][]
    get(block: Block, key: number): Promise<([v85.OrderBookId, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v85.OrderBookId, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v85.OrderBookId, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v85.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v85.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v85.OrderBookId, bigint][] | undefined)][]>
}

export const alignmentCursor =  {
    /**
     *  The tech storage that is used during the process of updating the order book.
     */
    v85: new StorageType('OrderBook.AlignmentCursor', 'Optional', [v85.OrderBookId], sts.bigint()) as AlignmentCursorV85,
}

/**
 *  The tech storage that is used during the process of updating the order book.
 */
export interface AlignmentCursorV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v85.OrderBookId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v85.OrderBookId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v85.OrderBookId[]>
    getKeys(block: Block, key: v85.OrderBookId): Promise<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v85.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<v85.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v85.OrderBookId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v85.OrderBookId): Promise<[k: v85.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v85.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v85.OrderBookId): AsyncIterable<[k: v85.OrderBookId, v: (bigint | undefined)][]>
}

export const incompleteExpirationsSince =  {
    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block
     *  so they might be operated later.
     */
    v85: new StorageType('OrderBook.IncompleteExpirationsSince', 'Optional', [], sts.number()) as IncompleteExpirationsSinceV85,
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block
 *  so they might be operated later.
 */
export interface IncompleteExpirationsSinceV85  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
