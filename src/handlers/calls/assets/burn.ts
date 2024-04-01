import { createCallHistoryElement } from '../../../utils/history'
import { BlockContext, Call } from '../../../types'
import { getCallData } from '../../../utils/entities'
import { formatU128ToBalance, getAssetId } from '../../../utils/assets'
import { logStartProcessingCall } from '../../../utils/logs'
import { calls } from '../../../types/generated/merged'

export async function assetsBurnCallHandler(ctx: BlockContext, call: Call<'Assets.burn'>): Promise<void> {
  logStartProcessingCall(ctx, call)

  const data = getCallData(ctx, calls.assets.burn, call)

  const assetId = getAssetId(data.assetId) 
  const details = {
    assetId,
    amount: formatU128ToBalance(data.amount, assetId),
  }

  await createCallHistoryElement(ctx, call, details)
}
