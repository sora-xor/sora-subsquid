import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { ReferralsUnreserveCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { logCallHandler } from '../../utils/log'

export async function referralUnreserveCallHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.unreserve'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
        from?: string
        to?: string
        amount: string
    } | null = null

    if (historyElement.execution.success) {
        const balancesTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer'], true)

		const { from, to, amount } = getAssetsTransferEventData(ctx, block, balancesTransferEventItem)

		details = {
			from,
			to,
			amount: formatU128ToBalance(amount, XOR)
		}
    } else {
        const call = new ReferralsUnreserveCall(ctx, callItem.call)
		const data = getEntityData(ctx, block, call, callItem)
		
		details = {
			amount: formatU128ToBalance(data.balance as AssetAmount, XOR)
		}
    }

	if (details) await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`[${block.header.height}] ===== Saved referral unreserve with ${extrinsicHash} txid =====`)
}
