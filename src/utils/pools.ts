import { Asset, PoolXYK } from '../model'
import { Block, Context } from '../processor'
import { PoolXYKReservesStorage, PoolXYKPropertiesStorage } from '../types/storage'
import { XOR, DOUBLE_PRICE_POOL } from './consts'
import { decodeAssetId, toAssetId, toAddress } from '.'
import { AssetId, Address } from '../types'

// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
  flag: false,
  get() {
    return this.flag
  },
  set(flag: boolean) {
    this.flag = flag
  },
}

export const getAllReserves = async (ctx: Context, block: Block, baseAssetId: AssetId) => {
	const blockHeight = block.header.height

	try {
		ctx.log.debug(`[${blockHeight}] [${baseAssetId}] Pools XYK Reserves request...`)
		const storage = new PoolXYKReservesStorage(ctx, block.header)

		let reserves: { 
			baseAssetId: AssetId,
			targetAssetId: AssetId,
			baseBalance: bigint,
			targetBalance: bigint
		}[]

		if (storage.isV1) {
			reserves = (await storage.asV1.getPairs(decodeAssetId(baseAssetId))).map(pair => {
				const [[, targetAssetId], [baseBalance, targetBalance]] = pair
				return {
					baseAssetId,
					targetAssetId: toAssetId(targetAssetId),
					baseBalance,
					targetBalance
				}
			})
		} else if (storage.isV42) {
			reserves = (await storage.asV42.getPairs({ code: decodeAssetId(baseAssetId) })).map(pair => {
				const [[, targetAsset], [baseBalance, targetBalance]] = pair
				return {
					baseAssetId,
					targetAssetId: toAssetId(targetAsset.code),
					baseBalance,
					targetBalance
				}
			})
		} else {
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}

		ctx.log.debug(`[${blockHeight}] [${baseAssetId}] Pools XYK Reserves request completed.`)

		return reserves
	} catch (e: any) {
		ctx.log.error(`[${blockHeight}] Error getting Reserves`)
		ctx.log.error(e)
		return null
	}
}

export const getAllProperties = async (ctx: Context, block: Block, baseAssetId: AssetId) => {
	const blockHeight = block.header.height

	try {
		ctx.log.debug(`[${blockHeight}] [${baseAssetId}] Pools XYK Properties request...`)
		const storage = new PoolXYKPropertiesStorage(ctx, block.header)

		const baseAssetIdDecoded = decodeAssetId(baseAssetId)

		let properties: { 
			baseAssetId: AssetId,
			targetAssetId: AssetId,
			reservesAccountId: Address,
			feesAccountId: Address
		}[]

		if (storage.isV1) {
			properties = (await storage.asV1.getPairs(baseAssetIdDecoded)).map(pair => {
				const [[, targetAssetId], [reservesAccountId, feesAccountId]] = pair
				return {
					baseAssetId,
					targetAssetId: toAssetId(targetAssetId),
					reservesAccountId: toAddress(reservesAccountId),
					feesAccountId: toAddress(feesAccountId)
				}
			})
		} else if (storage.isV7) {
			properties = (await storage.asV7.getPairs(baseAssetIdDecoded)).map(pair => {
				const [[, targetAssetId], [reservesAccountId, feesAccountId]] = pair
				return {
					baseAssetId,
					targetAssetId: toAssetId(targetAssetId),
					reservesAccountId: toAddress(reservesAccountId),
					feesAccountId: toAddress(feesAccountId)
				}
			})
		} else if (storage.isV42) {
			properties = (await storage.asV42.getPairs({ code: baseAssetIdDecoded })).map(pair => {
				const [[, targetAsset], [reservesAccountId, feesAccountId]] = pair
				return {
					baseAssetId,
					targetAssetId: toAssetId(targetAsset.code),
					reservesAccountId: toAddress(reservesAccountId),
					feesAccountId: toAddress(feesAccountId)
				}
			})
		} else {
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}

		ctx.log.debug(`[${blockHeight}] [${baseAssetId}] Pools XYK Properties request completed`)
		return properties
	} catch (e: any) {
		ctx.log.error(`[${blockHeight}] Error getting Properties`)
		ctx.log.error(e)
		return null
	}
}

