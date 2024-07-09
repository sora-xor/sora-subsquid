import * as productionEvents from '../../production/pswap-distribution/events'
import * as stageEvents from '../../stage/pswap-distribution/events'
import * as testEvents from '../../test/pswap-distribution/events'
import * as devEvents from '../../dev/pswap-distribution/events'


export const feesExchanged = {
	name: 'PswapDistribution.FeesExchanged',
	v1: productionEvents.feesExchanged['v1'],
	v42: productionEvents.feesExchanged['v42'],
	v1Stage: stageEvents.feesExchanged['v1'],
	v42Stage: stageEvents.feesExchanged['v42'],
	v1Test: testEvents.feesExchanged['v1'],
	v42Test: testEvents.feesExchanged['v42'],
	v85Dev: devEvents.feesExchanged['v85'],
}

export const feesExchangeFailed = {
	name: 'PswapDistribution.FeesExchangeFailed',
	v1: productionEvents.feesExchangeFailed['v1'],
	v42: productionEvents.feesExchangeFailed['v42'],
	v46: productionEvents.feesExchangeFailed['v46'],
	v53: productionEvents.feesExchangeFailed['v53'],
	v1Stage: stageEvents.feesExchangeFailed['v1'],
	v42Stage: stageEvents.feesExchangeFailed['v42'],
	v46Stage: stageEvents.feesExchangeFailed['v46'],
	v53Stage: stageEvents.feesExchangeFailed['v53'],
	v1Test: testEvents.feesExchangeFailed['v1'],
	v42Test: testEvents.feesExchangeFailed['v42'],
	v46Test: testEvents.feesExchangeFailed['v46'],
	v53Test: testEvents.feesExchangeFailed['v53'],
	v85Dev: devEvents.feesExchangeFailed['v85'],
}

export const incentiveDistributed = {
	name: 'PswapDistribution.IncentiveDistributed',
	v1: productionEvents.incentiveDistributed['v1'],
	v42: productionEvents.incentiveDistributed['v42'],
	v1Stage: stageEvents.incentiveDistributed['v1'],
	v42Stage: stageEvents.incentiveDistributed['v42'],
	v1Test: testEvents.incentiveDistributed['v1'],
	v42Test: testEvents.incentiveDistributed['v42'],
	v85Dev: devEvents.incentiveDistributed['v85'],
}

export const incentiveDistributionFailed = {
	name: 'PswapDistribution.IncentiveDistributionFailed',
	v1: productionEvents.incentiveDistributionFailed['v1'],
	v8: productionEvents.incentiveDistributionFailed['v8'],
	v1Stage: stageEvents.incentiveDistributionFailed['v1'],
	v8Stage: stageEvents.incentiveDistributionFailed['v8'],
	v1Test: testEvents.incentiveDistributionFailed['v1'],
	v8Test: testEvents.incentiveDistributionFailed['v8'],
	v85Dev: devEvents.incentiveDistributionFailed['v85'],
}

export const burnRateChanged = {
	name: 'PswapDistribution.BurnRateChanged',
	v1: productionEvents.burnRateChanged['v1'],
	v42: productionEvents.burnRateChanged['v42'],
	v1Stage: stageEvents.burnRateChanged['v1'],
	v42Stage: stageEvents.burnRateChanged['v42'],
	v1Test: testEvents.burnRateChanged['v1'],
	v42Test: testEvents.burnRateChanged['v42'],
	v85Dev: devEvents.burnRateChanged['v85'],
}

export const nothingToExchange = {
	name: 'PswapDistribution.NothingToExchange',
	v1: productionEvents.nothingToExchange['v1'],
	v1Stage: stageEvents.nothingToExchange['v1'],
	v1Test: testEvents.nothingToExchange['v1'],
	v85Dev: devEvents.nothingToExchange['v85'],
}

export const nothingToDistribute = {
	name: 'PswapDistribution.NothingToDistribute',
	v1: productionEvents.nothingToDistribute['v1'],
	v1Stage: stageEvents.nothingToDistribute['v1'],
	v1Test: testEvents.nothingToDistribute['v1'],
	v85Dev: devEvents.nothingToDistribute['v85'],
}

export const incentivesBurnedAfterExchange = {
	name: 'PswapDistribution.IncentivesBurnedAfterExchange',
	v1: productionEvents.incentivesBurnedAfterExchange['v1'],
	v42: productionEvents.incentivesBurnedAfterExchange['v42'],
	v1Stage: stageEvents.incentivesBurnedAfterExchange['v1'],
	v42Stage: stageEvents.incentivesBurnedAfterExchange['v42'],
	v1Test: testEvents.incentivesBurnedAfterExchange['v1'],
	v42Test: testEvents.incentivesBurnedAfterExchange['v42'],
	v85Dev: devEvents.incentivesBurnedAfterExchange['v85'],
}
