import * as devStorage from '../../dev/beefy-light-client/storage'


export const latestMmrRoots = {
	name: 'BeefyLightClient.LatestMmrRoots',
	v85Dev: devStorage.latestMmrRoots['v85'],
}

export const latestBeefyBlock = {
	name: 'BeefyLightClient.LatestBeefyBlock',
	v85Dev: devStorage.latestBeefyBlock['v85'],
}

export const latestRandomSeed = {
	name: 'BeefyLightClient.LatestRandomSeed',
	v85Dev: devStorage.latestRandomSeed['v85'],
}

export const currentValidatorSet = {
	name: 'BeefyLightClient.CurrentValidatorSet',
	v85Dev: devStorage.currentValidatorSet['v85'],
}

export const nextValidatorSet = {
	name: 'BeefyLightClient.NextValidatorSet',
	v85Dev: devStorage.nextValidatorSet['v85'],
}

export const thisNetworkId = {
	name: 'BeefyLightClient.ThisNetworkId',
	v85Dev: devStorage.thisNetworkId['v85'],
}
