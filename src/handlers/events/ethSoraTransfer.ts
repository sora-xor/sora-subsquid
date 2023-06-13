import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import { TransferEventData, findEventByExtrinsicHash, getAssetsDepositedEventData, getAssetsTransferEventData, } from '../../utils/events'
import { Block, Context, EventItem } from '../../processor'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { findCallByExtrinsicHash } from '../../utils/calls'
import { unsupportedSpecError } from '../../utils/error'

export async function ethSoraTransferHandler(
	ctx: Context,
	block: Block,
	eventItem: (
		| EventItem<'EthBridge.IncomingRequestFinalized', true>
		| EventItem<'EthBridge.IncomingRequestFinalizationFailed', true>
	)
): Promise<void> {
    if (!eventItem.event.extrinsic) {
		throw new Error('There is no extrinsic in the event')
	}

    ctx.log.debug('Caught ETH->SORA transfer extrinsic')

    const extrinsicHash = eventItem.event.extrinsic.hash
    const blockHeight = block.header.height

    let registeredRequestEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['EthBridge.RequestRegistered'])
    let tokensTransferEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Tokens.Transfer'])
    let balancesTransferEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer'])
    let tokensDepositedEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Tokens.Deposited'])
    let balancesDepositedEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Deposited'])

    if (!registeredRequestEventEntity) return

    const registeredRequestEvent = new EthBridgeRequestRegisteredEvent(ctx, registeredRequestEventEntity.event)

    let requestHash: string
	
    if (registeredRequestEvent.isV1) {
        requestHash = registeredRequestEvent.asV1[0].toString()
    } else {
        throw unsupportedSpecError(block)
    }

	const assetsTransferEventEntity = tokensTransferEventEntity || balancesTransferEventEntity
	const assetsDepositedEventEntity = tokensDepositedEventEntity || balancesDepositedEventEntity

	let eventData: TransferEventData
	if (assetsTransferEventEntity) {
		eventData = getAssetsTransferEventData(ctx, block, assetsTransferEventEntity)
	} else if (assetsDepositedEventEntity) {
		eventData = getAssetsDepositedEventData(ctx, block, assetsDepositedEventEntity)
	} else return

	const details = {
		requestHash,
		assetId: eventData.assetId,
		to: eventData.to,
		amount: eventData.amount.toString()
	}

	const callItem = findCallByExtrinsicHash(['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'], block, extrinsicHash)
	if (!callItem) {
		throw new Error(`[${blockHeight}] Cannot find call "BridgeMultisig.as_multi" with extrinsic hash ${extrinsicHash}`)
	}

	const historyElement = await createHistoryElement(ctx, block, callItem)
	await addDataToHistoryElement(ctx, block, historyElement, details)
	await updateHistoryElementStats(ctx, block,historyElement)
	await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx, block)

    ctx.log.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsicHash} txid =====`)
}