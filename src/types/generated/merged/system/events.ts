import * as productionEvents from '../../production/system/events'
import * as stageEvents from '../../stage/system/events'
import * as testEvents from '../../test/system/events'
import * as devEvents from '../../dev/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	v1: productionEvents.extrinsicSuccess['v1'],
	v42: productionEvents.extrinsicSuccess['v42'],
	v53: productionEvents.extrinsicSuccess['v53'],
	v1Stage: stageEvents.extrinsicSuccess['v1'],
	v42Stage: stageEvents.extrinsicSuccess['v42'],
	v53Stage: stageEvents.extrinsicSuccess['v53'],
	v1Test: testEvents.extrinsicSuccess['v1'],
	v42Test: testEvents.extrinsicSuccess['v42'],
	v53Test: testEvents.extrinsicSuccess['v53'],
	v85Dev: devEvents.extrinsicSuccess['v85'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	v1: productionEvents.extrinsicFailed['v1'],
	v42: productionEvents.extrinsicFailed['v42'],
	v53: productionEvents.extrinsicFailed['v53'],
	v1Stage: stageEvents.extrinsicFailed['v1'],
	v42Stage: stageEvents.extrinsicFailed['v42'],
	v53Stage: stageEvents.extrinsicFailed['v53'],
	v1Test: testEvents.extrinsicFailed['v1'],
	v42Test: testEvents.extrinsicFailed['v42'],
	v53Test: testEvents.extrinsicFailed['v53'],
	v85Dev: devEvents.extrinsicFailed['v85'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	v1: productionEvents.codeUpdated['v1'],
	v1Stage: stageEvents.codeUpdated['v1'],
	v1Test: testEvents.codeUpdated['v1'],
	v85Dev: devEvents.codeUpdated['v85'],
}

export const newAccount = {
	name: 'System.NewAccount',
	v1: productionEvents.newAccount['v1'],
	v42: productionEvents.newAccount['v42'],
	v1Stage: stageEvents.newAccount['v1'],
	v42Stage: stageEvents.newAccount['v42'],
	v1Test: testEvents.newAccount['v1'],
	v42Test: testEvents.newAccount['v42'],
	v85Dev: devEvents.newAccount['v85'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	v1: productionEvents.killedAccount['v1'],
	v42: productionEvents.killedAccount['v42'],
	v1Stage: stageEvents.killedAccount['v1'],
	v42Stage: stageEvents.killedAccount['v42'],
	v1Test: testEvents.killedAccount['v1'],
	v42Test: testEvents.killedAccount['v42'],
	v85Dev: devEvents.killedAccount['v85'],
}

export const remarked = {
	name: 'System.Remarked',
	v42: productionEvents.remarked['v42'],
	v42Stage: stageEvents.remarked['v42'],
	v42Test: testEvents.remarked['v42'],
	v85Dev: devEvents.remarked['v85'],
}
