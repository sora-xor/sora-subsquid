import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingWithdrawUnbondedCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.withdraw_unbonded'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.withdrawUnbonded, call)

	const details = {
		numSlashingSpans: data.numSlashingSpans,
	}

	await createCallHistoryElement(ctx, call, details)
}
