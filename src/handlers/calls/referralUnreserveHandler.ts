import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallEntity, Context } from '../../processor'
import { findEventEntityWithExtrinsic } from '../../utils/events'
import { BalancesTransferEvent } from '../../types/events'
import { decodeUint8 } from '../../utils'

export async function referralUnreserveHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || call.name !== 'Referrals.unreserve') return

    ctx.log.debug('Caught referral unreserve extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)
    const extrinsicHash = call.extrinsic.hash

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {
        const balancesTransferEventEntity = findEventEntityWithExtrinsic('Balances.Transfer', block, extrinsicHash)

        if (balancesTransferEventEntity) {
            const balancesTransferEvent = new BalancesTransferEvent(ctx, balancesTransferEventEntity.event)

            if (balancesTransferEvent.isV1) {
                const [from, to, amount] = balancesTransferEvent.asV1

                details = {
                    from: decodeUint8(from),
                    to: decodeUint8(to),
                    amount: formatU128ToBalance(amount.toString(), XOR)
                }
            } else if (balancesTransferEvent.asV42) {
                const { from, to, amount } = balancesTransferEvent.asV42

                details = {
                    from: from.toString(),
                    to: to.toString(),
                    amount: formatU128ToBalance(amount.toString(), XOR)
                }
            } else {
                throw new Error('Unsupported spec')
            }
        } else {
            ctx.log.error('Cannot find "Balances.Transfer" event')
        }
    } else {
        const [amount] = call.call.args

        details = {
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved referral unreserve with ${extrinsicHash} txid =====`)
}
