import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingForceApplyMinCommissionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.force_apply_min_commission'>,
): Promise<void> {
	const data = getCallData(ctx, calls.staking.forceApplyMinCommission, call)

	const details = {
		validatorStash: toAddress(data.validatorStash),
	}

	await createCallHistoryElement(ctx, call, details)
}
