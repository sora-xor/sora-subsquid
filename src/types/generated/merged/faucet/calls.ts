import * as productionCalls from '../../production/faucet/calls'
import * as stageCalls from '../../stage/faucet/calls'
import * as testCalls from '../../test/faucet/calls'
import * as devCalls from '../../dev/faucet/calls'


export const transfer = {
	name: 'Faucet.transfer',
	v22: productionCalls.transfer['v22'],
	v22Stage: stageCalls.transfer['v22'],
	v22Test: testCalls.transfer['v22'],
	v85Dev: devCalls.transfer['v85'],
}

export const resetRewards = {
	name: 'Faucet.reset_rewards',
	v22: productionCalls.resetRewards['v22'],
	v22Stage: stageCalls.resetRewards['v22'],
	v22Test: testCalls.resetRewards['v22'],
	v85Dev: devCalls.resetRewards['v85'],
}

export const updateLimit = {
	name: 'Faucet.update_limit',
	v85Dev: devCalls.updateLimit['v85'],
}
