import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallItem, Context } from '../../processor'
import { findEventByExtrinsicHash } from '../../utils/events'
import { BalancesTransferEvent, CurrenciesDepositedEvent, CurrenciesTransferredEvent } from '../../types/generated/events'
import { IrohaMigrationMigrateCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function irohaMigrationHandler(ctx: Context, block: Block, callItem: CallItem<'IrohaMigration.migrate', true>): Promise<void> {
    ctx.log.debug('Caught iroha migration extrinsic')

    const historyElement = await createHistoryElement(ctx, block, callItem)
	const blockHeight = block.header.height
    const extrinsicHash = callItem.extrinsic.hash

	const call = new IrohaMigrationMigrateCall(ctx, callItem.call)

    let details: {
        assetId: string
        amount: string
    } | null = null

    if (historyElement.execution.success) {
		if (call.isV1) {
			const currenciesDepositedEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Currencies.Deposited'])
			
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
					throw unsupportedSpecError(block)
				}
			} else {
				const currenciesTransferredEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Currencies.Transferred'])

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
						throw unsupportedSpecError(block)
					}
				} else {
					ctx.log.error(`[${blockHeight}] Cannot find event "Currencies.Transferred" with extrinsic hash ${extrinsicHash}`)
				}
			}
		} else {
			const balancesTransferEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Balances.Transfer'])
			
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
					throw unsupportedSpecError(block)
				}
			} else {
				const currenciesTransferredEventEntity = findEventByExtrinsicHash(block, extrinsicHash, ['Currencies.Transferred'])

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
						throw unsupportedSpecError(block)
					}
				} else {
					ctx.log.error(`[${blockHeight}] Cannot find event "Currencies.Transferred" with extrinsic hash ${extrinsicHash}`)
				}
			}
		}

        await addDataToHistoryElement(ctx, block, historyElement, details)
        await updateHistoryElementStats(ctx, block,historyElement)

        ctx.log.debug(`===== Saved iroha migration with ${extrinsicHash} txid =====`)
    }

}
