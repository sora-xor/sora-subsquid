import * as productionStorage from '../../production/democracy/storage'
import * as stageStorage from '../../stage/democracy/storage'
import * as testStorage from '../../test/democracy/storage'
import * as devStorage from '../../dev/democracy/storage'


export const publicPropCount = {
	name: 'Democracy.PublicPropCount',
	v1: productionStorage.publicPropCount['v1'],
	v1Stage: stageStorage.publicPropCount['v1'],
	v1Test: testStorage.publicPropCount['v1'],
	v85Dev: devStorage.publicPropCount['v85'],
}

export const publicProps = {
	name: 'Democracy.PublicProps',
	v1: productionStorage.publicProps['v1'],
	v53: productionStorage.publicProps['v53'],
	v1Stage: stageStorage.publicProps['v1'],
	v53Stage: stageStorage.publicProps['v53'],
	v1Test: testStorage.publicProps['v1'],
	v53Test: testStorage.publicProps['v53'],
	v85Dev: devStorage.publicProps['v85'],
}

export const depositOf = {
	name: 'Democracy.DepositOf',
	v1: productionStorage.depositOf['v1'],
	v1Stage: stageStorage.depositOf['v1'],
	v1Test: testStorage.depositOf['v1'],
	v85Dev: devStorage.depositOf['v85'],
}

export const preimages = {
	name: 'Democracy.Preimages',
	v1: productionStorage.preimages['v1'],
	v42: productionStorage.preimages['v42'],
	v1Stage: stageStorage.preimages['v1'],
	v42Stage: stageStorage.preimages['v42'],
	v1Test: testStorage.preimages['v1'],
	v42Test: testStorage.preimages['v42'],
}

export const referendumCount = {
	name: 'Democracy.ReferendumCount',
	v1: productionStorage.referendumCount['v1'],
	v1Stage: stageStorage.referendumCount['v1'],
	v1Test: testStorage.referendumCount['v1'],
	v85Dev: devStorage.referendumCount['v85'],
}

export const lowestUnbaked = {
	name: 'Democracy.LowestUnbaked',
	v1: productionStorage.lowestUnbaked['v1'],
	v1Stage: stageStorage.lowestUnbaked['v1'],
	v1Test: testStorage.lowestUnbaked['v1'],
	v85Dev: devStorage.lowestUnbaked['v85'],
}

export const referendumInfoOf = {
	name: 'Democracy.ReferendumInfoOf',
	v1: productionStorage.referendumInfoOf['v1'],
	v42: productionStorage.referendumInfoOf['v42'],
	v53: productionStorage.referendumInfoOf['v53'],
	v1Stage: stageStorage.referendumInfoOf['v1'],
	v42Stage: stageStorage.referendumInfoOf['v42'],
	v53Stage: stageStorage.referendumInfoOf['v53'],
	v1Test: testStorage.referendumInfoOf['v1'],
	v42Test: testStorage.referendumInfoOf['v42'],
	v53Test: testStorage.referendumInfoOf['v53'],
	v85Dev: devStorage.referendumInfoOf['v85'],
}

export const votingOf = {
	name: 'Democracy.VotingOf',
	v1: productionStorage.votingOf['v1'],
	v42: productionStorage.votingOf['v42'],
	v1Stage: stageStorage.votingOf['v1'],
	v42Stage: stageStorage.votingOf['v42'],
	v1Test: testStorage.votingOf['v1'],
	v42Test: testStorage.votingOf['v42'],
	v85Dev: devStorage.votingOf['v85'],
}

export const locks = {
	name: 'Democracy.Locks',
	v1: productionStorage.locks['v1'],
	v1Stage: stageStorage.locks['v1'],
	v1Test: testStorage.locks['v1'],
}

export const lastTabledWasExternal = {
	name: 'Democracy.LastTabledWasExternal',
	v1: productionStorage.lastTabledWasExternal['v1'],
	v1Stage: stageStorage.lastTabledWasExternal['v1'],
	v1Test: testStorage.lastTabledWasExternal['v1'],
	v85Dev: devStorage.lastTabledWasExternal['v85'],
}

export const nextExternal = {
	name: 'Democracy.NextExternal',
	v1: productionStorage.nextExternal['v1'],
	v53: productionStorage.nextExternal['v53'],
	v1Stage: stageStorage.nextExternal['v1'],
	v53Stage: stageStorage.nextExternal['v53'],
	v1Test: testStorage.nextExternal['v1'],
	v53Test: testStorage.nextExternal['v53'],
	v85Dev: devStorage.nextExternal['v85'],
}

export const blacklist = {
	name: 'Democracy.Blacklist',
	v1: productionStorage.blacklist['v1'],
	v1Stage: stageStorage.blacklist['v1'],
	v1Test: testStorage.blacklist['v1'],
	v85Dev: devStorage.blacklist['v85'],
}

export const cancellations = {
	name: 'Democracy.Cancellations',
	v1: productionStorage.cancellations['v1'],
	v1Stage: stageStorage.cancellations['v1'],
	v1Test: testStorage.cancellations['v1'],
	v85Dev: devStorage.cancellations['v85'],
}

export const storageVersion = {
	name: 'Democracy.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v1Stage: stageStorage.storageVersion['v1'],
	v42Stage: stageStorage.storageVersion['v42'],
	v1Test: testStorage.storageVersion['v1'],
	v42Test: testStorage.storageVersion['v42'],
}
