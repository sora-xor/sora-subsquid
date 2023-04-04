import { ReferrerReward } from '../../model'
import { Block, Context, EventEntity } from '../../processor'
import { XorFeeReferrerRewardedEvent } from '../../types/events'
import { formatDateTimestamp, toAddress } from '../../utils'

export async function referrerRewardHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
	if (eventEntity.kind !== 'event' || eventEntity.name !== 'XorFee.ReferrerRewarded') return

	const blockHeight = block.header.height

	const event = new XorFeeReferrerRewardedEvent(ctx, eventEntity.event)
	if (!event.isV22) throw new Error(`[${blockHeight}] Unsupported spec`)

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

	referrerReward.amount = referrerReward.amount + amount

	await ctx.store.save(referrerReward)
}
