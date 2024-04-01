import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingScaleValidatorCountCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.scale_validator_count'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.scaleValidatorCount, call)

	const details = {
		factor: data.factor,
	}

	await createCallHistoryElement(ctx, call, details)
}