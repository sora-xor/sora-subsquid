import * as productionStorage from '../../production/multicollateral-bonding-curve-pool/storage'
import * as stageStorage from '../../stage/multicollateral-bonding-curve-pool/storage'
import * as testStorage from '../../test/multicollateral-bonding-curve-pool/storage'
import * as devStorage from '../../dev/multicollateral-bonding-curve-pool/storage'


export const reservesAcc = {
	name: 'MulticollateralBondingCurvePool.ReservesAcc',
	v1: productionStorage.reservesAcc['v1'],
	v42: productionStorage.reservesAcc['v42'],
	v46: productionStorage.reservesAcc['v46'],
	v57: productionStorage.reservesAcc['v57'],
	v72: productionStorage.reservesAcc['v72'],
	v74: productionStorage.reservesAcc['v74'],
	v1Stage: stageStorage.reservesAcc['v1'],
	v42Stage: stageStorage.reservesAcc['v42'],
	v46Stage: stageStorage.reservesAcc['v46'],
	v57Stage: stageStorage.reservesAcc['v57'],
	v72Stage: stageStorage.reservesAcc['v72'],
	v74Stage: stageStorage.reservesAcc['v74'],
	v1Test: testStorage.reservesAcc['v1'],
	v42Test: testStorage.reservesAcc['v42'],
	v46Test: testStorage.reservesAcc['v46'],
	v57Test: testStorage.reservesAcc['v57'],
	v72Test: testStorage.reservesAcc['v72'],
	v74Test: testStorage.reservesAcc['v74'],
	v85Dev: devStorage.reservesAcc['v85'],
}

export const freeReservesAccountId = {
	name: 'MulticollateralBondingCurvePool.FreeReservesAccountId',
	v1: productionStorage.freeReservesAccountId['v1'],
	v42: productionStorage.freeReservesAccountId['v42'],
	v1Stage: stageStorage.freeReservesAccountId['v1'],
	v42Stage: stageStorage.freeReservesAccountId['v42'],
	v1Test: testStorage.freeReservesAccountId['v1'],
	v42Test: testStorage.freeReservesAccountId['v42'],
	v85Dev: devStorage.freeReservesAccountId['v85'],
}

export const pendingFreeReserves = {
	name: 'MulticollateralBondingCurvePool.PendingFreeReserves',
	v1: productionStorage.pendingFreeReserves['v1'],
	v42: productionStorage.pendingFreeReserves['v42'],
	v85: productionStorage.pendingFreeReserves['v85'],
	v1Stage: stageStorage.pendingFreeReserves['v1'],
	v42Stage: stageStorage.pendingFreeReserves['v42'],
	v85Stage: stageStorage.pendingFreeReserves['v85'],
	v1Test: testStorage.pendingFreeReserves['v1'],
	v42Test: testStorage.pendingFreeReserves['v42'],
	v85Test: testStorage.pendingFreeReserves['v85'],
	v85Dev: devStorage.pendingFreeReserves['v85'],
}

export const initialPrice = {
	name: 'MulticollateralBondingCurvePool.InitialPrice',
	v1: productionStorage.initialPrice['v1'],
	v42: productionStorage.initialPrice['v42'],
	v1Stage: stageStorage.initialPrice['v1'],
	v42Stage: stageStorage.initialPrice['v42'],
	v1Test: testStorage.initialPrice['v1'],
	v42Test: testStorage.initialPrice['v42'],
	v85Dev: devStorage.initialPrice['v85'],
}

export const priceChangeStep = {
	name: 'MulticollateralBondingCurvePool.PriceChangeStep',
	v1: productionStorage.priceChangeStep['v1'],
	v42: productionStorage.priceChangeStep['v42'],
	v1Stage: stageStorage.priceChangeStep['v1'],
	v42Stage: stageStorage.priceChangeStep['v42'],
	v1Test: testStorage.priceChangeStep['v1'],
	v42Test: testStorage.priceChangeStep['v42'],
	v85Dev: devStorage.priceChangeStep['v85'],
}

