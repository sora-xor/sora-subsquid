import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { ReferralsReserveCall } from '../../types/generated/calls'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { getEntityData } from '../../utils/entities'
import { CannotFindEventError } from '../../utils/errors'

export async function referralReserveCallHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.reserve'>): Promise<void> {
    ctx.log.debug(`[${block.header.height}] Caught referral reserve extrinsic`)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    let details: {
        from?: string
        to?: string
        amount: string
    } | null = null

    if (historyElement.execution.success) {
		const balancesTransferEventName = 'Balances.Transfer'
        const balancesTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, [balancesTransferEventName], false)

        if (balancesTransferEventItem) {
            const { from, to, amount } = getAssetsTransferEventData(ctx, block, balancesTransferEventItem)

            details = {
                from,
                to,
                amount: formatU128ToBalance(amount, XOR),
            }
        } else {
			const error = new CannotFindEventError(block, extrinsicHash, balancesTransferEventName)
			ctx.log.error(error.message)
        }
    } else {
        const call = new ReferralsReserveCall(ctx, callItem.call)
		const data = getEntityData(ctx, block, call, callItem)

		const amount = formatU128ToBalance(data.balance as AssetAmount, XOR)
        
        details = {
			amount,
		}
    }

	if (details) await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)

    ctx.log.debug(`[${block.header.height}] ===== Saved referral reserve with ${extrinsicHash} txid =====`)
}
