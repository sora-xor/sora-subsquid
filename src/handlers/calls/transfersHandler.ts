// import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
// import { formatU128ToBalance } from '../../utils/assets'
// import { Block, CallEntity, Context } from '../../processor'

// export async function transfersHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

//     if (callEntity.name !== 'Assets.transfer') return

//     ctx.log.debug('Caught transfer extrinsic')

//     const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

//     if (!historyElement) return

//     let details = new Object()

//     if (historyElement.execution.success) {
//         const transferEvent = block.items.find(e => e.name === 'Assets.Transfer')
//         if (!transferEvent || transferEvent.kind !== 'event') return // TODO: make proper exit
//         const [, to, assetId, amount] = transferEvent.event.args

//         details = {
//             from: call.call.origin.value.value,  // TODO: check it
//             to: to.toString(),
//             amount: formatU128ToBalance(amount.toString(), getAssetId(assetId)),
//             assetId: getAssetId(assetId)
//         }
//     }

//     else {
//         const [assetId, to, amount] = call.call.args

//         details = {
//             from: call.call.origin.value.value, // TODO: check it
//             to: to.toString(),
//             amount: formatU128ToBalance(amount.toString(), getAssetId(assetId)),
//             assetId: getAssetId(assetId)
//         }
//     }

//     await addDataToHistoryElement(ctx, historyElement, details)
//     await updateHistoryElementStats(ctx, historyElement)

//     ctx.log.debug(`===== Saved transfer with ${callEntity.extrinsic.hash} txid =====`)

// }