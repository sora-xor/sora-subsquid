import * as productionStorage from '../../production/multisig-verifier/storage'
import * as stageStorage from '../../stage/multisig-verifier/storage'
import * as testStorage from '../../test/multisig-verifier/storage'
import * as devStorage from '../../dev/multisig-verifier/storage'


export const peerKeys = {
	name: 'MultisigVerifier.PeerKeys',
	v64: productionStorage.peerKeys['v64'],
	v70: productionStorage.peerKeys['v70'],
	v84: productionStorage.peerKeys['v84'],
	v64Stage: stageStorage.peerKeys['v64'],
	v70Stage: stageStorage.peerKeys['v70'],
	v84Stage: stageStorage.peerKeys['v84'],
	v64Test: testStorage.peerKeys['v64'],
	v70Test: testStorage.peerKeys['v70'],
	v84Test: testStorage.peerKeys['v84'],
	v85Dev: devStorage.peerKeys['v85'],
}

export const thisNetworkId = {
	name: 'MultisigVerifier.ThisNetworkId',
	v64: productionStorage.thisNetworkId['v64'],
	v64Stage: stageStorage.thisNetworkId['v64'],
	v64Test: testStorage.thisNetworkId['v64'],
}
