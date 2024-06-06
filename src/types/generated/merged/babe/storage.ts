import * as productionStorage from '../../production/babe/storage'
import * as stageStorage from '../../stage/babe/storage'
import * as testStorage from '../../test/babe/storage'
import * as devStorage from '../../dev/babe/storage'


export const epochIndex = {
	name: 'Babe.EpochIndex',
	v1: productionStorage.epochIndex['v1'],
	v1Stage: stageStorage.epochIndex['v1'],
	v1Test: testStorage.epochIndex['v1'],
	v85Dev: devStorage.epochIndex['v85'],
}

export const authorities = {
	name: 'Babe.Authorities',
	v1: productionStorage.authorities['v1'],
	v1Stage: stageStorage.authorities['v1'],
	v1Test: testStorage.authorities['v1'],
	v85Dev: devStorage.authorities['v85'],
}

export const genesisSlot = {
	name: 'Babe.GenesisSlot',
	v1: productionStorage.genesisSlot['v1'],
	v1Stage: stageStorage.genesisSlot['v1'],
	v1Test: testStorage.genesisSlot['v1'],
	v85Dev: devStorage.genesisSlot['v85'],
}

export const currentSlot = {
	name: 'Babe.CurrentSlot',
	v1: productionStorage.currentSlot['v1'],
	v1Stage: stageStorage.currentSlot['v1'],
	v1Test: testStorage.currentSlot['v1'],
	v85Dev: devStorage.currentSlot['v85'],
}

export const randomness = {
	name: 'Babe.Randomness',
	v1: productionStorage.randomness['v1'],
	v1Stage: stageStorage.randomness['v1'],
	v1Test: testStorage.randomness['v1'],
	v85Dev: devStorage.randomness['v85'],
}

export const nextEpochConfig = {
	name: 'Babe.NextEpochConfig',
	v1: productionStorage.nextEpochConfig['v1'],
	v42: productionStorage.nextEpochConfig['v42'],
	v1Stage: stageStorage.nextEpochConfig['v1'],
	v42Stage: stageStorage.nextEpochConfig['v42'],
	v1Test: testStorage.nextEpochConfig['v1'],
	v42Test: testStorage.nextEpochConfig['v42'],
	v85Dev: devStorage.nextEpochConfig['v85'],
}

export const nextRandomness = {
	name: 'Babe.NextRandomness',
	v1: productionStorage.nextRandomness['v1'],
	v1Stage: stageStorage.nextRandomness['v1'],
	v1Test: testStorage.nextRandomness['v1'],
	v85Dev: devStorage.nextRandomness['v85'],
}

export const nextAuthorities = {
	name: 'Babe.NextAuthorities',
	v1: productionStorage.nextAuthorities['v1'],
	v1Stage: stageStorage.nextAuthorities['v1'],
	v1Test: testStorage.nextAuthorities['v1'],
	v85Dev: devStorage.nextAuthorities['v85'],
}

export const segmentIndex = {
	name: 'Babe.SegmentIndex',
	v1: productionStorage.segmentIndex['v1'],
	v1Stage: stageStorage.segmentIndex['v1'],
	v1Test: testStorage.segmentIndex['v1'],
	v85Dev: devStorage.segmentIndex['v85'],
}

export const underConstruction = {
	name: 'Babe.UnderConstruction',
	v1: productionStorage.underConstruction['v1'],
	v1Stage: stageStorage.underConstruction['v1'],
	v1Test: testStorage.underConstruction['v1'],
	v85Dev: devStorage.underConstruction['v85'],
}

export const initialized = {
	name: 'Babe.Initialized',
	v1: productionStorage.initialized['v1'],
	v42: productionStorage.initialized['v42'],
	v1Stage: stageStorage.initialized['v1'],
	v42Stage: stageStorage.initialized['v42'],
	v1Test: testStorage.initialized['v1'],
	v42Test: testStorage.initialized['v42'],
	v85Dev: devStorage.initialized['v85'],
}

export const authorVrfRandomness = {
	name: 'Babe.AuthorVrfRandomness',
	v1: productionStorage.authorVrfRandomness['v1'],
	v1Stage: stageStorage.authorVrfRandomness['v1'],
	v1Test: testStorage.authorVrfRandomness['v1'],
	v85Dev: devStorage.authorVrfRandomness['v85'],
}

export const lateness = {
	name: 'Babe.Lateness',
	v1: productionStorage.lateness['v1'],
	v1Stage: stageStorage.lateness['v1'],
	v1Test: testStorage.lateness['v1'],
	v85Dev: devStorage.lateness['v85'],
}

export const pendingEpochConfigChange = {
	name: 'Babe.PendingEpochConfigChange',
	v42: productionStorage.pendingEpochConfigChange['v42'],
	v42Stage: stageStorage.pendingEpochConfigChange['v42'],
	v42Test: testStorage.pendingEpochConfigChange['v42'],
	v85Dev: devStorage.pendingEpochConfigChange['v85'],
}

export const epochStart = {
	name: 'Babe.EpochStart',
	v42: productionStorage.epochStart['v42'],
	v42Stage: stageStorage.epochStart['v42'],
	v42Test: testStorage.epochStart['v42'],
	v85Dev: devStorage.epochStart['v85'],
}

export const epochConfig = {
	name: 'Babe.EpochConfig',
	v42: productionStorage.epochConfig['v42'],
	v42Stage: stageStorage.epochConfig['v42'],
	v42Test: testStorage.epochConfig['v42'],
	v85Dev: devStorage.epochConfig['v85'],
}
