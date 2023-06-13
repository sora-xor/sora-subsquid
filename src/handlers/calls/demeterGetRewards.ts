import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallItem, Context } from '../../processor'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformRewardWithdrawnEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformGetRewardsCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { AssetId } from '../../types'
import { unsupportedSpecError } from '../../utils/error'

export async function demeterGetRewardsHandler(ctx: Context, block: Block, callItem: CallItem<'DemeterFarmingPlatform.get_rewards', true>): Promise<void> {
	ctx.log.debug('Caught demeterFarmingPlatform getRewards extrinsic')

  const extrinsicHash = callItem.extrinsic.hash

  const call = new DemeterFarmingPlatformGetRewardsCall(ctx, callItem.call)

  let callRec: {
    assetId: AssetId
    isFarm: boolean
  }
  if (call.isV33) {
    const { rewardAsset, isFarm } = call.asV33
    callRec = {
      assetId: toAssetId(rewardAsset),
      isFarm
    }
  } else if (call.isV42) {
    const { rewardAsset, isFarm } = call.asV42
    callRec = {
      assetId: toAssetId(rewardAsset.code),
      isFarm
    }
  } else if (call.isV43) {
    const { rewardAsset, isFarm } = call.asV43
    callRec = {
      assetId: toAssetId(rewardAsset.code),
      isFarm
    }
  } else {
    throw unsupportedSpecError(block)
  }

  let amount: string

  const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['DemeterFarmingPlatform.RewardWithdrawn'])

  if (eventItem) {
    const event = new DemeterFarmingPlatformRewardWithdrawnEvent(ctx, eventItem.event)

    let eventRec: { amount: bigint }
    if (event.isV33) {
      eventRec = { amount: event.asV33[1] }
    } else if (event.isV42) {
      eventRec = { amount: event.asV42[1] }
    } else if (event.isV43) {
      eventRec = { amount: event.asV43[1] }
    } else {
      throw unsupportedSpecError(block)
    }

    amount = formatU128ToBalance(eventRec.amount, callRec.assetId)
  } else {
    amount = '0'
  }

  const details = {
    assetId: callRec.assetId,
    isFarm: callRec.isFarm,
    amount
  }

  const historyElement = await createHistoryElement(ctx, block, callItem)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, block, historyElement, details)
  await updateHistoryElementStats(ctx, block,historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform getRewards with ${extrinsicHash} txid =====`)
}