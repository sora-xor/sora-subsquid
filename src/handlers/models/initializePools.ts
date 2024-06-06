import { poolAccounts, getAllReserves, getAllProperties, poolsStorage } from '../../utils/pools'
import { BASE_ASSETS, XOR, DOUBLE_PRICE_POOL } from '../../utils/consts'
import { BlockContext } from '../../types'
import { Asset, PoolXYK } from '../../model'
import { Address } from '../../types'
import { getInitializePoolsLog } from '../../utils/logs'
import { assertDefined } from '../../utils'

export let initializedAtBlock: number | null = null

export async function initializePools(ctx: BlockContext): Promise<void> {
	if (initializedAtBlock !== null) return

	getInitializePoolsLog(ctx).debug('Initialize Pool XYK entities')

	const poolsBuffer = new Map<
		string,
		{
			id: Address
			baseAsset: Asset
			targetAsset: Asset
			baseAssetReserves?: bigint
			targetAssetReserves?: bigint
			multiplier: number
		}
	>()

	for (const baseAssetId of BASE_ASSETS) {
		// We don't use Promise.all here because we need consistent order of requests in the log
		const properties = await getAllProperties(ctx, baseAssetId)
		const reserves = await getAllReserves(ctx, baseAssetId)

		if (!properties || !reserves) continue

		for (const item of properties) {
			const targetAssetId = item.targetAssetId
			const poolAccountId = item.reservesAccountId

			poolAccounts.add(baseAssetId, targetAssetId, poolAccountId)

    		// We don't use Promise.all here because we need consistent order of requests in the log
			const baseAsset = await ctx.store.get(Asset, baseAssetId)
			const targetAsset = await ctx.store.get(Asset, targetAssetId)
			assertDefined(baseAsset)
			assertDefined(targetAsset)

			poolsBuffer.set(poolAccountId, {
				id: poolAccountId,
				baseAsset,
				targetAsset,
				multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
			})
		}

		reserves.forEach((item) => {
			const { targetAssetId, baseBalance, targetBalance } = item
			const poolAccountId = poolAccounts.get(baseAssetId, targetAssetId)

			if (poolAccountId) {
				const pool = poolsBuffer.get(poolAccountId)
				if (pool) {
					pool.baseAssetReserves = baseBalance
					if (baseBalance < 0) {
						throw new Error(`Base asset reserves can't be negative: ${baseBalance}`)
					}
					pool.targetAssetReserves = targetBalance
				}
			}
		})
	}

	const entities = [...poolsBuffer.values()].map(
		(pool) =>
			new PoolXYK({
				...pool,
				id: pool.id,
			}),
	)

	if (entities.length) {
        // get or create entities in DB & memory
        // We don't use Promise.all here because we need consistent order of requests in the log
        const created: PoolXYK[] = []
        for (const entity of entities) {
            const pool = await poolsStorage.getPoolById(ctx, entity.id as Address)
			if (pool) {
				created.push(pool)
			}
        }
        // update data in memory storage
		created.forEach((entity) => {
			Object.assign(entity, poolsBuffer.get(entity.id))
		});
        // save in DB
        await ctx.store.save(created)
        getInitializePoolsLog(ctx).debug(`${entities.length} Pool XYKs initialized!`)
    } else {
        getInitializePoolsLog(ctx).debug('No Pool XYKs to initialize!');
    }

	initializedAtBlock = ctx.block.header.height
}
