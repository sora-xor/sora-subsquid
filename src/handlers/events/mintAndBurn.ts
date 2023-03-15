import { getAssetId, assetSnapshotsStorage } from '../../utils/assets'
import { formatDateTimestamp } from '../../utils'
import { XOR } from '../../utils/consts'
import { Block, Context, EventEntity } from '../../processor'

export async function handleTokenBurn(ctx: Context, block: Block, event: EventEntity): Promise<void> {
    if (event.kind !== 'event' || event.name !== 'Tokens.Withdrawn') return

    const { currencyId, who, amount } = event.event.args

    const assetId = getAssetId(currencyId)
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))

    await assetSnapshotsStorage.updateBurned(ctx, assetId, BigInt(amount), blockTimestamp)
}

export async function handleXorBurn(ctx: Context, block: Block, event: EventEntity): Promise<void> {
    if (event.kind !== 'event' || event.name !== 'Balances.Withdraw') return

    const { who, amount } = event.event.args

    const assetId = XOR
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))

    await assetSnapshotsStorage.updateBurned(ctx, assetId, BigInt(amount), blockTimestamp)
}

export async function handleTokenMint(ctx: Context, block: Block, event: EventEntity): Promise<void> {
    if (event.kind !== 'event' || event.name !== 'Tokens.Deposited') return

    const { currencyId, who, amount } = event.event.args

    const assetId = getAssetId(currencyId)
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))

    await assetSnapshotsStorage.updateMinted(ctx, assetId, BigInt(amount), blockTimestamp)
}

export async function handleXorMint(ctx: Context, block: Block, event: EventEntity): Promise<void> {
    if (event.kind !== 'event' || event.name !== 'Balances.Deposit') return

    const { who, amount } = event.event.args

    const assetId = XOR
    const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))

    await assetSnapshotsStorage.updateMinted(ctx, assetId, BigInt(amount), blockTimestamp)
}
