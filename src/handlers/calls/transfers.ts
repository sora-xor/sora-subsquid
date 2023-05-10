import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { AssetsTransferEvent } from '../../types/events'
import { findEventWithExtrinsic } from '../../utils/events'
import { AssetsTransferCall } from '../../types/generated/calls'
import { Address, AssetAmount, AssetId } from '../../types'
import { decodeAddress, toAddress, toAssetId } from '../../utils'
import { decodeHex, toHex } from '@subsquid/substrate-processor'

export async function transfersHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'Assets.transfer') return

    ctx.log.debug('Caught transfer extrinsic')

	const blockHeight = block.header.height
	const extrinsicHash = callEntity.extrinsic.hash
	const extrinsicSigner = toAddress(callEntity.call.origin.value.value)
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    if (!historyElement) return

    let details: {
		from: Address
		to: Address
		assetId: AssetId
		amount: string
	}

    if (historyElement.execution.success) {
		const eventEntity = findEventWithExtrinsic('Assets.Transfer', block, extrinsicHash)
        if (!eventEntity) {
			throw new Error(`[${blockHeight}] Cannot find event "Assets.Transfer" with extrinsic hash ${extrinsicHash}`)
		}
		

		const event = new AssetsTransferEvent(ctx, eventEntity.event)

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
			throw new Error(`[${blockHeight}] Unsupported spec`)
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
		const call = new AssetsTransferCall(ctx, callEntity.call)

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
			throw new Error(`[${blockHeight}] Unsupported spec`)
		}
		const { to, assetId, amount } = callRec

        details = {
            from: extrinsicSigner,
            to,
            amount: formatU128ToBalance(amount, assetId),
            assetId
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved transfer with ${extrinsicHash} txid =====`)

}