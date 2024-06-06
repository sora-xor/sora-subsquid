import * as productionStorage from '../../production/grandpa/storage'
import * as stageStorage from '../../stage/grandpa/storage'
import * as testStorage from '../../test/grandpa/storage'
import * as devStorage from '../../dev/grandpa/storage'


export const state = {
	name: 'Grandpa.State',
	v1: productionStorage.state['v1'],
	v42: productionStorage.state['v42'],
	v1Stage: stageStorage.state['v1'],
	v42Stage: stageStorage.state['v42'],
	v1Test: testStorage.state['v1'],
	v42Test: testStorage.state['v42'],
	v85Dev: devStorage.state['v85'],
}

export const pendingChange = {
	name: 'Grandpa.PendingChange',
	v1: productionStorage.pendingChange['v1'],
	v42: productionStorage.pendingChange['v42'],
	v1Stage: stageStorage.pendingChange['v1'],
	v42Stage: stageStorage.pendingChange['v42'],
	v1Test: testStorage.pendingChange['v1'],
	v42Test: testStorage.pendingChange['v42'],
	v85Dev: devStorage.pendingChange['v85'],
}

export const nextForced = {
	name: 'Grandpa.NextForced',
	v1: productionStorage.nextForced['v1'],
	v1Stage: stageStorage.nextForced['v1'],
	v1Test: testStorage.nextForced['v1'],
	v85Dev: devStorage.nextForced['v85'],
}

export const stalled = {
	name: 'Grandpa.Stalled',
	v1: productionStorage.stalled['v1'],
	v1Stage: stageStorage.stalled['v1'],
	v1Test: testStorage.stalled['v1'],
	v85Dev: devStorage.stalled['v85'],
}

export const currentSetId = {
	name: 'Grandpa.CurrentSetId',
	v1: productionStorage.currentSetId['v1'],
	v1Stage: stageStorage.currentSetId['v1'],
	v1Test: testStorage.currentSetId['v1'],
	v85Dev: devStorage.currentSetId['v85'],
}

export const setIdSession = {
	name: 'Grandpa.SetIdSession',
	v1: productionStorage.setIdSession['v1'],
	v1Stage: stageStorage.setIdSession['v1'],
	v1Test: testStorage.setIdSession['v1'],
	v85Dev: devStorage.setIdSession['v85'],
}
