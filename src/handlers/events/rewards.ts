import { StakingReward, StakingStaker } from '../../model'
import { BlockContext, EventItem } from '../../types'
import { StakingRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'

export async function stakingRewardedEventHandler(ctx: BlockContext, eventItem: EventItem<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const event = new StakingRewardedEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	const stakingEra = await getActiveStakingEra(ctx)

	const staker = await getStakingStaker(ctx, toAddress(stash))
	
	const stakingReward = new StakingReward()

	stakingReward.id = `${stakingEra.id}-${ctx.block.header.height}-${staker.id}`
	stakingReward.account = toAddress(stash)
	stakingReward.amount = amount
	stakingReward.era = stakingEra
	stakingReward.staker = staker
	stakingReward.timestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))

	await ctx.store.save(stakingReward)
}
