import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { assetPrecisions, assetStorage } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { AssetsAssetRegisteredEvent } from '../../types/generated/events'
import { AssetsRegisterCall } from '../../types/generated/calls'
import { AssetsAssetInfosStorage } from '../../types/generated/storage'
import { AssetId } from '../../types'
import { toAssetId } from '../../utils'

export async function assetRegistrationHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
    if (callEntity.name !== 'Assets.register') return

    ctx.log.debug('Caught asset registration extrinsic')

	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash

    const historyElement = await createHistoryElement(ctx, block, callEntity)

    if (!historyElement) return

    let details: {
		assetId: AssetId
	}

    if (historyElement.execution.success) {
        const assetRegistrationEventEntity = findEventWithExtrinsic('Assets.AssetRegistered', block, extrinsicHash)

        if (assetRegistrationEventEntity) {
            const assetRegistrationEvent = new AssetsAssetRegisteredEvent(ctx, assetRegistrationEventEntity.event)

            let assetIdDecoded: Uint8Array

            if (assetRegistrationEvent.isV1) {
                assetIdDecoded = assetRegistrationEvent.asV1[0]
            } else if (assetRegistrationEvent.isV42) {
                assetIdDecoded = assetRegistrationEvent.asV42[0].code
            } else {
                throw new Error(`[${blockHeight}] Unsupported spec`)
            }

			const assetId = toAssetId(assetIdDecoded)
    
            details = {
                assetId
            }
    
            if (!assetPrecisions.has(assetId)) {
                const assetInfosStorage = new AssetsAssetInfosStorage(ctx, block.header)
                let precision: number

                if (assetInfosStorage.isV1) {
                    precision = (await assetInfosStorage.asV1.get(assetIdDecoded))[2]
                } else if (assetInfosStorage.isV26) {
                    precision = (await assetInfosStorage.asV26.get(assetIdDecoded))[2]
                } else if (assetInfosStorage.isV42) {
                    precision = (await assetInfosStorage.asV42.get({ code: assetIdDecoded }))[2]
                } else {
                    throw new Error(`[${blockHeight}] Unsupported spec`)
                }
                assetPrecisions.set(assetId, precision);
            }
    
            await assetStorage.getOrCreateAsset(ctx, block, assetId)
        } else {
			throw new Error(`[${blockHeight}] Cannot find event "Assets.AssetRegistered" with extrinsic hash ${extrinsicHash}`)
        }
    }

    else {
        const call = new AssetsRegisterCall(ctx, callEntity.call)

        let symbolDecoded: Uint8Array

        if (call.isV1) {
            symbolDecoded = call.asV1.symbol
        } else if (call.isV22) {
            symbolDecoded = call.asV22.symbol
        } else if (call.isV26) {
            symbolDecoded = call.asV26.symbol
        } else {
            throw new Error(`[${blockHeight}] Unsupported spec`)
        }
		const symbol = toAssetId(symbolDecoded)

        details = {
            assetId: symbol
        }
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)

    ctx.log.debug(`===== Saved asset registration with ${extrinsicHash} txid =====`)

}