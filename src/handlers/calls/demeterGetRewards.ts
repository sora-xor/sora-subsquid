import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformRewardWithdrawnEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformGetRewardsCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'

export async function demeterGetRewardsCallHandler(ctx: Context, block: Block, callItem: CallItem<'DemeterFarmingPlatform.get_rewards'>): Promise<void> {
	ctx.log.debug(`[${block.header.height}] Caught demeterFarmingPlatform getRewards extrinsic`)

  const extrinsicHash = callItem.extrinsic.hash

  const call = new DemeterFarmingPlatformGetRewardsCall(ctx, callItem.call)

  const data = getEntityData(ctx, block, call, callItem)

  const assetId = getAssetId(data.rewardAsset)
  const isFarm = data.isFarm

  let amount: string

  const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['DemeterFarmingPlatform.RewardWithdrawn'])

  if (eventItem) {
    const event = new DemeterFarmingPlatformRewardWithdrawnEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, block, event, eventItem)

	const assetAmount = data[1] as AssetAmount

    amount = formatU128ToBalance(assetAmount, assetId)
  } else {
    amount = '0'
  }

  const details = {
    assetId: assetId,
    isFarm: isFarm,
    amount
  }

  const historyElement = await createHistoryElement(ctx, block, callItem)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, block, historyElement, details)
  await updateHistoryElementStats(ctx, block,historyElement)

  ctx.log.debug(`[${block.header.height}] ===== Saved demeterFarmingPlatform getRewards with ${extrinsicHash} txid =====`)
}