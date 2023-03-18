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
import { assetRegistrationHandler } from "./handlers/calls/assetRegistration"
import { batchTransactionsHandler } from './handlers/calls/batchTransactions'
import { demeterDepositHandler } from './handlers/calls/demeterDeposit'
import { demeterGetRewardsHandler } from './handlers/calls/demeterGetRewards'
import { demeterWithdrawHandler } from './handlers/calls/demeterWithdraw'
import { irohaMigrationHandler } from './handlers/calls/irohaMigration'
import { liquidityDepositHandler } from './handlers/calls/liquidityDeposit'
import { liquidityRemovalHandler } from './handlers/calls/liquidityRemoval'
import { referralReserveHandler } from './handlers/calls/referralReserve'
import { referralUnreserveHandler } from './handlers/calls/referralUnreserve'
import { rewardsHandler } from './handlers/calls/rewards'
import { setReferralHandler } from './handlers/calls/setReferral'
import { soraEthTransferHandler } from './handlers/calls/soraEthTransfer'
import { swapsHandler } from './handlers/calls/swaps'
import { swapTransfersHandler } from './handlers/calls/swapTransfers'
import { transfersHandler } from './handlers/calls/transfers'
import { ethSoraTransferHandler } from './handlers/events/ethSoraTransfer'
import { tokenBurnHandler, tokenMintHandler, xorBurnHandler, xorMintHandler } from './handlers/events/mintAndBurn'
import { networkFeeHandler } from './handlers/events/networkFee'
import { referrerRewardHandler } from './handlers/events/referrerReward'
import { transferEventHandler } from './handlers/events/transfer'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'
import { syncModels } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/poolXykPrices'

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
		await syncModels(ctx, block)
		await syncPoolXykPrices(ctx, block)

        for (let item of block.items) {
            if (item.name === '*') continue

            if (item.kind === 'call') {
                const props = [ctx, block, item] as const

                await assetRegistrationHandler(...props)
                await transfersHandler(...props)
                await swapsHandler(...props)
                await swapTransfersHandler(...props)
                await liquidityDepositHandler(...props)
                await liquidityRemovalHandler(...props)
                await irohaMigrationHandler(...props)
                await batchTransactionsHandler(...props)
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
                await tokenBurnHandler(...props)
                await xorBurnHandler(...props)
                await tokenMintHandler(...props)
                await xorMintHandler(...props)
                await networkFeeHandler(...props)
                await referrerRewardHandler(...props)
                await transferEventHandler(...props)
            }
        }
    }
})
