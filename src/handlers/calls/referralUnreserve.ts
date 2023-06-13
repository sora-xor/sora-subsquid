import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallItem, Context } from '../../processor'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { ReferralsUnreserveCall } from '../../types/generated/calls'
import { unsupportedSpecError } from '../../utils/error'

export async function referralUnreserveHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.unreserve', true>): Promise<void> {
    ctx.log.debug('Caught referral unreserve extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
        from?: string
        to?: string
        amount: string
    }

    if (historyElement.execution.success) {
        const balancesTransferEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer'])

        if (balancesTransferEventEntity) {
            const { from, to, amount } = getAssetsTransferEventData(ctx, block, balancesTransferEventEntity)

            details = {
                from,
                to,
                amount: formatU128ToBalance(amount, XOR)
            }
        } else {
			throw new Error(`[${blockHeight}] Cannot find event "Balances.Transfer" with extrinsic hash ${extrinsicHash}`)
        }
    } else {
        const call = new ReferralsUnreserveCall(ctx, callItem.call)

        if (call.isV22) {
            details = {
                amount: formatU128ToBalance(call.asV22.balance, XOR)
            }
        } else {
            throw unsupportedSpecError(block)
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved referral unreserve with ${extrinsicHash} txid =====`)
}
