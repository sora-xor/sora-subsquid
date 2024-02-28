import fs from 'fs'
import path from 'path'

import { Chain } from '../src/chains'
import { assertDefined } from '../src/utils'

type ObjectName = string
type ObjectInfo = {
	name: string,
	chain: Chain
	versions: number[]
}
type ObjectList = Record<ObjectName, ObjectInfo[]>

const toCamelCase = (s: string): string => {
	// Step 1: Trim the string
	const trimmedString = s.trim()

	// Step 2: Split the string
	const words = trimmedString.split(/[\s-_]+/)

	// Step 3: Transform the words
	let transformedWords: string[][] = words.map((word) => {
		if (word === word.toUpperCase()) {
			return [word.toLowerCase()]
		}
		// Make sure to always return an array of strings
		return word.split(/(?=[A-Z])/).map((part) => part.toLowerCase())
	})

	// Step 4: Flat the result array
	const flatWords: string[] = transformedWords.flat()

	// Step 5: Make all words lowercase
	const lowerCaseWords = flatWords.map((word) => word.toLowerCase())

	// Step 6: Make the first letter of each word uppercase, except for the first word
	const camelCaseWords = lowerCaseWords.map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))

	// Step 7: Join the words
	const finalString = camelCaseWords.join('')

	// Step 8: Return the result
	return finalString
}

const toPascalCase = (s: string): string => {
	const camelCase = toCamelCase(s)
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

try {
	fs.rmSync('src/types/generated/merged', { recursive: true })
} catch {}
fs.mkdirSync('src/types/generated/merged', { recursive: true })

const entityTypes = ['calls', 'events', 'storage']

fs.writeFileSync('src/types/generated/merged/index.ts', entityTypes.map((entityType) => `export * as ${entityType} from './${entityType}'`).join('\n'))

const chains = [
	Chain.PRODUCTION,
	...Object.values(Chain).filter((chain) => chain !== Chain.PRODUCTION),
]

const allModules = new Set<string>()

chains.forEach((chain) => {
	const files = fs.readdirSync(`src/types/generated/${chain}`)
	files.forEach(function (file) {
		if (!file.endsWith('.ts')) {
			allModules.add(file)
		}
	})
})

let maxProductionVersion = 0

const modules = Array.from(allModules).map((moduleName) => {
	if (moduleName) {
		fs.mkdirSync(`src/types/generated/merged/${moduleName}`, { recursive: true })
	}

	return {
		module: moduleName,
		data: entityTypes.map((entityType) => {
			const objects: ObjectList = {}
		
			chains.forEach((chain) => {
				const filePath = `src/types/generated/${chain}/${moduleName}/${entityType}.ts`
	
				let content = ''
				try {
					content = fs.readFileSync(filePath, 'utf-8')
				} catch {
					return
				}
				
				const objectCodeList = content.split(/(?=export const)/g)
		
				objectCodeList.forEach((objectCode) => {
					const versionCodeList = objectCode.split(/(?=v\d+: new)/g)
					const objectName = objectCode.match(/(?<=export const )(\w+)/)?.[0]
					if (!objectName) return
					const name = objectCode.match(/(?<=name: ')([\w\.]+)/)?.[0] ?? toPascalCase(moduleName) + '.' + toPascalCase(objectName)
					if (entityType !== 'storage' && !name) return
					if (!objects[objectName]) {
						objects[objectName] = []
					}
					const objectInfo: ObjectInfo = { name, chain, versions: [] }
					versionCodeList.forEach((versionCode) => {
						const versionMatch = versionCode.match(/v(\d+): new \w+Type\(/)?.[1]
						if (versionMatch) {

							const version = parseInt(versionMatch)
							objectInfo.versions.push(version)
							if (chain === Chain.PRODUCTION) {
								maxProductionVersion = Math.max(maxProductionVersion, version)
							}
						}
					})
					objects[objectName].push(objectInfo)
				})
			})
	
			return {
				entityType,
				objects
			}
		})
	}
})

modules.forEach((moduleInfo) => {
	moduleInfo.data.forEach((data) => {
		const { entityType, objects } = data

		if (Object.values(objects).length === 0) return

		const entityTypeCapital = entityType.charAt(0).toUpperCase() + entityType.slice(1)

		const outputPath = path.resolve(__dirname, `../src/types/generated/merged/${moduleInfo.module}/${entityType}.ts`)
		const outputImports: string[] = []
		const outputData: string[] = []
	
		Object.values(Chain).forEach((chain) => {
			if (Object.values(objects).some((data) => data.some((object) => object.chain === chain))) {
				outputImports.push(
					`import * as ${chain}${entityTypeCapital} from '../../${chain}/${moduleInfo.module}/${entityType}'`,
				)
			}
		})
	
		outputData.push('\n')
	
		Object.entries(objects).forEach(([objectName, objectInfoArray]) => {
			const versions: {
				chain: Chain
				version: number
			}[] = []

			objectInfoArray.forEach((objectInfo) => {
				objectInfo.versions.forEach((version) => {
					// if (objectInfo.chain !== Chain.PRODUCTION && version <= maxProductionVersion) {
					// 	return
					// }
					versions.push({
						chain: objectInfo.chain,
						version: version,
					})
				})
			})
	
			outputData.push(`export const ${objectName} = {`)
			outputData.push(`\tname: '${objectInfoArray[0].name}',`)

			versions.forEach((v) => {
				const { chain, version } = v
				const prefix = chain === Chain.PRODUCTION ? '' : chain.charAt(0).toUpperCase() + chain.slice(1)
				outputData.push(`\tv${version}${prefix}: ${chain}${entityTypeCapital}.${objectName}['v${version}'],`)
			})
	
			outputData.push('}\n')
		})
	
		fs.writeFileSync(outputPath, [...outputImports, ...outputData].join('\n'))
	})
})

entityTypes.forEach((entityType) => {
	const imports = modules.map((moduleInfo) => {
		if (Object.values(moduleInfo.data.filter(entity => entity.entityType === entityType)[0].objects).length > 0) {
			console.log(moduleInfo.module, entityType, moduleInfo.data.filter(entity => entity.entityType === entityType))
			return `export * as ${toCamelCase(moduleInfo.module)} from './${moduleInfo.module}/${entityType}'`
		}
	}).filter(item => item !== undefined) as string[]
	fs.writeFileSync(`src/types/generated/merged/${entityType}.ts`, imports.join('\n'))
})
