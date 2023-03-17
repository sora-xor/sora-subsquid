// import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
// import { formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets'
// import { XOR } from '../../utils/consts'
// import { formatDateTimestamp } from '../../utils'

// import type { Vec } from '@polkadot/types'
// import type { Enum, Struct } from '@polkadot/types/codec'
// import type { Balance } from '@polkadot/types/interfaces/runtime'
// import { Block, CallEntity, Context } from '../../processor'

// interface SwapAmount extends Enum {
//     readonly isWithDesiredInput: boolean
//     readonly asWithDesiredInput: SwapWithDesiredInput
//     readonly isWithDesiredOutput: boolean
//     readonly asWithDesiredOutput: SwapWithDesiredOutput
// }

// /** @name SwapWithDesiredInput */
// export interface SwapWithDesiredInput extends Struct {
//     readonly desiredAmountIn: Balance
//     readonly minAmountOut: Balance
// }

// /** @name SwapWithDesiredOutput */
// export interface SwapWithDesiredOutput extends Struct {
//     readonly desiredAmountOut: Balance
//     readonly maxAmountIn: Balance
// }

// /** @name LiquiditySourceType */
// export interface LiquiditySourceType extends Enum {
//     readonly isXykPool: boolean
//     readonly isBondingCurvePool: boolean
//     readonly isMulticollateralBondingCurvePool: boolean
//     readonly isMockPool: boolean
//     readonly isMockPool2: boolean
//     readonly isMockPool3: boolean
//     readonly isMockPool4: boolean
// }

// const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: string): string[] => {
//     switch (swapAmount.isWithDesiredOutput) {
//         case true: {
//             return [formatU128ToBalance(swapAmount.asWithDesiredOutput.maxAmountIn.toString(), assetId),
//             formatU128ToBalance(swapAmount.asWithDesiredOutput.desiredAmountOut.toString(), assetId)]
//         }
//         case false: {
//             return [formatU128ToBalance(swapAmount.asWithDesiredInput.desiredAmountIn.toString(), assetId),
//             formatU128ToBalance(swapAmount.asWithDesiredInput.minAmountOut.toString(), assetId)]
//         }
//     }
// }

// const handleAndSaveExtrinsic = async (ctx: Context, block: Block, callEntity: CallEntity): Promise<void> => {

//     if (call.kind !== 'call') return

//     const blockTimestamp = formatDateTimestamp(new Date(block.header.timestamp))
//     const historyElement = await getOrCreateHistoryElement(ctx, block, call)

//     if (!historyElement) return

//     // TODO: FIX
//     const { liquiditySources, swapAmount, targetAsset, baseAsset, to } = call.call.args.reverse()

//     const details: any = {}
//     const baseAssetId = getAssetId(baseAsset)
//     const targetAssetId = getAssetId(targetAsset)

//     details.baseAssetId = baseAssetId
//     details.targetAssetId = targetAssetId
//     details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()

//     if (to) {
//         details.to = to.toString()
//     }

//     if (historyElement.execution.success) {
//         const swapEvent = block.items.find(e => e.name === 'LiquidityProxy.Exchange')
//         if (!swapEvent || swapEvent.kind !== 'event') return // TODO: make proper exit
//         const [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] = swapEvent.event.args

//         details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId)
//         details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId)
//         details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee.toString(), XOR)
//     } else {
//         details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId)[0]
//         details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId)[1]
//         details.liquidityProviderFee = '0'
//     }

//     await addDataToHistoryElement(ctx, historyElement, details)
//     await updateHistoryElementStats(ctx, historyElement)

//     // update assets volume
//     if (historyElement.execution.success) {
//         await assetSnapshotsStorage.updateVolume(ctx, baseAssetId, details.baseAssetAmount, blockTimestamp)
//         await assetSnapshotsStorage.updateVolume(ctx, targetAssetId, details.targetAssetAmount, blockTimestamp)
//     }
// }

// export async function handleSwaps(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

//     if (call.name !== 'LiquidityProxy.swap') return

//     ctx.log.debug('Caught swap extrinsic')

//     // TODO: FIX
//     // await handleAndSaveExtrinsic(ctx, block, call)

//     ctx.log.debug(`===== Saved swap with ${call.extrinsic.hash} txid =====`)
// }

// export async function handleSwapTransfers(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

//     if (call.name !== 'LiquidityProxy.swap_transfer') return

//     ctx.log.debug('Caught swap transfer extrinsic')

//     // TODO: FIX
//     // await handleAndSaveExtrinsic(ctx, block, call)

//     ctx.log.debug(`===== Saved swap and transfer with ${call.extrinsic.hash} txid =====`)
// }
