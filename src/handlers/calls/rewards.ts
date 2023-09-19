import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { Block, CallItem, Context } from '../../types'
import { findEventsByExtrinsicHash, getAssetsTransferEventData } from '../../utils/events'

export async function rewardsCallHandler(
	ctx: Context,
	block: Block,
	callItem: (
		| CallItem<'PswapDistribution.claim_incentive'>
		| CallItem<'Rewards.claim'>
		| CallItem<'VestedRewards.claim_rewards'>
		| CallItem<'VestedRewards.claim_crowdloan_rewards'>
	)
): Promise<void> {
    ctx.log.debug('Caught rewards claim extrinsic')

    const extrinsicHash = callItem.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callItem)

    if (historyElement.execution.success) {
        const rewards = findEventsByExtrinsicHash(
            block,
            extrinsicHash,
			['Tokens.Transfer']
        ).reduce((buffer: { assetId: string, amount: string }[], eventItem) => {
			const data = getAssetsTransferEventData(ctx, block, eventItem)
            buffer.push({
				assetId: data.assetId,
				amount: data.amount.toString(),
			})
            return buffer
        }, [])

        await addDataToHistoryElement(ctx, block, historyElement, rewards)
    }

    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved reward claim extrinsic with ${extrinsicHash} txid =====`)
}