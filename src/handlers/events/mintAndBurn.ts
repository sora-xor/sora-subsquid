import { assetSnapshotsStorage, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { BlockContext, EventItem } from '../../types'
import { BalancesDepositEvent, BalancesWithdrawEvent, TokensDepositedEvent, TokensWithdrawnEvent } from '../../types/generated/events'
import { AssetAmount } from '../../types'
import { getEntityData } from '../../utils/entities'
import { logEventHandler } from '../../utils/log'

export async function tokenBurnEventHandler(ctx: BlockContext, eventItem: EventItem<'Tokens.Withdrawn'>): Promise<void> {
	logEventHandler(ctx, eventItem)

	const event = new TokensWithdrawnEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

    const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

    await assetSnapshotsStorage.updateBurned(ctx, assetId, BigInt(amount))
}

export async function xorBurnEventHandler(ctx: BlockContext, eventItem: EventItem<'Balances.Withdraw'>): Promise<void> {
	logEventHandler(ctx, eventItem)

	const event = new BalancesWithdrawEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

    const amount = data.amount as AssetAmount
    const assetId = XOR

    await assetSnapshotsStorage.updateBurned(ctx, assetId, amount)
}

export async function tokenMintEventHandler(ctx: BlockContext, eventItem: EventItem<'Tokens.Deposited'>): Promise<void> {
	logEventHandler(ctx, eventItem)

	const event = new TokensDepositedEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

    const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

    await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}

export async function xorMintEventHandler(ctx: BlockContext, eventItem: EventItem<'Balances.Deposit'>): Promise<void> {
	logEventHandler(ctx, eventItem)

	const event = new BalancesDepositEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, event, eventItem)

    const assetId = XOR
	const amount = ('amount' in data ? data.amount : data[1]) as AssetAmount

    await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}
