import { toHex } from '@subsquid/substrate-processor'
import { Block, CallItem, Context } from '../../processor'
import { ReferralsSetReferrerCall } from '../../types/generated/calls'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { unsupportedSpecError } from '../../utils/error'

export async function setReferralHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.set_referrer', true>): Promise<void> {
	ctx.log.debug('Caught set referral extrinsic')

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
	// TODO: add type for details
    let details = new Object()
    
    const call = new ReferralsSetReferrerCall(ctx, callItem.call)

    let referrer: Uint8Array
    if (call.isV22) {
        referrer = call.asV22.referrer
    } else {
        throw unsupportedSpecError(block)
    }

    details = {
        from: historyElement.address,
        to: toHex(referrer)
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved set referral with ${callItem.extrinsic.hash} txid =====`)

}
