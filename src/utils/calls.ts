import { Block, CallEntity } from '../processor'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export function findCallsWithExtrinsic<T extends (CallEntity['name'] | CallEntity['name'][])>(
	callName: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): CallItem<T extends CallEntity['name'] ? T : T[0], true>[] {
	const calls = block.items.filter(
		c => c.kind === 'call'
		&& c.name !== '*'
		&& (
			(typeof callName === 'string' && callName === c.name)
			|| (Array.isArray(callName) && callName.includes(c.name))
		)
		&& c.extrinsic.hash === extrinsicHash
	)
	return calls as unknown as CallItem<T extends CallEntity['name'] ? T : T[0], true>[]
}

export function findCallWithExtrinsic<T extends (CallEntity['name'] | CallEntity['name'][])>(
	callName: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): CallItem<T extends CallEntity['name'] ? T : T[0], true> | null {
	return findCallsWithExtrinsic(callName, block, extrinsicHash)[0] ?? null
}