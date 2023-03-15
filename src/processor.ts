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
import { demeterDepositHandler, demeterGetRewardsHandler, demeterWithdrawHandler } from './handlers/calls/demeterFarmingPlatform'
import { handlerIrohaMigration } from './handlers/calls/irohaMigrationHandler'
import { handleLiquidityDeposit } from './handlers/calls/liquidityDepositHandler'
import { handleLiquidityRemoval } from './handlers/calls/liquidityRemovalHandler'
import { referralReserveHandler } from './handlers/calls/referralReserveHandler'
import { referralUnreserveHandler } from './handlers/calls/referralUnreserveHandler'
import { rewardsHandler } from './handlers/calls/rewardsHandler'
import { setReferralHandler } from './handlers/calls/setReferralHandler'
import { soraEthTransferHandler } from './handlers/calls/soraEthTransferHandler'
import { handleSwaps, handleSwapTransfers } from './handlers/calls/swapsHandler'
import { handlerTransfers } from './handlers/calls/transfersHandler'
import { ethSoraTransferHandler } from './handlers/events/ethSoraTransferHandler'
import { handleTokenBurn, handleTokenMint, handleXorBurn, handleXorMint } from './handlers/events/mintAndBurn'
import { handleNetworkFee } from './handlers/events/networkFee'
import { referrerRewardHandler } from './handlers/events/referrerRewardHandler'
import { handleTransferEvent } from './handlers/events/transfer'
import { createHistoryElement } from './utils/history'

const eventParams = {
    data: {
        event: {
            args: true,
            extrinsic: {
                hash: true,
                fee: true
            }
        }
    }
} as const

const callParams = {
    data: {
        call: {
            args: true,
            extrinsic: {
                hash: true,
                fee: true
            },
            origin: true
        },
        extrinsic: {
            hash: true,
            fee: true,
            error: true
        }
    }
} as const


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

    .addEvent('EthBridge.IncomingRequestFinalized') // , eventParams)
    .addEvent('EthBridge.IncomingRequestFinalizationFailed') // , eventParams)
    .addEvent('EthBridge.RequestRegistered') // , eventParams)
    .addEvent('Tokens.Deposited') // , eventParams)
    .addEvent('Tokens.Withdrawn') // , eventParams)
    .addEvent('Tokens.Transfer') // , eventParams)
    .addEvent('Balances.Deposit') // , eventParams)
    .addEvent('Balances.Withdraw') // , eventParams)
    .addEvent('Balances.Transfer') // , eventParams)
    .addEvent('Currencies.Transferred') // , eventParams)
    .addEvent('Currencies.Deposited') // , eventParams)
    .addEvent('XorFee.FeeWithdrawn') // , eventParams)
    .addEvent('XorFee.ReferrerRewarded') // , eventParams)
    .addEvent('Assets.AssetRegistered') // , eventParams)
    .addEvent('Assets.Transfer') // , eventParams)
    .addEvent('LiquidityProxy.Exchange') // , eventParams)

    .addCall('Assets.register') // , callParams)
    .addCall('Assets.transfer') // , callParams)
    .addCall('LiquidityProxy.swap') // , callParams)
    .addCall('LiquidityProxy.swap_transfer') // , callParams)
    .addCall('PoolXYK.deposit_liquidity') // , callParams)
    .addCall('PoolXYK.withdraw_liquidity') // , callParams)
    .addCall('IrohaMigration.migrate') // , callParams)
    .addCall('Utility.batch_all') // , callParams)
    .addCall('EthBridge.transfer_to_sidechain') // , callParams)
    .addCall('PswapDistribution.claim_incentive') // , callParams)
    .addCall('Rewards.claim') // , callParams)
    .addCall('VestedRewards.claim_rewards') // , callParams)
    .addCall('VestedRewards.claim_crowdloan_rewards') // , callParams)
    .addCall('Referrals.set_referrer') // , callParams)
    .addCall('Referrals.reserve') // , callParams)
    .addCall('Referrals.unreserve') // , callParams)
    .addCall('DemeterFarmingPlatform.deposit') // , callParams)
    .addCall('DemeterFarmingPlatform.withdraw') // , callParams)
    .addCall('DemeterFarmingPlatform.get_rewards') // , callParams)


export type Item = BatchProcessorItem<typeof processor> // Exclude<Exclude<BatchProcessorItem<typeof processor>, EventItem<'*'>>, CallItem<'*'>>
export type EventEntity = Exclude<BatchProcessorEventItem<typeof processor>, EventItem<'*'>>
export type CallEntity = Exclude<BatchProcessorCallItem<typeof processor>, CallItem<'*'>>
export type Context = BatchContext<Store, Item>
export type BlockHeader = SubstrateBlock
export type Block = { header: BlockHeader, items: Item[] }


processor.run(new TypeormDatabase(), async (ctx: Context) => {

    for (let block of ctx.blocks) {
        for (let item of block.items) {
            if (item.name === '*') continue

            if (item.kind === 'call') {
                const props = [ctx, block, item] as const

                await createHistoryElement(...props)
                await assetRegistrationHandler(...props)
                await handlerTransfers(...props)
                await handleSwaps(...props)
                await handleSwapTransfers(...props)
                await handleLiquidityDeposit(...props)
                await handleLiquidityRemoval(...props)
                await handlerIrohaMigration(...props)
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
                await handleTokenBurn(...props)
                await handleXorBurn(...props)
                await handleTokenMint(...props)
                await handleXorMint(...props)
                await handleNetworkFee(...props)
                await referrerRewardHandler(...props)
                await handleTransferEvent(...props)
            }
        }
    }
})
