import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformWithdrawnEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformWithdrawCall } from '../../types/generated/calls'
import { XOR } from '../../utils/consts'
import { getEntityData } from '../../utils/entities'

export async function demeterWithdrawCallHandler(ctx: Context, block: Block, callItem: CallItem<'DemeterFarmingPlatform.withdraw'>): Promise<void> {
  ctx.log.debug('Caught demeterFarmingPlatform withdraw extrinsic')

  const extrinsicHash = callItem.extrinsic.hash

  const call = new DemeterFarmingPlatformWithdrawCall(ctx, callItem.call)

  const data = getEntityData(ctx, block, call, callItem)

	const baseAssetId = 'baseAsset' in data ? getAssetId(data.baseAsset) : XOR
	const assetId = getAssetId(data.poolAsset)
	const rewardAssetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm
	const desiredAmount = data.pooledTokens as AssetAmount

  let amount: string

  const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['DemeterFarmingPlatform.Withdrawn'])

  if (eventItem) {
    const event = new DemeterFarmingPlatformWithdrawnEvent(ctx, eventItem.event)

	const data = getEntityData(ctx, block, event, eventItem)

	const assetAmount = data[1] as AssetAmount
    
    // a little trick - we get decimals from pool asset, not lp token
    amount = formatU128ToBalance(assetAmount, assetId)
  } else {
    amount = formatU128ToBalance(desiredAmount, assetId)
  }

  let details = {
    baseAssetId,
    assetId,
    rewardAssetId,
    isFarm,
    amount,
  }

  const historyElement = await createHistoryElement(ctx, block, callItem)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, block, historyElement, details)
  await updateHistoryElementStats(ctx, block,historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform withdraw with ${extrinsicHash} txid =====`)
}