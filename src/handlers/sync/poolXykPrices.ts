import BigNumber from 'bignumber.js'

import { PoolXYK } from '../../model'

import { formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets'
import { networkSnapshotsStorage } from '../../utils/network'
import { poolAccounts, PoolsPrices, poolsStorage } from '../../utils/pools'
import { XOR, PSWAP, DAI, BASE_ASSETS } from '../../utils/consts'
import { Block, Context } from '../../types'
import { AssetId } from '../../types'

export async function syncPoolXykPrices(ctx: Context, block: Block): Promise<void> {
    if (!PoolsPrices.get()) return

    const blockHeight = block.header.height

    ctx.log.debug(`[${blockHeight}] Update prices in PoolXYK entities`)

    const assetsLockedInPools = new Map<AssetId, bigint>()

    let pswapPriceInDAI = new BigNumber(0)
    let liquiditiesUSD = new BigNumber(0)

    let baseAssetWithDoublePoolsPrice = new BigNumber(0)

    const pools: Record<string, PoolXYK[]> = {}
	const assetsPrices: Record<AssetId, { reserves: bigint; price: string; }> = {}

    for (const baseAssetId of [...BASE_ASSETS].reverse()) {
        const poolsMap = poolAccounts.getMap(baseAssetId)

        if (!poolsMap) continue

        pools[baseAssetId] = [];

        let baseAssetInPools = new BigNumber(0)
        let baseAssetWithDoublePools = new BigNumber(0)
        let baseAssetPriceInDAI = new BigNumber(0)

        ctx.log.debug(`[${blockHeight}] Update ${poolsMap.size} ${baseAssetId} based pools`)

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

            pools[baseAssetId].push(pool);
        }

		baseAssetWithDoublePoolsPrice = baseAssetWithDoublePoolsPrice.plus(baseAssetWithDoublePools.multipliedBy(baseAssetPriceInDAI));

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
            // update pools prices
            pools[baseAssetId].forEach(p => {
                const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString())
                const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString())
                const daiPrice = baseAssetReserves
                    .dividedBy(targetAssetReserves)
                    .multipliedBy(baseAssetPriceInDAI)

                p.priceUSD = daiPrice.toFixed(18)

                // update PSWAP price (price from pair with XOR)
                if (p.targetAsset.id === PSWAP && p.baseAsset.id === XOR) {
                    pswapPriceInDAI = daiPrice
                }
            })
        }

        const baseAssetInPoolsFormatted = formatU128ToBalance(BigInt(baseAssetInPools.toFixed(0)), baseAssetId)

        // update liquidities data
        liquiditiesUSD = liquiditiesUSD.plus(
            new BigNumber(baseAssetInPoolsFormatted)
                .multipliedBy(baseAssetPriceInDAI)
                .multipliedBy(new BigNumber(2))
        )

        // update price samples
		for (const pool of pools[baseAssetId]) {
            if (!assetsPrices[pool.targetAsset.id as AssetId] || assetsPrices[pool.targetAsset.id as AssetId].reserves < pool.targetAssetReserves) {
				if (pool.priceUSD) {
					assetsPrices[pool.targetAsset.id as AssetId] = {
						reserves: pool.targetAssetReserves,
						price: pool.priceUSD,
					}
				}
               
            }
        }
		assetsPrices[baseAssetId] = {
            reserves: BigInt(0),
            price: baseAssetPriceInDAI.toFixed(18),
        }
    }

    // update pools SB_APY
    if (!pswapPriceInDAI.isZero()) {
        const pswapsPerDay = new BigNumber(2_500_000);

        for (const baseAssetId of BASE_ASSETS) {
            if (Array.isArray(pools[baseAssetId])) {
				pools[baseAssetId].forEach(p => {
					const strategicBonusApy =
						pswapPriceInDAI.multipliedBy(pswapsPerDay)
						.dividedBy(baseAssetWithDoublePoolsPrice.dividedBy(Math.pow(10, 18)))
						.multipliedBy(new BigNumber(365 / 2))
						.multipliedBy(new BigNumber(p.multiplier));

					p.strategicBonusApy = strategicBonusApy.toFixed(18);
				});
			}
        }
    }

    // update assets prices
    for (const [assetId, { price }] of Object.entries(assetsPrices)) {
        await assetSnapshotsStorage.updatePrice(ctx, block, assetId as AssetId, price);
    }

    // update locked liquidity for assets
    for (const [assetId, liquidity] of assetsLockedInPools.entries()) {
        await assetSnapshotsStorage.updateLiquidity(ctx, block, assetId as AssetId, liquidity)
    }

    // update total liquidity in USD
    await networkSnapshotsStorage.updateLiquidityStats(ctx, block, liquiditiesUSD)

    ctx.log.debug(`[${blockHeight}] PoolXYK prices updated`)

    PoolsPrices.set(false)
}
