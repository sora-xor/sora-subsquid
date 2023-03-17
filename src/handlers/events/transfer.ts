// import { Block, Context, EventEntity } from '../../processor'

// import { getTransferEventData } from '../../utils/events'
// import { poolAccounts, poolsStorage, PoolsPrices } from '../../utils/pools'

// export async function transferEventHandler(ctx: Context, block: Block, event: EventEntity): Promise<void> {
//   if (event.name !== 'Tokens.Transfer') return

//   const { assetId, from, to, amount } = getTransferEventData(event)

//   // withdraw token from pool
//   if (poolAccounts.has(from)) {
//     const pool = await poolsStorage.getPoolById(ctx, from)

//     if (!pool) return // TODO: make proper exit

//     if (pool.baseAsset.id === assetId) {
//       pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amount.toString())
//     } else if (pool.targetAsset.id === assetId) {
//       pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amount.toString())
//     }

//     PoolsPrices.set(true)
//   }

//   // deposit token to pool
//   if (poolAccounts.has(to)) {
//     const pool = await poolsStorage.getPoolById(ctx, block, to)

//     if (!pool) return // TODO: make proper exit

//     if (pool.baseAsset.id === assetId) {
//       pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amount.toString())
//     } else if (pool.targetAsset.id === assetId) {
//       pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amount.toString())
//     }

//     PoolsPrices.set(true)
//   }
// }