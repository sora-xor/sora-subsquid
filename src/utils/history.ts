import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementCall } from '../model'
import { Block, Context, CallEntity } from '../processor'
import { formatU128ToBalance } from './assets'
import { getOrCreateAccountEntity } from './account'
import { networkSnapshotsStorage } from './network'
import { XOR } from './consts'
import { formatDateTimestamp, toAddress, toCamelCase } from './index'
import { nToU8a } from '@polkadot/util'
import { toJSON } from '@subsquid/util-internal-json'
import { findEventWithExtrinsic } from './events'
import { XorFeeFeeWithdrawnEvent } from '../types/generated/events'

const INCOMING_TRANSFER_METHODS = ['transfer', 'swap_transfer']

const getCallEntityNetworkFee = (ctx: Context, block: Block, callEntity: CallEntity): bigint => {
	const blockHeight = block.header.height
    const feeWithdrawnEventEntity = findEventWithExtrinsic('XorFee.FeeWithdrawn', block, callEntity.extrinsic.hash)
    if (feeWithdrawnEventEntity) {
        const feeWithdrawnEvent = new XorFeeFeeWithdrawnEvent(ctx, feeWithdrawnEventEntity.event)
        let feeAmount: bigint
        if (feeWithdrawnEvent.isV1) {
            feeAmount = feeWithdrawnEvent.asV1[1]
        } else {
            throw new Error(`[${blockHeight}] Unsupported spec`)
        }
        
        return feeAmount
    }
    return 0n
}

export const createHistoryElement = (ctx: Context, block: Block, callEntity: CallEntity): HistoryElement => {
    const historyElement = new HistoryElement()

	if (!block.header.validator) {
		throw Error('There is no block validator')
	}

    historyElement.id = callEntity.extrinsic.hash
    historyElement.blockHeight = BigInt(block.header.height)
    historyElement.blockHash = block.header.hash.toString()
    historyElement.module = toCamelCase(callEntity.name.split('.')[0])
    historyElement.method = toCamelCase(callEntity.name.split('.')[1])
    historyElement.address = toAddress(callEntity.extrinsic.signature?.address)
    historyElement.networkFee = formatU128ToBalance(getCallEntityNetworkFee(ctx, block, callEntity), XOR)
    historyElement.timestamp = formatDateTimestamp(new Date(block.header.timestamp))
	historyElement.updatedAtBlock = block.header.height

    const success = callEntity.extrinsic.success

    if (success) {
        historyElement.execution = new ExecutionResult({
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

        historyElement.execution = new ExecutionResult({
            success,
            error
        })
    }

    ctx.store.save(historyElement)
    return historyElement
}

export const addDataToHistoryElement = async (ctx: Context, block: Block, historyElement: HistoryElement, data: {} | null) => {
	historyElement.data = data ? toJSON(data) : null
	historyElement.updatedAtBlock = block.header.height

    await ctx.store.save(historyElement)
}

export const updateHistoryElementStats = async (ctx: Context, block: Block, historyElement: HistoryElement) => {
    const addresses = [historyElement.address.toString()]

    if (
        INCOMING_TRANSFER_METHODS.includes(historyElement.method.toString()) &&
        historyElement.data &&
        (historyElement.data as any)['to']
    ) {
        addresses.push(((historyElement.data as any)['to'] as string).toString())
    }

    // update accounts data
    for (const address of addresses) {
        const account = await getOrCreateAccountEntity(ctx, block, address)
        account.latestHistoryElement = historyElement
		account.updatedAtBlock = block.header.height
        ctx.store.save(account)
    }

    await networkSnapshotsStorage.updateTransactionsStats(ctx, block)
}