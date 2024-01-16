import { addDataToHistoryElement, createCallHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { BlockContext, Call } from '../../types'
import { assertDefined, toAddress } from '../../utils'
import { decodeCall, decodeEvent, getCallRepresentation, getEventRepresentation } from '../../utils/entities'
import { logStartProcessingCall } from '../../utils/logs'
import { getExtrinsicSigner } from '../../utils/calls'
import { findEventByExtrinsicHash } from '../../utils/events'
import { XOR } from '../../utils/consts'
import BigNumber from 'bignumber.js'
import { calls, events } from '../../types/generated/merged'

export async function assetTransferCallHandler(ctx: BlockContext, call: Call<'Assets.transfer'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const representation = getCallRepresentation(ctx, calls.assets.transfer, call)
	const data = decodeCall(representation, call)

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

export async function xorlessTransferHandler(ctx: BlockContext, call: Call<'LiquidityProxy.xorless_transfer'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const representation = getCallRepresentation(ctx, calls.liquidityProxy.xorlessTransfer, call)
	const data = decodeCall(representation, call)

	const { receiver, amount, additionalData } = data

	const historyElement = await createCallHistoryElement(ctx, call)
	const assetId = getAssetId(data.assetId)
	const xorFee = historyElement.networkFee!

	const details: any = {
		assetId,
		amount: formatU128ToBalance(amount, assetId),
		from: getExtrinsicSigner(ctx, call),
		to: toAddress(receiver),
		comment: additionalData,
		assetFee: '0', // fee paid in asset
		xorFee, // fee paid in XOR (by default 100% of network fee)
	}

	if (historyElement.execution.success) {
		assertDefined(call.extrinsic)
		const event = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['LiquidityProxy.Exchange'])
		if (event) {
			const representation = getEventRepresentation(ctx, events.liquidityProxy.exchange, event)
			const [, , , , baseAssetAmount, targetAssetAmount] = decodeEvent(representation, event)

			const assetSpent = formatU128ToBalance(baseAssetAmount, assetId)
			const xorReceived = formatU128ToBalance(targetAssetAmount, XOR)
			const xorSpent = new BigNumber(xorFee).minus(new BigNumber(xorReceived)).toString()

			details.assetFee = assetSpent
			details.xorFee = xorSpent
		}
	}

	await addDataToHistoryElement(ctx, historyElement, details)
	await updateHistoryElementStats(ctx, historyElement)
}
