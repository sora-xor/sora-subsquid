import * as productionCalls from '../../production/bridge-proxy/calls'
import * as stageCalls from '../../stage/bridge-proxy/calls'
import * as testCalls from '../../test/bridge-proxy/calls'
import * as devCalls from '../../dev/bridge-proxy/calls'


export const burn = {
	name: 'BridgeProxy.burn',
	v64: productionCalls.burn['v64'],
	v70: productionCalls.burn['v70'],
	v74: productionCalls.burn['v74'],
	v84: productionCalls.burn['v84'],
	v64Stage: stageCalls.burn['v64'],
	v70Stage: stageCalls.burn['v70'],
	v74Stage: stageCalls.burn['v74'],
	v84Stage: stageCalls.burn['v84'],
	v64Test: testCalls.burn['v64'],
	v70Test: testCalls.burn['v70'],
	v74Test: testCalls.burn['v74'],
	v84Test: testCalls.burn['v84'],
	v85Dev: devCalls.burn['v85'],
}

export const addLimitedAsset = {
	name: 'BridgeProxy.add_limited_asset',
	v64: productionCalls.addLimitedAsset['v64'],
	v64Stage: stageCalls.addLimitedAsset['v64'],
	v64Test: testCalls.addLimitedAsset['v64'],
	v85Dev: devCalls.addLimitedAsset['v85'],
}

export const removeLimitedAsset = {
	name: 'BridgeProxy.remove_limited_asset',
	v64: productionCalls.removeLimitedAsset['v64'],
	v64Stage: stageCalls.removeLimitedAsset['v64'],
	v64Test: testCalls.removeLimitedAsset['v64'],
	v85Dev: devCalls.removeLimitedAsset['v85'],
}

export const updateTransferLimit = {
	name: 'BridgeProxy.update_transfer_limit',
	v64: productionCalls.updateTransferLimit['v64'],
	v64Stage: stageCalls.updateTransferLimit['v64'],
	v64Test: testCalls.updateTransferLimit['v64'],
	v85Dev: devCalls.updateTransferLimit['v85'],
}
