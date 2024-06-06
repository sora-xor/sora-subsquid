import * as devStorage from '../../dev/apollo-platform/storage'


export const userLendingInfo = {
	name: 'ApolloPlatform.UserLendingInfo',
	v85Dev: devStorage.userLendingInfo['v85'],
}

export const userBorrowingInfo = {
	name: 'ApolloPlatform.UserBorrowingInfo',
	v85Dev: devStorage.userBorrowingInfo['v85'],
}

export const poolData = {
	name: 'ApolloPlatform.PoolData',
	v85Dev: devStorage.poolData['v85'],
}

export const poolsByBlock = {
	name: 'ApolloPlatform.PoolsByBlock',
	v85Dev: devStorage.poolsByBlock['v85'],
}

export const authorityAccount = {
	name: 'ApolloPlatform.AuthorityAccount',
	v85Dev: devStorage.authorityAccount['v85'],
}

export const treasuryAccount = {
	name: 'ApolloPlatform.TreasuryAccount',
	v85Dev: devStorage.treasuryAccount['v85'],
}

export const lendingRewards = {
	name: 'ApolloPlatform.LendingRewards',
	v85Dev: devStorage.lendingRewards['v85'],
}

export const borrowingRewards = {
	name: 'ApolloPlatform.BorrowingRewards',
	v85Dev: devStorage.borrowingRewards['v85'],
}

export const lendingRewardsPerBlock = {
	name: 'ApolloPlatform.LendingRewardsPerBlock',
	v85Dev: devStorage.lendingRewardsPerBlock['v85'],
}

export const borrowingRewardsPerBlock = {
	name: 'ApolloPlatform.BorrowingRewardsPerBlock',
	v85Dev: devStorage.borrowingRewardsPerBlock['v85'],
}
