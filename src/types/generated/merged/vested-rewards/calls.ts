import * as productionCalls from '../../production/vested-rewards/calls'
import * as stageCalls from '../../stage/vested-rewards/calls'
import * as testCalls from '../../test/vested-rewards/calls'
import * as devCalls from '../../dev/vested-rewards/calls'


export const claimRewards = {
	name: 'VestedRewards.claim_rewards',
	v7: productionCalls.claimRewards['v7'],
	v7Stage: stageCalls.claimRewards['v7'],
	v7Test: testCalls.claimRewards['v7'],
	v85Dev: devCalls.claimRewards['v85'],
}

export const injectMarketMakers = {
	name: 'VestedRewards.inject_market_makers',
	v7: productionCalls.injectMarketMakers['v7'],
	v7Stage: stageCalls.injectMarketMakers['v7'],
	v7Test: testCalls.injectMarketMakers['v7'],
}

export const setAssetPair = {
	name: 'VestedRewards.set_asset_pair',
	v22: productionCalls.setAssetPair['v22'],
	v42: productionCalls.setAssetPair['v42'],
	v22Stage: stageCalls.setAssetPair['v22'],
	v42Stage: stageCalls.setAssetPair['v42'],
	v22Test: testCalls.setAssetPair['v22'],
	v42Test: testCalls.setAssetPair['v42'],
}

export const claimCrowdloanRewards = {
	name: 'VestedRewards.claim_crowdloan_rewards',
	v33: productionCalls.claimCrowdloanRewards['v33'],
	v42: productionCalls.claimCrowdloanRewards['v42'],
	v53: productionCalls.claimCrowdloanRewards['v53'],
	v33Stage: stageCalls.claimCrowdloanRewards['v33'],
	v42Stage: stageCalls.claimCrowdloanRewards['v42'],
	v53Stage: stageCalls.claimCrowdloanRewards['v53'],
	v33Test: testCalls.claimCrowdloanRewards['v33'],
	v42Test: testCalls.claimCrowdloanRewards['v42'],
	v53Test: testCalls.claimCrowdloanRewards['v53'],
	v85Dev: devCalls.claimCrowdloanRewards['v85'],
}

export const updateRewards = {
	name: 'VestedRewards.update_rewards',
	v46: productionCalls.updateRewards['v46'],
	v46Stage: stageCalls.updateRewards['v46'],
	v46Test: testCalls.updateRewards['v46'],
	v85Dev: devCalls.updateRewards['v85'],
}

export const registerCrowdloan = {
	name: 'VestedRewards.register_crowdloan',
	v53: productionCalls.registerCrowdloan['v53'],
	v53Stage: stageCalls.registerCrowdloan['v53'],
	v53Test: testCalls.registerCrowdloan['v53'],
	v85Dev: devCalls.registerCrowdloan['v85'],
}
