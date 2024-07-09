import * as productionStorage from '../../production/eth-bridge/storage'
import * as stageStorage from '../../stage/eth-bridge/storage'
import * as testStorage from '../../test/eth-bridge/storage'
import * as devStorage from '../../dev/eth-bridge/storage'


export const requestsQueue = {
	name: 'EthBridge.RequestsQueue',
	v1: productionStorage.requestsQueue['v1'],
	v1Stage: stageStorage.requestsQueue['v1'],
	v1Test: testStorage.requestsQueue['v1'],
	v85Dev: devStorage.requestsQueue['v85'],
}

export const requests = {
	name: 'EthBridge.Requests',
	v1: productionStorage.requests['v1'],
	v42: productionStorage.requests['v42'],
	v1Stage: stageStorage.requests['v1'],
	v42Stage: stageStorage.requests['v42'],
	v1Test: testStorage.requests['v1'],
	v42Test: testStorage.requests['v42'],
	v85Dev: devStorage.requests['v85'],
}

export const loadToIncomingRequestHash = {
	name: 'EthBridge.LoadToIncomingRequestHash',
	v1: productionStorage.loadToIncomingRequestHash['v1'],
	v1Stage: stageStorage.loadToIncomingRequestHash['v1'],
	v1Test: testStorage.loadToIncomingRequestHash['v1'],
	v85Dev: devStorage.loadToIncomingRequestHash['v85'],
}

export const requestStatuses = {
	name: 'EthBridge.RequestStatuses',
	v1: productionStorage.requestStatuses['v1'],
	v42: productionStorage.requestStatuses['v42'],
	v53: productionStorage.requestStatuses['v53'],
	v1Stage: stageStorage.requestStatuses['v1'],
	v42Stage: stageStorage.requestStatuses['v42'],
	v53Stage: stageStorage.requestStatuses['v53'],
	v1Test: testStorage.requestStatuses['v1'],
	v42Test: testStorage.requestStatuses['v42'],
	v53Test: testStorage.requestStatuses['v53'],
	v85Dev: devStorage.requestStatuses['v85'],
}

export const requestSubmissionHeight = {
	name: 'EthBridge.RequestSubmissionHeight',
	v1: productionStorage.requestSubmissionHeight['v1'],
	v1Stage: stageStorage.requestSubmissionHeight['v1'],
	v1Test: testStorage.requestSubmissionHeight['v1'],
	v85Dev: devStorage.requestSubmissionHeight['v85'],
}

export const requestApprovals = {
	name: 'EthBridge.RequestApprovals',
	v1: productionStorage.requestApprovals['v1'],
	v1Stage: stageStorage.requestApprovals['v1'],
	v1Test: testStorage.requestApprovals['v1'],
	v85Dev: devStorage.requestApprovals['v85'],
}

export const accountRequests = {
	name: 'EthBridge.AccountRequests',
	v1: productionStorage.accountRequests['v1'],
	v1Stage: stageStorage.accountRequests['v1'],
	v1Test: testStorage.accountRequests['v1'],
	v85Dev: devStorage.accountRequests['v85'],
}

export const registeredAsset = {
	name: 'EthBridge.RegisteredAsset',
	v1: productionStorage.registeredAsset['v1'],
	v42: productionStorage.registeredAsset['v42'],
	v1Stage: stageStorage.registeredAsset['v1'],
	v42Stage: stageStorage.registeredAsset['v42'],
	v1Test: testStorage.registeredAsset['v1'],
	v42Test: testStorage.registeredAsset['v42'],
	v85Dev: devStorage.registeredAsset['v85'],
}

export const sidechainAssetPrecision = {
	name: 'EthBridge.SidechainAssetPrecision',
	v1: productionStorage.sidechainAssetPrecision['v1'],
	v42: productionStorage.sidechainAssetPrecision['v42'],
	v1Stage: stageStorage.sidechainAssetPrecision['v1'],
	v42Stage: stageStorage.sidechainAssetPrecision['v42'],
	v1Test: testStorage.sidechainAssetPrecision['v1'],
	v42Test: testStorage.sidechainAssetPrecision['v42'],
	v85Dev: devStorage.sidechainAssetPrecision['v85'],
}

export const registeredSidechainAsset = {
	name: 'EthBridge.RegisteredSidechainAsset',
	v1: productionStorage.registeredSidechainAsset['v1'],
	v42: productionStorage.registeredSidechainAsset['v42'],
	v1Stage: stageStorage.registeredSidechainAsset['v1'],
	v42Stage: stageStorage.registeredSidechainAsset['v42'],
	v1Test: testStorage.registeredSidechainAsset['v1'],
	v42Test: testStorage.registeredSidechainAsset['v42'],
	v85Dev: devStorage.registeredSidechainAsset['v85'],
}

export const registeredSidechainToken = {
	name: 'EthBridge.RegisteredSidechainToken',
	v1: productionStorage.registeredSidechainToken['v1'],
	v42: productionStorage.registeredSidechainToken['v42'],
	v1Stage: stageStorage.registeredSidechainToken['v1'],
	v42Stage: stageStorage.registeredSidechainToken['v42'],
	v1Test: testStorage.registeredSidechainToken['v1'],
	v42Test: testStorage.registeredSidechainToken['v42'],
	v85Dev: devStorage.registeredSidechainToken['v85'],
}

export const peers = {
	name: 'EthBridge.Peers',
	v1: productionStorage.peers['v1'],
	v1Stage: stageStorage.peers['v1'],
	v1Test: testStorage.peers['v1'],
	v85Dev: devStorage.peers['v85'],
}

