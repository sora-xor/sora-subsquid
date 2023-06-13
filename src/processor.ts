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
import { lookupArchive } from '@subsquid/archive-registry'

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
	'BridgeMultisig.as_multi',
	'BridgeMultisig.as_multi_threshold_1',
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
        archive: lookupArchive('sora')
    })
    .setTypesBundle(typesBundle as any)
    .setBlockRange({ from: 0 }) // .setBlockRange({ from: 8_035_052 })

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
export { CallItem, EventItem }

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
				if (item.name === 'Assets.register') await assetRegistrationHandler(context, block, item)
				if (item.name === 'Assets.transfer') await transfersHandler(context, block, item)
				if (item.name === 'LiquidityProxy.swap') await swapsHandler(context, block, item)
				if (item.name === 'LiquidityProxy.swap_transfer') await swapTransfersHandler(context, block, item)
				if (item.name === 'PoolXYK.deposit_liquidity') await liquidityDepositHandler(context, block, item)
				if (item.name === 'PoolXYK.withdraw_liquidity') await liquidityRemovalHandler(context, block, item)
				if (item.name === 'IrohaMigration.migrate') await irohaMigrationHandler(context, block, item)
				if (item.name === 'Utility.batch_all') await batchTransactionsHandler(context, block, item)
				if (item.name === 'EthBridge.transfer_to_sidechain') await soraEthTransferHandler(context, block, item)
				if (
					item.name === 'PswapDistribution.claim_incentive' ||
					item.name === 'Rewards.claim' ||
					item.name === 'VestedRewards.claim_rewards' ||
					item.name === 'VestedRewards.claim_crowdloan_rewards'
				) await rewardsHandler(context, block, item)
				if (item.name === 'Referrals.set_referrer') await setReferralHandler(context, block, item)
				if (item.name === 'Referrals.reserve') await referralReserveHandler(context, block, item)
				if (item.name === 'Referrals.unreserve') await referralUnreserveHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.deposit') await demeterDepositHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.withdraw') await demeterWithdrawHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.get_rewards') await demeterGetRewardsHandler(context, block, item)
            }
            if (item.kind === 'event') {
				if (item.name === 'EthBridge.IncomingRequestFinalized') await ethSoraTransferHandler(context, block, item)
				if (item.name === 'Tokens.Withdrawn') await tokenBurnHandler(context, block, item)
				if (item.name === 'Balances.Withdraw') await xorBurnHandler(context, block, item)
				if (item.name === 'Tokens.Deposited') await tokenMintHandler(context, block, item)
				if (item.name === 'Balances.Deposit') await xorMintHandler(context, block, item)
				if (item.name === 'XorFee.FeeWithdrawn') await networkFeeHandler(context, block, item)
				if (item.name === 'XorFee.ReferrerRewarded') await referrerRewardHandler(context, block, item)
				if (
					item.name === 'Tokens.Transfer' ||
					item.name === 'Balances.Transfer'
				) await transferHandler(context, block, item)
            }
        }

		await syncPoolXykPrices(context, block)
		if (lastBlockInTheBatch) {
			await syncModels(context, block)
		}
    }
})
