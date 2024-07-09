import * as productionEvents from '../../production/election-provider-multi-phase/events'
import * as stageEvents from '../../stage/election-provider-multi-phase/events'
import * as testEvents from '../../test/election-provider-multi-phase/events'
import * as devEvents from '../../dev/election-provider-multi-phase/events'


export const solutionStored = {
	name: 'ElectionProviderMultiPhase.SolutionStored',
	v42: productionEvents.solutionStored['v42'],
	v53: productionEvents.solutionStored['v53'],
	v42Stage: stageEvents.solutionStored['v42'],
	v53Stage: stageEvents.solutionStored['v53'],
	v42Test: testEvents.solutionStored['v42'],
	v53Test: testEvents.solutionStored['v53'],
	v85Dev: devEvents.solutionStored['v85'],
}

export const electionFinalized = {
	name: 'ElectionProviderMultiPhase.ElectionFinalized',
	v42: productionEvents.electionFinalized['v42'],
	v53: productionEvents.electionFinalized['v53'],
	v42Stage: stageEvents.electionFinalized['v42'],
	v53Stage: stageEvents.electionFinalized['v53'],
	v42Test: testEvents.electionFinalized['v42'],
	v53Test: testEvents.electionFinalized['v53'],
	v85Dev: devEvents.electionFinalized['v85'],
}

export const rewarded = {
	name: 'ElectionProviderMultiPhase.Rewarded',
	v42: productionEvents.rewarded['v42'],
	v42Stage: stageEvents.rewarded['v42'],
	v42Test: testEvents.rewarded['v42'],
	v85Dev: devEvents.rewarded['v85'],
}

export const slashed = {
	name: 'ElectionProviderMultiPhase.Slashed',
	v42: productionEvents.slashed['v42'],
	v42Stage: stageEvents.slashed['v42'],
	v42Test: testEvents.slashed['v42'],
	v85Dev: devEvents.slashed['v85'],
}

export const signedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.SignedPhaseStarted',
	v42: productionEvents.signedPhaseStarted['v42'],
	v42Stage: stageEvents.signedPhaseStarted['v42'],
	v42Test: testEvents.signedPhaseStarted['v42'],
}

export const unsignedPhaseStarted = {
	name: 'ElectionProviderMultiPhase.UnsignedPhaseStarted',
	v42: productionEvents.unsignedPhaseStarted['v42'],
	v42Stage: stageEvents.unsignedPhaseStarted['v42'],
	v42Test: testEvents.unsignedPhaseStarted['v42'],
}

export const electionFailed = {
	name: 'ElectionProviderMultiPhase.ElectionFailed',
	v53: productionEvents.electionFailed['v53'],
	v53Stage: stageEvents.electionFailed['v53'],
	v53Test: testEvents.electionFailed['v53'],
	v85Dev: devEvents.electionFailed['v85'],
}

export const phaseTransitioned = {
	name: 'ElectionProviderMultiPhase.PhaseTransitioned',
	v53: productionEvents.phaseTransitioned['v53'],
	v53Stage: stageEvents.phaseTransitioned['v53'],
	v53Test: testEvents.phaseTransitioned['v53'],
	v85Dev: devEvents.phaseTransitioned['v85'],
}