export const priceChangeRate = {
	name: 'MulticollateralBondingCurvePool.PriceChangeRate',
	v1: productionStorage.priceChangeRate['v1'],
	v42: productionStorage.priceChangeRate['v42'],
	v1Stage: stageStorage.priceChangeRate['v1'],
	v42Stage: stageStorage.priceChangeRate['v42'],
	v1Test: testStorage.priceChangeRate['v1'],
	v42Test: testStorage.priceChangeRate['v42'],
	v85Dev: devStorage.priceChangeRate['v85'],
}

export const sellPriceCoefficient = {
	name: 'MulticollateralBondingCurvePool.SellPriceCoefficient',
	v1: productionStorage.sellPriceCoefficient['v1'],
	v42: productionStorage.sellPriceCoefficient['v42'],
	v1Stage: stageStorage.sellPriceCoefficient['v1'],
	v42Stage: stageStorage.sellPriceCoefficient['v42'],
	v1Test: testStorage.sellPriceCoefficient['v1'],
	v42Test: testStorage.sellPriceCoefficient['v42'],
	v85Dev: devStorage.sellPriceCoefficient['v85'],
}

export const alwaysDistributeCoefficient = {
	name: 'MulticollateralBondingCurvePool.AlwaysDistributeCoefficient',
	v1: productionStorage.alwaysDistributeCoefficient['v1'],
	v42: productionStorage.alwaysDistributeCoefficient['v42'],
	v1Stage: stageStorage.alwaysDistributeCoefficient['v1'],
	v42Stage: stageStorage.alwaysDistributeCoefficient['v42'],
	v1Test: testStorage.alwaysDistributeCoefficient['v1'],
	v42Test: testStorage.alwaysDistributeCoefficient['v42'],
	v85Dev: devStorage.alwaysDistributeCoefficient['v85'],
}

export const baseFee = {
	name: 'MulticollateralBondingCurvePool.BaseFee',
	v1: productionStorage.baseFee['v1'],
	v42: productionStorage.baseFee['v42'],
	v1Stage: stageStorage.baseFee['v1'],
	v42Stage: stageStorage.baseFee['v42'],
	v1Test: testStorage.baseFee['v1'],
	v42Test: testStorage.baseFee['v42'],
	v85Dev: devStorage.baseFee['v85'],
}

export const distributionAccountsEntry = {
	name: 'MulticollateralBondingCurvePool.DistributionAccountsEntry',
	v1: productionStorage.distributionAccountsEntry['v1'],
	v42: productionStorage.distributionAccountsEntry['v42'],
	v46: productionStorage.distributionAccountsEntry['v46'],
	v53: productionStorage.distributionAccountsEntry['v53'],
	v57: productionStorage.distributionAccountsEntry['v57'],
	v72: productionStorage.distributionAccountsEntry['v72'],
	v74: productionStorage.distributionAccountsEntry['v74'],
	v1Stage: stageStorage.distributionAccountsEntry['v1'],
	v42Stage: stageStorage.distributionAccountsEntry['v42'],
	v46Stage: stageStorage.distributionAccountsEntry['v46'],
	v53Stage: stageStorage.distributionAccountsEntry['v53'],
	v57Stage: stageStorage.distributionAccountsEntry['v57'],
	v72Stage: stageStorage.distributionAccountsEntry['v72'],
	v74Stage: stageStorage.distributionAccountsEntry['v74'],
	v1Test: testStorage.distributionAccountsEntry['v1'],
	v42Test: testStorage.distributionAccountsEntry['v42'],
	v46Test: testStorage.distributionAccountsEntry['v46'],
	v53Test: testStorage.distributionAccountsEntry['v53'],
	v57Test: testStorage.distributionAccountsEntry['v57'],
	v72Test: testStorage.distributionAccountsEntry['v72'],
	v74Test: testStorage.distributionAccountsEntry['v74'],
	v85Dev: devStorage.distributionAccountsEntry['v85'],
}

