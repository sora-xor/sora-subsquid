import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { Block, CallEntity, Context } from '../../processor'
import { EthBridgeTransferToSidechainCall } from '../../types/calls'
import { findEventsWithExtrinsic } from '../../utils/events'

export async function soraEthTransferHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'EthBridge.transfer_to_sidechain') return

    ctx.log.debug('Caught SORA->ETH transfer extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    const call = new EthBridgeTransferToSidechainCall(ctx, callEntity.call)

    let rec: { assetId: Uint8Array, sidechainAddress: Uint8Array, amount: bigint }

    if (call.isV1) {
        const { assetId, to, amount } = call.asV1
        rec = { assetId, sidechainAddress: to, amount }
    } else if (call.isV42) {
        const { assetId, to, amount } = call.asV42
        rec = { assetId: assetId.code, sidechainAddress: to, amount }
    } else {
        return 
    }

    const { assetId, sidechainAddress, amount } = rec

    let entity = new Object()

    const extrinsicHash = callEntity.extrinsic.hash

    if (historyElement.execution.success) {

        const soraEthTransferEventEntity = findEventsWithExtrinsic('EthBridge.RequestRegistered', block, extrinsicHash)[0]
        let soraEthTransferEvent = block.items.find(e => e.name === 'EthBridge.RequestRegistered')
        if (!soraEthTransferEvent || soraEthTransferEvent.kind !== 'event') return // TODO: make proper exit
        const [requestHash] = soraEthTransferEvent.event.args

        entity = {
            requestHash: requestHash.toString(),
            assetId: getAssetId(assetId),
            sidechainAddress: sidechainAddress.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId))
        }

    }

    else {

        entity = {
            assetId: getAssetId(assetId),
            sidechainAddress: sidechainAddress.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId))
        }

    }

    await addDataToHistoryElement(ctx, historyElement, entity)
    await updateHistoryElementStats(ctx, historyElement)
    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(ctx, historyElement.timestamp)

    ctx.log.debug(`===== Saved SORA->ETH transfer extrinsic with ${extrinsicHash} txid =====`)

}