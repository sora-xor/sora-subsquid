import * as productionCalls from '../../production/grandpa/calls'
import * as stageCalls from '../../stage/grandpa/calls'
import * as testCalls from '../../test/grandpa/calls'
import * as devCalls from '../../dev/grandpa/calls'


export const reportEquivocation = {
	name: 'Grandpa.report_equivocation',
	v1: productionCalls.reportEquivocation['v1'],
	v1Stage: stageCalls.reportEquivocation['v1'],
	v1Test: testCalls.reportEquivocation['v1'],
	v85Dev: devCalls.reportEquivocation['v85'],
}

export const reportEquivocationUnsigned = {
	name: 'Grandpa.report_equivocation_unsigned',
	v1: productionCalls.reportEquivocationUnsigned['v1'],
	v1Stage: stageCalls.reportEquivocationUnsigned['v1'],
	v1Test: testCalls.reportEquivocationUnsigned['v1'],
	v85Dev: devCalls.reportEquivocationUnsigned['v85'],
}

export const noteStalled = {
	name: 'Grandpa.note_stalled',
	v1: productionCalls.noteStalled['v1'],
	v1Stage: stageCalls.noteStalled['v1'],
	v1Test: testCalls.noteStalled['v1'],
	v85Dev: devCalls.noteStalled['v85'],
}
