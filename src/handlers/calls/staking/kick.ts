import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingKickCallHandler(ctx: BlockContext, call: Call<'Staking.kick'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.kick, call)

	const details = {
		address: data.who.map((item) => toAddress(item)),
	}

	await createCallHistoryElement(ctx, call, details)
}
