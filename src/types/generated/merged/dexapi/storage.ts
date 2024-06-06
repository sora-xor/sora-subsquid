import * as productionStorage from '../../production/dexapi/storage'
import * as stageStorage from '../../stage/dexapi/storage'
import * as testStorage from '../../test/dexapi/storage'
import * as devStorage from '../../dev/dexapi/storage'


export const enabledSourceTypes = {
	name: 'Dexapi.EnabledSourceTypes',
	v1: productionStorage.enabledSourceTypes['v1'],
	v71: productionStorage.enabledSourceTypes['v71'],
	v1Stage: stageStorage.enabledSourceTypes['v1'],
	v71Stage: stageStorage.enabledSourceTypes['v71'],
	v1Test: testStorage.enabledSourceTypes['v1'],
	v71Test: testStorage.enabledSourceTypes['v71'],
	v85Dev: devStorage.enabledSourceTypes['v85'],
}
