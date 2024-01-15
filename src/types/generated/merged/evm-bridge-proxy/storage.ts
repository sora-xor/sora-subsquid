import * as stageStorage from '../../stage/evm-bridge-proxy/storage'
import * as testStorage from '../../test/evm-bridge-proxy/storage'


export const transactions = {
	name: '',
	v52Stage: stageStorage.transactions['v52'],
	v52Test: testStorage.transactions['v52'],
}

export const senders = {
	name: '',
	v52Stage: stageStorage.senders['v52'],
	v52Test: testStorage.senders['v52'],
}
