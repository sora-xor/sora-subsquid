import * as productionCalls from '../../production/substrate-bridge-app/calls'
import * as stageCalls from '../../stage/substrate-bridge-app/calls'
import * as testCalls from '../../test/substrate-bridge-app/calls'
import * as devCalls from '../../dev/substrate-bridge-app/calls'


export const mint = {
	name: 'SubstrateBridgeApp.mint',
	v77: productionCalls.mint['v77'],
	v84: productionCalls.mint['v84'],
	v77Stage: stageCalls.mint['v77'],
	v84Stage: stageCalls.mint['v84'],
	v77Test: testCalls.mint['v77'],
	v84Test: testCalls.mint['v84'],
	v85Dev: devCalls.mint['v85'],
}

export const finalizeAssetRegistration = {
	name: 'SubstrateBridgeApp.finalize_asset_registration',
	v77: productionCalls.finalizeAssetRegistration['v77'],
	v77Stage: stageCalls.finalizeAssetRegistration['v77'],
	v77Test: testCalls.finalizeAssetRegistration['v77'],
	v85Dev: devCalls.finalizeAssetRegistration['v85'],
}

export const incomingThischainAssetRegistration = {
	name: 'SubstrateBridgeApp.incoming_thischain_asset_registration',
	v77: productionCalls.incomingThischainAssetRegistration['v77'],
	v77Stage: stageCalls.incomingThischainAssetRegistration['v77'],
	v77Test: testCalls.incomingThischainAssetRegistration['v77'],
	v85Dev: devCalls.incomingThischainAssetRegistration['v85'],
}

export const burn = {
	name: 'SubstrateBridgeApp.burn',
	v77: productionCalls.burn['v77'],
	v77Stage: stageCalls.burn['v77'],
	v77Test: testCalls.burn['v77'],
	v85Dev: devCalls.burn['v85'],
}

export const registerSidechainAsset = {
	name: 'SubstrateBridgeApp.register_sidechain_asset',
	v77: productionCalls.registerSidechainAsset['v77'],
	v77Stage: stageCalls.registerSidechainAsset['v77'],
	v77Test: testCalls.registerSidechainAsset['v77'],
	v85Dev: devCalls.registerSidechainAsset['v85'],
}

export const updateTransactionStatus = {
	name: 'SubstrateBridgeApp.update_transaction_status',
	v77: productionCalls.updateTransactionStatus['v77'],
	v77Stage: stageCalls.updateTransactionStatus['v77'],
	v77Test: testCalls.updateTransactionStatus['v77'],
	v85Dev: devCalls.updateTransactionStatus['v85'],
}
