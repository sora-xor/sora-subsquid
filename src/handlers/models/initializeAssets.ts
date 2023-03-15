import { Block, Context } from '../../processor'

import { assetPrecisions, getAssetId, assetStorage } from '../../utils/assets'
import { XOR } from '../../utils/consts'

let isFirstBlockIndexed = false

export const getAssetInfos = async (ctx: Context) => {
    try {
      ctx.log.debug(`Asset infos request...`)
      const data = await api.query.assets.assetInfos.entries()
      console.log(data)
      ctx.log.debug(`Asset infos request completed.`)
      return data
    } catch (e: any) {
      ctx.log.error('Error getting Asset infos')
      ctx.log.error(e)
      return null
    }
}

export const getTokensIssuances = async (ctx: Context) => {
    try {
      ctx.log.debug(`Tokens issuances request...`)
      const data = await api.query.tokens.totalIssuance.entries()
      ctx.log.debug(`Tokens issuances request completed.`)
      return data
    } catch (e: any) {
      ctx.log.error('Error getting Tokens issuances')
      ctx.log.error(e)
      return null
    }
}

export const getXorIssuance = async (ctx: Context) => {
    try {
      ctx.log.debug(`XOR issuance request...`)
      const data = await api.query.balances.totalIssuance()
      ctx.log.debug(`XOR issuance request completed.`)
      return data
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
        getAssetInfos(ctx),
        getTokensIssuances(ctx),
        getXorIssuance(ctx)
    ])

    const assets = new Map()

    const create = (assetId: string) => {
        if (!assets.has(assetId)) {
            assets.set(assetId, {
                id: assetId,
                liquidity: BigInt(0),
                priceUSD: '0',
                supply: BigInt(0),
            })
        }
    }

    if (assetInfos) {
        for (const [{args: [assetCodec]}, value] of assetInfos) {
            const assetId = getAssetId(assetCodec)

            // TODO: remove any type
            assetPrecisions.set(assetId, (value as any)[2].toNumber())

            create(assetId)
        }
    }

    if (tokensIssuances) {
        for (const [{args: [assetCodec]}, value] of tokensIssuances) {
            const assetId = getAssetId(assetCodec)

            create(assetId)

            assets.get(assetId).supply = BigInt(value.toString())
        }
    }

    create(XOR)

    if (xorIssuance) {
        assets.get(XOR).supply = BigInt(xorIssuance.toString())
    }

    const entities = [...assets.values()]

    if (entities.length) {
        await ctx.store.save(entities)
        await Promise.all(entities.map(entity => assetStorage.getAsset(ctx, entity.id)))
        ctx.log.debug(`[${blockNumber}]: ${entities.length} Assets initialized!`)
    } else {
        ctx.log.debug(`[${blockNumber}]: No Assets to initialize!`)
    }

    isFirstBlockIndexed = true
}
