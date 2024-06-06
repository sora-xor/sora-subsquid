import * as productionCalls from '../../production/ceres-liquidity-locker/calls'
import * as stageCalls from '../../stage/ceres-liquidity-locker/calls'
import * as testCalls from '../../test/ceres-liquidity-locker/calls'
import * as devCalls from '../../dev/ceres-liquidity-locker/calls'


export const lockLiquidity = {
	name: 'CeresLiquidityLocker.lock_liquidity',
	v22: productionCalls.lockLiquidity['v22'],
	v37: productionCalls.lockLiquidity['v37'],
	v42: productionCalls.lockLiquidity['v42'],
	v22Stage: stageCalls.lockLiquidity['v22'],
	v37Stage: stageCalls.lockLiquidity['v37'],
	v42Stage: stageCalls.lockLiquidity['v42'],
	v22Test: testCalls.lockLiquidity['v22'],
	v37Test: testCalls.lockLiquidity['v37'],
	v42Test: testCalls.lockLiquidity['v42'],
	v85Dev: devCalls.lockLiquidity['v85'],
}

export const changeCeresFee = {
	name: 'CeresLiquidityLocker.change_ceres_fee',
	v22: productionCalls.changeCeresFee['v22'],
	v22Stage: stageCalls.changeCeresFee['v22'],
	v22Test: testCalls.changeCeresFee['v22'],
	v85Dev: devCalls.changeCeresFee['v85'],
}
