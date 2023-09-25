import { Asset } from '../../model'
import { Block, Context, ReferenceSymbol } from '../../types'
import { AssetsAssetInfosStorage, BalancesTotalIssuanceStorage, BandSymbolRatesStorage, TokensTotalIssuanceStorage, XSTPoolEnabledSyntheticsStorage } from '../../types/generated/storage'

import { assetPrecisions, assetStorage, formatU128ToBalance, getAssetId, tickerSyntheticAssetId } from '../../utils/assets'
import { XOR } from '../../utils/consts'
import { toText, toReferenceSymbol } from '../../utils'
import { AssetAmount, AssetId } from '../../types'
import { getEntityData } from '../../utils/entities'

let isFirstBlockIndexed = false

export const getAssetInfos = async (ctx: Context, block: Block) => {
    try {
      	ctx.log.debug(`Asset infos request...`)

      	const storage = new AssetsAssetInfosStorage(ctx, block.header)
		const data = await getEntityData(ctx, block, storage, { kind: 'storage', name: AssetsAssetInfosStorage.name }).getPairs()

		const infos = data.map(pair => {
			const [assetId, [symbol, name, precision, isMintable]] = pair
			return {
				assetId: getAssetId(assetId),
				symbol: toText(symbol),
				name: toText(name),
				precision,
				isMintable
			}
		})

		ctx.log.debug('Asset infos request completed.')
		
		return infos
    } catch (e: any) {
		ctx.log.error(`[${block.header.height}] Error getting Asset infos`)
		ctx.log.error(e)
		return null
    }
}

export const getSyntheticAssets = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug('Synthetic assets request...')

		const storage = new XSTPoolEnabledSyntheticsStorage(ctx, block.header)
		if (!storage.isExists) return null
		if (storage.isV19 || storage.isV42) return null
		const data = getEntityData(ctx, block, storage, { kind: 'storage', name: XSTPoolEnabledSyntheticsStorage.name }, ['19', '42'] as const)
		const pairs = await data.getPairs()

		const syntheticAssets = pairs.map((pair) => {
			const [asset, syntheticInfo] = pair
			const assetId = getAssetId(asset)
			return {
				assetId,
				value: {
					referenceSymbol: toReferenceSymbol(syntheticInfo.referenceSymbol),
					feeRatio: syntheticInfo.feeRatio,
				},
			}
		})

		ctx.log.debug('Synthetic assets request completed.')

		return syntheticAssets
    } catch (e) {
		ctx.log.error(`[${block.header.height}] Error getting Synthetic assets`)
		ctx.log.error(e as string)

      	return null
    }
};

export const getBandRates = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug('Band rates request...')

		const storage = new BandSymbolRatesStorage(ctx, block.header)
		if (!storage.isExists) return null
		const pairs = await getEntityData(ctx, block, storage, { kind: 'storage', name: BandSymbolRatesStorage.name }).getPairs()

		const rates = pairs.map(pair => {
			const [ticker, rate] = pair
			const referenceSymbol = typeof ticker === 'string' ? ticker as ReferenceSymbol : toReferenceSymbol(ticker)
			return {
				referenceSymbol,
				rate,
			}
		})

		ctx.log.debug('Band rates request completed.')
		
		return rates
    } catch (e) {
		ctx.log.error(`[${block.header.height}] Error getting Band rates`)
		ctx.log.error(e as string)

		return null
    }
};

export const getTokensIssuances = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug(`Tokens issuances request...`)

		const storage = new TokensTotalIssuanceStorage(ctx, block.header)
		const data = await getEntityData(ctx, block, storage, { kind: 'storage', name: TokensTotalIssuanceStorage.name }).getPairs()

		const issuances = data.map(pair => {
			const [assetId, issuances] = pair
			return {
				assetId: getAssetId(assetId),
				issuances: issuances as AssetAmount
			}
		})

		ctx.log.debug(`Tokens issuances request completed.`)
		return issuances
    } catch (e: any) {
		ctx.log.error(`[${block.header.height}] Error getting Tokens issuances`)
		ctx.log.error(e)
		return null
    }
}

export const getXorIssuance = async (ctx: Context, block: Block) => {
    try {
		ctx.log.debug(`XOR issuance request...`)
		const storage = new BalancesTotalIssuanceStorage(ctx, block.header)
		const issuance = await getEntityData(ctx, block, storage, { kind: 'storage', name: BalancesTotalIssuanceStorage.name }).get() as AssetAmount

		ctx.log.debug(`XOR issuance request completed.`)
		return issuance
    } catch (e: any) {
		ctx.log.error(`[${block.header.height}] Error getting XOR issuance`)
		ctx.log.error(e)
		return null
    }
}

export async function initializeAssets(ctx: Context, block: Block): Promise<void> {
    if (isFirstBlockIndexed) return

    const blockHeight = block.header.height

    ctx.log.debug(`[${blockHeight}] Initialize Asset entities`)

    const [
        assetInfos,
        syntheticAssets,
        bandRates,
        tokensIssuances,
        xorIssuance,
    ] = await Promise.all([
        getAssetInfos(ctx, block),
        getSyntheticAssets(ctx, block),
        getBandRates(ctx, block),
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

	if (syntheticAssets) {
        for (const { assetId, value: { referenceSymbol } } of syntheticAssets) {
            assetPrecisions.set(assetId, 18)
            tickerSyntheticAssetId.set(referenceSymbol, assetId)

			const blockHeight = block.header.height
            ctx.log.debug(`[${blockHeight}] ${referenceSymbol} ticker and synthetic asset ${assetId} added`)

            getOrCreate(assetId)
        }
    }

    if (bandRates) {
        for (const { referenceSymbol, rate } of bandRates) {
            const assetId = tickerSyntheticAssetId.get(referenceSymbol)

            if (!assetId || !rate) {
                continue
            }

            getOrCreate(assetId)

            const price = rate.value
            const priceUSD = formatU128ToBalance(price, assetId)

            ctx.log.debug(`[${blockHeight}] ${referenceSymbol} ticker price: ${priceUSD}`)

			const asset = assets.get(assetId)
			if (asset) {
				asset.priceUSD = priceUSD
			}
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
		...asset,
		updatedAtBlock: block.header.height
	}))

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => assetStorage.getOrCreateAsset(ctx, block, entity.id as AssetId)))
        ctx.log.debug(`[${blockHeight}] ${entities.length} Assets initialized!`)
    } else {
        ctx.log.debug(`[${blockHeight}] No Assets to initialize!`)
    }

    isFirstBlockIndexed = true
}
