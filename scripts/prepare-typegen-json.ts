import typegenConfig from './utils/typegen'
	
const fs = require('fs')

const typegenJsonPath = './typegen.json'

async function buildTypegenJson() {
	fs.writeFileSync(typegenJsonPath, JSON.stringify(typegenConfig, null, 4))

	console.log(`${typegenJsonPath} successfully builded`)
}

buildTypegenJson().catch(console.error)
