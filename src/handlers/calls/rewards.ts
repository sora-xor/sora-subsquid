import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { Block, CallItem, Context } from '../../processor'
import { findEventsByExtrinsicHash } from '../../utils/events'
import { TokensTransferEvent } from '../../types/generated/events'
import { toHex } from '@subsquid/substrate-processor'
import { unsupportedSpecError } from '../../utils/error'

export async function rewardsHandler(
	ctx: Context,
	block: Block,
	callItem: (
		| CallItem<'PswapDistribution.claim_incentive', true>
		| CallItem<'Rewards.claim', true>
		| CallItem<'VestedRewards.claim_rewards', true>
		| CallItem<'VestedRewards.claim_crowdloan_rewards', true>
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
            const event = new TokensTransferEvent(ctx, eventItem.event)
            if (event.isV42) {
                const { currencyId, amount } = event.asV42
                buffer.push({ assetId: toHex(currencyId.code), amount: amount.toString() })
            } else {
                throw unsupportedSpecError(block)
            }
            return buffer
        }, [])

        await addDataToHistoryElement(ctx, block, historyElement, rewards)
    }

    await updateHistoryElementStats(ctx, block,historyElement)

    ctx.log.debug(`===== Saved reward claim extrinsic with ${extrinsicHash} txid =====`)
}