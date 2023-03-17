import { toHex } from '@subsquid/substrate-processor'
import { Asset, PoolXYK } from '../model'
import { Block, Context } from '../processor'
import { PoolXYKReservesStorage, PoolXYKPropertiesStorage } from '../types/storage'
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

export const getAllReserves = async (ctx: Context, block: Block, baseAssetId: Uint8Array) => {
  try {
    ctx.log.debug(`[${baseAssetId}] Pools XYK Reserves request...`)
    const storage = new PoolXYKReservesStorage(ctx, block.header)

    let reserves: { 
      baseAssetId: Uint8Array,
      targetAssetId: Uint8Array,
      baseBalance: bigint,
      targetBalance: bigint
    }[]
    if (storage.isV1) {
      reserves = (await storage.asV1.getPairs(baseAssetId)).map(pair => {
        const [[baseAssetId, targetAssetId], [baseBalance, targetBalance]] = pair
        return { baseAssetId, targetAssetId, baseBalance, targetBalance }
      })
    } else if (storage.isV42) {
      reserves = (await storage.asV42.getPairs({ code: baseAssetId })).map(pair => {
        const [[baseAsset, targetAsset], [baseBalance, targetBalance]] = pair
        return { baseAssetId: baseAsset.code, targetAssetId: targetAsset.code, baseBalance, targetBalance }
      })
    } else {
      throw new Error('Unsupported spec')
    }

    ctx.log.debug(`[${baseAssetId}] Pools XYK Reserves request completed.`)
    return reserves
  } catch (e: any) {
    ctx.log.error('Error getting Reserves')
    ctx.log.error(e)
    return null
  }
}

export const getAllProperties = async (ctx: Context, block: Block, baseAssetId: Uint8Array) => {
  try {
    ctx.log.debug(`[${baseAssetId}] Pools XYK Properties request...`)
    const storage = new PoolXYKPropertiesStorage(ctx, block.header)

    let properties: { 
      baseAssetId: Uint8Array,
      targetAssetId: Uint8Array,
      reservesAccountId: Uint8Array,
      feesAccountId: Uint8Array
    }[]
    if (storage.isV1) {
      properties = (await storage.asV1.getPairs(baseAssetId)).map(pair => {
        const [[baseAssetId, targetAssetId], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId, targetAssetId, reservesAccountId, feesAccountId }
      })
    } else if (storage.isV7) {
      properties = (await storage.asV7.getPairs(baseAssetId)).map(pair => {
        const [[baseAssetId, targetAssetId], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId, targetAssetId, reservesAccountId, feesAccountId }
      })
    } else if (storage.isV42) {
      properties = (await storage.asV42.getPairs({ code: baseAssetId })).map(pair => {
        const [[baseAsset, targetAsset], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId: baseAsset.code, targetAssetId: targetAsset.code, reservesAccountId, feesAccountId }
      })
    } else {
      throw new Error('Unsupported spec')
    }

    ctx.log.debug(`[${baseAssetId}] Pools XYK Properties request completed.`)
    return properties
  } catch (e: any) {
    ctx.log.error('Error getting Properties')
    ctx.log.error(e)
    return null
  }
}

export const getPoolProperties = async (ctx: Context, block: Block, baseAssetId: Uint8Array, targetAssetId: Uint8Array) => {
  try {
    ctx.log.debug(`[${baseAssetId}${targetAssetId}] Pool properties request...`)
    const storage = new PoolXYKPropertiesStorage(ctx, block.header)
    
    let properties: { 
      baseAssetId: Uint8Array,
      targetAssetId: Uint8Array,
      reservesAccountId: Uint8Array,
      feesAccountId: Uint8Array
    }[]
    if (storage.isV1) {
      properties = (await storage.asV1.getPairs(baseAssetId, targetAssetId)).map(pair => {
        const [[baseAssetId, targetAssetId], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId, targetAssetId, reservesAccountId, feesAccountId }
      })
    } else if (storage.isV7) {
      properties = (await storage.asV7.getPairs(baseAssetId, targetAssetId)).map(pair => {
        const [[baseAssetId, targetAssetId], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId, targetAssetId, reservesAccountId, feesAccountId }
      })
    } else if (storage.isV42) {
      properties = (await storage.asV42.getPairs({ code: baseAssetId }, { code: targetAssetId })).map(pair => {
        const [[baseAsset, targetAsset], [reservesAccountId, feesAccountId]] = pair
        return { baseAssetId: baseAsset.code, targetAssetId: targetAsset.code, reservesAccountId, feesAccountId }
      })
    } else {
      throw new Error('Unsupported spec')
    }
    ctx.log.debug(`[${baseAssetId}${targetAssetId}] Pool properties request completed`)

    return properties[0] ?? null
  } catch (error: any) {
    ctx.log.error('Error getting pool properties')
    ctx.log.error(error)
    return null
  }
}

