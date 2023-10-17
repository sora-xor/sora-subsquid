import { assetSnapshotsStorage, assetStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolsStorage } from '../../utils/pools'
import { BlockContext } from '../../types'
import { debug } from '../../utils/logs'

export async function syncModels(ctx: BlockContext): Promise<void> {
	debug(ctx, 'BlockHandler', `Sync models`)

	await poolsStorage.sync(ctx)
	await assetSnapshotsStorage.sync(ctx)
	await assetStorage.sync(ctx)
	await networkSnapshotsStorage.sync(ctx)
}

export async function updateAssetsDailyStats(ctx: BlockContext): Promise<void> {
	debug(ctx, 'BlockHandler', `Update assets daily stats`)

  	await assetStorage.updateDailyStats(ctx)
  	await assetStorage.sync(ctx)
}

export async function updateAssetsWeeklyStats(ctx: BlockContext): Promise<void> {
	debug(ctx, 'BlockHandler', `Update assets weekly stats`)

  	await assetStorage.updateWeeklyStats(ctx)
  	await assetStorage.sync(ctx)
}
