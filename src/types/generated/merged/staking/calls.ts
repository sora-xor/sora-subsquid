import * as productionCalls from '../../production/staking/calls'
import * as stageCalls from '../../stage/staking/calls'
import * as testCalls from '../../test/staking/calls'
import * as devCalls from '../../dev/staking/calls'


export const bond = {
	name: 'Staking.bond',
	v1: productionCalls.bond['v1'],
	v1Stage: stageCalls.bond['v1'],
	v1Test: testCalls.bond['v1'],
	v85Dev: devCalls.bond['v85'],
}

export const bondExtra = {
	name: 'Staking.bond_extra',
	v1: productionCalls.bondExtra['v1'],
	v1Stage: stageCalls.bondExtra['v1'],
	v1Test: testCalls.bondExtra['v1'],
	v85Dev: devCalls.bondExtra['v85'],
}

export const unbond = {
	name: 'Staking.unbond',
	v1: productionCalls.unbond['v1'],
	v1Stage: stageCalls.unbond['v1'],
	v1Test: testCalls.unbond['v1'],
	v85Dev: devCalls.unbond['v85'],
}

export const withdrawUnbonded = {
	name: 'Staking.withdraw_unbonded',
	v1: productionCalls.withdrawUnbonded['v1'],
	v1Stage: stageCalls.withdrawUnbonded['v1'],
	v1Test: testCalls.withdrawUnbonded['v1'],
	v85Dev: devCalls.withdrawUnbonded['v85'],
}

export const validate = {
	name: 'Staking.validate',
	v1: productionCalls.validate['v1'],
	v1Stage: stageCalls.validate['v1'],
	v1Test: testCalls.validate['v1'],
	v85Dev: devCalls.validate['v85'],
}

export const nominate = {
	name: 'Staking.nominate',
	v1: productionCalls.nominate['v1'],
	v1Stage: stageCalls.nominate['v1'],
	v1Test: testCalls.nominate['v1'],
	v85Dev: devCalls.nominate['v85'],
}

export const chill = {
	name: 'Staking.chill',
	v1: productionCalls.chill['v1'],
	v1Stage: stageCalls.chill['v1'],
	v1Test: testCalls.chill['v1'],
	v85Dev: devCalls.chill['v85'],
}

export const setPayee = {
	name: 'Staking.set_payee',
	v1: productionCalls.setPayee['v1'],
	v1Stage: stageCalls.setPayee['v1'],
	v1Test: testCalls.setPayee['v1'],
	v85Dev: devCalls.setPayee['v85'],
}

export const setController = {
	name: 'Staking.set_controller',
	v1: productionCalls.setController['v1'],
	v1Stage: stageCalls.setController['v1'],
	v1Test: testCalls.setController['v1'],
	v85Dev: devCalls.setController['v85'],
}

export const setValidatorCount = {
	name: 'Staking.set_validator_count',
	v1: productionCalls.setValidatorCount['v1'],
	v1Stage: stageCalls.setValidatorCount['v1'],
	v1Test: testCalls.setValidatorCount['v1'],
	v85Dev: devCalls.setValidatorCount['v85'],
}

export const increaseValidatorCount = {
	name: 'Staking.increase_validator_count',
	v1: productionCalls.increaseValidatorCount['v1'],
	v1Stage: stageCalls.increaseValidatorCount['v1'],
	v1Test: testCalls.increaseValidatorCount['v1'],
	v85Dev: devCalls.increaseValidatorCount['v85'],
}

export const scaleValidatorCount = {
	name: 'Staking.scale_validator_count',
	v1: productionCalls.scaleValidatorCount['v1'],
	v1Stage: stageCalls.scaleValidatorCount['v1'],
	v1Test: testCalls.scaleValidatorCount['v1'],
	v85Dev: devCalls.scaleValidatorCount['v85'],
}

export const forceNoEras = {
	name: 'Staking.force_no_eras',
	v1: productionCalls.forceNoEras['v1'],
	v1Stage: stageCalls.forceNoEras['v1'],
	v1Test: testCalls.forceNoEras['v1'],
	v85Dev: devCalls.forceNoEras['v85'],
}

export const forceNewEra = {
	name: 'Staking.force_new_era',
	v1: productionCalls.forceNewEra['v1'],
	v1Stage: stageCalls.forceNewEra['v1'],
	v1Test: testCalls.forceNewEra['v1'],
	v85Dev: devCalls.forceNewEra['v85'],
}

