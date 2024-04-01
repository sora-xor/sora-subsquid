import { createCallHistoryElement } from '../../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { BlockContext, Call } from '../../../types'
import { findEventByExtrinsicHash } from '../../../utils/events'
import { getEventData } from '../../../utils/entities'
import { logStartProcessingCall } from '../../../utils/logs'
import { events } from '../../../types/generated/merged'
import { assertDefined } from '../../../utils'

export async function irohaMigrationMigrateCallHandler(ctx: BlockContext, call: Call<'IrohaMigration.migrate'>): Promise<void> {
    logStartProcessingCall(ctx, call)

    const details: any = {};

	assertDefined(call.extrinsic)
	const currenciesDepositedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Deposited'])

    if (currenciesDepositedEvent) {
		const [asset, , amount] = getEventData(ctx, events.currencies.deposited, currenciesDepositedEvent)
        const assetId = getAssetId(asset);

        details.assetId = assetId;
        details.amount = formatU128ToBalance(amount, assetId);

    } else {
		const currenciesTransferredEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Currencies.Transferred'])

        if (currenciesTransferredEvent) {
            const [asset, , , amount] = getEventData(ctx, events.currencies.transferred, currenciesTransferredEvent)
            const assetId = getAssetId(asset);

            details.assetId = assetId;
            details.amount = formatU128ToBalance(amount, assetId);
        }
    }

    await createCallHistoryElement(ctx, call, details)
}
