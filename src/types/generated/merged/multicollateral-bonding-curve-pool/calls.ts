import * as productionCalls from '../../production/multicollateral-bonding-curve-pool/calls'
import * as stageCalls from '../../stage/multicollateral-bonding-curve-pool/calls'
import * as testCalls from '../../test/multicollateral-bonding-curve-pool/calls'
import * as devCalls from '../../dev/multicollateral-bonding-curve-pool/calls'


export const initializePool = {
	name: 'MulticollateralBondingCurvePool.initialize_pool',
	v1: productionCalls.initializePool['v1'],
	v42: productionCalls.initializePool['v42'],
	v1Stage: stageCalls.initializePool['v1'],
	v42Stage: stageCalls.initializePool['v42'],
	v1Test: testCalls.initializePool['v1'],
	v42Test: testCalls.initializePool['v42'],
	v85Dev: devCalls.initializePool['v85'],
}

export const setReferenceAsset = {
	name: 'MulticollateralBondingCurvePool.set_reference_asset',
	v1: productionCalls.setReferenceAsset['v1'],
	v42: productionCalls.setReferenceAsset['v42'],
	v1Stage: stageCalls.setReferenceAsset['v1'],
	v42Stage: stageCalls.setReferenceAsset['v42'],
	v1Test: testCalls.setReferenceAsset['v1'],
	v42Test: testCalls.setReferenceAsset['v42'],
	v85Dev: devCalls.setReferenceAsset['v85'],
}

export const setOptionalRewardMultiplier = {
	name: 'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
	v1: productionCalls.setOptionalRewardMultiplier['v1'],
	v42: productionCalls.setOptionalRewardMultiplier['v42'],
	v1Stage: stageCalls.setOptionalRewardMultiplier['v1'],
	v42Stage: stageCalls.setOptionalRewardMultiplier['v42'],
	v1Test: testCalls.setOptionalRewardMultiplier['v1'],
	v42Test: testCalls.setOptionalRewardMultiplier['v42'],
	v85Dev: devCalls.setOptionalRewardMultiplier['v85'],
}

export const claimIncentives = {
	name: 'MulticollateralBondingCurvePool.claim_incentives',
	v1: productionCalls.claimIncentives['v1'],
	v1Stage: stageCalls.claimIncentives['v1'],
	v1Test: testCalls.claimIncentives['v1'],
}

export const setPriceBias = {
	name: 'MulticollateralBondingCurvePool.set_price_bias',
	v22: productionCalls.setPriceBias['v22'],
	v22Stage: stageCalls.setPriceBias['v22'],
	v22Test: testCalls.setPriceBias['v22'],
	v85Dev: devCalls.setPriceBias['v85'],
}

export const setPriceChangeConfig = {
	name: 'MulticollateralBondingCurvePool.set_price_change_config',
	v22: productionCalls.setPriceChangeConfig['v22'],
	v22Stage: stageCalls.setPriceChangeConfig['v22'],
	v22Test: testCalls.setPriceChangeConfig['v22'],
	v85Dev: devCalls.setPriceChangeConfig['v85'],
}
