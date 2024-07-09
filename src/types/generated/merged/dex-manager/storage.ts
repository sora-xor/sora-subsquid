import * as productionStorage from '../../production/dex-manager/storage'
import * as stageStorage from '../../stage/dex-manager/storage'
import * as testStorage from '../../test/dex-manager/storage'
import * as devStorage from '../../dev/dex-manager/storage'


export const dexInfos = {
	name: 'DexManager.DexInfos',
	v1: productionStorage.dexInfos['v1'],
	v42: productionStorage.dexInfos['v42'],
	v45: productionStorage.dexInfos['v45'],
	v1Stage: stageStorage.dexInfos['v1'],
	v42Stage: stageStorage.dexInfos['v42'],
	v45Stage: stageStorage.dexInfos['v45'],
	v1Test: testStorage.dexInfos['v1'],
	v42Test: testStorage.dexInfos['v42'],
	v45Test: testStorage.dexInfos['v45'],
	v85Dev: devStorage.dexInfos['v85'],
}
