import * as productionStorage from '../../production/technical-membership/storage'
import * as stageStorage from '../../stage/technical-membership/storage'
import * as testStorage from '../../test/technical-membership/storage'
import * as devStorage from '../../dev/technical-membership/storage'


export const members = {
	name: 'TechnicalMembership.Members',
	v1: productionStorage.members['v1'],
	v1Stage: stageStorage.members['v1'],
	v1Test: testStorage.members['v1'],
	v85Dev: devStorage.members['v85'],
}

export const prime = {
	name: 'TechnicalMembership.Prime',
	v1: productionStorage.prime['v1'],
	v1Stage: stageStorage.prime['v1'],
	v1Test: testStorage.prime['v1'],
	v85Dev: devStorage.prime['v85'],
}
