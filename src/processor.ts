import {
    BatchContext,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    SubstrateBatchProcessor,
    SubstrateBlock
} from '@subsquid/substrate-processor'
import { CallItem, EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store, TypeormDatabase } from "@subsquid/typeorm-store"
import { assetRegistrationHandler } from "./handlers/calls/assetRegistrationHandler"
import { demeterDepositHandler } from './handlers/calls/demeterDepositHandler'
import { demeterGetRewardsHandler } from './handlers/calls/demeterGetRewardsHandler'
import { demeterWithdrawHandler } from './handlers/calls/demeterWithdrawHandler'
import { irohaMigrationHandler } from './handlers/calls/irohaMigrationHandler'
import { liquidityDepositHandler } from './handlers/calls/liquidityDepositHandler'
import { referralReserveHandler } from './handlers/calls/referralReserveHandler'
import { referralUnreserveHandler } from './handlers/calls/referralUnreserveHandler'
import { rewardsHandler } from './handlers/calls/rewardsHandler'
import { setReferralHandler } from './handlers/calls/setReferralHandler'
import { soraEthTransferHandler } from './handlers/calls/soraEthTransferHandler'
import { transfersHandler } from './handlers/calls/transfersHandler'
import { ethSoraTransferHandler } from './handlers/events/ethSoraTransferHandler'
import { handleNetworkFee } from './handlers/events/networkFee'
import { referrerRewardHandler } from './handlers/events/referrerRewardHandler'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'

const processor = new SubstrateBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in the Subsquid registry
        // archive: lookupArchive("kusama", {release: "FireSquid"})

        // Use archive created by archive/docker-compose.yml
        chain: 'wss://mof2.sora.org',
        archive: `http://localhost:8888/graphql`
    })
    .setTypesBundle('archive/prod/typesBundle.json')
    .setBlockRange({ from: 0 })

    .addEvent('EthBridge.IncomingRequestFinalized')
    .addEvent('EthBridge.IncomingRequestFinalizationFailed')
    .addEvent('EthBridge.RequestRegistered')
    .addEvent('Tokens.Deposited')
    .addEvent('Tokens.Withdrawn')
    .addEvent('Tokens.Transfer')
    .addEvent('Balances.Deposit')
    .addEvent('Balances.Withdraw')
    .addEvent('Balances.Transfer')
    .addEvent('Currencies.Transferred')
    .addEvent('Currencies.Deposited')
    .addEvent('XorFee.FeeWithdrawn')
    .addEvent('XorFee.ReferrerRewarded')
    .addEvent('Assets.AssetRegistered')
    .addEvent('Assets.Transfer')
    .addEvent('LiquidityProxy.Exchange')
    .addEvent('DemeterFarmingPlatform.Deposited')
    .addEvent('DemeterFarmingPlatform.RewardWithdrawn')
    .addEvent('DemeterFarmingPlatform.Withdrawn')

    .addCall('Assets.register')
    .addCall('Assets.transfer')
    .addCall('LiquidityProxy.swap')
    .addCall('LiquidityProxy.swap_transfer')
    .addCall('PoolXYK.deposit_liquidity')
    .addCall('PoolXYK.withdraw_liquidity')
    .addCall('IrohaMigration.migrate')
    .addCall('Utility.batch_all')
    .addCall('EthBridge.transfer_to_sidechain')
    .addCall('PswapDistribution.claim_incentive')
    .addCall('Rewards.claim')
    .addCall('VestedRewards.claim_rewards')
    .addCall('VestedRewards.claim_crowdloan_rewards')
    .addCall('Referrals.set_referrer')
    .addCall('Referrals.reserve')
    .addCall('Referrals.unreserve')
    .addCall('DemeterFarmingPlatform.deposit')
    .addCall('DemeterFarmingPlatform.withdraw')
    .addCall('DemeterFarmingPlatform.get_rewards')

export type Item = BatchProcessorItem<typeof processor>
export type EventEntity = Exclude<BatchProcessorEventItem<typeof processor>, EventItem<'*'>>
export type CallEntity = Exclude<BatchProcessorCallItem<typeof processor>, CallItem<'*'>>
export type Context = BatchContext<Store, Item>
export type BlockHeader = SubstrateBlock
export type Block = { header: BlockHeader, items: Item[] }

processor.run(new TypeormDatabase(), async (ctx: Context) => {
    for (let block of ctx.blocks) {
        await initializeAssets(ctx, block)
        await initializePools(ctx, block)

        for (let item of block.items) {
            if (item.name === '*') continue

            if (item.kind === 'call') {
                const props = [ctx, block, item] as const

                await assetRegistrationHandler(...props)
                await transfersHandler(...props)
                // await handleSwaps(...props)
                // await handleSwapTransfers(...props)
                await liquidityDepositHandler(...props)
                // await liquidityRemovalHandler(...props)
                await irohaMigrationHandler(...props)
                // batchTransactionsHandler(...props)
                await soraEthTransferHandler(...props)
                await rewardsHandler(...props)
                await setReferralHandler(...props)
                await referralReserveHandler(...props)
                await referralUnreserveHandler(...props)
                await demeterDepositHandler(...props)
                await demeterWithdrawHandler(...props)
                await demeterGetRewardsHandler(...props)
            
            }
            if (item.kind === 'event') {
                const props = [ctx, block, item] as const
            
                await ethSoraTransferHandler(...props)
                // await handleTokenBurn(...props)
                // await handleXorBurn(...props)
                // await handleTokenMint(...props)
                // await handleXorMint(...props)
                await handleNetworkFee(...props)
                await referrerRewardHandler(...props)
                // await handleTransferEvent(...props)
            }
        }
    }
})
