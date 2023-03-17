import { networkSnapshotsStorage } from '../../utils/network'
import { formatDateTimestamp } from '../../utils'
import { Block, Context, EventEntity } from '../../processor'

export async function networkFeeHandler(ctx: Context, block: Block, event: EventEntity): Promise<void> {
  if (event.kind !== 'event' || event.name !== 'XorFee.FeeWithdrawn') return

  const [account, fee] = event.event.args
  const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
  const formattedFee = BigInt(fee.toString())

  await networkSnapshotsStorage.updateFeesStats(ctx, formattedFee, blockTimestamp)
}