import BigNumber from 'bignumber.js'

import { SnapshotType, NetworkSnapshot, NetworkStats } from '../model'
import { Context } from '../processor'
import { SnapshotSecondsMap } from './consts'

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

  async getStats(ctx: Context): Promise<NetworkStats> {
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

  async sync(ctx: Context, blockTimestamp: number): Promise<void> {
    await this.syncSnapshots(ctx, blockTimestamp)
    await this.syncStats(ctx)
  }

  private async syncStats(ctx: Context): Promise<void> {
    this.networkStatsStorage.sync(ctx)
  }

  private async syncSnapshots(ctx: Context, blockTimestamp: number): Promise<void> {
    ctx.log.debug(`[NetworkSnapshotsStorage] ${this.storage.size} snapshots sync`)

    await ctx.store.save([...this.storage.values()])

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot
      const seconds = SnapshotSecondsMap[type]
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

  async getSnapshot(ctx: Context, type: SnapshotType, blockTimestamp: number): Promise<NetworkSnapshot> {
    const seconds = SnapshotSecondsMap[type]
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

  async updateAccountsStats(ctx: Context, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats(ctx)

    stats.totalAccounts = stats.totalAccounts + 1

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)
  
      snapshot.accounts = snapshot.accounts + 1
    }
  }

  async updateTransactionsStats(ctx: Context, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats(ctx)

    stats.totalTransactions = stats.totalTransactions + 1

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)

      snapshot.transactions = snapshot.transactions + 1
    }
  }

  async updateBridgeIncomingTransactionsStats(ctx: Context, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats(ctx)

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1
    }
  }

  async updateBridgeOutgoingTransactionsStats(ctx: Context, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats(ctx)

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1
    }
  }

  async updateFeesStats(ctx: Context, fee: bigint, blockTimestamp: number): Promise<void> {
    const stats = await this.networkStatsStorage.getStats(ctx)

    stats.totalFees = stats.totalFees + fee

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)

      snapshot.fees = snapshot.fees + fee
    }
  }

  async updateLiquidityStats(ctx: Context, liquiditiesUSD: BigNumber, blockTimestamp: number): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2)
    }
  }

  async updateVolumeStats(ctx: Context, volumeUSD: BigNumber, blockTimestamp: number): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getSnapshot(ctx, type, blockTimestamp)
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2)
    }
  }
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage()
