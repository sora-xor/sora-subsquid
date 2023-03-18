import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { Block, CallEntity, Context } from '../../processor'
import { EthBridgeTransferToSidechainCall } from '../../types/calls'
import { findEventWithExtrinsic } from '../../utils/events'
import { EthBridgeRequestRegisteredEvent } from '../../types/events'
import { toHex } from '@subsquid/substrate-processor'

export async function soraEthTransferHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'EthBridge.transfer_to_sidechain') return

    ctx.log.debug('Caught SORA->ETH transfer extrinsic')

    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const call = new EthBridgeTransferToSidechainCall(ctx, callEntity.call)

    let rec: {
        assetId: Uint8Array,
        sidechainAddress: Uint8Array,
        amount: bigint
    }
    if (call.isV1) {
        const { assetId, to, amount } = call.asV1
        rec = { assetId, sidechainAddress: to, amount }
    } else if (call.isV42) {
        const { assetId, to, amount } = call.asV42
        rec = { assetId: assetId.code, sidechainAddress: to, amount }
    } else {
        throw new Error('Unsupported spec')
    }

    const { assetId, sidechainAddress, amount } = rec

    let details: {
        requestHash?: string,
        assetId: string,
        sidechainAddress: string,
        amount: string
    }
    if (historyElement.execution.success) {
        const soraEthTransferEventEntity = findEventWithExtrinsic('EthBridge.RequestRegistered', block, extrinsicHash)

        if (soraEthTransferEventEntity) {
            const soraEthTransferEvent = new EthBridgeRequestRegisteredEvent(ctx, soraEthTransferEventEntity.event)

            let requestHash: Uint8Array
            if (soraEthTransferEvent.isV1) {
                requestHash = soraEthTransferEvent.asV1
            } else {
                throw new Error('Unsupported spec')
            }

            details = {
                requestHash: toHex(requestHash),
                assetId: toHex(assetId),
                sidechainAddress: toHex(sidechainAddress),
                amount: formatU128ToBalance(amount, assetId)
            }
        } else {
            throw new Error('Cannot find event: EthBridge.RequestRegistered')
        }
    } else {
        details = {
            assetId: toHex(assetId),
            sidechainAddress: toHex(sidechainAddress),
            amount: formatU128ToBalance(amount, assetId)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)
    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx, historyElement.timestamp)

    ctx.log.debug(`===== Saved SORA->ETH transfer extrinsic with ${extrinsicHash} txid =====`)
}