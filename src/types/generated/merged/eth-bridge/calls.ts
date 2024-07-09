import * as productionCalls from '../../production/eth-bridge/calls'
import * as stageCalls from '../../stage/eth-bridge/calls'
import * as testCalls from '../../test/eth-bridge/calls'
import * as devCalls from '../../dev/eth-bridge/calls'


export const registerBridge = {
	name: 'EthBridge.register_bridge',
	v1: productionCalls.registerBridge['v1'],
	v38: productionCalls.registerBridge['v38'],
	v1Stage: stageCalls.registerBridge['v1'],
	v38Stage: stageCalls.registerBridge['v38'],
	v1Test: testCalls.registerBridge['v1'],
	v38Test: testCalls.registerBridge['v38'],
	v85Dev: devCalls.registerBridge['v85'],
}

export const addAsset = {
	name: 'EthBridge.add_asset',
	v1: productionCalls.addAsset['v1'],
	v42: productionCalls.addAsset['v42'],
	v1Stage: stageCalls.addAsset['v1'],
	v42Stage: stageCalls.addAsset['v42'],
	v1Test: testCalls.addAsset['v1'],
	v42Test: testCalls.addAsset['v42'],
	v85Dev: devCalls.addAsset['v85'],
}

export const addSidechainToken = {
	name: 'EthBridge.add_sidechain_token',
	v1: productionCalls.addSidechainToken['v1'],
	v42: productionCalls.addSidechainToken['v42'],
	v1Stage: stageCalls.addSidechainToken['v1'],
	v42Stage: stageCalls.addSidechainToken['v42'],
	v1Test: testCalls.addSidechainToken['v1'],
	v42Test: testCalls.addSidechainToken['v42'],
	v85Dev: devCalls.addSidechainToken['v85'],
}

export const transferToSidechain = {
	name: 'EthBridge.transfer_to_sidechain',
	v1: productionCalls.transferToSidechain['v1'],
	v42: productionCalls.transferToSidechain['v42'],
	v1Stage: stageCalls.transferToSidechain['v1'],
	v42Stage: stageCalls.transferToSidechain['v42'],
	v1Test: testCalls.transferToSidechain['v1'],
	v42Test: testCalls.transferToSidechain['v42'],
	v85Dev: devCalls.transferToSidechain['v85'],
}

export const requestFromSidechain = {
	name: 'EthBridge.request_from_sidechain',
	v1: productionCalls.requestFromSidechain['v1'],
	v1Stage: stageCalls.requestFromSidechain['v1'],
	v1Test: testCalls.requestFromSidechain['v1'],
	v85Dev: devCalls.requestFromSidechain['v85'],
}

export const finalizeIncomingRequest = {
	name: 'EthBridge.finalize_incoming_request',
	v1: productionCalls.finalizeIncomingRequest['v1'],
	v1Stage: stageCalls.finalizeIncomingRequest['v1'],
	v1Test: testCalls.finalizeIncomingRequest['v1'],
	v85Dev: devCalls.finalizeIncomingRequest['v85'],
}

export const addPeer = {
	name: 'EthBridge.add_peer',
	v1: productionCalls.addPeer['v1'],
	v1Stage: stageCalls.addPeer['v1'],
	v1Test: testCalls.addPeer['v1'],
	v85Dev: devCalls.addPeer['v85'],
}

export const removePeer = {
	name: 'EthBridge.remove_peer',
	v1: productionCalls.removePeer['v1'],
	v33: productionCalls.removePeer['v33'],
	v1Stage: stageCalls.removePeer['v1'],
	v33Stage: stageCalls.removePeer['v33'],
	v1Test: testCalls.removePeer['v1'],
	v33Test: testCalls.removePeer['v33'],
	v85Dev: devCalls.removePeer['v85'],
}

export const prepareForMigration = {
	name: 'EthBridge.prepare_for_migration',
	v1: productionCalls.prepareForMigration['v1'],
	v1Stage: stageCalls.prepareForMigration['v1'],
	v1Test: testCalls.prepareForMigration['v1'],
	v85Dev: devCalls.prepareForMigration['v85'],
}

