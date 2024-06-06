import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingChillCallHandler(ctx: BlockContext, call: Call<'Staking.chill'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.chill, call)

	const details = {} // "Staking.chill" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}
