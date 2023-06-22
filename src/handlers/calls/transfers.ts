import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { AssetsTransferEvent } from '../../types/generated/events'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetsTransferCall } from '../../types/generated/calls'
import { Address, AssetId } from '../../types'
import { toAddress } from '../../utils'
import { getEntityData } from '../../utils/entities'
import { CannotFindEventError } from '../../utils/errors'

export async function transfersCallHandler(ctx: Context, block: Block, callItem: CallItem<'Assets.transfer'>): Promise<void> {
    ctx.log.debug('Caught transfer extrinsic')

	const blockHeight = block.header.height
	const extrinsicHash = callItem.extrinsic.hash
	const extrinsicSigner: Address | null = callItem.call.origin ? toAddress(callItem.call.origin.value.value) : null
	if (!extrinsicSigner) {
		ctx.log.error(`[${blockHeight}]: Cannot get extrinsic signer`)
		console.log(callItem)
	}
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
		from: Address | null
		to: Address
		assetId: AssetId
		amount: string
	}

    if (historyElement.execution.success) {
		const eventName = 'Assets.Transfer'
		const eventItem = findEventByExtrinsicHash(block, extrinsicHash, [eventName])

        if (!eventItem) {
			throw new CannotFindEventError(block, extrinsicHash, eventName)
		}
		
		const event = new AssetsTransferEvent(ctx, eventItem.event)
		const data = getEntityData(ctx, block, event, eventItem)

		const from = toAddress(data[0])
		const to = toAddress(data[1])
		const assetId = getAssetId(data[2])
		const amount = data[3] as AssetAmount

		if (extrinsicSigner !== from) {
			throw new Error(`[${blockHeight}] Transfer event sender is not the extrinsic signer`)
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
		const data = getEntityData(ctx, block, call, callItem)

		const to = toAddress(data.to)
		const assetId = getAssetId(data.assetId)
		const amount = data.amount

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