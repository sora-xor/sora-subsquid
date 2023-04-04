import { addDataToHistoryElement, getHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import { findEventWithExtrinsic, } from '../../utils/events'
import { Block, Context, EventEntity } from '../../processor'
import { BalancesTransferEvent, EthBridgeRequestRegisteredEvent, TokensTransferEvent } from '../../types/events'
import { XOR } from '../../utils/consts'
import { toHex } from '@subsquid/substrate-processor'
import { Address, AssetAmount } from '../../types'
import { toAddress } from '../../utils'
import { findCallWithExtrinsic } from '../../utils/calls'

export async function ethSoraTransferHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {

    if (eventEntity.event.name !== 'EthBridge.IncomingRequestFinalized' && eventEntity.event.name !== 'EthBridge.IncomingRequestFinalizationFailed') return
    if (!eventEntity.event.extrinsic) {
		throw new Error('There is no extrinsic in the event')
	}

    ctx.log.debug('Caught ETH->SORA transfer extrinsic')

    const extrinsicHash = eventEntity.event.extrinsic.hash
    const blockHeight = block.header.height

    let registeredRequestEventEntity = findEventWithExtrinsic('EthBridge.RequestRegistered', block, extrinsicHash)
    let tokensTransferEventEntity = findEventWithExtrinsic('Tokens.Transfer', block, extrinsicHash)
    let balancesTransferEventEntity = findEventWithExtrinsic('Balances.Transfer', block, extrinsicHash)

    if (!registeredRequestEventEntity) return

    const registeredRequestEvent = new EthBridgeRequestRegisteredEvent(ctx, registeredRequestEventEntity.event)

    let requestHash: string
	
    if (registeredRequestEvent.isV1) {
        requestHash = registeredRequestEvent.asV1[0].toString()
    } else {
        throw new Error(`[${blockHeight}] Unsupported spec`)
    }

    let details: {
        requestHash: string
        assetId: string
        amount: string
        to: string
    }

    if (tokensTransferEventEntity) {
        const tokensTransferEvent = new TokensTransferEvent(ctx, tokensTransferEventEntity.event)

        if (tokensTransferEvent.isV42) {
            const { currencyId, amount, to } = tokensTransferEvent.asV42

            details = {
                requestHash,
                assetId: toHex(currencyId.code),
                amount: amount.toString(),
                to: toHex(to),
            }
        } else {
            throw new Error(`[${blockHeight}] Unsupported spec`)
        }
    } else if (balancesTransferEventEntity) {
        const balancesTransferEvent = new BalancesTransferEvent(ctx, balancesTransferEventEntity.event)

        let eventRec: {
            amount: AssetAmount
            to: Address
        }
		
        if (balancesTransferEvent.isV1) {
            const [, to, amount] = balancesTransferEvent.asV1
            eventRec = {
                amount: amount as AssetAmount,
                to: toAddress(to)
            }
        } else if (balancesTransferEvent.isV42) {
            const { amount, to } = balancesTransferEvent.asV42
            eventRec = {
                amount: amount as AssetAmount,
                to: toAddress(to)
            }
        } else {
            throw new Error(`[${blockHeight}] Unsupported spec`)
        }

        details = {
            requestHash: requestHash.toString(),
            assetId: XOR,
            amount: eventRec.amount.toString(),
            to: eventRec.to,
        }

    } else {
        return
    }

	const callEntity = findCallWithExtrinsic('BridgeMultisig.as_multi', block, extrinsicHash)
	if (!callEntity) {
		throw new Error(`[${blockHeight}] Cannot find call "BridgeMultisig.as_multi" with extrinsic hash ${extrinsicHash}`)
	}

	const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
	await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx, historyElement.timestamp)

    ctx.log.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsicHash} txid =====`)
}