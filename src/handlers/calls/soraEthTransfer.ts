import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { BlockContext, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AddressEthereum, AssetAmount, AssetId } from '../../types'
import { toAddressEthereum } from '../../utils'
import { decodeCall, decodeEvent, getCallRepresentation, getEventRepresentation } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'

export async function soraEthTransferCallHandler(ctx: BlockContext, call: Call<'EthBridge.transfer_to_sidechain'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const extrinsicHash = call.extrinsic?.hash ?? ''
	const historyElement = await createCallHistoryElement(ctx, call)

	const representation = getCallRepresentation(ctx, calls.ethBridge.transferToSidechain, call)
	const data = decodeCall(representation, call)

	const assetId = getAssetId(data.assetId)
	const sidechainAddress = toAddressEthereum(data.to)
	const amount = data.amount as AssetAmount

	let details: {
		requestHash?: string
		assetId: AssetId
		sidechainAddress: AddressEthereum
		amount: string
	}

	if (historyElement.execution.success) {
		const event = findEventByExtrinsicHash(ctx, extrinsicHash, ['EthBridge.RequestRegistered'], true)
		const representation = getEventRepresentation(ctx, events.ethBridge.requestRegistered, event)
		const requestHash = decodeEvent(representation, event)

		details = {
			requestHash,
			assetId,
			sidechainAddress,
			amount: formatU128ToBalance(amount, assetId),
		}
	} else {
		details = {
			assetId,
			sidechainAddress,
			amount: formatU128ToBalance(amount, assetId),
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
	await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx)
}
