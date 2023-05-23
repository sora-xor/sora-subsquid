import BigNumber from 'bignumber.js'
import { SnapshotType, Asset, AssetSnapshot, AssetVolume, AssetPrice } from '../model'
import { Block, Context } from '../processor'
import { SnapshotSecondsMap, DAI } from './consts'
import { networkSnapshotsStorage } from '../utils/network'
import { AssetId } from '../types'
import { formatDateTimestamp, toAssetId } from '.'

export const AssetSnapshots = [SnapshotType.DEFAULT, SnapshotType.HOUR, SnapshotType.DAY]

export let assetPrecisions = new Map<AssetId, number>()

export const formatU128ToBalance = (u128: bigint, assetId: AssetId): string => {
	let decimals = assetPrecisions.get(assetId) ?? 18
	let padded = u128.toString().padStart(decimals + 1, '0')
	if (decimals === 0) {
		return padded
	}
	return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`
}

export const getAssetId = (asset: Uint8Array | { code: Uint8Array }): AssetId => {
	if ('code' in asset) {
		return toAssetId(asset.code)
	}
	return toAssetId(asset)
}

class AssetStorage {
	private storage!: Map<string, Asset>

	constructor() {
		this.storage = new Map()
	}

	async sync(ctx: Context, block: Block): Promise<void> {
		const blockHeight = block.header.height
		ctx.log.debug(`[${blockHeight}] [AssetStorage] ${this.storage.size} entities sync`)
		ctx.store.save([...this.storage.values()])
	}

	async getOrCreateAsset(ctx: Context, block: Block, id: AssetId): Promise<Asset> {
		let asset = this.storage.get(id)
		if (asset) {
			return asset
		}

		asset = await ctx.store.get(Asset, id)

		if (!asset) {
			asset = new Asset()
			asset.id = id
			asset.liquidity = 0n
			asset.priceUSD = '0'
			asset.supply = 0n
			asset.updatedAtBlock = block.header.height

			await ctx.store.save(asset)

			ctx.log.debug(`[AssetStorage] Created Asset ${id}`)
		}

		this.storage.set(asset.id, asset)

		return asset
	}

	async updatePrice(ctx: Context, block: Block, id: AssetId, price: string): Promise<void> {
		const asset = await this.getOrCreateAsset(ctx, block, id)

		if (asset.priceUSD !== price) {
			asset.priceUSD = price
			asset.updatedAtBlock = block.header.height
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

	private getId(assetId: AssetId, type: SnapshotType, index: number) {
		return [assetId, type, index].join('-')
	}

	async sync(ctx: Context, block: Block): Promise<void> {
		await this.syncSnapshots(ctx, block)
	}

	private async syncSnapshots(ctx: Context, block: Block): Promise<void> {
		ctx.log.debug(`[AssetSnapshotsStorage] ${this.storage.size} snapshots sync`)

		await ctx.store.save([...this.storage.values()])

		for (const snapshot of this.storage.values()) {
			const { type, timestamp } = snapshot
			const seconds = SnapshotSecondsMap[type]
			const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
			const currentSnapshotIndex = Math.floor(blockTimestamp / seconds)
			const currentTimestamp = currentSnapshotIndex * seconds

			if (currentTimestamp > timestamp) {
				this.storage.delete(snapshot.id)
			}
		}

		ctx.log.debug(`[AssetSnapshotsStorage] ${this.storage.size} snaphots in storage after sync`)
	}

	async getOrCreateSnapshot(ctx: Context, block: Block, assetId: AssetId, type: SnapshotType): Promise<AssetSnapshot> {
		const seconds = SnapshotSecondsMap[type]
		const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
		const snapshotIndex = Math.floor(blockTimestamp / seconds) // rounded snapshot index (from 0)
		const id = this.getId(assetId, type, snapshotIndex)
		
		let snapshot = this.storage.get(id)
		if (snapshot) {
			return snapshot
		}

		snapshot = await ctx.store.get(AssetSnapshot, id)

		if (!snapshot) {
			const timestamp = snapshotIndex * seconds // rounded snapshot timestamp
			const asset = await this.assetStorage.getOrCreateAsset(ctx, block, assetId)

			snapshot = new AssetSnapshot()
			snapshot.id = id
			snapshot.asset = asset
			snapshot.timestamp = timestamp
			snapshot.type = type
			// set current asset supply & liquidity on creation
			snapshot.liquidity = asset.liquidity
			snapshot.supply = asset.supply
			snapshot.mint = 0n
			snapshot.burn = 0n
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
			snapshot.updatedAtBlock = block.header.height
		}

		this.storage.set(snapshot.id, snapshot)

		return snapshot
	}

	async updatePrice(ctx: Context, block: Block, assetId: AssetId, price: string): Promise<void> {
		const bnPrice = new BigNumber(price)

		for (const type of AssetSnapshots) {
			const snapshot = await this.getOrCreateSnapshot(ctx, block, assetId, type)

			if (snapshot.priceUSD) {
				snapshot.priceUSD.close = price
				snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), bnPrice).toString()
				snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), bnPrice).toString()
			} else {
				throw new Error(`${snapshot.id} snapshot doesn't have priceUSD`)
			}
		}

		await this.assetStorage.updatePrice(ctx, block, assetId, price)
	}

	async updateVolume(ctx: Context, block: Block, assetId: AssetId, amount: BigNumber): Promise<void> {
		const asset = await this.assetStorage.getOrCreateAsset(ctx, block, assetId)

		const assetPrice = DAI === assetId
			? BigNumber(1)
			: BigNumber(asset?.priceUSD ?? 0)

		const volume = amount
		const volumeUSD = volume.multipliedBy(assetPrice.toString())

		for (const type of AssetSnapshots) {
			const snapshot = await this.getOrCreateSnapshot(ctx, block, assetId, type)

			if (snapshot.volume) {
				snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume.toString()).toString()
				snapshot.volume.amountUSD = new BigNumber(snapshot.volume!.amountUSD).plus(volumeUSD.toString()).toFixed(2)
				snapshot.updatedAtBlock = block.header.height
			} else {
				throw new Error(`${snapshot.id} snapshot doesn't have volume`)
			}
		}

		await networkSnapshotsStorage.updateVolumeStats(ctx, block, new BigNumber(volumeUSD.toString()))
	}

	async updateLiquidity(ctx: Context, block: Block, assetId: AssetId, liquidity: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			const snapshot = await this.getOrCreateSnapshot(ctx, block, assetId, type)

			snapshot.liquidity = liquidity
			snapshot.updatedAtBlock = block.header.height
		}

		const asset = await this.assetStorage.getOrCreateAsset(ctx, block, assetId)

		asset.liquidity = liquidity
		asset.updatedAtBlock = block.header.height
	}

	async updateMinted(ctx: Context, block: Block, assetId: AssetId, amount: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			const snapshot = await this.getOrCreateSnapshot(ctx, block, assetId, type)

			snapshot.mint = snapshot.mint + amount
			snapshot.updatedAtBlock = block.header.height
		}

		const asset = await this.assetStorage.getOrCreateAsset(ctx, block, assetId)

		asset.supply = asset.supply + amount
		asset.updatedAtBlock = block.header.height
	}

	async updateBurned(ctx: Context, block: Block, assetId: AssetId, amount: bigint): Promise<void> {
		for (const type of AssetSnapshots) {
			const snapshot = await this.getOrCreateSnapshot(ctx, block, assetId, type)

			snapshot.burn = snapshot.burn + amount
			snapshot.updatedAtBlock = block.header.height
		}

		const asset = await this.assetStorage.getOrCreateAsset(ctx, block, assetId)

		asset.supply = asset.supply - amount
		asset.updatedAtBlock = block.header.height
	}
}

export const assetStorage = new AssetStorage()
export const assetSnapshotsStorage = new AssetSnapshotsStorage(assetStorage)
