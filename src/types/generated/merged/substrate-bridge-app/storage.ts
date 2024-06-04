import * as productionStorage from '../../production/substrate-bridge-app/storage'
import * as stageStorage from '../../stage/substrate-bridge-app/storage'
import * as testStorage from '../../test/substrate-bridge-app/storage'


export const assetKinds = {
	name: 'SubstrateBridgeApp.AssetKinds',
	v77: productionStorage.assetKinds['v77'],
	v52Stage: stageStorage.assetKinds['v52'],
	v52Test: testStorage.assetKinds['v52'],
}

export const sidechainPrecision = {
	name: 'SubstrateBridgeApp.SidechainPrecision',
	v77: productionStorage.sidechainPrecision['v77'],
	v54Stage: stageStorage.sidechainPrecision['v54'],
	v54Test: testStorage.sidechainPrecision['v54'],
}

export const sidechainAssetId = {
	name: 'SubstrateBridgeApp.SidechainAssetId',
	v77: productionStorage.sidechainAssetId['v77'],
}

export const thischainAssetId = {
	name: 'SubstrateBridgeApp.ThischainAssetId',
	v77: productionStorage.thischainAssetId['v77'],
}

export const bridgeTransferLimit = {
	name: 'SubstrateBridgeApp.BridgeTransferLimit',
	v57Stage: stageStorage.bridgeTransferLimit['v57'],
	v57Test: testStorage.bridgeTransferLimit['v57'],
}

export const allowedParachainAssets = {
	name: 'SubstrateBridgeApp.AllowedParachainAssets',
	v57Stage: stageStorage.allowedParachainAssets['v57'],
	v57Test: testStorage.allowedParachainAssets['v57'],
}

export const relaychainAsset = {
	name: 'SubstrateBridgeApp.RelaychainAsset',
	v57Stage: stageStorage.relaychainAsset['v57'],
	v57Test: testStorage.relaychainAsset['v57'],
}
