import * as productionStorage from '../../production/referrals/storage'
import * as stageStorage from '../../stage/referrals/storage'
import * as testStorage from '../../test/referrals/storage'
import * as devStorage from '../../dev/referrals/storage'


export const referrers = {
	name: 'Referrals.Referrers',
	v22: productionStorage.referrers['v22'],
	v22Stage: stageStorage.referrers['v22'],
	v22Test: testStorage.referrers['v22'],
	v85Dev: devStorage.referrers['v85'],
}

export const referrerBalances = {
	name: 'Referrals.ReferrerBalances',
	v22: productionStorage.referrerBalances['v22'],
	v22Stage: stageStorage.referrerBalances['v22'],
	v22Test: testStorage.referrerBalances['v22'],
	v85Dev: devStorage.referrerBalances['v85'],
}

export const referrals = {
	name: 'Referrals.Referrals',
	v22: productionStorage.referrals['v22'],
	v22Stage: stageStorage.referrals['v22'],
	v22Test: testStorage.referrals['v22'],
	v85Dev: devStorage.referrals['v85'],
}
