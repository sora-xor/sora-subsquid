import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingCancelDeferredSlashCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.cancel_deferred_slash'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.cancelDeferredSlash, call)

	const details = {
		era: data.era,
		slashIndices: data.slashIndices,
	}

	await createCallHistoryElement(ctx, call, details)
}
