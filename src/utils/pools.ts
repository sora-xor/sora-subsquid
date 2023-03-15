import { PoolXYK } from '../model'
import { Context } from '../processor'
import { XOR, DOUBLE_PRICE_POOL } from './consts'

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

export const getAllReserves = async (ctx: Context, baseAssetId: string) => {
  try {
    ctx.log.debug(`[${baseAssetId}] Pools XYK Reserves request...`)
    const reserves = await api.query.poolXYK.reserves.entries(baseAssetId)
    ctx.log.debug(`[${baseAssetId}] Pools XYK Reserves request completed.`)
    return reserves
  } catch (e: any) {
    ctx.log.error('Error getting Reserves')
    ctx.log.error(e)
    return null
  }
}

export const getAllProperties = async (ctx: Context, baseAssetId: string) => {
  try {
    ctx.log.debug(`[${baseAssetId}] Pools XYK Properties request...`)
    const properties = await api.query.poolXYK.properties.entries(baseAssetId)
    ctx.log.debug(`[${baseAssetId}] Pools XYK Properties request completed.`)
    return properties
  } catch (e: any) {
    ctx.log.error('Error getting Properties')
    ctx.log.error(e)
    return null
  }
}

export const getPoolProperties = async (ctx: Context, baseAssetId: string, targetAssetId: string): Promise<string | null> => {
  try {
    ctx.log.debug(`[${baseAssetId}${targetAssetId}] Pool properties request...`)
    const props = (await api.query.poolXYK.properties(baseAssetId, targetAssetId)).toJSON() as any
    ctx.log.debug(`[${baseAssetId}${targetAssetId}] Pool properties request completed`)

    if (!Array.isArray(props)) return null

    const poolAccountId = props[0]

    return poolAccountId
  } catch (error: any) {
    ctx.log.error('Error getting pool properties')
    ctx.log.error(error)
    return null
  }
}

class PoolAccountsStorage {
  private storage: Map<string, Map<string, string>>
  private accountIds: Map<string, [string, string]>

  constructor() {
    this.storage = new Map()
    this.accountIds = new Map()
  }

  add(ctx: Context, baseAssetId: string, targetAssetId: string, poolAccountId: string): void {
    if (!this.storage.has(baseAssetId)) {
      this.storage.set(baseAssetId, new Map())
    }
    this.storage.get(baseAssetId)!.set(targetAssetId, poolAccountId)
    this.accountIds.set(poolAccountId, [baseAssetId, targetAssetId])
  }

  get(baseAssetId: string, targetAssetId: string): string | undefined {
    return this.getMap(baseAssetId)?.get(targetAssetId)
  }

  getById(poolAccountId: string) {
    return this.accountIds.get(poolAccountId)
  }

  getMap(baseAssetId: string) {
    return this.storage.get(baseAssetId)
  }

  has(poolAccountId: string): boolean {
    return this.accountIds.has(poolAccountId)
  }

  async getPoolAccountId (ctx: Context, baseAssetId: string, targetAssetId: string): Promise<string | null> {
    const id = this.get(baseAssetId, targetAssetId)

    if (id) return id

    // TODO: return api request
    const poolAccountId = null // await getPoolProperties(ctx, baseAssetId, targetAssetId)

    if (poolAccountId) {
      poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)
    } else {
      ctx.log.error(`Cannot find pool id ${baseAssetId}:${targetAssetId}`)
    }

    return poolAccountId
  }
}

class PoolsStorage {
  private storage!: Map<string, PoolXYK>

  constructor() {
    this.storage = new Map()
  }

  async getPoolById(ctx: Context, poolId: string): Promise<PoolXYK | null> {
    let pool = this.storage.get(poolId)

    if (pool) {
      return pool
    }

    const adresses = poolAccounts.getById(poolId)

    if (adresses) {
      return await this.getPool(ctx, ...adresses)
    }

    return null
  }

  async sync(ctx: Context): Promise<void> {
    ctx.log.debug(`[PoolsStorage] ${this.storage.size} entities sync`)
    await ctx.store.save([...this.storage.values()])
  }

  async getPool(ctx: Context, baseAssetId: string, targetAssetId: string): Promise<PoolXYK | null> {
    const poolId = await poolAccounts.getPoolAccountId(ctx, baseAssetId, targetAssetId)

    if (!poolId) return null

    let pool = this.storage.get(poolId)
  
    if (pool) {
      return pool
    }

    pool = await ctx.store.get(PoolXYK, poolId)

    if (!pool) {
      pool = new PoolXYK()
      pool.id = poolId
      // TODO: check this logic with baseAsset id and targetAsset id
      pool.baseAsset.id = baseAssetId
      pool.targetAsset.id = targetAssetId
      pool.baseAssetReserves = BigInt(0)
      pool.targetAssetReserves = BigInt(0)
      pool.multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1
      pool.priceUSD = '0'
      pool.strategicBonusApy = '0'

      await ctx.store.save(pool)

      ctx.log.debug(`[${poolId}] Created Pool XYK`)
    }

    this.storage.set(poolId, pool)

    return pool
  }
}

export const poolAccounts = new PoolAccountsStorage()
export const poolsStorage = new PoolsStorage()
