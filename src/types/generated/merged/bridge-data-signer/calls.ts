import * as productionCalls from '../../production/bridge-data-signer/calls'
import * as stageCalls from '../../stage/bridge-data-signer/calls'
import * as testCalls from '../../test/bridge-data-signer/calls'
import * as devCalls from '../../dev/bridge-data-signer/calls'


export const registerNetwork = {
	name: 'BridgeDataSigner.register_network',
	v64: productionCalls.registerNetwork['v64'],
	v70: productionCalls.registerNetwork['v70'],
	v84: productionCalls.registerNetwork['v84'],
	v64Stage: stageCalls.registerNetwork['v64'],
	v70Stage: stageCalls.registerNetwork['v70'],
	v84Stage: stageCalls.registerNetwork['v84'],
	v64Test: testCalls.registerNetwork['v64'],
	v70Test: testCalls.registerNetwork['v70'],
	v84Test: testCalls.registerNetwork['v84'],
	v85Dev: devCalls.registerNetwork['v85'],
}

export const approve = {
	name: 'BridgeDataSigner.approve',
	v64: productionCalls.approve['v64'],
	v70: productionCalls.approve['v70'],
	v84: productionCalls.approve['v84'],
	v64Stage: stageCalls.approve['v64'],
	v70Stage: stageCalls.approve['v70'],
	v84Stage: stageCalls.approve['v84'],
	v64Test: testCalls.approve['v64'],
	v70Test: testCalls.approve['v70'],
	v84Test: testCalls.approve['v84'],
	v85Dev: devCalls.approve['v85'],
}

export const addPeer = {
	name: 'BridgeDataSigner.add_peer',
	v64: productionCalls.addPeer['v64'],
	v70: productionCalls.addPeer['v70'],
	v84: productionCalls.addPeer['v84'],
	v64Stage: stageCalls.addPeer['v64'],
	v70Stage: stageCalls.addPeer['v70'],
	v84Stage: stageCalls.addPeer['v84'],
	v64Test: testCalls.addPeer['v64'],
	v70Test: testCalls.addPeer['v70'],
	v84Test: testCalls.addPeer['v84'],
	v85Dev: devCalls.addPeer['v85'],
}

export const removePeer = {
	name: 'BridgeDataSigner.remove_peer',
	v64: productionCalls.removePeer['v64'],
	v70: productionCalls.removePeer['v70'],
	v84: productionCalls.removePeer['v84'],
	v64Stage: stageCalls.removePeer['v64'],
	v70Stage: stageCalls.removePeer['v70'],
	v84Stage: stageCalls.removePeer['v84'],
	v64Test: testCalls.removePeer['v64'],
	v70Test: testCalls.removePeer['v70'],
	v84Test: testCalls.removePeer['v84'],
	v85Dev: devCalls.removePeer['v85'],
}

export const finishRemovePeer = {
	name: 'BridgeDataSigner.finish_remove_peer',
	v64: productionCalls.finishRemovePeer['v64'],
	v64Stage: stageCalls.finishRemovePeer['v64'],
	v64Test: testCalls.finishRemovePeer['v64'],
	v85Dev: devCalls.finishRemovePeer['v85'],
}

export const finishAddPeer = {
	name: 'BridgeDataSigner.finish_add_peer',
	v64: productionCalls.finishAddPeer['v64'],
	v64Stage: stageCalls.finishAddPeer['v64'],
	v64Test: testCalls.finishAddPeer['v64'],
	v85Dev: devCalls.finishAddPeer['v85'],
}
