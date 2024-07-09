import * as productionEvents from '../../production/identity/events'
import * as stageEvents from '../../stage/identity/events'
import * as testEvents from '../../test/identity/events'
import * as devEvents from '../../dev/identity/events'


export const identitySet = {
	name: 'Identity.IdentitySet',
	v3: productionEvents.identitySet['v3'],
	v42: productionEvents.identitySet['v42'],
	v3Stage: stageEvents.identitySet['v3'],
	v42Stage: stageEvents.identitySet['v42'],
	v3Test: testEvents.identitySet['v3'],
	v42Test: testEvents.identitySet['v42'],
	v85Dev: devEvents.identitySet['v85'],
}

export const identityCleared = {
	name: 'Identity.IdentityCleared',
	v3: productionEvents.identityCleared['v3'],
	v42: productionEvents.identityCleared['v42'],
	v3Stage: stageEvents.identityCleared['v3'],
	v42Stage: stageEvents.identityCleared['v42'],
	v3Test: testEvents.identityCleared['v3'],
	v42Test: testEvents.identityCleared['v42'],
	v85Dev: devEvents.identityCleared['v85'],
}

export const identityKilled = {
	name: 'Identity.IdentityKilled',
	v3: productionEvents.identityKilled['v3'],
	v42: productionEvents.identityKilled['v42'],
	v3Stage: stageEvents.identityKilled['v3'],
	v42Stage: stageEvents.identityKilled['v42'],
	v3Test: testEvents.identityKilled['v3'],
	v42Test: testEvents.identityKilled['v42'],
	v85Dev: devEvents.identityKilled['v85'],
}

export const judgementRequested = {
	name: 'Identity.JudgementRequested',
	v3: productionEvents.judgementRequested['v3'],
	v42: productionEvents.judgementRequested['v42'],
	v3Stage: stageEvents.judgementRequested['v3'],
	v42Stage: stageEvents.judgementRequested['v42'],
	v3Test: testEvents.judgementRequested['v3'],
	v42Test: testEvents.judgementRequested['v42'],
	v85Dev: devEvents.judgementRequested['v85'],
}

export const judgementUnrequested = {
	name: 'Identity.JudgementUnrequested',
	v3: productionEvents.judgementUnrequested['v3'],
	v42: productionEvents.judgementUnrequested['v42'],
	v3Stage: stageEvents.judgementUnrequested['v3'],
	v42Stage: stageEvents.judgementUnrequested['v42'],
	v3Test: testEvents.judgementUnrequested['v3'],
	v42Test: testEvents.judgementUnrequested['v42'],
	v85Dev: devEvents.judgementUnrequested['v85'],
}

export const judgementGiven = {
	name: 'Identity.JudgementGiven',
	v3: productionEvents.judgementGiven['v3'],
	v42: productionEvents.judgementGiven['v42'],
	v3Stage: stageEvents.judgementGiven['v3'],
	v42Stage: stageEvents.judgementGiven['v42'],
	v3Test: testEvents.judgementGiven['v3'],
	v42Test: testEvents.judgementGiven['v42'],
	v85Dev: devEvents.judgementGiven['v85'],
}

export const registrarAdded = {
	name: 'Identity.RegistrarAdded',
	v3: productionEvents.registrarAdded['v3'],
	v42: productionEvents.registrarAdded['v42'],
	v3Stage: stageEvents.registrarAdded['v3'],
	v42Stage: stageEvents.registrarAdded['v42'],
	v3Test: testEvents.registrarAdded['v3'],
	v42Test: testEvents.registrarAdded['v42'],
	v85Dev: devEvents.registrarAdded['v85'],
}

export const subIdentityAdded = {
	name: 'Identity.SubIdentityAdded',
	v3: productionEvents.subIdentityAdded['v3'],
	v42: productionEvents.subIdentityAdded['v42'],
	v3Stage: stageEvents.subIdentityAdded['v3'],
	v42Stage: stageEvents.subIdentityAdded['v42'],
	v3Test: testEvents.subIdentityAdded['v3'],
	v42Test: testEvents.subIdentityAdded['v42'],
	v85Dev: devEvents.subIdentityAdded['v85'],
}

export const subIdentityRemoved = {
	name: 'Identity.SubIdentityRemoved',
	v3: productionEvents.subIdentityRemoved['v3'],
	v42: productionEvents.subIdentityRemoved['v42'],
	v3Stage: stageEvents.subIdentityRemoved['v3'],
	v42Stage: stageEvents.subIdentityRemoved['v42'],
	v3Test: testEvents.subIdentityRemoved['v3'],
	v42Test: testEvents.subIdentityRemoved['v42'],
	v85Dev: devEvents.subIdentityRemoved['v85'],
}

export const subIdentityRevoked = {
	name: 'Identity.SubIdentityRevoked',
	v3: productionEvents.subIdentityRevoked['v3'],
	v42: productionEvents.subIdentityRevoked['v42'],
	v3Stage: stageEvents.subIdentityRevoked['v3'],
	v42Stage: stageEvents.subIdentityRevoked['v42'],
	v3Test: testEvents.subIdentityRevoked['v3'],
	v42Test: testEvents.subIdentityRevoked['v42'],
	v85Dev: devEvents.subIdentityRevoked['v85'],
}
