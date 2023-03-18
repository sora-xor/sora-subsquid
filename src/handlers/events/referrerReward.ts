import { ReferrerReward } from '../../model'
import { Block, Context, EventEntity } from '../../processor'
import { formatDateTimestamp } from '../../utils'

export async function referrerRewardHandler(ctx: Context, block: Block, event: EventEntity): Promise<void> {
  if (event.kind !== 'event' || event.name !== 'XorFee.ReferrerRewarded') return

	const [referree, referrer, amount] = event.event.args

	ctx.log.debug(`Caught referrer reward`)

	const key = `${referree.toString()}-${referrer.toString()}`

	let referrerReward = await ctx.store.get(ReferrerReward, key)

	if (!referrerReward) {
		referrerReward = new ReferrerReward()
		referrerReward.id = key
		referrerReward.referral = referree.toString()
		referrerReward.referrer = referrer.toString()
		referrerReward.amount = BigInt(0)
	}

	referrerReward.updated = formatDateTimestamp(new Date(block.header.timestamp))

	referrerReward.amount = referrerReward.amount + (BigInt(amount.toString()))

	await ctx.store.save(referrerReward)
}
