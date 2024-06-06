import { createCallHistoryElement } from '../../../utils/history'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { BlockContext, Call, AssetId } from '../../../types'
import { getCallData, getEventData } from '../../../utils/entities'
import { getAssetId } from '../../../utils/assets'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls, events } from '../../../types/generated/merged'
import { assertDefined } from '../../../utils'

export async function assetsRegisterCallHandler(ctx: BlockContext, call: Call<'Assets.register'>): Promise<void> {
	logStartProcessingCall(ctx, call)
  
	const data = getCallData(ctx, calls.assets.register, call)
	const symbol = getAssetId(data.symbol)
  
	const details: {
		assetId: AssetId
	} = {
		assetId: symbol
	}
  
	assertDefined(call.extrinsic)
	const assetRegistrationEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Assets.AssetRegistered'])
  
	if (assetRegistrationEvent) {
		const assetRegistrationEventData = getEventData(ctx, events.assets.assetRegistered, assetRegistrationEvent)
  
		const assetId = getAssetId(assetRegistrationEventData[0])

		details.assetId = assetId
	}
  
	await createCallHistoryElement(ctx, call, details)
}
