import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingChillOtherCallHandler(ctx: BlockContext, call: Call<'Staking.chill_other'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.chillOther, call)

	const details = {
		controller: toAddress(data.controller),
	}

	await createCallHistoryElement(ctx, call, details)
}
