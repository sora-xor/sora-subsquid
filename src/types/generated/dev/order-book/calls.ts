import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const createOrderbook =  {
    name: 'OrderBook.create_orderbook',
    /**
     * Creates a new order book for the pair of assets.
     * 
     * # Parameters:
     * - `origin`: caller account who must have permissions to create the order book
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `tick_size`: price step
     * - `step_lot_size`: amount step
     * - `min_lot_size`: minimal order amount
     * - `max_lot_size`: maximal order amount
     * 
     * # Rules:
     * - root & tech committee can create any order book
     * - a regular user can create an order book only for indivisible base assets (most likely NFT) and only if they have this asset on their balance
     * - trading pair for the assets must be registered before the creating an order book
     * 
     * # Attribute rules (for `tick_size`, `step_lot_size`, `min_lot_size` & `max_lot_size`):
     * - all attributes must be non-zero
     * - `min_lot_size` <= `max_lot_size`
     * - `step_lot_size` <= `min_lot_size`
     * - `min_lot_size` & `max_lot_size` must be a multiple of `step_lot_size`
     * - `max_lot_size` <= `min_lot_size` * `SOFT_MIN_MAX_RATIO`, now `SOFT_MIN_MAX_RATIO` = 1 000
     * - `max_lot_size` <= total supply of `base` asset
     * - precision of `tick_size` * `step_lot_size` must not overflow **18 digits**
     */
    v85: new CallType(
        'OrderBook.create_orderbook',
        sts.struct({
            orderBookId: v85.OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        })
    ),
}

export const deleteOrderbook =  {
    name: 'OrderBook.delete_orderbook',
    /**
     * Deletes the order book
     * 
     * # Parameters:
     * - `origin`: caller account who must have permissions to delete the order book
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * 
     * # Rules:
     * - only root & tech committee can delete the order book
     * - status of the order book must be [`OnlyCancel`](OrderBookStatus::OnlyCancel) or [`Stop`](OrderBookStatus::Stop)
     * - the order book must be empty - doesn't contain any orders
     * 
     * # Real life delete process:
     * 1. Announce that the order book will be deleted.
     * 2. Stop the order book by changing the status to [`OnlyCancel`](OrderBookStatus::OnlyCancel) or [`Stop`](OrderBookStatus::Stop)
     * 3. Wait until users cancel their orders or their lifetime just expires (maximum 1 month).
     * 4. Delete the empty order book.
     */
    v85: new CallType(
        'OrderBook.delete_orderbook',
        sts.struct({
            orderBookId: v85.OrderBookId,
        })
    ),
}

export const updateOrderbook =  {
    name: 'OrderBook.update_orderbook',
    /**
     * Updates the attributes of the order book
     * 
     * # Parameters:
     * - `origin`: caller account who must have permissions to update the order book
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `tick_size`: price step
     * - `step_lot_size`: amount step
     * - `min_lot_size`: minimal order amount
     * - `max_lot_size`: maximal order amount
     * 
     * # Rules:
     * - only root & tech committee can update the order book
     * - status of the order book must be [`OnlyCancel`](OrderBookStatus::OnlyCancel) or [`Stop`](OrderBookStatus::Stop)
     * - inernal tech status of the order book must be [`Ready`](OrderBookTechStatus::Ready), that means the previos update is completed
     * 
     * # Attribute rules (for `tick_size`, `step_lot_size`, `min_lot_size` & `max_lot_size`):
     * - all attributes must be non-zero
     * - `min_lot_size` <= `max_lot_size`
     * - `step_lot_size` <= `min_lot_size`
     * - `min_lot_size` & `max_lot_size` must be a multiple of `step_lot_size`
     * - `max_lot_size` <= total supply of `base` asset
     * - precision of `tick_size` * `step_lot_size` must not overflow 18 digits
     * - `max_lot_size` <= `min_lot_size` * `SOFT_MIN_MAX_RATIO`, now `SOFT_MIN_MAX_RATIO` = 1 000
     * - `max_lot_size` <= **old** `min_lot_size` * `HARD_MIN_MAX_RATIO`, now `HARD_MIN_MAX_RATIO` = 4 000
     * 
     * # Real life update process:
     * 1. Announce that the order book will be updated.
     * 2. Stop the order book by changing the status to [`OnlyCancel`](OrderBookStatus::OnlyCancel) or [`Stop`](OrderBookStatus::Stop)
     * 3. Update the order book attributes according to the rules[^note].
     * 4. Wait the orders alignment if it is necessary - the order book tech status must become [`Ready`](OrderBookTechStatus::Ready).
     * 5. Change the order book status back to [`Trade`](OrderBookStatus::Trade) or other necessary status.
     * 6. Announce that the order book update is completed.
     * 
     * [^note]: according to tech reasons it is forbidden to update `max_lot_size` with too large a value (see last 2 rules).
     * For example, if the current values `min_lot_size` = 1 & `max_lot_size` = 1 000,
     * we cannot change it to `min_lot_size` = 1 000 & `max_lot_size` = 1 000 000.
     * In this case it is necessary to do several update rounds:
     * 1. `min_lot_size`: 1 --> 1 000, `max_lot_size`: 1 000 --> 4 000
     * 2. `max_lot_size`: 4 000 --> 1 000 000
     * 
     * It is also not recommended to batch these updates, because the tech status of the order book can be changed after the 1st update and the 2nd update will be declined in this case.
     */
    v85: new CallType(
        'OrderBook.update_orderbook',
        sts.struct({
            orderBookId: v85.OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        })
    ),
}