export const enabledTargets = {
	name: 'MulticollateralBondingCurvePool.EnabledTargets',
	v1: productionStorage.enabledTargets['v1'],
	v42: productionStorage.enabledTargets['v42'],
	v1Stage: stageStorage.enabledTargets['v1'],
	v42Stage: stageStorage.enabledTargets['v42'],
	v1Test: testStorage.enabledTargets['v1'],
	v42Test: testStorage.enabledTargets['v42'],
	v85Dev: devStorage.enabledTargets['v85'],
}

export const referenceAssetId = {
	name: 'MulticollateralBondingCurvePool.ReferenceAssetId',
	v1: productionStorage.referenceAssetId['v1'],
	v42: productionStorage.referenceAssetId['v42'],
	v1Stage: stageStorage.referenceAssetId['v1'],
	v42Stage: stageStorage.referenceAssetId['v42'],
	v1Test: testStorage.referenceAssetId['v1'],
	v42Test: testStorage.referenceAssetId['v42'],
	v85Dev: devStorage.referenceAssetId['v85'],
}

export const rewards = {
	name: 'MulticollateralBondingCurvePool.Rewards',
	v1: productionStorage.rewards['v1'],
	v1Stage: stageStorage.rewards['v1'],
	v1Test: testStorage.rewards['v1'],
	v85Dev: devStorage.rewards['v85'],
}

export const totalRewards = {
	name: 'MulticollateralBondingCurvePool.TotalRewards',
	v1: productionStorage.totalRewards['v1'],
	v1Stage: stageStorage.totalRewards['v1'],
	v1Test: testStorage.totalRewards['v1'],
	v85Dev: devStorage.totalRewards['v85'],
}

export const incentivisedCurrenciesNum = {
	name: 'MulticollateralBondingCurvePool.IncentivisedCurrenciesNum',
	v1: productionStorage.incentivisedCurrenciesNum['v1'],
	v1Stage: stageStorage.incentivisedCurrenciesNum['v1'],
	v1Test: testStorage.incentivisedCurrenciesNum['v1'],
	v85Dev: devStorage.incentivisedCurrenciesNum['v85'],
}

export const incentivesAccountId = {
	name: 'MulticollateralBondingCurvePool.IncentivesAccountId',
	v1: productionStorage.incentivesAccountId['v1'],
	v42: productionStorage.incentivesAccountId['v42'],
	v1Stage: stageStorage.incentivesAccountId['v1'],
	v42Stage: stageStorage.incentivesAccountId['v42'],
	v1Test: testStorage.incentivesAccountId['v1'],
	v42Test: testStorage.incentivesAccountId['v42'],
	v85Dev: devStorage.incentivesAccountId['v85'],
}

export const assetsWithOptionalRewardMultiplier = {
	name: 'MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier',
	v1: productionStorage.assetsWithOptionalRewardMultiplier['v1'],
	v42: productionStorage.assetsWithOptionalRewardMultiplier['v42'],
	v1Stage: stageStorage.assetsWithOptionalRewardMultiplier['v1'],
	v42Stage: stageStorage.assetsWithOptionalRewardMultiplier['v42'],
	v1Test: testStorage.assetsWithOptionalRewardMultiplier['v1'],
	v42Test: testStorage.assetsWithOptionalRewardMultiplier['v42'],
	v85Dev: devStorage.assetsWithOptionalRewardMultiplier['v85'],
}

export const initialPswapRewardsSupply = {
	name: 'MulticollateralBondingCurvePool.InitialPswapRewardsSupply',
	v1: productionStorage.initialPswapRewardsSupply['v1'],
	v1Stage: stageStorage.initialPswapRewardsSupply['v1'],
	v1Test: testStorage.initialPswapRewardsSupply['v1'],
	v85Dev: devStorage.initialPswapRewardsSupply['v85'],
}

export const collateralReserves = {
	name: 'MulticollateralBondingCurvePool.CollateralReserves',
	v1: productionStorage.collateralReserves['v1'],
	v42: productionStorage.collateralReserves['v42'],
	v1Stage: stageStorage.collateralReserves['v1'],
	v42Stage: stageStorage.collateralReserves['v42'],
	v1Test: testStorage.collateralReserves['v1'],
	v42Test: testStorage.collateralReserves['v42'],
	v85Dev: devStorage.collateralReserves['v85'],
}