export const setInvulnerables = {
	name: 'Staking.set_invulnerables',
	v1: productionCalls.setInvulnerables['v1'],
	v1Stage: stageCalls.setInvulnerables['v1'],
	v1Test: testCalls.setInvulnerables['v1'],
	v85Dev: devCalls.setInvulnerables['v85'],
}

export const forceUnstake = {
	name: 'Staking.force_unstake',
	v1: productionCalls.forceUnstake['v1'],
	v1Stage: stageCalls.forceUnstake['v1'],
	v1Test: testCalls.forceUnstake['v1'],
	v85Dev: devCalls.forceUnstake['v85'],
}

export const forceNewEraAlways = {
	name: 'Staking.force_new_era_always',
	v1: productionCalls.forceNewEraAlways['v1'],
	v1Stage: stageCalls.forceNewEraAlways['v1'],
	v1Test: testCalls.forceNewEraAlways['v1'],
	v85Dev: devCalls.forceNewEraAlways['v85'],
}

export const cancelDeferredSlash = {
	name: 'Staking.cancel_deferred_slash',
	v1: productionCalls.cancelDeferredSlash['v1'],
	v1Stage: stageCalls.cancelDeferredSlash['v1'],
	v1Test: testCalls.cancelDeferredSlash['v1'],
	v85Dev: devCalls.cancelDeferredSlash['v85'],
}

export const payoutStakers = {
	name: 'Staking.payout_stakers',
	v1: productionCalls.payoutStakers['v1'],
	v1Stage: stageCalls.payoutStakers['v1'],
	v1Test: testCalls.payoutStakers['v1'],
	v85Dev: devCalls.payoutStakers['v85'],
}

export const rebond = {
	name: 'Staking.rebond',
	v1: productionCalls.rebond['v1'],
	v1Stage: stageCalls.rebond['v1'],
	v1Test: testCalls.rebond['v1'],
	v85Dev: devCalls.rebond['v85'],
}

export const setHistoryDepth = {
	name: 'Staking.set_history_depth',
	v1: productionCalls.setHistoryDepth['v1'],
	v1Stage: stageCalls.setHistoryDepth['v1'],
	v1Test: testCalls.setHistoryDepth['v1'],
}

export const reapStash = {
	name: 'Staking.reap_stash',
	v1: productionCalls.reapStash['v1'],
	v1Stage: stageCalls.reapStash['v1'],
	v1Test: testCalls.reapStash['v1'],
	v85Dev: devCalls.reapStash['v85'],
}

export const submitElectionSolution = {
	name: 'Staking.submit_election_solution',
	v1: productionCalls.submitElectionSolution['v1'],
	v1Stage: stageCalls.submitElectionSolution['v1'],
	v1Test: testCalls.submitElectionSolution['v1'],
}

export const submitElectionSolutionUnsigned = {
	name: 'Staking.submit_election_solution_unsigned',
	v1: productionCalls.submitElectionSolutionUnsigned['v1'],
	v1Stage: stageCalls.submitElectionSolutionUnsigned['v1'],
	v1Test: testCalls.submitElectionSolutionUnsigned['v1'],
}

export const kick = {
	name: 'Staking.kick',
	v1: productionCalls.kick['v1'],
	v1Stage: stageCalls.kick['v1'],
	v1Test: testCalls.kick['v1'],
	v85Dev: devCalls.kick['v85'],
}

export const setStakingConfigs = {
	name: 'Staking.set_staking_configs',
	v42: productionCalls.setStakingConfigs['v42'],
	v42Stage: stageCalls.setStakingConfigs['v42'],
	v42Test: testCalls.setStakingConfigs['v42'],
	v85Dev: devCalls.setStakingConfigs['v85'],
}

export const chillOther = {
	name: 'Staking.chill_other',
	v42: productionCalls.chillOther['v42'],
	v42Stage: stageCalls.chillOther['v42'],
	v42Test: testCalls.chillOther['v42'],
	v85Dev: devCalls.chillOther['v85'],
}

export const forceApplyMinCommission = {
	name: 'Staking.force_apply_min_commission',
	v42: productionCalls.forceApplyMinCommission['v42'],
	v42Stage: stageCalls.forceApplyMinCommission['v42'],
	v42Test: testCalls.forceApplyMinCommission['v42'],
	v85Dev: devCalls.forceApplyMinCommission['v85'],
}

export const setMinCommission = {
	name: 'Staking.set_min_commission',
	v53: productionCalls.setMinCommission['v53'],
	v53Stage: stageCalls.setMinCommission['v53'],
	v53Test: testCalls.setMinCommission['v53'],
	v85Dev: devCalls.setMinCommission['v85'],
}
