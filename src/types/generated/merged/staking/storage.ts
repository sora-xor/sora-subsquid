import * as productionStorage from '../../production/staking/storage'
import * as stageStorage from '../../stage/staking/storage'
import * as testStorage from '../../test/staking/storage'
import * as devStorage from '../../dev/staking/storage'


export const historyDepth = {
	name: 'Staking.HistoryDepth',
	v1: productionStorage.historyDepth['v1'],
	v1Stage: stageStorage.historyDepth['v1'],
	v1Test: testStorage.historyDepth['v1'],
}

export const timeSinceGenesis = {
	name: 'Staking.TimeSinceGenesis',
	v1: productionStorage.timeSinceGenesis['v1'],
	v42: productionStorage.timeSinceGenesis['v42'],
	v1Stage: stageStorage.timeSinceGenesis['v1'],
	v42Stage: stageStorage.timeSinceGenesis['v42'],
	v1Test: testStorage.timeSinceGenesis['v1'],
	v42Test: testStorage.timeSinceGenesis['v42'],
	v85Dev: devStorage.timeSinceGenesis['v85'],
}

export const validatorCount = {
	name: 'Staking.ValidatorCount',
	v1: productionStorage.validatorCount['v1'],
	v1Stage: stageStorage.validatorCount['v1'],
	v1Test: testStorage.validatorCount['v1'],
	v85Dev: devStorage.validatorCount['v85'],
}

export const minimumValidatorCount = {
	name: 'Staking.MinimumValidatorCount',
	v1: productionStorage.minimumValidatorCount['v1'],
	v1Stage: stageStorage.minimumValidatorCount['v1'],
	v1Test: testStorage.minimumValidatorCount['v1'],
	v85Dev: devStorage.minimumValidatorCount['v85'],
}

