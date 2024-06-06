import * as productionStorage from '../../production/randomness-collective-flip/storage'
import * as stageStorage from '../../stage/randomness-collective-flip/storage'
import * as testStorage from '../../test/randomness-collective-flip/storage'
import * as devStorage from '../../dev/randomness-collective-flip/storage'


export const randomMaterial = {
	name: 'RandomnessCollectiveFlip.RandomMaterial',
	v1: productionStorage.randomMaterial['v1'],
	v1Stage: stageStorage.randomMaterial['v1'],
	v1Test: testStorage.randomMaterial['v1'],
	v85Dev: devStorage.randomMaterial['v85'],
}
