import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { AssetsTransferEvent } from '../../types/events'
import { findEventWithExtrinsic } from '../../utils/events'
import { toHex } from '@subsquid/substrate-processor'
import { AssetsTransferCall } from '../../types/calls'

export async function transfersHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'Assets.transfer') return

    ctx.log.debug('Caught transfer extrinsic')

	const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {
		const eventEntity = findEventWithExtrinsic('Assets.Transfer', block, extrinsicHash)
        if (!eventEntity) throw new Error('Cannot find event: Assets.Transfer')

		const event = new AssetsTransferEvent(ctx, eventEntity.event)

		let eventRec: {
			from: Uint8Array,
			to: Uint8Array,
			assetId: Uint8Array,
			amount: bigint
		}
		if (event.isV1) {
			const [from, to, assetId, amount] = event.asV1
			eventRec = { from, to, assetId, amount }
		} else if (event.isV42) {
			const [from, to, assetId, amount] = event.asV42
			eventRec = { from, to, assetId: assetId.code, amount }
		} else {
			throw new Error('Unsupported spec')
		}
		const { from, to, assetId, amount } = eventRec

		if (callEntity.call.origin.value.value !== toHex(from)) {
			throw new Error('Transfer event sender is not the extrinsic signer')
		}

        details = {
            from: toHex(from),
            to: toHex(to),
            assetId: toHex(assetId),
            amount: formatU128ToBalance(amount, assetId)
        }
    }

    else {
		const call = new AssetsTransferCall(ctx, callEntity.call)

		let callRec: {
			to: Uint8Array,
			assetId: Uint8Array,
			amount: bigint
		}
		if (call.isV1) {
			const { to, assetId, amount } = call.asV1
			callRec = { to, assetId, amount }
		} else if (call.isV42) {
			const { to, assetId, amount } = call.asV42
			callRec = { to, assetId: assetId.code, amount }
		} else {
			throw new Error('Unsupported spec')
		}
		const { to, assetId, amount } = callRec

        details = {
            from: callEntity.call.origin.value.value, // TODO: check it
            to: toHex(to),
            amount: formatU128ToBalance(amount, assetId),
            assetId: toHex(assetId)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved transfer with ${extrinsicHash} txid =====`)

}