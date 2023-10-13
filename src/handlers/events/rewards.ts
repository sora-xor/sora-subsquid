import { StakingReward, StakingStaker } from '../../model'
import { Block, Context, EventItem } from '../../types'
import { StakingRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { logEventHandler } from '../../utils/log'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'

export async function stakingRewardedEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Staking.Rewarded'>): Promise<void> {
	logEventHandler(ctx, block, eventItem)

	const event = new StakingRewardedEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, block, event, eventItem)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	const stakingEra = await getActiveStakingEra(ctx, block)

	const staker = await getStakingStaker(ctx, block, toAddress(stash))
	
	const stakingReward = new StakingReward()

	stakingReward.id = `${stakingEra.id}-${block.header.height}-${staker.id}`
	stakingReward.account = toAddress(stash)
	stakingReward.amount = amount
	stakingReward.era = stakingEra
	stakingReward.staker = staker
	stakingReward.timestamp = formatDateTimestamp(new Date(block.header.timestamp))

	await ctx.store.save(stakingReward)
}
