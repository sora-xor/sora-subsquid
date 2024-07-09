import * as devStorage from '../../dev/evm-fungible-app/storage'


export const appAddresses = {
	name: 'EvmFungibleApp.AppAddresses',
	v85Dev: devStorage.appAddresses['v85'],
}

export const assetKinds = {
	name: 'EvmFungibleApp.AssetKinds',
	v85Dev: devStorage.assetKinds['v85'],
}

export const tokenAddresses = {
	name: 'EvmFungibleApp.TokenAddresses',
	v85Dev: devStorage.tokenAddresses['v85'],
}

export const assetsByAddresses = {
	name: 'EvmFungibleApp.AssetsByAddresses',
	v85Dev: devStorage.assetsByAddresses['v85'],
}

export const sidechainPrecision = {
	name: 'EvmFungibleApp.SidechainPrecision',
	v85Dev: devStorage.sidechainPrecision['v85'],
}

export const collectedFees = {
	name: 'EvmFungibleApp.CollectedFees',
	v85Dev: devStorage.collectedFees['v85'],
}

export const baseFees = {
	name: 'EvmFungibleApp.BaseFees',
	v85Dev: devStorage.baseFees['v85'],
}

export const spentFees = {
	name: 'EvmFungibleApp.SpentFees',
	v85Dev: devStorage.spentFees['v85'],
}
