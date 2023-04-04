import { Context, Block, EventEntity } from '../processor'
import { EventItem } from '@subsquid/substrate-processor/src/interfaces/dataSelection'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { BalancesTransferEvent, TokensTransferEvent } from '../types/events'
import { XOR } from './consts'
import { Address, AssetAmount, AssetId } from '../types'
import { toAddress, toAssetId } from '.'

export function findEventsWithExtrinsic<T extends (EventEntity['name'] | EventEntity['name'][])>(
	eventName: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): EventItem<T extends EventEntity['name'] ? T : T[0], true>[] {
	const events = block.items.filter(
		e => e.kind === 'event'
		&& e.name !== '*'
		&& (
			(typeof eventName === 'string' && eventName === e.name)
			|| (Array.isArray(eventName) && eventName.includes(e.name))
		)
		&& e.event.extrinsic?.hash === extrinsicHash
	)
	return events as unknown as EventItem<T extends EventEntity['name'] ? T : T[0], true>[]
}

export function findEventWithExtrinsic<T extends (EventEntity['name'] | EventEntity['name'][])>(
	eventName: T,
	block: Block,
	extrinsicHash: SubstrateExtrinsic['hash']
): EventItem<T extends EventEntity['name'] ? T : T[0], true> | null {
  	return findEventsWithExtrinsic(eventName, block, extrinsicHash)[0] ?? null
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

export const getTransferEventData = (
	ctx: Context,
	eventEntity: EventItem<'Balances.Transfer' | 'Tokens.Transfer', true>
): TransferEventData => {
	let eventRec: TransferEventData

	if (eventEntity.name === 'Balances.Transfer') {
		const event = new BalancesTransferEvent(ctx, eventEntity.event)

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
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}
	} else {
		const event = new TokensTransferEvent(ctx, eventEntity.event)

		if (event.isV42) {
		const { currencyId, from, to, amount } = event.asV42
		eventRec = {
			assetId: toAssetId(currencyId.code),
			from: toAddress(from),
			to: toAddress(to),
			amount: amount as AssetAmount
		}
		} else {
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}
	}
	
	return eventRec
}
