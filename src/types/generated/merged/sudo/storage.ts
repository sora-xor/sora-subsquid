import * as productionStorage from '../../production/sudo/storage'
import * as stageStorage from '../../stage/sudo/storage'
import * as testStorage from '../../test/sudo/storage'
import * as devStorage from '../../dev/sudo/storage'


export const key = {
	name: 'Sudo.Key',
	v22: productionStorage.key['v22'],
	v22Stage: stageStorage.key['v22'],
	v22Test: testStorage.key['v22'],
	v85Dev: devStorage.key['v85'],
}
