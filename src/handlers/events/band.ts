import { tickerSyntheticAssetId, assetSnapshotsStorage, formatU128ToBalance } from '../../utils/assets'
import { Block, Context, EventItem } from "../../types"
import { BandSymbolsRelayedEvent } from '../../types/generated/events'
import { getEntityData } from '../../utils/entities'
import { toReferenceSymbol } from '../../utils'
import { logEventHandler } from '../../utils/log'

export async function bandRateUpdateHandler(ctx: Context, block: Block, eventItem: EventItem<'Band.SymbolsRelayed'>): Promise<void> {
	logEventHandler(ctx, block, eventItem)

	const event = new BandSymbolsRelayedEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, block, event, eventItem)

	for (const item of data) {
		if (!Array.isArray(item)) return

		const [ticker, rate] = item

		const referenceSymbol = toReferenceSymbol(ticker)
		const syntheticAssetId = tickerSyntheticAssetId.get(referenceSymbol)

		if (syntheticAssetId) {
			const price = formatU128ToBalance(rate, syntheticAssetId)

			ctx.log.debug(`Synthetic asset price update ${syntheticAssetId}: ${price}`)

			await assetSnapshotsStorage.updatePrice(ctx, block, syntheticAssetId, price)
		}
	}
}