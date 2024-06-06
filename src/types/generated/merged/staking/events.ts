import * as productionEvents from '../../production/staking/events'
import * as stageEvents from '../../stage/staking/events'
import * as testEvents from '../../test/staking/events'
import * as devEvents from '../../dev/staking/events'


export const eraPayout = {
	name: 'Staking.EraPayout',
	v1: productionEvents.eraPayout['v1'],
	v1Stage: stageEvents.eraPayout['v1'],
	v1Test: testEvents.eraPayout['v1'],
}

export const reward = {
	name: 'Staking.Reward',
	v1: productionEvents.reward['v1'],
	v1Stage: stageEvents.reward['v1'],
	v1Test: testEvents.reward['v1'],
}

export const slash = {
	name: 'Staking.Slash',
	v1: productionEvents.slash['v1'],
	v1Stage: stageEvents.slash['v1'],
	v1Test: testEvents.slash['v1'],
}

export const oldSlashingReportDiscarded = {
	name: 'Staking.OldSlashingReportDiscarded',
	v1: productionEvents.oldSlashingReportDiscarded['v1'],
	v53: productionEvents.oldSlashingReportDiscarded['v53'],
	v1Stage: stageEvents.oldSlashingReportDiscarded['v1'],
	v53Stage: stageEvents.oldSlashingReportDiscarded['v53'],
	v1Test: testEvents.oldSlashingReportDiscarded['v1'],
	v53Test: testEvents.oldSlashingReportDiscarded['v53'],
	v85Dev: devEvents.oldSlashingReportDiscarded['v85'],
}

export const stakingElection = {
	name: 'Staking.StakingElection',
	v1: productionEvents.stakingElection['v1'],
	v1Stage: stageEvents.stakingElection['v1'],
	v1Test: testEvents.stakingElection['v1'],
}

export const solutionStored = {
	name: 'Staking.SolutionStored',
	v1: productionEvents.solutionStored['v1'],
	v1Stage: stageEvents.solutionStored['v1'],
	v1Test: testEvents.solutionStored['v1'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v1: productionEvents.bonded['v1'],
	v53: productionEvents.bonded['v53'],
	v1Stage: stageEvents.bonded['v1'],
	v53Stage: stageEvents.bonded['v53'],
	v1Test: testEvents.bonded['v1'],
	v53Test: testEvents.bonded['v53'],
	v85Dev: devEvents.bonded['v85'],
}

export const unbonded = {
	name: 'Staking.Unbonded',
	v1: productionEvents.unbonded['v1'],
	v53: productionEvents.unbonded['v53'],
	v1Stage: stageEvents.unbonded['v1'],
	v53Stage: stageEvents.unbonded['v53'],
	v1Test: testEvents.unbonded['v1'],
	v53Test: testEvents.unbonded['v53'],
	v85Dev: devEvents.unbonded['v85'],
}

export const withdrawn = {
	name: 'Staking.Withdrawn',
	v1: productionEvents.withdrawn['v1'],
	v53: productionEvents.withdrawn['v53'],
	v1Stage: stageEvents.withdrawn['v1'],
	v53Stage: stageEvents.withdrawn['v53'],
	v1Test: testEvents.withdrawn['v1'],
	v53Test: testEvents.withdrawn['v53'],
	v85Dev: devEvents.withdrawn['v85'],
}

export const kicked = {
	name: 'Staking.Kicked',
	v1: productionEvents.kicked['v1'],
	v53: productionEvents.kicked['v53'],
	v1Stage: stageEvents.kicked['v1'],
	v53Stage: stageEvents.kicked['v53'],
	v1Test: testEvents.kicked['v1'],
	v53Test: testEvents.kicked['v53'],
	v85Dev: devEvents.kicked['v85'],
}

export const eraPaid = {
	name: 'Staking.EraPaid',
	v42: productionEvents.eraPaid['v42'],
	v53: productionEvents.eraPaid['v53'],
	v42Stage: stageEvents.eraPaid['v42'],
	v53Stage: stageEvents.eraPaid['v53'],
	v42Test: testEvents.eraPaid['v42'],
	v53Test: testEvents.eraPaid['v53'],
	v85Dev: devEvents.eraPaid['v85'],
}

export const rewarded = {
	name: 'Staking.Rewarded',
	v42: productionEvents.rewarded['v42'],
	v53: productionEvents.rewarded['v53'],
	v42Stage: stageEvents.rewarded['v42'],
	v53Stage: stageEvents.rewarded['v53'],
	v42Test: testEvents.rewarded['v42'],
	v53Test: testEvents.rewarded['v53'],
	v85Dev: devEvents.rewarded['v85'],
}

export const slashed = {
	name: 'Staking.Slashed',
	v42: productionEvents.slashed['v42'],
	v53: productionEvents.slashed['v53'],
	v42Stage: stageEvents.slashed['v42'],
	v53Stage: stageEvents.slashed['v53'],
	v42Test: testEvents.slashed['v42'],
	v53Test: testEvents.slashed['v53'],
	v85Dev: devEvents.slashed['v85'],
}

export const stakersElected = {
	name: 'Staking.StakersElected',
	v42: productionEvents.stakersElected['v42'],
	v42Stage: stageEvents.stakersElected['v42'],
	v42Test: testEvents.stakersElected['v42'],
	v85Dev: devEvents.stakersElected['v85'],
}

export const stakingElectionFailed = {
	name: 'Staking.StakingElectionFailed',
	v42: productionEvents.stakingElectionFailed['v42'],
	v42Stage: stageEvents.stakingElectionFailed['v42'],
	v42Test: testEvents.stakingElectionFailed['v42'],
	v85Dev: devEvents.stakingElectionFailed['v85'],
}

export const chilled = {
	name: 'Staking.Chilled',
	v42: productionEvents.chilled['v42'],
	v53: productionEvents.chilled['v53'],
	v42Stage: stageEvents.chilled['v42'],
	v53Stage: stageEvents.chilled['v53'],
	v42Test: testEvents.chilled['v42'],
	v53Test: testEvents.chilled['v53'],
	v85Dev: devEvents.chilled['v85'],
}

export const payoutStarted = {
	name: 'Staking.PayoutStarted',
	v42: productionEvents.payoutStarted['v42'],
	v53: productionEvents.payoutStarted['v53'],
	v42Stage: stageEvents.payoutStarted['v42'],
	v53Stage: stageEvents.payoutStarted['v53'],
	v42Test: testEvents.payoutStarted['v42'],
	v53Test: testEvents.payoutStarted['v53'],
	v85Dev: devEvents.payoutStarted['v85'],
}

export const validatorPrefsSet = {
	name: 'Staking.ValidatorPrefsSet',
	v42: productionEvents.validatorPrefsSet['v42'],
	v53: productionEvents.validatorPrefsSet['v53'],
	v42Stage: stageEvents.validatorPrefsSet['v42'],
	v53Stage: stageEvents.validatorPrefsSet['v53'],
	v42Test: testEvents.validatorPrefsSet['v42'],
	v53Test: testEvents.validatorPrefsSet['v53'],
	v85Dev: devEvents.validatorPrefsSet['v85'],
}

export const slashReported = {
	name: 'Staking.SlashReported',
	v53: productionEvents.slashReported['v53'],
	v53Stage: stageEvents.slashReported['v53'],
	v53Test: testEvents.slashReported['v53'],
	v85Dev: devEvents.slashReported['v85'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v53: productionEvents.forceEra['v53'],
	v53Stage: stageEvents.forceEra['v53'],
	v53Test: testEvents.forceEra['v53'],
	v85Dev: devEvents.forceEra['v85'],
}
