import * as productionEvents from '../../production/council/events'
import * as stageEvents from '../../stage/council/events'
import * as testEvents from '../../test/council/events'
import * as devEvents from '../../dev/council/events'


export const proposed = {
	name: 'Council.Proposed',
	v1: productionEvents.proposed['v1'],
	v42: productionEvents.proposed['v42'],
	v1Stage: stageEvents.proposed['v1'],
	v42Stage: stageEvents.proposed['v42'],
	v1Test: testEvents.proposed['v1'],
	v42Test: testEvents.proposed['v42'],
	v85Dev: devEvents.proposed['v85'],
}

export const voted = {
	name: 'Council.Voted',
	v1: productionEvents.voted['v1'],
	v42: productionEvents.voted['v42'],
	v1Stage: stageEvents.voted['v1'],
	v42Stage: stageEvents.voted['v42'],
	v1Test: testEvents.voted['v1'],
	v42Test: testEvents.voted['v42'],
	v85Dev: devEvents.voted['v85'],
}

export const approved = {
	name: 'Council.Approved',
	v1: productionEvents.approved['v1'],
	v42: productionEvents.approved['v42'],
	v1Stage: stageEvents.approved['v1'],
	v42Stage: stageEvents.approved['v42'],
	v1Test: testEvents.approved['v1'],
	v42Test: testEvents.approved['v42'],
	v85Dev: devEvents.approved['v85'],
}

export const disapproved = {
	name: 'Council.Disapproved',
	v1: productionEvents.disapproved['v1'],
	v42: productionEvents.disapproved['v42'],
	v1Stage: stageEvents.disapproved['v1'],
	v42Stage: stageEvents.disapproved['v42'],
	v1Test: testEvents.disapproved['v1'],
	v42Test: testEvents.disapproved['v42'],
	v85Dev: devEvents.disapproved['v85'],
}

export const executed = {
	name: 'Council.Executed',
	v1: productionEvents.executed['v1'],
	v42: productionEvents.executed['v42'],
	v53: productionEvents.executed['v53'],
	v1Stage: stageEvents.executed['v1'],
	v42Stage: stageEvents.executed['v42'],
	v53Stage: stageEvents.executed['v53'],
	v1Test: testEvents.executed['v1'],
	v42Test: testEvents.executed['v42'],
	v53Test: testEvents.executed['v53'],
	v85Dev: devEvents.executed['v85'],
}

export const memberExecuted = {
	name: 'Council.MemberExecuted',
	v1: productionEvents.memberExecuted['v1'],
	v42: productionEvents.memberExecuted['v42'],
	v53: productionEvents.memberExecuted['v53'],
	v1Stage: stageEvents.memberExecuted['v1'],
	v42Stage: stageEvents.memberExecuted['v42'],
	v53Stage: stageEvents.memberExecuted['v53'],
	v1Test: testEvents.memberExecuted['v1'],
	v42Test: testEvents.memberExecuted['v42'],
	v53Test: testEvents.memberExecuted['v53'],
	v85Dev: devEvents.memberExecuted['v85'],
}

export const closed = {
	name: 'Council.Closed',
	v1: productionEvents.closed['v1'],
	v42: productionEvents.closed['v42'],
	v1Stage: stageEvents.closed['v1'],
	v42Stage: stageEvents.closed['v42'],
	v1Test: testEvents.closed['v1'],
	v42Test: testEvents.closed['v42'],
	v85Dev: devEvents.closed['v85'],
}
