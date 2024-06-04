import * as productionCalls from '../../production/substrate-bridge-app/calls'
import * as stageCalls from '../../stage/substrate-bridge-app/calls'
import * as testCalls from '../../test/substrate-bridge-app/calls'


export const mint = {
	name: 'SubstrateBridgeApp.mint',
	v77: productionCalls.mint['v77'],
	v52Stage: stageCalls.mint['v52'],
	v52Test: testCalls.mint['v52'],
}

export const finalizeAssetRegistration = {
	name: 'SubstrateBridgeApp.finalize_asset_registration',
	v77: productionCalls.finalizeAssetRegistration['v77'],
	v52Stage: stageCalls.finalizeAssetRegistration['v52'],
	v52Test: testCalls.finalizeAssetRegistration['v52'],
}

export const incomingThischainAssetRegistration = {
	name: 'SubstrateBridgeApp.incoming_thischain_asset_registration',
	v77: productionCalls.incomingThischainAssetRegistration['v77'],
}

export const burn = {
	name: 'SubstrateBridgeApp.burn',
	v77: productionCalls.burn['v77'],
	v52Stage: stageCalls.burn['v52'],
	v52Test: testCalls.burn['v52'],
}

export const registerSidechainAsset = {
	name: 'SubstrateBridgeApp.register_sidechain_asset',
	v77: productionCalls.registerSidechainAsset['v77'],
	v52Stage: stageCalls.registerSidechainAsset['v52'],
	v57Stage: stageCalls.registerSidechainAsset['v57'],
	v59Stage: stageCalls.registerSidechainAsset['v59'],
	v52Test: testCalls.registerSidechainAsset['v52'],
	v57Test: testCalls.registerSidechainAsset['v57'],
	v59Test: testCalls.registerSidechainAsset['v59'],
}

export const updateTransactionStatus = {
	name: 'SubstrateBridgeApp.update_transaction_status',
	v77: productionCalls.updateTransactionStatus['v77'],
	v59Stage: stageCalls.updateTransactionStatus['v59'],
	v59Test: testCalls.updateTransactionStatus['v59'],
}

export const registerThischainAsset = {
	name: 'SubstrateBridgeApp.register_thischain_asset',
	v52Stage: stageCalls.registerThischainAsset['v52'],
	v57Stage: stageCalls.registerThischainAsset['v57'],
	v59Stage: stageCalls.registerThischainAsset['v59'],
	v52Test: testCalls.registerThischainAsset['v52'],
	v57Test: testCalls.registerThischainAsset['v57'],
	v59Test: testCalls.registerThischainAsset['v59'],
}

export const setTransferLimit = {
	name: 'SubstrateBridgeApp.set_transfer_limit',
	v57Stage: stageCalls.setTransferLimit['v57'],
	v57Test: testCalls.setTransferLimit['v57'],
}

export const addAssetidParaid = {
	name: 'SubstrateBridgeApp.add_assetid_paraid',
	v57Stage: stageCalls.addAssetidParaid['v57'],
	v57Test: testCalls.addAssetidParaid['v57'],
}

export const removeAssetidParaid = {
	name: 'SubstrateBridgeApp.remove_assetid_paraid',
	v57Stage: stageCalls.removeAssetidParaid['v57'],
	v57Test: testCalls.removeAssetidParaid['v57'],
}

export const setMinimumXcmIncomingAssetCount = {
	name: 'SubstrateBridgeApp.set_minimum_xcm_incoming_asset_count',
	v59Stage: stageCalls.setMinimumXcmIncomingAssetCount['v59'],
	v59Test: testCalls.setMinimumXcmIncomingAssetCount['v59'],
}
