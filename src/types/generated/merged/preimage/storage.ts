import * as productionStorage from '../../production/preimage/storage'
import * as stageStorage from '../../stage/preimage/storage'
import * as testStorage from '../../test/preimage/storage'
import * as devStorage from '../../dev/preimage/storage'


export const statusFor = {
	name: 'Preimage.StatusFor',
	v53: productionStorage.statusFor['v53'],
	v53Stage: stageStorage.statusFor['v53'],
	v53Test: testStorage.statusFor['v53'],
	v85Dev: devStorage.statusFor['v85'],
}

export const preimageFor = {
	name: 'Preimage.PreimageFor',
	v53: productionStorage.preimageFor['v53'],
	v53Stage: stageStorage.preimageFor['v53'],
	v53Test: testStorage.preimageFor['v53'],
	v85Dev: devStorage.preimageFor['v85'],
}
