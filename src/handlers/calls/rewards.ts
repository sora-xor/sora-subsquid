import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { Block, CallEntity, Context } from '../../processor'
import { findEventsWithExtrinsic } from '../../utils/events'
import { TokensTransferEvent } from '../../types/generated/events'
import { toHex } from '@subsquid/substrate-processor'

export async function rewardsHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
    if (!(
           callEntity.name === 'PswapDistribution.claim_incentive'
        || callEntity.name === 'Rewards.claim'
        || callEntity.name === 'VestedRewards.claim_rewards'
        || callEntity.name === 'VestedRewards.claim_crowdloan_rewards'
    )) return

    ctx.log.debug('Caught rewards claim extrinsic')
	
	const blockHeight = block.header.height
    const extrinsicHash = callEntity.extrinsic.hash
    const historyElement = await createHistoryElement(ctx, block, callEntity)

    if (historyElement.execution.success) {
        const rewards = findEventsWithExtrinsic(
            'Tokens.Transfer',
            block,
            extrinsicHash
        ).reduce((buffer: { assetId: string, amount: string }[], eventEntity) => {
            const event = new TokensTransferEvent(ctx, eventEntity.event)
            if (event.isV42) {
                const { currencyId, amount } = event.asV42
                buffer.push({ assetId: toHex(currencyId.code), amount: amount.toString() })
            } else {
                throw new Error(`[${blockHeight}] Unsupported spec`)
            }
            return buffer
        }, [])

        await addDataToHistoryElement(ctx, historyElement, rewards)
    }

    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved reward claim extrinsic with ${extrinsicHash} txid =====`)
}