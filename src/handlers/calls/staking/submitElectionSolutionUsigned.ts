import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingSubmitElectionSolutionUnsignedCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.submit_election_solution_unsigned'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.submitElectionSolutionUnsigned, call)

	const details = {
		winners: data.winners,
		compact: data.compact,
		score: data.score,
		era: data.era,
		size: data.size,
	}

	await createCallHistoryElement(ctx, call, details)
}
