import * as productionStorage from '../../production/technical/storage'
import * as stageStorage from '../../stage/technical/storage'
import * as testStorage from '../../test/technical/storage'
import * as devStorage from '../../dev/technical/storage'


export const techAccounts = {
	name: 'Technical.TechAccounts',
	v45: productionStorage.techAccounts['v45'],
	v46: productionStorage.techAccounts['v46'],
	v57: productionStorage.techAccounts['v57'],
	v72: productionStorage.techAccounts['v72'],
	v74: productionStorage.techAccounts['v74'],
	v45Stage: stageStorage.techAccounts['v45'],
	v46Stage: stageStorage.techAccounts['v46'],
	v57Stage: stageStorage.techAccounts['v57'],
	v72Stage: stageStorage.techAccounts['v72'],
	v74Stage: stageStorage.techAccounts['v74'],
	v45Test: testStorage.techAccounts['v45'],
	v46Test: testStorage.techAccounts['v46'],
	v57Test: testStorage.techAccounts['v57'],
	v72Test: testStorage.techAccounts['v72'],
	v74Test: testStorage.techAccounts['v74'],
	v85Dev: devStorage.techAccounts['v85'],
}
