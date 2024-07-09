import * as productionStorage from '../../production/assets/storage'
import * as stageStorage from '../../stage/assets/storage'
import * as testStorage from '../../test/assets/storage'
import * as devStorage from '../../dev/assets/storage'


export const assetOwners = {
	name: 'Assets.AssetOwners',
	v1: productionStorage.assetOwners['v1'],
	v7: productionStorage.assetOwners['v7'],
	v42: productionStorage.assetOwners['v42'],
	v1Stage: stageStorage.assetOwners['v1'],
	v7Stage: stageStorage.assetOwners['v7'],
	v42Stage: stageStorage.assetOwners['v42'],
	v1Test: testStorage.assetOwners['v1'],
	v7Test: testStorage.assetOwners['v7'],
	v42Test: testStorage.assetOwners['v42'],
	v85Dev: devStorage.assetOwners['v85'],
}

export const assetInfos = {
	name: 'Assets.AssetInfos',
	v1: productionStorage.assetInfos['v1'],
	v26: productionStorage.assetInfos['v26'],
	v42: productionStorage.assetInfos['v42'],
	v1Stage: stageStorage.assetInfos['v1'],
	v26Stage: stageStorage.assetInfos['v26'],
	v42Stage: stageStorage.assetInfos['v42'],
	v1Test: testStorage.assetInfos['v1'],
	v26Test: testStorage.assetInfos['v26'],
	v42Test: testStorage.assetInfos['v42'],
	v85Dev: devStorage.assetInfos['v85'],
}

export const assetRecordAssetId = {
	name: 'Assets.AssetRecordAssetId',
	v1: productionStorage.assetRecordAssetId['v1'],
	v42: productionStorage.assetRecordAssetId['v42'],
	v71: productionStorage.assetRecordAssetId['v71'],
	v1Stage: stageStorage.assetRecordAssetId['v1'],
	v42Stage: stageStorage.assetRecordAssetId['v42'],
	v71Stage: stageStorage.assetRecordAssetId['v71'],
	v1Test: testStorage.assetRecordAssetId['v1'],
	v42Test: testStorage.assetRecordAssetId['v42'],
	v71Test: testStorage.assetRecordAssetId['v71'],
	v85Dev: devStorage.assetRecordAssetId['v85'],
}

export const assetContentSource = {
	name: 'Assets.AssetContentSource',
	v22: productionStorage.assetContentSource['v22'],
	v22Stage: stageStorage.assetContentSource['v22'],
	v22Test: testStorage.assetContentSource['v22'],
}

export const assetDescription = {
	name: 'Assets.AssetDescription',
	v22: productionStorage.assetDescription['v22'],
	v22Stage: stageStorage.assetDescription['v22'],
	v22Test: testStorage.assetDescription['v22'],
}
