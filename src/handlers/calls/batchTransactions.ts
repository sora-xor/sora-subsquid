import { addDataToHistoryElement, getOrCreateHistoryElement, updateHistoryElementStats } from '../../utils/history'
import { formatU128ToBalance, getAssetId } from '../../utils/assets'
import { poolsStorage } from '../../utils/pools'
import { Block, CallEntity, Context } from '../../processor'
import { UtilityBatchAllCall } from '../../types/calls'
import { HistoryElement } from '../../model'
import { AssetId } from '../../types'

const versions = [1, 3, 7, 19, 22, 23, 26, 32, 33, 35, 37, 38, 42, 43, 45, 46, 47] as const

type Version = typeof versions[number]
type IsVersion = { [V in Version]: `isV${V}` }[Version]
type AsVersion = { [V in Version]: `asV${V}` }[Version]

type BatchCall = { [V in Version]: { version: V, call: UtilityBatchAllCall[`asV${V}`]['calls'][number] } }[Version]
type BatchCalls = { [V in Version]: { version: V, calls: UtilityBatchAllCall[`asV${V}`]['calls'] } }[Version]

function formatSpecificCall(call: BatchCall) {
	switch (call.call.__kind) {
		case 'PoolXYK': {
			switch (call.call.value.__kind) {
				case 'deposit_liquidity': {
					const { __kind, ...value } = call.call.value
					const { dexId, inputAssetA, inputAssetB, inputADesired, inputBDesired, inputAMin, inputBMin } = value
		            // TODO: move args to common function here and in other cases
		            return {
		                dexId,
		                inputAssetA: getAssetId(inputAssetA),
		                inputAssetB: getAssetId(inputAssetB),
		                inputAMin: formatU128ToBalance(inputAMin, getAssetId(inputAssetA)),
		                inputBMin: formatU128ToBalance(inputBMin, getAssetId(inputAssetB)),
		                inputADesired: formatU128ToBalance(inputADesired, getAssetId(inputAssetA)),
		                inputBDesired: formatU128ToBalance(inputBDesired, getAssetId(inputAssetB))
		            }
				}
				case 'initialize_pool': {
					const { __kind, ...value } = call.call.value
					const { dexId, assetA, assetB } = value
					return {
						dexId,
						assetA: getAssetId(assetA),
						assetB: getAssetId(assetB)
					}
				}
			}
		}

		case 'TradingPair': {
			switch (call.call.value.__kind) {
				case 'register': {
					const { __kind, ...value } = call.call.value
					const { dexId, baseAssetId, targetAssetId } = value
					return  {
						dexId,
						baseAssetId: getAssetId(baseAssetId),
						targetAssetId: getAssetId(targetAssetId),
					}
				}
			}
		}

		default: {
			const { __kind, ...value } = call.call.value
			return value
		}
	}
}

function extractCall(
    call: BatchCall,
    id: number,
    parentCallId: string
) {
    return {
        callId: `${parentCallId}-${id}`,
        module: call.call.__kind,
        method: call.call.value.__kind,
		// TODO: determine where to get call hash
        // hash: call.hash,
        data: formatSpecificCall(call)
    }

}

function mapCalls({ version, calls }: BatchCalls, historyElement: HistoryElement) {
	return calls.map((call, idx) => extractCall({ version, call } as BatchCall, idx, historyElement.blockHeight.toString()))
}

function mapCallsForAllVersions(utilityBatchAllCall: UtilityBatchAllCall, historyElement: HistoryElement, block: Block): ReturnType<typeof mapCalls> {
	const blockHeight = block.header.height
	let calls: ReturnType<typeof mapCalls> | null = null
	versions.forEach((version) => {
		if (utilityBatchAllCall['isV' + version as IsVersion]) {
			calls = mapCalls(
				{
					version,
					calls: utilityBatchAllCall['asV' + version as AsVersion].calls
				} as BatchCalls,
				historyElement
			)
		}
	})
	if (calls === null) throw new Error(`[${blockHeight}] Unsupported spec`)
	return calls
}

export async function batchTransactionsHandler(ctx: Context, block: Block, callEntity: CallEntity): Promise<void> {

    if (callEntity.name !== 'Utility.batch_all') return

    ctx.log.debug('Caught batch transaction extrinsic')

    const historyElement = await getOrCreateHistoryElement(ctx, block, callEntity)

	const utilityBatchAllCall = new UtilityBatchAllCall(ctx, callEntity.call)

	let calls = mapCallsForAllVersions(utilityBatchAllCall, historyElement, block)

    await addDataToHistoryElement(ctx, historyElement, calls)
    await updateHistoryElementStats(ctx, historyElement)

    ctx.log.debug(`===== Saved batch extrinsic with ${historyElement.id.toString()} txid =====`)

    if (historyElement.execution.success) {
        // If initialize pool call exists, create new Pool
        const initializePool = calls.find(call => call.method === 'initialize_pool' && call.module === 'PoolXYK')

        if (initializePool) {
			//TODO: Determine wether or not typization is applicable here
			const data: {
				dexId: number
				assetA: AssetId
				assetB: AssetId
			} = initializePool.data as any
            await poolsStorage.getPool(ctx, block, data.assetA, data.assetB)
        }
    }
}