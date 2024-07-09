import * as productionEvents from '../../production/technical-membership/events'
import * as stageEvents from '../../stage/technical-membership/events'
import * as testEvents from '../../test/technical-membership/events'
import * as devEvents from '../../dev/technical-membership/events'


export const memberAdded = {
	name: 'TechnicalMembership.MemberAdded',
	v1: productionEvents.memberAdded['v1'],
	v1Stage: stageEvents.memberAdded['v1'],
	v1Test: testEvents.memberAdded['v1'],
	v85Dev: devEvents.memberAdded['v85'],
}

export const memberRemoved = {
	name: 'TechnicalMembership.MemberRemoved',
	v1: productionEvents.memberRemoved['v1'],
	v1Stage: stageEvents.memberRemoved['v1'],
	v1Test: testEvents.memberRemoved['v1'],
	v85Dev: devEvents.memberRemoved['v85'],
}

export const membersSwapped = {
	name: 'TechnicalMembership.MembersSwapped',
	v1: productionEvents.membersSwapped['v1'],
	v1Stage: stageEvents.membersSwapped['v1'],
	v1Test: testEvents.membersSwapped['v1'],
	v85Dev: devEvents.membersSwapped['v85'],
}

export const membersReset = {
	name: 'TechnicalMembership.MembersReset',
	v1: productionEvents.membersReset['v1'],
	v1Stage: stageEvents.membersReset['v1'],
	v1Test: testEvents.membersReset['v1'],
	v85Dev: devEvents.membersReset['v85'],
}

export const keyChanged = {
	name: 'TechnicalMembership.KeyChanged',
	v1: productionEvents.keyChanged['v1'],
	v1Stage: stageEvents.keyChanged['v1'],
	v1Test: testEvents.keyChanged['v1'],
	v85Dev: devEvents.keyChanged['v85'],
}

export const dummy = {
	name: 'TechnicalMembership.Dummy',
	v1: productionEvents.dummy['v1'],
	v1Stage: stageEvents.dummy['v1'],
	v1Test: testEvents.dummy['v1'],
	v85Dev: devEvents.dummy['v85'],
}
