import * as productionCalls from '../../production/elections-phragmen/calls'
import * as stageCalls from '../../stage/elections-phragmen/calls'
import * as testCalls from '../../test/elections-phragmen/calls'
import * as devCalls from '../../dev/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	v1: productionCalls.vote['v1'],
	v1Stage: stageCalls.vote['v1'],
	v1Test: testCalls.vote['v1'],
	v85Dev: devCalls.vote['v85'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	v1: productionCalls.removeVoter['v1'],
	v1Stage: stageCalls.removeVoter['v1'],
	v1Test: testCalls.removeVoter['v1'],
	v85Dev: devCalls.removeVoter['v85'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	v1: productionCalls.submitCandidacy['v1'],
	v1Stage: stageCalls.submitCandidacy['v1'],
	v1Test: testCalls.submitCandidacy['v1'],
	v85Dev: devCalls.submitCandidacy['v85'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	v1: productionCalls.renounceCandidacy['v1'],
	v1Stage: stageCalls.renounceCandidacy['v1'],
	v1Test: testCalls.renounceCandidacy['v1'],
	v85Dev: devCalls.renounceCandidacy['v85'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	v1: productionCalls.removeMember['v1'],
	v53: productionCalls.removeMember['v53'],
	v1Stage: stageCalls.removeMember['v1'],
	v53Stage: stageCalls.removeMember['v53'],
	v1Test: testCalls.removeMember['v1'],
	v53Test: testCalls.removeMember['v53'],
	v85Dev: devCalls.removeMember['v85'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	v1: productionCalls.cleanDefunctVoters['v1'],
	v1Stage: stageCalls.cleanDefunctVoters['v1'],
	v1Test: testCalls.cleanDefunctVoters['v1'],
	v85Dev: devCalls.cleanDefunctVoters['v85'],
}
