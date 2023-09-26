import { StakingStaker } from '../../model'
import { StakingEra } from '../../model/generated/stakingEra.model'
import { StakingEraNomination } from '../../model/generated/stakingEraNomination.model'
import { StakingEraNominator } from '../../model/generated/stakingEraNominator.model'
import { StakingEraValidator } from '../../model/generated/stakingEraValidator.model'
import { StakingValidator } from '../../model/generated/stakingValidator.model'
import { Block, Context, EventItem } from '../../types'
import { StakingActiveEraStorage, StakingErasStakersStorage } from '../../types/generated/storage'
import { toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'

export async function stakingStakersElectedEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Staking.StakersElected'>): Promise<void> {
	const activeEraStorage = new StakingActiveEraStorage(ctx, block.header)
	const erasStakersStorage = new StakingErasStakersStorage(ctx, block.header)

	const activeEra = await getEntityData(ctx, block, activeEraStorage, { kind: 'storage', name: StakingActiveEraStorage.name }).get()
	if (!activeEra) {
		throw new Error(`Active era not found`)
	}
	const stakingEra = new StakingEra()
	stakingEra.index = activeEra.index
	if (activeEra.start) {
		stakingEra.startBlock = activeEra.start
		const previousStakingEra = await ctx.store.get(StakingEra, { where: { index: activeEra.index - 1 } })
		if (previousStakingEra) {
			previousStakingEra.endBlock = activeEra.start - 1n
			await ctx.store.save(previousStakingEra)
		}
	}
	await ctx.store.save(stakingEra)

	const exposures = await getEntityData(ctx, block, erasStakersStorage, { kind: 'storage', name: StakingErasStakersStorage.name }).getPairs(activeEra.index)

	exposures.forEach(async ([[era, validator], exposure]) => {
		let stakingValidator = await ctx.store.get(StakingValidator, toAddress(validator))
		if (!stakingValidator) {
			stakingValidator = new StakingValidator({ id: toAddress(validator) })
			await ctx.store.save(stakingValidator)
		}

		let stakingStaker = await ctx.store.get(StakingStaker, toAddress(validator))
		if (!stakingStaker) {
			stakingStaker = new StakingStaker({ id: toAddress(validator) })
			await ctx.store.save(stakingStaker)
		}

		let stakingEraValidator = await ctx.store.get(StakingEraValidator, { where: { era: stakingEra, staker: stakingStaker } })
		if (!stakingEraValidator) {
			stakingEraValidator = new StakingEraValidator()
			stakingEraValidator.era = stakingEra
			stakingEraValidator.validator = stakingValidator
			stakingEraValidator.ownBond = 0n
			stakingEraValidator.totalBond = 0n
			stakingEraValidator.rewardAmount = 0n
			stakingEraValidator.staker = stakingStaker
		}
		stakingEraValidator.ownBond = exposure.own
		stakingEraValidator.totalBond = exposure.total
		await ctx.store.save(stakingEraValidator)

		exposure.others.forEach(async (nomination) => {
			let stakingStaker = await ctx.store.get(StakingStaker, toAddress(nomination.who))
			if (!stakingStaker) {
				stakingStaker = new StakingStaker({ id: toAddress(nomination.who) })
				await ctx.store.save(stakingStaker)
			}
			
			let stakingEraNominator = await ctx.store.get(StakingEraNominator, { where: { era: stakingEra, staker: stakingStaker } })
			if (!stakingEraNominator) {
				stakingEraNominator = new StakingEraNominator()
				stakingEraNominator.era = stakingEra
				stakingEraNominator.bond = 0n
				stakingEraNominator.staker = stakingStaker
			}
			stakingEraNominator.bond += nomination.value
			await ctx.store.save(stakingEraNominator)

			let stakingEraNomination = new StakingEraNomination()
			stakingEraNomination.era = stakingEra
			stakingEraNomination.amount = nomination.value
			if (stakingEraValidator) {
				stakingEraNomination.validator = stakingEraValidator
			}
			stakingEraNomination.nominator = stakingEraNominator
			await ctx.store.save(stakingEraNomination)
		})
	})
}
