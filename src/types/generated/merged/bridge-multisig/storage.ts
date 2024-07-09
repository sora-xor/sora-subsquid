import * as productionStorage from '../../production/bridge-multisig/storage'
import * as stageStorage from '../../stage/bridge-multisig/storage'
import * as testStorage from '../../test/bridge-multisig/storage'
import * as devStorage from '../../dev/bridge-multisig/storage'


export const accounts = {
	name: 'BridgeMultisig.Accounts',
	v1: productionStorage.accounts['v1'],
	v1Stage: stageStorage.accounts['v1'],
	v1Test: testStorage.accounts['v1'],
	v85Dev: devStorage.accounts['v85'],
}

export const multisigs = {
	name: 'BridgeMultisig.Multisigs',
	v1: productionStorage.multisigs['v1'],
	v42: productionStorage.multisigs['v42'],
	v1Stage: stageStorage.multisigs['v1'],
	v42Stage: stageStorage.multisigs['v42'],
	v1Test: testStorage.multisigs['v1'],
	v42Test: testStorage.multisigs['v42'],
	v85Dev: devStorage.multisigs['v85'],
}

export const calls = {
	name: 'BridgeMultisig.Calls',
	v1: productionStorage.calls['v1'],
	v1Stage: stageStorage.calls['v1'],
	v1Test: testStorage.calls['v1'],
	v85Dev: devStorage.calls['v85'],
}

export const dispatchedCalls = {
	name: 'BridgeMultisig.DispatchedCalls',
	v1: productionStorage.dispatchedCalls['v1'],
	v1Stage: stageStorage.dispatchedCalls['v1'],
	v1Test: testStorage.dispatchedCalls['v1'],
	v85Dev: devStorage.dispatchedCalls['v85'],
}
