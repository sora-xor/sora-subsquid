import * as productionEvents from '../../production/assets/events'
import * as stageEvents from '../../stage/assets/events'
import * as testEvents from '../../test/assets/events'
import * as devEvents from '../../dev/assets/events'


export const assetRegistered = {
	name: 'Assets.AssetRegistered',
	v1: productionEvents.assetRegistered['v1'],
	v42: productionEvents.assetRegistered['v42'],
	v1Stage: stageEvents.assetRegistered['v1'],
	v42Stage: stageEvents.assetRegistered['v42'],
	v1Test: testEvents.assetRegistered['v1'],
	v42Test: testEvents.assetRegistered['v42'],
	v85Dev: devEvents.assetRegistered['v85'],
}

export const transfer = {
	name: 'Assets.Transfer',
	v1: productionEvents.transfer['v1'],
	v42: productionEvents.transfer['v42'],
	v1Stage: stageEvents.transfer['v1'],
	v42Stage: stageEvents.transfer['v42'],
	v1Test: testEvents.transfer['v1'],
	v42Test: testEvents.transfer['v42'],
	v85Dev: devEvents.transfer['v85'],
}

export const mint = {
	name: 'Assets.Mint',
	v1: productionEvents.mint['v1'],
	v42: productionEvents.mint['v42'],
	v1Stage: stageEvents.mint['v1'],
	v42Stage: stageEvents.mint['v42'],
	v1Test: testEvents.mint['v1'],
	v42Test: testEvents.mint['v42'],
	v85Dev: devEvents.mint['v85'],
}

export const burn = {
	name: 'Assets.Burn',
	v1: productionEvents.burn['v1'],
	v42: productionEvents.burn['v42'],
	v1Stage: stageEvents.burn['v1'],
	v42Stage: stageEvents.burn['v42'],
	v1Test: testEvents.burn['v1'],
	v42Test: testEvents.burn['v42'],
	v85Dev: devEvents.burn['v85'],
}

export const assetSetNonMintable = {
	name: 'Assets.AssetSetNonMintable',
	v1: productionEvents.assetSetNonMintable['v1'],
	v42: productionEvents.assetSetNonMintable['v42'],
	v1Stage: stageEvents.assetSetNonMintable['v1'],
	v42Stage: stageEvents.assetSetNonMintable['v42'],
	v1Test: testEvents.assetSetNonMintable['v1'],
	v42Test: testEvents.assetSetNonMintable['v42'],
	v85Dev: devEvents.assetSetNonMintable['v85'],
}

export const assetUpdated = {
	name: 'Assets.AssetUpdated',
	v53: productionEvents.assetUpdated['v53'],
	v53Stage: stageEvents.assetUpdated['v53'],
	v53Test: testEvents.assetUpdated['v53'],
	v85Dev: devEvents.assetUpdated['v85'],
}
