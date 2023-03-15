import { Block, CallEntity, Context } from '../../processor'
import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'

export async function setReferralHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || call.name !== 'Referrals.set_referrer') return

	ctx.log.debug('Caught set referral extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    let details = new Object()
    
    const { referrer } = call.call.args

    details = {
        from: historyElement.address,
        to: referrer.toString()
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved set referral with ${call.extrinsic.hash} txid =====`)

}
