import { writeFileSync } from 'fs'
import YAML from 'js-yaml'
import dotenv from 'dotenv'

import { Environment, environments } from '../src/environments'

dotenv.config()

// Obtain environment from npm parameters if provided
let environment: Environment = (process.argv[2] as Environment || process.env.INDEXER_ENVIRONMENT as Environment) || Environment.DEV 

// if provided environment does not match with know environments, default to DEV
if (!Object.values(Environment).includes(environment)) {
    environment = Environment.DEV;
}

// Obtain environment details
const details = environments[environment]

const version = process.env.npm_package_version

// Create yaml configuration
const configuration = {
	manifestVersion: 'subsquid.io/v0.1',
	name: details.name,
	version,
	description: details.description,
	deploy: {
		addons: {
			postgres: {}
		},
		processor: {
			env: {
				INDEXER_ENVIRONMENT: environment,
				INDEXER_START_BLOCK: 0,
				SQD_DEBUG: 'sqd:processor:mapping'
			},
			cmd: ['node', 'lib/processor']
		},
		api: {
			cmd: [
				'npx', 
				'squid-graphql-server', 
				'--subscriptions',
				'--dumb-cache',
				'in-memory',
				'--dumb-cache-ttl',
				'1000',
				'--dumb-cache-size',
				'100',
				'--dumb-cache-max-age', 
				'1000',
			]
		}
	},
	scale: {
		dedicated: true,
		addons: {
			postgres: {
				profile: details.scaleProfiles.postgres
			}
		},
		processor: {
			profile: details.scaleProfiles.processor
		},
		api: {
			profile: details.scaleProfiles.api
		}
	}
}

// Translate JSON to YAML
const yamlConfig = YAML.dump(configuration)

// Write the configuration to a yaml file
writeFileSync('./squid.yaml', yamlConfig)