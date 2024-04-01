import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingSetMinCommissionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_min_commission'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setMinCommission, call)

	const details = {
		commission: data.new,
	}

	await createCallHistoryElement(ctx, call, details)
}
