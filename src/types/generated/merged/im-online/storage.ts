import * as productionStorage from '../../production/im-online/storage'
import * as stageStorage from '../../stage/im-online/storage'
import * as testStorage from '../../test/im-online/storage'
import * as devStorage from '../../dev/im-online/storage'


export const heartbeatAfter = {
	name: 'ImOnline.HeartbeatAfter',
	v1: productionStorage.heartbeatAfter['v1'],
	v1Stage: stageStorage.heartbeatAfter['v1'],
	v1Test: testStorage.heartbeatAfter['v1'],
	v85Dev: devStorage.heartbeatAfter['v85'],
}

export const keys = {
	name: 'ImOnline.Keys',
	v1: productionStorage.keys['v1'],
	v1Stage: stageStorage.keys['v1'],
	v1Test: testStorage.keys['v1'],
	v85Dev: devStorage.keys['v85'],
}

export const receivedHeartbeats = {
	name: 'ImOnline.ReceivedHeartbeats',
	v1: productionStorage.receivedHeartbeats['v1'],
	v42: productionStorage.receivedHeartbeats['v42'],
	v1Stage: stageStorage.receivedHeartbeats['v1'],
	v42Stage: stageStorage.receivedHeartbeats['v42'],
	v1Test: testStorage.receivedHeartbeats['v1'],
	v42Test: testStorage.receivedHeartbeats['v42'],
	v85Dev: devStorage.receivedHeartbeats['v85'],
}

export const authoredBlocks = {
	name: 'ImOnline.AuthoredBlocks',
	v1: productionStorage.authoredBlocks['v1'],
	v1Stage: stageStorage.authoredBlocks['v1'],
	v1Test: testStorage.authoredBlocks['v1'],
	v85Dev: devStorage.authoredBlocks['v85'],
}
