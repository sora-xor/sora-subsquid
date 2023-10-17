import { toHex } from '@subsquid/substrate-processor'
import { BlockContext, CallItem, Context } from '../../types'
import { ReferralsSetReferrerCall } from '../../types/generated/calls'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getEntityData } from '../../utils/entities'
import { debug, logCallHandler } from '../../utils/log'

export async function setReferralCallHandler(ctx: BlockContext, callItem: CallItem<'Referrals.set_referrer'>): Promise<void> {
	logCallHandler(ctx, callItem)

    const historyElement = await createHistoryElement(ctx, callItem)
    
	// TODO: add type for details
    let details = new Object()
    
    const call = new ReferralsSetReferrerCall(ctx, callItem.call)
	const data = getEntityData(ctx, call, callItem)

	const referrer = toHex(data.referrer)

    details = {
        from: historyElement.address,
        to: referrer
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx,historyElement)

    debug(ctx, 'CallHandler', `Saved set referral with ${callItem.extrinsic.hash} txid`)

}
