import * as productionStorage from '../../production/band/storage'
import * as stageStorage from '../../stage/band/storage'
import * as testStorage from '../../test/band/storage'
import * as devStorage from '../../dev/band/storage'


export const trustedRelayers = {
	name: 'Band.TrustedRelayers',
	v45: productionStorage.trustedRelayers['v45'],
	v45Stage: stageStorage.trustedRelayers['v45'],
	v45Test: testStorage.trustedRelayers['v45'],
	v85Dev: devStorage.trustedRelayers['v85'],
}

export const symbolRates = {
	name: 'Band.SymbolRates',
	v45: productionStorage.symbolRates['v45'],
	v59: productionStorage.symbolRates['v59'],
	v60: productionStorage.symbolRates['v60'],
	v45Stage: stageStorage.symbolRates['v45'],
	v59Stage: stageStorage.symbolRates['v59'],
	v60Stage: stageStorage.symbolRates['v60'],
	v45Test: testStorage.symbolRates['v45'],
	v59Test: testStorage.symbolRates['v59'],
	v60Test: testStorage.symbolRates['v60'],
	v85Dev: devStorage.symbolRates['v85'],
}

export const dynamicFeeParameters = {
	name: 'Band.DynamicFeeParameters',
	v59: productionStorage.dynamicFeeParameters['v59'],
	v59Stage: stageStorage.dynamicFeeParameters['v59'],
	v59Test: testStorage.dynamicFeeParameters['v59'],
	v85Dev: devStorage.dynamicFeeParameters['v85'],
}

export const symbolCheckBlock = {
	name: 'Band.SymbolCheckBlock',
	v60: productionStorage.symbolCheckBlock['v60'],
	v60Stage: stageStorage.symbolCheckBlock['v60'],
	v60Test: testStorage.symbolCheckBlock['v60'],
	v85Dev: devStorage.symbolCheckBlock['v85'],
}
