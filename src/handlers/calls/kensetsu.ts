import { createCallHistoryElement, createHistoryElement } from "../../utils/history";
import { KUSD } from "../../utils/consts";
import { getAssetId, formatU128ToBalance } from "../../utils/assets";
import { logStartProcessingCall } from "../../utils/logs";
import { AssetId, BlockContext, Call } from "../../types";
import { getCallData, getEventData } from "../../utils/entities";
import { calls, events } from "../../types/generated/merged";
import { findEventByExtrinsicHash } from "../../utils/events";
import { assertDefined } from "../../utils";

export async function vaultCreateCallHandler(ctx: BlockContext, call: Call<'Kensetsu.createCdp'>): Promise<void> {
  logStartProcessingCall(ctx, call);

  // "debpAssetid", "vaultType" may be added in future
  const data = getCallData(ctx, calls.kensetsu.createCdp, call);

  const collateralAssetId = getAssetId(data.collateralAssetId);

  const details: {
	id: bigint | undefined,
	collateralAssetId: AssetId,
	collateralAmount: string,
	debtAssetId: AssetId,
	debtAmount: string,
  } = {
    id: undefined,
    collateralAssetId,
    collateralAmount: formatU128ToBalance(data.collateralAmount, collateralAssetId),
    debtAssetId: KUSD,
    debtAmount: formatU128ToBalance(data.borrowAmountMax, KUSD),
  };

  assertDefined(call.extrinsic);
  const vaultCreatedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.CDPCreated']);

  if (vaultCreatedEvent) {
	const eventData = getEventData(ctx, events.kensetsu.cdpCreated, vaultCreatedEvent);

    details.id = eventData.cdpId;
    details.debtAssetId = getAssetId(eventData.debtAssetId);
  }

  const debtIncreasedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.DebtIncreased']);

  if (debtIncreasedEvent) {
	const debtIncreasedEventData = getEventData(ctx, events.kensetsu.debtIncreased, debtIncreasedEvent);

    details.debtAmount = formatU128ToBalance(debtIncreasedEventData.amount, details.debtAssetId);
  }

  await createCallHistoryElement(ctx, call, details);
}

export async function vaultDepositCollateralCallHandler(ctx: BlockContext, call: Call<'Kensetsu.depositCollateral'>): Promise<void> {
  logStartProcessingCall(ctx, call);

  const data = getCallData(ctx, calls.kensetsu.depositCollateral, call);

  const details: {
	id: string,
	collateralAssetId: AssetId | undefined,
	collateralAmount: string,
  
  } = {
    id: data.cdpId.toString(),
    collateralAssetId: undefined,
    collateralAmount: formatU128ToBalance(data.collateralAmount, '' as AssetId), // formatted with 18 decimals
  };

  assertDefined(call.extrinsic)
  const vaultDepositEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.CollateralDeposit']);

  if (vaultDepositEvent) {
	const vaultDepositEventData = getEventData(ctx, events.kensetsu.collateralDeposit, vaultDepositEvent);
    const collateralAssetId = getAssetId(vaultDepositEventData.collateralAssetId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(vaultDepositEventData.amount, collateralAssetId);
  }

  await createCallHistoryElement(ctx, call, details);
}

export async function vaultDecreaseDebtCallHandler(ctx: BlockContext, call: Call<'Kensetsu.repayDebt'>): Promise<void> {
  logStartProcessingCall(ctx, call);

  const data = getCallData(ctx, calls.kensetsu.repayDebt, call);

  const details = {
    id: data.cdpId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(data.amount, KUSD), // default
  };
  
  assertDefined(call.extrinsic)
  const vaultDebtPaymentEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.DebtPayment']);

  if (vaultDebtPaymentEvent) {
	const vaultDebtPaymentEventData = getEventData(ctx, events.kensetsu.debtPayment, vaultDebtPaymentEvent);
    const debtAssetId = getAssetId(vaultDebtPaymentEventData.debtAssetId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(vaultDebtPaymentEventData.amount, debtAssetId);
  }

  await createCallHistoryElement(ctx, call, details);
}

export async function vaultIncreaseDeptCallHandler(ctx: BlockContext, call: Call<'Kensetsu.borrow'>): Promise<void> {
  logStartProcessingCall(ctx, call);

  const data = getCallData(ctx, calls.kensetsu.borrow, call);

  const details: {
	id: string,
	debtAssetId: AssetId,
	debtAmount: string
  } = {
    id: data.cdpId.toString(),
    debtAssetId: KUSD, // default
    debtAmount: formatU128ToBalance(data.borrowAmountMax, KUSD), // default
  };

  assertDefined(call.extrinsic)
  const vaultDebtIncreasedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.DebtIncreased']);

  if (vaultDebtIncreasedEvent) {
	const vaultDebtIncreasedEventData = getEventData(ctx, events.kensetsu.debtIncreased, vaultDebtIncreasedEvent);
    const debtAssetId = getAssetId(vaultDebtIncreasedEventData.debtAssetId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(vaultDebtIncreasedEventData.amount, debtAssetId);
  }

  await createCallHistoryElement(ctx, call, details);
}

export async function vaultCloseCallHandler(ctx: BlockContext, call: Call<'Kensetsu.closeCdp'>): Promise<void> {
  logStartProcessingCall(ctx, call);

  const data = getCallData(ctx, calls.kensetsu.closeCdp, call);

  const details: {
	id: string,
	collateralAssetId: AssetId | undefined,
	collateralAmount: string | undefined,
	debtAssetId: AssetId | undefined,
	debtAmount: string | undefined,
  } = {
    id: data.cdpId.toString(),
    collateralAssetId: undefined,
    collateralAmount: undefined,
    debtAssetId: undefined,
    debtAmount: undefined,
  };

  assertDefined(call.extrinsic)
  const vaultDebtPaymentEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.DebtPayment']);

  if (vaultDebtPaymentEvent) {
	const vaultDebtPaymentEventData = getEventData(ctx, events.kensetsu.debtPayment, vaultDebtPaymentEvent);
    const debtAssetId = getAssetId(vaultDebtPaymentEventData.debtAssetId);

    details.debtAssetId = debtAssetId;
    details.debtAmount = formatU128ToBalance(vaultDebtPaymentEventData.amount, debtAssetId);
  }

  const vaultClosedEvent = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['Kensetsu.CDPClosed']);

  if (vaultClosedEvent) {
	const vaultClosedEventData = getEventData(ctx, events.kensetsu.cdpClosed, vaultClosedEvent);
    const collateralAssetId = getAssetId(vaultClosedEventData.collateralAssetId);

    details.collateralAssetId = collateralAssetId;
    details.collateralAmount = formatU128ToBalance(vaultClosedEventData.collateralAmount, collateralAssetId);
  }

  await createCallHistoryElement(ctx, call, details);
}