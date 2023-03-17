import BigNumber from 'bignumber.js'
import { SnapshotType, Asset, AssetSnapshot, AssetVolume, AssetPrice } from '../model'
import { Context } from '../processor'
import { SnapshotSecondsMap, DAI } from './consts'
import { networkSnapshotsStorage } from '../utils/network'
import { decodeHex, toHex } from '@subsquid/substrate-processor'

export const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY]

export let assetPrecisions = new Map<string, number>()

export const formatU128ToBalance = (u128: bigint, assetId: Uint8Array): string => {
  let decimals = assetPrecisions.get(toHex(assetId)) ?? 18
  let padded = u128.toString().padStart(decimals + 1, '0')
  if (decimals === 0) {
      return padded
  }
  return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`
}

class AssetStorage {
  private storage!: Map<string, Asset>

  constructor() {
    this.storage = new Map()
  }

  async sync(ctx: Context): Promise<void> {
    ctx.log.debug(`[AssetStorage] ${this.storage.size} entities sync`)
    ctx.store.save([...this.storage.values()])
  }

  async getAsset(ctx: Context, id: Uint8Array): Promise<Asset> {
    let asset = this.storage.get(toHex(id))
    if (asset) {
      return asset
    }

    asset = await ctx.store.get(Asset, toHex(id))

    if (!asset) {
      asset = new Asset()
      asset.id = toHex(id)
      asset.liquidity = BigInt(0)
      asset.priceUSD = '0'
      asset.supply = BigInt(0)

      await ctx.store.save(asset)

      ctx.log.debug(`[AssetStorage] Created Asset ${id}`)
    }

    this.storage.set(asset.id, asset)

    return asset
  }

  async updatePrice(ctx: Context, id: Uint8Array, price: string): Promise<void> {
    const asset = await this.getAsset(ctx, id)

    if (asset.priceUSD !== price) {
      asset.priceUSD = price
      // to update asset price by ws subscription instantly
      await ctx.store.save(asset)
    }
  }
}

class AssetSnapshotsStorage {
  private storage!: Map<string, AssetSnapshot>
  public assetStorage!: AssetStorage

  constructor(assetStorage: AssetStorage) {
    this.storage = new Map()
    this.assetStorage = assetStorage
  }

  private getId(assetId: Uint8Array, type: SnapshotType, index: number) {
    return [toHex(assetId), type, index].join('-')
  }

  async sync(ctx: Context, blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(ctx, blockTimestamp)
  }

  private async syncSnapshots(ctx: Context, blockTimestamp: number): Promise<void> {
    ctx.log.debug(`[AssetSnapshotsStorage] ${this.storage.size} snapshots sync`)

    await ctx.store.save([...this.storage.values()])

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot
      const seconds = SnapshotSecondsMap[type]
      const currentShapshotIndex = Math.floor(blockTimestamp / seconds)
      const currentTimestamp = currentShapshotIndex * seconds

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id)
      }
    }

    ctx.log.debug(`[AssetSnapshotsStorage] ${this.storage.size} snaphots in storage after sync`)
  }

  async getSnapshot(ctx: Context, assetId: Uint8Array, type: SnapshotType, blockTimestamp: number): Promise<AssetSnapshot> {
    const seconds = SnapshotSecondsMap[type]
    const shapshotIndex = Math.floor(blockTimestamp / seconds) // rounded snapshot index (from 0)
    const id = this.getId(assetId, type, shapshotIndex)

    let snapshot = this.storage.get(id)
    if (snapshot) {
      return snapshot
    }

    snapshot = await ctx.store.get(AssetSnapshot, id)

    if (!snapshot) {
      const timestamp = shapshotIndex * seconds // rounded snapshot timestamp
      const asset = await this.assetStorage.getAsset(ctx, assetId)

      snapshot = new AssetSnapshot()
      snapshot.id = id
      snapshot.asset = asset
      snapshot.timestamp = timestamp
      snapshot.type = type
      // set current asset supply & liquidity on creation
      snapshot.liquidity = asset.liquidity
      snapshot.supply = asset.supply
      snapshot.mint = BigInt(0)
      snapshot.burn = BigInt(0)
      snapshot.volume = new AssetVolume({
        amount: '0',
        amountUSD: '0'
      })
      // set current asset price on creation
      snapshot.priceUSD = new AssetPrice({
        open: asset.priceUSD,
        close: asset.priceUSD,
        high: asset.priceUSD,
        low: asset.priceUSD,
      })
    }

    this.storage.set(snapshot.id, snapshot)

    return snapshot
  }

  async updatePrice(ctx: Context, assetId: Uint8Array, price: string, blockTimestamp: number): Promise<void> {
    const bnPrice = new BigNumber(price)

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(ctx, assetId, type, blockTimestamp)

      // TODO: remove !
      snapshot!.priceUSD!.close = price
      snapshot!.priceUSD!.high = BigNumber.max(new BigNumber(snapshot!.priceUSD!.high), bnPrice).toString()
      snapshot!.priceUSD!.low = BigNumber.min(new BigNumber(snapshot!.priceUSD!.low), bnPrice).toString()
    }

    await this.assetStorage.updatePrice(ctx, assetId, price)
  }

  async updateVolume(ctx: Context, assetId: Uint8Array, amount: BigNumber, blockTimestamp: number): Promise<void> {
    const asset = await this.assetStorage.getAsset(ctx, assetId)

    const assetPrice = DAI === assetId
      ? BigInt(1)
      : BigInt(asset?.priceUSD ?? 0)

    const volume = amount
    const volumeUSD = volume.multipliedBy(assetPrice.toString())

    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(ctx, assetId, type, blockTimestamp)

      // TODO: remove !
      snapshot!.volume!.amount = new BigNumber(snapshot!.volume!.amount).plus(volume.toString()).toString()
      snapshot!.volume!.amountUSD = new BigNumber(snapshot!.volume!.amountUSD).plus(volumeUSD.toString()).toFixed(2)
    }

    await networkSnapshotsStorage.updateVolumeStats(ctx, new BigNumber(volumeUSD.toString()), blockTimestamp)
  }

  async updateLiquidity(ctx: Context, assetId: Uint8Array, liquidity: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(ctx, assetId, type, blockTimestamp)

      snapshot.liquidity = liquidity
    }

    const asset = await this.assetStorage.getAsset(ctx, assetId)

    asset.liquidity = liquidity
  }

  async updateMinted(ctx: Context, assetId: Uint8Array, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(ctx, assetId, type, blockTimestamp)

      snapshot.mint = snapshot.mint + amount
    }

    const asset = await this.assetStorage.getAsset(ctx, assetId)

    asset.supply = asset.supply + amount
  }

  async updateBurned(ctx: Context, assetId: Uint8Array, amount: bigint, blockTimestamp: number): Promise<void> {
    for (const type of AssetSnapshots) {
      const snapshot = await this.getSnapshot(ctx, assetId, type, blockTimestamp)

      snapshot.burn = snapshot.burn + amount
    }

    const asset = await this.assetStorage.getAsset(ctx, assetId)

    asset.supply = asset.supply - amount
  }
}

export const assetStorage = new AssetStorage()
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage)
