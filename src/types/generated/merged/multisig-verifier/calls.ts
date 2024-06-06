import * as productionCalls from '../../production/multisig-verifier/calls'
import * as stageCalls from '../../stage/multisig-verifier/calls'
import * as testCalls from '../../test/multisig-verifier/calls'
import * as devCalls from '../../dev/multisig-verifier/calls'


export const initialize = {
	name: 'MultisigVerifier.initialize',
	v64: productionCalls.initialize['v64'],
	v70: productionCalls.initialize['v70'],
	v84: productionCalls.initialize['v84'],
	v64Stage: stageCalls.initialize['v64'],
	v70Stage: stageCalls.initialize['v70'],
	v84Stage: stageCalls.initialize['v84'],
	v64Test: testCalls.initialize['v64'],
	v70Test: testCalls.initialize['v70'],
	v84Test: testCalls.initialize['v84'],
	v85Dev: devCalls.initialize['v85'],
}

export const addPeer = {
	name: 'MultisigVerifier.add_peer',
	v64: productionCalls.addPeer['v64'],
	v64Stage: stageCalls.addPeer['v64'],
	v64Test: testCalls.addPeer['v64'],
	v85Dev: devCalls.addPeer['v85'],
}

export const removePeer = {
	name: 'MultisigVerifier.remove_peer',
	v64: productionCalls.removePeer['v64'],
	v64Stage: stageCalls.removePeer['v64'],
	v64Test: testCalls.removePeer['v64'],
	v85Dev: devCalls.removePeer['v85'],
}
