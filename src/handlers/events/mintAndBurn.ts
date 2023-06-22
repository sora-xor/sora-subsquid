import { assetSnapshotsStorage, getAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { Block, Context, EventItem } from '../../types'
import { BalancesDepositEvent, BalancesWithdrawEvent, TokensDepositedEvent, TokensWithdrawnEvent } from '../../types/generated/events'
import { AssetAmount } from '../../types'
import { getEntityData } from '../../utils/entities'

export async function tokenBurnEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Tokens.Withdrawn'>): Promise<void> {
	const event = new TokensWithdrawnEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, block, event, eventItem)

    const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, BigInt(amount))
}

export async function xorBurnEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Balances.Withdraw'>): Promise<void> {
	const event = new BalancesWithdrawEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, block, event, eventItem)

    const amount = data.amount as AssetAmount
    const assetId = XOR

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, amount)
}

export async function tokenMintEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Tokens.Deposited'>): Promise<void> {
	const event = new TokensDepositedEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, block, event, eventItem)

    const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}

export async function xorMintEventHandler(ctx: Context, block: Block, eventItem: EventItem<'Balances.Deposit'>): Promise<void> {
	const event = new BalancesDepositEvent(ctx, eventItem.event)
	const data = getEntityData(ctx, block, event, eventItem)

    const assetId = XOR
	const amount = ('amount' in data ? data.amount : data[1]) as AssetAmount

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}
