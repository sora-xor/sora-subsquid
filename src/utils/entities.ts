import { BlockContext, Call, Event } from '../types'
import { CallType as CallTypeProduction, EventType as EventTypeProduction } from '../types/generated/production/support'
import { CallType as CallTypeStage, EventType as EventTypeStage } from '../types/generated/stage/support'
import { CallType as CallTypeTest, EventType as EventTypeTest } from '../types/generated/test/support'
import { CallType as CallTypeDev, EventType as EventTypeDev } from '../types/generated/dev/support'
import { UnsupportedSpecError } from './errors'
import { getLog } from './logs'
import * as sts from '@subsquid/substrate-runtime/lib/sts'
import { calls as callsProduction, events as eventsProduction } from '../types/generated/production'
import { calls as callsStage, events as eventsStage } from '../types/generated/stage'
import { calls as callsTest, events as eventsTest } from '../types/generated/test'
import { calls as callsDev, events as eventsDev } from '../types/generated/dev'
import { assertDefined } from '.'

type VersionedObject = {
	[key: string]: any
}

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
} | {
	kind: 'storage',
}

type ExtractType<T> = T extends sts.Type<infer U> ? U : never;
export type ExtractCallType<T> = ExtractType<
	T extends CallTypeProduction<infer U> ? U
	: T extends CallTypeStage<infer U> ? U
	: T extends CallTypeTest<infer U> ? U
	: T extends CallTypeDev<infer U> ? U
	: never
>
export type ExtractEventType<T> = ExtractType<
	T extends EventTypeProduction<infer U> ? U
	: T extends EventTypeStage<infer U> ? U
	: T extends EventTypeTest<infer U> ? U
	: T extends EventTypeDev<infer U> ? U
	: never
>

type NarrowVersions<T, V extends readonly string[]> = {
	[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: K extends `v${infer R}`
		? R extends `${V[number]}`
			? K
			: never
		: never]: T[K]
}

function getVersionedObjectKeys(obj: any): string[] {
	return Object.keys(obj)
}

