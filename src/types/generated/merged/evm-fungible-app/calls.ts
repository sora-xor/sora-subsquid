import * as devCalls from '../../dev/evm-fungible-app/calls'


export const mint = {
	name: 'EVMFungibleApp.mint',
	v85Dev: devCalls.mint['v85'],
}

export const registerAssetInternal = {
	name: 'EVMFungibleApp.register_asset_internal',
	v85Dev: devCalls.registerAssetInternal['v85'],
}

export const burn = {
	name: 'EVMFungibleApp.burn',
	v85Dev: devCalls.burn['v85'],
}

export const registerSidechainAsset = {
	name: 'EVMFungibleApp.register_sidechain_asset',
	v85Dev: devCalls.registerSidechainAsset['v85'],
}

export const registerExistingSidechainAsset = {
	name: 'EVMFungibleApp.register_existing_sidechain_asset',
	v85Dev: devCalls.registerExistingSidechainAsset['v85'],
}

export const registerThischainAsset = {
	name: 'EVMFungibleApp.register_thischain_asset',
	v85Dev: devCalls.registerThischainAsset['v85'],
}

export const registerNetwork = {
	name: 'EVMFungibleApp.register_network',
	v85Dev: devCalls.registerNetwork['v85'],
}

export const registerNetworkWithExistingAsset = {
	name: 'EVMFungibleApp.register_network_with_existing_asset',
	v85Dev: devCalls.registerNetworkWithExistingAsset['v85'],
}

export const claimRelayerFees = {
	name: 'EVMFungibleApp.claim_relayer_fees',
	v85Dev: devCalls.claimRelayerFees['v85'],
}
