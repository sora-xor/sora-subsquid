import { ReferrerReward } from '../../model'
import { BlockContext, EventItem } from '../../types'
import { XorFeeReferrerRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingEvent } from '../../utils/logs'

export async function referrerRewardEventHandler(
	ctx: BlockContext,
	eventItem: EventItem<'XorFee.ReferrerRewarded'>,
): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new XorFeeReferrerRewardedEvent(ctx, eventItem.event)

	const [referral, referrer, amount] = getEntityData(ctx, event, eventItem)

	const key = `${toAddress(referral)}-${toAddress(referrer)}`

	let referrerReward = await ctx.store.get(ReferrerReward, key)

	if (!referrerReward) {
		referrerReward = new ReferrerReward()
		referrerReward.id = key
		referrerReward.referral = toAddress(referral)
		referrerReward.referrer = toAddress(referrer)
		referrerReward.amount = 0n
	}

	referrerReward.updated = formatDateTimestamp(new Date(ctx.block.header.timestamp))
	referrerReward.updatedAtBlock = ctx.block.header.height

	referrerReward.amount = referrerReward.amount + amount

	await ctx.store.save(referrerReward)
}
