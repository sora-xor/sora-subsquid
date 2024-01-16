import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { getEventDataDiffer, getScheme } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { assertDefined } from '../../utils'

export async function irohaMigrationCallHandler(ctx: BlockContext, call: Call<'IrohaMigration.migrate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const historyElement = await createCallHistoryElement(ctx, call)

	let details: {
		assetId: string
		amount: string
	} | null = null

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const currenciesDepositedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Deposited'])
		const currenciesTransferredEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Transferred'])

		if (currenciesDepositedEvent) {
			const data = getEventDataDiffer(ctx, getScheme(['production', 'stage', 'test'], 'currencies', 'deposited'), currenciesDepositedEvent)

			const assetId = getAssetId(data[0])
			const assetAmount = data[2] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		} else if (currenciesTransferredEvent) {
			const data = getEventDataDiffer(ctx, getScheme(['production', 'stage', 'test'], 'currencies', 'transferred'), currenciesTransferredEvent)

			const assetId = getAssetId(data[0])
			const assetAmount = data[3] as AssetAmount
			const amount = formatU128ToBalance(assetAmount, assetId)

			details = {
				assetId,
				amount,
			}
		}

		if (details) await addDataToHistoryElement(ctx, historyElement, details)
		await updateHistoryElementStats(ctx, historyElement)
	}
}
