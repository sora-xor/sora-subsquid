import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallEntity, Context } from '../../processor'
import { findEventWithExtrinsic } from '../../utils/events'
import { DemeterFarmingPlatformDepositedEvent } from '../../types/events'
import { DemeterFarmingPlatformDepositCall } from '../../types/calls'
import { AssetId } from '../../types'
import { toAssetId } from '../../utils'

export async function demeterDepositHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

  if (callEntity.name !== 'DemeterFarmingPlatform.deposit') return

  ctx.log.debug('Caught demeterFarmingPlatform deposit extrinsic')

  const extrinsicHash = callEntity.extrinsic.hash

  const call = new DemeterFarmingPlatformDepositCall(ctx, callEntity.call)

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
    throw new Error('Unsupported spec')
  }

  let amount: string

  const eventEntity = findEventWithExtrinsic('DemeterFarmingPlatform.Deposited', block, extrinsicHash)

  if (eventEntity) {
    const event = new DemeterFarmingPlatformDepositedEvent(ctx, eventEntity.event)

    let eventRec: { amount: bigint }
    if (event.isV33) {
      eventRec = { amount: event.asV33[4] }
    } else if (event.isV42) {
      eventRec = { amount: event.asV42[4] }
    } else if (event.isV43) {
      eventRec = { amount: event.asV43[5] }
    } else {
      throw new Error('Unsupported spec')
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

  const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)
  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform deposit with ${extrinsicHash} txid =====`)
}