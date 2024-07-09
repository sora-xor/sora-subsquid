import * as devCalls from '../../dev/apollo-platform/calls'


export const addPool = {
	name: 'ApolloPlatform.add_pool',
	v85Dev: devCalls.addPool['v85'],
}

export const lend = {
	name: 'ApolloPlatform.lend',
	v85Dev: devCalls.lend['v85'],
}

export const borrow = {
	name: 'ApolloPlatform.borrow',
	v85Dev: devCalls.borrow['v85'],
}

export const getRewards = {
	name: 'ApolloPlatform.get_rewards',
	v85Dev: devCalls.getRewards['v85'],
}

export const withdraw = {
	name: 'ApolloPlatform.withdraw',
	v85Dev: devCalls.withdraw['v85'],
}

export const repay = {
	name: 'ApolloPlatform.repay',
	v85Dev: devCalls.repay['v85'],
}

export const changeRewardsAmount = {
	name: 'ApolloPlatform.change_rewards_amount',
	v85Dev: devCalls.changeRewardsAmount['v85'],
}

export const changeRewardsPerBlock = {
	name: 'ApolloPlatform.change_rewards_per_block',
	v85Dev: devCalls.changeRewardsPerBlock['v85'],
}

export const liquidate = {
	name: 'ApolloPlatform.liquidate',
	v85Dev: devCalls.liquidate['v85'],
}

export const removePool = {
	name: 'ApolloPlatform.remove_pool',
	v85Dev: devCalls.removePool['v85'],
}

export const editPoolInfo = {
	name: 'ApolloPlatform.edit_pool_info',
	v85Dev: devCalls.editPoolInfo['v85'],
}
