import * as productionStorage from '../../production/kensetsu/storage'
import * as stageStorage from '../../stage/kensetsu/storage'
import * as testStorage from '../../test/kensetsu/storage'
import * as devStorage from '../../dev/kensetsu/storage'


export const liquidatedThisBlock = {
	name: 'Kensetsu.LiquidatedThisBlock',
	v84: productionStorage.liquidatedThisBlock['v84'],
	v84Stage: stageStorage.liquidatedThisBlock['v84'],
	v84Test: testStorage.liquidatedThisBlock['v84'],
	v85Dev: devStorage.liquidatedThisBlock['v85'],
}

export const badDebt = {
	name: 'Kensetsu.BadDebt',
	v84: productionStorage.badDebt['v84'],
	v84Stage: stageStorage.badDebt['v84'],
	v84Test: testStorage.badDebt['v84'],
	v85Dev: devStorage.badDebt['v85'],
}

export const collateralInfos = {
	name: 'Kensetsu.CollateralInfos',
	v84: productionStorage.collateralInfos['v84'],
	v84Stage: stageStorage.collateralInfos['v84'],
	v84Test: testStorage.collateralInfos['v84'],
	v85Dev: devStorage.collateralInfos['v85'],
}

export const borrowTax = {
	name: 'Kensetsu.BorrowTax',
	v84: productionStorage.borrowTax['v84'],
	v84Stage: stageStorage.borrowTax['v84'],
	v84Test: testStorage.borrowTax['v84'],
	v85Dev: devStorage.borrowTax['v85'],
}

export const liquidationPenalty = {
	name: 'Kensetsu.LiquidationPenalty',
	v84: productionStorage.liquidationPenalty['v84'],
	v84Stage: stageStorage.liquidationPenalty['v84'],
	v84Test: testStorage.liquidationPenalty['v84'],
	v85Dev: devStorage.liquidationPenalty['v85'],
}

export const nextCdpId = {
	name: 'Kensetsu.NextCdpId',
	v84: productionStorage.nextCdpId['v84'],
	v84Stage: stageStorage.nextCdpId['v84'],
	v84Test: testStorage.nextCdpId['v84'],
	v85Dev: devStorage.nextCdpId['v85'],
}

export const cdpDepository = {
	name: 'Kensetsu.CdpDepository',
	v84: productionStorage.cdpDepository['v84'],
	v84Stage: stageStorage.cdpDepository['v84'],
	v84Test: testStorage.cdpDepository['v84'],
	v85Dev: devStorage.cdpDepository['v85'],
}

export const cdpOwnerIndex = {
	name: 'Kensetsu.CdpOwnerIndex',
	v84: productionStorage.cdpOwnerIndex['v84'],
	v84Stage: stageStorage.cdpOwnerIndex['v84'],
	v84Test: testStorage.cdpOwnerIndex['v84'],
	v85Dev: devStorage.cdpOwnerIndex['v85'],
}
