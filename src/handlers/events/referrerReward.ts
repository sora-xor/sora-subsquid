import { ReferrerReward } from '../../model'
import { Block, Context, EventItem } from '../../types'
import { XorFeeReferrerRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'

export async function referrerRewardEventHandler(ctx: Context, block: Block, eventItem: EventItem<'XorFee.ReferrerRewarded'>): Promise<void> {
	const event = new XorFeeReferrerRewardedEvent(ctx, eventItem.event)

	const [referral, referrer, amount] = getEntityData(ctx, block, event, eventItem)

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
