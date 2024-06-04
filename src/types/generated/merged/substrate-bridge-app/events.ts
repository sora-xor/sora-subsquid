import * as productionEvents from '../../production/substrate-bridge-app/events'
import * as stageEvents from '../../stage/substrate-bridge-app/events'
import * as testEvents from '../../test/substrate-bridge-app/events'


export const burned = {
	name: 'SubstrateBridgeApp.Burned',
	v77: productionEvents.burned['v77'],
	v52Stage: stageEvents.burned['v52'],
	v52Test: testEvents.burned['v52'],
}

export const minted = {
	name: 'SubstrateBridgeApp.Minted',
	v77: productionEvents.minted['v77'],
	v52Stage: stageEvents.minted['v52'],
	v52Test: testEvents.minted['v52'],
}

export const failedToMint = {
	name: 'SubstrateBridgeApp.FailedToMint',
	v77: productionEvents.failedToMint['v77'],
}

export const assetRegistrationProceed = {
	name: 'SubstrateBridgeApp.AssetRegistrationProceed',
	v77: productionEvents.assetRegistrationProceed['v77'],
}

export const assetRegistrationFinalized = {
	name: 'SubstrateBridgeApp.AssetRegistrationFinalized',
	v77: productionEvents.assetRegistrationFinalized['v77'],
}
