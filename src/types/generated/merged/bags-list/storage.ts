import * as productionStorage from '../../production/bags-list/storage'
import * as stageStorage from '../../stage/bags-list/storage'
import * as testStorage from '../../test/bags-list/storage'
import * as devStorage from '../../dev/bags-list/storage'


export const listNodes = {
	name: 'BagsList.ListNodes',
	v42: productionStorage.listNodes['v42'],
	v42Stage: stageStorage.listNodes['v42'],
	v42Test: testStorage.listNodes['v42'],
	v85Dev: devStorage.listNodes['v85'],
}

export const counterForListNodes = {
	name: 'BagsList.CounterForListNodes',
	v42: productionStorage.counterForListNodes['v42'],
	v42Stage: stageStorage.counterForListNodes['v42'],
	v42Test: testStorage.counterForListNodes['v42'],
	v85Dev: devStorage.counterForListNodes['v85'],
}

export const listBags = {
	name: 'BagsList.ListBags',
	v42: productionStorage.listBags['v42'],
	v42Stage: stageStorage.listBags['v42'],
	v42Test: testStorage.listBags['v42'],
	v85Dev: devStorage.listBags['v85'],
}
