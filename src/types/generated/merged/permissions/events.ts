import * as productionEvents from '../../production/permissions/events'
import * as stageEvents from '../../stage/permissions/events'
import * as testEvents from '../../test/permissions/events'
import * as devEvents from '../../dev/permissions/events'


export const permissionGranted = {
	name: 'Permissions.PermissionGranted',
	v1: productionEvents.permissionGranted['v1'],
	v1Stage: stageEvents.permissionGranted['v1'],
	v1Test: testEvents.permissionGranted['v1'],
	v85Dev: devEvents.permissionGranted['v85'],
}

export const permissionTransfered = {
	name: 'Permissions.PermissionTransfered',
	v1: productionEvents.permissionTransfered['v1'],
	v1Stage: stageEvents.permissionTransfered['v1'],
	v1Test: testEvents.permissionTransfered['v1'],
	v85Dev: devEvents.permissionTransfered['v85'],
}

export const permissionCreated = {
	name: 'Permissions.PermissionCreated',
	v1: productionEvents.permissionCreated['v1'],
	v1Stage: stageEvents.permissionCreated['v1'],
	v1Test: testEvents.permissionCreated['v1'],
	v85Dev: devEvents.permissionCreated['v85'],
}

export const permissionAssigned = {
	name: 'Permissions.PermissionAssigned',
	v1: productionEvents.permissionAssigned['v1'],
	v1Stage: stageEvents.permissionAssigned['v1'],
	v1Test: testEvents.permissionAssigned['v1'],
	v85Dev: devEvents.permissionAssigned['v85'],
}
