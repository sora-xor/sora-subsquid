import { Context, Block, EventEntity } from '../processor'
import { EventItem } from '@subsquid/substrate-processor/src/interfaces/dataSelection'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { BalancesTransferEvent, TokensTransferEvent } from '../types/generated/events'
import { XOR } from './consts'
import { Address, AssetAmount, AssetId } from '../types'
import { toAddress, toAssetId } from '.'
import { unsupportedSpecError } from './error'

type SpecificEventItem<T extends EventEntity['name']> = EventItem<T, true>;

export function getBlockEvents(block: Block): EventEntity[] {
	return block.items.filter(c => c.kind === 'event') as EventEntity[]
}

export function findEventsByExtrinsicHash<T extends EventEntity['name'][]>(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash'],
	eventNames?: T,
): { [K in T[number]]: SpecificEventItem<K> }[T[number]][] {
	const events = getBlockEvents(block).filter(e =>
		(!eventNames || eventNames.includes(e.name))
		&& e.event.extrinsic?.hash === extrinsicHash
	)
	// TODO: get rid of this unknown type
	return events as unknown as { [K in T[number]]: SpecificEventItem<K> }[T[number]][];
}

export function findEventByExtrinsicHash<T extends EventEntity['name'][]>(
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash'],
	eventNames?: T,
): { [K in T[number]]: SpecificEventItem<K> }[T[number]] | null {
	return findEventsByExtrinsicHash(block, extrinsicHash, eventNames)[0] ?? null;
}

export const isXorTransferEvent = (e: EventEntity) => {
  	return e.name === 'Balances.Transfer'
}

export const isTokenTransferEvent = (e: EventEntity) => {
  	return e.name === 'Tokens.Transfer'
}

export const isAssetTransferEvent = (e: EventEntity): boolean => {
  	return isXorTransferEvent(e) || isTokenTransferEvent(e)
}

type TransferEventData = {
	assetId: AssetId,
	from: Address
	to: Address
	amount: bigint
}

export const getBalancesTransferEventData = (
	ctx: Context,
	block: Block,
	eventItem: EventItem<'Balances.Transfer', true>
): TransferEventData => {
	let eventRec: TransferEventData

	const event = new BalancesTransferEvent(ctx, eventItem.event)

	if (event.isV1) {
		const [ from, to, amount ] = event.asV1
		eventRec = {
			assetId: XOR,
			from: toAddress(from),
			to: toAddress(to),
			amount
		}
	} else if (event.isV42) {
		const { from, to, amount } = event.asV42
		eventRec = {
			assetId: XOR,
			from: toAddress(from),
			to: toAddress(to),
			amount
		}
	} else {
		throw unsupportedSpecError(block)
	}
	
	return eventRec
}

export const getTokensTransferEventData = (
	ctx: Context,
	block: Block,
	eventItem: EventItem<'Tokens.Transfer', true>
): TransferEventData => {
	let eventRec: TransferEventData

	const event = new TokensTransferEvent(ctx, eventItem.event)

	if (event.isV42) {
		const { currencyId, from, to, amount } = event.asV42
		eventRec = {
			assetId: toAssetId(currencyId.code),
			from: toAddress(from),
			to: toAddress(to),
			amount: amount as AssetAmount
		}
	} else {
		throw unsupportedSpecError(block)
	}
	
	return eventRec
}
	

export const getTransferEventData = (
	ctx: Context,
	block: Block,
	eventItem: EventItem<'Balances.Transfer', true> | EventItem<'Tokens.Transfer', true>
): TransferEventData => {
	if (eventItem.name === 'Balances.Transfer') {
		return getBalancesTransferEventData(ctx, block, eventItem)
	} else {
		return getTokensTransferEventData(ctx, block, eventItem)
	}
}
