import { Block, EventEntity } from '../processor'
import assert from 'assert'
import { getAssetId } from '../utils/assets'
import { XOR } from './consts'
import { EventItem } from '@subsquid/substrate-processor/src/interfaces/dataSelection'
import { SubstrateExtrinsic } from '@subsquid/substrate-processor'

export function findEventsWithExtrinsic<T extends EventEntity['name']>(
  eventName: T,
  block: Block,
  extrinsicHash: SubstrateExtrinsic['hash']
): EventItem<T, true>[] {
  const event = block.items.find(
    e => e.kind === 'event'
    && e.name === eventName
    && e.event.extrinsic?.hash === extrinsicHash
  )
  if (event) {
    assert(event.kind === 'event')
    assert(event.name === eventName)
    // TODO: make it without unknown
    return [event as unknown as EventItem<T, true>]
  }
  return []
}

export function findEventEntityWithExtrinsic<T extends EventEntity['name']>(
  eventName: T,
  block: Block,
  extrinsicHash: SubstrateExtrinsic['hash']
): EventItem<T, true> | null {
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

export const getTransferEventData = (e: EventEntity) => {
  // TODO: Use generated types
  const { amount, to, from, currencyId } = (e.event as any).args
  const assetId = isXorTransferEvent(e) ? XOR : getAssetId(currencyId)

  // TODO: check it
  return {
    assetId,
    from: from, // .toString(),
    to: to, // .toString(),
    amount, // .toString(),
  }
}
