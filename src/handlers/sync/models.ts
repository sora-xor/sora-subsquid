import { assetSnapshotsStorage, assetStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolsStorage } from '../../utils/pools'
import { Block, Context } from '../../types'

export async function syncModels(ctx: Context, block: Block): Promise<void> {
	await poolsStorage.sync(ctx, block)
	await assetStorage.sync(ctx, block)
	await assetSnapshotsStorage.sync(ctx, block)
	await networkSnapshotsStorage.sync(ctx, block)
}
