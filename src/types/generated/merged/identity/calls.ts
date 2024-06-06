import * as productionCalls from '../../production/identity/calls'
import * as stageCalls from '../../stage/identity/calls'
import * as testCalls from '../../test/identity/calls'
import * as devCalls from '../../dev/identity/calls'


export const addRegistrar = {
	name: 'Identity.add_registrar',
	v3: productionCalls.addRegistrar['v3'],
	v3Stage: stageCalls.addRegistrar['v3'],
	v3Test: testCalls.addRegistrar['v3'],
	v85Dev: devCalls.addRegistrar['v85'],
}

export const setIdentity = {
	name: 'Identity.set_identity',
	v3: productionCalls.setIdentity['v3'],
	v3Stage: stageCalls.setIdentity['v3'],
	v3Test: testCalls.setIdentity['v3'],
	v85Dev: devCalls.setIdentity['v85'],
}

export const setSubs = {
	name: 'Identity.set_subs',
	v3: productionCalls.setSubs['v3'],
	v3Stage: stageCalls.setSubs['v3'],
	v3Test: testCalls.setSubs['v3'],
	v85Dev: devCalls.setSubs['v85'],
}

export const clearIdentity = {
	name: 'Identity.clear_identity',
	v3: productionCalls.clearIdentity['v3'],
	v3Stage: stageCalls.clearIdentity['v3'],
	v3Test: testCalls.clearIdentity['v3'],
	v85Dev: devCalls.clearIdentity['v85'],
}

export const requestJudgement = {
	name: 'Identity.request_judgement',
	v3: productionCalls.requestJudgement['v3'],
	v3Stage: stageCalls.requestJudgement['v3'],
	v3Test: testCalls.requestJudgement['v3'],
	v85Dev: devCalls.requestJudgement['v85'],
}

export const cancelRequest = {
	name: 'Identity.cancel_request',
	v3: productionCalls.cancelRequest['v3'],
	v3Stage: stageCalls.cancelRequest['v3'],
	v3Test: testCalls.cancelRequest['v3'],
	v85Dev: devCalls.cancelRequest['v85'],
}

export const setFee = {
	name: 'Identity.set_fee',
	v3: productionCalls.setFee['v3'],
	v3Stage: stageCalls.setFee['v3'],
	v3Test: testCalls.setFee['v3'],
	v85Dev: devCalls.setFee['v85'],
}

export const setAccountId = {
	name: 'Identity.set_account_id',
	v3: productionCalls.setAccountId['v3'],
	v3Stage: stageCalls.setAccountId['v3'],
	v3Test: testCalls.setAccountId['v3'],
	v85Dev: devCalls.setAccountId['v85'],
}

export const setFields = {
	name: 'Identity.set_fields',
	v3: productionCalls.setFields['v3'],
	v3Stage: stageCalls.setFields['v3'],
	v3Test: testCalls.setFields['v3'],
	v85Dev: devCalls.setFields['v85'],
}

export const provideJudgement = {
	name: 'Identity.provide_judgement',
	v3: productionCalls.provideJudgement['v3'],
	v53: productionCalls.provideJudgement['v53'],
	v3Stage: stageCalls.provideJudgement['v3'],
	v53Stage: stageCalls.provideJudgement['v53'],
	v3Test: testCalls.provideJudgement['v3'],
	v53Test: testCalls.provideJudgement['v53'],
	v85Dev: devCalls.provideJudgement['v85'],
}

export const killIdentity = {
	name: 'Identity.kill_identity',
	v3: productionCalls.killIdentity['v3'],
	v3Stage: stageCalls.killIdentity['v3'],
	v3Test: testCalls.killIdentity['v3'],
	v85Dev: devCalls.killIdentity['v85'],
}

export const addSub = {
	name: 'Identity.add_sub',
	v3: productionCalls.addSub['v3'],
	v3Stage: stageCalls.addSub['v3'],
	v3Test: testCalls.addSub['v3'],
	v85Dev: devCalls.addSub['v85'],
}

export const renameSub = {
	name: 'Identity.rename_sub',
	v3: productionCalls.renameSub['v3'],
	v3Stage: stageCalls.renameSub['v3'],
	v3Test: testCalls.renameSub['v3'],
	v85Dev: devCalls.renameSub['v85'],
}

export const removeSub = {
	name: 'Identity.remove_sub',
	v3: productionCalls.removeSub['v3'],
	v3Stage: stageCalls.removeSub['v3'],
	v3Test: testCalls.removeSub['v3'],
	v85Dev: devCalls.removeSub['v85'],
}

export const quitSub = {
	name: 'Identity.quit_sub',
	v3: productionCalls.quitSub['v3'],
	v3Stage: stageCalls.quitSub['v3'],
	v3Test: testCalls.quitSub['v3'],
	v85Dev: devCalls.quitSub['v85'],
}
