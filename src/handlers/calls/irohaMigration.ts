import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { CurrenciesDepositedEvent, CurrenciesTransferredEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'

export async function irohaMigrationCallHandler(ctx: Context, block: Block, callItem: CallItem<'IrohaMigration.migrate'>): Promise<void> {
    ctx.log.debug('Caught iroha migration extrinsic')

    const historyElement = await createHistoryElement(ctx, block, callItem)
    const extrinsicHash = callItem.extrinsic.hash

    let details: {
        assetId: string
        amount: string
    } | null = null

    if (historyElement.execution.success) {
		const currenciesDepositedEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Currencies.Deposited'])
		const currenciesTransferredEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Currencies.Transferred'])
			
		if (currenciesDepositedEventItem) {
			const event = new CurrenciesDepositedEvent(ctx, currenciesDepositedEventItem.event)
			const data = getEntityData(ctx, block, event, currenciesDepositedEventItem)

			const assetId = getAssetId(data[0])
			const assetAmount = data[2] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		} else if (currenciesTransferredEventItem) {
			const event = new CurrenciesTransferredEvent(ctx, currenciesTransferredEventItem.event)
			const data = getEntityData(ctx, block, event, currenciesTransferredEventItem)

			const assetId = getAssetId(data[0])
			const assetAmount = data[3] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		}

        if (details) await addDataToHistoryElement(ctx, block, historyElement, details)
        await updateHistoryElementStats(ctx, block,historyElement)

        ctx.log.debug(`===== Saved iroha migration with ${extrinsicHash} txid =====`)
    }

}
