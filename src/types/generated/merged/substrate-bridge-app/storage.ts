import * as productionStorage from '../../production/substrate-bridge-app/storage'
import * as stageStorage from '../../stage/substrate-bridge-app/storage'
import * as testStorage from '../../test/substrate-bridge-app/storage'
import * as devStorage from '../../dev/substrate-bridge-app/storage'


export const assetKinds = {
	name: 'SubstrateBridgeApp.AssetKinds',
	v77: productionStorage.assetKinds['v77'],
	v77Stage: stageStorage.assetKinds['v77'],
	v77Test: testStorage.assetKinds['v77'],
	v85Dev: devStorage.assetKinds['v85'],
}

export const sidechainPrecision = {
	name: 'SubstrateBridgeApp.SidechainPrecision',
	v77: productionStorage.sidechainPrecision['v77'],
	v77Stage: stageStorage.sidechainPrecision['v77'],
	v77Test: testStorage.sidechainPrecision['v77'],
	v85Dev: devStorage.sidechainPrecision['v85'],
}

export const sidechainAssetId = {
	name: 'SubstrateBridgeApp.SidechainAssetId',
	v77: productionStorage.sidechainAssetId['v77'],
	v77Stage: stageStorage.sidechainAssetId['v77'],
	v77Test: testStorage.sidechainAssetId['v77'],
	v85Dev: devStorage.sidechainAssetId['v85'],
}

export const thischainAssetId = {
	name: 'SubstrateBridgeApp.ThischainAssetId',
	v77: productionStorage.thischainAssetId['v77'],
	v77Stage: stageStorage.thischainAssetId['v77'],
	v77Test: testStorage.thischainAssetId['v77'],
	v85Dev: devStorage.thischainAssetId['v85'],
}
