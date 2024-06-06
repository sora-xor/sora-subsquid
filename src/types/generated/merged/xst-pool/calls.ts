import * as productionCalls from '../../production/xst-pool/calls'
import * as stageCalls from '../../stage/xst-pool/calls'
import * as testCalls from '../../test/xst-pool/calls'
import * as devCalls from '../../dev/xst-pool/calls'


export const initializePool = {
	name: 'XSTPool.initialize_pool',
	v19: productionCalls.initializePool['v19'],
	v42: productionCalls.initializePool['v42'],
	v19Stage: stageCalls.initializePool['v19'],
	v42Stage: stageCalls.initializePool['v42'],
	v19Test: testCalls.initializePool['v19'],
	v42Test: testCalls.initializePool['v42'],
}

export const setReferenceAsset = {
	name: 'XSTPool.set_reference_asset',
	v19: productionCalls.setReferenceAsset['v19'],
	v42: productionCalls.setReferenceAsset['v42'],
	v19Stage: stageCalls.setReferenceAsset['v19'],
	v42Stage: stageCalls.setReferenceAsset['v42'],
	v19Test: testCalls.setReferenceAsset['v19'],
	v42Test: testCalls.setReferenceAsset['v42'],
	v85Dev: devCalls.setReferenceAsset['v85'],
}

export const enableSyntheticAsset = {
	name: 'XSTPool.enable_synthetic_asset',
	v19: productionCalls.enableSyntheticAsset['v19'],
	v42: productionCalls.enableSyntheticAsset['v42'],
	v57: productionCalls.enableSyntheticAsset['v57'],
	v19Stage: stageCalls.enableSyntheticAsset['v19'],
	v42Stage: stageCalls.enableSyntheticAsset['v42'],
	v57Stage: stageCalls.enableSyntheticAsset['v57'],
	v19Test: testCalls.enableSyntheticAsset['v19'],
	v42Test: testCalls.enableSyntheticAsset['v42'],
	v57Test: testCalls.enableSyntheticAsset['v57'],
	v85Dev: devCalls.enableSyntheticAsset['v85'],
}

export const setSyntheticBaseAssetFloorPrice = {
	name: 'XSTPool.set_synthetic_base_asset_floor_price',
	v45: productionCalls.setSyntheticBaseAssetFloorPrice['v45'],
	v45Stage: stageCalls.setSyntheticBaseAssetFloorPrice['v45'],
	v45Test: testCalls.setSyntheticBaseAssetFloorPrice['v45'],
	v85Dev: devCalls.setSyntheticBaseAssetFloorPrice['v85'],
}

export const registerSyntheticAsset = {
	name: 'XSTPool.register_synthetic_asset',
	v57: productionCalls.registerSyntheticAsset['v57'],
	v57Stage: stageCalls.registerSyntheticAsset['v57'],
	v57Test: testCalls.registerSyntheticAsset['v57'],
	v85Dev: devCalls.registerSyntheticAsset['v85'],
}

export const disableSyntheticAsset = {
	name: 'XSTPool.disable_synthetic_asset',
	v57: productionCalls.disableSyntheticAsset['v57'],
	v57Stage: stageCalls.disableSyntheticAsset['v57'],
	v57Test: testCalls.disableSyntheticAsset['v57'],
	v85Dev: devCalls.disableSyntheticAsset['v85'],
}

export const setSyntheticAssetFee = {
	name: 'XSTPool.set_synthetic_asset_fee',
	v57: productionCalls.setSyntheticAssetFee['v57'],
	v57Stage: stageCalls.setSyntheticAssetFee['v57'],
	v57Test: testCalls.setSyntheticAssetFee['v57'],
	v85Dev: devCalls.setSyntheticAssetFee['v85'],
}

export const removeSyntheticAsset = {
	name: 'XSTPool.remove_synthetic_asset',
	v60: productionCalls.removeSyntheticAsset['v60'],
	v60Stage: stageCalls.removeSyntheticAsset['v60'],
	v60Test: testCalls.removeSyntheticAsset['v60'],
	v85Dev: devCalls.removeSyntheticAsset['v85'],
}
