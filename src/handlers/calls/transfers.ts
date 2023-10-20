import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, CallItem } from '../../types'
import { AssetsTransferEvent } from '../../types/generated/events'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetsTransferCall } from '../../types/generated/calls'
import { Address, AssetId } from '../../types'
import { toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { getCallHandlerLog, getEventHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { getExtrinsicSigner } from '../../utils/calls'

export async function transfersCallHandler(ctx: BlockContext, callItem: CallItem<'Assets.transfer'>): Promise<void> {
	logStartProcessingCall(ctx, callItem)

	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, callItem)

	if (!historyElement) return

	let details: {
		from: Address | null
		to: Address
		assetId: AssetId
		amount: string
	}

	if (historyElement.execution.success) {
		const eventName = 'Assets.Transfer'
		const eventItem = findEventByExtrinsicHash(ctx, extrinsicHash, [eventName], true)
		const event = new AssetsTransferEvent(ctx, eventItem.event)
		const data = getEntityData(ctx, event, eventItem)

		const from = toAddress(data[0])
		const to = toAddress(data[1])
		const assetId = getAssetId(data[2])
		const amount = data[3] as AssetAmount

		details = {
			from,
			to,
			assetId,
			amount: formatU128ToBalance(amount, assetId),
		}

		getEventHandlerLog(ctx, eventItem).debug(
			{ from, to, assetId, amount: details.amount },
			'Transfer executed successfully',
		)
	} else {
		const call = new AssetsTransferCall(ctx, callItem.call)
		const data = getEntityData(ctx, call, callItem)

		const to = toAddress(data.to)
		const assetId = getAssetId(data.assetId)
		const amount = data.amount

		const extrinsicSigner: Address | null = getExtrinsicSigner(ctx, callItem)

		details = {
			from: extrinsicSigner,
			to,
			amount: formatU128ToBalance(amount, assetId),
			assetId,
		}

		getCallHandlerLog(ctx, callItem).debug(
			{ from: details.from, to, assetId, amount: details.amount },
			'Transfer call failed',
		)
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, callItem).debug(`Saved transfer`)
}
