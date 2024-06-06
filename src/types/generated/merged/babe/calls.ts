import * as productionCalls from '../../production/babe/calls'
import * as stageCalls from '../../stage/babe/calls'
import * as testCalls from '../../test/babe/calls'
import * as devCalls from '../../dev/babe/calls'


export const reportEquivocation = {
	name: 'Babe.report_equivocation',
	v1: productionCalls.reportEquivocation['v1'],
	v42: productionCalls.reportEquivocation['v42'],
	v1Stage: stageCalls.reportEquivocation['v1'],
	v42Stage: stageCalls.reportEquivocation['v42'],
	v1Test: testCalls.reportEquivocation['v1'],
	v42Test: testCalls.reportEquivocation['v42'],
	v85Dev: devCalls.reportEquivocation['v85'],
}

export const reportEquivocationUnsigned = {
	name: 'Babe.report_equivocation_unsigned',
	v1: productionCalls.reportEquivocationUnsigned['v1'],
	v42: productionCalls.reportEquivocationUnsigned['v42'],
	v1Stage: stageCalls.reportEquivocationUnsigned['v1'],
	v42Stage: stageCalls.reportEquivocationUnsigned['v42'],
	v1Test: testCalls.reportEquivocationUnsigned['v1'],
	v42Test: testCalls.reportEquivocationUnsigned['v42'],
	v85Dev: devCalls.reportEquivocationUnsigned['v85'],
}

export const planConfigChange = {
	name: 'Babe.plan_config_change',
	v42: productionCalls.planConfigChange['v42'],
	v42Stage: stageCalls.planConfigChange['v42'],
	v42Test: testCalls.planConfigChange['v42'],
	v85Dev: devCalls.planConfigChange['v85'],
}
