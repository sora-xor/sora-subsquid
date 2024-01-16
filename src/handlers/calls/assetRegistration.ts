import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { BlockContext, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetId } from '../../types'
import { decodeCall, decodeEvent, getCallRepresentation, getEventRepresentation } from '../../utils/entities'
import { getAssetId } from '../../utils/assets'
import { logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'

export async function assetRegistrationCallHandler(ctx: BlockContext, call: Call<'Assets.register'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const extrinsicHash = call.extrinsic!.hash
	const historyElement = await createCallHistoryElement(ctx, call)

	if (!historyElement) return

	let details: {
		assetId: AssetId
	}

	if (historyElement.execution.success) {
		const event = findEventByExtrinsicHash(ctx, extrinsicHash, ['Assets.AssetRegistered'], true)
		const eventRepresentation = getEventRepresentation(ctx, events.assets.assetRegistered, event)
		const [asset] = decodeEvent(eventRepresentation, event)

		const assetId = getAssetId(asset)

		details = {
			assetId,
		}
	} else {
		const representation = getCallRepresentation(ctx, calls.assets.register, call)
		const { symbol } = decodeCall(representation, call)

		details = {
			assetId: getAssetId(symbol),
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
