import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import typesBundle from './typesBundle.json'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { assetsBurnCallHandler } from './handlers/calls/assets/burn'
import { assetsRegisterCallHandler } from './handlers/calls/assets/register'
import { assetsMintCallHandler } from './handlers/calls/assets/mint'
import { utilityBatchCallHandler } from './handlers/calls/utility/batch'
import { demeterFarmingPlatformDepositCallHandler } from './handlers/calls/demeterFarmingPlatform/deposit'
import { demeterFarmingPlatformGetRewardsCallHandler } from './handlers/calls/demeterFarmingPlatform/getRewards'
import { demeterFarmingPlatformWithdrawCallHandler } from './handlers/calls/demeterFarmingPlatform/withdraw'
import { irohaMigrationMigrateCallHandler } from './handlers/calls/irohaMigration/migrate'
import { poolXykDepositLiquidityCallHandler } from './handlers/calls/poolXYK/depositLiquidity'
import { poolXykWithdrawLiquidityCallHandler } from './handlers/calls/poolXYK/withdrawLiquidity'
import { referralsReserveCallHandler } from './handlers/calls/referrals/reserve'
import { referralsUnreserveCallHandler } from './handlers/calls/referrals/unreserve'
import { rewardsCallHandler } from './handlers/calls/rewards'
import { referralsSetReferrerCallHandler } from './handlers/calls/referrals/setReferrer'
import { ethBridgeTransferToSidechainCallHandler } from './handlers/calls/ethBridge/transferToSidechain'
import { swapsCallHandler } from './handlers/calls/liquidityProxy/swaps'
import { assetTransferCallHandler } from './handlers/calls/assets/transfer'
import { ethSoraTransferEventHandler } from './handlers/events/ethSoraTransfer'
import { tokenBurnEventHandler, tokenMintEventHandler, xorBurnEventHandler, xorMintEventHandler } from './handlers/events/mintAndBurn'
import { networkFeeEventHandler } from './handlers/events/networkFee'
import { referrerRewardEventHandler } from './handlers/events/referrerReward'
import { transferEventHandler } from './handlers/events/transfer'
import { initializeAssets } from './handlers/models/initializeAssets'
import { initializePools } from './handlers/models/initializePools'
import { syncModels, updateDailyStats, updateAssetsWeeklyStats, updateNetworkStats } from './handlers/sync/models'
import { syncPoolXykPrices } from './handlers/sync/prices'
import { assetRegistrationEventHandler, syntheticAssetEnabledEventHandler } from './handlers/events/assetsRegistration'
import { chain, archive, startBlock } from './config'
import { stakingRewardedEventHandler } from './handlers/events/rewards'
import { liquidityProxySwapTransferBatchCallHandler } from './handlers/calls/liquidityProxy/swapTransferBatch'
import { stakingStakersElectedEventHandler } from './handlers/events/staking'
import { lookupArchive } from '@subsquid/archive-registry'
import { syncStreams } from './handlers/sync/streams'
import { initializeOrderBooks } from './handlers/models/initializeOrderBooks'
import {
	orderBookCreatedEventHandler,
	orderBookLimitOrderCanceledEventHandler,
	orderBookLimitOrderConvertedToMarketOrderEventHandler,
	orderBookLimitOrderExecutedEventHandler,
	orderBookLimitOrderFilledEventHandler,
	orderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEventHandler,
	orderBookLimitOrderPlacedEventHandler,
	orderBookLimitOrderUpdatedEventHandler,
	orderBookMarketOrderExecutedEventHandler,
	orderBookStatusChangedEventHandler
} from './handlers/events/orderBook'
import { orderBookCancelLimitOrderCallHandler } from './handlers/calls/orderBook/cancelLimitOrder'
import { getSortedItems } from './utils/processor'
import { bandRelayCallHandler } from './handlers/calls/band/relay'
import { anyCallHandler } from './handlers/calls'
import { anyEventHandler } from './handlers/events'
import { stakingBondCallHandler } from './handlers/calls/staking/bond'
import { stakingBondExtraCallHandler } from './handlers/calls/staking/bondExtra'
import { stakingCancelDeferredSlashCallHandler } from './handlers/calls/staking/cancelDeferredSlash'
import { stakingChillCallHandler } from './handlers/calls/staking/chill'
import { stakingChillOtherCallHandler } from './handlers/calls/staking/chillOther'
import { stakingForceApplyMinCommissionCallHandler } from './handlers/calls/staking/forceApplyMinCommission'
import { stakingForceNewEraCallHandler } from './handlers/calls/staking/forceNewEra'
import { stakingForceNewEraAlwaysCallHandler } from './handlers/calls/staking/forceNewEraAlways'
import { stakingForceNoErasCallHandler } from './handlers/calls/staking/forceNoEras'
import { stakingForceUnstakeCallHandler } from './handlers/calls/staking/forceUnstake'
import { stakingIncreaseValidatorCountCallHandler } from './handlers/calls/staking/increaseValidatorCount'
import { stakingKickCallHandler } from './handlers/calls/staking/kick'
import { stakingNominateCallHandler } from './handlers/calls/staking/nominate'
import { stakingPayoutStakersCallHandler } from './handlers/calls/staking/payoutStakers'
import { stakingReapStashCallHandler } from './handlers/calls/staking/reapStash'
import { stakingRebondCallHandler } from './handlers/calls/staking/rebond'
import { stakingScaleValidatorCountCallHandler } from './handlers/calls/staking/scaleValidatorCount'
import { stakingSetControllerCallHandler } from './handlers/calls/staking/setController'
import { stakingSetHistoryDepthCallHandler } from './handlers/calls/staking/setHistoryDepth'
import { stakingSetInvulnerablesCallHandler } from './handlers/calls/staking/setInvulnerables'
import { stakingSetMinCommissionCallHandler } from './handlers/calls/staking/setMinCommission'
import { stakingSetPayeeCallHandler } from './handlers/calls/staking/setPayee'
import { stakingSetStakingConfigsCallHandler } from './handlers/calls/staking/setStakingConfigs'
import { stakingSetValidatorCountCallHandler } from './handlers/calls/staking/setValidatorCount'
import { stakingSubmitElectionSolutionCallHandler } from './handlers/calls/staking/submitElectionSolution'
import { stakingSubmitElectionSolutionUnsignedCallHandler } from './handlers/calls/staking/submitElectionSolutionUsigned'
import { stakingUnbondCallHandler } from './handlers/calls/staking/unbond'
import { stakingValidateCallHandler } from './handlers/calls/staking/validate'
import { stakingWithdrawUnbondedCallHandler } from './handlers/calls/staking/withdrawUnbonded'
import { liquidityProxyXorlessTransferCallHandler } from './handlers/calls/liquidityProxy/xorlessTransfer'
import { orderBookPlaceLimitOrderCallHandler } from './handlers/calls/orderBook/placeLimitOrder'
import { utilityBatchAllCallHandler } from './handlers/calls/utility/batchAll'
import { vaultCloseCallHandler, vaultCreateCallHandler, vaultDecreaseDebtCallHandler, vaultDepositCollateralCallHandler, vaultIncreaseDeptCallHandler } from './handlers/calls/kensetsu'
import { vaultClosedEvent, vaultCollateralDepositEvent, vaultCreatedEvent, vaultDebtIncreasedEvent, vaultDebtPaymentEvent, vaultLiquidatedEvent } from './handlers/events/kensetsu'

