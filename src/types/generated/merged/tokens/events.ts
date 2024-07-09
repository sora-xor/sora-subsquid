import * as productionEvents from '../../production/tokens/events'
import * as stageEvents from '../../stage/tokens/events'
import * as testEvents from '../../test/tokens/events'
import * as devEvents from '../../dev/tokens/events'


export const transferred = {
	name: 'Tokens.Transferred',
	v1: productionEvents.transferred['v1'],
	v1Stage: stageEvents.transferred['v1'],
	v1Test: testEvents.transferred['v1'],
}

export const dustLost = {
	name: 'Tokens.DustLost',
	v1: productionEvents.dustLost['v1'],
	v42: productionEvents.dustLost['v42'],
	v1Stage: stageEvents.dustLost['v1'],
	v42Stage: stageEvents.dustLost['v42'],
	v1Test: testEvents.dustLost['v1'],
	v42Test: testEvents.dustLost['v42'],
	v85Dev: devEvents.dustLost['v85'],
}

export const endowed = {
	name: 'Tokens.Endowed',
	v42: productionEvents.endowed['v42'],
	v42Stage: stageEvents.endowed['v42'],
	v42Test: testEvents.endowed['v42'],
	v85Dev: devEvents.endowed['v85'],
}

export const transfer = {
	name: 'Tokens.Transfer',
	v42: productionEvents.transfer['v42'],
	v42Stage: stageEvents.transfer['v42'],
	v42Test: testEvents.transfer['v42'],
	v85Dev: devEvents.transfer['v85'],
}

export const reserved = {
	name: 'Tokens.Reserved',
	v42: productionEvents.reserved['v42'],
	v42Stage: stageEvents.reserved['v42'],
	v42Test: testEvents.reserved['v42'],
	v85Dev: devEvents.reserved['v85'],
}

export const unreserved = {
	name: 'Tokens.Unreserved',
	v42: productionEvents.unreserved['v42'],
	v42Stage: stageEvents.unreserved['v42'],
	v42Test: testEvents.unreserved['v42'],
	v85Dev: devEvents.unreserved['v85'],
}

export const reserveRepatriated = {
	name: 'Tokens.ReserveRepatriated',
	v42: productionEvents.reserveRepatriated['v42'],
	v42Stage: stageEvents.reserveRepatriated['v42'],
	v42Test: testEvents.reserveRepatriated['v42'],
	v85Dev: devEvents.reserveRepatriated['v85'],
}

export const balanceSet = {
	name: 'Tokens.BalanceSet',
	v42: productionEvents.balanceSet['v42'],
	v42Stage: stageEvents.balanceSet['v42'],
	v42Test: testEvents.balanceSet['v42'],
	v85Dev: devEvents.balanceSet['v85'],
}

export const totalIssuanceSet = {
	name: 'Tokens.TotalIssuanceSet',
	v42: productionEvents.totalIssuanceSet['v42'],
	v42Stage: stageEvents.totalIssuanceSet['v42'],
	v42Test: testEvents.totalIssuanceSet['v42'],
	v85Dev: devEvents.totalIssuanceSet['v85'],
}

export const withdrawn = {
	name: 'Tokens.Withdrawn',
	v42: productionEvents.withdrawn['v42'],
	v42Stage: stageEvents.withdrawn['v42'],
	v42Test: testEvents.withdrawn['v42'],
	v85Dev: devEvents.withdrawn['v85'],
}

export const slashed = {
	name: 'Tokens.Slashed',
	v42: productionEvents.slashed['v42'],
	v42Stage: stageEvents.slashed['v42'],
	v42Test: testEvents.slashed['v42'],
	v85Dev: devEvents.slashed['v85'],
}

export const deposited = {
	name: 'Tokens.Deposited',
	v42: productionEvents.deposited['v42'],
	v42Stage: stageEvents.deposited['v42'],
	v42Test: testEvents.deposited['v42'],
	v85Dev: devEvents.deposited['v85'],
}

export const lockSet = {
	name: 'Tokens.LockSet',
	v42: productionEvents.lockSet['v42'],
	v42Stage: stageEvents.lockSet['v42'],
	v42Test: testEvents.lockSet['v42'],
	v85Dev: devEvents.lockSet['v85'],
}

export const lockRemoved = {
	name: 'Tokens.LockRemoved',
	v42: productionEvents.lockRemoved['v42'],
	v42Stage: stageEvents.lockRemoved['v42'],
	v42Test: testEvents.lockRemoved['v42'],
	v85Dev: devEvents.lockRemoved['v85'],
}

export const locked = {
	name: 'Tokens.Locked',
	v53: productionEvents.locked['v53'],
	v53Stage: stageEvents.locked['v53'],
	v53Test: testEvents.locked['v53'],
	v85Dev: devEvents.locked['v85'],
}

export const unlocked = {
	name: 'Tokens.Unlocked',
	v53: productionEvents.unlocked['v53'],
	v53Stage: stageEvents.unlocked['v53'],
	v53Test: testEvents.unlocked['v53'],
	v85Dev: devEvents.unlocked['v85'],
}
