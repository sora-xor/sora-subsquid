import { assetSnapshotsStorage } from '../../utils/assets'
import { toAssetId } from '../../utils'
import { XOR } from '../../utils/consts'
import { Block, Context, EventItem } from '../../processor'
import { BalancesDepositEvent, BalancesWithdrawEvent, TokensDepositedEvent, TokensWithdrawnEvent } from '../../types/generated/events'
import { AssetAmount } from '../../types'
import { unsupportedSpecError } from '../../utils/error'

export async function tokenBurnHandler(ctx: Context, block: Block, eventItem: EventItem<'Tokens.Withdrawn', true>): Promise<void> {
	const event = new TokensWithdrawnEvent(ctx, eventItem.event)
	if (!event.isV42) throw unsupportedSpecError(block)
	
	const { currencyId, amount } = event.asV42

    const assetId = toAssetId(currencyId.code)

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, BigInt(amount))
}

export async function xorBurnHandler(ctx: Context, block: Block, eventItem: EventItem<'Balances.Withdraw', true>): Promise<void> {
	const event = new BalancesWithdrawEvent(ctx, eventItem.event)
	if (!event.isV42) throw unsupportedSpecError(block)

    const { amount } = event.asV42

    const assetId = XOR

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, amount)
}

export async function tokenMintHandler(ctx: Context, block: Block, eventItem: EventItem<'Tokens.Deposited', true>): Promise<void> {
	const event = new TokensDepositedEvent(ctx, eventItem.event)
	if (!event.isV42) throw unsupportedSpecError(block)

    const { currencyId, amount } = event.asV42

    const assetId = toAssetId(currencyId.code)

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}

export async function xorMintHandler(ctx: Context, block: Block, eventItem: EventItem<'Balances.Deposit', true>): Promise<void> {
	const event = new BalancesDepositEvent(ctx, eventItem.event)

	let amount: AssetAmount
	if (event.isV1) {
		amount = event.asV1[1] as AssetAmount
	} else if (event.isV42) {
		amount = event.asV42.amount as AssetAmount
	} else {
		throw unsupportedSpecError(block)
	}

    const assetId = XOR

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}
