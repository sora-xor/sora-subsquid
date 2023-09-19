import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { AssetAmount, Block, CallItem, Context } from '../../types'
import { findEventByExtrinsicHash } from '../../utils/events'
import { DemeterFarmingPlatformDepositedEvent } from '../../types/generated/events'
import { DemeterFarmingPlatformDepositCall } from '../../types/generated/calls'
import { getEntityData } from '../../utils/entities'

export async function demeterDepositCallHandler(ctx: Context, block: Block, callItem: CallItem<'DemeterFarmingPlatform.deposit'>): Promise<void> {
	ctx.log.debug('Caught demeterFarmingPlatform deposit extrinsic')

	const extrinsicHash = callItem.extrinsic.hash

	const call = new DemeterFarmingPlatformDepositCall(ctx, callItem.call)

	const data = getEntityData(ctx, block, call, callItem)

	const baseAssetId = 'baseAsset' in data ? getAssetId(data.baseAsset) : XOR
	const assetId = getAssetId(data.poolAsset)
	const rewardAssetId = getAssetId(data.rewardAsset)
	const isFarm = data.isFarm
	const desiredAmount = data.pooledTokens as AssetAmount

	let amount: string

	const eventItem = findEventByExtrinsicHash(block, extrinsicHash, ['DemeterFarmingPlatform.Deposited'])

	if (eventItem) {
		const event = new DemeterFarmingPlatformDepositedEvent(ctx, eventItem.event)

		const data = getEntityData(ctx, block, event, eventItem)

		const assetAmount = typeof data[4] === 'bigint' ? data[4] : data[5] as AssetAmount

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
		amount
	}

	const historyElement = await createHistoryElement(ctx, block, callItem)
	await addDataToHistoryElement(ctx, block, historyElement, details)
	await updateHistoryElementStats(ctx, block, historyElement)

	ctx.log.debug(`===== Saved demeterFarmingPlatform deposit with ${extrinsicHash} txid =====`)
}