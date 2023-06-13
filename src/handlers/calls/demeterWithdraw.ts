import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { Block, CallItem, Context } from '../../processor'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformWithdrawnEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformWithdrawCall } from '../../types/generated/calls'
import { XOR } from '../../utils/consts'
import { AssetId } from '../../types'
import { toAssetId } from '../../utils'
import { unsupportedSpecError } from '../../utils/error'

export async function demeterWithdrawHandler(ctx: Context, block: Block, callItem: CallItem<'DemeterFarmingPlatform.withdraw', true>): Promise<void> {
  ctx.log.debug('Caught demeterFarmingPlatform withdraw extrinsic')

  const extrinsicHash = callItem.extrinsic.hash

  const call = new DemeterFarmingPlatformWithdrawCall(ctx, callItem.call)

  let callRec: {
    baseAssetId: AssetId
    assetId: AssetId
    rewardAssetId: AssetId
    isFarm: boolean
    desiredAmount: bigint
  }
  if (call.isV33) {
    const { poolAsset, rewardAsset, isFarm, pooledTokens } = call.asV33
    callRec = {
      baseAssetId: XOR,
      assetId: toAssetId(poolAsset),
      rewardAssetId: toAssetId(rewardAsset),
      isFarm,
      desiredAmount: pooledTokens
    }
  } else if (call.isV42) {
    const { poolAsset, rewardAsset, isFarm, pooledTokens } = call.asV42
    callRec = {
      baseAssetId: XOR,
      assetId: toAssetId(poolAsset.code),
      rewardAssetId: toAssetId(rewardAsset.code),
      isFarm,
      desiredAmount: pooledTokens
    }
  } else if (call.isV43) {
    const { baseAsset, poolAsset, rewardAsset, isFarm, pooledTokens } = call.asV43
    callRec = {
      baseAssetId: toAssetId(baseAsset.code),
      assetId: toAssetId(poolAsset.code),
      rewardAssetId: toAssetId(rewardAsset.code),
      isFarm,
      desiredAmount: pooledTokens
    }
  } else {
    throw unsupportedSpecError(block)
  }

  let amount: string

  const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['DemeterFarmingPlatform.Withdrawn'])

  if (eventItem) {
    const event = new DemeterFarmingPlatformWithdrawnEvent(ctx, eventItem.event)

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
    
    // a little trick - we get decimals from pool asset, not lp token
    amount = formatU128ToBalance(eventRec.amount, callRec.assetId)
  } else {
    amount = formatU128ToBalance(callRec.desiredAmount, callRec.assetId)
  }

  let details = {
    baseAssetId: callRec.baseAssetId,
    assetId: callRec.assetId,
    rewardAssetId: callRec.rewardAssetId,
    isFarm: callRec.isFarm,
    amount: amount.toString()
  }

  const historyElement = await createHistoryElement(ctx, block, callItem)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, block, historyElement, details)
  await updateHistoryElementStats(ctx, block,historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform withdraw with ${extrinsicHash} txid =====`)
}