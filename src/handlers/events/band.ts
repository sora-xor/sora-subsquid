import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets'
import { BlockContext, EventItem } from "../../types"
import { BandSymbolsRelayedEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'
import { toReferenceSymbol } from '../../utils'
import { debug, logEventHandler } from '../../utils/log'

export async function bandRateUpdateEventHandler(ctx: BlockContext, eventItem: EventItem<'Band.SymbolsRelayed'>): Promise<void> {
	logEventHandler(ctx, eventItem)

	const event = new BandSymbolsRelayedEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

	for (const item of data) {
		if (!Array.isArray(item)) return

		const [ticker, rate] = item

		const referenceSymbol = toReferenceSymbol(ticker)
		const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol)

		if (syntheticAssetId) {
			const price = formatU128ToBalance(rate, syntheticAssetId)

			debug(ctx, 'EventHandler', `Synthetic asset '${syntheticAssetId}' price update: ${price}`)

			await assetSnapshotsStorage.updatePrice(ctx, syntheticAssetId, price)
		}
	}
}