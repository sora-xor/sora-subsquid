import * as productionEvents from '../../production/multicollateral-bonding-curve-pool/events'
import * as stageEvents from '../../stage/multicollateral-bonding-curve-pool/events'
import * as testEvents from '../../test/multicollateral-bonding-curve-pool/events'
import * as devEvents from '../../dev/multicollateral-bonding-curve-pool/events'


export const poolInitialized = {
	name: 'MulticollateralBondingCurvePool.PoolInitialized',
	v1: productionEvents.poolInitialized['v1'],
	v42: productionEvents.poolInitialized['v42'],
	v1Stage: stageEvents.poolInitialized['v1'],
	v42Stage: stageEvents.poolInitialized['v42'],
	v1Test: testEvents.poolInitialized['v1'],
	v42Test: testEvents.poolInitialized['v42'],
	v85Dev: devEvents.poolInitialized['v85'],
}

export const referenceAssetChanged = {
	name: 'MulticollateralBondingCurvePool.ReferenceAssetChanged',
	v1: productionEvents.referenceAssetChanged['v1'],
	v42: productionEvents.referenceAssetChanged['v42'],
	v1Stage: stageEvents.referenceAssetChanged['v1'],
	v42Stage: stageEvents.referenceAssetChanged['v42'],
	v1Test: testEvents.referenceAssetChanged['v1'],
	v42Test: testEvents.referenceAssetChanged['v42'],
	v85Dev: devEvents.referenceAssetChanged['v85'],
}

export const optionalRewardMultiplierUpdated = {
	name: 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
	v1: productionEvents.optionalRewardMultiplierUpdated['v1'],
	v42: productionEvents.optionalRewardMultiplierUpdated['v42'],
	v1Stage: stageEvents.optionalRewardMultiplierUpdated['v1'],
	v42Stage: stageEvents.optionalRewardMultiplierUpdated['v42'],
	v1Test: testEvents.optionalRewardMultiplierUpdated['v1'],
	v42Test: testEvents.optionalRewardMultiplierUpdated['v42'],
	v85Dev: devEvents.optionalRewardMultiplierUpdated['v85'],
}

export const priceBiasChanged = {
	name: 'MulticollateralBondingCurvePool.PriceBiasChanged',
	v22: productionEvents.priceBiasChanged['v22'],
	v22Stage: stageEvents.priceBiasChanged['v22'],
	v22Test: testEvents.priceBiasChanged['v22'],
	v85Dev: devEvents.priceBiasChanged['v85'],
}

export const priceChangeConfigChanged = {
	name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
	v22: productionEvents.priceChangeConfigChanged['v22'],
	v22Stage: stageEvents.priceChangeConfigChanged['v22'],
	v22Test: testEvents.priceChangeConfigChanged['v22'],
	v85Dev: devEvents.priceChangeConfigChanged['v85'],
}

export const failedToDistributeFreeReserves = {
	name: 'MulticollateralBondingCurvePool.FailedToDistributeFreeReserves',
	v85: productionEvents.failedToDistributeFreeReserves['v85'],
	v85Stage: stageEvents.failedToDistributeFreeReserves['v85'],
	v85Test: testEvents.failedToDistributeFreeReserves['v85'],
	v85Dev: devEvents.failedToDistributeFreeReserves['v85'],
}
