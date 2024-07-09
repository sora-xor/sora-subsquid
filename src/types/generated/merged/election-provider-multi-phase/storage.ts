import * as productionStorage from '../../production/election-provider-multi-phase/storage'
import * as stageStorage from '../../stage/election-provider-multi-phase/storage'
import * as testStorage from '../../test/election-provider-multi-phase/storage'
import * as devStorage from '../../dev/election-provider-multi-phase/storage'


export const round = {
	name: 'ElectionProviderMultiPhase.Round',
	v42: productionStorage.round['v42'],
	v42Stage: stageStorage.round['v42'],
	v42Test: testStorage.round['v42'],
	v85Dev: devStorage.round['v85'],
}

export const currentPhase = {
	name: 'ElectionProviderMultiPhase.CurrentPhase',
	v42: productionStorage.currentPhase['v42'],
	v42Stage: stageStorage.currentPhase['v42'],
	v42Test: testStorage.currentPhase['v42'],
	v85Dev: devStorage.currentPhase['v85'],
}

export const queuedSolution = {
	name: 'ElectionProviderMultiPhase.QueuedSolution',
	v42: productionStorage.queuedSolution['v42'],
	v42Stage: stageStorage.queuedSolution['v42'],
	v42Test: testStorage.queuedSolution['v42'],
	v85Dev: devStorage.queuedSolution['v85'],
}

export const snapshot = {
	name: 'ElectionProviderMultiPhase.Snapshot',
	v42: productionStorage.snapshot['v42'],
	v42Stage: stageStorage.snapshot['v42'],
	v42Test: testStorage.snapshot['v42'],
	v85Dev: devStorage.snapshot['v85'],
}

export const desiredTargets = {
	name: 'ElectionProviderMultiPhase.DesiredTargets',
	v42: productionStorage.desiredTargets['v42'],
	v42Stage: stageStorage.desiredTargets['v42'],
	v42Test: testStorage.desiredTargets['v42'],
	v85Dev: devStorage.desiredTargets['v85'],
}

export const snapshotMetadata = {
	name: 'ElectionProviderMultiPhase.SnapshotMetadata',
	v42: productionStorage.snapshotMetadata['v42'],
	v42Stage: stageStorage.snapshotMetadata['v42'],
	v42Test: testStorage.snapshotMetadata['v42'],
	v85Dev: devStorage.snapshotMetadata['v85'],
}

export const signedSubmissionNextIndex = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionNextIndex',
	v42: productionStorage.signedSubmissionNextIndex['v42'],
	v42Stage: stageStorage.signedSubmissionNextIndex['v42'],
	v42Test: testStorage.signedSubmissionNextIndex['v42'],
	v85Dev: devStorage.signedSubmissionNextIndex['v85'],
}

export const signedSubmissionIndices = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionIndices',
	v42: productionStorage.signedSubmissionIndices['v42'],
	v53: productionStorage.signedSubmissionIndices['v53'],
	v42Stage: stageStorage.signedSubmissionIndices['v42'],
	v53Stage: stageStorage.signedSubmissionIndices['v53'],
	v42Test: testStorage.signedSubmissionIndices['v42'],
	v53Test: testStorage.signedSubmissionIndices['v53'],
	v85Dev: devStorage.signedSubmissionIndices['v85'],
}

export const signedSubmissionsMap = {
	name: 'ElectionProviderMultiPhase.SignedSubmissionsMap',
	v42: productionStorage.signedSubmissionsMap['v42'],
	v42Stage: stageStorage.signedSubmissionsMap['v42'],
	v42Test: testStorage.signedSubmissionsMap['v42'],
	v85Dev: devStorage.signedSubmissionsMap['v85'],
}

export const minimumUntrustedScore = {
	name: 'ElectionProviderMultiPhase.MinimumUntrustedScore',
	v42: productionStorage.minimumUntrustedScore['v42'],
	v42Stage: stageStorage.minimumUntrustedScore['v42'],
	v42Test: testStorage.minimumUntrustedScore['v42'],
	v85Dev: devStorage.minimumUntrustedScore['v85'],
}
