import * as productionEvents from '../../production/liquidity-proxy/events'
import * as stageEvents from '../../stage/liquidity-proxy/events'
import * as testEvents from '../../test/liquidity-proxy/events'
import * as devEvents from '../../dev/liquidity-proxy/events'


export const exchange = {
	name: 'LiquidityProxy.Exchange',
	v1: productionEvents.exchange['v1'],
	v42: productionEvents.exchange['v42'],
	v71: productionEvents.exchange['v71'],
	v74: productionEvents.exchange['v74'],
	v1Stage: stageEvents.exchange['v1'],
	v42Stage: stageEvents.exchange['v42'],
	v71Stage: stageEvents.exchange['v71'],
	v74Stage: stageEvents.exchange['v74'],
	v1Test: testEvents.exchange['v1'],
	v42Test: testEvents.exchange['v42'],
	v71Test: testEvents.exchange['v71'],
	v74Test: testEvents.exchange['v74'],
	v85Dev: devEvents.exchange['v85'],
}

export const liquiditySourceEnabled = {
	name: 'LiquidityProxy.LiquiditySourceEnabled',
	v38: productionEvents.liquiditySourceEnabled['v38'],
	v71: productionEvents.liquiditySourceEnabled['v71'],
	v38Stage: stageEvents.liquiditySourceEnabled['v38'],
	v71Stage: stageEvents.liquiditySourceEnabled['v71'],
	v38Test: testEvents.liquiditySourceEnabled['v38'],
	v71Test: testEvents.liquiditySourceEnabled['v71'],
	v85Dev: devEvents.liquiditySourceEnabled['v85'],
}

export const liquiditySourceDisabled = {
	name: 'LiquidityProxy.LiquiditySourceDisabled',
	v38: productionEvents.liquiditySourceDisabled['v38'],
	v71: productionEvents.liquiditySourceDisabled['v71'],
	v38Stage: stageEvents.liquiditySourceDisabled['v38'],
	v71Stage: stageEvents.liquiditySourceDisabled['v71'],
	v38Test: testEvents.liquiditySourceDisabled['v38'],
	v71Test: testEvents.liquiditySourceDisabled['v71'],
	v85Dev: devEvents.liquiditySourceDisabled['v85'],
}

export const batchSwapExecuted = {
	name: 'LiquidityProxy.BatchSwapExecuted',
	v57: productionEvents.batchSwapExecuted['v57'],
	v74: productionEvents.batchSwapExecuted['v74'],
	v57Stage: stageEvents.batchSwapExecuted['v57'],
	v74Stage: stageEvents.batchSwapExecuted['v74'],
	v57Test: testEvents.batchSwapExecuted['v57'],
	v74Test: testEvents.batchSwapExecuted['v74'],
	v85Dev: devEvents.batchSwapExecuted['v85'],
}

export const xorlessTransfer = {
	name: 'LiquidityProxy.XorlessTransfer',
	v66: productionEvents.xorlessTransfer['v66'],
	v66Stage: stageEvents.xorlessTransfer['v66'],
	v66Test: testEvents.xorlessTransfer['v66'],
	v85Dev: devEvents.xorlessTransfer['v85'],
}

export const adarFeeWithdrawn = {
	name: 'LiquidityProxy.ADARFeeWithdrawn',
	v68: productionEvents.adarFeeWithdrawn['v68'],
	v68Stage: stageEvents.adarFeeWithdrawn['v68'],
	v68Test: testEvents.adarFeeWithdrawn['v68'],
	v85Dev: devEvents.adarFeeWithdrawn['v85'],
}
