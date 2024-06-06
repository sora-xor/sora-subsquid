import * as productionStorage from '../../production/referral-system/storage'
import * as stageStorage from '../../stage/referral-system/storage'
import * as testStorage from '../../test/referral-system/storage'


export const referrers = {
	name: 'ReferralSystem.Referrers',
	v1: productionStorage.referrers['v1'],
	v1Stage: stageStorage.referrers['v1'],
	v1Test: testStorage.referrers['v1'],
}
