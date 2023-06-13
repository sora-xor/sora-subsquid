import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { Block, CallItem, Context } from '../../processor'
import { EthBridgeTransferToSidechainCall } from '../../types/generated/calls'
import { findEventByExtrinsicHash } from '../../utils/events'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { toHex } from '@subsquid/substrate-processor'
import { AddressEthereum, AssetAmount, AssetId } from '../../types'
import { toAddressEthereum, toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function soraEthTransferHandler(ctx: Context, block: Block, callItem: CallItem<'EthBridge.transfer_to_sidechain', true>): Promise<void> {
    ctx.log.debug('Caught SORA->ETH transfer extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new EthBridgeTransferToSidechainCall(ctx, callItem.call)

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
        throw unsupportedSpecError(block)
    }

    const { assetId, sidechainAddress, amount } = rec

    let details: {
        requestHash?: string,
        assetId: AssetId,
        sidechainAddress: AddressEthereum,
        amount: string
    }
    if (historyElement.execution.success) {
        const soraEthTransferEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['EthBridge.RequestRegistered'])

        if (soraEthTransferEventEntity) {
            const soraEthTransferEvent = new EthBridgeRequestRegisteredEvent(ctx, soraEthTransferEventEntity.event)

            let requestHash: Uint8Array
            if (soraEthTransferEvent.isV1) {
                requestHash = soraEthTransferEvent.asV1
            } else {
                throw unsupportedSpecError(block)
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

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx, block)

    ctx.log.debug(`===== Saved SORA->ETH transfer extrinsic with ${extrinsicHash} txid =====`)
}