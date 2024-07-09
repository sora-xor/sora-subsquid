import * as productionEvents from '../../production/multisig-verifier/events'
import * as stageEvents from '../../stage/multisig-verifier/events'
import * as testEvents from '../../test/multisig-verifier/events'
import * as devEvents from '../../dev/multisig-verifier/events'


export const networkInitialized = {
	name: 'MultisigVerifier.NetworkInitialized',
	v64: productionEvents.networkInitialized['v64'],
	v70: productionEvents.networkInitialized['v70'],
	v84: productionEvents.networkInitialized['v84'],
	v64Stage: stageEvents.networkInitialized['v64'],
	v70Stage: stageEvents.networkInitialized['v70'],
	v84Stage: stageEvents.networkInitialized['v84'],
	v64Test: testEvents.networkInitialized['v64'],
	v70Test: testEvents.networkInitialized['v70'],
	v84Test: testEvents.networkInitialized['v84'],
	v85Dev: devEvents.networkInitialized['v85'],
}

export const verificationSuccessful = {
	name: 'MultisigVerifier.VerificationSuccessful',
	v64: productionEvents.verificationSuccessful['v64'],
	v70: productionEvents.verificationSuccessful['v70'],
	v84: productionEvents.verificationSuccessful['v84'],
	v64Stage: stageEvents.verificationSuccessful['v64'],
	v70Stage: stageEvents.verificationSuccessful['v70'],
	v84Stage: stageEvents.verificationSuccessful['v84'],
	v64Test: testEvents.verificationSuccessful['v64'],
	v70Test: testEvents.verificationSuccessful['v70'],
	v84Test: testEvents.verificationSuccessful['v84'],
	v85Dev: devEvents.verificationSuccessful['v85'],
}

export const peerAdded = {
	name: 'MultisigVerifier.PeerAdded',
	v64: productionEvents.peerAdded['v64'],
	v64Stage: stageEvents.peerAdded['v64'],
	v64Test: testEvents.peerAdded['v64'],
	v85Dev: devEvents.peerAdded['v85'],
}

export const peerRemoved = {
	name: 'MultisigVerifier.PeerRemoved',
	v64: productionEvents.peerRemoved['v64'],
	v64Stage: stageEvents.peerRemoved['v64'],
	v64Test: testEvents.peerRemoved['v64'],
	v85Dev: devEvents.peerRemoved['v85'],
}
