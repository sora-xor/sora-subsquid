import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools'
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts'
import { Block, Context } from '../../processor'
import { toHex } from '@subsquid/substrate-processor'

let isFirstBlockIndexed = false

export async function initializePools(ctx: Context, block: Block): Promise<void> {
    if (isFirstBlockIndexed) return

    const blockNumber = block.header.height

    ctx.log.debug(`[${blockNumber}]: Initialize Pool XYK entities`)

    const poolsBuffer = new Map()

    for (const baseAssetId of BASE_ASSETS) {
      const [properties, reserves] = await Promise.all([getAllProperties(ctx, block, baseAssetId), getAllReserves(ctx, block, baseAssetId)])

      if (!properties || !reserves) continue

      properties.forEach(item => {
          const targetAssetId = item.targetAssetId
          const poolAccountId = item.reservesAccountId

          poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)

          poolsBuffer.set(poolAccountId, {
              id: poolAccountId,
              baseAssetId,
              targetAssetId,
              baseAssetReserves: BigInt(0),
              targetAssetReserves: BigInt(0),
              multiplier: toHex(baseAssetId) === toHex(XOR) && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
          })
      })

      reserves.forEach(item => {
          const { targetAssetId, baseBalance, targetBalance } = item
          const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId)
          const pool = poolsBuffer.get(poolAccountId)

          if (pool) {
              pool.baseAssetReserves = baseBalance
              pool.targetAssetReserves = targetBalance
          }
      })
    }

    const entities = [...poolsBuffer.values()]

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => poolsStorage.getPoolById(ctx, block, entity.id)))
        ctx.log.debug(`[${blockNumber}]: ${entities.length} Pool XYKs initialized!`)
    } else {
        ctx.log.debug(`[${blockNumber}]: No Pool XYKs to initialize!`)
    }

    isFirstBlockIndexed = true
}
