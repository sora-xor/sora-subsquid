import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { getCallHandlerLog, logStartProcessingCall } from '../../../utils/logs'
import { getExtrinsicSigner } from '../../../utils/calls'
import { PayeeType } from '../../../model'
import { getStakingStaker, getStakingStakerController } from '../../../utils/staking'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'
import { Address } from '../../../types/generated/production/v1'

export async function stakingSetPayeeCallHandler(ctx: BlockContext, call: Call<'Staking.set_payee'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setPayee, call)

	const extrinsicSigner = getExtrinsicSigner(ctx, call)
	const stakingStaker = await getStakingStaker(ctx, extrinsicSigner)

	let payee: Address | null = null
    let payeeType = stakingStaker.payeeType

	if (data.payee.__kind === 'Account') {
		payee = toAddress(data.payee.value)
        payeeType = PayeeType.ACCOUNT
	} else if (data.payee.__kind === 'Controller') {
		payee = await getStakingStakerController(ctx, stakingStaker)
        payeeType = PayeeType.CONTROLLER
	}

	if (stakingStaker.payeeType !== payeeType || stakingStaker.payee !== payee) {
		stakingStaker.payeeType = payeeType
		stakingStaker.payee = payee
		await ctx.store.save(stakingStaker)
		getCallHandlerLog(ctx, call).debug({ staker: stakingStaker.id, payee }, 'Staking staker payee updated')
	}

	const details = {
		payeeType,
		payee,
	}

	await createCallHistoryElement(ctx, call, details)
}
