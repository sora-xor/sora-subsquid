import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { XOR } from '../../../utils/consts'
import { formatU128ToBalance } from '../../../utils/assets'
import { calls } from '../../../types/generated/merged'

export async function stakingBondExtraCallHandler(ctx: BlockContext, call: Call<'Staking.bond_extra'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.bondExtra, call)

	const details = {
		amount: formatU128ToBalance(data.maxAdditional, XOR),
	}

	await createCallHistoryElement(ctx, call, details)
}
