import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallEntity, Context } from '../../processor'
import { ReferralsReserveCall } from '../../types/calls'
import { findEventWithExtrinsic, getTransferEventData } from '../../utils/events'

export async function referralReserveHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'Referrals.reserve') return

    ctx.log.debug('Caught referral reserve extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    let details: {
        from?: string
        to?: string
        amount: string
    }

    if (historyElement.execution.success) {
        const balancesTransferEventEntity = findEventWithExtrinsic('Balances.Transfer', block, extrinsicHash)

        if (balancesTransferEventEntity) {
            const { from, to, amount } = getTransferEventData(ctx, block, balancesTransferEventEntity)

            details = {
                from,
                to,
                amount: formatU128ToBalance(amount, XOR)
            }
        } else {
			throw new Error(`[${blockHeight}] Cannot find event "Balances.Transfer" with extrinsic hash ${extrinsicHash}`)
        }
    } else {
        const call = new ReferralsReserveCall(ctx, callEntity.call)
        
        if (call.isV22) {
            details = {
                amount: formatU128ToBalance(call.asV22.balance, XOR)
            }
        } else {
            throw new Error(`[${blockHeight}] Unsupported spec`)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved referral reserve with ${extrinsicHash} txid =====`)
}
