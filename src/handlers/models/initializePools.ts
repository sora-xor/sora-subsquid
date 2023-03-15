import { getAssetId } from '../../utils/assets'
import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools'
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts'
import { Block, Context } from '../../processor'

let isFirstBlockIndexed = false

export async function initializePools(ctx: Context, block: Block): Promise<void> {
    if (isFirstBlockIndexed) return

    const blockNumber = block.header.height

    ctx.log.debug(`[${blockNumber}]: Initialize Pool XYK entities`)

    const poolsBuffer = new Map()

    for (const baseAssetId of BASE_ASSETS) {
        const [properties, reserves] = await Promise.all([getAllProperties(ctx, baseAssetId), getAllReserves(ctx, baseAssetId)])

        if (!properties || !reserves) continue

        for (const [{ args: [baseAsset, targetAsset] }, results] of properties) {
            const targetAssetId = getAssetId(targetAsset)
            const [poolAccountId] = results.toJSON() as string[]

            poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)

            poolsBuffer.set(poolAccountId, {
                id: poolAccountId,
                baseAssetId,
                targetAssetId,
                baseAssetReserves: BigInt(0),
                targetAssetReserves: BigInt(0),
                multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
            })
        }

        for (const [{ args: [baseAsset, targetAsset] }, value] of reserves) {
            const targetAssetId = getAssetId(targetAsset)
            const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId)
            const pool = poolsBuffer.get(poolAccountId)

            if (pool) {
                // TODO: remove any type
                pool.baseAssetReserves = BigInt((value as any)[0].toString())
                pool.targetAssetReserves = BigInt((value as any)[1].toString())
            }
        }
    }

    const entities = [...poolsBuffer.values()]

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => poolsStorage.getPoolById(ctx, entity.id)))
        ctx.log.debug(`[${blockNumber}]: ${entities.length} Pool XYKs initialized!`)
    } else {
        ctx.log.debug(`[${blockNumber}]: No Pool XYKs to initialize!`)
    }

    isFirstBlockIndexed = true
}
