import { Block, CallItem, CallItemName } from '../types'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'

type SpecificCallItem<T extends CallItemName> = CallItem<T>;

export function getBlockCalls(block: Block): CallItem<CallItemName>[] {
	return block.items.filter(c => c.kind === 'call') as CallItem<CallItemName>[]
}

export function findCallsByExtrinsicHash<T extends CallItemName[]>(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash'],
	callNames?: T,
): { [K in T[number]]: SpecificCallItem<K> }[T[number]][] {
	const calls = getBlockCalls(block).filter(c =>
		(!callNames || callNames.includes(c.name))
		&& c.extrinsic?.hash === extrinsicHash
	)
	// TODO: get rid of this unknown type
	return calls as unknown as { [K in T[number]]: SpecificCallItem<K> }[T[number]][];
}

export function findCallByExtrinsicHash<T extends CallItemName[]>(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash'],
	callNames?: T,
): { [K in T[number]]: SpecificCallItem<K> }[T[number]] | null {
	return findCallsByExtrinsicHash(block, extrinsicHash, callNames)[0] ?? null;
}
