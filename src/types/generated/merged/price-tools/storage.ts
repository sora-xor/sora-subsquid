import * as productionStorage from '../../production/price-tools/storage'
import * as stageStorage from '../../stage/price-tools/storage'
import * as testStorage from '../../test/price-tools/storage'
import * as devStorage from '../../dev/price-tools/storage'


export const priceInfos = {
	name: 'PriceTools.PriceInfos',
	v7: productionStorage.priceInfos['v7'],
	v42: productionStorage.priceInfos['v42'],
	v45: productionStorage.priceInfos['v45'],
	v7Stage: stageStorage.priceInfos['v7'],
	v42Stage: stageStorage.priceInfos['v42'],
	v45Stage: stageStorage.priceInfos['v45'],
	v7Test: testStorage.priceInfos['v7'],
	v42Test: testStorage.priceInfos['v42'],
	v45Test: testStorage.priceInfos['v45'],
	v85Dev: devStorage.priceInfos['v85'],
}
