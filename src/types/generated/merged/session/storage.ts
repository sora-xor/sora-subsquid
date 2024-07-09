import * as productionStorage from '../../production/session/storage'
import * as stageStorage from '../../stage/session/storage'
import * as testStorage from '../../test/session/storage'
import * as devStorage from '../../dev/session/storage'


export const validators = {
	name: 'Session.Validators',
	v1: productionStorage.validators['v1'],
	v1Stage: stageStorage.validators['v1'],
	v1Test: testStorage.validators['v1'],
	v85Dev: devStorage.validators['v85'],
}

export const currentIndex = {
	name: 'Session.CurrentIndex',
	v1: productionStorage.currentIndex['v1'],
	v1Stage: stageStorage.currentIndex['v1'],
	v1Test: testStorage.currentIndex['v1'],
	v85Dev: devStorage.currentIndex['v85'],
}

export const queuedChanged = {
	name: 'Session.QueuedChanged',
	v1: productionStorage.queuedChanged['v1'],
	v1Stage: stageStorage.queuedChanged['v1'],
	v1Test: testStorage.queuedChanged['v1'],
	v85Dev: devStorage.queuedChanged['v85'],
}

export const queuedKeys = {
	name: 'Session.QueuedKeys',
	v1: productionStorage.queuedKeys['v1'],
	v42: productionStorage.queuedKeys['v42'],
	v1Stage: stageStorage.queuedKeys['v1'],
	v42Stage: stageStorage.queuedKeys['v42'],
	v1Test: testStorage.queuedKeys['v1'],
	v42Test: testStorage.queuedKeys['v42'],
	v85Dev: devStorage.queuedKeys['v85'],
}

export const disabledValidators = {
	name: 'Session.DisabledValidators',
	v1: productionStorage.disabledValidators['v1'],
	v1Stage: stageStorage.disabledValidators['v1'],
	v1Test: testStorage.disabledValidators['v1'],
	v85Dev: devStorage.disabledValidators['v85'],
}

export const nextKeys = {
	name: 'Session.NextKeys',
	v1: productionStorage.nextKeys['v1'],
	v42: productionStorage.nextKeys['v42'],
	v1Stage: stageStorage.nextKeys['v1'],
	v42Stage: stageStorage.nextKeys['v42'],
	v1Test: testStorage.nextKeys['v1'],
	v42Test: testStorage.nextKeys['v42'],
	v85Dev: devStorage.nextKeys['v85'],
}

export const keyOwner = {
	name: 'Session.KeyOwner',
	v1: productionStorage.keyOwner['v1'],
	v42: productionStorage.keyOwner['v42'],
	v1Stage: stageStorage.keyOwner['v1'],
	v42Stage: stageStorage.keyOwner['v42'],
	v1Test: testStorage.keyOwner['v1'],
	v42Test: testStorage.keyOwner['v42'],
	v85Dev: devStorage.keyOwner['v85'],
}
