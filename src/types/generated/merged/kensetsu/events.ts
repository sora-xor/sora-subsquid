import * as productionEvents from '../../production/kensetsu/events'
import * as stageEvents from '../../stage/kensetsu/events'
import * as testEvents from '../../test/kensetsu/events'
import * as devEvents from '../../dev/kensetsu/events'


export const cdpCreated = {
	name: 'Kensetsu.CDPCreated',
	v84: productionEvents.cdpCreated['v84'],
	v84Stage: stageEvents.cdpCreated['v84'],
	v84Test: testEvents.cdpCreated['v84'],
	v85Dev: devEvents.cdpCreated['v85'],
}

export const cdpClosed = {
	name: 'Kensetsu.CDPClosed',
	v84: productionEvents.cdpClosed['v84'],
	v84Stage: stageEvents.cdpClosed['v84'],
	v84Test: testEvents.cdpClosed['v84'],
	v85Dev: devEvents.cdpClosed['v85'],
}

export const collateralDeposit = {
	name: 'Kensetsu.CollateralDeposit',
	v84: productionEvents.collateralDeposit['v84'],
	v84Stage: stageEvents.collateralDeposit['v84'],
	v84Test: testEvents.collateralDeposit['v84'],
	v85Dev: devEvents.collateralDeposit['v85'],
}

export const debtIncreased = {
	name: 'Kensetsu.DebtIncreased',
	v84: productionEvents.debtIncreased['v84'],
	v84Stage: stageEvents.debtIncreased['v84'],
	v84Test: testEvents.debtIncreased['v84'],
	v85Dev: devEvents.debtIncreased['v85'],
}

export const debtPayment = {
	name: 'Kensetsu.DebtPayment',
	v84: productionEvents.debtPayment['v84'],
	v84Stage: stageEvents.debtPayment['v84'],
	v84Test: testEvents.debtPayment['v84'],
	v85Dev: devEvents.debtPayment['v85'],
}

export const liquidated = {
	name: 'Kensetsu.Liquidated',
	v84: productionEvents.liquidated['v84'],
	v84Stage: stageEvents.liquidated['v84'],
	v84Test: testEvents.liquidated['v84'],
	v85Dev: devEvents.liquidated['v85'],
}

export const collateralRiskParametersUpdated = {
	name: 'Kensetsu.CollateralRiskParametersUpdated',
	v84: productionEvents.collateralRiskParametersUpdated['v84'],
	v84Stage: stageEvents.collateralRiskParametersUpdated['v84'],
	v84Test: testEvents.collateralRiskParametersUpdated['v84'],
	v85Dev: devEvents.collateralRiskParametersUpdated['v85'],
}

export const borrowTaxUpdated = {
	name: 'Kensetsu.BorrowTaxUpdated',
	v84: productionEvents.borrowTaxUpdated['v84'],
	v84Stage: stageEvents.borrowTaxUpdated['v84'],
	v84Test: testEvents.borrowTaxUpdated['v84'],
	v85Dev: devEvents.borrowTaxUpdated['v85'],
}

export const liquidationPenaltyUpdated = {
	name: 'Kensetsu.LiquidationPenaltyUpdated',
	v84: productionEvents.liquidationPenaltyUpdated['v84'],
	v84Stage: stageEvents.liquidationPenaltyUpdated['v84'],
	v84Test: testEvents.liquidationPenaltyUpdated['v84'],
	v85Dev: devEvents.liquidationPenaltyUpdated['v85'],
}

export const profitWithdrawn = {
	name: 'Kensetsu.ProfitWithdrawn',
	v84: productionEvents.profitWithdrawn['v84'],
	v84Stage: stageEvents.profitWithdrawn['v84'],
	v84Test: testEvents.profitWithdrawn['v84'],
	v85Dev: devEvents.profitWithdrawn['v85'],
}

export const donation = {
	name: 'Kensetsu.Donation',
	v84: productionEvents.donation['v84'],
	v84Stage: stageEvents.donation['v84'],
	v84Test: testEvents.donation['v84'],
	v85Dev: devEvents.donation['v85'],
}
