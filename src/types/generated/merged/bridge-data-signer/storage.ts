import * as productionStorage from '../../production/bridge-data-signer/storage'
import * as stageStorage from '../../stage/bridge-data-signer/storage'
import * as testStorage from '../../test/bridge-data-signer/storage'
import * as devStorage from '../../dev/bridge-data-signer/storage'


export const peers = {
	name: 'BridgeDataSigner.Peers',
	v64: productionStorage.peers['v64'],
	v70: productionStorage.peers['v70'],
	v84: productionStorage.peers['v84'],
	v64Stage: stageStorage.peers['v64'],
	v70Stage: stageStorage.peers['v70'],
	v84Stage: stageStorage.peers['v84'],
	v64Test: testStorage.peers['v64'],
	v70Test: testStorage.peers['v70'],
	v84Test: testStorage.peers['v84'],
	v85Dev: devStorage.peers['v85'],
}

export const pendingPeerUpdate = {
	name: 'BridgeDataSigner.PendingPeerUpdate',
	v64: productionStorage.pendingPeerUpdate['v64'],
	v70: productionStorage.pendingPeerUpdate['v70'],
	v84: productionStorage.pendingPeerUpdate['v84'],
	v64Stage: stageStorage.pendingPeerUpdate['v64'],
	v70Stage: stageStorage.pendingPeerUpdate['v70'],
	v84Stage: stageStorage.pendingPeerUpdate['v84'],
	v64Test: testStorage.pendingPeerUpdate['v64'],
	v70Test: testStorage.pendingPeerUpdate['v70'],
	v84Test: testStorage.pendingPeerUpdate['v84'],
	v85Dev: devStorage.pendingPeerUpdate['v85'],
}

export const approvals = {
	name: 'BridgeDataSigner.Approvals',
	v64: productionStorage.approvals['v64'],
	v70: productionStorage.approvals['v70'],
	v84: productionStorage.approvals['v84'],
	v64Stage: stageStorage.approvals['v64'],
	v70Stage: stageStorage.approvals['v70'],
	v84Stage: stageStorage.approvals['v84'],
	v64Test: testStorage.approvals['v64'],
	v70Test: testStorage.approvals['v70'],
	v84Test: testStorage.approvals['v84'],
	v85Dev: devStorage.approvals['v85'],
}
