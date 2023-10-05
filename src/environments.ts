export enum Environment {
	PRODUCTION = 'production',
	STAGE = 'stage',
	TEST = 'test',
	DEV = 'dev'
}

enum ScaleProfile {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

interface EnvironmentAddresses {
	name: string
	description: string
	version: number
	chain: string
	archive: string
	scaleProfiles: {
		postgres: ScaleProfile
		processor: ScaleProfile
		api: ScaleProfile
	}
}

type Environments = {
	[environment in Environment]: EnvironmentAddresses
}

const version = 1

export const environments: Environments = {
	[Environment.PRODUCTION]: {
		name: 'sora',
		description: 'Sora squid',
		version,
		chain: 'wss://mof2.sora.org',
		archive: 'https://sora.archive.subsquid.io/graphql',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.LARGE,
			api: ScaleProfile.LARGE,
		}
	},
	[Environment.STAGE]: {
		name: 'sora-stage',
		description: 'Sora stage squid',
		version,
		chain: 'wss://ws.framenode-7.s4.stg1.sora2.soramitsu.co.jp',
		archive: 'https://sora-testnet.archive.subsquid.io/graphql',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.SMALL,
			api: ScaleProfile.SMALL,
		}
	},
	[Environment.TEST]: {
		name: 'sora-test',
		description: 'Sora test squid',
		version,
		chain: 'wss://ws.framenode-1.v1.tst.sora2.soramitsu.co.jp',
		archive: 'https://subsquid.sq1.tst.sora2.soramitsu.co.jp/graphql',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.SMALL,
			api: ScaleProfile.SMALL,
		}
	},
	[Environment.DEV]: {
		name: 'sora-dev',
		description: 'Sora dev squid',
		version,
		chain: 'wss://ws.framenode-2.r0.dev.sora2.soramitsu.co.jp',
		archive: 'https://subsquid.sq1.dev.sora2.soramitsu.co.jp/graphql',
		scaleProfiles: {
			postgres: ScaleProfile.SMALL,
			processor: ScaleProfile.SMALL,
			api: ScaleProfile.SMALL,
		}
	},
}

export default environments