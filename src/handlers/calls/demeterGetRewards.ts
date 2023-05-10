import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { DemeterFarmingPlatformRewardWithdrawnEvent } from '../../types/events'
import { DemeterFarmingPlatformGetRewardsCall } from '../../types/generated/calls'
import { toAssetId } from '../../utils'
import { AssetId } from '../../types'

export async function demeterGetRewardsHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {
  if (callEntity.name !== 'DemeterFarmingPlatform.get_rewards') return

  ctx.log.debug('Caught demeterFarmingPlatform getRewards extrinsic')

  const blockHeight = block.header.height
  const extrinsicHash = callEntity.extrinsic.hash

  const call = new DemeterFarmingPlatformGetRewardsCall(ctx, callEntity.call)

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
    throw new Error(`[${blockHeight}] Unsupported spec`)
  }

  let amount: string

  const eventEntity = findEventWithExtrinsic('DemeterFarmingPlatform.RewardWithdrawn', block, extrinsicHash)

  if (eventEntity) {
    const event = new DemeterFarmingPlatformRewardWithdrawnEvent(ctx, eventEntity.event)

    let eventRec: { amount: bigint }
    if (event.isV33) {
      eventRec = { amount: event.asV33[1] }
    } else if (event.isV42) {
      eventRec = { amount: event.asV42[1] }
    } else if (event.isV43) {
      eventRec = { amount: event.asV43[1] }
    } else {
      throw new Error(`[${blockHeight}] Unsupported spec`)
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

  const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform getRewards with ${extrinsicHash} txid =====`)
}