import * as productionCalls from '../../production/assets/calls'
import * as stageCalls from '../../stage/assets/calls'
import * as testCalls from '../../test/assets/calls'
import * as devCalls from '../../dev/assets/calls'


export const register = {
	name: 'Assets.register',
	v1: productionCalls.register['v1'],
	v22: productionCalls.register['v22'],
	v26: productionCalls.register['v26'],
	v1Stage: stageCalls.register['v1'],
	v22Stage: stageCalls.register['v22'],
	v26Stage: stageCalls.register['v26'],
	v1Test: testCalls.register['v1'],
	v22Test: testCalls.register['v22'],
	v26Test: testCalls.register['v26'],
	v85Dev: devCalls.register['v85'],
}

export const transfer = {
	name: 'Assets.transfer',
	v1: productionCalls.transfer['v1'],
	v42: productionCalls.transfer['v42'],
	v1Stage: stageCalls.transfer['v1'],
	v42Stage: stageCalls.transfer['v42'],
	v1Test: testCalls.transfer['v1'],
	v42Test: testCalls.transfer['v42'],
	v85Dev: devCalls.transfer['v85'],
}

export const mint = {
	name: 'Assets.mint',
	v1: productionCalls.mint['v1'],
	v42: productionCalls.mint['v42'],
	v1Stage: stageCalls.mint['v1'],
	v42Stage: stageCalls.mint['v42'],
	v1Test: testCalls.mint['v1'],
	v42Test: testCalls.mint['v42'],
	v85Dev: devCalls.mint['v85'],
}

export const burn = {
	name: 'Assets.burn',
	v1: productionCalls.burn['v1'],
	v42: productionCalls.burn['v42'],
	v1Stage: stageCalls.burn['v1'],
	v42Stage: stageCalls.burn['v42'],
	v1Test: testCalls.burn['v1'],
	v42Test: testCalls.burn['v42'],
	v85Dev: devCalls.burn['v85'],
}

export const setNonMintable = {
	name: 'Assets.set_non_mintable',
	v1: productionCalls.setNonMintable['v1'],
	v42: productionCalls.setNonMintable['v42'],
	v1Stage: stageCalls.setNonMintable['v1'],
	v42Stage: stageCalls.setNonMintable['v42'],
	v1Test: testCalls.setNonMintable['v1'],
	v42Test: testCalls.setNonMintable['v42'],
	v85Dev: devCalls.setNonMintable['v85'],
}

export const forceMint = {
	name: 'Assets.force_mint',
	v45: productionCalls.forceMint['v45'],
	v45Stage: stageCalls.forceMint['v45'],
	v45Test: testCalls.forceMint['v45'],
	v85Dev: devCalls.forceMint['v85'],
}

export const updateBalance = {
	name: 'Assets.update_balance',
	v50: productionCalls.updateBalance['v50'],
	v50Stage: stageCalls.updateBalance['v50'],
	v50Test: testCalls.updateBalance['v50'],
	v85Dev: devCalls.updateBalance['v85'],
}

export const updateInfo = {
	name: 'Assets.update_info',
	v53: productionCalls.updateInfo['v53'],
	v53Stage: stageCalls.updateInfo['v53'],
	v53Test: testCalls.updateInfo['v53'],
	v85Dev: devCalls.updateInfo['v85'],
}
