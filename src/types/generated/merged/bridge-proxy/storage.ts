import * as productionStorage from '../../production/bridge-proxy/storage'
import * as stageStorage from '../../stage/bridge-proxy/storage'
import * as testStorage from '../../test/bridge-proxy/storage'
import * as devStorage from '../../dev/bridge-proxy/storage'


export const transactions = {
	name: 'BridgeProxy.Transactions',
	v64: productionStorage.transactions['v64'],
	v70: productionStorage.transactions['v70'],
	v74: productionStorage.transactions['v74'],
	v84: productionStorage.transactions['v84'],
	v64Stage: stageStorage.transactions['v64'],
	v70Stage: stageStorage.transactions['v70'],
	v74Stage: stageStorage.transactions['v74'],
	v84Stage: stageStorage.transactions['v84'],
	v64Test: testStorage.transactions['v64'],
	v70Test: testStorage.transactions['v70'],
	v74Test: testStorage.transactions['v74'],
	v84Test: testStorage.transactions['v84'],
	v85Dev: devStorage.transactions['v85'],
}

export const senders = {
	name: 'BridgeProxy.Senders',
	v64: productionStorage.senders['v64'],
	v70: productionStorage.senders['v70'],
	v84: productionStorage.senders['v84'],
	v64Stage: stageStorage.senders['v64'],
	v70Stage: stageStorage.senders['v70'],
	v84Stage: stageStorage.senders['v84'],
	v64Test: testStorage.senders['v64'],
	v70Test: testStorage.senders['v70'],
	v84Test: testStorage.senders['v84'],
	v85Dev: devStorage.senders['v85'],
}

export const sidechainFeePaid = {
	name: 'BridgeProxy.SidechainFeePaid',
	v64: productionStorage.sidechainFeePaid['v64'],
	v70: productionStorage.sidechainFeePaid['v70'],
	v64Stage: stageStorage.sidechainFeePaid['v64'],
	v70Stage: stageStorage.sidechainFeePaid['v70'],
	v64Test: testStorage.sidechainFeePaid['v64'],
	v70Test: testStorage.sidechainFeePaid['v70'],
}

export const lockedAssets = {
	name: 'BridgeProxy.LockedAssets',
	v64: productionStorage.lockedAssets['v64'],
	v70: productionStorage.lockedAssets['v70'],
	v84: productionStorage.lockedAssets['v84'],
	v64Stage: stageStorage.lockedAssets['v64'],
	v70Stage: stageStorage.lockedAssets['v70'],
	v84Stage: stageStorage.lockedAssets['v84'],
	v64Test: testStorage.lockedAssets['v64'],
	v70Test: testStorage.lockedAssets['v70'],
	v84Test: testStorage.lockedAssets['v84'],
	v85Dev: devStorage.lockedAssets['v85'],
}

export const transferLimit = {
	name: 'BridgeProxy.TransferLimit',
	v64: productionStorage.transferLimit['v64'],
	v64Stage: stageStorage.transferLimit['v64'],
	v64Test: testStorage.transferLimit['v64'],
	v85Dev: devStorage.transferLimit['v85'],
}

export const consumedTransferLimit = {
	name: 'BridgeProxy.ConsumedTransferLimit',
	v64: productionStorage.consumedTransferLimit['v64'],
	v64Stage: stageStorage.consumedTransferLimit['v64'],
	v64Test: testStorage.consumedTransferLimit['v64'],
	v85Dev: devStorage.consumedTransferLimit['v85'],
}

export const transferLimitUnlockSchedule = {
	name: 'BridgeProxy.TransferLimitUnlockSchedule',
	v64: productionStorage.transferLimitUnlockSchedule['v64'],
	v64Stage: stageStorage.transferLimitUnlockSchedule['v64'],
	v64Test: testStorage.transferLimitUnlockSchedule['v64'],
	v85Dev: devStorage.transferLimitUnlockSchedule['v85'],
}

export const limitedAssets = {
	name: 'BridgeProxy.LimitedAssets',
	v64: productionStorage.limitedAssets['v64'],
	v64Stage: stageStorage.limitedAssets['v64'],
	v64Test: testStorage.limitedAssets['v64'],
	v85Dev: devStorage.limitedAssets['v85'],
}
