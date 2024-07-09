import * as productionStorage from '../../production/permissions/storage'
import * as stageStorage from '../../stage/permissions/storage'
import * as testStorage from '../../test/permissions/storage'
import * as devStorage from '../../dev/permissions/storage'


export const owners = {
	name: 'Permissions.Owners',
	v1: productionStorage.owners['v1'],
	v1Stage: stageStorage.owners['v1'],
	v1Test: testStorage.owners['v1'],
	v85Dev: devStorage.owners['v85'],
}

export const modes = {
	name: 'Permissions.Modes',
	v1: productionStorage.modes['v1'],
	v1Stage: stageStorage.modes['v1'],
	v1Test: testStorage.modes['v1'],
}

export const permissions = {
	name: 'Permissions.Permissions',
	v1: productionStorage.permissions['v1'],
	v1Stage: stageStorage.permissions['v1'],
	v1Test: testStorage.permissions['v1'],
	v85Dev: devStorage.permissions['v85'],
}
