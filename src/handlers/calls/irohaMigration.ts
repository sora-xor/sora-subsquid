import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { BalancesTransferEvent, CurrenciesDepositedEvent, CurrenciesTransferredEvent } from '../../types/events'
import { IrohaMigrationMigrateCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'

export async function irohaMigrationHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
    if (callEntity.name !== 'IrohaMigration.migrate') return

    ctx.log.debug('Caught iroha migration extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash

	const call = new IrohaMigrationMigrateCall(ctx, callEntity.call)

    let details: {
        assetId: string
        amount: string
    } | null = null

    if (historyElement.execution.success) {
		if (call.isV1) {
			const currenciesDepositedEventEntity = findEventWithExtrinsic('Currencies.Deposited', block, extrinsicHash)
			
			if (currenciesDepositedEventEntity) {
				const currenciesDepositedEvent = new CurrenciesDepositedEvent(ctx, currenciesDepositedEventEntity.event)

				if (currenciesDepositedEvent.isV1) {
					const [assetIdDecoded, , amount] = currenciesDepositedEvent.asV1
					const assetId = toAssetId(assetIdDecoded)
					details = {
						assetId: assetId,
						amount: formatU128ToBalance(amount, assetId)
					}
				} else {
					throw new Error(`[${blockHeight}] Unsupported spec`)
				}
			} else {
				const currenciesTransferredEventEntity = findEventWithExtrinsic('Currencies.Transferred', block, extrinsicHash)

				if (currenciesTransferredEventEntity) {
					const currenciesTransferredEvent = new CurrenciesTransferredEvent(ctx, currenciesTransferredEventEntity.event)

					if (currenciesTransferredEvent.isV1) {
						const [assetIdDecoded, , , amount] = currenciesTransferredEvent.asV1
						const assetId = toAssetId(assetIdDecoded)
						details = {
							assetId: assetId,
							amount: formatU128ToBalance(amount, assetId)
						}
					} else {
						throw new Error(`[${blockHeight}] Unsupported spec`)
					}
				} else {
					ctx.log.error(`[${blockHeight}] Cannot find event "Currencies.Transferred" with extrinsic hash ${extrinsicHash}`)
				}
			}
		} else {
			const balancesTransferEventEntity = findEventWithExtrinsic('Balances.Transfer', block, extrinsicHash)
			
			if (balancesTransferEventEntity) {
				const balancesTransferEvent = new BalancesTransferEvent(ctx, balancesTransferEventEntity.event)

				if (balancesTransferEvent.isV1) {
					const [assetIdDecoded, , amount] = balancesTransferEvent.asV1
					const assetId = toAssetId(assetIdDecoded)
					details = {
						assetId: assetId,
						amount: formatU128ToBalance(amount, assetId)
					}
				} else {
					throw new Error(`[${blockHeight}] Unsupported spec`)
				}
			} else {
				const currenciesTransferredEventEntity = findEventWithExtrinsic('Currencies.Transferred', block, extrinsicHash)

				if (currenciesTransferredEventEntity) {
					const currenciesTransferredEvent = new CurrenciesTransferredEvent(ctx, currenciesTransferredEventEntity.event)

					if (currenciesTransferredEvent.isV1) {
						const [assetIdDecoded, , , amount] = currenciesTransferredEvent.asV1
						const assetId = toAssetId(assetIdDecoded)
						details = {
							assetId: assetId,
							amount: formatU128ToBalance(amount, assetId)
						}
					} else {
						throw new Error(`[${blockHeight}] Unsupported spec`)
					}
				} else {
					ctx.log.error(`[${blockHeight}] Cannot find event "Currencies.Transferred" with extrinsic hash ${extrinsicHash}`)
				}
			}
		}

        await addDataToHistoryElement(ctx, historyElement, details)
        await updateHistoryElementStats(ctx, historyElement)

        ctx.log.debug(`===== Saved iroha migration with ${extrinsicHash} txid =====`)
    }

}
