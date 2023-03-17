import { decodeHex, toHex } from '@subsquid/substrate-processor'
import { Asset } from '../../model'
import { Block, Context } from '../../processor'
import { AssetsAssetInfosStorage, BalancesTotalIssuanceStorage, TokensTotalIssuanceStorage } from '../../types/storage'
import { decodeUint8 } from '../../utils'

import { assetPrecisions, assetStorage } from '../../utils/assets'
import { XOR } from '../../utils/consts'

let isFirstBlockIndexed = false

export const getAssetInfos = async (ctx: Context, block: Block) => {
    try {
      	ctx.log.debug(`Asset infos request...`)
      	const storage = new AssetsAssetInfosStorage(ctx, block.header)

		let data: { 
			assetId: Uint8Array,
			symbol: string,
			name: string,
			precision: number,
			isMintable: boolean
		}[]
		if (storage.isV1) {
			data = (await storage.asV1.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId,
					symbol: decodeUint8(symbol),
					name: decodeUint8(name),
					precision,
					isMintable
				}
			})
		} else if (storage.isV26) {
			data = (await storage.asV26.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId,
					symbol: decodeUint8(symbol),
					name: decodeUint8(name),
					precision,
					isMintable
				}
			})
		} else if (storage.isV42) {
			data = (await storage.asV42.getPairs()).map(pair => {
				const [assetId, [symbol, name, precision, isMintable]] = pair
				return {
					assetId: assetId.code,
					symbol: decodeUint8(symbol),
					name: decodeUint8(name),
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
			assetId: Uint8Array,
			issuances: bigint
		}[]
		if (storage.isV1) {
			data = (await storage.asV1.getPairs()).map(pair => {
				const [assetId, issuances] = pair
				return { assetId, issuances }
			})
		} else if (storage.isV42) {
			data = (await storage.asV42.getPairs()).map(pair => {
				const [assetId, issuances] = pair
				return { assetId: assetId.code, issuances }
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

    const blockNumber = block.header.height

    ctx.log.debug(`[${blockNumber}]: Initialize Asset entities`)

    const [
        assetInfos,
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        getAssetInfos(ctx, block),
        getTokensIssuances(ctx, block),
        getXorIssuance(ctx, block)
    ])

    const assets = new Map<string, { id: Uint8Array, liquidity: bigint, priceUSD: string, supply: bigint }>()

    const getOrCreate = (assetId: Uint8Array) => {
        let asset = assets.get(toHex(assetId))
        
        if (!asset) {
            asset = {
				id: assetId,
				liquidity: BigInt(0),
				priceUSD: '0',
				supply: BigInt(0),
            }
            assets.set(toHex(assetId), asset)
        }

        return asset
    }

    if (assetInfos) {
        for (const assetInfo of assetInfos) {
            assetPrecisions.set(toHex(assetInfo.assetId), assetInfo.precision)

            getOrCreate(assetInfo.assetId)
        }
    }

    if (tokensIssuances) {
        for (const tokenIssuances of tokensIssuances) {
            const asset = getOrCreate(tokenIssuances.assetId)

            asset.supply = BigInt(tokenIssuances.issuances)
        }
    }

    const assetXOR = getOrCreate(XOR)

    if (xorIssuance) {
        assetXOR.supply = BigInt(xorIssuance.toString())
    }

    const entities = [...assets.values()].map(asset => new Asset({
		...asset,
		id: toHex(asset.id)
	}))

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => assetStorage.getAsset(ctx, decodeHex(entity.id))))
        ctx.log.debug(`[${blockNumber}]: ${entities.length} Assets initialized!`)
    } else {
        ctx.log.debug(`[${blockNumber}]: No Assets to initialize!`)
    }

    isFirstBlockIndexed = true
}
