import { assetSnapshotsStorage, assetStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolsStorage } from '../../utils/pools'
import { formatDateTimestamp } from '../../utils'
import { Block, Context } from '../../processor'

export async function syncModels(ctx: Context, block: Block): Promise<void> {
	const blockTimestamp: number = formatDateTimestamp(new Date(block.header.timestamp))

	await poolsStorage.sync(ctx, block)
	await assetStorage.sync(ctx, block)
	await assetSnapshotsStorage.sync(ctx, blockTimestamp)
	await networkSnapshotsStorage.sync(ctx, blockTimestamp)
}
