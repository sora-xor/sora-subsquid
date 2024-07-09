import * as productionStorage from '../../production/xst-pool/storage'
import * as stageStorage from '../../stage/xst-pool/storage'
import * as testStorage from '../../test/xst-pool/storage'
import * as devStorage from '../../dev/xst-pool/storage'


export const permissionedTechAccount = {
	name: 'XstPool.PermissionedTechAccount',
	v19: productionStorage.permissionedTechAccount['v19'],
	v42: productionStorage.permissionedTechAccount['v42'],
	v46: productionStorage.permissionedTechAccount['v46'],
	v19Stage: stageStorage.permissionedTechAccount['v19'],
	v42Stage: stageStorage.permissionedTechAccount['v42'],
	v46Stage: stageStorage.permissionedTechAccount['v46'],
	v19Test: testStorage.permissionedTechAccount['v19'],
	v42Test: testStorage.permissionedTechAccount['v42'],
	v46Test: testStorage.permissionedTechAccount['v46'],
}

export const baseFee = {
	name: 'XstPool.BaseFee',
	v19: productionStorage.baseFee['v19'],
	v42: productionStorage.baseFee['v42'],
	v19Stage: stageStorage.baseFee['v19'],
	v42Stage: stageStorage.baseFee['v42'],
	v19Test: testStorage.baseFee['v19'],
	v42Test: testStorage.baseFee['v42'],
}

export const enabledSynthetics = {
	name: 'XstPool.EnabledSynthetics',
	v19: productionStorage.enabledSynthetics['v19'],
	v42: productionStorage.enabledSynthetics['v42'],
	v57: productionStorage.enabledSynthetics['v57'],
	v19Stage: stageStorage.enabledSynthetics['v19'],
	v42Stage: stageStorage.enabledSynthetics['v42'],
	v57Stage: stageStorage.enabledSynthetics['v57'],
	v19Test: testStorage.enabledSynthetics['v19'],
	v42Test: testStorage.enabledSynthetics['v42'],
	v57Test: testStorage.enabledSynthetics['v57'],
	v85Dev: devStorage.enabledSynthetics['v85'],
}

export const referenceAssetId = {
	name: 'XstPool.ReferenceAssetId',
	v19: productionStorage.referenceAssetId['v19'],
	v42: productionStorage.referenceAssetId['v42'],
	v19Stage: stageStorage.referenceAssetId['v19'],
	v42Stage: stageStorage.referenceAssetId['v42'],
	v19Test: testStorage.referenceAssetId['v19'],
	v42Test: testStorage.referenceAssetId['v42'],
	v85Dev: devStorage.referenceAssetId['v85'],
}

export const collateralReserves = {
	name: 'XstPool.CollateralReserves',
	v19: productionStorage.collateralReserves['v19'],
	v42: productionStorage.collateralReserves['v42'],
	v19Stage: stageStorage.collateralReserves['v19'],
	v42Stage: stageStorage.collateralReserves['v42'],
	v19Test: testStorage.collateralReserves['v19'],
	v42Test: testStorage.collateralReserves['v42'],
	v85Dev: devStorage.collateralReserves['v85'],
}

export const syntheticBaseAssetFloorPrice = {
	name: 'XstPool.SyntheticBaseAssetFloorPrice',
	v45: productionStorage.syntheticBaseAssetFloorPrice['v45'],
	v45Stage: stageStorage.syntheticBaseAssetFloorPrice['v45'],
	v45Test: testStorage.syntheticBaseAssetFloorPrice['v45'],
	v85Dev: devStorage.syntheticBaseAssetFloorPrice['v85'],
}

export const enabledSymbols = {
	name: 'XstPool.EnabledSymbols',
	v57: productionStorage.enabledSymbols['v57'],
	v57Stage: stageStorage.enabledSymbols['v57'],
	v57Test: testStorage.enabledSymbols['v57'],
	v85Dev: devStorage.enabledSymbols['v85'],
}
