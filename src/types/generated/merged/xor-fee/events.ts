import * as productionEvents from '../../production/xor-fee/events'
import * as stageEvents from '../../stage/xor-fee/events'
import * as testEvents from '../../test/xor-fee/events'
import * as devEvents from '../../dev/xor-fee/events'


export const feeWithdrawn = {
	name: 'XorFee.FeeWithdrawn',
	v1: productionEvents.feeWithdrawn['v1'],
	v1Stage: stageEvents.feeWithdrawn['v1'],
	v1Test: testEvents.feeWithdrawn['v1'],
	v85Dev: devEvents.feeWithdrawn['v85'],
}

export const referrerRewarded = {
	name: 'XorFee.ReferrerRewarded',
	v22: productionEvents.referrerRewarded['v22'],
	v22Stage: stageEvents.referrerRewarded['v22'],
	v22Test: testEvents.referrerRewarded['v22'],
	v85Dev: devEvents.referrerRewarded['v85'],
}

export const weightToFeeMultiplierUpdated = {
	name: 'XorFee.WeightToFeeMultiplierUpdated',
	v37: productionEvents.weightToFeeMultiplierUpdated['v37'],
	v37Stage: stageEvents.weightToFeeMultiplierUpdated['v37'],
	v37Test: testEvents.weightToFeeMultiplierUpdated['v37'],
	v85Dev: devEvents.weightToFeeMultiplierUpdated['v85'],
}
