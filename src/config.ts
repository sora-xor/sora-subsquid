import dotenv from 'dotenv'
import environments from './environments'

dotenv.config()

const environment = process.env.INDEXER_ENVIRONMENT || 'stage'
const environmentConfig = environments[environment as keyof typeof environments]

if (!environmentConfig) {
	throw new Error(`Environment ${environment} is not defined`)
}
 
export const { chain, archive } = environmentConfig
export const startBlock = process.env.INDEXER_START_BLOCK ? parseInt(process.env.INDEXER_START_BLOCK) : 0