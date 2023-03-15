import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { assetPrecisions, getAssetId, assetStorage } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventEntityWithExtrinsic } from '../../utils/events'
import { AssetsAssetRegisteredEvent } from '../../types/events'
import { decodeUint8 } from '../../utils'
import { AssetsRegisterCall } from '../../types/calls'
import { AssetsAssetInfosStorage } from '../../types/storage'

export async function assetRegistrationHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {
    if (call.name !== 'Assets.register') return

    ctx.log.debug('Caught asset registration extrinsic')

    const extrinsicHash = call.extrinsic.hash

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {
        const assetRegistrationEventEntity = findEventEntityWithExtrinsic('Assets.AssetRegistered', block, extrinsicHash)

        if (assetRegistrationEventEntity) {
            const assetRegistrationEvent = new AssetsAssetRegisteredEvent(ctx, assetRegistrationEventEntity.event)

            let assetId: Uint8Array

            if (assetRegistrationEvent.isV1) {
                assetId = assetRegistrationEvent.asV1[0]
            } else if (assetRegistrationEvent.isV42) {
                assetId = assetRegistrationEvent.asV42[0].code
            } else {
                throw new Error('Unsupported spec')
            }
    
            details = {
                assetId: decodeUint8(assetId)
            }
    
            // TODO: fix it
            const storage = new AssetsAssetInfosStorage(ctx)
            storage.asV1.get(assetId)
            // if (!assetPrecisions.has(assetId)) {
            //     const [, , precision,] = await api.query.assets.assetInfos(assetId) as any
            //     assetPrecisions.set(assetId, precision.toNumber())
            // }
    
            await assetStorage.getAsset(ctx, assetId)
        } else {
            ctx.log.error('Cannot find "Assets.AssetRegistered" event')
        }
    }

    else {
        const assetsRegisterCall = new AssetsRegisterCall(ctx, call.call)

        // TODO: check type and decoding
        let symbol: string
        if (assetsRegisterCall.isV1) {
            symbol = decodeUint8(assetsRegisterCall.asV1.symbol)
        } else if (assetsRegisterCall.isV22) {
            symbol = decodeUint8(assetsRegisterCall.asV22.symbol)
        } else if (assetsRegisterCall.isV26) {
            symbol = decodeUint8(assetsRegisterCall.asV26.symbol)
        } else {
            throw new Error('Unsupported spec')
        }

        details = {
            assetId: symbol
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved asset registration with ${extrinsicHash} txid =====`)

}