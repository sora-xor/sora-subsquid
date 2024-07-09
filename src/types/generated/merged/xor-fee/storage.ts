import * as productionStorage from '../../production/xor-fee/storage'
import * as stageStorage from '../../stage/xor-fee/storage'
import * as testStorage from '../../test/xor-fee/storage'
import * as devStorage from '../../dev/xor-fee/storage'


export const xorToVal = {
	name: 'XorFee.XorToVal',
	v7: productionStorage.xorToVal['v7'],
	v7Stage: stageStorage.xorToVal['v7'],
	v7Test: testStorage.xorToVal['v7'],
	v85Dev: devStorage.xorToVal['v85'],
}

export const multiplier = {
	name: 'XorFee.Multiplier',
	v37: productionStorage.multiplier['v37'],
	v37Stage: stageStorage.multiplier['v37'],
	v37Test: testStorage.multiplier['v37'],
	v85Dev: devStorage.multiplier['v85'],
}
