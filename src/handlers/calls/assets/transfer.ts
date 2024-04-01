import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { BlockContext, Call } from '../../../types'
import { toAddress } from '../../../utils'
import { getCallData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { getExtrinsicSigner } from '../../../utils/calls'
import { calls } from '../../../types/generated/merged'

export async function assetTransferCallHandler(ctx: BlockContext, call: Call<'Assets.transfer'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.assets.transfer, call)

	const to = toAddress(data.to)
	const assetId = getAssetId(data.assetId)
	const amount = data.amount

	const details: any = {
		assetId,
		amount: formatU128ToBalance(amount, assetId),
		from: getExtrinsicSigner(ctx, call),
		to,
	}

	await createCallHistoryElement(ctx, call, details)
}
