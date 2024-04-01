import { PayeeType, StakingEra, StakingStaker } from '../model'
import { Address, BlockContext } from '../types'
import { getStorageRepresentation } from './entities'
import { getUtilsLog } from './logs'
import { storage } from '../types/generated/merged'
import { assertDefined, decodeAddress, toAddress } from '.'

let eraBlock!: number
let eraData!: {
    index: number
    start?: bigint | undefined
}

const getActiveEraData = async (ctx: BlockContext) => {
	const key = ctx.block.header.height

	if (eraBlock === key) {
		return eraData
	}

	getUtilsLog(ctx).debug('Active era request')

	const activeEra = await getStorageRepresentation(ctx, storage.staking.activeEra)?.get(ctx.block.header)
	assertDefined(activeEra)

	if (!activeEra) {
		getUtilsLog(ctx).error('Active era not found')
		throw new Error('Active era not found')
	}

	eraBlock = key
	eraData = activeEra

	return activeEra
}

export const getActiveStakingEra = async (ctx: BlockContext): Promise<StakingEra> => {
	const activeEra = await getActiveEraData(ctx)

	let stakingEra = await ctx.store.get(StakingEra, activeEra.index.toString())

	if (!stakingEra) {
		stakingEra = new StakingEra()
		stakingEra.id = activeEra.index.toString()
		stakingEra.index = activeEra.index
		if (activeEra.start) {
			stakingEra.start = activeEra.start
		}
		await ctx.store.save(stakingEra)
		getUtilsLog(ctx).debug({ index: activeEra.index }, 'Staking era saved')
	}

	return stakingEra
}

const getController = async (ctx: BlockContext, address: Address) => {
	try {
		const controller = await getStorageRepresentation(ctx, storage.staking.bonded)?.get(ctx.block.header, decodeAddress(address))

		return controller ?? ''
	} catch (e: any) {
		getUtilsLog(ctx).error({ errorMessage: e.message }, `Error getting Controller for account "${address}"`)

		return ''
	}
}

export const getStakingStakerController = async (ctx: BlockContext, staker: StakingStaker) => {
	if (!staker.controller) {
		staker.controller = await getController(ctx, staker.id as Address)
		await ctx.store.save(staker)
	}
	return staker.controller
}

const getPayeeDestination = async (ctx: BlockContext, address: Address) => {
	try {
		const destination = await getStorageRepresentation(ctx, storage.staking.payee)?.get(ctx.block.header, decodeAddress(address))

		return destination
	} catch (e: any) {
		getUtilsLog(ctx).error({ errorMessage: e.message }, `Error getting Payee for account "${address}"`)

		return null
	}
}

const getStakerAccounts = async (ctx: BlockContext, address: Address) => {
	const destination = await getPayeeDestination(ctx, address)

	let payee: Address = address
	let payeeType = PayeeType.STASH
	let controller = ''

	if (destination) {
		if (destination.__kind === 'Account') {
			payee = toAddress(destination.value)
			payeeType = PayeeType.ACCOUNT
		} else if (destination.__kind === 'Controller') {
			controller = await getController(ctx, address)
			payee = toAddress(controller)
			payeeType = PayeeType.CONTROLLER
		}
	}

	return { payee, payeeType, controller }
}

export const getStakingStaker = async (ctx: BlockContext, address: Address): Promise<StakingStaker> => {
	let stakingStaker = await ctx.store.get(StakingStaker, address)

	if (!stakingStaker || !stakingStaker.payee) {
		const { payee, payeeType, controller } = await getStakerAccounts(ctx, address)

		if (!stakingStaker) {
			stakingStaker = new StakingStaker({ id: address })
		}
		stakingStaker.payeeType = payeeType
		stakingStaker.payee = payee
		stakingStaker.controller = controller
		
		await ctx.store.save(stakingStaker)
		getUtilsLog(ctx).debug({ id: address }, 'Staking staker saved')
	}

	return stakingStaker
}
