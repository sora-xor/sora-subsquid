import * as productionStorage from '../../production/multisig/storage'
import * as stageStorage from '../../stage/multisig/storage'
import * as testStorage from '../../test/multisig/storage'
import * as devStorage from '../../dev/multisig/storage'


export const multisigs = {
	name: 'Multisig.Multisigs',
	v1: productionStorage.multisigs['v1'],
	v1Stage: stageStorage.multisigs['v1'],
	v1Test: testStorage.multisigs['v1'],
	v85Dev: devStorage.multisigs['v85'],
}

export const calls = {
	name: 'Multisig.Calls',
	v1: productionStorage.calls['v1'],
	v1Stage: stageStorage.calls['v1'],
	v1Test: testStorage.calls['v1'],
}
