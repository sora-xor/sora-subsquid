import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'
import { assertDefined, toAddress } from '../../../utils'

export async function referralsSetReferrerCallHandler(ctx: BlockContext, call: Call<'Referrals.set_referrer'>): Promise<void> {
    logStartProcessingCall(ctx, call)

    const data = getCallData(ctx, calls.referrals.setReferrer, call)

	const referrer = toAddress(data.referrer)

	assertDefined(call.extrinsic?.signature)
    const details: any = {
        from: toAddress(call.extrinsic.signature.address as string),
        to: referrer.toString()
    }

    await createCallHistoryElement(ctx, call, details)
}
