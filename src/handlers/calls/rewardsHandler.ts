import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'

export async function rewardsHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

    if (call.kind !== 'call' || !(
        call.name === 'PswapDistribution.claim_incentive'
        || call.name === 'Rewards.claim'
        || call.name === 'VestedRewards.claim_rewards'
        || call.name === 'VestedRewards.claim_crowdloan_rewards'
    )) return

    ctx.log.debug('Caught rewards claim extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, call)

    if (!historyElement) return

    if (historyElement.execution.success) {

        const rewards = block.items.reduce((buffer: { assetId: string, amount: string }[], e) => {
            if (e.name === 'Tokens.Transfer') {
                const [asset, , ,amount] = e.event.args
                buffer.push({ assetId: getAssetId(asset), amount: amount.toString() })
            }
            return buffer
        }, [])

        await addDataToHistoryElement(ctx, historyElement, rewards)
    }

    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved reward claim extrinsic with ${call.extrinsic.hash} txid =====`)

}