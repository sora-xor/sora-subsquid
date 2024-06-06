import * as productionEvents from '../../production/elections-phragmen/events'
import * as stageEvents from '../../stage/elections-phragmen/events'
import * as testEvents from '../../test/elections-phragmen/events'
import * as devEvents from '../../dev/elections-phragmen/events'


export const newTerm = {
	name: 'ElectionsPhragmen.NewTerm',
	v1: productionEvents.newTerm['v1'],
	v42: productionEvents.newTerm['v42'],
	v1Stage: stageEvents.newTerm['v1'],
	v42Stage: stageEvents.newTerm['v42'],
	v1Test: testEvents.newTerm['v1'],
	v42Test: testEvents.newTerm['v42'],
	v85Dev: devEvents.newTerm['v85'],
}

export const emptyTerm = {
	name: 'ElectionsPhragmen.EmptyTerm',
	v1: productionEvents.emptyTerm['v1'],
	v1Stage: stageEvents.emptyTerm['v1'],
	v1Test: testEvents.emptyTerm['v1'],
	v85Dev: devEvents.emptyTerm['v85'],
}

export const electionError = {
	name: 'ElectionsPhragmen.ElectionError',
	v1: productionEvents.electionError['v1'],
	v1Stage: stageEvents.electionError['v1'],
	v1Test: testEvents.electionError['v1'],
	v85Dev: devEvents.electionError['v85'],
}

export const memberKicked = {
	name: 'ElectionsPhragmen.MemberKicked',
	v1: productionEvents.memberKicked['v1'],
	v42: productionEvents.memberKicked['v42'],
	v1Stage: stageEvents.memberKicked['v1'],
	v42Stage: stageEvents.memberKicked['v42'],
	v1Test: testEvents.memberKicked['v1'],
	v42Test: testEvents.memberKicked['v42'],
	v85Dev: devEvents.memberKicked['v85'],
}

export const renounced = {
	name: 'ElectionsPhragmen.Renounced',
	v1: productionEvents.renounced['v1'],
	v42: productionEvents.renounced['v42'],
	v1Stage: stageEvents.renounced['v1'],
	v42Stage: stageEvents.renounced['v42'],
	v1Test: testEvents.renounced['v1'],
	v42Test: testEvents.renounced['v42'],
	v85Dev: devEvents.renounced['v85'],
}

export const candidateSlashed = {
	name: 'ElectionsPhragmen.CandidateSlashed',
	v1: productionEvents.candidateSlashed['v1'],
	v42: productionEvents.candidateSlashed['v42'],
	v1Stage: stageEvents.candidateSlashed['v1'],
	v42Stage: stageEvents.candidateSlashed['v42'],
	v1Test: testEvents.candidateSlashed['v1'],
	v42Test: testEvents.candidateSlashed['v42'],
	v85Dev: devEvents.candidateSlashed['v85'],
}

export const seatHolderSlashed = {
	name: 'ElectionsPhragmen.SeatHolderSlashed',
	v1: productionEvents.seatHolderSlashed['v1'],
	v42: productionEvents.seatHolderSlashed['v42'],
	v1Stage: stageEvents.seatHolderSlashed['v1'],
	v42Stage: stageEvents.seatHolderSlashed['v42'],
	v1Test: testEvents.seatHolderSlashed['v1'],
	v42Test: testEvents.seatHolderSlashed['v42'],
	v85Dev: devEvents.seatHolderSlashed['v85'],
}