export const invulnerables = {
	name: 'Staking.Invulnerables',
	v1: productionStorage.invulnerables['v1'],
	v1Stage: stageStorage.invulnerables['v1'],
	v1Test: testStorage.invulnerables['v1'],
	v85Dev: devStorage.invulnerables['v85'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v1: productionStorage.bonded['v1'],
	v1Stage: stageStorage.bonded['v1'],
	v1Test: testStorage.bonded['v1'],
	v85Dev: devStorage.bonded['v85'],
}

export const ledger = {
	name: 'Staking.Ledger',
	v1: productionStorage.ledger['v1'],
	v1Stage: stageStorage.ledger['v1'],
	v1Test: testStorage.ledger['v1'],
	v85Dev: devStorage.ledger['v85'],
}

export const payee = {
	name: 'Staking.Payee',
	v1: productionStorage.payee['v1'],
	v1Stage: stageStorage.payee['v1'],
	v1Test: testStorage.payee['v1'],
	v85Dev: devStorage.payee['v85'],
}

export const validators = {
	name: 'Staking.Validators',
	v1: productionStorage.validators['v1'],
	v1Stage: stageStorage.validators['v1'],
	v1Test: testStorage.validators['v1'],
	v85Dev: devStorage.validators['v85'],
}

export const nominators = {
	name: 'Staking.Nominators',
	v1: productionStorage.nominators['v1'],
	v1Stage: stageStorage.nominators['v1'],
	v1Test: testStorage.nominators['v1'],
	v85Dev: devStorage.nominators['v85'],
}

export const currentEra = {
	name: 'Staking.CurrentEra',
	v1: productionStorage.currentEra['v1'],
	v1Stage: stageStorage.currentEra['v1'],
	v1Test: testStorage.currentEra['v1'],
	v85Dev: devStorage.currentEra['v85'],
}

export const activeEra = {
	name: 'Staking.ActiveEra',
	v1: productionStorage.activeEra['v1'],
	v1Stage: stageStorage.activeEra['v1'],
	v1Test: testStorage.activeEra['v1'],
	v85Dev: devStorage.activeEra['v85'],
}

export const erasStartSessionIndex = {
	name: 'Staking.ErasStartSessionIndex',
	v1: productionStorage.erasStartSessionIndex['v1'],
	v1Stage: stageStorage.erasStartSessionIndex['v1'],
	v1Test: testStorage.erasStartSessionIndex['v1'],
	v85Dev: devStorage.erasStartSessionIndex['v85'],
}

export const erasStakers = {
	name: 'Staking.ErasStakers',
	v1: productionStorage.erasStakers['v1'],
	v1Stage: stageStorage.erasStakers['v1'],
	v1Test: testStorage.erasStakers['v1'],
	v85Dev: devStorage.erasStakers['v85'],
}

export const erasStakersClipped = {
	name: 'Staking.ErasStakersClipped',
	v1: productionStorage.erasStakersClipped['v1'],
	v1Stage: stageStorage.erasStakersClipped['v1'],
	v1Test: testStorage.erasStakersClipped['v1'],
	v85Dev: devStorage.erasStakersClipped['v85'],
}

export const erasValidatorPrefs = {
	name: 'Staking.ErasValidatorPrefs',
	v1: productionStorage.erasValidatorPrefs['v1'],
	v1Stage: stageStorage.erasValidatorPrefs['v1'],
	v1Test: testStorage.erasValidatorPrefs['v1'],
	v85Dev: devStorage.erasValidatorPrefs['v85'],
}

export const erasValidatorReward = {
	name: 'Staking.ErasValidatorReward',
	v1: productionStorage.erasValidatorReward['v1'],
	v1Stage: stageStorage.erasValidatorReward['v1'],
	v1Test: testStorage.erasValidatorReward['v1'],
	v85Dev: devStorage.erasValidatorReward['v85'],
}

export const erasRewardPoints = {
	name: 'Staking.ErasRewardPoints',
	v1: productionStorage.erasRewardPoints['v1'],
	v1Stage: stageStorage.erasRewardPoints['v1'],
	v1Test: testStorage.erasRewardPoints['v1'],
	v85Dev: devStorage.erasRewardPoints['v85'],
}

export const eraValBurned = {
	name: 'Staking.EraValBurned',
	v1: productionStorage.eraValBurned['v1'],
	v1Stage: stageStorage.eraValBurned['v1'],
	v1Test: testStorage.eraValBurned['v1'],
	v85Dev: devStorage.eraValBurned['v85'],
}

export const erasTotalStake = {
	name: 'Staking.ErasTotalStake',
	v1: productionStorage.erasTotalStake['v1'],
	v1Stage: stageStorage.erasTotalStake['v1'],
	v1Test: testStorage.erasTotalStake['v1'],
	v85Dev: devStorage.erasTotalStake['v85'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v1: productionStorage.forceEra['v1'],
	v1Stage: stageStorage.forceEra['v1'],
	v1Test: testStorage.forceEra['v1'],
	v85Dev: devStorage.forceEra['v85'],
}

export const slashRewardFraction = {
	name: 'Staking.SlashRewardFraction',
	v1: productionStorage.slashRewardFraction['v1'],
	v1Stage: stageStorage.slashRewardFraction['v1'],
	v1Test: testStorage.slashRewardFraction['v1'],
	v85Dev: devStorage.slashRewardFraction['v85'],
}

export const canceledSlashPayout = {
	name: 'Staking.CanceledSlashPayout',
	v1: productionStorage.canceledSlashPayout['v1'],
	v1Stage: stageStorage.canceledSlashPayout['v1'],
	v1Test: testStorage.canceledSlashPayout['v1'],
	v85Dev: devStorage.canceledSlashPayout['v85'],
}

export const unappliedSlashes = {
	name: 'Staking.UnappliedSlashes',
	v1: productionStorage.unappliedSlashes['v1'],
	v1Stage: stageStorage.unappliedSlashes['v1'],
	v1Test: testStorage.unappliedSlashes['v1'],
	v85Dev: devStorage.unappliedSlashes['v85'],
}

export const bondedEras = {
	name: 'Staking.BondedEras',
	v1: productionStorage.bondedEras['v1'],
	v1Stage: stageStorage.bondedEras['v1'],
	v1Test: testStorage.bondedEras['v1'],
	v85Dev: devStorage.bondedEras['v85'],
}

export const validatorSlashInEra = {
	name: 'Staking.ValidatorSlashInEra',
	v1: productionStorage.validatorSlashInEra['v1'],
	v1Stage: stageStorage.validatorSlashInEra['v1'],
	v1Test: testStorage.validatorSlashInEra['v1'],
	v85Dev: devStorage.validatorSlashInEra['v85'],
}

export const nominatorSlashInEra = {
	name: 'Staking.NominatorSlashInEra',
	v1: productionStorage.nominatorSlashInEra['v1'],
	v1Stage: stageStorage.nominatorSlashInEra['v1'],
	v1Test: testStorage.nominatorSlashInEra['v1'],
	v85Dev: devStorage.nominatorSlashInEra['v85'],
}

export const slashingSpans = {
	name: 'Staking.SlashingSpans',
	v1: productionStorage.slashingSpans['v1'],
	v1Stage: stageStorage.slashingSpans['v1'],
	v1Test: testStorage.slashingSpans['v1'],
	v85Dev: devStorage.slashingSpans['v85'],
}

export const spanSlash = {
	name: 'Staking.SpanSlash',
	v1: productionStorage.spanSlash['v1'],
	v1Stage: stageStorage.spanSlash['v1'],
	v1Test: testStorage.spanSlash['v1'],
	v85Dev: devStorage.spanSlash['v85'],
}

export const earliestUnappliedSlash = {
	name: 'Staking.EarliestUnappliedSlash',
	v1: productionStorage.earliestUnappliedSlash['v1'],
	v1Stage: stageStorage.earliestUnappliedSlash['v1'],
	v1Test: testStorage.earliestUnappliedSlash['v1'],
}

export const snapshotValidators = {
	name: 'Staking.SnapshotValidators',
	v1: productionStorage.snapshotValidators['v1'],
	v1Stage: stageStorage.snapshotValidators['v1'],
	v1Test: testStorage.snapshotValidators['v1'],
}

export const snapshotNominators = {
	name: 'Staking.SnapshotNominators',
	v1: productionStorage.snapshotNominators['v1'],
	v1Stage: stageStorage.snapshotNominators['v1'],
	v1Test: testStorage.snapshotNominators['v1'],
}

export const queuedElected = {
	name: 'Staking.QueuedElected',
	v1: productionStorage.queuedElected['v1'],
	v1Stage: stageStorage.queuedElected['v1'],
	v1Test: testStorage.queuedElected['v1'],
}

export const queuedScore = {
	name: 'Staking.QueuedScore',
	v1: productionStorage.queuedScore['v1'],
	v1Stage: stageStorage.queuedScore['v1'],
	v1Test: testStorage.queuedScore['v1'],
}

export const eraElectionStatus = {
	name: 'Staking.EraElectionStatus',
	v1: productionStorage.eraElectionStatus['v1'],
	v1Stage: stageStorage.eraElectionStatus['v1'],
	v1Test: testStorage.eraElectionStatus['v1'],
}

export const isCurrentSessionFinal = {
	name: 'Staking.IsCurrentSessionFinal',
	v1: productionStorage.isCurrentSessionFinal['v1'],
	v1Stage: stageStorage.isCurrentSessionFinal['v1'],
	v1Test: testStorage.isCurrentSessionFinal['v1'],
}

export const storageVersion = {
	name: 'Staking.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v1Stage: stageStorage.storageVersion['v1'],
	v42Stage: stageStorage.storageVersion['v42'],
	v1Test: testStorage.storageVersion['v1'],
	v42Test: testStorage.storageVersion['v42'],
}

export const minNominatorBond = {
	name: 'Staking.MinNominatorBond',
	v42: productionStorage.minNominatorBond['v42'],
	v42Stage: stageStorage.minNominatorBond['v42'],
	v42Test: testStorage.minNominatorBond['v42'],
	v85Dev: devStorage.minNominatorBond['v85'],
}

export const minValidatorBond = {
	name: 'Staking.MinValidatorBond',
	v42: productionStorage.minValidatorBond['v42'],
	v42Stage: stageStorage.minValidatorBond['v42'],
	v42Test: testStorage.minValidatorBond['v42'],
	v85Dev: devStorage.minValidatorBond['v85'],
}

export const minCommission = {
	name: 'Staking.MinCommission',
	v42: productionStorage.minCommission['v42'],
	v42Stage: stageStorage.minCommission['v42'],
	v42Test: testStorage.minCommission['v42'],
	v85Dev: devStorage.minCommission['v85'],
}

export const counterForValidators = {
	name: 'Staking.CounterForValidators',
	v42: productionStorage.counterForValidators['v42'],
	v42Stage: stageStorage.counterForValidators['v42'],
	v42Test: testStorage.counterForValidators['v42'],
	v85Dev: devStorage.counterForValidators['v85'],
}

export const maxValidatorsCount = {
	name: 'Staking.MaxValidatorsCount',
	v42: productionStorage.maxValidatorsCount['v42'],
	v42Stage: stageStorage.maxValidatorsCount['v42'],
	v42Test: testStorage.maxValidatorsCount['v42'],
	v85Dev: devStorage.maxValidatorsCount['v85'],
}

export const counterForNominators = {
	name: 'Staking.CounterForNominators',
	v42: productionStorage.counterForNominators['v42'],
	v42Stage: stageStorage.counterForNominators['v42'],
	v42Test: testStorage.counterForNominators['v42'],
	v85Dev: devStorage.counterForNominators['v85'],
}

export const maxNominatorsCount = {
	name: 'Staking.MaxNominatorsCount',
	v42: productionStorage.maxNominatorsCount['v42'],
	v42Stage: stageStorage.maxNominatorsCount['v42'],
	v42Test: testStorage.maxNominatorsCount['v42'],
	v85Dev: devStorage.maxNominatorsCount['v85'],
}

export const currentPlannedSession = {
	name: 'Staking.CurrentPlannedSession',
	v42: productionStorage.currentPlannedSession['v42'],
	v42Stage: stageStorage.currentPlannedSession['v42'],
	v42Test: testStorage.currentPlannedSession['v42'],
	v85Dev: devStorage.currentPlannedSession['v85'],
}

export const offendingValidators = {
	name: 'Staking.OffendingValidators',
	v42: productionStorage.offendingValidators['v42'],
	v42Stage: stageStorage.offendingValidators['v42'],
	v42Test: testStorage.offendingValidators['v42'],
	v85Dev: devStorage.offendingValidators['v85'],
}

export const chillThreshold = {
	name: 'Staking.ChillThreshold',
	v42: productionStorage.chillThreshold['v42'],
	v42Stage: stageStorage.chillThreshold['v42'],
	v42Test: testStorage.chillThreshold['v42'],
	v85Dev: devStorage.chillThreshold['v85'],
}

export const minimumActiveStake = {
	name: 'Staking.MinimumActiveStake',
	v53: productionStorage.minimumActiveStake['v53'],
	v53Stage: stageStorage.minimumActiveStake['v53'],
	v53Test: testStorage.minimumActiveStake['v53'],
	v85Dev: devStorage.minimumActiveStake['v85'],
}
