import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallEntity, Context } from '../../processor'

export async function referralReserveHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {
    if (call.kind !== 'call' || call.name !== 'Referrals.reserve') return

    ctx.log.debug('Caught referral reserve extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {

        const referralReserveEvent = block.items.find(e => e.name === 'Balances.Transfer')

        if (!referralReserveEvent || referralReserveEvent.name !== 'Balances.Transfer') {
            ctx.log.debug('No currencies.Transferred event is found')
            return
        }

        const { from, to, amount } = referralReserveEvent.event.args

        details = {
            from: from.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    } else {
        const [amount] = call.call.args

        details = {
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved referral reserve with ${call.extrinsic.hash} txid =====`)
}
