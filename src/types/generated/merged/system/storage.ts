import * as productionStorage from '../../production/system/storage'
import * as stageStorage from '../../stage/system/storage'
import * as testStorage from '../../test/system/storage'
import * as devStorage from '../../dev/system/storage'


export const account = {
	name: 'System.Account',
	v1: productionStorage.account['v1'],
	v42: productionStorage.account['v42'],
	v1Stage: stageStorage.account['v1'],
	v42Stage: stageStorage.account['v42'],
	v1Test: testStorage.account['v1'],
	v42Test: testStorage.account['v42'],
	v85Dev: devStorage.account['v85'],
}

export const extrinsicCount = {
	name: 'System.ExtrinsicCount',
	v1: productionStorage.extrinsicCount['v1'],
	v1Stage: stageStorage.extrinsicCount['v1'],
	v1Test: testStorage.extrinsicCount['v1'],
	v85Dev: devStorage.extrinsicCount['v85'],
}

export const blockWeight = {
	name: 'System.BlockWeight',
	v1: productionStorage.blockWeight['v1'],
	v53: productionStorage.blockWeight['v53'],
	v1Stage: stageStorage.blockWeight['v1'],
	v53Stage: stageStorage.blockWeight['v53'],
	v1Test: testStorage.blockWeight['v1'],
	v53Test: testStorage.blockWeight['v53'],
	v85Dev: devStorage.blockWeight['v85'],
}

export const allExtrinsicsLen = {
	name: 'System.AllExtrinsicsLen',
	v1: productionStorage.allExtrinsicsLen['v1'],
	v1Stage: stageStorage.allExtrinsicsLen['v1'],
	v1Test: testStorage.allExtrinsicsLen['v1'],
	v85Dev: devStorage.allExtrinsicsLen['v85'],
}

export const blockHash = {
	name: 'System.BlockHash',
	v1: productionStorage.blockHash['v1'],
	v1Stage: stageStorage.blockHash['v1'],
	v1Test: testStorage.blockHash['v1'],
	v85Dev: devStorage.blockHash['v85'],
}

export const extrinsicData = {
	name: 'System.ExtrinsicData',
	v1: productionStorage.extrinsicData['v1'],
	v1Stage: stageStorage.extrinsicData['v1'],
	v1Test: testStorage.extrinsicData['v1'],
	v85Dev: devStorage.extrinsicData['v85'],
}

export const number = {
	name: 'System.Number',
	v1: productionStorage.number['v1'],
	v1Stage: stageStorage.number['v1'],
	v1Test: testStorage.number['v1'],
	v85Dev: devStorage.number['v85'],
}

export const parentHash = {
	name: 'System.ParentHash',
	v1: productionStorage.parentHash['v1'],
	v1Stage: stageStorage.parentHash['v1'],
	v1Test: testStorage.parentHash['v1'],
	v85Dev: devStorage.parentHash['v85'],
}

export const digest = {
	name: 'System.Digest',
	v1: productionStorage.digest['v1'],
	v42: productionStorage.digest['v42'],
	v1Stage: stageStorage.digest['v1'],
	v42Stage: stageStorage.digest['v42'],
	v1Test: testStorage.digest['v1'],
	v42Test: testStorage.digest['v42'],
	v85Dev: devStorage.digest['v85'],
}

