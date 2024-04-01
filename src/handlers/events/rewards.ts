import { Address, BlockContext, Event } from '../../types'
import { assertDefined, toAddress } from '../../utils'
import { formatU128ToBalance } from '../../utils/assets'
import { VAL } from '../../utils/consts'
import { getEventData } from '../../utils/entities'
import { createEventHistoryElement } from '../../utils/history'
import { logStartProcessingEvent } from '../../utils/logs'
import { getActiveStakingEra, getStakingStaker } from '../../utils/staking'
import { events } from '../../types/generated/merged'

function getRewardData(ctx: BlockContext, event: Event<'Staking.Rewarded'>): { stash: Address; amount: string } {
	const data = getEventData(ctx, events.staking.rewarded, event)
	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return { stash: toAddress(stash), amount: formatU128ToBalance(amount, VAL) }
}

export async function stakingRewardedEventHandler(ctx: BlockContext, event: Event<'Staking.Rewarded'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { stash, amount } = getRewardData(ctx, event)

	const stakingEra = await getActiveStakingEra(ctx)
	const staker = await getStakingStaker(ctx, stash)
	const payee = typeof staker.payee === 'string' ? staker.payee as Address : staker.payee
	assertDefined(payee)

	const details: any = {
		stash,
		payee,
		amount,
		era: stakingEra.index
	};

	await createEventHistoryElement(ctx, event, payee, details)
}
