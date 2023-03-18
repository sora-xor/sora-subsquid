import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { CurrenciesDepositedEvent, CurrenciesTransferredEvent } from '../../types/events'
import { toHex } from '@subsquid/substrate-processor'

export async function irohaMigrationHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'IrohaMigration.migrate') return

    ctx.log.debug('Caught iroha migration extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
    const extrinsicHash = callEntity.extrinsic.hash

    let details: {
        assetId: string
        amount: string
    }

    if (historyElement.execution.success) {
        const currenciesDepositedEventEntity = findEventWithExtrinsic('Currencies.Deposited', block, extrinsicHash)
        
        if (currenciesDepositedEventEntity) {
            const currenciesDepositedEvent = new CurrenciesDepositedEvent(ctx, currenciesDepositedEventEntity.event)

            if (currenciesDepositedEvent.isV1) {
                const [assetId, , amount] = currenciesDepositedEvent.asV1
                details = {
                    assetId: toHex(assetId),
                    amount: formatU128ToBalance(amount, assetId)
                }
            } else {
                throw new Error('Unsupported spec')
            }
        } else {
            const currenciesTransferredEventEntity = findEventWithExtrinsic('Currencies.Transferred', block, extrinsicHash)

            if (currenciesTransferredEventEntity) {
                const currenciesTransferredEvent = new CurrenciesTransferredEvent(ctx, currenciesTransferredEventEntity.event)

                if (currenciesTransferredEvent.isV1) {
                    const [assetId, , , amount] = currenciesTransferredEvent.asV1
                    details = {
                        assetId: toHex(assetId),
                        amount: formatU128ToBalance(amount, assetId)
                    }
                } else {
                    throw new Error('Unsupported spec')
                }
            } else {
                ctx.log.error('Cannot find event: Currencies.Transferred')
				return
            }
        }

        await addDataToHistoryElement(ctx, historyElement, details)
        await updateHistoryElementStats(ctx, historyElement)

        ctx.log.debug(`===== Saved iroha migration with ${extrinsicHash} txid =====`)

    }

}
