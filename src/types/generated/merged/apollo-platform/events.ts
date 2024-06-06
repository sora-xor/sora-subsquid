import * as devEvents from '../../dev/apollo-platform/events'


export const poolAdded = {
	name: 'ApolloPlatform.PoolAdded',
	v85Dev: devEvents.poolAdded['v85'],
}

export const lent = {
	name: 'ApolloPlatform.Lent',
	v85Dev: devEvents.lent['v85'],
}

export const borrowed = {
	name: 'ApolloPlatform.Borrowed',
	v85Dev: devEvents.borrowed['v85'],
}

export const claimedLendingRewards = {
	name: 'ApolloPlatform.ClaimedLendingRewards',
	v85Dev: devEvents.claimedLendingRewards['v85'],
}

export const claimedBorrowingRewards = {
	name: 'ApolloPlatform.ClaimedBorrowingRewards',
	v85Dev: devEvents.claimedBorrowingRewards['v85'],
}

export const withdrawn = {
	name: 'ApolloPlatform.Withdrawn',
	v85Dev: devEvents.withdrawn['v85'],
}

export const repaid = {
	name: 'ApolloPlatform.Repaid',
	v85Dev: devEvents.repaid['v85'],
}

export const changedRewardsAmount = {
	name: 'ApolloPlatform.ChangedRewardsAmount',
	v85Dev: devEvents.changedRewardsAmount['v85'],
}

export const changedRewardsAmountPerBlock = {
	name: 'ApolloPlatform.ChangedRewardsAmountPerBlock',
	v85Dev: devEvents.changedRewardsAmountPerBlock['v85'],
}

export const liquidated = {
	name: 'ApolloPlatform.Liquidated',
	v85Dev: devEvents.liquidated['v85'],
}

export const poolRemoved = {
	name: 'ApolloPlatform.PoolRemoved',
	v85Dev: devEvents.poolRemoved['v85'],
}

export const poolInfoEdited = {
	name: 'ApolloPlatform.PoolInfoEdited',
	v85Dev: devEvents.poolInfoEdited['v85'],
}
