import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingSetHistoryDepthCallHandler(ctx: BlockContext, call: Call<'Staking.set_history_depth'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setHistoryDepth, call)

	const details = {
		newHistoryDepth: data.newHistoryDepth,
		eraItemsDeleted: data.eraItemsDeleted,
	}

	await createCallHistoryElement(ctx, call, details)
}
