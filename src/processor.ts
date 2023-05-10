import {
    BatchContext,
    SubstrateBatchProcessor,
    SubstrateBlock
} from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
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
import { transferHandler } from './handlers/events/transfer'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'
import { syncModels } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/poolXykPrices'

const calls = [
	'*',
	'Assets.register',
    'Assets.transfer',
    'LiquidityProxy.swap',
    'LiquidityProxy.swap_transfer',
    'PoolXYK.deposit_liquidity',
    'PoolXYK.withdraw_liquidity',
    'IrohaMigration.migrate',
    'Utility.batch_all',
    'EthBridge.transfer_to_sidechain',
    'PswapDistribution.claim_incentive',
    'Rewards.claim',
    'VestedRewards.claim_rewards',
    'VestedRewards.claim_crowdloan_rewards',
    'Referrals.set_referrer',
    'Referrals.reserve',
    'Referrals.unreserve',
    'DemeterFarmingPlatform.deposit',
    'DemeterFarmingPlatform.withdraw',
    'DemeterFarmingPlatform.get_rewards',
	'BridgeMultisig.as_multi'
] as const


const events = [
	'*',
	'EthBridge.IncomingRequestFinalized',
    'EthBridge.IncomingRequestFinalizationFailed',
    'EthBridge.RequestRegistered',
    'Tokens.Deposited',
    'Tokens.Withdrawn',
    'Tokens.Transfer',
    'Balances.Deposit',
    'Balances.Withdraw',
    'Balances.Transfer',
    'Currencies.Transferred',
    'Currencies.Deposited',
    'XorFee.FeeWithdrawn',
    'XorFee.ReferrerRewarded',
    'Assets.AssetRegistered',
    'Assets.Transfer',
    'LiquidityProxy.Exchange',
    'DemeterFarmingPlatform.Deposited',
    'DemeterFarmingPlatform.RewardWithdrawn',
    'DemeterFarmingPlatform.Withdrawn',
] as const
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in the Subsquid registry
        // archive: lookupArchive("kusama", {release: "FireSquid"})

        // Use archive created by archive/docker-compose.yml
        chain: 'wss://mof2.sora.org',
        archive: `https://sora.archive.subsquid.io/graphql`
    })
    .setTypesBundle(typesBundle as any)
    .setBlockRange({ from: 9_900_000 }) // .setBlockRange({ from: 8_035_052 })

calls.forEach(callName => {
	processor.addCall(callName)
})

events.forEach(eventName => {
	processor.addEvent(eventName)
})

type EventItemUnion<U> = U extends string ? EventItem<U, true> : never
type CallItemUnion<U> = U extends string ? CallItem<U, true> : never

export type Entity = EventEntity | CallEntity
export type EventEntity = EventItemUnion<typeof events[number]>
export type CallEntity = CallItemUnion<typeof calls[number]>
export type Context = BatchContext<Store, Entity>
export type BlockHeader = SubstrateBlock
export type Block = { header: BlockHeader, items: Entity[] }

processor.run(new TypeormDatabase(), async (ctx) => {
	const context = ctx as Context

    for (let block of context.blocks) {
		const lastBlockInTheBatch = context.blocks[context.blocks.length - 1].header.hash === block.header.hash

        await initializeAssets(context, block)
        await initializePools(context, block)

        for (let item of block.items) {
            if (item.name === '*') {
				throw new Error('Unknown item: ' + JSON.stringify(item))
			}

            if (item.kind === 'call') {
                const props = [context, block, item] as const

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
                const props = [context, block, item] as const
            
                await ethSoraTransferHandler(...props)
                await tokenBurnHandler(...props)
                await xorBurnHandler(...props)
                await tokenMintHandler(...props)
                await xorMintHandler(...props)
                await networkFeeHandler(...props)
                await referrerRewardHandler(...props)
                await transferHandler(...props)
            }
        }

		await syncPoolXykPrices(context, block)
		if (lastBlockInTheBatch) {
			await syncModels(context, block)
		}
    }
})
