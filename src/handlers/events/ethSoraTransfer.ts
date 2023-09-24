import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import { DepositEventData, TransferEventData, findEventByExtrinsicHash, getAssetsDepositEventData, getAssetsTransferEventData, } from '../../utils/events'
import { Block, Context, EventItem } from '../../types'
import { EthBridgeRequestRegisteredEvent } from '../../types/generated/events'
import { findCallByExtrinsicHash } from '../../utils/calls'
import { getEntityData } from '../../utils/entities'
import { toHex } from '@subsquid/substrate-processor'
import { CannotFindCallError } from '../../utils/errors'

export async function ethSoraTransferEventHandler(
	ctx: Context,
	block: Block,
	eventItem: (
		| EventItem<'EthBridge.IncomingRequestFinalized'>
		| EventItem<'EthBridge.IncomingRequestFinalizationFailed'>
	)
): Promise<void> {
    if (!eventItem.event.extrinsic) {
		throw new Error(`[${block.header.height}] There is no extrinsic in the event`)
	}

    ctx.log.debug('Caught ETH->SORA transfer extrinsic')

    const extrinsicHash = eventItem.event.extrinsic.hash

    let registeredRequestEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['EthBridge.RequestRegistered'])
    let tokensTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Tokens.Transfer'])
    let balancesTransferEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer'])
    let tokensDepositedEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Tokens.Deposited'])
    let BalancesDepositEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Deposited'])

    if (!registeredRequestEventItem) return

    const registeredRequestEvent = new EthBridgeRequestRegisteredEvent(ctx, registeredRequestEventItem.event)
	const registeredRequestEventData = getEntityData(ctx, block, registeredRequestEvent, registeredRequestEventItem)

	const requestHash = toHex(registeredRequestEventData)

	const assetsTransferEventItem = tokensTransferEventItem || balancesTransferEventItem
	const assetsDepositedEventItem = tokensDepositedEventItem || BalancesDepositEventItem

	let eventData: TransferEventData | DepositEventData
	if (assetsTransferEventItem) {
		eventData = getAssetsTransferEventData(ctx, block, assetsTransferEventItem)
	} else if (assetsDepositedEventItem) {
		eventData = getAssetsDepositEventData(ctx, block, assetsDepositedEventItem)
	} else return

	const details = {
		requestHash,
		assetId: eventData.assetId,
		to: eventData.to,
		amount: eventData.amount.toString()
	}

	const callItem = findCallByExtrinsicHash(block, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	if (!callItem) {
		throw new CannotFindCallError(block, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	}

	const historyElement = await createHistoryElement(ctx, block, callItem)
	await addDataToHistoryElement(ctx, block, historyElement, details)
	await updateHistoryElementStats(ctx, block,historyElement)
	await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx, block)

    ctx.log.debug(`[${block.header.height}] ===== Saved ETH->SORA transfer extrinsic with ${extrinsicHash} txid =====`)
}