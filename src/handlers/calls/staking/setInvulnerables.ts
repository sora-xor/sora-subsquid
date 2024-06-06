import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingSetInvulnerablesCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_invulnerables'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setInvulnerables, call)

	const details = {
		invulnerables: data.invulnerables.map(toAddress),
	}

	await createCallHistoryElement(ctx, call, details)
}
