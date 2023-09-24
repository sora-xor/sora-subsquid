import { toHex } from '@subsquid/substrate-processor'
import { Block, CallItem, Context } from '../../types'
import { ReferralsSetReferrerCall } from '../../types/generated/calls'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getEntityData } from '../../utils/entities'

export async function setReferralCallHandler(ctx: Context, block: Block, callItem: CallItem<'Referrals.set_referrer'>): Promise<void> {
	ctx.log.debug(`[${block.header.height}] Caught set referral extrinsic`)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
	// TODO: add type for details
    let details = new Object()
    
    const call = new ReferralsSetReferrerCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

	const referrer = toHex(data.referrer)

    details = {
        from: historyElement.address,
        to: referrer
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`[${block.header.height}] ===== Saved set referral with ${callItem.extrinsic.hash} txid =====`)

}
