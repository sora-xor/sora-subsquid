import { Block, EventItem, Context } from '../../types'
import { AssetsAssetRegisteredEvent, XstPoolSyntheticAssetEnabledEvent } from '../../types/generated/events'
import { AssetsAssetInfosStorage } from '../../types/generated/storage'
import { decodeAssetId, toReferenceSymbol } from '../../utils'
import { assetPrecisions, getAssetId, assetStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { getEntityData } from '../../utils/entities'

export async function assetRegistrationEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Assets.AssetRegistered'>): Promise<void> {
	const event = new AssetsAssetRegisteredEvent(ctx, eventItem.event)

	const [asset] = getEntityData(ctx, block, event, eventItem)
	const assetId = getAssetId(asset)

	if (!assetPrecisions.has(assetId)) {
		const storage = new AssetsAssetInfosStorage(ctx, block.header)
		const [, , precision,] = (
			storage.isV1   ||
			storage.isV26 ||
			storage.isV33Stage
		)
			? await getEntityData(ctx, block, storage, { kind: 'storage', name: AssetsAssetInfosStorage.name }, ['42', '42Stage', '60Dev'] as const).get(decodeAssetId(assetId))
			: await getEntityData(ctx, block, storage, { kind: 'storage', name: AssetsAssetInfosStorage.name }, ['1', '26', '33Stage'] as const).get({ code: decodeAssetId(assetId) })
		assetPrecisions.set(assetId, precision)
	}

	await assetStorage.getOrCreateAsset(ctx, block, assetId)
}

export async function syntheticAssetEnabledEventHandler(ctx: Context, block: Block, eventItem: EventItem<'XstPool.SyntheticAssetEnabled'>): Promise<void> {
	const event = new XstPoolSyntheticAssetEnabledEvent(ctx, eventItem.event)
	
	const data = getEntityData(ctx, block, event, eventItem)

	if (!Array.isArray(data)) return

	const [asset, ticker] = data
	const assetId = getAssetId(asset)
	const referenceSymbol = toReferenceSymbol(ticker)

	tickerSyntheticAssetId.set(referenceSymbol, assetId)
	// synthetic assets always have 18 decimals
	assetPrecisions.set(assetId, 18)

	ctx.log.debug(`Synthetic asset enabled ${assetId}, referenceSymbol ${referenceSymbol}`)

	await assetStorage.getOrCreateAsset(ctx, block, assetId)
}