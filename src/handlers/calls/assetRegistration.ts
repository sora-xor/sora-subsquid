import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { AssetsAssetRegisteredEvent } from '../../types/generated/events'
import { AssetsRegisterCall } from '../../types/generated/calls'
import { AssetId } from '../../types'
import { getEntityData } from '../../utils/entities'
import { getAssetId } from '../../utils/assets'
import { logCallHandler } from '../../utils/log'

export async function assetRegistrationCallHandler(ctx: Context, block: Block, callItem: CallItem<'Assets.register'>): Promise<void> {
	logCallHandler(ctx, block, callItem)

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (!historyElement) return

    let details: {
		assetId: AssetId
	}

    if (historyElement.execution.success) {
        const assetRegistrationEventItem = findEventByExtrinsicHash(block, extrinsicHash, ['Assets.AssetRegistered'], true)
		const assetRegistrationEvent = new AssetsAssetRegisteredEvent(ctx, assetRegistrationEventItem.event)
		const assetRegistrationEventData = getEntityData(ctx, block, assetRegistrationEvent, assetRegistrationEventItem)

		const assetId = getAssetId(assetRegistrationEventData[0])

		details = {
			assetId
		}
    }

    else {
        const call = new AssetsRegisterCall(ctx, callItem.call)
		const data = getEntityData(ctx, block, call, callItem)
	
		const symbol = getAssetId(data.symbol)

        details = {
            assetId: symbol
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)

    ctx.log.debug(`[${block.header.height}] ===== Saved asset registration with ${extrinsicHash} txid =====`)

}