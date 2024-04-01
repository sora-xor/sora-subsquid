import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../../utils/logs'
import { getExtrinsicSigner } from '../../../utils/calls'
import { PayeeType } from '../../../model'
import { getStakingStaker } from '../../../utils/staking'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingSetControllerCallHandler(ctx: BlockContext, call: Call<'Staking.set_controller'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setController, call)

	const controller = toAddress(data.controller)
	const extrinsicSigner = getExtrinsicSigner(ctx, call)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)

	if (stakingStaker.controller !== controller) {
		stakingStaker.controller = controller
		if (stakingStaker.payeeType === PayeeType.CONTROLLER) {
			stakingStaker.payee = controller
		}
		await ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, call).debug({ staker: stakingStaker.id, controller }, 'Staking staker controller updated')
	}

	const details = {
		controller,
	}

	await createCallHistoryElement(ctx, call, details)
}