export const changeOrderbookStatus =  {
    name: 'OrderBook.change_orderbook_status',
    /**
     * Sets the order book status
     * 
     * # Parameters:
     * - `origin`: caller account who must have permissions to change the order book status
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `status`: one of the statuses from [OrderBookStatus]
     * 
     * # Rules:
     * - only root & tech committee can set the order book status
     * - if the order book is locked by updating (tech status is [`Updating`](OrderBookTechStatus::Updating)), the allowed statues to set:
     *     - [`OnlyCancel`](OrderBookStatus::OnlyCancel)
     *     - [`Stop`](OrderBookStatus::Stop)
     */
    v85: new CallType(
        'OrderBook.change_orderbook_status',
        sts.struct({
            orderBookId: v85.OrderBookId,
            status: v85.OrderBookStatus,
        })
    ),
}

export const placeLimitOrder =  {
    name: 'OrderBook.place_limit_order',
    /**
     * Places the limit order into the order book
     * 
     * # Parameters:
     * - `origin`: caller account, the limit order owner
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `price`: price in the `quote asset`
     * - `amount`: volume of the limit order in the `base asset`
     * - `side`: [side](PriceVariant) where to place the limit order
     * - `lifespan`: life duration of the limit order in millisecs, if not defined the default value 30 days is set
     * 
     * # Rules:
     * - `price` must be a multiple of [`OrderBook::tick_size`]
     * - `amount` >= [`OrderBook::min_lot_size`]
     * - `amount` <= [`OrderBook::max_lot_size`]
     * - `amount` must be a multiple of [`OrderBook::step_lot_size`]
     * - if the `price` crosses the spread (the opposite `side`):
     *     - if [`OrderBook::status`] allows to trade - the limit order is converted into market order and the exchange occurs
     *     - if [`OrderBook::status`] doesn't allow to trade - transaction fails
     */
    v85: new CallType(
        'OrderBook.place_limit_order',
        sts.struct({
            orderBookId: v85.OrderBookId,
            price: sts.bigint(),
            amount: sts.bigint(),
            side: v85.PriceVariant,
            lifespan: sts.option(() => sts.bigint()),
        })
    ),
}

export const cancelLimitOrder =  {
    name: 'OrderBook.cancel_limit_order',
    /**
     * Cancels the limit order
     * 
     * # Parameters:
     * - `origin`: caller account who owns the limit order
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `order_id`: `id` of the limit order
     * 
     * # Rules:
     * - only the order owner can cancel the limit order
     * 
     * # Note:
     * Network fee isn't charged if the order is successfully cancelled by the owner
     */
    v85: new CallType(
        'OrderBook.cancel_limit_order',
        sts.struct({
            orderBookId: v85.OrderBookId,
            orderId: sts.bigint(),
        })
    ),
}

export const cancelLimitOrdersBatch =  {
    name: 'OrderBook.cancel_limit_orders_batch',
    /**
     * Cancels the list of limit orders
     * 
     * # Parameters:
     * - `origin`: caller account who owns the limit orders
     * - `limit_orders_to_cancel`: the list with [`order_book_id`](OrderBookId) & `order_id` pairs to cancel
     * 
     * # Rules:
     * - only the owner of **all** orders can cancel all limit orders from the list
     * 
     * # Note:
     * Network fee isn't charged if orders are successfully cancelled by the owner
     */
    v85: new CallType(
        'OrderBook.cancel_limit_orders_batch',
        sts.struct({
            limitOrdersToCancel: sts.array(() => sts.tuple(() => [v85.OrderBookId, sts.array(() => sts.bigint())])),
        })
    ),
}

export const executeMarketOrder =  {
    name: 'OrderBook.execute_market_order',
    /**
     * Executes the market order
     * 
     * # Parameters:
     * - `origin`: caller account
     * - `order_book_id`: [order book identifier](OrderBookId) that contains: `DexId`, `base asset` & `quote asset`
     * - `direction`: [direction](PriceVariant) of the market order
     * - `amount`: volume of the `base asset` to trade
     * 
     * # Rules:
     * - works only for order books with indivisible `base asset`, because there is no other ability to trade such assets. All other divisible assets must be traded by `liquidity_proxy::swap`
     * - `amount` >= [`OrderBook::min_lot_size`]
     * - `amount` <= [`OrderBook::max_lot_size`]
     * - `amount` must be a multiple of [`OrderBook::step_lot_size`]
     */
    v85: new CallType(
        'OrderBook.execute_market_order',
        sts.struct({
            orderBookId: v85.OrderBookId,
            direction: v85.PriceVariant,
            amount: sts.bigint(),
        })
    ),
}
