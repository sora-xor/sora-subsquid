import { addDataToHistoryElement, getHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { networkSnapshotsStorage } from '../../utils/network'
import { findEventEntityWithExtrinsic, } from '../../utils/events'
import { Block, Context, EventEntity } from '../../processor'
import { BalancesTransferEvent, EthBridgeIncomingRequestFinalizedEvent, EthBridgeRequestRegisteredEvent, TokensTransferEvent } from '../../types/events'
import { XOR } from '../../utils/consts'

export async function ethSoraTransferHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {

    if (eventEntity.event.name !== 'EthBridge.IncomingRequestFinalized') return
    if (!eventEntity.event.extrinsic) return

    ctx.log.debug('Caught ETH->SORA transfer extrinsic')

    const extrinsicHash = eventEntity.event.extrinsic.hash

    let registeredRequestEventEntity = findEventEntityWithExtrinsic('EthBridge.RequestRegistered', block, extrinsicHash)
    let tokensTransferEventEntity = findEventEntityWithExtrinsic('Tokens.Transfer', block, extrinsicHash)
    let balancesTransferEventEntity = findEventEntityWithExtrinsic('Balances.Transfer', block, extrinsicHash)

    if (!registeredRequestEventEntity) return
    const registeredRequestEvent = new EthBridgeRequestRegisteredEvent(ctx, registeredRequestEventEntity.event)
    const [requestHash] = registeredRequestEvent.asV1

    let entity = new Object()

    if (tokensTransferEventEntity) {

        const tokensTransferEvent = new TokensTransferEvent(ctx, tokensTransferEventEntity.event)

        const { currencyId, amount, to } = tokensTransferEvent.asV42

        entity = {
            requestHash: requestHash.toString(),
            assetId: currencyId.code,
            amount,
            to,
        }

    } else if (balancesTransferEventEntity) {

        const balancesTransferEvent = new BalancesTransferEvent(ctx, balancesTransferEventEntity.event)

        const { amount, to } = balancesTransferEvent.asV42

        entity = {
            requestHash: requestHash.toString(),
            assetId: XOR,
            amount,
            to,
        }

    } else {
        return
    }

    if (eventEntity.event.call) {
        // TODO: check if history element exists every time here
        const historyElement = await getHistoryElement(ctx, extrinsicHash)
        if (!historyElement) return
        await addDataToHistoryElement(ctx, historyElement, entity)
        await updateHistoryElementStats(ctx, historyElement)
        await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(ctx, historyElement.timestamp)
    }

    ctx.log.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsicHash} txid =====`)

}