import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingSetValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setValidatorCount, call)

	const details = {
		count: data.new,
	}

	await createCallHistoryElement(ctx, call, details)
}
