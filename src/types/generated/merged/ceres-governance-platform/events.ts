import * as productionEvents from '../../production/ceres-governance-platform/events'
import * as stageEvents from '../../stage/ceres-governance-platform/events'
import * as testEvents from '../../test/ceres-governance-platform/events'
import * as devEvents from '../../dev/ceres-governance-platform/events'


export const voted = {
	name: 'CeresGovernancePlatform.Voted',
	v26: productionEvents.voted['v26'],
	v70: productionEvents.voted['v70'],
	v26Stage: stageEvents.voted['v26'],
	v70Stage: stageEvents.voted['v70'],
	v26Test: testEvents.voted['v26'],
	v70Test: testEvents.voted['v70'],
	v85Dev: devEvents.voted['v85'],
}

export const created = {
	name: 'CeresGovernancePlatform.Created',
	v26: productionEvents.created['v26'],
	v37: productionEvents.created['v37'],
	v70: productionEvents.created['v70'],
	v26Stage: stageEvents.created['v26'],
	v37Stage: stageEvents.created['v37'],
	v70Stage: stageEvents.created['v70'],
	v26Test: testEvents.created['v26'],
	v37Test: testEvents.created['v37'],
	v70Test: testEvents.created['v70'],
	v85Dev: devEvents.created['v85'],
}

export const withdrawn = {
	name: 'CeresGovernancePlatform.Withdrawn',
	v26: productionEvents.withdrawn['v26'],
	v70: productionEvents.withdrawn['v70'],
	v26Stage: stageEvents.withdrawn['v26'],
	v70Stage: stageEvents.withdrawn['v70'],
	v26Test: testEvents.withdrawn['v26'],
	v70Test: testEvents.withdrawn['v70'],
	v85Dev: devEvents.withdrawn['v85'],
}
