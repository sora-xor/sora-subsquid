import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { XOR } from '../../../utils/consts'
import { formatU128ToBalance } from '../../../utils/assets'
import { calls } from '../../../types/generated/merged'

export async function stakingRebondCallHandler(ctx: BlockContext, call: Call<'Staking.rebond'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.rebond, call)

	const details = { amount: formatU128ToBalance(data.value, XOR) }

	await createCallHistoryElement(ctx, call, details)
}
