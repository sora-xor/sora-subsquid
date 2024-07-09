import * as productionCalls from '../../production/dexapi/calls'
import * as stageCalls from '../../stage/dexapi/calls'
import * as testCalls from '../../test/dexapi/calls'
import * as devCalls from '../../dev/dexapi/calls'


export const swap = {
	name: 'DEXAPI.swap',
	v19: productionCalls.swap['v19'],
	v19Stage: stageCalls.swap['v19'],
	v19Test: testCalls.swap['v19'],
}

export const enableLiquiditySource = {
	name: 'DEXAPI.enable_liquidity_source',
	v70: productionCalls.enableLiquiditySource['v70'],
	v71: productionCalls.enableLiquiditySource['v71'],
	v70Stage: stageCalls.enableLiquiditySource['v70'],
	v71Stage: stageCalls.enableLiquiditySource['v71'],
	v70Test: testCalls.enableLiquiditySource['v70'],
	v71Test: testCalls.enableLiquiditySource['v71'],
	v85Dev: devCalls.enableLiquiditySource['v85'],
}

export const disableLiquiditySource = {
	name: 'DEXAPI.disable_liquidity_source',
	v70: productionCalls.disableLiquiditySource['v70'],
	v71: productionCalls.disableLiquiditySource['v71'],
	v70Stage: stageCalls.disableLiquiditySource['v70'],
	v71Stage: stageCalls.disableLiquiditySource['v71'],
	v70Test: testCalls.disableLiquiditySource['v70'],
	v71Test: testCalls.disableLiquiditySource['v71'],
	v85Dev: devCalls.disableLiquiditySource['v85'],
}
