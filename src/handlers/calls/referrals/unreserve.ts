import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance } from '../../../utils/assets'
import { XOR } from '../../../utils/consts'
import { BlockContext, Call } from '../../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../../utils/events'
import { logStartProcessingCall } from '../../../utils/logs'
import { assertDefined } from '../../../utils'
import { calls } from '../../../types/generated/merged'
import { getCallData } from '../../../utils/entities'

export async function referralsUnreserveCallHandler(ctx: BlockContext, call: Call<'Referrals.unreserve'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const { balance } = getCallData(ctx, calls.referrals.unreserve, call)

	let details: {
		from?: string
		to?: string
		amount: string
	} = {
        amount: formatU128ToBalance(balance, XOR)
    }

	assertDefined(call.extrinsic)
	const referralsUnreserveEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Balances.Transfer'])

	if (referralsUnreserveEvent) {
		const { from, to, amount } = getAssetsTransferEventData(ctx, referralsUnreserveEvent)

		details.from = from
        details.to = to
        details.amount = formatU128ToBalance(amount, XOR)
	}

	await createCallHistoryElement(ctx, call, details)
}
