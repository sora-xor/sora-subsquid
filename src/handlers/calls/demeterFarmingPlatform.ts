import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { getAssetId, formatU128ToBalance } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, CallEntity, Context } from '../../processor'

const Section = 'DemeterFarmingPlatform'

export async function demeterDepositHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

  if (call.kind !== 'call' || call.name !== 'DemeterFarmingPlatform.deposit') return

  ctx.log.debug('Caught demeterFarmingPlatform deposit extrinsic')

  const [desiredAmount, isFarm, rewardAssetId, poolAssetId, baseAssetId] = call.call.args.reverse()

  const details: any = {}

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId)
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId)
  // farming or staking
  details.isFarm = isFarm // .toHuman()

  const event = block.items.find(e => e.name === Section + '.Deposited')

  if (event?.kind !== 'event') return

  if (event) {
    const [amount] = event.event.args.slice().reverse()
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), details.assetId)
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId)
  }

  const historyElement = await getOrCreateHistoryElement(ctx, block, call)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform deposit with ${call.extrinsic.hash} txid =====`)
}

export async function demeterWithdrawHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

  if (call.kind !== 'call' || call.name !== 'DemeterFarmingPlatform.withdraw') return

  ctx.log.debug('Caught demeterFarmingPlatform withdraw extrinsic')

  const [isFarm, desiredAmount, rewardAssetId, poolAssetId, baseAssetId] = call.call.args.reverse()

  const details: any = {}

  // XOR or XSTUSD (farming), or asset id (staking)
  details.baseAssetId = baseAssetId ? getAssetId(baseAssetId) : XOR
  // pool asset id (farming) or asset id (staking)
  details.assetId = getAssetId(poolAssetId)
  // reward asset id
  details.rewardAssetId = getAssetId(rewardAssetId)
  // farming or staking
  details.isFarm = isFarm // .toHuman()

  const event = block.items.find(e => e.name === Section + '.Withdrawn')

  if (event?.kind !== 'event') return

  if (event) {
    const [who, amount] = event.event.args
    // a little trick - we get decimals from pool asset, not lp token
    details.amount = formatU128ToBalance(amount.toString(), details.assetId)
  } else {
    details.amount = formatU128ToBalance(desiredAmount.toString(), details.assetId)
  }

  const historyElement = await getOrCreateHistoryElement(ctx, block, call)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform withdraw with ${call.extrinsic.hash} txid =====`)
}

export async function demeterGetRewardsHandler(ctx: Context, block: Block, call: CallEntity): Promise<void> {

  if (call.kind !== 'call' || call.name !== 'DemeterFarmingPlatform.get_rewards') return

  ctx.log.debug('Caught demeterFarmingPlatform getRewards extrinsic')

  const [isFarm, rewardAssetId, poolAssetId, baseAssetId] = call.call.args.reverse()

  const details: any = {}

  // reward asset id
  details.assetId = getAssetId(rewardAssetId)
  // reward for farming or staking
  details.isFarm = isFarm // .toHuman()

  const event = block.items.find(e => e.name === Section + '.RewardWithdrawn')

  if (event?.kind !== 'event') return

  if (event) {
    const [who, amount] = event.event.args

    details.amount = formatU128ToBalance(amount.toString(), details.assetId)
  } else {
    details.amount = '0'
  }

  const historyElement = await getOrCreateHistoryElement(ctx, block, call)
  if (!historyElement) return
  await addDataToHistoryElement(ctx, historyElement, details)
  await updateHistoryElementStats(ctx, historyElement)

  ctx.log.debug(`===== Saved demeterFarmingPlatform getRewards with ${call.extrinsic.hash} txid =====`)
}