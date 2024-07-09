import * as productionEvents from '../../production/xst-pool/events'
import * as stageEvents from '../../stage/xst-pool/events'
import * as testEvents from '../../test/xst-pool/events'
import * as devEvents from '../../dev/xst-pool/events'


export const poolInitialized = {
	name: 'XSTPool.PoolInitialized',
	v19: productionEvents.poolInitialized['v19'],
	v42: productionEvents.poolInitialized['v42'],
	v19Stage: stageEvents.poolInitialized['v19'],
	v42Stage: stageEvents.poolInitialized['v42'],
	v19Test: testEvents.poolInitialized['v19'],
	v42Test: testEvents.poolInitialized['v42'],
}

export const referenceAssetChanged = {
	name: 'XSTPool.ReferenceAssetChanged',
	v19: productionEvents.referenceAssetChanged['v19'],
	v42: productionEvents.referenceAssetChanged['v42'],
	v19Stage: stageEvents.referenceAssetChanged['v19'],
	v42Stage: stageEvents.referenceAssetChanged['v42'],
	v19Test: testEvents.referenceAssetChanged['v19'],
	v42Test: testEvents.referenceAssetChanged['v42'],
	v85Dev: devEvents.referenceAssetChanged['v85'],
}

export const syntheticAssetEnabled = {
	name: 'XSTPool.SyntheticAssetEnabled',
	v45: productionEvents.syntheticAssetEnabled['v45'],
	v57: productionEvents.syntheticAssetEnabled['v57'],
	v45Stage: stageEvents.syntheticAssetEnabled['v45'],
	v57Stage: stageEvents.syntheticAssetEnabled['v57'],
	v45Test: testEvents.syntheticAssetEnabled['v45'],
	v57Test: testEvents.syntheticAssetEnabled['v57'],
	v85Dev: devEvents.syntheticAssetEnabled['v85'],
}

export const syntheticBaseAssetFloorPriceChanged = {
	name: 'XSTPool.SyntheticBaseAssetFloorPriceChanged',
	v45: productionEvents.syntheticBaseAssetFloorPriceChanged['v45'],
	v45Stage: stageEvents.syntheticBaseAssetFloorPriceChanged['v45'],
	v45Test: testEvents.syntheticBaseAssetFloorPriceChanged['v45'],
	v85Dev: devEvents.syntheticBaseAssetFloorPriceChanged['v85'],
}

export const syntheticAssetDisabled = {
	name: 'XSTPool.SyntheticAssetDisabled',
	v57: productionEvents.syntheticAssetDisabled['v57'],
	v57Stage: stageEvents.syntheticAssetDisabled['v57'],
	v57Test: testEvents.syntheticAssetDisabled['v57'],
	v85Dev: devEvents.syntheticAssetDisabled['v85'],
}

export const syntheticAssetFeeChanged = {
	name: 'XSTPool.SyntheticAssetFeeChanged',
	v57: productionEvents.syntheticAssetFeeChanged['v57'],
	v57Stage: stageEvents.syntheticAssetFeeChanged['v57'],
	v57Test: testEvents.syntheticAssetFeeChanged['v57'],
	v85Dev: devEvents.syntheticAssetFeeChanged['v85'],
}

export const syntheticAssetRemoved = {
	name: 'XSTPool.SyntheticAssetRemoved',
	v60: productionEvents.syntheticAssetRemoved['v60'],
	v60Stage: stageEvents.syntheticAssetRemoved['v60'],
	v60Test: testEvents.syntheticAssetRemoved['v60'],
	v85Dev: devEvents.syntheticAssetRemoved['v85'],
}
