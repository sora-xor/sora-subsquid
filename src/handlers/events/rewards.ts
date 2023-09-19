import { StakingReward } from '../../model'
import { Block, Context, EventItem } from '../../types'
import { StakingRewardedEvent } from '../../types/generated/events'
import { StakingActiveEraStorage } from '../../types/generated/storage'
import { toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'

export async function stakingRewardedEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Staking.Rewarded'>): Promise<void> {
	const event = new StakingRewardedEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, block, event, eventItem)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	const activeEraStorage = new StakingActiveEraStorage(ctx, block.header)

	const activeEra = await activeEraStorage.asV1.get()

	if (!activeEra) throw new Error(`Active era not found`)

	const id = `${activeEra}-${toAddress(stash)}`

	let stakingReward = await ctx.store.get(StakingReward, id)

	if (!stakingReward) {
		stakingReward = new StakingReward()
		stakingReward.id = id
		stakingReward.account = toAddress(stash)
		stakingReward.amount = 0n
	}

	stakingReward.updatedAtBlock = block.header.height

	stakingReward.amount = stakingReward.amount + amount

	await ctx.store.save(stakingReward)
}
