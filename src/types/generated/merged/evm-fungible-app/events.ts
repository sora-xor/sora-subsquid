import * as devEvents from '../../dev/evm-fungible-app/events'


export const burned = {
	name: 'EVMFungibleApp.Burned',
	v85Dev: devEvents.burned['v85'],
}

export const minted = {
	name: 'EVMFungibleApp.Minted',
	v85Dev: devEvents.minted['v85'],
}

export const refunded = {
	name: 'EVMFungibleApp.Refunded',
	v85Dev: devEvents.refunded['v85'],
}

export const assetRegistered = {
	name: 'EVMFungibleApp.AssetRegistered',
	v85Dev: devEvents.assetRegistered['v85'],
}

export const feesClaimed = {
	name: 'EVMFungibleApp.FeesClaimed',
	v85Dev: devEvents.feesClaimed['v85'],
}
