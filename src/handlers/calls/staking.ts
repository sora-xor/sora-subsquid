import { toHex } from '@subsquid/substrate-processor'
import { Block, CallItem, Context } from '../../types'
import { StakingBondCall, StakingBondExtraCall, StakingCancelDeferredSlashCall, StakingChillCall, StakingChillOtherCall, StakingForceApplyMinCommissionCall, StakingForceNewEraAlwaysCall, StakingForceNewEraCall, StakingForceNoErasCall, StakingForceUnstakeCall, StakingIncreaseValidatorCountCall, StakingKickCall, StakingNominateCall, StakingPayoutStakersCall, StakingReapStashCall, StakingRebondCall, StakingScaleValidatorCountCall, StakingSetControllerCall, StakingSetHistoryDepthCall, StakingSetInvulnerablesCall, StakingSetMinCommissionCall, StakingSetPayeeCall, StakingSetStakingConfigsCall, StakingSetValidatorCountCall, StakingSubmitElectionSolutionCall, StakingSubmitElectionSolutionUnsignedCall, StakingUnbondCall, StakingValidateCall, StakingWithdrawUnbondedCall } from '../../types/generated/calls'
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getEntityData } from '../../utils/entities'
import { logCallHandler } from '../../utils/log'

export async function stakingBondCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.bond'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

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
	logCallHandler(ctx, block, callItem)

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
	logCallHandler(ctx, block, callItem)

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
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingChillCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)
	
    const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

}

export async function stakingChillOtherCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.chill_other'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

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
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingForceNewEraCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)
	
    const details = {} // "Staking.force_new_era" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingForceNewEraAlwaysCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.force_new_era_always'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingForceNewEraAlwaysCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {} // "Staking.force_new_era_always" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingForceNoErasCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.force_no_eras'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingForceNoErasCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingForceUnstakeCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.force_unstake'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingForceUnstakeCall(ctx, callItem.call)
    const data = call.asV1
    const details = {
        stash: toHex(data.stash),
        numSlashingSpans: data.numSlashingSpans
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingIncreaseValidatorCountCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.increase_validator_count'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingIncreaseValidatorCountCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        additional: data.additional,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingKickCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.kick'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingKickCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        who: data.who.map(item => toHex(item)),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingNominateCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.nominate'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingNominateCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        targets: data.targets.map(toHex),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingPayoutStakersCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.payout_stakers'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingPayoutStakersCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)
	
    const details = {
        validatorStash: toHex(data.validatorStash),
        era: data.era
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingReapStashCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.reap_stash'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingReapStashCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)
    
    const details = {
        stash: toHex(data.stash),
        numSlashingSpans: data.numSlashingSpans,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingRebondCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.rebond'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingRebondCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {value: data.value}

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingScaleValidatorCountCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.scale_validator_count'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingScaleValidatorCountCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        factor: data.factor
    }
	
    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetControllerCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_controller'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSetControllerCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        controller: toHex(data.controller),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetHistoryDepthCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_history_depth'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSetHistoryDepthCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        newHistoryDepth: data.newHistoryDepth,
        eraItemsDeleted: data.eraItemsDeleted
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingSetInvulnerablesCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_invulnerables'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingSetInvulnerablesCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        invulnerables: data.invulnerables.map(toHex),
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetMinCommissionCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_min_commission'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSetMinCommissionCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        new: data.new
    } 

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetPayeeCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_payee'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSetPayeeCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: toHex(data.payee.value) } : { kind: data.payee.__kind },
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetStakingConfigsCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_staking_configs'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingSetStakingConfigsCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)
	
    const details = {
        minNominatorBond: data.minNominatorBond.__kind === 'Set' ? { kind: data.minNominatorBond.__kind, value: data.minNominatorBond.value } : { kind: data.minNominatorBond.__kind },
        minValidatorBond: data.minValidatorBond.__kind === 'Set' ? { kind: data.minValidatorBond.__kind, value: data.minValidatorBond.value } : { kind: data.minValidatorBond.__kind },
        maxNominatorCount: data.maxNominatorCount.__kind === 'Set' ? { kind: data.maxNominatorCount.__kind, value: data.maxNominatorCount.value } : { kind: data.maxNominatorCount.__kind },
        maxValidatorCount: data.maxValidatorCount.__kind === 'Set' ? { kind: data.maxValidatorCount.__kind, value: data.maxValidatorCount.value } : { kind: data.maxValidatorCount.__kind },
        chillThreshold: data.chillThreshold.__kind === 'Set' ? { kind: data.chillThreshold.__kind, value: data.chillThreshold.value } : { kind: data.chillThreshold.__kind },
        minCommission: data.minCommission.__kind === 'Set' ? { kind: data.minCommission.__kind, value: data.minCommission.value } : { kind: data.minCommission.__kind },
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSetValidatorCountCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.set_validator_count'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new StakingSetValidatorCountCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        new: data.new,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingSubmitElectionSolutionCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.submit_election_solution'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSubmitElectionSolutionCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        winners: data.winners,
        era: data.era,
        score: data.score        
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingSubmitElectionSolutionUnsignedCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.submit_election_solution_unsigned'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingSubmitElectionSolutionUnsignedCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
        winners: data.winners,
        compact: data.compact,
        score: data.score,
        era: data.era,
        size: data.size,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingUnbondCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.unbond'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingUnbondCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        value: data.value,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function stakingValidateCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.validate'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingValidateCall(ctx, callItem.call)
    const data = getEntityData(ctx, block, call, callItem)

    const details = {
        commission: data.prefs.commission,
        blocked: data.prefs.blocked,
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}

export async function stakingWithdrawUnbondedCallHandler(ctx: Context, block: Block, callItem: CallItem<'Staking.withdraw_unbonded'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const historyElement = await createHistoryElement(ctx, block, callItem)
    
    const call = new StakingWithdrawUnbondedCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const details = {
		numSlashingSpans: data.numSlashingSpans,
    }
    
    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)
}