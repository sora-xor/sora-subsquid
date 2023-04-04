import BigNumber from 'bignumber.js'

import { PoolXYK } from '../../model'

import { formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools'
import { XOR, PSWAP, DAI, BASE_ASSETS } from '../../utils/consts'
import { formatDateTimestamp } from '../../utils'
import { Block, Context } from '../../processor'
import { AssetId } from '../../types'

export async function syncPoolXykPrices(ctx: Context, block: Block): Promise<void> {
    if (!PoolsPrices.get()) return

    const blockHeight = block.header.height

    ctx.log.debug(`[${blockHeight}]: Update prices in PoolXYK entities`)

    const blockTimestamp: number = formatDateTimestamp(new Date(block.header.timestamp))
    const assetsLockedInPools = new Map<AssetId, bigint>()

    let pswapPriceInDAI = new BigNumber(0)
    let liquiditiesUSD = new BigNumber(0)

    for (const baseAssetId of BASE_ASSETS) {
        const pools: Array<PoolXYK> = []

        const poolsMap = poolAccounts.getMap(baseAssetId)

        if (!poolsMap) continue

        let baseAssetInPools = new BigNumber(0)
        let baseAssetWithDoublePools = new BigNumber(0)
        let baseAssetPriceInDAI = new BigNumber(0)

        ctx.log.debug(`[${blockHeight}]: Update ${poolsMap.size} ${baseAssetId} based pools`)

        for (const poolId of poolsMap.values()) {
            const pool = await poolsStorage.getPoolById(ctx, block, poolId)

            if (!pool) continue

            const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString())
            const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString())

            baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN)
            baseAssetWithDoublePools = baseAssetWithDoublePools.plus(baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier)))

            if (pool.targetAsset.id === DAI) {
                baseAssetPriceInDAI = targetAssetReservesBN.div(baseAssetReservesBN)
            }

            assetsLockedInPools.set(
                pool.baseAsset.id as AssetId,
                (assetsLockedInPools.get(pool.baseAsset.id as AssetId) || 0n) + pool.baseAssetReserves,
            )

            assetsLockedInPools.set(
                pool.targetAsset.id as AssetId,
                (assetsLockedInPools.get(pool.targetAsset.id as AssetId) || 0n) + pool.targetAssetReserves,
            )

            pools.push(pool)
        }

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools.forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString())
                const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString())
                const daiPrice = baseAssetReserves
                    .dividedBy(targetAssetReserves)
                    .multipliedBy(baseAssetPriceInDAI)

                p.priceUSD = daiPrice.toFixed(18)

                // update pswap price (scope)
                if (p.targetAsset.id === PSWAP && pswapPriceInDAI.isZero()) {
                    pswapPriceInDAI = daiPrice
                }
            })

            if (!pswapPriceInDAI.isZero()) {
                pools.forEach(p => {
                    const strategicBonusApy = ((
                        (pswapPriceInDAI.multipliedBy(new BigNumber(2500000)))
                        .dividedBy(baseAssetPriceInDAI.multipliedBy(baseAssetWithDoublePools.dividedBy(Math.pow(10, 18)))))
                        .multipliedBy(new BigNumber(365 / 2)))
                        .multipliedBy(new BigNumber((p.multiplier)))
                    p.strategicBonusApy = strategicBonusApy.toFixed(18)
                })
            }
        }

        const baseAssetInPoolsFormatted = formatU128ToBalance(BigInt(baseAssetInPools.toFixed(0)), baseAssetId)

        // update liquidities data
        liquiditiesUSD = liquiditiesUSD.plus(
            new BigNumber(baseAssetInPoolsFormatted)
                .multipliedBy(baseAssetPriceInDAI)
                .multipliedBy(new BigNumber(2))
        )

        // update price samples
        if (baseAssetId === XOR) {
            for (const pool of pools) {
                // TODO: check if '0' is right decision here
                await assetSnapshotsStorage.updatePrice(ctx, pool.targetAsset.id as AssetId, pool.priceUSD ?? '0', blockTimestamp)
            }

            await assetSnapshotsStorage.updatePrice(ctx, baseAssetId, baseAssetPriceInDAI.toFixed(18), blockTimestamp)
        }
    }

    // update locked liquidity for assets
    for (const [assetId, liquidity] of assetsLockedInPools.entries()) {
        await assetSnapshotsStorage.updateLiquidity(ctx, assetId as AssetId, liquidity, blockTimestamp)
    }

    // update total liquidity in USD
    await networkSnapshotsStorage.updateLiquidityStats(ctx, liquiditiesUSD, blockTimestamp)

    ctx.log.debug(`[${blockHeight}]: PoolXYK prices updated`)

    PoolsPrices.set(false)
}
