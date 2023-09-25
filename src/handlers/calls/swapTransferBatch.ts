import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'

import { Address, Block, CallItem, Context } from '../../types'
import { LiquidityProxySwapTransferBatchCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'
import { toAddress } from '../../utils'
import { findEventByExtrinsicHash, findEventsByExtrinsicHash } from '../../utils/events'
import { AssetsTransferEvent, LiquidityProxyBatchSwapExecutedEvent, LiquidityProxyExchangeEvent, TransactionPaymentTransactionFeePaidEvent, XorFeeFeeWithdrawnEvent } from '../../types/generated/events'

function getLiquidityProxyBatchSwapExecutedEventData (ctx: Context, block: Block, extrinsicHash: string) {
	const name = 'LiquidityProxy.BatchSwapExecuted'
	const eventItem = findEventByExtrinsicHash(block, extrinsicHash, [name])
	if (eventItem === null) throw new Error(`[${block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new LiquidityProxyBatchSwapExecutedEvent(ctx, eventItem.event)
	return getEntityData(ctx, block, event, eventItem)
}

function getXorFeeFeeWithdrawnEventData (ctx: Context, block: Block, extrinsicHash: string) {
	const name = 'XorFee.FeeWithdrawn'
	const eventItem = findEventByExtrinsicHash(block, extrinsicHash, [name])
	if (eventItem === null) throw new Error(`[${block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new XorFeeFeeWithdrawnEvent(ctx, eventItem.event)
	return getEntityData(ctx, block, event, eventItem)
}

function getTransactionPaymentTransactionFeePaidEventData (ctx: Context, block: Block, extrinsicHash: string) {
	const name = 'TransactionPayment.TransactionFeePaid'
	const eventItem = findEventByExtrinsicHash(block, extrinsicHash, [name])
	if (eventItem === null) throw new Error(`[${block.header.height}] Event ${name} not found for extrinsic ${extrinsicHash}`)
	const event = new TransactionPaymentTransactionFeePaidEvent(ctx, eventItem.event)
	return getEntityData(ctx, block, event, eventItem)
}

const handleAndSaveExtrinsic = async (ctx: Context, block: Block, callItem: CallItem<'LiquidityProxy.swap_transfer_batch'>): Promise <void> => {
    const blockNumber = block.header.height
	const extrinsicHash = callItem.extrinsic.hash
	const historyElement = await createHistoryElement(ctx, block, callItem)

	const call = new LiquidityProxySwapTransferBatchCall(ctx, callItem.call)
	const data = getEntityData(ctx, block, call, callItem)

    const inputAssetId = getAssetId(data.inputAssetId)
	const extrinsicSigner: Address | null = callItem.call.origin ? toAddress(callItem.call.origin.value.value) : null

    const details: any = {}

    details.inputAssetId = getAssetId(data.inputAssetId)
    details.selectedMarket = data.selectedSourceTypes.map(lst => lst.toString()).toString()
    details.maxInputAmount = data.maxInputAmount
    details.blockNumber = blockNumber
    details.from = extrinsicSigner

	if ('receivers' in data) {
		details.receivers = data.receivers
	} else  if ('swapBatches' in data) {
		details.swapBatches = data.swapBatches
	}
    
    if (historyElement.execution.success) {
        const [adarFee, inputAmount] = getLiquidityProxyBatchSwapExecutedEventData(ctx, block, extrinsicHash)
        details.adarFee = formatU128ToBalance(adarFee, inputAssetId)
        details.inputAmount = formatU128ToBalance(inputAmount, inputAssetId)

        const [, networkFee] = getXorFeeFeeWithdrawnEventData(ctx, block, extrinsicHash)
        details.networkFee = formatU128ToBalance(networkFee, XOR)

        const { actualFee } = getTransactionPaymentTransactionFeePaidEventData(ctx, block, extrinsicHash)
        details.actualFee = formatU128ToBalance(actualFee, XOR)

        const assetsTransfers = findEventsByExtrinsicHash(block, extrinsicHash, ['Assets.Transfer']).map(eventItem => {
			const event = new AssetsTransferEvent(ctx, eventItem.event)
			const eventData = getEntityData(ctx, block, event, eventItem)
            const [from, to, asset, amount] = eventData
            return {
                from: from.toString(),
                to: to.toString(),
                amount: formatU128ToBalance(amount, getAssetId(asset)),
                assetId: getAssetId(asset)
            }
        })
        details.transfers = assetsTransfers

		const exchanges = findEventsByExtrinsicHash(block, extrinsicHash, ['LiquidityProxy.Exchange']).map(eventItem => {
			const event = new LiquidityProxyExchangeEvent(ctx, eventItem.event)
			const eventData = getEntityData(ctx, block, event, eventItem)
            const [senderAddress, dexId, inputAsset, outputAsset, inputAmount, outputAmount, feeAmount] = eventData
            return {
                senderAddress: senderAddress.toString(),
                dexId: dexId.toString(),
                inputAssetId: getAssetId(inputAsset),
                outputAssetId: getAssetId(outputAsset),
                inputAmount: formatU128ToBalance(inputAmount, getAssetId(inputAsset)),
                outputAmount: formatU128ToBalance(outputAmount, getAssetId(outputAsset)),
                feeAmount: formatU128ToBalance(feeAmount, getAssetId(inputAsset)),
            }
        })
        details.exchanges = exchanges
    } else {
        details.exchanges = []
        details.transfers = []
    }

    await addDataToHistoryElement(ctx, block, historyElement, details)
    await updateHistoryElementStats(ctx, block, historyElement)
}

export async function swapTransferBatchHandler(ctx: Context, block: Block, callItem: CallItem<'LiquidityProxy.swap_transfer_batch'>): Promise <void> {
    ctx.log.debug(`[${block.header.height}] Caught swap transfer batch extrinsic`)

    await handleAndSaveExtrinsic(ctx, block, callItem)

    ctx.log.debug(`[${block.header.height}] ===== Saved swap transfer batch with ${callItem.extrinsic.hash} txid =====`)
}
