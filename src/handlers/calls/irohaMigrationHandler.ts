import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'

export async function handlerIrohaMigration(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || call.name !== 'IrohaMigration.migrate') return

    ctx.log.debug('Caught iroha migration extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    let details = new Object()

    if (historyElement.execution.success) {

        const assetTransferEvent = block.items.find(e => e.name === 'Currencies.Deposited')

        if (assetTransferEvent?.kind !== 'event') return
        
        if (assetTransferEvent) {
            const [asset, , amount] = assetTransferEvent.event.args
            let assetId = getAssetId(asset)
            details = {
                assetId: assetId,
                amount: formatU128ToBalance(amount.toString(), assetId)
            }

        } else {
            const assetTransferEvent = block.items.find(e => e.name === 'Currencies.Transferred')

            if (assetTransferEvent?.kind !== 'event') return

            if (assetTransferEvent) {
                const [asset, , , amount] = assetTransferEvent.event.args
                let assetId = getAssetId(asset)
                details = {
                    assetId: assetId,
                    amount: formatU128ToBalance(amount.toString(), assetId)
                }

            }
        }

        await addDataToHistoryElement(ctx, historyElement, details)
        await updateHistoryElementStats(ctx, historyElement)

        ctx.log.debug(`===== Saved iroha migration with ${call.extrinsic.hash} txid =====`)

    }

}
