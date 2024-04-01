import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { XOR } from '../../../utils/consts'
import { formatU128ToBalance } from '../../../utils/assets'
import { toAddress } from '../../../utils'
import { calls } from '../../../types/generated/merged'

export async function stakingBondCallHandler(ctx: BlockContext, call: Call<'Staking.bond'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.bond, call)

	const details = {
		controller: toAddress(data.controller),
		payee: data.payee.__kind === 'Account' ? { kind: data.payee.__kind, value: data.payee.value } : { kind: data.payee.__kind },
		amount: formatU128ToBalance(data.value, XOR),
	}

	await createCallHistoryElement(ctx, call, details)
}