export const getPoolProperties = async (ctx: Context, block: Block, baseAssetId: AssetId, targetAssetId: AssetId) => {
	const blockHeight = block.header.height

	try {
		ctx.log.debug(`[${baseAssetId}${targetAssetId}] Pool properties request...`)
		const storage = new PoolXYKPropertiesStorage(ctx, block.header)

		const baseAssetIdDecoded = decodeAssetId(baseAssetId)
		const targetAssetIdDecoded = decodeAssetId(targetAssetId)
		
		let properties: {
			reservesAccountId: Uint8Array,
			feesAccountId: Uint8Array
		}[]

		if (storage.isV1) {
			properties = (await storage.asV1.getPairs(baseAssetIdDecoded, targetAssetIdDecoded)).map(pair => {
				const [reservesAccountId, feesAccountId] = pair[1]
				return { reservesAccountId, feesAccountId }
			})
		} 
		else if (storage.isV7) {
			properties = (await storage.asV7.getPairs(baseAssetIdDecoded, targetAssetIdDecoded)).map(pair => {
				const [reservesAccountId, feesAccountId] = pair[1]
				return { reservesAccountId, feesAccountId }
			})
		}
		else if (storage.isV42) {
			const data = await storage.asV42.get({ code: baseAssetIdDecoded }, { code: targetAssetIdDecoded })
			properties = data ? [{ reservesAccountId: data[0], feesAccountId: data[1] }] : []
		}
		else {
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}
		ctx.log.debug(`[${blockHeight}] [${baseAssetId}:${targetAssetId}] Pool properties request completed`)

		return {
			baseAssetId,
			targetAssetId,
			reservesAccountId: toAddress(properties[0].reservesAccountId),
			feesAccountId: toAddress(properties[0].feesAccountId)
		}
	} catch (error: any) {
		ctx.log.error(`[${blockHeight}] Error getting pool properties`)
		ctx.log.error(error)
		return null
	}
}

class PoolAccountsStorage {
	private storage: Map<AssetId, Map<AssetId, Address>>
	private accountIds: Map<Address, [AssetId, AssetId]>

	constructor() {
		this.storage = new Map()
		this.accountIds = new Map()
	}

	add(ctx: Context, baseAssetId: AssetId, targetAssetId: AssetId, poolAccountId: Address): void {
		if (!this.storage.has(baseAssetId)) {
			this.storage.set(baseAssetId, new Map())
		}
		this.storage.get(baseAssetId)!.set(targetAssetId, poolAccountId)
		this.accountIds.set(poolAccountId, [baseAssetId, targetAssetId])
	}

	get(baseAssetId: AssetId, targetAssetId: AssetId): Address | undefined {
		return this.getMap(baseAssetId)?.get(targetAssetId)
	}

	getById(poolAccountId: Address) {
		return this.accountIds.get(poolAccountId)
	}

	getMap(baseAssetId: AssetId) {
		return this.storage.get(baseAssetId)
	}

	has(poolAccountId: Address): boolean {
		return this.accountIds.has(poolAccountId)
	}

	async getPoolAccountId (ctx: Context, block: Block, baseAssetId: AssetId, targetAssetId: AssetId): Promise<Address | null> {
		const blockHeight = block.header.height

		const id = this.get(baseAssetId, targetAssetId)
		if (id) return id

		const properties = await getPoolProperties(ctx, block, baseAssetId, targetAssetId)
		const poolAccountId = properties?.reservesAccountId ?? null

		if (poolAccountId) {
			poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)
		} else {
			ctx.log.error(`[${blockHeight}] Cannot find pool id ${baseAssetId}:${targetAssetId}`)
		}

		return poolAccountId
	}
}

class PoolsStorage {
	private storage!: Map<string, PoolXYK>

	constructor() {
		this.storage = new Map()
	}

	async getPoolById(ctx: Context, block: Block, poolId: Address): Promise<PoolXYK | null> {
		let pool = this.storage.get(poolId)

		if (pool) {
			return pool
		}

		const assetIds = poolAccounts.getById(poolId)

		if (assetIds) {
			return await this.getPool(ctx, block, ...assetIds)
		}

		return null
	}

	async sync(ctx: Context, block: Block): Promise<void> {
		const blockHeight = block.header.height
		ctx.log.debug(`[${blockHeight}] [PoolsStorage] ${this.storage.size} entities sync`)
		await ctx.store.save([...this.storage.values()])
	}

	async getPool(ctx: Context, block: Block, baseAssetId: AssetId, targetAssetId: AssetId): Promise<PoolXYK | null> {
		const blockHeight = block.header.height

		const poolId = await poolAccounts.getPoolAccountId(ctx, block, baseAssetId, targetAssetId)

		if (!poolId) return null

		let pool = this.storage.get(poolId)
	
		if (pool) {
			return pool
		}

		pool = (await ctx.store.find(PoolXYK, {
			relations: {
				baseAsset: true,
				targetAsset: true
			},
			where: {
				id: poolId
			},
		}))[0]
		

		if (!pool) {
			const [baseAsset, targetAsset] = await Promise.all([
				ctx.store.get(Asset, baseAssetId),
				ctx.store.get(Asset, targetAssetId)
			])
			if (!baseAsset) throw new Error(`[${blockHeight}] Cannot find base asset: ${baseAssetId}`)
			if (!targetAsset) throw new Error(`[${blockHeight}] Cannot find target asset: ${targetAssetId}`)

			pool = new PoolXYK({
				id: poolId,
				baseAsset,
				targetAsset,
				baseAssetReserves: 0n,
				targetAssetReserves: 0n,
				multiplier: baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1,
				priceUSD: '0',
				strategicBonusApy: '0'
			})

			await ctx.store.save(pool)

			ctx.log.debug(`[${blockHeight}] [${poolId}] Created Pool XYK`)
		}

		this.storage.set(poolId, pool)

		return pool
	}
}

export const poolAccounts = new PoolAccountsStorage()
export const poolsStorage = new PoolsStorage()
