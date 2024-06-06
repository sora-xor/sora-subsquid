import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { BlockContext, AssetAmount, Call } from '../../../types'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { getCallData, getEventData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls, events } from '../../../types/generated/merged'
import { assertDefined } from '../../../utils'

export async function demeterFarmingPlatformGetRewardsCallHandler(
	ctx: BlockContext,
	call: Call<'DemeterFarmingPlatform.get_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.demeterFarmingPlatform.getRewards, call)

	const assetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm

	let amount: string

	assertDefined(call.extrinsic)
	const event = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['DemeterFarmingPlatform.RewardWithdrawn'])

	if (event) {
		const data = getEventData(ctx, events.demeterFarmingPlatform.rewardWithdrawn, event)

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

	await createCallHistoryElement(ctx, call, details);
}
