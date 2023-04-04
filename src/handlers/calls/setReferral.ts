import { toHex } from '@subsquid/substrate-processor'
import { Block, CallEntity, Context } from '../../processor'
import { ReferralsSetReferrerCall } from '../../types/calls'
import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'

export async function setReferralHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
    if (callEntity.name !== 'Referrals.set_referrer') return

	const blockHeight = block.header.height

	ctx.log.debug('Caught set referral extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
    
	// TODO: add type for details
    let details = new Object()
    
    const call = new ReferralsSetReferrerCall(ctx, callEntity.call)

    let referrer: Uint8Array
    if (call.isV22) {
        referrer = call.asV22.referrer
    } else {
        throw new Error(`[${blockHeight}] Unsupported spec`)
    }

    details = {
        from: historyElement.address,
        to: toHex(referrer)
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved set referral with ${callEntity.extrinsic.hash} txid =====`)

}
