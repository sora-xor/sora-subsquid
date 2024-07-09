import * as productionStorage from '../../production/iroha-migration/storage'
import * as stageStorage from '../../stage/iroha-migration/storage'
import * as testStorage from '../../test/iroha-migration/storage'
import * as devStorage from '../../dev/iroha-migration/storage'


export const balances = {
	name: 'IrohaMigration.Balances',
	v1: productionStorage.balances['v1'],
	v42: productionStorage.balances['v42'],
	v1Stage: stageStorage.balances['v1'],
	v42Stage: stageStorage.balances['v42'],
	v1Test: testStorage.balances['v1'],
	v42Test: testStorage.balances['v42'],
	v85Dev: devStorage.balances['v85'],
}

export const referrers = {
	name: 'IrohaMigration.Referrers',
	v1: productionStorage.referrers['v1'],
	v42: productionStorage.referrers['v42'],
	v1Stage: stageStorage.referrers['v1'],
	v42Stage: stageStorage.referrers['v42'],
	v1Test: testStorage.referrers['v1'],
	v42Test: testStorage.referrers['v42'],
	v85Dev: devStorage.referrers['v85'],
}

export const publicKeys = {
	name: 'IrohaMigration.PublicKeys',
	v1: productionStorage.publicKeys['v1'],
	v42: productionStorage.publicKeys['v42'],
	v1Stage: stageStorage.publicKeys['v1'],
	v42Stage: stageStorage.publicKeys['v42'],
	v1Test: testStorage.publicKeys['v1'],
	v42Test: testStorage.publicKeys['v42'],
	v85Dev: devStorage.publicKeys['v85'],
}

export const quorums = {
	name: 'IrohaMigration.Quorums',
	v1: productionStorage.quorums['v1'],
	v42: productionStorage.quorums['v42'],
	v1Stage: stageStorage.quorums['v1'],
	v42Stage: stageStorage.quorums['v42'],
	v1Test: testStorage.quorums['v1'],
	v42Test: testStorage.quorums['v42'],
	v85Dev: devStorage.quorums['v85'],
}

export const account = {
	name: 'IrohaMigration.Account',
	v1: productionStorage.account['v1'],
	v42: productionStorage.account['v42'],
	v1Stage: stageStorage.account['v1'],
	v42Stage: stageStorage.account['v42'],
	v1Test: testStorage.account['v1'],
	v42Test: testStorage.account['v42'],
	v85Dev: devStorage.account['v85'],
}

export const migratedAccounts = {
	name: 'IrohaMigration.MigratedAccounts',
	v1: productionStorage.migratedAccounts['v1'],
	v42: productionStorage.migratedAccounts['v42'],
	v1Stage: stageStorage.migratedAccounts['v1'],
	v42Stage: stageStorage.migratedAccounts['v42'],
	v1Test: testStorage.migratedAccounts['v1'],
	v42Test: testStorage.migratedAccounts['v42'],
	v85Dev: devStorage.migratedAccounts['v85'],
}

export const pendingMultiSigAccounts = {
	name: 'IrohaMigration.PendingMultiSigAccounts',
	v1: productionStorage.pendingMultiSigAccounts['v1'],
	v42: productionStorage.pendingMultiSigAccounts['v42'],
	v1Stage: stageStorage.pendingMultiSigAccounts['v1'],
	v42Stage: stageStorage.pendingMultiSigAccounts['v42'],
	v1Test: testStorage.pendingMultiSigAccounts['v1'],
	v42Test: testStorage.pendingMultiSigAccounts['v42'],
	v85Dev: devStorage.pendingMultiSigAccounts['v85'],
}

export const pendingReferrals = {
	name: 'IrohaMigration.PendingReferrals',
	v1: productionStorage.pendingReferrals['v1'],
	v42: productionStorage.pendingReferrals['v42'],
	v1Stage: stageStorage.pendingReferrals['v1'],
	v42Stage: stageStorage.pendingReferrals['v42'],
	v1Test: testStorage.pendingReferrals['v1'],
	v42Test: testStorage.pendingReferrals['v42'],
	v85Dev: devStorage.pendingReferrals['v85'],
}
