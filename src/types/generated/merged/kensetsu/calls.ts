import * as productionCalls from '../../production/kensetsu/calls'
import * as stageCalls from '../../stage/kensetsu/calls'
import * as testCalls from '../../test/kensetsu/calls'
import * as devCalls from '../../dev/kensetsu/calls'


export const createCdp = {
	name: 'Kensetsu.create_cdp',
	v84: productionCalls.createCdp['v84'],
	v84Stage: stageCalls.createCdp['v84'],
	v84Test: testCalls.createCdp['v84'],
	v85Dev: devCalls.createCdp['v85'],
}

export const closeCdp = {
	name: 'Kensetsu.close_cdp',
	v84: productionCalls.closeCdp['v84'],
	v84Stage: stageCalls.closeCdp['v84'],
	v84Test: testCalls.closeCdp['v84'],
	v85Dev: devCalls.closeCdp['v85'],
}

export const depositCollateral = {
	name: 'Kensetsu.deposit_collateral',
	v84: productionCalls.depositCollateral['v84'],
	v84Stage: stageCalls.depositCollateral['v84'],
	v84Test: testCalls.depositCollateral['v84'],
	v85Dev: devCalls.depositCollateral['v85'],
}

export const borrow = {
	name: 'Kensetsu.borrow',
	v84: productionCalls.borrow['v84'],
	v84Stage: stageCalls.borrow['v84'],
	v84Test: testCalls.borrow['v84'],
	v85Dev: devCalls.borrow['v85'],
}

export const repayDebt = {
	name: 'Kensetsu.repay_debt',
	v84: productionCalls.repayDebt['v84'],
	v84Stage: stageCalls.repayDebt['v84'],
	v84Test: testCalls.repayDebt['v84'],
	v85Dev: devCalls.repayDebt['v85'],
}

export const liquidate = {
	name: 'Kensetsu.liquidate',
	v84: productionCalls.liquidate['v84'],
	v84Stage: stageCalls.liquidate['v84'],
	v84Test: testCalls.liquidate['v84'],
	v85Dev: devCalls.liquidate['v85'],
}

export const accrue = {
	name: 'Kensetsu.accrue',
	v84: productionCalls.accrue['v84'],
	v84Stage: stageCalls.accrue['v84'],
	v84Test: testCalls.accrue['v84'],
	v85Dev: devCalls.accrue['v85'],
}

export const updateCollateralRiskParameters = {
	name: 'Kensetsu.update_collateral_risk_parameters',
	v84: productionCalls.updateCollateralRiskParameters['v84'],
	v84Stage: stageCalls.updateCollateralRiskParameters['v84'],
	v84Test: testCalls.updateCollateralRiskParameters['v84'],
	v85Dev: devCalls.updateCollateralRiskParameters['v85'],
}

export const updateBorrowTax = {
	name: 'Kensetsu.update_borrow_tax',
	v84: productionCalls.updateBorrowTax['v84'],
	v84Stage: stageCalls.updateBorrowTax['v84'],
	v84Test: testCalls.updateBorrowTax['v84'],
	v85Dev: devCalls.updateBorrowTax['v85'],
}

export const updateLiquidationPenalty = {
	name: 'Kensetsu.update_liquidation_penalty',
	v84: productionCalls.updateLiquidationPenalty['v84'],
	v84Stage: stageCalls.updateLiquidationPenalty['v84'],
	v84Test: testCalls.updateLiquidationPenalty['v84'],
	v85Dev: devCalls.updateLiquidationPenalty['v85'],
}

export const withdrawProfit = {
	name: 'Kensetsu.withdraw_profit',
	v84: productionCalls.withdrawProfit['v84'],
	v84Stage: stageCalls.withdrawProfit['v84'],
	v84Test: testCalls.withdrawProfit['v84'],
	v85Dev: devCalls.withdrawProfit['v85'],
}

export const donate = {
	name: 'Kensetsu.donate',
	v84: productionCalls.donate['v84'],
	v84Stage: stageCalls.donate['v84'],
	v84Test: testCalls.donate['v84'],
	v85Dev: devCalls.donate['v85'],
}
