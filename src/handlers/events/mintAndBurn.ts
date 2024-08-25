import { assetSnapshotsStorage } from '../../utils/assets'
import { BlockContext, Event } from '../../types'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { initializedAtBlock } from '../models/initializePools'
import { getAssetsDepositEventData, getAssetsWithdrawnEventData } from '../../utils/events'

export async function burnEventHandler(ctx: BlockContext, event: Event<'Tokens.Withdrawn'> | Event<'Balances.Withdraw'> | Event<'Currencies.Withdrawn'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	if (initializedAtBlock === ctx.block.header.height) {
		return
	}

	if (event.name === 'Balances.Withdraw' && ctx.block.header.specVersion < 42) {
		return
	}

	const { assetId, amount } = getAssetsWithdrawnEventData(ctx, event)

	await assetSnapshotsStorage.updateBurned(ctx, assetId, amount)
}

export async function mintEventHandler(ctx: BlockContext, event: Event<'Tokens.Deposited'> | Event<'Balances.Deposit'> | Event<'Currencies.Deposited'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	if (initializedAtBlock === ctx.block.header.height) {
		return
	}

	if (event.name === 'Balances.Deposit' && ctx.block.header.specVersion < 42) {
		return
	}

	const { assetId, amount } = getAssetsDepositEventData(ctx, event)

	getEventHandlerLog(ctx, event).debug(`Minting ${amount} of ${assetId}`)
	await assetSnapshotsStorage.updateMinted(ctx, assetId, amount)
}