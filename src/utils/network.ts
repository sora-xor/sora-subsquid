import BigNumber from 'bignumber.js'

import { SnapshotType, NetworkSnapshot, NetworkStats } from '../model'
import { AssetAmount, BlockContext } from '../types'
import { getSnapshotIndex } from './index'
import { formatDateTimestamp } from '.'
import { debug } from './log'

export const NetworkSnapshots = [SnapshotType.HOUR, SnapshotType.DAY, SnapshotType.MONTH]

const NetworkStatsId = '0'

class NetworkStatsStorage {
  private storage!: NetworkStats | null
  private id!: string

  constructor(id: string) {
    this.id = id
    this.storage = null
  }

  async sync(ctx: BlockContext): Promise<void> {
    if (this.storage) {
      ctx.store.save(this.storage)
    }
  }

  async getOrCreateStats(ctx: BlockContext): Promise<NetworkStats> {
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

  async sync(ctx: BlockContext): Promise<void> {
    await this.syncSnapshots(ctx)
    await this.syncStats(ctx)
  }

  private async syncStats(ctx: BlockContext): Promise<void> {
    this.networkStatsStorage.sync(ctx)
  }

  private async syncSnapshots(ctx: BlockContext): Promise<void> {
    debug(ctx, 'NetworkSnapshotsStorage', `${this.storage.size} snapshots sync`)

    await ctx.store.save([...this.storage.values()])

    for (const snapshot of this.storage.values()) {
      const { type, timestamp } = snapshot
	  const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
      const { timestamp: currentTimestamp } = getSnapshotIndex(blockTimestamp, type)

      if (currentTimestamp > timestamp) {
        this.storage.delete(snapshot.id)
      }
    }

    debug(ctx, 'NetworkSnapshotsStorage', `${this.storage.size} snaphots in storage after sync`)
  }

  public static getId(type: SnapshotType, index: number): string {
    return [type, index].join('-')
  }

  async getOrCreateSnapshot(ctx: BlockContext, type: SnapshotType): Promise<NetworkSnapshot> {
	const blockTimestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))
    const { index, timestamp } = getSnapshotIndex(blockTimestamp, type)
    const id = NetworkSnapshotsStorage.getId(type, index)

    let snapshot = this.storage.get(id)
    if (snapshot) {
      return snapshot
    }

    snapshot = await ctx.store.get(NetworkSnapshot, id)

    if (!snapshot) {
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

  async updateAccountsStats(ctx: BlockContext): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalAccounts = stats.totalAccounts + 1
	stats.updatedAtBlock = ctx.block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)
  
      snapshot.accounts = snapshot.accounts + 1
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateTransactionsStats(ctx: BlockContext): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalTransactions = stats.totalTransactions + 1
	stats.updatedAtBlock = ctx.block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)

      snapshot.transactions = snapshot.transactions + 1
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateBridgeIncomingTransactionsStats(ctx: BlockContext): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalBridgeIncomingTransactions = stats.totalBridgeIncomingTransactions + 1
	stats.updatedAtBlock = ctx.block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)

      snapshot.bridgeIncomingTransactions = snapshot.bridgeIncomingTransactions + 1
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateBridgeOutgoingTransactionsStats(ctx: BlockContext): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalBridgeOutgoingTransactions = stats.totalBridgeOutgoingTransactions + 1
	stats.updatedAtBlock = ctx.block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)

      snapshot.bridgeOutgoingTransactions = snapshot.bridgeOutgoingTransactions + 1
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateFeesStats(ctx: BlockContext, fee: AssetAmount): Promise<void> {
    const stats = await this.networkStatsStorage.getOrCreateStats(ctx)

    stats.totalFees = stats.totalFees + fee
	stats.updatedAtBlock = ctx.block.header.height

    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)

      snapshot.fees = snapshot.fees + fee
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateLiquidityStats(ctx: BlockContext, liquiditiesUSD: BigNumber): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)

      snapshot.liquidityUSD = liquiditiesUSD.toFixed(2)
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }

  async updateVolumeStats(ctx: BlockContext, volumeUSD: BigNumber): Promise<void> {
    for (const type of NetworkSnapshots) {
      const snapshot = await this.getOrCreateSnapshot(ctx, type)
  
      snapshot.volumeUSD = new BigNumber(snapshot.volumeUSD).plus(volumeUSD).toFixed(2)
	  snapshot.updatedAtBlock = ctx.block.header.height
    }
  }
}

export const networkSnapshotsStorage = new NetworkSnapshotsStorage()
