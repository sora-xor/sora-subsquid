import { toHex } from '@subsquid/substrate-processor'
import { Block, CallItem, Context } from '../../types'
import { StakingBondCall, StakingBondExtraCall, StakingCancelDeferredSlashCall, StakingChillCall, StakingChillOtherCall, StakingForceApplyMinCommissionCall, StakingForceNewEraCall } from '../../types/generated/calls'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getEntityData } from '../../utils/entities'

export async function stakingBondCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.bond'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingBondCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        controller: toHex(data.controller),
        payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: toHex(data.payee.value) } : { kind: data.payee.__kind },
		value: data.value,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

}

export async function stakingBondExtraCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.bond_extra'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingBondExtraCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
		maxAdditional: data.maxAdditional,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingCancelDeferredSlashCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.cancel_deferred_slash'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingCancelDeferredSlashCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        era: data.era,
        slashIndices: data.slashIndices,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

}

export async function stakingChillCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.chill'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingChillCall(ctx, callItem.call)
	
    const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

}

export async function stakingChillOtherCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.chill_other'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingChillOtherCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        controller: toHex(data.controller),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingForceApplyMinCommissionCallHandler(
    ctx: Context, 
    block: Block, 
    callItem: CallItem<'Staking.force_apply_min_commission'>
): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingForceApplyMinCommissionCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        validatorStash: toHex(data.validatorStash),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingForceNewEraCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.force_new_era'>): Promise<void> {
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingForceNewEraCall(ctx, callItem.call)

    const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}