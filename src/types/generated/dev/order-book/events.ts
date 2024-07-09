import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const orderBookCreated =  {
    name: 'OrderBook.OrderBookCreated',
    /**
     * New order book is created by user
     */
    v85: new EventType(
        'OrderBook.OrderBookCreated',
        sts.struct({
            orderBookId: v85.OrderBookId,
            /**
             * `creator` contains an address if the order book is created for an indivisible asset by the asset holder, or `None` if it is created by root / tech committee
             */
            creator: sts.option(() => v85.AccountId32),
        })
    ),
}

export const orderBookDeleted =  {
    name: 'OrderBook.OrderBookDeleted',
    /**
     * Order book is deleted
     */
    v85: new EventType(
        'OrderBook.OrderBookDeleted',
        sts.struct({
            orderBookId: v85.OrderBookId,
        })
    ),
}

export const orderBookStatusChanged =  {
    name: 'OrderBook.OrderBookStatusChanged',
    /**
     * Order book status is changed
     */
    v85: new EventType(
        'OrderBook.OrderBookStatusChanged',
        sts.struct({
            orderBookId: v85.OrderBookId,
            newStatus: v85.OrderBookStatus,
        })
    ),
}

export const orderBookUpdated =  {
    name: 'OrderBook.OrderBookUpdated',
    /**
     * Order book attributes are updated
     */
    v85: new EventType(
        'OrderBook.OrderBookUpdated',
        sts.struct({
            orderBookId: v85.OrderBookId,
        })
    ),
}

export const limitOrderPlaced =  {
    name: 'OrderBook.LimitOrderPlaced',
    /**
     * User placed new limit order
     */
    v85: new EventType(
        'OrderBook.LimitOrderPlaced',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v85.AccountId32,
            side: v85.PriceVariant,
            price: v85.BalanceUnit,
            amount: v85.BalanceUnit,
            lifetime: sts.bigint(),
        })
    ),
}

export const limitOrderConvertedToMarketOrder =  {
    name: 'OrderBook.LimitOrderConvertedToMarketOrder',
    /**
     * User tried to place the limit order out of the spread. The limit order is converted into a market order.
     */
    v85: new EventType(
        'OrderBook.LimitOrderConvertedToMarketOrder',
        sts.struct({
            orderBookId: v85.OrderBookId,
            ownerId: v85.AccountId32,
            direction: v85.PriceVariant,
            amount: v85.OrderAmount,
            averagePrice: v85.BalanceUnit,
        })
    ),
}

export const limitOrderIsSplitIntoMarketOrderAndLimitOrder =  {
    name: 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
    /**
     * User tried to place the limit order out of the spread.
     * One part of the liquidity of the limit order is converted into a market order, and the other part is placed as a limit order.
     */
    v85: new EventType(
        'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
        sts.struct({
            orderBookId: v85.OrderBookId,
            ownerId: v85.AccountId32,
            marketOrderDirection: v85.PriceVariant,
            marketOrderAmount: v85.OrderAmount,
            marketOrderAveragePrice: v85.BalanceUnit,
            limitOrderId: sts.bigint(),
        })
    ),
}

export const limitOrderCanceled =  {
    name: 'OrderBook.LimitOrderCanceled',
    /**
     * User canceled their limit order or the limit order has reached the end of its lifespan
     */
    v85: new EventType(
        'OrderBook.LimitOrderCanceled',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v85.AccountId32,
            reason: v85.CancelReason,
        })
    ),
}

export const limitOrderExecuted =  {
    name: 'OrderBook.LimitOrderExecuted',
    /**
     * Some amount of the limit order is executed
     */
    v85: new EventType(
        'OrderBook.LimitOrderExecuted',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v85.AccountId32,
            side: v85.PriceVariant,
            price: v85.BalanceUnit,
            amount: v85.OrderAmount,
        })
    ),
}

export const limitOrderFilled =  {
    name: 'OrderBook.LimitOrderFilled',
    /**
     * All amount of the limit order is executed
     */
    v85: new EventType(
        'OrderBook.LimitOrderFilled',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v85.AccountId32,
        })
    ),
}

export const limitOrderUpdated =  {
    name: 'OrderBook.LimitOrderUpdated',
    /**
     * The limit order is updated
     */
    v85: new EventType(
        'OrderBook.LimitOrderUpdated',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v85.AccountId32,
            newAmount: v85.BalanceUnit,
        })
    ),
}

export const marketOrderExecuted =  {
    name: 'OrderBook.MarketOrderExecuted',
    /**
     * User executes a deal by the market order
     */
    v85: new EventType(
        'OrderBook.MarketOrderExecuted',
        sts.struct({
            orderBookId: v85.OrderBookId,
            ownerId: v85.AccountId32,
            direction: v85.PriceVariant,
            amount: v85.OrderAmount,
            averagePrice: v85.BalanceUnit,
            to: sts.option(() => v85.AccountId32),
        })
    ),
}

export const expirationFailure =  {
    name: 'OrderBook.ExpirationFailure',
    /**
     * Failed to cancel expired order
     */
    v85: new EventType(
        'OrderBook.ExpirationFailure',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
            error: v85.DispatchError,
        })
    ),
}

export const alignmentFailure =  {
    name: 'OrderBook.AlignmentFailure',
    /**
     * Failed to cancel expired order
     */
    v85: new EventType(
        'OrderBook.AlignmentFailure',
        sts.struct({
            orderBookId: v85.OrderBookId,
            error: v85.DispatchError,
        })
    ),
}
