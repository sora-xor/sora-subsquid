import * as productionStorage from '../../production/leaf-provider/storage'
import * as stageStorage from '../../stage/leaf-provider/storage'
import * as testStorage from '../../test/leaf-provider/storage'
import * as devStorage from '../../dev/leaf-provider/storage'


export const latestDigest = {
	name: 'LeafProvider.LatestDigest',
	v64: productionStorage.latestDigest['v64'],
	v70: productionStorage.latestDigest['v70'],
	v84: productionStorage.latestDigest['v84'],
	v64Stage: stageStorage.latestDigest['v64'],
	v70Stage: stageStorage.latestDigest['v70'],
	v84Stage: stageStorage.latestDigest['v84'],
	v64Test: testStorage.latestDigest['v64'],
	v70Test: testStorage.latestDigest['v70'],
	v84Test: testStorage.latestDigest['v84'],
	v85Dev: devStorage.latestDigest['v85'],
}
