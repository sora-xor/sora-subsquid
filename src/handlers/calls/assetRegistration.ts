import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { assetPrecisions, assetStorage } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { AssetsAssetRegisteredEvent } from '../../types/events'
import { AssetsRegisterCall } from '../../types/calls'
import { AssetsAssetInfosStorage } from '../../types/storage'
import { toHex } from '@subsquid/substrate-processor'

export async function assetRegistrationHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
    if (callEntity.name !== 'Assets.register') return

    ctx.log.debug('Caught asset registration extrinsic')

    const extrinsicHash = callEntity.extrinsic.hash

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {
        const assetRegistrationEventEntity = findEventWithExtrinsic('Assets.AssetRegistered', block, extrinsicHash)

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
                assetId: toHex(assetId)
            }
    
            if (!assetPrecisions.has(toHex(assetId))) {
                const assetInfosStorage = new AssetsAssetInfosStorage(ctx, block.header)
                let precision: number
                if (assetInfosStorage.isV1) {
                    precision = (await assetInfosStorage.asV1.get(assetId))[2]
                } else if (assetInfosStorage.isV26) {
                    precision = (await assetInfosStorage.asV26.get(assetId))[2]
                } else if (assetInfosStorage.isV42) {
                    precision = (await assetInfosStorage.asV42.get({ code: assetId }))[2]
                } else {
                    throw new Error('Unsupported spec')
                }
                assetPrecisions.set(toHex(assetId), precision);
            }
    
            await assetStorage.getAsset(ctx, assetId)
        } else {
            throw new Error('Cannot find event: Assets.AssetRegistered')
        }
    }

    else {
        const call = new AssetsRegisterCall(ctx, callEntity.call)

        let symbol: Uint8Array
        if (call.isV1) {
            symbol = call.asV1.symbol
        } else if (call.isV22) {
            symbol = call.asV22.symbol
        } else if (call.isV26) {
            symbol = call.asV26.symbol
        } else {
            throw new Error('Unsupported spec')
        }

        details = {
            assetId: toHex(symbol)
        }
    }

    await addDataToHistoryElement(ctx, historyElement, details)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved asset registration with ${extrinsicHash} txid =====`)

}