import BigNumber from 'bignumber.js'

import { SnapshotType, NetworkSnapshot, NetworkStats } from '../model'
import { AssetAmount, Block, Context } from '../types'
import { SnapshotSecondsMap } from './consts'
import { formatDateTimestamp } from '.'

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH]

const NetworkStatsId = '0'

class NetworkStatsStorage {
  private storage!: NetworkStats | null
  private id!: string

  constructor(id: string) {
    this.id = id
    this.storage = null
  }

  async sync(ctx: Context): Promise<void> {
    if (this.storage) {
      ctx.store.save(this.storage)
    }
  }

  async getOrCreateStats(ctx: Context): Promise<NetworkStats> {
    if (this.storage) return this.storage

    let entity = await ctx.store.get(NetworkStats, this.id)

    if (!entity) {
		entity = new NetworkStats()
		entity.id = this.id
		entity.totalFees = 0n
		entity.totalAccounts = 0
		entity.totalTransactions = 0
		entity.totalBridgeIncomingTransactions = 0
		entity.totalBridgeOutgoingTransactions = 0
    }

    this.storage = entity

    return entity
  }
}

class NetworkSnapshotsStorage {
  private storage!: Map<string, NetworkSnapshot>
  private networkStatsStorage!: NetworkStatsStorage

  constructor() {
    this.storage = new Map()
    this.networkStatsStorage = new NetworkStatsStorage(NetworkStatsId)
  }

  async sync(ctx: Context, block: Block): Promise<void> {
    await this.syncSnapshots(ctx, block)
    await this.syncStats(ctx)
  }

  private async syncStats(ctx: Context): Promise<void> {
    this.networkStatsStorage.sync(ctx)
  }

  private async syncSnapshots(ctx: Context, block: Block): Promise<void> {
    ctx.log.debug(`[NetworkSnapshotsStorage] ${this.storage.size} snapshots sync`)

    await ctx.store.save([...this.storage.values()])

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot
      const seconds = SnapshotSecondsMap[type]
	  const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
      const currentSnapshotIndex =  Math.floor(blockTimestamp / seconds)
      const currentTimestamp = currentSnapshotIndex * seconds

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id)
      }
    }

    ctx.log.debug(`[NetworkSnapshotsStorage] ${this.storage.size} snaphots in storage after sync`)
  }

  private getId(type: SnapshotType, index: number): string {
    return [type, index].join('-')
  }

  async getOrCreateSnapshot(ctx: Context, type: SnapshotType, block: Block): Promise<NetworkSnapshot> {
    const seconds = SnapshotSecondsMap[type]
	const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
    const snapshotIndex =  Math.floor(blockTimestamp / seconds)
    const id = this.getId(type, snapshotIndex)

    let snapshot = this.storage.get(id)
    if (snapshot) {
      return snapshot
    }

    snapshot = await ctx.store.get(NetworkSnapshot, id)

    if (!snapshot) {
      const timestamp = snapshotIndex * seconds // rounded snapshot timestamp

      snapshot = new NetworkSnapshot()
      snapshot.id = id
      snapshot.type = type
      snapshot.timestamp = timestamp
      snapshot.accounts = 0
      snapshot.transactions = 0
      snapshot.fees = 0n
      snapshot.liquidityUSD = '0'
      snapshot.volumeUSD = '0'
      snapshot.bridgeIncomingTransactions = 0
      snapshot.bridgeOutgoingTransactions = 0
    }

    this.storage.set(snapshot.id, snapshot)

    return snapshot
  }

  async updateAccountsStats(ctx: Context, block: Block): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalAccounts = stats.totalAccounts + 1
	stats.updatedAtBlock = block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)
  
      snapshot.accounts = snapshot.accounts + 1
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateTransactionsStats(ctx: Context, block: Block): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalTransactions = stats.totalTransactions + 1
	stats.updatedAtBlock = block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)

      snapshot.transactions = snapshot.transactions + 1
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateBridgeIncomingTransactionsStats(ctx: Context, block: Block): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1
	stats.updatedAtBlock = block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateBridgeOutgoingTransactionsStats(ctx: Context, block: Block): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1
	stats.updatedAtBlock = block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateFeesStats(ctx: Context, block: Block, fee: AssetAmount): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalFees = stats.totalFees + fee
	stats.updatedAtBlock = block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)

      snapshot.fees = snapshot.fees + fee
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateLiquidityStats(ctx: Context, block: Block, liquiditiesUSD: BigNumber): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2)
	  snapshot.updatedAtBlock = block.header.height
    }
  }

  async updateVolumeStats(ctx: Context, block: Block, volumeUSD: BigNumber): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type, block)
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2)
	  snapshot.updatedAtBlock = block.header.height
    }
  }
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage()
