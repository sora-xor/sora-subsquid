import * as productionEvents from '../../production/ceres-launchpad/events'
import * as stageEvents from '../../stage/ceres-launchpad/events'
import * as testEvents from '../../test/ceres-launchpad/events'
import * as devEvents from '../../dev/ceres-launchpad/events'


export const iloCreated = {
	name: 'CeresLaunchpad.ILOCreated',
	v26: productionEvents.iloCreated['v26'],
	v42: productionEvents.iloCreated['v42'],
	v26Stage: stageEvents.iloCreated['v26'],
	v42Stage: stageEvents.iloCreated['v42'],
	v26Test: testEvents.iloCreated['v26'],
	v42Test: testEvents.iloCreated['v42'],
	v85Dev: devEvents.iloCreated['v85'],
}

export const contributed = {
	name: 'CeresLaunchpad.Contributed',
	v26: productionEvents.contributed['v26'],
	v42: productionEvents.contributed['v42'],
	v26Stage: stageEvents.contributed['v26'],
	v42Stage: stageEvents.contributed['v42'],
	v26Test: testEvents.contributed['v26'],
	v42Test: testEvents.contributed['v42'],
	v85Dev: devEvents.contributed['v85'],
}

export const emergencyWithdrawn = {
	name: 'CeresLaunchpad.EmergencyWithdrawn',
	v26: productionEvents.emergencyWithdrawn['v26'],
	v42: productionEvents.emergencyWithdrawn['v42'],
	v26Stage: stageEvents.emergencyWithdrawn['v26'],
	v42Stage: stageEvents.emergencyWithdrawn['v42'],
	v26Test: testEvents.emergencyWithdrawn['v26'],
	v42Test: testEvents.emergencyWithdrawn['v42'],
	v85Dev: devEvents.emergencyWithdrawn['v85'],
}

export const iloFinished = {
	name: 'CeresLaunchpad.ILOFinished',
	v26: productionEvents.iloFinished['v26'],
	v42: productionEvents.iloFinished['v42'],
	v26Stage: stageEvents.iloFinished['v26'],
	v42Stage: stageEvents.iloFinished['v42'],
	v26Test: testEvents.iloFinished['v26'],
	v42Test: testEvents.iloFinished['v42'],
	v85Dev: devEvents.iloFinished['v85'],
}

export const claimedLp = {
	name: 'CeresLaunchpad.ClaimedLP',
	v26: productionEvents.claimedLp['v26'],
	v42: productionEvents.claimedLp['v42'],
	v26Stage: stageEvents.claimedLp['v26'],
	v42Stage: stageEvents.claimedLp['v42'],
	v26Test: testEvents.claimedLp['v26'],
	v42Test: testEvents.claimedLp['v42'],
	v85Dev: devEvents.claimedLp['v85'],
}

export const claimed = {
	name: 'CeresLaunchpad.Claimed',
	v26: productionEvents.claimed['v26'],
	v42: productionEvents.claimed['v42'],
	v26Stage: stageEvents.claimed['v26'],
	v42Stage: stageEvents.claimed['v42'],
	v26Test: testEvents.claimed['v26'],
	v42Test: testEvents.claimed['v42'],
	v85Dev: devEvents.claimed['v85'],
}

export const feeChanged = {
	name: 'CeresLaunchpad.FeeChanged',
	v26: productionEvents.feeChanged['v26'],
	v26Stage: stageEvents.feeChanged['v26'],
	v26Test: testEvents.feeChanged['v26'],
	v85Dev: devEvents.feeChanged['v85'],
}

export const claimedPswap = {
	name: 'CeresLaunchpad.ClaimedPSWAP',
	v26: productionEvents.claimedPswap['v26'],
	v26Stage: stageEvents.claimedPswap['v26'],
	v26Test: testEvents.claimedPswap['v26'],
	v85Dev: devEvents.claimedPswap['v85'],
}

export const whitelistedContributor = {
	name: 'CeresLaunchpad.WhitelistedContributor',
	v33: productionEvents.whitelistedContributor['v33'],
	v33Stage: stageEvents.whitelistedContributor['v33'],
	v33Test: testEvents.whitelistedContributor['v33'],
	v85Dev: devEvents.whitelistedContributor['v85'],
}

export const whitelistedIloOrganizer = {
	name: 'CeresLaunchpad.WhitelistedIloOrganizer',
	v33: productionEvents.whitelistedIloOrganizer['v33'],
	v33Stage: stageEvents.whitelistedIloOrganizer['v33'],
	v33Test: testEvents.whitelistedIloOrganizer['v33'],
	v85Dev: devEvents.whitelistedIloOrganizer['v85'],
}

export const removedWhitelistedContributor = {
	name: 'CeresLaunchpad.RemovedWhitelistedContributor',
	v33: productionEvents.removedWhitelistedContributor['v33'],
	v33Stage: stageEvents.removedWhitelistedContributor['v33'],
	v33Test: testEvents.removedWhitelistedContributor['v33'],
	v85Dev: devEvents.removedWhitelistedContributor['v85'],
}

export const removedWhitelistedIloOrganizer = {
	name: 'CeresLaunchpad.RemovedWhitelistedIloOrganizer',
	v33: productionEvents.removedWhitelistedIloOrganizer['v33'],
	v33Stage: stageEvents.removedWhitelistedIloOrganizer['v33'],
	v33Test: testEvents.removedWhitelistedIloOrganizer['v33'],
	v85Dev: devEvents.removedWhitelistedIloOrganizer['v85'],
}
