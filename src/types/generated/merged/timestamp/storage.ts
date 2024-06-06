import * as productionStorage from '../../production/timestamp/storage'
import * as stageStorage from '../../stage/timestamp/storage'
import * as testStorage from '../../test/timestamp/storage'
import * as devStorage from '../../dev/timestamp/storage'


export const now = {
	name: 'Timestamp.Now',
	v1: productionStorage.now['v1'],
	v1Stage: stageStorage.now['v1'],
	v1Test: testStorage.now['v1'],
	v85Dev: devStorage.now['v85'],
}

export const didUpdate = {
	name: 'Timestamp.DidUpdate',
	v1: productionStorage.didUpdate['v1'],
	v1Stage: stageStorage.didUpdate['v1'],
	v1Test: testStorage.didUpdate['v1'],
	v85Dev: devStorage.didUpdate['v85'],
}
