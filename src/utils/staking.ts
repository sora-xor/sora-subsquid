import { StakingEra, StakingStaker } from '../model'
import { Address, Block, Context } from '../types'
import { StakingActiveEraStorage } from '../types/generated/storage'
import { getEntityData } from './entities'

export const getActiveStakingEra = async (ctx: Context, block: Block): Promise<StakingEra> => {
	const activeEraStorage = new StakingActiveEraStorage(ctx, block.header)

	const activeEra = await getEntityData(ctx, block, activeEraStorage, { kind: 'storage', name: StakingActiveEraStorage.name }).get()
	if (!activeEra) {
		throw new Error(`[${block.header.height}] Active era not found`)
	}

	let stakingEra = await ctx.store.get(StakingEra, activeEra.index.toString())
	if (!stakingEra) {
		stakingEra = new StakingEra()
		stakingEra.id = activeEra.index.toString()
		stakingEra.index = activeEra.index
		if (activeEra.start) {
			stakingEra.startBlock = activeEra.start
			const previousStakingEra = await ctx.store.get(StakingEra, { where: { index: activeEra.index - 1 } })
			if (previousStakingEra && !previousStakingEra.endBlock) {
				previousStakingEra.endBlock = activeEra.start - 1n
				await ctx.store.save(previousStakingEra)
			}
		}
		await ctx.store.save(stakingEra)
	}

	return stakingEra
}

export const getStakingStaker = async (ctx: Context, block: Block, address: Address): Promise<StakingStaker> => {
	let stakingStaker = await ctx.store.get(StakingStaker, address)
	if (!stakingStaker) {
		stakingStaker = new StakingStaker({ id: address })
		await ctx.store.save(stakingStaker)
	}
	return stakingStaker
}