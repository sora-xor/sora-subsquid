import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { Block, CallItem, Context } from '../../types'
import { EthBridgeTransferToSidechainCall } from '../../types/generated/calls'
import { findEventByExtrinsicHash } from '../../utils/events'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { toHex } from '@subsquid/substrate-processor'
import { AddressEthereum, AssetAmount, AssetId } from '../../types'
import { toAddressEthereum } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { logCallHandler } from '../../utils/log'

export async function soraEthTransferCallHandler(ctx: Context, block: Block, callItem: CallItem<'EthBridge.transfer_to_sidechain'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    const call = new EthBridgeTransferToSidechainCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)
	
	const assetId = getAssetId(data.assetId)
	const sidechainAddress = toAddressEthereum(data.to)
	const amount = data.amount as AssetAmount

    let details: {
        requestHash?: string,
        assetId: AssetId,
        sidechainAddress: AddressEthereum,
        amount: string
    }

    if (historyElement.execution.success) {
        const soraEthTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['EthBridge.RequestRegistered'], true)
		const soraEthTransferEvent = new EthBridgeRequestRegisteredEvent(ctx, soraEthTransferEventItem.event)
		const soraEthTransferEventData = getEntityData(ctx, block, soraEthTransferEvent, soraEthTransferEventItem)

		details = {
			requestHash: toHex(soraEthTransferEventData),
			assetId,
			sidechainAddress,
			amount: formatU128ToBalance(amount, assetId)
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

    ctx.log.debug(`[${block.header.height}] ===== Saved SORA->ETH transfer extrinsic with ${extrinsicHash} txid =====`)
}