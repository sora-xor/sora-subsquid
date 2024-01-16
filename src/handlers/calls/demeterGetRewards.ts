import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, AssetAmount, Call } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { decodeCall, decodeEvent, getCallRepresentation, getEventRepresentation } from '../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs'
import { calls, events } from '../../types/generated/merged'
import { assertDefined } from '../../utils'

export async function demeterGetRewardsCallHandler(
	ctx: BlockContext,
	call: Call<'DemeterFarmingPlatform.get_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	assertDefined(call.extrinsic)
	const extrinsicHash = call.extrinsic.hash

	const representation = getCallRepresentation(ctx, calls.demeterFarmingPlatform.getRewards, call)
	const data = decodeCall(representation, call)

	const assetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm

	let amount: string

	const event = findEventByExtrinsicHash(ctx, extrinsicHash, ['DemeterFarmingPlatform.RewardWithdrawn'])

	if (event) {
		const representation = getEventRepresentation(ctx, events.demeterFarmingPlatform.rewardWithdrawn, event)
		const data = decodeEvent(representation, event)

		const assetAmount = data[1] as AssetAmount

		amount = formatU128ToBalance(assetAmount, assetId)
	} else {
		amount = '0'
	}

	const details = {
		assetId: assetId,
		isFarm: isFarm,
		amount,
	}

	const historyElement = await createCallHistoryElement(ctx, call)
	if (!historyElement) return
	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)

	getCallHandlerLog(ctx, call).debug(`Saved demeterFarmingPlatform getRewards`)
}
