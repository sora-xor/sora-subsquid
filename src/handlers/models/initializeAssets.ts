import { decodeHex, toHex } from '@subsquid/substrate-processor'
import { Asset } from '../../model'
import { Block, Context } from '../../processor'
import { AssetsAssetInfosStorage, BalancesTotalIssuanceStorage, TokensTotalIssuanceStorage } from '../../types/storage'

import { assetPrecisions, assetStorage } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { toAssetId, toText } from '../../utils'
import { AssetAmount, AssetId } from '../../types'

let isFirstBlockIndexed = false

export const getAssetInfos = async (ctx: Context, block: Block) => {
    try {
      	ctx.log.debug(`Asset infos request...`)
      	const storage = new AssetsAssetInfosStorage(ctx, block.header)

		let data: { 
			assetId: AssetId,
			symbol: string,
			name: string,
			precision: number,
			isMintable: boolean
		}[]

		if (storage.isV1) {
			data = (await storage.asV1.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId: toAssetId(assetId),
					symbol: toText(symbol),
					name: toText(name),
					precision,
					isMintable
				}
			})
		} else if (storage.isV26) {
			data = (await storage.asV26.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId: toAssetId(assetId),
					symbol: toText(symbol),
					name: toText(name),
					precision,
					isMintable
				}
			})
		} else if (storage.isV42) {
			data = (await storage.asV42.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId: toAssetId(assetId.code),
					symbol: toText(symbol),
					name: toText(name),
					precision,
					isMintable
				}
			})
		} else {
			throw new Error('Unsupported spec')
		}

		ctx.log.debug(`Asset infos request completed.`)
		return data
    } catch (e: any) {
		ctx.log.error('Error getting Asset infos')
		ctx.log.error(e)
		return null
    }
}

export const getTokensIssuances = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug(`Tokens issuances request...`)
		const storage = new TokensTotalIssuanceStorage(ctx, block.header)

		let data: { 
			assetId: AssetId,
			issuances: AssetAmount
		}[]

		if (storage.isV1) {
			data = (await storage.asV1.getPairs()).map(pair => {
				const [assetId, issuances] = pair
				return {
					assetId: toAssetId(assetId),
					issuances: issuances as AssetAmount
				}
			})
		} else if (storage.isV42) {
			data = (await storage.asV42.getPairs()).map(pair => {
				const [assetId, issuances] = pair
				return {
					assetId: toAssetId(assetId.code),
					issuances: issuances as AssetAmount
				}
			})
		} else {
			throw new Error('Unsupported spec')
		}

		ctx.log.debug(`Tokens issuances request completed.`)
		return data
    } catch (e: any) {
		ctx.log.error('Error getting Tokens issuances')
		ctx.log.error(e)
		return null
    }
}

export const getXorIssuance = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug(`XOR issuance request...`)
		const storage = new BalancesTotalIssuanceStorage(ctx, block.header)

		let issuance: bigint

		if (storage.isV1) {
			issuance = await storage.asV1.get()
		} else {
			throw new Error('Unsupported spec')
		}

		ctx.log.debug(`XOR issuance request completed.`)
		return issuance
    } catch (e: any) {
		ctx.log.error('Error getting XOR issuance')
		ctx.log.error(e)
		return null
    }
}

export async function initializeAssets(ctx: Context, block: Block): Promise<void> {
    if (isFirstBlockIndexed) return

    const blockHeight = block.header.height

    ctx.log.debug(`[${blockHeight}]: Initialize Asset entities`)

    const [
        assetInfos,
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        getAssetInfos(ctx, block),
        getTokensIssuances(ctx, block),
        getXorIssuance(ctx, block)
    ])

    const assets = new Map<string, {
		id: AssetId,
		liquidity: bigint,
		priceUSD: string,
		supply: AssetAmount
	}>()

    const getOrCreate = (assetId: AssetId) => {
        let asset = assets.get(assetId)
        
        if (!asset) {
            asset = {
				id: assetId,
				liquidity: 0n,
				priceUSD: '0',
				supply: 0n as AssetAmount,
            }
            assets.set(assetId, asset)
        }

        return asset
    }

    if (assetInfos) {
        for (const assetInfo of assetInfos) {
            assetPrecisions.set(assetInfo.assetId, assetInfo.precision)

            getOrCreate(assetInfo.assetId)
        }
    }

    if (tokensIssuances) {
        for (const tokenIssuances of tokensIssuances) {
            const asset = getOrCreate(tokenIssuances.assetId)

            asset.supply = tokenIssuances.issuances
        }
    }

    const assetXOR = getOrCreate(XOR)

    if (xorIssuance) {
        assetXOR.supply = xorIssuance as AssetAmount
    }

    const entities = [...assets.values()].map(asset => new Asset({
		...asset
	}))

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => assetStorage.getAsset(ctx, entity.id as AssetId)))
        ctx.log.debug(`[${blockHeight}]: ${entities.length} Assets initialized!`)
    } else {
        ctx.log.debug(`[${blockHeight}]: No Assets to initialize!`)
    }

    isFirstBlockIndexed = true
}
