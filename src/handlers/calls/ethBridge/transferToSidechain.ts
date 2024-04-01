import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { networkSnapshotsStorage } from '../../../utils/network'
import { BlockContext, Call } from '../../../types'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { AssetAmount } from '../../../types'
import { assertDefined, toAddressEthereum } from '../../../utils'
import { getCallData, getEventData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls, events } from '../../../types/generated/merged'

export async function ethBridgeTransferToSidechainCallHandler(ctx: BlockContext, call: Call<'EthBridge.transfer_to_sidechain'>): Promise<void> {
    logStartProcessingCall(ctx, call)

    const data = getCallData(ctx, calls.ethBridge.transferToSidechain, call)

    const assetId = getAssetId(data.assetId)
	const sidechainAddress = toAddressEthereum(data.to)
	const amount = data.amount as AssetAmount

    const details: any = {
        assetId,
        sidechainAddress,
        amount: formatU128ToBalance(amount, assetId)
    }

	assertDefined(call.extrinsic)
	const soraEthTransferEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['EthBridge.RequestRegistered'])

    if (soraEthTransferEvent) {
        const requestHash = getEventData(ctx, events.ethBridge.requestRegistered, soraEthTransferEvent)

        details.requestHash = requestHash
    }

    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx)

    await createCallHistoryElement(ctx, call, details)
}
