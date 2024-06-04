import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData, getEventData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls, events } from '../../../types/generated/merged'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { assertDefined } from '../../../utils'
import { formatU128ToBalance } from '../../../utils/assets'
import { XOR } from '../../../utils/consts'

export async function stakingWithdrawUnbondedCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.withdraw_unbonded'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.withdrawUnbonded, call)

	const details = {
		numSlashingSpans: data.numSlashingSpans,
        amount: undefined as undefined | string,
	}

	assertDefined(call.extrinsic)
    const stakingWithdrawnEvent = findEventByExtrinsicHash(ctx, call.extrinsic?.hash, ['Staking.Withdrawn'])

    if (stakingWithdrawnEvent) {
        const stakingWithdrawnEventData = getEventData(ctx, events.staking.withdrawn, stakingWithdrawnEvent)

		const amount = 'amount' in stakingWithdrawnEventData ? stakingWithdrawnEventData.amount : stakingWithdrawnEventData[1]

        details.amount = formatU128ToBalance(amount, XOR)
    }

	await createCallHistoryElement(ctx, call, details)
}
