import { StakingEra, StakingReward } from '../../model'
import { Address, BlockContext, EventItem } from '../../types'
import { StakingRewardedEvent } from '../../types/generated/events'
import { formatDateTimestamp, toAddress } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getEntityData } from '../../utils/entities'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'

function getRewardData(ctx: BlockContext, eventItem: EventItem<'Staking.Rewarded'>): { account: Address; amount: string } {
	const event = new StakingRewardedEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, event, eventItem)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { account: toAddress(stash), amount: formatU128ToBalance(amount, VAL) }
}

export async function stakingRewardedEventHandler(ctx: BlockContext, eventItem: EventItem<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, eventItem)

	const { account, amount } = getRewardData(ctx, eventItem)

	const stakingEra = await getActiveStakingEra(ctx)
	const staker = await getStakingStaker(ctx, account)
	
	const stakingReward = new StakingReward()
	stakingReward.id = `${stakingEra.id}-${ctx.block.header.height}-${staker.id}`
	stakingReward.account = account
	stakingReward.amount = amount
	stakingReward.era = stakingEra
	stakingReward.staker = staker
	stakingReward.timestamp = formatDateTimestamp(new Date(ctx.block.header.timestamp))

	await ctx.store.save(stakingReward)

	getEventHandlerLog(ctx, eventItem).debug({ account, amount, era: stakingEra.index }, 'Staking reward saved')
}
