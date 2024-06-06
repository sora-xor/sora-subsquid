import { BlockContext, Call } from '../../../types'
import { createCallHistoryElement } from '../../../utils/history'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { XOR } from '../../../utils/consts'
import { formatU128ToBalance } from '../../../utils/assets'
import { calls } from '../../../types/generated/merged'

export async function stakingSetStakingConfigsCallHandler(
	ctx: BlockContext,
	call: Call<'Staking.set_staking_configs'>,
): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.staking.setStakingConfigs, call)

	const createDetailObject = (key: keyof typeof data) => {
		const value = data[key]
		return value.__kind === 'Set'
			? {
					kind: value.__kind,
					value: typeof value.value === 'bigint' ? formatU128ToBalance(value.value, XOR) : value.value,
			  }
			: { kind: value.__kind }
	}

	const details = {
		minNominatorBond: createDetailObject('minNominatorBond'),
		minValidatorBond: createDetailObject('minValidatorBond'),
		maxNominatorCount: createDetailObject('maxNominatorCount'),
		maxValidatorCount: createDetailObject('maxValidatorCount'),
		chillThreshold: createDetailObject('chillThreshold'),
		minCommission: createDetailObject('minCommission'),
	}

	await createCallHistoryElement(ctx, call, details)
}
