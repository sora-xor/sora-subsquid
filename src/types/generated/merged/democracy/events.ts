import * as productionEvents from '../../production/democracy/events'
import * as stageEvents from '../../stage/democracy/events'
import * as testEvents from '../../test/democracy/events'
import * as devEvents from '../../dev/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	v1: productionEvents.proposed['v1'],
	v42: productionEvents.proposed['v42'],
	v1Stage: stageEvents.proposed['v1'],
	v42Stage: stageEvents.proposed['v42'],
	v1Test: testEvents.proposed['v1'],
	v42Test: testEvents.proposed['v42'],
	v85Dev: devEvents.proposed['v85'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	v1: productionEvents.tabled['v1'],
	v42: productionEvents.tabled['v42'],
	v53: productionEvents.tabled['v53'],
	v1Stage: stageEvents.tabled['v1'],
	v42Stage: stageEvents.tabled['v42'],
	v53Stage: stageEvents.tabled['v53'],
	v1Test: testEvents.tabled['v1'],
	v42Test: testEvents.tabled['v42'],
	v53Test: testEvents.tabled['v53'],
	v85Dev: devEvents.tabled['v85'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	v1: productionEvents.externalTabled['v1'],
	v1Stage: stageEvents.externalTabled['v1'],
	v1Test: testEvents.externalTabled['v1'],
	v85Dev: devEvents.externalTabled['v85'],
}

export const started = {
	name: 'Democracy.Started',
	v1: productionEvents.started['v1'],
	v42: productionEvents.started['v42'],
	v1Stage: stageEvents.started['v1'],
	v42Stage: stageEvents.started['v42'],
	v1Test: testEvents.started['v1'],
	v42Test: testEvents.started['v42'],
	v85Dev: devEvents.started['v85'],
}

export const passed = {
	name: 'Democracy.Passed',
	v1: productionEvents.passed['v1'],
	v42: productionEvents.passed['v42'],
	v1Stage: stageEvents.passed['v1'],
	v42Stage: stageEvents.passed['v42'],
	v1Test: testEvents.passed['v1'],
	v42Test: testEvents.passed['v42'],
	v85Dev: devEvents.passed['v85'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	v1: productionEvents.notPassed['v1'],
	v42: productionEvents.notPassed['v42'],
	v1Stage: stageEvents.notPassed['v1'],
	v42Stage: stageEvents.notPassed['v42'],
	v1Test: testEvents.notPassed['v1'],
	v42Test: testEvents.notPassed['v42'],
	v85Dev: devEvents.notPassed['v85'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	v1: productionEvents.cancelled['v1'],
	v42: productionEvents.cancelled['v42'],
	v1Stage: stageEvents.cancelled['v1'],
	v42Stage: stageEvents.cancelled['v42'],
	v1Test: testEvents.cancelled['v1'],
	v42Test: testEvents.cancelled['v42'],
	v85Dev: devEvents.cancelled['v85'],
}

export const executed = {
	name: 'Democracy.Executed',
	v1: productionEvents.executed['v1'],
	v42: productionEvents.executed['v42'],
	v1Stage: stageEvents.executed['v1'],
	v42Stage: stageEvents.executed['v42'],
	v1Test: testEvents.executed['v1'],
	v42Test: testEvents.executed['v42'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	v1: productionEvents.delegated['v1'],
	v42: productionEvents.delegated['v42'],
	v1Stage: stageEvents.delegated['v1'],
	v42Stage: stageEvents.delegated['v42'],
	v1Test: testEvents.delegated['v1'],
	v42Test: testEvents.delegated['v42'],
	v85Dev: devEvents.delegated['v85'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	v1: productionEvents.undelegated['v1'],
	v42: productionEvents.undelegated['v42'],
	v1Stage: stageEvents.undelegated['v1'],
	v42Stage: stageEvents.undelegated['v42'],
	v1Test: testEvents.undelegated['v1'],
	v42Test: testEvents.undelegated['v42'],
	v85Dev: devEvents.undelegated['v85'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	v1: productionEvents.vetoed['v1'],
	v42: productionEvents.vetoed['v42'],
	v1Stage: stageEvents.vetoed['v1'],
	v42Stage: stageEvents.vetoed['v42'],
	v1Test: testEvents.vetoed['v1'],
	v42Test: testEvents.vetoed['v42'],
	v85Dev: devEvents.vetoed['v85'],
}

export const preimageNoted = {
	name: 'Democracy.PreimageNoted',
	v1: productionEvents.preimageNoted['v1'],
	v42: productionEvents.preimageNoted['v42'],
	v1Stage: stageEvents.preimageNoted['v1'],
	v42Stage: stageEvents.preimageNoted['v42'],
	v1Test: testEvents.preimageNoted['v1'],
	v42Test: testEvents.preimageNoted['v42'],
}

export const preimageUsed = {
	name: 'Democracy.PreimageUsed',
	v1: productionEvents.preimageUsed['v1'],
	v42: productionEvents.preimageUsed['v42'],
	v1Stage: stageEvents.preimageUsed['v1'],
	v42Stage: stageEvents.preimageUsed['v42'],
	v1Test: testEvents.preimageUsed['v1'],
	v42Test: testEvents.preimageUsed['v42'],
}

export const preimageInvalid = {
	name: 'Democracy.PreimageInvalid',
	v1: productionEvents.preimageInvalid['v1'],
	v42: productionEvents.preimageInvalid['v42'],
	v1Stage: stageEvents.preimageInvalid['v1'],
	v42Stage: stageEvents.preimageInvalid['v42'],
	v1Test: testEvents.preimageInvalid['v1'],
	v42Test: testEvents.preimageInvalid['v42'],
}

export const preimageMissing = {
	name: 'Democracy.PreimageMissing',
	v1: productionEvents.preimageMissing['v1'],
	v42: productionEvents.preimageMissing['v42'],
	v1Stage: stageEvents.preimageMissing['v1'],
	v42Stage: stageEvents.preimageMissing['v42'],
	v1Test: testEvents.preimageMissing['v1'],
	v42Test: testEvents.preimageMissing['v42'],
}

export const preimageReaped = {
	name: 'Democracy.PreimageReaped',
	v1: productionEvents.preimageReaped['v1'],
	v42: productionEvents.preimageReaped['v42'],
	v1Stage: stageEvents.preimageReaped['v1'],
	v42Stage: stageEvents.preimageReaped['v42'],
	v1Test: testEvents.preimageReaped['v1'],
	v42Test: testEvents.preimageReaped['v42'],
}

export const unlocked = {
	name: 'Democracy.Unlocked',
	v1: productionEvents.unlocked['v1'],
	v1Stage: stageEvents.unlocked['v1'],
	v1Test: testEvents.unlocked['v1'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	v1: productionEvents.blacklisted['v1'],
	v42: productionEvents.blacklisted['v42'],
	v1Stage: stageEvents.blacklisted['v1'],
	v42Stage: stageEvents.blacklisted['v42'],
	v1Test: testEvents.blacklisted['v1'],
	v42Test: testEvents.blacklisted['v42'],
	v85Dev: devEvents.blacklisted['v85'],
}

export const voted = {
	name: 'Democracy.Voted',
	v42: productionEvents.voted['v42'],
	v42Stage: stageEvents.voted['v42'],
	v42Test: testEvents.voted['v42'],
	v85Dev: devEvents.voted['v85'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	v42: productionEvents.seconded['v42'],
	v42Stage: stageEvents.seconded['v42'],
	v42Test: testEvents.seconded['v42'],
	v85Dev: devEvents.seconded['v85'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	v42: productionEvents.proposalCanceled['v42'],
	v42Stage: stageEvents.proposalCanceled['v42'],
	v42Test: testEvents.proposalCanceled['v42'],
	v85Dev: devEvents.proposalCanceled['v85'],
}
