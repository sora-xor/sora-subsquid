import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingValidateCallHandler(ctx: BlockContext, call: Call<'Staking.validate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.validate, call)

	const details = {
		commission: data.prefs.commission,
		blocked: data.prefs.blocked,
	}

	await createCallHistoryElement(ctx, call, details)
}
