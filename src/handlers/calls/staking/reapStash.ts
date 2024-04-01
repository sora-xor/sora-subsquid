import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingReapStashCallHandler(ctx: BlockContext, call: Call<'Staking.reap_stash'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.reapStash, call)

	const details = {
		stash: data.stash,
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}
