import * as productionEvents from '../../production/bridge-data-signer/events'
import * as stageEvents from '../../stage/bridge-data-signer/events'
import * as testEvents from '../../test/bridge-data-signer/events'
import * as devEvents from '../../dev/bridge-data-signer/events'


export const initialized = {
	name: 'BridgeDataSigner.Initialized',
	v64: productionEvents.initialized['v64'],
	v70: productionEvents.initialized['v70'],
	v84: productionEvents.initialized['v84'],
	v64Stage: stageEvents.initialized['v64'],
	v70Stage: stageEvents.initialized['v70'],
	v84Stage: stageEvents.initialized['v84'],
	v64Test: testEvents.initialized['v64'],
	v70Test: testEvents.initialized['v70'],
	v84Test: testEvents.initialized['v84'],
	v85Dev: devEvents.initialized['v85'],
}

export const addedPeer = {
	name: 'BridgeDataSigner.AddedPeer',
	v64: productionEvents.addedPeer['v64'],
	v70: productionEvents.addedPeer['v70'],
	v84: productionEvents.addedPeer['v84'],
	v64Stage: stageEvents.addedPeer['v64'],
	v70Stage: stageEvents.addedPeer['v70'],
	v84Stage: stageEvents.addedPeer['v84'],
	v64Test: testEvents.addedPeer['v64'],
	v70Test: testEvents.addedPeer['v70'],
	v84Test: testEvents.addedPeer['v84'],
	v85Dev: devEvents.addedPeer['v85'],
}

export const removedPeer = {
	name: 'BridgeDataSigner.RemovedPeer',
	v64: productionEvents.removedPeer['v64'],
	v70: productionEvents.removedPeer['v70'],
	v84: productionEvents.removedPeer['v84'],
	v64Stage: stageEvents.removedPeer['v64'],
	v70Stage: stageEvents.removedPeer['v70'],
	v84Stage: stageEvents.removedPeer['v84'],
	v64Test: testEvents.removedPeer['v64'],
	v70Test: testEvents.removedPeer['v70'],
	v84Test: testEvents.removedPeer['v84'],
	v85Dev: devEvents.removedPeer['v85'],
}

export const approvalAccepted = {
	name: 'BridgeDataSigner.ApprovalAccepted',
	v64: productionEvents.approvalAccepted['v64'],
	v70: productionEvents.approvalAccepted['v70'],
	v84: productionEvents.approvalAccepted['v84'],
	v64Stage: stageEvents.approvalAccepted['v64'],
	v70Stage: stageEvents.approvalAccepted['v70'],
	v84Stage: stageEvents.approvalAccepted['v84'],
	v64Test: testEvents.approvalAccepted['v64'],
	v70Test: testEvents.approvalAccepted['v70'],
	v84Test: testEvents.approvalAccepted['v84'],
	v85Dev: devEvents.approvalAccepted['v85'],
}

export const approved = {
	name: 'BridgeDataSigner.Approved',
	v64: productionEvents.approved['v64'],
	v70: productionEvents.approved['v70'],
	v84: productionEvents.approved['v84'],
	v64Stage: stageEvents.approved['v64'],
	v70Stage: stageEvents.approved['v70'],
	v84Stage: stageEvents.approved['v84'],
	v64Test: testEvents.approved['v64'],
	v70Test: testEvents.approved['v70'],
	v84Test: testEvents.approved['v84'],
	v85Dev: devEvents.approved['v85'],
}
