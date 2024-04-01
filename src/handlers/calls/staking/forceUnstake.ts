import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingForceUnstakeCallHandler(ctx: BlockContext, call: Call<'Staking.force_unstake'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceUnstake, call)

	const details = {
		stash: toAddress(data.stash),
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}
