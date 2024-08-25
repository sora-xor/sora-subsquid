export enum Chain {
	PRODUCTION = 'production',
	STAGE = 'stage',
	TEST = 'test',
	DEV = 'dev',
}

enum ScaleProfile {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

type ApiReplicas = number

interface ChainAddresses {
	name: string
	description: string
	version: number
	chain: string
	archive: string | null
	storage: string
	scaleProfiles: {
		postgres: ScaleProfile
		processor: ScaleProfile
		api: ScaleProfile
	}
	apiReplicas: number
}

type Chains = {
	[chain in Chain]: ChainAddresses
}

const version = 5

export const chains: Chains = {
	[Chain.PRODUCTION]: {
		name: 'sora',
		description: 'Sora squid',
		version,
		chain: 'wss://mof2.sora.org',
		archive: 'sora',
		storage: '100G',
		scaleProfiles: {
			postgres: ScaleProfile.LARGE,
			processor: ScaleProfile.LARGE,
			api: ScaleProfile.LARGE,
		},
		apiReplicas: 2
	},
	[Chain.STAGE]: {
		name: 'sora-stage',
		description: 'Sora stage squid',
		version,
		chain: 'wss://ws.framenode-8.s5.stg1.sora2.soramitsu.co.jp',
		archive: null,
		storage: '100G',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.SMALL,
			api: ScaleProfile.SMALL,
		},
		apiReplicas: 1
	},
	[Chain.TEST]: {
		name: 'sora-test',
		description: 'Sora test squid',
		version: 1,
		chain: 'wss://ws.framenode-1.r0.tst.sora2.soramitsu.co.jp',
		archive: null,
		storage: '100G',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.SMALL,
			api: ScaleProfile.SMALL,
		},
		apiReplicas: 1
	},
	[Chain.DEV]: {
		name: 'sora-dev',
		description: 'Sora dev squid',
		version: 1,
		chain: 'wss://ws.framenode-2.r0.dev.sora2.soramitsu.co.jp',
		archive: null,
		storage: '10G',
		scaleProfiles: {
			postgres: ScaleProfile.LARGE,
			processor: ScaleProfile.LARGE,
			api: ScaleProfile.LARGE,
		},
		apiReplicas: 1
	},
}

export default chains