class PoolAccountsStorage {
  private storage: Map<string, Map<Uint8Array, Uint8Array>>
  private accountIds: Map<string, [Uint8Array, Uint8Array]>

  constructor() {
    this.storage = new Map()
    this.accountIds = new Map()
  }

  add(ctx: Context, baseAssetId: Uint8Array, targetAssetId: Uint8Array, poolAccountId: Uint8Array): void {
    if (!this.storage.has(toHex(baseAssetId))) {
      this.storage.set(toHex(baseAssetId), new Map())
    }
    this.storage.get(toHex(baseAssetId))!.set(targetAssetId, poolAccountId)
    this.accountIds.set(toHex(poolAccountId), [baseAssetId, targetAssetId])
  }

  get(baseAssetId: Uint8Array, targetAssetId: Uint8Array): Uint8Array | undefined {
    return this.getMap(baseAssetId)?.get(targetAssetId)
  }

  getById(poolAccountId: Uint8Array) {
    return this.accountIds.get(toHex(poolAccountId))
  }

  getMap(baseAssetId: Uint8Array) {
    return this.storage.get(toHex(baseAssetId))
  }

  has(poolAccountId: Uint8Array): boolean {
    return this.accountIds.has(toHex(poolAccountId))
  }

  async getPoolAccountId (ctx: Context, block: Block, baseAssetId: Uint8Array, targetAssetId: Uint8Array): Promise<Uint8Array | null> {
    const id = this.get(baseAssetId, targetAssetId)

    if (id) return id

    // TODO: return api request
    const properties = await getPoolProperties(ctx, block, baseAssetId, targetAssetId)
    const poolAccountId = properties?.reservesAccountId ?? null

    if (poolAccountId) {
      poolAccounts.add(ctx, baseAssetId, targetAssetId, poolAccountId)
    } else {
      ctx.log.error(`Cannot find pool id ${toHex(baseAssetId)}:${toHex(targetAssetId)}`)
    }

    return poolAccountId
  }
}

class PoolsStorage {
  private storage!: Map<string, PoolXYK>

  constructor() {
    this.storage = new Map()
  }

  async getPoolById(ctx: Context, block: Block, poolId: Uint8Array): Promise<PoolXYK | null> {
    let pool = this.storage.get(toHex(poolId))

    if (pool) {
      return pool
    }

    const adresses = poolAccounts.getById(poolId)

    if (adresses) {
      return await this.getPool(ctx, block, ...adresses)
    }

    return null
  }

  async sync(ctx: Context): Promise<void> {
    ctx.log.debug(`[PoolsStorage] ${this.storage.size} entities sync`)
    await ctx.store.save([...this.storage.values()])
  }

  async getPool(ctx: Context, block: Block, baseAssetId: Uint8Array, targetAssetId: Uint8Array): Promise<PoolXYK | null> {
    const poolId = await poolAccounts.getPoolAccountId(ctx, block, baseAssetId, targetAssetId)

    if (!poolId) return null

    let pool = this.storage.get(toHex(poolId))
  
    if (pool) {
      return pool
    }

    pool = await ctx.store.get(PoolXYK, toHex(poolId))

    if (!pool) {
      const baseAsset = await ctx.store.get(Asset, toHex(baseAssetId))
      if (!baseAsset) throw new Error(`Cannot find base asset: ${toHex(baseAssetId)}`)

      const targetAsset = await ctx.store.get(Asset, toHex(targetAssetId))
      if (!targetAsset) throw new Error(`Cannot find target asset: ${toHex(targetAssetId)}`)

      pool = new PoolXYK()
      pool.id = toHex(poolId)
      // TODO: check this logic with baseAsset id and targetAsset id
      pool.baseAsset = baseAsset
      pool.targetAsset = targetAsset
      pool.baseAssetReserves = BigInt(0)
      pool.targetAssetReserves = BigInt(0)
      pool.multiplier = baseAssetId === XOR && DOUBLE_PRICE_POOL.includes(targetAssetId) ? 2 : 1
      pool.priceUSD = '0'
      pool.strategicBonusApy = '0'

      await ctx.store.save(pool)

      ctx.log.debug(`[${poolId}] Created Pool XYK`)
    }

    this.storage.set(toHex(poolId), pool)

    return pool
  }
}

export const poolAccounts = new PoolAccountsStorage()
export const poolsStorage = new PoolsStorage()