function getAllVersions(obj: any): readonly string[] {
	return getVersionedObjectKeys(obj)
		.filter((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
		.map((key) => key.slice(1))
}

function isVersionedObject(obj: any): obj is VersionedObject {
    const keys = getVersionedObjectKeys(obj)
    return keys.some((key) => key.startsWith('v') && !isNaN(parseInt(key.slice(1))))
}

function getDataFromVersionedObject<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): Exclude<T[keyof T], boolean> | null {
	if (!isVersionedObject(obj)) {
		throw new Error(`[${ctx.block.header.height}] Object does not conform to VersionedObject pattern`)
	}

	let entity = null

	switch (entityItem.kind) {
		case 'call':
			entity = entityItem.entity
			break
		case 'event':
			entity = entityItem.entity
			break
		case 'storage':
			entity = ctx.block.header
			break
	}

	for (const key of getVersionedObjectKeys(obj)) {
		if (obj[key].is(entity)) {
			return obj[key]
		}
	}

	return null
}

// Make sure to add "as const" after the versions array to properly narrow the entity object
export function narrowVersionedObject<T extends VersionedObject, V extends readonly string[]>(obj: T, versions: V): NarrowVersions<T, V> {
	const narrowed: any = {}

	versions.forEach((version) => {
		const vKey = `v${version}`
		narrowed[vKey] = obj[vKey as keyof T]
	})

	return narrowed as NarrowVersions<T, V>
}

export function findCurrentSpecVersion<T extends VersionedObject>(ctx: BlockContext, obj: T, entityItem: EntityItem): string | null {
	let entity = null

	switch (entityItem.kind) {
		case 'call':
			entity = entityItem.entity
			break
		case 'event':
			entity = entityItem.entity
			break
		case 'storage':
			entity = ctx.block.header
			break
	}

	for (const key of getVersionedObjectKeys(obj)) {
		if (key.startsWith('v') && !isNaN(parseInt(key[1])) && obj[key].is(entity) === true) {
			return key.slice(1)
		}
	}
	return null
}

type ExcludeVersions<T, V extends readonly string[]> = V extends []
	? T
	: {
			[K in Extract<keyof T, `v${string}`> as K extends `v${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: K extends `v${infer R}`
				? R extends `${V[number]}`
					? never
					: K
				: never]: T[K]
	  }

// Make sure to add "as const" after the versions array to properly narrow the entity object

export function getEntityRepresentation<T extends VersionedObject, V extends readonly string[] = [], C extends boolean = false>(
	ctx: BlockContext,
	types: T,
	entityItem: EntityItem,
	excludeVersions?: V,
	couldBeNull?: C,
): C extends true ? Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string> | null : Exclude<ExcludeVersions<T, V>[keyof ExcludeVersions<T, V>], string> {
	const allVersions = getAllVersions(types) as V
	// Exclude the specified versions
	const versions: V = excludeVersions
		? (allVersions.filter((v) => !excludeVersions.includes(v)) as readonly string[] as V)
		: (allVersions as V)

	const narrowedObject = narrowVersionedObject(types, versions)
	let data = getDataFromVersionedObject(ctx, narrowedObject, entityItem)

	if (data === null) {
		const specVersion = findCurrentSpecVersion(ctx, narrowedObject, entityItem)
		if (!specVersion) {
			getLog(ctx).error('No spec version found')
		}
		const unsupportedSpecError = new UnsupportedSpecError(ctx, { kind: entityItem.kind, name: types.name })
		if (entityItem.kind === 'call') {
			data = {
				decode(call: Call<any>) {
					return entityItem.entity.block._runtime.decodeJsonCallRecordArguments(call)
				}
			} as any
		} else if (entityItem.kind === 'event') {
			data = {
				decode(event: Event<any>) {
					return entityItem.entity.block._runtime.decodeJsonEventRecordArguments(event)
				}
			} as any
		} else {
			throw unsupportedSpecError
		}
		getLog(ctx).error(unsupportedSpecError.message)
	}
	if (data === null && !couldBeNull) {
		throw new Error(`[${ctx.block.header.height}] Entity data is null`)
	}

	return data as any
}

export function getStorageRepresentation<T extends VersionedObject, V extends readonly string[] = []>(
	ctx: BlockContext,
	types: T,
	excludeVersions?: V,
) {
	return getEntityRepresentation<T, V, true>(ctx, types, { kind: 'storage' }, excludeVersions, true)
}

export type CallsProduction = typeof callsProduction
export function getCallDataProduction<MO extends keyof CallsProduction, ME extends keyof CallsProduction[MO]>(ctx: BlockContext, module: MO, method: ME, call: Call<any>) {
	const type = callsProduction[module][method]
	type T = typeof type
	const data: ExtractCallType<Exclude<T[keyof T], string>> = call.block._runtime.decodeJsonCallRecordArguments(call)
	return data
}

export type CallsStage = typeof callsStage
export function getCallDataStage<MO extends keyof CallsStage, ME extends keyof CallsStage[MO]>(ctx: BlockContext, module: MO, method: ME, call: Call<any>) {
	const type = callsStage[module][method]
	type T = typeof type
	const data: ExtractCallType<Exclude<T[keyof T], string>> = call.block._runtime.decodeJsonCallRecordArguments(call)
	return data
}

export type CallsTest = typeof callsTest
export function getCallDataTest<MO extends keyof CallsTest, ME extends keyof CallsTest[MO]>(ctx: BlockContext, module: MO, method: ME, call: Call<any>) {
	const type = callsTest[module][method]
	type T = typeof type
	const data: ExtractCallType<Exclude<T[keyof T], string>> = call.block._runtime.decodeJsonCallRecordArguments(call)
	return data
}

export type CallsDev = typeof callsDev
export function getCallDataDev<MO extends keyof CallsDev, ME extends keyof CallsDev[MO]>(ctx: BlockContext, module: MO, method: ME, call: Call<any>) {
	const type = callsDev[module][method]
	type T = typeof type
	const data: ExtractCallType<Exclude<T[keyof T], string>> = call.block._runtime.decodeJsonCallRecordArguments(call)
	return data
}

type Calls = CallsProduction | CallsStage | CallsTest | CallsDev
export function getCallData<
	MO extends keyof Calls,
	ME extends keyof Calls[MO]
>(
	ctx: BlockContext,
	module: MO,
	method: ME,
	call: Call<any>
) {
	const dataProduction = getCallDataProduction(ctx, module, method, call)
	const dataStage = getCallDataStage(ctx, module, method, call)
	const dataTest = getCallDataTest(ctx, module, method, call)
	const dataDev = getCallDataDev(ctx, module, method, call)
	return dataProduction || dataStage || dataTest || dataDev
}

export function getCallDataDiffer<
	MOP extends keyof CallsProduction,
	MEP extends keyof CallsProduction[MOP],
	MOS extends keyof CallsStage,
	MES extends keyof CallsStage[MOS],
	MOT extends keyof CallsTest,
	MET extends keyof CallsTest[MOT],
	MOD extends keyof CallsDev,
	MED extends keyof CallsDev[MOD],
>(
	ctx: BlockContext,
	section: {
		production?: [MOP, MEP]
		stage?: [MOS, MES]
		test?: [MOT, MET]
		dev?: [MOD, MED]
	},
	call: Call<any>
) {
	const dataProduction = section.production ? getCallDataProduction(ctx, section.production[0], section.production[1], call) : null
	const dataStage = section.stage ? getCallDataStage(ctx, section.stage[0], section.stage[1], call) : null
	const dataTest = section.test ? getCallDataTest(ctx, section.test[0], section.test[1], call) : null
	const dataDev = section.dev ? getCallDataDev(ctx, section.dev[0], section.dev[1], call) : null
	const data = dataProduction || dataStage || dataTest || dataDev
	return data as Exclude<Exclude<typeof data, null>, never>
}

export type EventsProduction = typeof eventsProduction
export function getEventDataProduction<MO extends keyof EventsProduction, ME extends keyof EventsProduction[MO]>(ctx: BlockContext, module: MO, method: ME, event: Event<any>) {
	const type = eventsProduction[module][method]
	type T = typeof type
	const data: ExtractEventType<Exclude<T[keyof T], string>> = event.block._runtime.decodeJsonEventRecordArguments(event)
	return data
}

export type EventsStage = typeof eventsStage
export function getEventDataStage<MO extends keyof EventsStage, ME extends keyof EventsStage[MO]>(ctx: BlockContext, module: MO, method: ME, event: Event<any>) {
	const type = eventsStage[module][method]
	type T = typeof type
	const data: ExtractEventType<Exclude<T[keyof T], string>> = event.block._runtime.decodeJsonEventRecordArguments(event)
	return data
}

export type EventsTest = typeof eventsTest
export function getEventDataTest<MO extends keyof EventsTest, ME extends keyof EventsTest[MO]>(ctx: BlockContext, module: MO, method: ME, event: Event<any>) {
	const type = eventsTest[module][method]
	type T = typeof type
	const data: ExtractEventType<Exclude<T[keyof T], string>> = event.block._runtime.decodeJsonEventRecordArguments(event)
	return data
}

export type EventsDev = typeof eventsDev
export function getEventDataDev<MO extends keyof EventsDev, ME extends keyof EventsDev[MO]>(ctx: BlockContext, module: MO, method: ME, event: Event<any>) {
	const type = eventsDev[module][method]
	type T = typeof type
	const data: ExtractEventType<Exclude<T[keyof T], string>> = event.block._runtime.decodeJsonEventRecordArguments(event)
	return data
}

type Events = EventsProduction | EventsStage | EventsTest | EventsDev
export function getEventData<
	MO extends keyof Events,
	ME extends keyof Events[MO]
>(
	ctx: BlockContext,
	module: MO,
	method: ME,
	event: Event<any>
) {
	const dataProduction = getEventDataProduction(ctx, module, method, event)
	const dataStage = getEventDataStage(ctx, module, method, event)
	const dataTest = getEventDataTest(ctx, module, method, event)
	const dataDev = getEventDataDev(ctx, module, method, event)
	return dataProduction || dataStage || dataTest || dataDev
}

export function getEventDataDiffer<
	MOP extends keyof EventsProduction,
	MEP extends keyof EventsProduction[MOP],
	MOS extends keyof EventsStage,
	MES extends keyof EventsStage[MOS],
	MOT extends keyof EventsTest,
	MET extends keyof EventsTest[MOT],
	MOD extends keyof EventsDev,
	MED extends keyof EventsDev[MOD],
>(
	ctx: BlockContext,
	section: {
		production?: [MOP, MEP]
		stage?: [MOS, MES]
		test?: [MOT, MET]
		dev?: [MOD, MED]
	},
	event: Event<any>
) {
	const dataProduction = section.production ? getEventDataProduction(ctx, section.production[0], section.production[1], event) : null
	const dataStage = section.stage ? getEventDataStage(ctx, section.stage[0], section.stage[1], event) : null
	const dataTest = section.test ? getEventDataTest(ctx, section.test[0], section.test[1], event) : null
	const dataDev = section.dev ? getEventDataDev(ctx, section.dev[0], section.dev[1], event) : null
	const data = dataProduction || dataStage || dataTest || dataDev
	return data as Exclude<Exclude<typeof data, null>, never>
}




type Environment = 'production' | 'stage' | 'test' | 'dev';

// Use generic types to capture the environment and event types
export function getScheme<E extends Environment, T, D>(
  environments: E[],
  module: T,
  method: D
): Record<E, [T, D]> {
  const scheme: Record<E, [T, D]> = {} as Record<E, [T, D]>

  environments.forEach(env => {
    scheme[env] = [module, method]
  })

  return scheme
}

// Example usage
const result1 = getScheme(['production', 'stage', 'test', 'dev'], 'orderBook', 'limitOrderPlaced')
console.log(result1)

const result2 = getScheme(['production', 'test', 'dev'], 'orderBook', 'limitOrderCanceled')
console.log(result2)
