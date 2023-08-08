import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
import { TypeormDatabase } from "@subsquid/typeorm-store"
import { assetRegistrationCallHandler } from "./handlers/calls/assetRegistration"
import { batchTransactionsCallHandler } from './handlers/calls/batchTransactions'
import { demeterDepositCallHandler } from './handlers/calls/demeterDeposit'
import { demeterGetRewardsCallHandler } from './handlers/calls/demeterGetRewards'
import { demeterWithdrawCallHandler } from './handlers/calls/demeterWithdraw'
import { irohaMigrationCallHandler } from './handlers/calls/irohaMigration'
import { liquidityDepositCallHandler } from './handlers/calls/liquidityDeposit'
import { liquidityRemovalCallHandler } from './handlers/calls/liquidityRemoval'
import { referralReserveCallHandler } from './handlers/calls/referralReserve'
import { referralUnreserveCallHandler } from './handlers/calls/referralUnreserve'
import { rewardsCallHandler } from './handlers/calls/rewards'
import { setReferralCallHandler } from './handlers/calls/setReferral'
import { soraEthTransferCallHandler } from './handlers/calls/soraEthTransfer'
import { swapsCallHandler } from './handlers/calls/swaps'
import { transfersCallHandler } from './handlers/calls/transfers'
import { ethSoraTransferEventHandler } from './handlers/events/ethSoraTransfer'
import { tokenBurnEventHandler, tokenMintEventHandler, xorBurnEventHandler, xorMintEventHandler } from './handlers/events/mintAndBurn'
import { networkFeeEventHandler } from './handlers/events/networkFee'
import { referrerRewardEventHandler } from './handlers/events/referrerReward'
import { transferEventHandler } from './handlers/events/transfer'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'
import { syncModels } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/poolXykPrices'
import { Context } from './types'
import { calls, events } from './consts'
import { assetRegistrationEventHandler, syntheticAssetEnabledEventHandler } from './handlers/events/assetsRegistration'
import { bandRateUpdateHandler } from './handlers/events/band'
import { chain, archive, startBlock } from './config'
import { stakingRewardedEventHandler } from './handlers/events/rewards'
import { swapTransferBatchHandler } from './handlers/calls/swapTransferBatch'

const processor = new SubstrateBatchProcessor()
    .setDataSource({
		chain,
        archive,
    })
    .setTypesBundle(typesBundle as any)
    .setBlockRange({ from: startBlock })

calls.forEach(callName => {
	processor.addCall(callName)
})

events.forEach(eventName => {
	processor.addEvent(eventName)
})

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
				if (item.name === 'Assets.register') await assetRegistrationCallHandler(context, block, item)
				if (item.name === 'Assets.transfer') await transfersCallHandler(context, block, item)
				if (
					item.name === 'LiquidityProxy.swap' ||
					item.name === 'LiquidityProxy.swap_transfer'
				) await swapsCallHandler(context, block, item)
				if (item.name === 'LiquidityProxy.swap_transfer_batch') await swapTransferBatchHandler(context, block, item)
				if (item.name === 'PoolXYK.deposit_liquidity') await liquidityDepositCallHandler(context, block, item)
				if (item.name === 'PoolXYK.withdraw_liquidity') await liquidityRemovalCallHandler(context, block, item)
				if (item.name === 'IrohaMigration.migrate') await irohaMigrationCallHandler(context, block, item)
				if (item.name === 'Utility.batch_all') await batchTransactionsCallHandler(context, block, item)
				if (item.name === 'EthBridge.transfer_to_sidechain') await soraEthTransferCallHandler(context, block, item)
				if (
					item.name === 'PswapDistribution.claim_incentive' ||
					item.name === 'Rewards.claim' ||
					item.name === 'VestedRewards.claim_rewards' ||
					item.name === 'VestedRewards.claim_crowdloan_rewards'
				) await rewardsCallHandler(context, block, item)
				if (item.name === 'Referrals.set_referrer') await setReferralCallHandler(context, block, item)
				if (item.name === 'Referrals.reserve') await referralReserveCallHandler(context, block, item)
				if (item.name === 'Referrals.unreserve') await referralUnreserveCallHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.deposit') await demeterDepositCallHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.withdraw') await demeterWithdrawCallHandler(context, block, item)
				if (item.name === 'DemeterFarmingPlatform.get_rewards') await demeterGetRewardsCallHandler(context, block, item)
            }
            if (item.kind === 'event') {
				if (item.name === 'EthBridge.IncomingRequestFinalized') await ethSoraTransferEventHandler(context, block, item)
				if (item.name === 'Tokens.Withdrawn') await tokenBurnEventHandler(context, block, item)
				if (item.name === 'Balances.Withdraw') await xorBurnEventHandler(context, block, item)
				if (item.name === 'Tokens.Deposited') await tokenMintEventHandler(context, block, item)
				if (item.name === 'Balances.Deposit') await xorMintEventHandler(context, block, item)
				if (item.name === 'XorFee.FeeWithdrawn') await networkFeeEventHandler(context, block, item)
				if (item.name === 'XorFee.ReferrerRewarded') await referrerRewardEventHandler(context, block, item)
				if (
					item.name === 'Tokens.Transfer' ||
					item.name === 'Balances.Transfer'
				) await transferEventHandler(context, block, item)
				if (item.name === 'Assets.AssetRegistered') await assetRegistrationEventHandler(context, block, item)
				if (item.name === 'XstPool.SyntheticAssetEnabled') await syntheticAssetEnabledEventHandler(context, block, item)
				if (item.name === 'Band.SymbolsRelayed') await bandRateUpdateHandler(context, block, item)
				if (item.name === 'Staking.Rewarded') await stakingRewardedEventHandler(context, block, item)
            }
        }

		await syncPoolXykPrices(context, block)
		if (lastBlockInTheBatch) {
			await syncModels(context, block)
		}
    }
})