export const pendingPeer = {
	name: 'EthBridge.PendingPeer',
	v1: productionStorage.pendingPeer['v1'],
	v1Stage: stageStorage.pendingPeer['v1'],
	v1Test: testStorage.pendingPeer['v1'],
	v85Dev: devStorage.pendingPeer['v85'],
}

export const pendingEthPeersSync = {
	name: 'EthBridge.PendingEthPeersSync',
	v1: productionStorage.pendingEthPeersSync['v1'],
	v1Stage: stageStorage.pendingEthPeersSync['v1'],
	v1Test: testStorage.pendingEthPeersSync['v1'],
	v85Dev: devStorage.pendingEthPeersSync['v85'],
}

export const peerAccountId = {
	name: 'EthBridge.PeerAccountId',
	v1: productionStorage.peerAccountId['v1'],
	v42: productionStorage.peerAccountId['v42'],
	v1Stage: stageStorage.peerAccountId['v1'],
	v42Stage: stageStorage.peerAccountId['v42'],
	v1Test: testStorage.peerAccountId['v1'],
	v42Test: testStorage.peerAccountId['v42'],
	v85Dev: devStorage.peerAccountId['v85'],
}

export const peerAddress = {
	name: 'EthBridge.PeerAddress',
	v1: productionStorage.peerAddress['v1'],
	v1Stage: stageStorage.peerAddress['v1'],
	v1Test: testStorage.peerAddress['v1'],
	v85Dev: devStorage.peerAddress['v85'],
}

export const bridgeAccount = {
	name: 'EthBridge.BridgeAccount',
	v1: productionStorage.bridgeAccount['v1'],
	v1Stage: stageStorage.bridgeAccount['v1'],
	v1Test: testStorage.bridgeAccount['v1'],
	v85Dev: devStorage.bridgeAccount['v85'],
}

export const authorityAccount = {
	name: 'EthBridge.AuthorityAccount',
	v1: productionStorage.authorityAccount['v1'],
	v42: productionStorage.authorityAccount['v42'],
	v1Stage: stageStorage.authorityAccount['v1'],
	v42Stage: stageStorage.authorityAccount['v42'],
	v1Test: testStorage.authorityAccount['v1'],
	v42Test: testStorage.authorityAccount['v42'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const bridgeStatuses = {
	name: 'EthBridge.BridgeStatuses',
	v1: productionStorage.bridgeStatuses['v1'],
	v1Stage: stageStorage.bridgeStatuses['v1'],
	v1Test: testStorage.bridgeStatuses['v1'],
	v85Dev: devStorage.bridgeStatuses['v85'],
}

export const bridgeContractAddress = {
	name: 'EthBridge.BridgeContractAddress',
	v1: productionStorage.bridgeContractAddress['v1'],
	v1Stage: stageStorage.bridgeContractAddress['v1'],
	v1Test: testStorage.bridgeContractAddress['v1'],
	v85Dev: devStorage.bridgeContractAddress['v85'],
}

export const xorMasterContractAddress = {
	name: 'EthBridge.XorMasterContractAddress',
	v1: productionStorage.xorMasterContractAddress['v1'],
	v1Stage: stageStorage.xorMasterContractAddress['v1'],
	v1Test: testStorage.xorMasterContractAddress['v1'],
	v85Dev: devStorage.xorMasterContractAddress['v85'],
}

export const valMasterContractAddress = {
	name: 'EthBridge.ValMasterContractAddress',
	v1: productionStorage.valMasterContractAddress['v1'],
	v1Stage: stageStorage.valMasterContractAddress['v1'],
	v1Test: testStorage.valMasterContractAddress['v1'],
	v85Dev: devStorage.valMasterContractAddress['v85'],
}

export const nextNetworkId = {
	name: 'EthBridge.NextNetworkId',
	v1: productionStorage.nextNetworkId['v1'],
	v1Stage: stageStorage.nextNetworkId['v1'],
	v1Test: testStorage.nextNetworkId['v1'],
	v85Dev: devStorage.nextNetworkId['v85'],
}

export const palletStorageVersion = {
	name: 'EthBridge.PalletStorageVersion',
	v3: productionStorage.palletStorageVersion['v3'],
	v3Stage: stageStorage.palletStorageVersion['v3'],
	v3Test: testStorage.palletStorageVersion['v3'],
}

export const migratingRequests = {
	name: 'EthBridge.MigratingRequests',
	v19: productionStorage.migratingRequests['v19'],
	v19Stage: stageStorage.migratingRequests['v19'],
	v19Test: testStorage.migratingRequests['v19'],
	v85Dev: devStorage.migratingRequests['v85'],
}

export const bridgeSignatureVersions = {
	name: 'EthBridge.BridgeSignatureVersions',
	v38: productionStorage.bridgeSignatureVersions['v38'],
	v38Stage: stageStorage.bridgeSignatureVersions['v38'],
	v38Test: testStorage.bridgeSignatureVersions['v38'],
	v85Dev: devStorage.bridgeSignatureVersions['v85'],
}

export const pendingBridgeSignatureVersions = {
	name: 'EthBridge.PendingBridgeSignatureVersions',
	v38: productionStorage.pendingBridgeSignatureVersions['v38'],
	v38Stage: stageStorage.pendingBridgeSignatureVersions['v38'],
	v38Test: testStorage.pendingBridgeSignatureVersions['v38'],
	v85Dev: devStorage.pendingBridgeSignatureVersions['v85'],
}
