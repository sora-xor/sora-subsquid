import * as productionEvents from '../../production/multisig/events'
import * as stageEvents from '../../stage/multisig/events'
import * as testEvents from '../../test/multisig/events'
import * as devEvents from '../../dev/multisig/events'


export const newMultisig = {
	name: 'Multisig.NewMultisig',
	v1: productionEvents.newMultisig['v1'],
	v42: productionEvents.newMultisig['v42'],
	v1Stage: stageEvents.newMultisig['v1'],
	v42Stage: stageEvents.newMultisig['v42'],
	v1Test: testEvents.newMultisig['v1'],
	v42Test: testEvents.newMultisig['v42'],
	v85Dev: devEvents.newMultisig['v85'],
}

export const multisigApproval = {
	name: 'Multisig.MultisigApproval',
	v1: productionEvents.multisigApproval['v1'],
	v42: productionEvents.multisigApproval['v42'],
	v1Stage: stageEvents.multisigApproval['v1'],
	v42Stage: stageEvents.multisigApproval['v42'],
	v1Test: testEvents.multisigApproval['v1'],
	v42Test: testEvents.multisigApproval['v42'],
	v85Dev: devEvents.multisigApproval['v85'],
}

export const multisigExecuted = {
	name: 'Multisig.MultisigExecuted',
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
	name: 'Multisig.MultisigCancelled',
	v1: productionEvents.multisigCancelled['v1'],
	v42: productionEvents.multisigCancelled['v42'],
	v1Stage: stageEvents.multisigCancelled['v1'],
	v42Stage: stageEvents.multisigCancelled['v42'],
	v1Test: testEvents.multisigCancelled['v1'],
	v42Test: testEvents.multisigCancelled['v42'],
	v85Dev: devEvents.multisigCancelled['v85'],
}
