import * as productionStorage from '../../production/offences/storage'
import * as stageStorage from '../../stage/offences/storage'
import * as testStorage from '../../test/offences/storage'
import * as devStorage from '../../dev/offences/storage'


export const reports = {
	name: 'Offences.Reports',
	v1: productionStorage.reports['v1'],
	v1Stage: stageStorage.reports['v1'],
	v1Test: testStorage.reports['v1'],
	v85Dev: devStorage.reports['v85'],
}

export const deferredOffences = {
	name: 'Offences.DeferredOffences',
	v1: productionStorage.deferredOffences['v1'],
	v1Stage: stageStorage.deferredOffences['v1'],
	v1Test: testStorage.deferredOffences['v1'],
}

export const concurrentReportsIndex = {
	name: 'Offences.ConcurrentReportsIndex',
	v1: productionStorage.concurrentReportsIndex['v1'],
	v1Stage: stageStorage.concurrentReportsIndex['v1'],
	v1Test: testStorage.concurrentReportsIndex['v1'],
	v85Dev: devStorage.concurrentReportsIndex['v85'],
}

export const reportsByKindIndex = {
	name: 'Offences.ReportsByKindIndex',
	v1: productionStorage.reportsByKindIndex['v1'],
	v1Stage: stageStorage.reportsByKindIndex['v1'],
	v1Test: testStorage.reportsByKindIndex['v1'],
	v85Dev: devStorage.reportsByKindIndex['v85'],
}
