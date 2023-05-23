import { assetSnapshotsStorage } from '../../utils/assets'
import { formatDateTimestamp, toAssetId } from '../../utils'
import { XOR } from '../../utils/consts'
import { Block, Context, EventEntity } from '../../processor'
import { BalancesDepositEvent, BalancesWithdrawEvent, TokensDepositedEvent, TokensWithdrawnEvent } from '../../types/generated/events'
import { AssetAmount } from '../../types'

export async function tokenBurnHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
    if (eventEntity.name !== 'Tokens.Withdrawn') return

	const blockHeight = block.header.height

	const event = new TokensWithdrawnEvent(ctx, eventEntity.event)
	if (!event.isV42) throw new Error(`[${blockHeight}] Unsupported spec`)
	
	const { currencyId, amount } = event.asV42

    const assetId = toAssetId(currencyId.code)

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, BigInt(amount))
}

export async function xorBurnHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
    if (eventEntity.name !== 'Balances.Withdraw') return
	
	const blockHeight = block.header.height

	const event = new BalancesWithdrawEvent(ctx, eventEntity.event)
	if (!event.isV42) throw new Error(`[${blockHeight}] Unsupported spec`)

    const { amount } = event.asV42

    const assetId = XOR

    await assetSnapshotsStorage.updateBurned(ctx, block, assetId, amount)
}

export async function tokenMintHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
    if (eventEntity.name !== 'Tokens.Deposited') return

	const blockHeight = block.header.height

	const event = new TokensDepositedEvent(ctx, eventEntity.event)
	if (!event.isV42) throw new Error(`[${blockHeight}] Unsupported spec`)

    const { currencyId, amount } = event.asV42

    const assetId = toAssetId(currencyId.code)

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}

export async function xorMintHandler(ctx: Context, block: Block, eventEntity: EventEntity): Promise<void> {
    if (eventEntity.name !== 'Balances.Deposit') return

	const blockHeight = block.header.height

	const event = new BalancesDepositEvent(ctx, eventEntity.event)

	let amount: AssetAmount
	if (event.isV1) {
		amount = event.asV1[1] as AssetAmount
	} else if (event.isV42) {
		amount = event.asV42.amount as AssetAmount
	} else {
		throw new Error(`[${blockHeight}] Unsupported spec`)
	}

    const assetId = XOR

    await assetSnapshotsStorage.updateMinted(ctx, block, assetId, amount)
}
