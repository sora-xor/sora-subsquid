export enum Environment {
	PRODUCTION = 'production',
	STAGE = 'stage',
	DEV = 'dev'
}

interface EnvironmentAddresses {
	chain: string
	archive: string
}

type Environments = {
	[environment in Environment]: EnvironmentAddresses
}

export const environments: Environments = {
	[Environment.PRODUCTION]: {
		chain: 'wss://mof2.sora.org',
		archive: 'https://sora.archive.subsquid.io/graphql'
	},
	[Environment.STAGE]: {
		chain: 'wss://ws.framenode-7.s4.stg1.sora2.soramitsu.co.jp',
		archive: 'https://sora-testnet.archive.subsquid.io/graphql'
	},
	[Environment.DEV]: {
		chain: 'wss://ws.framenode-1.r0.dev.sora2.soramitsu.co.jp"',
		archive: 'https://subsquid.sq1.dev.sora2.soramitsu.co.jp/graphql'
	},
}

export default environments