import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools'
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts'
import { Block, Context } from '../../processor'
import { decodeHex, toHex } from '@subsquid/substrate-processor'
import { Asset, PoolXYK } from '../../model'

let isFirstBlockIndexed = false

export async function initializePools(ctx: Context, block: Block): Promise<void> {
    if (isFirstBlockIndexed) return

    const blockNumber = block.header.height

    ctx.log.debug(`[${blockNumber}]: Initialize Pool XYK entities`)

    const poolsBuffer = new Map<string, {
		id: Uint8Array
		baseAsset: Asset
		targetAsset: Asset
		baseAssetReserves: bigint
		targetAssetReserves: bigint
		multiplier: number
	}>()

    for (const baseAssetId of BASE_ASSETS) {
		const [properties, reserves] = await Promise.all([getAllProperties(ctx, block, baseAssetId), getAllReserves(ctx, block, baseAssetId)])

		if (!properties || !reserves) continue

		for (const item of properties) {
			const targetAssetId = item.targetAssetId
			const poolAccountId = item.reservesAccountId

			poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)

			const [baseAsset, targetAsset] = await Promise.all([
				ctx.store.get(Asset, toHex(baseAssetId)),
				ctx.store.get(Asset, toHex(baseAssetId))
			])
			if (!baseAsset) throw new Error('Cannot find base asset')
			if (!targetAsset) throw new Error('Cannot find target asset')

			poolsBuffer.set(toHex(poolAccountId), {
				id: poolAccountId,
				baseAsset,
				targetAsset,
				baseAssetReserves: BigInt(0),
				targetAssetReserves: BigInt(0),
				multiplier: toHex(baseAssetId) === toHex(XOR) && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
			})
		}

		reserves.forEach(item => {
			const { targetAssetId, baseBalance, targetBalance } = item
			const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId)
			if (poolAccountId) {
				const pool = poolsBuffer.get(toHex(poolAccountId))

				if (pool) {
					pool.baseAssetReserves = baseBalance
					pool.targetAssetReserves = targetBalance
				}
			}
		})
    }

    const entities = [...poolsBuffer.values()].map(pool => new PoolXYK({
		...pool,
		id: toHex(pool.id),
	}))

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => poolsStorage.getPoolById(ctx, block, decodeHex(entity.id))))
        ctx.log.debug(`[${blockNumber}]: ${entities.length} Pool XYKs initialized!`)
    } else {
        ctx.log.debug(`[${blockNumber}]: No Pool XYKs to initialize!`)
    }

    isFirstBlockIndexed = true
}
