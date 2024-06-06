import { createCallHistoryElement } from '../../utils/history'
import { BlockContext, Call } from '../../types'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'
import { logStartProcessingCall } from '../../utils/logs'
import { assertDefined } from '../../utils'

export async function rewardsCallHandler(
	ctx: BlockContext,
	call:
		| Call<'PswapDistribution.claim_incentive'>
		| Call<'Rewards.claim'>
		| Call<'VestedRewards.claim_rewards'>
		| Call<'VestedRewards.claim_crowdloan_rewards'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	assertDefined(call.extrinsic)
	const extrinsicHash = call.extrinsic.hash

	const details = findEventsByExtrinsicHash(ctx, extrinsicHash, ['Tokens.Transfer', 'Balances.Transfer']).reduce(
		(buffer: { assetId: string; amount: string }[], event) => {
			const data = getAssetsTransferEventData(ctx, event)
			buffer.push({
				assetId: data.assetId,
				amount: data.amount.toString(),
			})
			return buffer
		},
		[],
	)

	await createCallHistoryElement(ctx, call, details);
}
