import * as productionStorage from '../../production/authorship/storage'
import * as stageStorage from '../../stage/authorship/storage'
import * as testStorage from '../../test/authorship/storage'
import * as devStorage from '../../dev/authorship/storage'


export const uncles = {
	name: 'Authorship.Uncles',
	v1: productionStorage.uncles['v1'],
	v42: productionStorage.uncles['v42'],
	v1Stage: stageStorage.uncles['v1'],
	v42Stage: stageStorage.uncles['v42'],
	v1Test: testStorage.uncles['v1'],
	v42Test: testStorage.uncles['v42'],
}

export const author = {
	name: 'Authorship.Author',
	v1: productionStorage.author['v1'],
	v1Stage: stageStorage.author['v1'],
	v1Test: testStorage.author['v1'],
	v85Dev: devStorage.author['v85'],
}

export const didSetUncles = {
	name: 'Authorship.DidSetUncles',
	v1: productionStorage.didSetUncles['v1'],
	v1Stage: stageStorage.didSetUncles['v1'],
	v1Test: testStorage.didSetUncles['v1'],
}
