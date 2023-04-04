import { networkSnapshotsStorage } from '../../utils/network'
import { formatDateTimestamp } from '../../utils'
import { Block, Context, EventEntity } from '../../processor'
import { XorFeeFeeWithdrawnEvent } from '../../types/events'

export async function networkFeeHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
  	if (eventEntity.kind !== 'event' || eventEntity.name !== 'XorFee.FeeWithdrawn') return

	const blockHeight = block.header.height

	const event = new XorFeeFeeWithdrawnEvent(ctx, eventEntity.event)
	if (!event.isV1) throw new Error(`[${blockHeight}] Unsupported spec`)

  	const [account, fee] = event.asV1
  	const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))

  	await networkSnapshotsStorage.updateFeesStats(ctx, fee, blockTimestamp)
}