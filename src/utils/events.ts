import { BlockContext, Event, EventName } from '../types'
import { XOR } from './consts'
import { Address, AssetAmount, AssetId } from '../types'
import { toAddress } from '.'
import { getAssetId } from './assets'
import { CannotFindEventError } from './errors'
import { events } from '../types/generated/merged'
import { getEventData } from './entities'

type SpecificEvent<T extends EventName> = Event<T>

export type TransferEventData = {
	assetId: AssetId
	from: Address
	to: Address
	amount: bigint
}

export type DepositEventData = {
	assetId: AssetId
	to: Address
	amount: bigint
}

export function findEventsByExtrinsicHash<T extends EventName[]>(
	ctx: BlockContext,
	extrinsicHash: string,
	eventNames?: T,
): { [K in T[number]]: SpecificEvent<K> }[T[number]][] {
	const events = ctx.block.events.filter(
		(e) => (!eventNames || eventNames.includes(e.name as any)) && e.extrinsic?.hash === extrinsicHash,
	)
	// TODO: get rid of this unknown type
	return events as unknown as {
		[K in T[number]]: SpecificEvent<K>
	}[T[number]][]
}

export function findEventByExtrinsicHash<T extends EventName[], F extends boolean>(
	ctx: BlockContext,
	extrinsicHash: string,
	eventNames?: T,
	throwError?: F,
): F extends true ? { [K in T[number]]: SpecificEvent<K> }[T[number]] : { [K in T[number]]: SpecificEvent<K> }[T[number]] | null {
	const event = findEventsByExtrinsicHash(ctx, extrinsicHash, eventNames)[0] ?? null
	// if (event) {
	// 	getUtilsLog(ctx).debug(`The '${event.name}' event found`)
	// } else {
	// 	getUtilsLog(ctx).debug(
	// 		eventNames?.length === 1 ? `The '${eventNames[0]}' event not found` : `Events not found: ${eventNames?.join(', ')}`,
	// 	)
	// }
	if ((throwError as boolean) && event === null) {
		throw new CannotFindEventError(ctx, extrinsicHash, eventNames ?? '')
	}
	return event
}

export const isXorTransferEvent = (e: Event<EventName>) => {
	return e.name === 'Balances.Transfer'
}

export const isTokenTransferEvent = (e: Event<EventName>) => {
	return e.name === 'Tokens.Transfer'
}

export const isAssetTransferEvent = (e: Event<EventName>): boolean => {
	return isXorTransferEvent(e) || isTokenTransferEvent(e)
}

export const getBalancesTransferEventData = (ctx: BlockContext, event: Event<'Balances.Transfer'>): TransferEventData => {
	const data = getEventData(ctx, events.balances.transfer, event)

	return {
		assetId: XOR,
		from: toAddress('from' in data ? data.from : data[0]),
		to: toAddress('to' in data ? data.to : data[1]),
		amount: ('amount' in data ? data.amount : data[2]) as AssetAmount,
	}
}

export const getTokensTransferEventData = (ctx: BlockContext, event: Event<'Tokens.Transfer'>): TransferEventData => {
	const { currencyId, from, to, amount } = getEventData(ctx, events.tokens.transfer, event)

	return {
		assetId: getAssetId(currencyId),
		from: toAddress(from),
		to: toAddress(to),
		amount: amount as AssetAmount,
	}
}

export const getCurrenciesTransferredEventData = (ctx: BlockContext, event: Event<'Currencies.Transferred'>): TransferEventData => {
	const [ currencyId, from, to, amount ] = getEventData(ctx, events.currencies.transferred, event)

	// TODO: check if currencyId exists

	return {
		assetId: getAssetId(currencyId),
		from: toAddress(from),
		to: toAddress(to),
		amount: amount as AssetAmount,
	}
}

export const getAssetsTransferEventData = (
	ctx: BlockContext,
	event: Event<'Balances.Transfer'> | Event<'Tokens.Transfer'> | Event<'Currencies.Transferred'>,
): TransferEventData => {
	if (event.name === 'Balances.Transfer') {
		return getBalancesTransferEventData(ctx, event)
	} else if (event.name === 'Tokens.Transfer') {
		return getTokensTransferEventData(ctx, event)
	} else {
		return getCurrenciesTransferredEventData(ctx, event)
	}
}

export const getBalancesDepositEventData = (ctx: BlockContext, event: Event<'Balances.Deposit'>): DepositEventData => {
	const data = getEventData(ctx, events.balances.deposit, event)

	return {
		assetId: XOR,
		to: toAddress('who' in data ? data.who : data[0]),
		amount: ('amount' in data ? data.amount : data[1]) as AssetAmount,
	}
}

export const getTokensDepositedEventData = (ctx: BlockContext, event: Event<'Tokens.Deposited'>): DepositEventData => {
	const { currencyId, who, amount } = getEventData(ctx, events.tokens.deposited, event)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getCurrenciesDepositedEventData = (ctx: BlockContext, event: Event<'Currencies.Deposited'>): DepositEventData => {
	const [ currencyId, who, amount ] = getEventData(ctx, events.currencies.deposited, event)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getAssetsDepositEventData = (
	ctx: BlockContext,
	event: Event<'Balances.Deposit'> | Event<'Tokens.Deposited'> | Event<'Currencies.Deposited'>,
): DepositEventData => {
	if (event.name === 'Balances.Deposit') {
		return getBalancesDepositEventData(ctx, event)
	} else if (event.name === 'Tokens.Deposited') {
		return getTokensDepositedEventData(ctx, event)
	} else if (event.name === 'Currencies.Deposited'){
		return getCurrenciesDepositedEventData(ctx, event)
	} else {
		throw new Error(`Unknown event name: ${event.name}`)
	}
}

export const getBalancesWithdrawnEventData = (ctx: BlockContext, event: Event<'Balances.Withdraw'>): DepositEventData => {
	const data = getEventData(ctx, events.balances.withdraw, event)

	return {
		assetId: XOR,
		to: toAddress('who' in data ? data.who : data[0]),
		amount: ('amount' in data ? data.amount : data[1]) as AssetAmount,
	}
}

export const getTokensWithdrawnEventData = (ctx: BlockContext, event: Event<'Tokens.Withdrawn'>): DepositEventData => {
	const { currencyId, who, amount } = getEventData(ctx, events.tokens.withdrawn, event)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getCurrenciesWithdrawnEventData = (ctx: BlockContext, event: Event<'Currencies.Withdrawn'>): DepositEventData => {
	const [ currencyId, who, amount ] = getEventData(ctx, events.currencies.withdrawn, event)

	return {
		assetId: getAssetId(currencyId),
		to: toAddress(who),
		amount: amount as AssetAmount,
	}
}

export const getAssetsWithdrawnEventData = (
	ctx: BlockContext,
	event: Event<'Balances.Withdraw'> | Event<'Tokens.Withdrawn'> | Event<'Currencies.Withdrawn'>,
): DepositEventData => {
	if (event.name === 'Balances.Withdraw') {
		return getBalancesWithdrawnEventData(ctx, event)
	} else if (event.name === 'Tokens.Withdrawn') {
		return getTokensWithdrawnEventData(ctx, event)
	} else if (event.name === 'Currencies.Withdrawn') {
		return getCurrenciesWithdrawnEventData(ctx, event)
	} else {
		throw new Error(`Unknown event name: ${event.name}`)
	}
}
