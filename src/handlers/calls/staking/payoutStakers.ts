import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingPayoutStakersCallHandler(ctx: BlockContext, call: Call<'Staking.payout_stakers'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.payoutStakers, call)

	const details = {
		validatorStash: toAddress(data.validatorStash),
		era: data.era,
	}

	await createCallHistoryElement(ctx, call, details)
}
