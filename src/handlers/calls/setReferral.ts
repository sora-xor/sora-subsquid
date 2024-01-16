import { BlockContext, Call } from '../../types'
import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { decodeCall, getCallRepresentation } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { calls } from '../../types/generated/merged'

export async function setReferralCallHandler(ctx: BlockContext, call: Call<'Referrals.set_referrer'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	// TODO: add type for details
	let details = new Object()

	const representation = getCallRepresentation(ctx, calls.referrals.setReferrer, call)
	const data = decodeCall(representation, call)

	const referrer = data.referrer

	details = {
		from: historyElement.address,
		to: referrer,
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, call).debug('Saved set referral')
}
