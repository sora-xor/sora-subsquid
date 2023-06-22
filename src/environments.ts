enum Environment {
	PRODUCTION = 'production',
	STAGE = 'stage',
}

interface EnvironmentAddresses {
	chain: string
	archive: string
}

type Environments = {
	[environment in Environment]: EnvironmentAddresses
}

const environments: Environments = {
	[Environment.PRODUCTION]: {
		chain: 'wss://mof2.sora.org',
		archive: 'https://sora.archive.subsquid.io/graphql'
	},
	[Environment.STAGE]: {
		chain: 'wss://ws.framenode-7.s4.stg1.sora2.soramitsu.co.jp',
		archive: 'https://sora-testnet.archive.subsquid.io/graphql'
	}
}

export default environments