export const events = {
	name: 'System.Events',
	v1: productionStorage.events['v1'],
	v3: productionStorage.events['v3'],
	v7: productionStorage.events['v7'],
	v8: productionStorage.events['v8'],
	v19: productionStorage.events['v19'],
	v22: productionStorage.events['v22'],
	v23: productionStorage.events['v23'],
	v26: productionStorage.events['v26'],
	v33: productionStorage.events['v33'],
	v35: productionStorage.events['v35'],
	v37: productionStorage.events['v37'],
	v38: productionStorage.events['v38'],
	v42: productionStorage.events['v42'],
	v43: productionStorage.events['v43'],
	v45: productionStorage.events['v45'],
	v46: productionStorage.events['v46'],
	v47: productionStorage.events['v47'],
	v53: productionStorage.events['v53'],
	v57: productionStorage.events['v57'],
	v60: productionStorage.events['v60'],
	v64: productionStorage.events['v64'],
	v66: productionStorage.events['v66'],
	v68: productionStorage.events['v68'],
	v70: productionStorage.events['v70'],
	v71: productionStorage.events['v71'],
	v72: productionStorage.events['v72'],
	v74: productionStorage.events['v74'],
	v77: productionStorage.events['v77'],
	v84: productionStorage.events['v84'],
	v85: productionStorage.events['v85'],
	v1Stage: stageStorage.events['v1'],
	v3Stage: stageStorage.events['v3'],
	v7Stage: stageStorage.events['v7'],
	v8Stage: stageStorage.events['v8'],
	v19Stage: stageStorage.events['v19'],
	v22Stage: stageStorage.events['v22'],
	v23Stage: stageStorage.events['v23'],
	v26Stage: stageStorage.events['v26'],
	v33Stage: stageStorage.events['v33'],
	v35Stage: stageStorage.events['v35'],
	v37Stage: stageStorage.events['v37'],
	v38Stage: stageStorage.events['v38'],
	v42Stage: stageStorage.events['v42'],
	v43Stage: stageStorage.events['v43'],
	v45Stage: stageStorage.events['v45'],
	v46Stage: stageStorage.events['v46'],
	v47Stage: stageStorage.events['v47'],
	v53Stage: stageStorage.events['v53'],
	v57Stage: stageStorage.events['v57'],
	v60Stage: stageStorage.events['v60'],
	v64Stage: stageStorage.events['v64'],
	v66Stage: stageStorage.events['v66'],
	v68Stage: stageStorage.events['v68'],
	v70Stage: stageStorage.events['v70'],
	v71Stage: stageStorage.events['v71'],
	v72Stage: stageStorage.events['v72'],
	v74Stage: stageStorage.events['v74'],
	v77Stage: stageStorage.events['v77'],
	v84Stage: stageStorage.events['v84'],
	v85Stage: stageStorage.events['v85'],
	v1Test: testStorage.events['v1'],
	v3Test: testStorage.events['v3'],
	v7Test: testStorage.events['v7'],
	v8Test: testStorage.events['v8'],
	v19Test: testStorage.events['v19'],
	v22Test: testStorage.events['v22'],
	v23Test: testStorage.events['v23'],
	v26Test: testStorage.events['v26'],
	v33Test: testStorage.events['v33'],
	v35Test: testStorage.events['v35'],
	v37Test: testStorage.events['v37'],
	v38Test: testStorage.events['v38'],
	v42Test: testStorage.events['v42'],
	v43Test: testStorage.events['v43'],
	v45Test: testStorage.events['v45'],
	v46Test: testStorage.events['v46'],
	v47Test: testStorage.events['v47'],
	v53Test: testStorage.events['v53'],
	v57Test: testStorage.events['v57'],
	v60Test: testStorage.events['v60'],
	v64Test: testStorage.events['v64'],
	v66Test: testStorage.events['v66'],
	v68Test: testStorage.events['v68'],
	v70Test: testStorage.events['v70'],
	v71Test: testStorage.events['v71'],
	v72Test: testStorage.events['v72'],
	v74Test: testStorage.events['v74'],
	v77Test: testStorage.events['v77'],
	v84Test: testStorage.events['v84'],
	v85Test: testStorage.events['v85'],
	v85Dev: devStorage.events['v85'],
}

export const eventCount = {
	name: 'System.EventCount',
	v1: productionStorage.eventCount['v1'],
	v1Stage: stageStorage.eventCount['v1'],
	v1Test: testStorage.eventCount['v1'],
	v85Dev: devStorage.eventCount['v85'],
}

export const eventTopics = {
	name: 'System.EventTopics',
	v1: productionStorage.eventTopics['v1'],
	v1Stage: stageStorage.eventTopics['v1'],
	v1Test: testStorage.eventTopics['v1'],
	v85Dev: devStorage.eventTopics['v85'],
}

export const lastRuntimeUpgrade = {
	name: 'System.LastRuntimeUpgrade',
	v1: productionStorage.lastRuntimeUpgrade['v1'],
	v42: productionStorage.lastRuntimeUpgrade['v42'],
	v1Stage: stageStorage.lastRuntimeUpgrade['v1'],
	v42Stage: stageStorage.lastRuntimeUpgrade['v42'],
	v1Test: testStorage.lastRuntimeUpgrade['v1'],
	v42Test: testStorage.lastRuntimeUpgrade['v42'],
	v85Dev: devStorage.lastRuntimeUpgrade['v85'],
}

export const upgradedToU32RefCount = {
	name: 'System.UpgradedToU32RefCount',
	v1: productionStorage.upgradedToU32RefCount['v1'],
	v1Stage: stageStorage.upgradedToU32RefCount['v1'],
	v1Test: testStorage.upgradedToU32RefCount['v1'],
	v85Dev: devStorage.upgradedToU32RefCount['v85'],
}

export const upgradedToDualRefCount = {
	name: 'System.UpgradedToDualRefCount',
	v1: productionStorage.upgradedToDualRefCount['v1'],
	v1Stage: stageStorage.upgradedToDualRefCount['v1'],
	v1Test: testStorage.upgradedToDualRefCount['v1'],
}

export const executionPhase = {
	name: 'System.ExecutionPhase',
	v1: productionStorage.executionPhase['v1'],
	v1Stage: stageStorage.executionPhase['v1'],
	v1Test: testStorage.executionPhase['v1'],
	v85Dev: devStorage.executionPhase['v85'],
}

export const upgradedToTripleRefCount = {
	name: 'System.UpgradedToTripleRefCount',
	v42: productionStorage.upgradedToTripleRefCount['v42'],
	v42Stage: stageStorage.upgradedToTripleRefCount['v42'],
	v42Test: testStorage.upgradedToTripleRefCount['v42'],
	v85Dev: devStorage.upgradedToTripleRefCount['v85'],
}
