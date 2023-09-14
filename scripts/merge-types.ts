import fs from 'fs'
import ts from 'typescript'
import path from 'path'

type ClassName = string
type ClassPath = string
type ClassInfo = { path: ClassPath, versions: Set<number> }
type ClassList = Record<ClassName, ClassInfo[]>

import { Environment } from '../src/environments'

['calls', 'events', 'storage'].forEach((entityType) => {
	const entityTypeSingle = entityType.replace(/s$/, '')
	const entityTypeCapital = entityType.charAt(0).toUpperCase() + entityType.slice(1)
	const entityTypeSingleCapital = entityTypeSingle.charAt(0).toUpperCase() + entityTypeSingle.slice(1)

	const classes: ClassList = {}

	Object.values(Environment).forEach(environment => {
		const filePath = `src/types/generated/${environment}/${entityType}.ts`
		const content = fs.readFileSync(filePath, 'utf-8')
	const sourceFile = ts.createSourceFile(
		'temp.ts',
		content,
		ts.ScriptTarget.Latest,
		/*setParentNodes*/ true,
		ts.ScriptKind.TS
	)

	sourceFile.forEachChild((node) => {	
		if (ts.isClassDeclaration(node) && node.name) {
		const className = node.name!.getText()
		if (!classes[className]) {
			classes[className] = []
		}
		const classInfo: ClassInfo = { path: filePath, versions: new Set() }
		node.members.forEach(member => {
			if (ts.isPropertyDeclaration(member) || ts.isMethodDeclaration(member) || ts.isGetAccessorDeclaration(member)) {
			const name = member.name?.getText(sourceFile)
			const version = name?.match(/V(\d+)/)?.[1]
			if (version) {
				classInfo.versions.add(Number(version))
			}
			}
		})
		classes[className].push(classInfo)
		}
	})
	})

	const outputPath = path.resolve(__dirname, `../src/types/generated/${entityType}.ts`)
	const outputImports: string[] = []
	const outputData: string[] = []

	if (entityType === 'storage') {
		outputImports.push(`import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './${Environment.PRODUCTION}/support'`)
	} else {
		outputImports.push(`import {Chain, ChainContext, ${entityTypeSingleCapital}Context, ${entityTypeSingleCapital}, Result, Option} from './${Environment.PRODUCTION}/support'`)
	}

	Object.values(Environment).forEach((environment) => {
		const filePath = `./${environment}/${entityType}`
		outputImports.push(`import * as ${environment}${entityTypeCapital} from '${filePath}'`)
	})

	outputData.push('\n')

	Object.entries(classes).forEach(([className, classInfoArray]) => {
		if (entityType === 'storage') {
			outputData.push(`export class ${className} extends StorageBase {`)
		} else {
			outputData.push(`export class ${className} {`)
		}

		const environments = new Set(Object.values(Environment).filter(environment => {
			return classInfoArray.some(classInfo => {
				const match = classInfo.path.match(/\/(\w+)\/\w+.ts$/)
				return match ? match[1] === environment : false
			})
		}))

		environments.forEach(environment => {
			outputData.push(`\tprivate readonly ${environment}: ${environment}${entityTypeCapital}.${className}`)
		})
		outputData.push(``)

		if (entityType === 'storage') {
			outputData.push(`\tconstructor(ctx: ChainContext, ${entityTypeSingle}: Block) {`)
		} else {
			outputData.push(`\tconstructor(ctx: ChainContext, ${entityTypeSingle}: ${entityTypeSingleCapital}) {`)
		}
		if (entityType === 'storage') {
			outputData.push(`\t\tsuper(ctx, ${entityTypeSingle})`)
		}
		environments.forEach(environment => {
			outputData.push(`\t\tthis.${environment} = new ${environment}${entityTypeCapital}.${className}(ctx, ${entityTypeSingle})`)
		})
		outputData.push(`\t}`)
		outputData.push(``)

		classInfoArray.forEach(classInfo => {
			const match = classInfo.path.match(/\/(\w+)\/\w+.ts$/)
			const environment = match![1]
			const prefix = environment === Environment.PRODUCTION ? '' : environment.charAt(0).toUpperCase() + environment.slice(1)

			classInfo.versions.forEach(version => {
				outputData.push(`\tget is${prefix}V${version}(): ${environment}${entityTypeCapital}.${className}['isV${version}'] {`)
				outputData.push(`\t\treturn this.${environment}.isV${version}`)
				outputData.push('\t}')
				outputData.push(`\tget as${prefix}V${version}(): ${environment}${entityTypeCapital}.${className}['asV${version}'] {`)
				outputData.push(`\t\treturn this.${environment}.asV${version}`)
				outputData.push('\t}')
			})
		})

		outputData.push('}\n')
	})

	fs.writeFileSync(outputPath, [...outputImports, ...outputData].join('\n'))
})