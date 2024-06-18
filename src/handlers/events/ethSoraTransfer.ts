import { createCallHistoryElement } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import {
	DepositEventData,
	TransferEventData,
	findEventByExtrinsicHash,
	getAssetsDepositEventData,
	getAssetsTransferEventData,
} from '../../utils/events'
import { BlockContext, Event } from '../../types'
import { findCallByExtrinsicHash } from '../../utils/calls'
import { getEventData } from '../../utils/entities'
import { logStartProcessingEvent } from '../../utils/logs'
import { events } from '../../types/generated/merged'
import { assertDefined } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'

export async function ethSoraTransferEventHandler(
	ctx: BlockContext,
	event: Event<'EthBridge.IncomingRequestFinalized'> | Event<'EthBridge.IncomingRequestFinalizationFailed'>,
): Promise<void> {
    logStartProcessingEvent(ctx, event)

    assertDefined(event.extrinsic)
	const extrinsicHash = event.extrinsic.hash

	const registeredRequestEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['EthBridge.RequestRegistered'])

	const balancesDepositEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Deposit'])
	const tokensDepositedEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Deposited'])
	const balancesTransferEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Balances.Transfer'])
	const tokensTransferEvent = findEventByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer'])

	const assetsTransferEvent = tokensTransferEvent || balancesTransferEvent
	const assetsDepositedEvent = tokensDepositedEvent || balancesDepositEvent
    const currenciesEvent = assetsTransferEvent || assetsDepositedEvent

    if (!registeredRequestEvent || !currenciesEvent) return;

	const requestHash = getEventData(ctx, events.ethBridge.requestRegistered, registeredRequestEvent)

	let eventData: TransferEventData | DepositEventData
	if (assetsTransferEvent) {
		eventData = getAssetsTransferEventData(ctx, assetsTransferEvent)
	} else {
		assertDefined(assetsDepositedEvent)
		eventData = getAssetsDepositEventData(ctx, assetsDepositedEvent)
	}

    const details: any = {
        requestHash: requestHash,
        assetId: eventData.assetId,
        amount: formatU128ToBalance(eventData.amount, eventData.assetId),
        to: eventData.to,
    };

    await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx)

	const call = findCallByExtrinsicHash(ctx, extrinsicHash, ['BridgeMultisig.as_multi', 'BridgeMultisig.as_multi_threshold_1'])
	assertDefined(call)

	await createCallHistoryElement(ctx, call, details)
}
