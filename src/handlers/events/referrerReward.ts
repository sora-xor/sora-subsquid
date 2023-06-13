import { ReferrerReward } from '../../model'
import { Block, Context, EventItem } from '../../processor'
import { XorFeeReferrerRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function referrerRewardHandler(ctx: Context, block: Block, eventItem: EventItem<'XorFee.ReferrerRewarded', true>): Promise<void> {
	const event = new XorFeeReferrerRewardedEvent(ctx, eventItem.event)

	if (!event.isV22) throw unsupportedSpecError(block)

	const [referral, referrer, amount] = event.asV22

	ctx.log.debug(`Caught referrer reward`)

	const key = `${toAddress(referral)}-${toAddress(referrer)}`

	let referrerReward = await ctx.store.get(ReferrerReward, key)

	if (!referrerReward) {
		referrerReward = new ReferrerReward()
		referrerReward.id = key
		referrerReward.referral = toAddress(referral)
		referrerReward.referrer = toAddress(referrer)
		referrerReward.amount = 0n
	}

	referrerReward.updated = formatDateTimestamp(new Date(block.header.timestamp))
	referrerReward.updatedAtBlock = block.header.height

	referrerReward.amount = referrerReward.amount + amount

	await ctx.store.save(referrerReward)
}
