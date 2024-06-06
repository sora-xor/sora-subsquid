import * as devEvents from '../../dev/beefy-light-client/events'


export const verificationSuccessful = {
	name: 'BeefyLightClient.VerificationSuccessful',
	v85Dev: devEvents.verificationSuccessful['v85'],
}

export const newMmrRoot = {
	name: 'BeefyLightClient.NewMMRRoot',
	v85Dev: devEvents.newMmrRoot['v85'],
}

export const validatorRegistryUpdated = {
	name: 'BeefyLightClient.ValidatorRegistryUpdated',
	v85Dev: devEvents.validatorRegistryUpdated['v85'],
}
