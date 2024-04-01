import { createCallHistoryElement, getCallNetworkFee } from '../../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { BlockContext, Call } from '../../../types'
import { assertDefined, toAddress } from '../../../utils'
import { getCallData, getEventData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { getExtrinsicSigner } from '../../../utils/calls'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { XOR } from '../../../utils/consts'
import BigNumber from 'bignumber.js'
import { calls, events } from '../../../types/generated/merged'

export async function liquidityProxyXorlessTransferCallHandler(ctx: BlockContext, call: Call<'LiquidityProxy.xorless_transfer'>): Promise<void> {
	logStartProcessingCall(ctx, call)

	const data = getCallData(ctx, calls.liquidityProxy.xorlessTransfer, call)

	const { receiver, amount, additionalData } = data

	const assetId = getAssetId(data.assetId)
	const xorFee = getCallNetworkFee(ctx, call)

	const details: any = {
		assetId,
		amount: formatU128ToBalance(amount, assetId),
		from: getExtrinsicSigner(ctx, call),
		to: toAddress(receiver),
		comment: additionalData,
		assetFee: '0', // fee paid in asset
		xorFee, // fee paid in XOR (by default 100% of network fee)
	}

	assertDefined(call.extrinsic)
	const exchangeEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['LiquidityProxy.Exchange'])
	if (exchangeEvent) {
		const exchangeEventData = getEventData(ctx, events.liquidityProxy.exchange, exchangeEvent)

		const [, , , , baseAssetAmount, targetAssetAmount] = exchangeEventData

		const assetSpent = formatU128ToBalance(baseAssetAmount, assetId)
		const xorReceived = formatU128ToBalance(targetAssetAmount, XOR)
		const xorSpent = new BigNumber(xorFee.toString()).minus(new BigNumber(xorReceived)).toString()

		details.assetFee = assetSpent
		details.xorFee = xorSpent
	}

	await createCallHistoryElement(ctx, call, details);
}
