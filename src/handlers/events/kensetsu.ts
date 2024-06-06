import { Vault, VaultAccount, VaultStatus, VaultEvent, VaultEventType } from "../../model"
import { assertDefined, getBlockTimestamp, getEventId } from "../../utils"
import { getVaultAccountEntity } from "../../utils/kensetsu"
import { getAssetId, formatU128ToBalance, assetStorage } from "../../utils/assets"
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs"
import { BlockContext, Event, AssetId } from "../../types"
import { getEventData } from "../../utils/entities"
import { events } from "../../types/generated/merged"

async function handleEventType(
	ctx: BlockContext,
	event: Event<'Kensetsu.CDPCreated'> | Event<'Kensetsu.CollateralDeposit'> | Event<'Kensetsu.DebtIncreased'> | Event<'Kensetsu.DebtPayment'> | Event<'Kensetsu.Liquidated'> | Event<'Kensetsu.CDPClosed'>,
	eventType: VaultEventType
) {
	logStartProcessingEvent(ctx, event)

	let vault: Vault
	let account: VaultAccount | null = null
	let vaultId: string
	let owner: string | null = null
	let assetId: AssetId
	let amount: string | null = null
	let debtAssetId!: AssetId
	let vaultType!: string

	switch (eventType) {
		case VaultEventType.Created: {
			const data = getEventData(ctx, events.kensetsu.cdpCreated, event)
			vaultId = data.cdpId.toString()
			owner = data.owner
			assetId = getAssetId(data.collateralAssetId)
			debtAssetId = getAssetId(data.debtAssetId)
			vaultType = data.cdpType.__kind
			break
		}
		case VaultEventType.Liquidated: {
			const data = getEventData(ctx, events.kensetsu.liquidated, event)
			vaultId = data.cdpId.toString()
			assetId = getAssetId(data.collateralAssetId)
			amount = formatU128ToBalance(data.collateralAmount, assetId)
			debtAssetId = getAssetId(data.debtAssetId)
			break
		}
		case VaultEventType.CollateralDeposit: {
			const data = getEventData(ctx, events.kensetsu.collateralDeposit, event)
			vaultId = data.cdpId.toString()
			owner = data.owner
			assetId = getAssetId(data.collateralAssetId)
			amount = formatU128ToBalance(data.amount, assetId)
			break
		}
		case VaultEventType.Closed: {
			const data = getEventData(ctx, events.kensetsu.cdpClosed, event)
			vaultId = data.cdpId.toString()
			owner = data.owner
			assetId = getAssetId(data.collateralAssetId)
			amount = formatU128ToBalance(data.collateralAmount, assetId)
			break
		}
		case VaultEventType.DebtIncreased: {
			const data = getEventData(ctx, events.kensetsu.debtIncreased, event)
			console.log(data);
			vaultId = data.cdpId.toString()
			owner = data.owner
			assetId = getAssetId(data.debtAssetId)
			amount = formatU128ToBalance(data.amount, assetId)
			break
		}
		case VaultEventType.DebtPayment: {
			const data = getEventData(ctx, events.kensetsu.debtPayment, event)
			vaultId = data.cdpId.toString()
			owner = data.owner
			assetId = getAssetId(data.debtAssetId)
			amount = formatU128ToBalance(data.amount, assetId)
			break
		}
	}

	const blockHeight = ctx.block.header.height
	const timestamp = getBlockTimestamp(ctx)

	if (eventType === VaultEventType.Created) {
		assertDefined(owner)
		account = await getVaultAccountEntity(ctx, owner)

		assertDefined(vaultType)
		vault = new Vault({
			id: vaultId,
			type: vaultType as any,
			status: VaultStatus.Opened,
			owner: account.id as any,
			collateralAsset: await assetStorage.getAsset(ctx, assetId),
			debtAsset: await assetStorage.getAsset(ctx, debtAssetId),
			createdAtBlock: blockHeight,
			updatedAtBlock: blockHeight
		})
	} else {
		const vaultFromStore = await ctx.store.get(Vault, vaultId)
		assertDefined(vaultFromStore)
		vault = vaultFromStore
	}

	if (!vault) {
		getEventHandlerLog(ctx, event).error({ id: vaultId }, "Vault not found")
		return
	}

	const vaultEvent = new VaultEvent({
		id: getEventId(ctx, event),
		type: eventType,
		vault,
		timestamp,
		block: blockHeight
	})

	vaultEvent.amount = amount
	vault.updatedAtBlock = blockHeight

	switch (eventType) {
		case VaultEventType.Closed: {
			vault.status = Number(amount) === 0 ? VaultStatus.Liquidated : VaultStatus.Closed
			vault.collateralAmountReturned = amount
		break
		}
		case VaultEventType.Liquidated: {
			account = await getVaultAccountEntity(ctx, vault.owner.id)
			account.lastLiquidation = vaultEvent
		break
		}
	}

	if (account) await ctx.store.save(account)
	await ctx.store.save(vault)
	await ctx.store.save(vaultEvent)
}

export async function vaultCreatedEvent(ctx: BlockContext, event: Event<'Kensetsu.CDPCreated'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.Created)
}

export async function vaultCollateralDepositEvent(ctx: BlockContext, event: Event<'Kensetsu.CollateralDeposit'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.CollateralDeposit)
}

export async function vaultDebtIncreasedEvent(ctx: BlockContext, event: Event<'Kensetsu.DebtIncreased'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.DebtIncreased)
}

export async function vaultDebtPaymentEvent(ctx: BlockContext, event: Event<'Kensetsu.DebtPayment'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.DebtPayment)
}

export async function vaultLiquidatedEvent(ctx: BlockContext, event: Event<'Kensetsu.Liquidated'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.Liquidated)
}

export async function vaultClosedEvent(ctx: BlockContext, event: Event<'Kensetsu.CDPClosed'>): Promise<void> {
  await handleEventType(ctx, event, VaultEventType.Closed)
}