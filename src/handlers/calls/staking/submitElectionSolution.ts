import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function stakingSubmitElectionSolutionCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.submit_election_solution'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.submitElectionSolution, call)

	const details = {
		winners: data.winners,
		era: data.era,
		score: data.score,
	}

	await createCallHistoryElement(ctx, call, details)
}