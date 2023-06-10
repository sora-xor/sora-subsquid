import { Block, CallEntity } from '../processor'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

type SpecificCallItem<T extends CallEntity['name']> = CallItem<T, true>;

export function getAllCallsByExtrinsicHash<T extends (CallEntity['name'] | CallEntity['name'][])>(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): CallItem<T extends CallEntity['name'] ? T : T[0], true>[] {
	const calls = block.items.filter(
		c => c.kind === 'call'
		&& c.name !== '*'
		&& c.extrinsic.hash === extrinsicHash
	)
	return calls as unknown as CallItem<T extends CallEntity['name'] ? T : T[0], true>[]
}

export function findCallsByExtrinsicHash<T extends CallEntity['name'][]>(
	callNames: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): { [K in T[number]]: SpecificCallItem<K> }[T[number]][] {
	const calls = block.items.filter(
		c => c.kind === 'call'
		&& c.name !== '*'
		&& (
			(typeof callNames === 'string' && callNames === c.name)
			|| (Array.isArray(callNames) && callNames.includes(c.name))
		)
		&& c.extrinsic.hash === extrinsicHash
	)
	return calls as { [K in T[number]]: SpecificCallItem<K> }[T[number]][];
}

export function findCallByExtrinsicHash<T extends CallEntity['name'][]>(
	callNames: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): { [K in T[number]]: SpecificCallItem<K> }[T[number]] | null {
	return findCallsByExtrinsicHash(callNames, block, extrinsicHash)[0] ?? null;
}
