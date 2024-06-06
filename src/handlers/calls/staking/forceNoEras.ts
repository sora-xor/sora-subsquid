import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingForceNoErasCallHandler(ctx: BlockContext, call: Call<'Staking.force_no_eras'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.forceNoEras, call)

	const details = {} // "Staking.force_no_eras" call doesn't have any parameters, so details will be empty in this case

	await createCallHistoryElement(ctx, call, details)
}
