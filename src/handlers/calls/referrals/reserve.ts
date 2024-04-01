import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance } from '../../../utils/assets'
import { XOR } from '../../../utils/consts'
import { BlockContext, Call } from '../../../types'
import { findEventByExtrinsicHash, getAssetsTransferEventData } from '../../../utils/events'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'
import { assertDefined } from '../../../utils'

export async function referralsReserveCallHandler(ctx: BlockContext, call: Call<'Referrals.reserve'>): Promise<void> {
    logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.referrals.reserve, call)

    const details: any = {
        amount: formatU128ToBalance(data.balance, XOR),
    };

	assertDefined(call.extrinsic)
	const referralReserveEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Balances.Transfer', 'Currencies.Transferred'], false)

    if (referralReserveEvent) {
        const { from, to, amount } = getAssetsTransferEventData(ctx, referralReserveEvent)

        details.from = from
        details.to = to
        details.amount = formatU128ToBalance(amount, XOR)
    }

    await createCallHistoryElement(ctx, call, details)
}