export const migrate = {
	name: 'EthBridge.migrate',
	v1: productionCalls.migrate['v1'],
	v38: productionCalls.migrate['v38'],
	v1Stage: stageCalls.migrate['v1'],
	v38Stage: stageCalls.migrate['v38'],
	v1Test: testCalls.migrate['v1'],
	v38Test: testCalls.migrate['v38'],
	v85Dev: devCalls.migrate['v85'],
}

export const registerIncomingRequest = {
	name: 'EthBridge.register_incoming_request',
	v1: productionCalls.registerIncomingRequest['v1'],
	v42: productionCalls.registerIncomingRequest['v42'],
	v1Stage: stageCalls.registerIncomingRequest['v1'],
	v42Stage: stageCalls.registerIncomingRequest['v42'],
	v1Test: testCalls.registerIncomingRequest['v1'],
	v42Test: testCalls.registerIncomingRequest['v42'],
	v85Dev: devCalls.registerIncomingRequest['v85'],
}

export const importIncomingRequest = {
	name: 'EthBridge.import_incoming_request',
	v1: productionCalls.importIncomingRequest['v1'],
	v42: productionCalls.importIncomingRequest['v42'],
	v53: productionCalls.importIncomingRequest['v53'],
	v1Stage: stageCalls.importIncomingRequest['v1'],
	v42Stage: stageCalls.importIncomingRequest['v42'],
	v53Stage: stageCalls.importIncomingRequest['v53'],
	v1Test: testCalls.importIncomingRequest['v1'],
	v42Test: testCalls.importIncomingRequest['v42'],
	v53Test: testCalls.importIncomingRequest['v53'],
	v85Dev: devCalls.importIncomingRequest['v85'],
}

export const approveRequest = {
	name: 'EthBridge.approve_request',
	v1: productionCalls.approveRequest['v1'],
	v1Stage: stageCalls.approveRequest['v1'],
	v1Test: testCalls.approveRequest['v1'],
	v85Dev: devCalls.approveRequest['v85'],
}

export const abortRequest = {
	name: 'EthBridge.abort_request',
	v1: productionCalls.abortRequest['v1'],
	v42: productionCalls.abortRequest['v42'],
	v53: productionCalls.abortRequest['v53'],
	v1Stage: stageCalls.abortRequest['v1'],
	v42Stage: stageCalls.abortRequest['v42'],
	v53Stage: stageCalls.abortRequest['v53'],
	v1Test: testCalls.abortRequest['v1'],
	v42Test: testCalls.abortRequest['v42'],
	v53Test: testCalls.abortRequest['v53'],
	v85Dev: devCalls.abortRequest['v85'],
}

export const forceAddPeer = {
	name: 'EthBridge.force_add_peer',
	v1: productionCalls.forceAddPeer['v1'],
	v1Stage: stageCalls.forceAddPeer['v1'],
	v1Test: testCalls.forceAddPeer['v1'],
	v85Dev: devCalls.forceAddPeer['v85'],
}

export const migrateTo020 = {
	name: 'EthBridge.migrate_to_0_2_0',
	v19: productionCalls.migrateTo020['v19'],
	v19Stage: stageCalls.migrateTo020['v19'],
	v19Test: testCalls.migrateTo020['v19'],
}

export const removeSidechainAsset = {
	name: 'EthBridge.remove_sidechain_asset',
	v32: productionCalls.removeSidechainAsset['v32'],
	v42: productionCalls.removeSidechainAsset['v42'],
	v32Stage: stageCalls.removeSidechainAsset['v32'],
	v42Stage: stageCalls.removeSidechainAsset['v42'],
	v32Test: testCalls.removeSidechainAsset['v32'],
	v42Test: testCalls.removeSidechainAsset['v42'],
	v85Dev: devCalls.removeSidechainAsset['v85'],
}

export const registerExistingSidechainAsset = {
	name: 'EthBridge.register_existing_sidechain_asset',
	v32: productionCalls.registerExistingSidechainAsset['v32'],
	v42: productionCalls.registerExistingSidechainAsset['v42'],
	v32Stage: stageCalls.registerExistingSidechainAsset['v32'],
	v42Stage: stageCalls.registerExistingSidechainAsset['v42'],
	v32Test: testCalls.registerExistingSidechainAsset['v32'],
	v42Test: testCalls.registerExistingSidechainAsset['v42'],
	v85Dev: devCalls.registerExistingSidechainAsset['v85'],
}
