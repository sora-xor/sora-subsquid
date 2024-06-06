import * as productionEvents from '../../production/bridge-multisig/events'
import * as stageEvents from '../../stage/bridge-multisig/events'
import * as testEvents from '../../test/bridge-multisig/events'
import * as devEvents from '../../dev/bridge-multisig/events'


export const multisigAccountCreated = {
	name: 'BridgeMultisig.MultisigAccountCreated',
	v1: productionEvents.multisigAccountCreated['v1'],
	v1Stage: stageEvents.multisigAccountCreated['v1'],
	v1Test: testEvents.multisigAccountCreated['v1'],
	v85Dev: devEvents.multisigAccountCreated['v85'],
}

export const newMultisig = {
	name: 'BridgeMultisig.NewMultisig',
	v1: productionEvents.newMultisig['v1'],
	v1Stage: stageEvents.newMultisig['v1'],
	v1Test: testEvents.newMultisig['v1'],
	v85Dev: devEvents.newMultisig['v85'],
}

export const multisigApproval = {
	name: 'BridgeMultisig.MultisigApproval',
	v1: productionEvents.multisigApproval['v1'],
	v1Stage: stageEvents.multisigApproval['v1'],
	v1Test: testEvents.multisigApproval['v1'],
	v85Dev: devEvents.multisigApproval['v85'],
}

export const multisigExecuted = {
	name: 'BridgeMultisig.MultisigExecuted',
	v1: productionEvents.multisigExecuted['v1'],
	v42: productionEvents.multisigExecuted['v42'],
	v53: productionEvents.multisigExecuted['v53'],
	v1Stage: stageEvents.multisigExecuted['v1'],
	v42Stage: stageEvents.multisigExecuted['v42'],
	v53Stage: stageEvents.multisigExecuted['v53'],
	v1Test: testEvents.multisigExecuted['v1'],
	v42Test: testEvents.multisigExecuted['v42'],
	v53Test: testEvents.multisigExecuted['v53'],
	v85Dev: devEvents.multisigExecuted['v85'],
}

export const multisigCancelled = {
	name: 'BridgeMultisig.MultisigCancelled',
	v1: productionEvents.multisigCancelled['v1'],
	v1Stage: stageEvents.multisigCancelled['v1'],
	v1Test: testEvents.multisigCancelled['v1'],
	v85Dev: devEvents.multisigCancelled['v85'],
}
