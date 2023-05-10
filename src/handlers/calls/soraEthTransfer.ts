import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { Block, CallEntity, Context } from '../../processor'
import { EthBridgeTransferToSidechainCall } from '../../types/generated/calls'
import { findEventWithExtrinsic } from '../../utils/events'
import { EthBridgeRequestRegisteredEvent } from '../../types/events'
import { toHex } from '@subsquid/substrate-processor'
import { AddressEthereum, AssetAmount, AssetId } from '../../types'
import { toAddressEthereum, toAssetId } from '../../utils'

export async function soraEthTransferHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'EthBridge.transfer_to_sidechain') return

    ctx.log.debug('Caught SORA->ETH transfer extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const call = new EthBridgeTransferToSidechainCall(ctx, callEntity.call)

    let rec: {
        assetId: AssetId,
        sidechainAddress: AddressEthereum,
        amount: AssetAmount
    }
    if (call.isV1) {
        const { assetId, to, amount } = call.asV1
        rec = {
			assetId: toAssetId(assetId),
			sidechainAddress: toAddressEthereum(to),
			amount: amount as AssetAmount
		}
    } else if (call.isV42) {
        const { assetId, to, amount } = call.asV42
        rec = {
			assetId: toAssetId(assetId.code),
			sidechainAddress: toAddressEthereum(to),
			amount: amount as AssetAmount
		}
    } else {
        throw new Error(`[${blockHeight}] Unsupported spec`)
    }

    const { assetId, sidechainAddress, amount } = rec

    let details: {
        requestHash?: string,
        assetId: AssetId,
        sidechainAddress: AddressEthereum,
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
                throw new Error(`[${blockHeight}] Unsupported spec`)
            }

            details = {
				// TODO: check it
                requestHash: toHex(requestHash),
                assetId,
                sidechainAddress,
                amount: formatU128ToBalance(amount, assetId)
            }
        } else {
			throw new Error(`[${blockHeight}] Cannot find event "EthBridge.RequestRegistered" with extrinsic hash ${extrinsicHash}`)
        }
    } else {
        details = {
            assetId,
            sidechainAddress,
            amount: formatU128ToBalance(amount, assetId)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)
    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx, historyElement.timestamp)

    ctx.log.debug(`===== Saved SORA->ETH transfer extrinsic with ${extrinsicHash} txid =====`)
}