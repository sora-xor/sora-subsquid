import * as productionEvents from '../../production/substrate-bridge-app/events'
import * as stageEvents from '../../stage/substrate-bridge-app/events'
import * as testEvents from '../../test/substrate-bridge-app/events'
import * as devEvents from '../../dev/substrate-bridge-app/events'


export const burned = {
	name: 'SubstrateBridgeApp.Burned',
	v77: productionEvents.burned['v77'],
	v77Stage: stageEvents.burned['v77'],
	v77Test: testEvents.burned['v77'],
	v85Dev: devEvents.burned['v85'],
}

export const minted = {
	name: 'SubstrateBridgeApp.Minted',
	v77: productionEvents.minted['v77'],
	v77Stage: stageEvents.minted['v77'],
	v77Test: testEvents.minted['v77'],
	v85Dev: devEvents.minted['v85'],
}

export const failedToMint = {
	name: 'SubstrateBridgeApp.FailedToMint',
	v77: productionEvents.failedToMint['v77'],
	v77Stage: stageEvents.failedToMint['v77'],
	v77Test: testEvents.failedToMint['v77'],
	v85Dev: devEvents.failedToMint['v85'],
}

export const assetRegistrationProceed = {
	name: 'SubstrateBridgeApp.AssetRegistrationProceed',
	v77: productionEvents.assetRegistrationProceed['v77'],
	v77Stage: stageEvents.assetRegistrationProceed['v77'],
	v77Test: testEvents.assetRegistrationProceed['v77'],
	v85Dev: devEvents.assetRegistrationProceed['v85'],
}

export const assetRegistrationFinalized = {
	name: 'SubstrateBridgeApp.AssetRegistrationFinalized',
	v77: productionEvents.assetRegistrationFinalized['v77'],
	v77Stage: stageEvents.assetRegistrationFinalized['v77'],
	v77Test: testEvents.assetRegistrationFinalized['v77'],
	v85Dev: devEvents.assetRegistrationFinalized['v85'],
}
