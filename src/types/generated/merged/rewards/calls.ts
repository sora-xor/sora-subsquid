import * as productionCalls from '../../production/rewards/calls'
import * as stageCalls from '../../stage/rewards/calls'
import * as testCalls from '../../test/rewards/calls'
import * as devCalls from '../../dev/rewards/calls'


export const claim = {
	name: 'Rewards.claim',
	v1: productionCalls.claim['v1'],
	v1Stage: stageCalls.claim['v1'],
	v1Test: testCalls.claim['v1'],
	v85Dev: devCalls.claim['v85'],
}

export const finalizeStorageMigration = {
	name: 'Rewards.finalize_storage_migration',
	v19: productionCalls.finalizeStorageMigration['v19'],
	v19Stage: stageCalls.finalizeStorageMigration['v19'],
	v19Test: testCalls.finalizeStorageMigration['v19'],
}

export const addUmiNftReceivers = {
	name: 'Rewards.add_umi_nft_receivers',
	v33: productionCalls.addUmiNftReceivers['v33'],
	v33Stage: stageCalls.addUmiNftReceivers['v33'],
	v33Test: testCalls.addUmiNftReceivers['v33'],
	v85Dev: devCalls.addUmiNftReceivers['v85'],
}
