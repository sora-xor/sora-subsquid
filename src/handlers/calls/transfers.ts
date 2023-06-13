import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallItem, Context } from '../../processor'
import { AssetsTransferEvent } from '../../types/generated/events'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetsTransferCall } from '../../types/generated/calls'
import { Address, AssetId } from '../../types'
import { toAddress, toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function transfersHandler(ctx: Context, block: Block, callItem: CallItem<'Assets.transfer', true>): Promise<void> {
    ctx.log.debug('Caught transfer extrinsic')

	const blockHeight = block.header.height
	const extrinsicHash = callItem.extrinsic.hash
	const extrinsicSigner = toAddress(callItem.call.origin.value.value)
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
		from: Address
		to: Address
		assetId: AssetId
		amount: string
	}

    if (historyElement.execution.success) {
		const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Assets.Transfer'])
        if (!eventItem) {
			throw new Error(`[${blockHeight}] Cannot find event "Assets.Transfer" with extrinsic hash ${extrinsicHash}`)
		}
		

		const event = new AssetsTransferEvent(ctx, eventItem.event)

		let eventRec: {
			from: Address,
			to: Address,
			assetId: AssetId,
			amount: bigint
		}
		if (event.isV1) {
			const [from, to, assetId, amount] = event.asV1
			eventRec = {
				from: toAddress(from),
				to: toAddress(to),
				assetId: toAssetId(assetId),
				amount
			}
		} else if (event.isV42) {
			const [from, to, assetId, amount] = event.asV42
			eventRec = {
				from: toAddress(from),
				to: toAddress(to),
				assetId: toAssetId(assetId.code),
				amount
			}
		} else {
			throw unsupportedSpecError(block)
		}
		const { from, to, assetId, amount } = eventRec

		if (extrinsicSigner !== from) {
			throw new Error('Transfer event sender is not the extrinsic signer')
		}

        details = {
            from,
            to,
            assetId,
            amount: formatU128ToBalance(amount, assetId)
        }
    }

    else {
		const call = new AssetsTransferCall(ctx, callItem.call)

		let callRec: {
			to: Address,
			assetId: AssetId,
			amount: bigint
		}
		if (call.isV1) {
			const { to, assetId, amount } = call.asV1
			callRec = {
				to: toAddress(to),
				assetId: toAssetId(assetId),
				amount
			}
		} else if (call.isV42) {
			const { to, assetId, amount } = call.asV42
			callRec = {
				to: toAddress(to),
				assetId: toAssetId(assetId.code),
				amount
			}
		} else {
			throw unsupportedSpecError(block)
		}
		const { to, assetId, amount } = callRec

        details = {
            from: extrinsicSigner,
            to,
            amount: formatU128ToBalance(amount, assetId),
            assetId
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved transfer with ${extrinsicHash} txid =====`)

}