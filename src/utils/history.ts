// import type { SubstrateExtrinsic } from "@subql/types";

import { ExecutionResult, ExecutionError, HistoryElement } from "../model"
import { Block, Context, CallEntity } from "../processor"
import { formatU128ToBalance } from './assets'
import { getOrCreateAccountEntity } from './account'
import { networkSnapshotsStorage } from './network'
import { XOR } from './consts'
import { formatDateTimestamp } from './index'
import { nToU8a } from '@polkadot/util'
import { toJSON } from '@subsquid/util-internal-json'
import { SubstrateExtrinsic } from "@subsquid/substrate-processor"
import { findEventWithExtrinsic } from "./events"
import { XorFeeFeeWithdrawnEvent } from "../types/events"

const INCOMING_TRANSFER_METHODS = ['transfer', 'swap_transfer']

const getCallEntityNetworkFee = (ctx: Context, block: Block, callEntity: CallEntity): bigint => {
    const feeWithdrawnEventEntity = findEventWithExtrinsic('XorFee.FeeWithdrawn', block, callEntity.extrinsic.hash)
    if (feeWithdrawnEventEntity) {
        const feeWithdrawnEvent = new XorFeeFeeWithdrawnEvent(ctx, feeWithdrawnEventEntity.event)
        let feeAmount: bigint
        if (feeWithdrawnEvent.isV1) {
            feeAmount = feeWithdrawnEvent.asV1[1]
        } else {
            throw new Error('Unsupported spec')
        }
        
        return feeAmount
    }
    return BigInt(0)
}

export const createHistoryElement = (ctx: Context, block: Block, callEntity: CallEntity): HistoryElement => {
    const element = new HistoryElement()

    element.id = callEntity.extrinsic.hash
    element.blockHeight = BigInt(block.header.height)
    element.blockHash = block.header.hash.toString()
    element.module = callEntity.name.split('.')[0]
    element.method = callEntity.name.split('.')[1]
    element.address = block.header.validator?.toString() ?? ''
    element.networkFee = formatU128ToBalance(getCallEntityNetworkFee(ctx, block, callEntity), XOR)
    element.timestamp = formatDateTimestamp(new Date(block.header.timestamp))

    const success = callEntity.extrinsic.success

    if (success) {
        element.execution = new ExecutionResult({
            success
        })
    } else {
        const error = callEntity.extrinsic.error.__kind === 'Module'
            ? new ExecutionError({
                moduleErrorId: nToU8a(callEntity.extrinsic.error.value.error).at(-1),
                moduleErrorIndex: callEntity.extrinsic.error.value.index
            })
            : new ExecutionError({
                nonModuleErrorMessage: JSON.stringify(callEntity.extrinsic.error)
            })

        element.execution = new ExecutionResult({
            success,
            error
        })
    }

    ctx.store.save(element)
    return element
}

export const getOrCreateHistoryElement = async (ctx: Context, block: Block, callEntity: CallEntity) => {
    let element = await ctx.store.get(HistoryElement, callEntity.extrinsic.hash)
    if (!element) {
        element = await createHistoryElement(ctx, block, callEntity)
    }
    return element
}

export const getHistoryElement = async (ctx: Context, extrinsicHash: SubstrateExtrinsic['hash']) => {
    let element = await ctx.store.get(HistoryElement, extrinsicHash) ?? null
    return element
}

export const addDataToHistoryElement = async (ctx: Context, historyElement: HistoryElement, details: any) => {
	historyElement.data = toJSON(details)

    await ctx.store.save(historyElement)
}

export const updateHistoryElementStats = async (ctx: Context, element: HistoryElement) => {
    const addresses = [element.address.toString()]
    const timestamp = element.timestamp

    if (
        INCOMING_TRANSFER_METHODS.includes(element.method.toString()) &&
        element.data &&
        (element.data as any)['to']
    ) {
        addresses.push(((element.data as any)['to'] as string).toString())
    }

    // update accounts data
    for (const address of addresses) {
        const account = await getOrCreateAccountEntity(ctx, address, timestamp)
        account.latestHistoryElement = element
        ctx.store.save(account)
    }

    await networkSnapshotsStorage.updateTransactionsStats(ctx, timestamp)
}