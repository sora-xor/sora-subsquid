import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingIncreaseValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.increase_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.increaseValidatorCount, call)

	const details = {
		count: data.additional,
	}

	await createCallHistoryElement(ctx, call, details)
}
