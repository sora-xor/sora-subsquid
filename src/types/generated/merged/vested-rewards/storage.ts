import * as productionStorage from '../../production/vested-rewards/storage'
import * as stageStorage from '../../stage/vested-rewards/storage'
import * as testStorage from '../../test/vested-rewards/storage'
import * as devStorage from '../../dev/vested-rewards/storage'


export const rewards = {
	name: 'VestedRewards.Rewards',
	v1: productionStorage.rewards['v1'],
	v42: productionStorage.rewards['v42'],
	v45: productionStorage.rewards['v45'],
	v1Stage: stageStorage.rewards['v1'],
	v42Stage: stageStorage.rewards['v42'],
	v45Stage: stageStorage.rewards['v45'],
	v1Test: testStorage.rewards['v1'],
	v42Test: testStorage.rewards['v42'],
	v45Test: testStorage.rewards['v45'],
	v85Dev: devStorage.rewards['v85'],
}

export const totalRewards = {
	name: 'VestedRewards.TotalRewards',
	v1: productionStorage.totalRewards['v1'],
	v1Stage: stageStorage.totalRewards['v1'],
	v1Test: testStorage.totalRewards['v1'],
	v85Dev: devStorage.totalRewards['v85'],
}

export const marketMakersRegistry = {
	name: 'VestedRewards.MarketMakersRegistry',
	v1: productionStorage.marketMakersRegistry['v1'],
	v1Stage: stageStorage.marketMakersRegistry['v1'],
	v1Test: testStorage.marketMakersRegistry['v1'],
}

export const marketMakingPairs = {
	name: 'VestedRewards.MarketMakingPairs',
	v22: productionStorage.marketMakingPairs['v22'],
	v42: productionStorage.marketMakingPairs['v42'],
	v22Stage: stageStorage.marketMakingPairs['v22'],
	v42Stage: stageStorage.marketMakingPairs['v42'],
	v22Test: testStorage.marketMakingPairs['v22'],
	v42Test: testStorage.marketMakingPairs['v42'],
}

export const crowdloanRewards = {
	name: 'VestedRewards.CrowdloanRewards',
	v33: productionStorage.crowdloanRewards['v33'],
	v42: productionStorage.crowdloanRewards['v42'],
	v33Stage: stageStorage.crowdloanRewards['v33'],
	v42Stage: stageStorage.crowdloanRewards['v42'],
	v33Test: testStorage.crowdloanRewards['v33'],
	v42Test: testStorage.crowdloanRewards['v42'],
}

export const crowdloanClaimHistory = {
	name: 'VestedRewards.CrowdloanClaimHistory',
	v33: productionStorage.crowdloanClaimHistory['v33'],
	v42: productionStorage.crowdloanClaimHistory['v42'],
	v33Stage: stageStorage.crowdloanClaimHistory['v33'],
	v42Stage: stageStorage.crowdloanClaimHistory['v42'],
	v33Test: testStorage.crowdloanClaimHistory['v33'],
	v42Test: testStorage.crowdloanClaimHistory['v42'],
}

export const crowdloanInfos = {
	name: 'VestedRewards.CrowdloanInfos',
	v53: productionStorage.crowdloanInfos['v53'],
	v53Stage: stageStorage.crowdloanInfos['v53'],
	v53Test: testStorage.crowdloanInfos['v53'],
	v85Dev: devStorage.crowdloanInfos['v85'],
}

export const crowdloanUserInfos = {
	name: 'VestedRewards.CrowdloanUserInfos',
	v53: productionStorage.crowdloanUserInfos['v53'],
	v53Stage: stageStorage.crowdloanUserInfos['v53'],
	v53Test: testStorage.crowdloanUserInfos['v53'],
	v85Dev: devStorage.crowdloanUserInfos['v85'],
}
