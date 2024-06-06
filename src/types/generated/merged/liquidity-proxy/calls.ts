import * as productionCalls from '../../production/liquidity-proxy/calls'
import * as stageCalls from '../../stage/liquidity-proxy/calls'
import * as testCalls from '../../test/liquidity-proxy/calls'
import * as devCalls from '../../dev/liquidity-proxy/calls'


export const swap = {
	name: 'LiquidityProxy.swap',
	v1: productionCalls.swap['v1'],
	v42: productionCalls.swap['v42'],
	v71: productionCalls.swap['v71'],
	v1Stage: stageCalls.swap['v1'],
	v42Stage: stageCalls.swap['v42'],
	v71Stage: stageCalls.swap['v71'],
	v1Test: testCalls.swap['v1'],
	v42Test: testCalls.swap['v42'],
	v71Test: testCalls.swap['v71'],
	v85Dev: devCalls.swap['v85'],
}

export const swapTransfer = {
	name: 'LiquidityProxy.swap_transfer',
	v33: productionCalls.swapTransfer['v33'],
	v42: productionCalls.swapTransfer['v42'],
	v71: productionCalls.swapTransfer['v71'],
	v33Stage: stageCalls.swapTransfer['v33'],
	v42Stage: stageCalls.swapTransfer['v42'],
	v71Stage: stageCalls.swapTransfer['v71'],
	v33Test: testCalls.swapTransfer['v33'],
	v42Test: testCalls.swapTransfer['v42'],
	v71Test: testCalls.swapTransfer['v71'],
	v85Dev: devCalls.swapTransfer['v85'],
}

export const enableLiquiditySource = {
	name: 'LiquidityProxy.enable_liquidity_source',
	v38: productionCalls.enableLiquiditySource['v38'],
	v71: productionCalls.enableLiquiditySource['v71'],
	v38Stage: stageCalls.enableLiquiditySource['v38'],
	v71Stage: stageCalls.enableLiquiditySource['v71'],
	v38Test: testCalls.enableLiquiditySource['v38'],
	v71Test: testCalls.enableLiquiditySource['v71'],
	v85Dev: devCalls.enableLiquiditySource['v85'],
}

export const disableLiquiditySource = {
	name: 'LiquidityProxy.disable_liquidity_source',
	v38: productionCalls.disableLiquiditySource['v38'],
	v71: productionCalls.disableLiquiditySource['v71'],
	v38Stage: stageCalls.disableLiquiditySource['v38'],
	v71Stage: stageCalls.disableLiquiditySource['v71'],
	v38Test: testCalls.disableLiquiditySource['v38'],
	v71Test: testCalls.disableLiquiditySource['v71'],
	v85Dev: devCalls.disableLiquiditySource['v85'],
}

export const swapTransferBatch = {
	name: 'LiquidityProxy.swap_transfer_batch',
	v45: productionCalls.swapTransferBatch['v45'],
	v50: productionCalls.swapTransferBatch['v50'],
	v63: productionCalls.swapTransferBatch['v63'],
	v71: productionCalls.swapTransferBatch['v71'],
	v74: productionCalls.swapTransferBatch['v74'],
	v45Stage: stageCalls.swapTransferBatch['v45'],
	v50Stage: stageCalls.swapTransferBatch['v50'],
	v63Stage: stageCalls.swapTransferBatch['v63'],
	v71Stage: stageCalls.swapTransferBatch['v71'],
	v74Stage: stageCalls.swapTransferBatch['v74'],
	v45Test: testCalls.swapTransferBatch['v45'],
	v50Test: testCalls.swapTransferBatch['v50'],
	v63Test: testCalls.swapTransferBatch['v63'],
	v71Test: testCalls.swapTransferBatch['v71'],
	v74Test: testCalls.swapTransferBatch['v74'],
	v85Dev: devCalls.swapTransferBatch['v85'],
}

export const setAdarCommissionRatio = {
	name: 'LiquidityProxy.set_adar_commission_ratio',
	v57: productionCalls.setAdarCommissionRatio['v57'],
	v57Stage: stageCalls.setAdarCommissionRatio['v57'],
	v57Test: testCalls.setAdarCommissionRatio['v57'],
	v85Dev: devCalls.setAdarCommissionRatio['v85'],
}

export const xorlessTransfer = {
	name: 'LiquidityProxy.xorless_transfer',
	v66: productionCalls.xorlessTransfer['v66'],
	v71: productionCalls.xorlessTransfer['v71'],
	v66Stage: stageCalls.xorlessTransfer['v66'],
	v71Stage: stageCalls.xorlessTransfer['v71'],
	v66Test: testCalls.xorlessTransfer['v66'],
	v71Test: testCalls.xorlessTransfer['v71'],
	v85Dev: devCalls.xorlessTransfer['v85'],
}
