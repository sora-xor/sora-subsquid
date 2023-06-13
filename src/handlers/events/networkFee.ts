import { networkSnapshotsStorage } from '../../utils/network'
import { Block, Context, EventItem } from '../../processor'
import { XorFeeFeeWithdrawnEvent } from '../../types/generated/events'
import { unsupportedSpecError } from '../../utils/error'

export async function networkFeeHandler(ctx: Context, block: Block, eventItem: EventItem<'XorFee.FeeWithdrawn', true>): Promise<void> {
  	const event = new XorFeeFeeWithdrawnEvent(ctx, eventItem.event)
	if (!event.isV1) throw unsupportedSpecError(block)

  	const [account, fee] = event.asV1

  	await networkSnapshotsStorage.updateFeesStats(ctx, block, fee)
}