import * as productionStorage from '../../production/elections-phragmen/storage'
import * as stageStorage from '../../stage/elections-phragmen/storage'
import * as testStorage from '../../test/elections-phragmen/storage'
import * as devStorage from '../../dev/elections-phragmen/storage'


export const members = {
	name: 'ElectionsPhragmen.Members',
	v1: productionStorage.members['v1'],
	v1Stage: stageStorage.members['v1'],
	v1Test: testStorage.members['v1'],
	v85Dev: devStorage.members['v85'],
}

export const runnersUp = {
	name: 'ElectionsPhragmen.RunnersUp',
	v1: productionStorage.runnersUp['v1'],
	v1Stage: stageStorage.runnersUp['v1'],
	v1Test: testStorage.runnersUp['v1'],
	v85Dev: devStorage.runnersUp['v85'],
}

export const candidates = {
	name: 'ElectionsPhragmen.Candidates',
	v1: productionStorage.candidates['v1'],
	v1Stage: stageStorage.candidates['v1'],
	v1Test: testStorage.candidates['v1'],
	v85Dev: devStorage.candidates['v85'],
}

export const electionRounds = {
	name: 'ElectionsPhragmen.ElectionRounds',
	v1: productionStorage.electionRounds['v1'],
	v1Stage: stageStorage.electionRounds['v1'],
	v1Test: testStorage.electionRounds['v1'],
	v85Dev: devStorage.electionRounds['v85'],
}

export const voting = {
	name: 'ElectionsPhragmen.Voting',
	v1: productionStorage.voting['v1'],
	v1Stage: stageStorage.voting['v1'],
	v1Test: testStorage.voting['v1'],
	v85Dev: devStorage.voting['v85'],
}