export const processor = new SubstrateBatchProcessor()
	.setRpcEndpoint({
		url: chain,
		rateLimit: 10
	})
	.setTypesBundle(typesBundle as any)
	.setBlockRange({ from: startBlock })
	.setFields({
		extrinsic: {
			success: true,
			error: true,
			hash: true,
			signature: true,
		},
		block: {
			timestamp: true,
		}
	})

if (archive) {
	processor.setGateway(lookupArchive(archive, { type: 'Substrate', release: 'ArrowSquid' }))
}
 
processor.addCall({ extrinsic: true })

processor.addEvent({ extrinsic: true })

let lastSyncedBlock = -1

processor.run(new TypeormDatabase({ supportHotBlocks: false }), async (ctx) => {
	ctx._chain
	const context = ctx
	
	for (let block of context.blocks) {
		let blockContext = {
			...context,
			block,
			now: performance.now(),
		}

		await initializeAssets(blockContext)
		await initializePools(blockContext)
		await initializeOrderBooks(blockContext)

		if (lastSyncedBlock !== block.header.height) {
			await syncPoolXykPrices(blockContext)
			await syncStreams(blockContext)
			// Once in 1 hour
			if (block.header.height % 600 === 0) {
				await updateNetworkStats(blockContext)
			}
			// Once in 1 hour
			if (block.header.height % 600 === 0) {
				await updateDailyStats(blockContext)
			}
			// Once in 4 hours
			if (block.header.height % 2_400 === 0) {
				await updateAssetsWeeklyStats(blockContext)
			}
			// Once in 5 minutes
			if (block.header.height % 50 === 0) {
				await syncModels(blockContext)
			}
			lastSyncedBlock = block.header.height
		}

		for (let item of getSortedItems(block)) {
			
			if (item.kind === 'call') {
				const { call } = item

				if (call.name !== call.extrinsic?.call?.name) {
					continue
				}

				await anyCallHandler(blockContext, call)
	
				if (call.name === 'Assets.register') await assetsRegisterCallHandler(blockContext, call)
				if (call.name === 'Assets.burn') await assetsBurnCallHandler(blockContext, call)
				if (call.name === 'Assets.mint') await assetsMintCallHandler(blockContext, call)
				if (call.name === 'Assets.transfer') await assetTransferCallHandler(blockContext, call)
				if (call.name === 'LiquidityProxy.xorless_transfer') await liquidityProxyXorlessTransferCallHandler(blockContext, call)
				if (call.name === 'LiquidityProxy.swap' || call.name === 'LiquidityProxy.swap_transfer') 																																																					await swapsCallHandler(blockContext, call)
				if (call.name === 'LiquidityProxy.swap_transfer_batch') await liquidityProxySwapTransferBatchCallHandler(blockContext, call)
				if (call.name === 'PoolXYK.deposit_liquidity') await poolXykDepositLiquidityCallHandler(blockContext, call)
				if (call.name === 'PoolXYK.withdraw_liquidity') await poolXykWithdrawLiquidityCallHandler(blockContext, call)
				if (call.name === 'IrohaMigration.migrate') await irohaMigrationMigrateCallHandler(blockContext, call)
				if (call.name === 'Utility.batch') await utilityBatchCallHandler(blockContext, call)
				if (call.name === 'Utility.batch_all') await utilityBatchAllCallHandler(blockContext, call)
				if (call.name === 'EthBridge.transfer_to_sidechain') await ethBridgeTransferToSidechainCallHandler(blockContext, call)
				if (
					call.name === 'PswapDistribution.claim_incentive' ||
					call.name === 'Rewards.claim' ||
					call.name === 'VestedRewards.claim_rewards' ||
					call.name === 'VestedRewards.claim_crowdloan_rewards'
				)
					await rewardsCallHandler(blockContext, call)
				if (call.name === 'Referrals.set_referrer') await referralsSetReferrerCallHandler(blockContext, call)
				if (call.name === 'Referrals.reserve') await referralsReserveCallHandler(blockContext, call)
				if (call.name === 'Referrals.unreserve') await referralsUnreserveCallHandler(blockContext, call)
				if (call.name === 'DemeterFarmingPlatform.deposit') await demeterFarmingPlatformDepositCallHandler(blockContext, call)
				if (call.name === 'DemeterFarmingPlatform.withdraw') await demeterFarmingPlatformWithdrawCallHandler(blockContext, call)
				if (call.name === 'DemeterFarmingPlatform.get_rewards') await demeterFarmingPlatformGetRewardsCallHandler(blockContext, call)
				if (call.name === 'Band.relay') await bandRelayCallHandler(blockContext, call)
	
				if (call.name === 'Staking.bond') await stakingBondCallHandler(blockContext, call)
				if (call.name === 'Staking.bond_extra') await stakingBondExtraCallHandler(blockContext, call)
				if (call.name === 'Staking.cancel_deferred_slash') await stakingCancelDeferredSlashCallHandler(blockContext, call)
				if (call.name === 'Staking.chill') await stakingChillCallHandler(blockContext, call)
				if (call.name === 'Staking.chill_other') await stakingChillOtherCallHandler(blockContext, call)
				if (call.name === 'Staking.force_apply_min_commission') await stakingForceApplyMinCommissionCallHandler(blockContext, call)
				if (call.name === 'Staking.force_new_era') await stakingForceNewEraCallHandler(blockContext, call)
				if (call.name === 'Staking.force_new_era_always') await stakingForceNewEraAlwaysCallHandler(blockContext, call)
				if (call.name === 'Staking.force_no_eras') await stakingForceNoErasCallHandler(blockContext, call)
				if (call.name === 'Staking.force_unstake') await stakingForceUnstakeCallHandler(blockContext, call)
				if (call.name === 'Staking.increase_validator_count') await stakingIncreaseValidatorCountCallHandler(blockContext, call)
				if (call.name === 'Staking.kick') await stakingKickCallHandler(blockContext, call)
				if (call.name === 'Staking.nominate') await stakingNominateCallHandler(blockContext, call)
				if (call.name === 'Staking.payout_stakers') await stakingPayoutStakersCallHandler(blockContext, call)
				if (call.name === 'Staking.reap_stash') await stakingReapStashCallHandler(blockContext, call)
				if (call.name === 'Staking.rebond') await stakingRebondCallHandler(blockContext, call)
				if (call.name === 'Staking.scale_validator_count') await stakingScaleValidatorCountCallHandler(blockContext, call)
				if (call.name === 'Staking.set_controller') await stakingSetControllerCallHandler(blockContext, call)
				if (call.name === 'Staking.set_history_depth') await stakingSetHistoryDepthCallHandler(blockContext, call)
				if (call.name === 'Staking.set_invulnerables') await stakingSetInvulnerablesCallHandler(blockContext, call)
				if (call.name === 'Staking.set_min_commission') await stakingSetMinCommissionCallHandler(blockContext, call)
				if (call.name === 'Staking.set_payee') await stakingSetPayeeCallHandler(blockContext, call)
				if (call.name === 'Staking.set_staking_configs') await stakingSetStakingConfigsCallHandler(blockContext, call)
				if (call.name === 'Staking.set_validator_count') await stakingSetValidatorCountCallHandler(blockContext, call)
				if (call.name === 'Staking.submit_election_solution') await stakingSubmitElectionSolutionCallHandler(blockContext, call)
				if (call.name === 'Staking.submit_election_solution_unsigned') await stakingSubmitElectionSolutionUnsignedCallHandler(blockContext, call)
				if (call.name === 'Staking.unbond') await stakingUnbondCallHandler(blockContext, call)
				if (call.name === 'Staking.validate') await stakingValidateCallHandler(blockContext, call)
				if (call.name === 'Staking.withdraw_unbonded') await stakingWithdrawUnbondedCallHandler(blockContext, call)
				if (call.name === 'OrderBook.place_limit_order') await orderBookPlaceLimitOrderCallHandler(blockContext, call)
				if (call.name === 'OrderBook.cancel_limit_order') await orderBookCancelLimitOrderCallHandler(blockContext, call)
				if (call.name === 'OrderBook.cancel_limit_orders_batch') await orderBookCancelLimitOrderCallHandler(blockContext, call)
				if (call.name === 'Kensetsu.createCdp') await vaultCreateCallHandler(blockContext, call)
				if (call.name === 'Kensetsu.depositCollateral') await vaultDepositCollateralCallHandler(blockContext, call)
				if (call.name === 'Kensetsu.repayDebt') await vaultDecreaseDebtCallHandler(blockContext, call)
				if (call.name === 'Kensetsu.borrow') await vaultIncreaseDeptCallHandler(blockContext, call)
				if (call.name === 'Kensetsu.closeCdp') await vaultCloseCallHandler(blockContext, call)
			}

			if (item.kind === 'event') {
				const { event } = item

				await anyEventHandler(blockContext, event)

				if (event.name === 'EthBridge.IncomingRequestFinalized') await ethSoraTransferEventHandler(blockContext, event)
				if (event.name === 'Tokens.Withdrawn') await tokenBurnEventHandler(blockContext, event)
				if (event.name === 'Balances.Withdraw') await xorBurnEventHandler(blockContext, event)
				if (event.name === 'Tokens.Deposited') await tokenMintEventHandler(blockContext, event)
				if (event.name === 'Balances.Deposit') await xorMintEventHandler(blockContext, event)
				if (event.name === 'XorFee.FeeWithdrawn') await networkFeeEventHandler(blockContext, event)
				if (event.name === 'XorFee.ReferrerRewarded') await referrerRewardEventHandler(blockContext, event)
				if (event.name === 'Tokens.Transfer' || event.name === 'Balances.Transfer' || event.name === 'Currencies.Transferred') await transferEventHandler(blockContext, event)
				if (event.name === 'Assets.AssetRegistered') await assetRegistrationEventHandler(blockContext, event)
				if (event.name === 'XSTPool.SyntheticAssetEnabled') await syntheticAssetEnabledEventHandler(blockContext, event)
				if (event.name === 'Staking.Rewarded') await stakingRewardedEventHandler(blockContext, event)
				if (event.name === 'Staking.StakersElected') await stakingStakersElectedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.OrderBookCreated') await orderBookCreatedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.OrderBookStatusChanged') await orderBookStatusChangedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderPlaced') await orderBookLimitOrderPlacedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderExecuted') await orderBookLimitOrderExecutedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderUpdated') await orderBookLimitOrderUpdatedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderFilled') await orderBookLimitOrderFilledEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderCanceled') await orderBookLimitOrderCanceledEventHandler(blockContext, event)
				if (event.name === 'OrderBook.MarketOrderExecuted') await orderBookMarketOrderExecutedEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderConvertedToMarketOrder') await orderBookLimitOrderConvertedToMarketOrderEventHandler(blockContext, event)
				if (event.name === 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder') await orderBookLimitOrderIsSplitIntoMarketOrderAndLimitOrderEventHandler(blockContext, event)
				if (event.name === 'Kensetsu.CDPCreated') await vaultCreatedEvent(blockContext, event)
				if (event.name === 'Kensetsu.CollateralDeposit') await vaultCollateralDepositEvent(blockContext, event)
				if (event.name === 'Kensetsu.DebtIncreased') await vaultDebtIncreasedEvent(blockContext, event)
				if (event.name === 'Kensetsu.DebtPayment') await vaultDebtPaymentEvent(blockContext, event)
				if (event.name === 'Kensetsu.Liquidated') await vaultLiquidatedEvent(blockContext, event)
				if (event.name === 'Kensetsu.CDPClosed') await vaultClosedEvent(blockContext, event)
			}
		}
	}
})
