import * as productionEvents from '../../production/utility/events'
import * as stageEvents from '../../stage/utility/events'
import * as testEvents from '../../test/utility/events'
import * as devEvents from '../../dev/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	v1: productionEvents.batchInterrupted['v1'],
	v42: productionEvents.batchInterrupted['v42'],
	v53: productionEvents.batchInterrupted['v53'],
	v1Stage: stageEvents.batchInterrupted['v1'],
	v42Stage: stageEvents.batchInterrupted['v42'],
	v53Stage: stageEvents.batchInterrupted['v53'],
	v1Test: testEvents.batchInterrupted['v1'],
	v42Test: testEvents.batchInterrupted['v42'],
	v53Test: testEvents.batchInterrupted['v53'],
	v85Dev: devEvents.batchInterrupted['v85'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	v1: productionEvents.batchCompleted['v1'],
	v1Stage: stageEvents.batchCompleted['v1'],
	v1Test: testEvents.batchCompleted['v1'],
	v85Dev: devEvents.batchCompleted['v85'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	v42: productionEvents.batchCompletedWithErrors['v42'],
	v42Stage: stageEvents.batchCompletedWithErrors['v42'],
	v42Test: testEvents.batchCompletedWithErrors['v42'],
	v85Dev: devEvents.batchCompletedWithErrors['v85'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	v42: productionEvents.itemCompleted['v42'],
	v42Stage: stageEvents.itemCompleted['v42'],
	v42Test: testEvents.itemCompleted['v42'],
	v85Dev: devEvents.itemCompleted['v85'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	v42: productionEvents.itemFailed['v42'],
	v53: productionEvents.itemFailed['v53'],
	v42Stage: stageEvents.itemFailed['v42'],
	v53Stage: stageEvents.itemFailed['v53'],
	v42Test: testEvents.itemFailed['v42'],
	v53Test: testEvents.itemFailed['v53'],
	v85Dev: devEvents.itemFailed['v85'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	v42: productionEvents.dispatchedAs['v42'],
	v53: productionEvents.dispatchedAs['v53'],
	v42Stage: stageEvents.dispatchedAs['v42'],
	v53Stage: stageEvents.dispatchedAs['v53'],
	v42Test: testEvents.dispatchedAs['v42'],
	v53Test: testEvents.dispatchedAs['v53'],
	v85Dev: devEvents.dispatchedAs['v85'],
}
