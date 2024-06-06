import * as productionCalls from '../../production/system/calls'
import * as stageCalls from '../../stage/system/calls'
import * as testCalls from '../../test/system/calls'
import * as devCalls from '../../dev/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	v1: productionCalls.fillBlock['v1'],
	v1Stage: stageCalls.fillBlock['v1'],
	v1Test: testCalls.fillBlock['v1'],
}

export const remark = {
	name: 'System.remark',
	v1: productionCalls.remark['v1'],
	v1Stage: stageCalls.remark['v1'],
	v1Test: testCalls.remark['v1'],
	v85Dev: devCalls.remark['v85'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	v1: productionCalls.setHeapPages['v1'],
	v1Stage: stageCalls.setHeapPages['v1'],
	v1Test: testCalls.setHeapPages['v1'],
	v85Dev: devCalls.setHeapPages['v85'],
}

export const setCode = {
	name: 'System.set_code',
	v1: productionCalls.setCode['v1'],
	v1Stage: stageCalls.setCode['v1'],
	v1Test: testCalls.setCode['v1'],
	v85Dev: devCalls.setCode['v85'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	v1: productionCalls.setCodeWithoutChecks['v1'],
	v1Stage: stageCalls.setCodeWithoutChecks['v1'],
	v1Test: testCalls.setCodeWithoutChecks['v1'],
	v85Dev: devCalls.setCodeWithoutChecks['v85'],
}

export const setChangesTrieConfig = {
	name: 'System.set_changes_trie_config',
	v1: productionCalls.setChangesTrieConfig['v1'],
	v1Stage: stageCalls.setChangesTrieConfig['v1'],
	v1Test: testCalls.setChangesTrieConfig['v1'],
}

export const setStorage = {
	name: 'System.set_storage',
	v1: productionCalls.setStorage['v1'],
	v1Stage: stageCalls.setStorage['v1'],
	v1Test: testCalls.setStorage['v1'],
	v85Dev: devCalls.setStorage['v85'],
}

export const killStorage = {
	name: 'System.kill_storage',
	v1: productionCalls.killStorage['v1'],
	v1Stage: stageCalls.killStorage['v1'],
	v1Test: testCalls.killStorage['v1'],
	v85Dev: devCalls.killStorage['v85'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	v1: productionCalls.killPrefix['v1'],
	v1Stage: stageCalls.killPrefix['v1'],
	v1Test: testCalls.killPrefix['v1'],
	v85Dev: devCalls.killPrefix['v85'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	v42: productionCalls.remarkWithEvent['v42'],
	v42Stage: stageCalls.remarkWithEvent['v42'],
	v42Test: testCalls.remarkWithEvent['v42'],
	v85Dev: devCalls.remarkWithEvent['v85'],
}
