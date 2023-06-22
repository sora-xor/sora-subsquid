import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { ReferralsUnreserveCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { CannotFindEventError } from '../../utils/errors'

export async function referralUnreserveCallHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.unreserve'>): Promise<void> {
    ctx.log.debug('Caught referral unreserve extrinsic')

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
        from?: string
        to?: string
        amount: string
    }

    if (historyElement.execution.success) {
		const balancesTransferEventName = 'Balances.Transfer'
        const balancesTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, [balancesTransferEventName])

        if (balancesTransferEventItem) {
            const { from, to, amount } = getAssetsTransferEventData(ctx, block, balancesTransferEventItem)

            details = {
                from,
                to,
                amount: formatU128ToBalance(amount, XOR)
            }
        } else {
			throw new CannotFindEventError(block, extrinsicHash, balancesTransferEventName)
        }
    } else {
        const call = new ReferralsUnreserveCall(ctx, callItem.call)
		const data = getEntityData(ctx, block, call, callItem)
		
		details = {
			amount: formatU128ToBalance(data.balance as AssetAmount, XOR)
		}
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved referral unreserve with ${extrinsicHash} txid =====`)
}
