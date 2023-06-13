import { Block, CallEntity, CallItem } from '../processor'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'

type SpecificCallItem<T extends CallEntity['name']> = CallItem<T, true>;

export function getBlockCalls(block: Block): CallEntity[] {
	return block.items.filter(c => c.kind === 'call') as CallEntity[]
}

export function getAllCallsByExtrinsicHash(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): CallEntity[] {
	return getBlockCalls(block).filter(c => c.extrinsic.hash === extrinsicHash)
}

export function findCallsByExtrinsicHash<T extends CallEntity['name'][]>(
	callNames: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): { [K in T[number]]: SpecificCallItem<K> }[T[number]][] {
	const calls = getBlockCalls(block).filter(c =>
		(
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
