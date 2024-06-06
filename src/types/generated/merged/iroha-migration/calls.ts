import * as productionCalls from '../../production/iroha-migration/calls'
import * as stageCalls from '../../stage/iroha-migration/calls'
import * as testCalls from '../../test/iroha-migration/calls'
import * as devCalls from '../../dev/iroha-migration/calls'


export const migrate = {
	name: 'IrohaMigration.migrate',
	v1: productionCalls.migrate['v1'],
	v42: productionCalls.migrate['v42'],
	v1Stage: stageCalls.migrate['v1'],
	v42Stage: stageCalls.migrate['v42'],
	v1Test: testCalls.migrate['v1'],
	v42Test: testCalls.migrate['v42'],
	v85Dev: devCalls.migrate['v85'],
}
