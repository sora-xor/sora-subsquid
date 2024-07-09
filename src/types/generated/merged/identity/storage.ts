import * as productionStorage from '../../production/identity/storage'
import * as stageStorage from '../../stage/identity/storage'
import * as testStorage from '../../test/identity/storage'
import * as devStorage from '../../dev/identity/storage'


export const identityOf = {
	name: 'Identity.IdentityOf',
	v3: productionStorage.identityOf['v3'],
	v3Stage: stageStorage.identityOf['v3'],
	v3Test: testStorage.identityOf['v3'],
	v85Dev: devStorage.identityOf['v85'],
}

export const superOf = {
	name: 'Identity.SuperOf',
	v3: productionStorage.superOf['v3'],
	v3Stage: stageStorage.superOf['v3'],
	v3Test: testStorage.superOf['v3'],
	v85Dev: devStorage.superOf['v85'],
}

export const subsOf = {
	name: 'Identity.SubsOf',
	v3: productionStorage.subsOf['v3'],
	v3Stage: stageStorage.subsOf['v3'],
	v3Test: testStorage.subsOf['v3'],
	v85Dev: devStorage.subsOf['v85'],
}

export const registrars = {
	name: 'Identity.Registrars',
	v3: productionStorage.registrars['v3'],
	v3Stage: stageStorage.registrars['v3'],
	v3Test: testStorage.registrars['v3'],
	v85Dev: devStorage.registrars['v85'],
}
