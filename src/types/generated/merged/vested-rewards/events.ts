import * as productionEvents from '../../production/vested-rewards/events'
import * as stageEvents from '../../stage/vested-rewards/events'
import * as testEvents from '../../test/vested-rewards/events'
import * as devEvents from '../../dev/vested-rewards/events'


export const rewardsVested = {
	name: 'VestedRewards.RewardsVested',
	v1: productionEvents.rewardsVested['v1'],
	v1Stage: stageEvents.rewardsVested['v1'],
	v1Test: testEvents.rewardsVested['v1'],
	v85Dev: devEvents.rewardsVested['v85'],
}

export const actualDoesntMatchAvailable = {
	name: 'VestedRewards.ActualDoesntMatchAvailable',
	v7: productionEvents.actualDoesntMatchAvailable['v7'],
	v42: productionEvents.actualDoesntMatchAvailable['v42'],
	v45: productionEvents.actualDoesntMatchAvailable['v45'],
	v7Stage: stageEvents.actualDoesntMatchAvailable['v7'],
	v42Stage: stageEvents.actualDoesntMatchAvailable['v42'],
	v45Stage: stageEvents.actualDoesntMatchAvailable['v45'],
	v7Test: testEvents.actualDoesntMatchAvailable['v7'],
	v42Test: testEvents.actualDoesntMatchAvailable['v42'],
	v45Test: testEvents.actualDoesntMatchAvailable['v45'],
	v85Dev: devEvents.actualDoesntMatchAvailable['v85'],
}

export const failedToSaveCalculatedReward = {
	name: 'VestedRewards.FailedToSaveCalculatedReward',
	v7: productionEvents.failedToSaveCalculatedReward['v7'],
	v7Stage: stageEvents.failedToSaveCalculatedReward['v7'],
	v7Test: testEvents.failedToSaveCalculatedReward['v7'],
	v85Dev: devEvents.failedToSaveCalculatedReward['v85'],
}

export const addingZeroMarketMakerReward = {
	name: 'VestedRewards.AddingZeroMarketMakerReward',
	v7: productionEvents.addingZeroMarketMakerReward['v7'],
	v7Stage: stageEvents.addingZeroMarketMakerReward['v7'],
	v7Test: testEvents.addingZeroMarketMakerReward['v7'],
}

export const noEligibleMarketMakers = {
	name: 'VestedRewards.NoEligibleMarketMakers',
	v7: productionEvents.noEligibleMarketMakers['v7'],
	v7Stage: stageEvents.noEligibleMarketMakers['v7'],
	v7Test: testEvents.noEligibleMarketMakers['v7'],
}

export const crowdloanClaimed = {
	name: 'VestedRewards.CrowdloanClaimed',
	v53: productionEvents.crowdloanClaimed['v53'],
	v53Stage: stageEvents.crowdloanClaimed['v53'],
	v53Test: testEvents.crowdloanClaimed['v53'],
	v85Dev: devEvents.crowdloanClaimed['v85'],
}
