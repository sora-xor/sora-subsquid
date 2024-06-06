import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingNominateCallHandler(ctx: BlockContext, call: Call<'Staking.nominate'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.nominate, call)

	const details = {
		targets: data.targets.map(toAddress),
	}

	await createCallHistoryElement(ctx, call, details)
}
