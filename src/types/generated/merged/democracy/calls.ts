import * as productionCalls from '../../production/democracy/calls'
import * as stageCalls from '../../stage/democracy/calls'
import * as testCalls from '../../test/democracy/calls'
import * as devCalls from '../../dev/democracy/calls'


export const propose = {
	name: 'Democracy.propose',
	v1: productionCalls.propose['v1'],
	v53: productionCalls.propose['v53'],
	v1Stage: stageCalls.propose['v1'],
	v53Stage: stageCalls.propose['v53'],
	v1Test: testCalls.propose['v1'],
	v53Test: testCalls.propose['v53'],
	v85Dev: devCalls.propose['v85'],
}

export const second = {
	name: 'Democracy.second',
	v1: productionCalls.second['v1'],
	v53: productionCalls.second['v53'],
	v1Stage: stageCalls.second['v1'],
	v53Stage: stageCalls.second['v53'],
	v1Test: testCalls.second['v1'],
	v53Test: testCalls.second['v53'],
	v85Dev: devCalls.second['v85'],
}

export const vote = {
	name: 'Democracy.vote',
	v1: productionCalls.vote['v1'],
	v42: productionCalls.vote['v42'],
	v1Stage: stageCalls.vote['v1'],
	v42Stage: stageCalls.vote['v42'],
	v1Test: testCalls.vote['v1'],
	v42Test: testCalls.vote['v42'],
	v85Dev: devCalls.vote['v85'],
}

export const emergencyCancel = {
	name: 'Democracy.emergency_cancel',
	v1: productionCalls.emergencyCancel['v1'],
	v1Stage: stageCalls.emergencyCancel['v1'],
	v1Test: testCalls.emergencyCancel['v1'],
	v85Dev: devCalls.emergencyCancel['v85'],
}

export const externalPropose = {
	name: 'Democracy.external_propose',
	v1: productionCalls.externalPropose['v1'],
	v53: productionCalls.externalPropose['v53'],
	v1Stage: stageCalls.externalPropose['v1'],
	v53Stage: stageCalls.externalPropose['v53'],
	v1Test: testCalls.externalPropose['v1'],
	v53Test: testCalls.externalPropose['v53'],
	v85Dev: devCalls.externalPropose['v85'],
}

export const externalProposeMajority = {
	name: 'Democracy.external_propose_majority',
	v1: productionCalls.externalProposeMajority['v1'],
	v53: productionCalls.externalProposeMajority['v53'],
	v1Stage: stageCalls.externalProposeMajority['v1'],
	v53Stage: stageCalls.externalProposeMajority['v53'],
	v1Test: testCalls.externalProposeMajority['v1'],
	v53Test: testCalls.externalProposeMajority['v53'],
	v85Dev: devCalls.externalProposeMajority['v85'],
}

export const externalProposeDefault = {
	name: 'Democracy.external_propose_default',
	v1: productionCalls.externalProposeDefault['v1'],
	v53: productionCalls.externalProposeDefault['v53'],
	v1Stage: stageCalls.externalProposeDefault['v1'],
	v53Stage: stageCalls.externalProposeDefault['v53'],
	v1Test: testCalls.externalProposeDefault['v1'],
	v53Test: testCalls.externalProposeDefault['v53'],
	v85Dev: devCalls.externalProposeDefault['v85'],
}

export const fastTrack = {
	name: 'Democracy.fast_track',
	v1: productionCalls.fastTrack['v1'],
	v1Stage: stageCalls.fastTrack['v1'],
	v1Test: testCalls.fastTrack['v1'],
	v85Dev: devCalls.fastTrack['v85'],
}

export const vetoExternal = {
	name: 'Democracy.veto_external',
	v1: productionCalls.vetoExternal['v1'],
	v1Stage: stageCalls.vetoExternal['v1'],
	v1Test: testCalls.vetoExternal['v1'],
	v85Dev: devCalls.vetoExternal['v85'],
}

export const cancelReferendum = {
	name: 'Democracy.cancel_referendum',
	v1: productionCalls.cancelReferendum['v1'],
	v1Stage: stageCalls.cancelReferendum['v1'],
	v1Test: testCalls.cancelReferendum['v1'],
	v85Dev: devCalls.cancelReferendum['v85'],
}

export const cancelQueued = {
	name: 'Democracy.cancel_queued',
	v1: productionCalls.cancelQueued['v1'],
	v1Stage: stageCalls.cancelQueued['v1'],
	v1Test: testCalls.cancelQueued['v1'],
}

export const delegate = {
	name: 'Democracy.delegate',
	v1: productionCalls.delegate['v1'],
	v1Stage: stageCalls.delegate['v1'],
	v1Test: testCalls.delegate['v1'],
	v85Dev: devCalls.delegate['v85'],
}

export const undelegate = {
	name: 'Democracy.undelegate',
	v1: productionCalls.undelegate['v1'],
	v1Stage: stageCalls.undelegate['v1'],
	v1Test: testCalls.undelegate['v1'],
	v85Dev: devCalls.undelegate['v85'],
}

export const clearPublicProposals = {
	name: 'Democracy.clear_public_proposals',
	v1: productionCalls.clearPublicProposals['v1'],
	v1Stage: stageCalls.clearPublicProposals['v1'],
	v1Test: testCalls.clearPublicProposals['v1'],
	v85Dev: devCalls.clearPublicProposals['v85'],
}

export const notePreimage = {
	name: 'Democracy.note_preimage',
	v1: productionCalls.notePreimage['v1'],
	v1Stage: stageCalls.notePreimage['v1'],
	v1Test: testCalls.notePreimage['v1'],
}

export const notePreimageOperational = {
	name: 'Democracy.note_preimage_operational',
	v1: productionCalls.notePreimageOperational['v1'],
	v1Stage: stageCalls.notePreimageOperational['v1'],
	v1Test: testCalls.notePreimageOperational['v1'],
}

export const noteImminentPreimage = {
	name: 'Democracy.note_imminent_preimage',
	v1: productionCalls.noteImminentPreimage['v1'],
	v1Stage: stageCalls.noteImminentPreimage['v1'],
	v1Test: testCalls.noteImminentPreimage['v1'],
}

export const noteImminentPreimageOperational = {
	name: 'Democracy.note_imminent_preimage_operational',
	v1: productionCalls.noteImminentPreimageOperational['v1'],
	v1Stage: stageCalls.noteImminentPreimageOperational['v1'],
	v1Test: testCalls.noteImminentPreimageOperational['v1'],
}

export const reapPreimage = {
	name: 'Democracy.reap_preimage',
	v1: productionCalls.reapPreimage['v1'],
	v1Stage: stageCalls.reapPreimage['v1'],
	v1Test: testCalls.reapPreimage['v1'],
}

export const unlock = {
	name: 'Democracy.unlock',
	v1: productionCalls.unlock['v1'],
	v1Stage: stageCalls.unlock['v1'],
	v1Test: testCalls.unlock['v1'],
	v85Dev: devCalls.unlock['v85'],
}

export const removeVote = {
	name: 'Democracy.remove_vote',
	v1: productionCalls.removeVote['v1'],
	v1Stage: stageCalls.removeVote['v1'],
	v1Test: testCalls.removeVote['v1'],
	v85Dev: devCalls.removeVote['v85'],
}

export const removeOtherVote = {
	name: 'Democracy.remove_other_vote',
	v1: productionCalls.removeOtherVote['v1'],
	v1Stage: stageCalls.removeOtherVote['v1'],
	v1Test: testCalls.removeOtherVote['v1'],
	v85Dev: devCalls.removeOtherVote['v85'],
}

export const enactProposal = {
	name: 'Democracy.enact_proposal',
	v1: productionCalls.enactProposal['v1'],
	v1Stage: stageCalls.enactProposal['v1'],
	v1Test: testCalls.enactProposal['v1'],
}

export const blacklist = {
	name: 'Democracy.blacklist',
	v1: productionCalls.blacklist['v1'],
	v1Stage: stageCalls.blacklist['v1'],
	v1Test: testCalls.blacklist['v1'],
	v85Dev: devCalls.blacklist['v85'],
}

export const cancelProposal = {
	name: 'Democracy.cancel_proposal',
	v1: productionCalls.cancelProposal['v1'],
	v1Stage: stageCalls.cancelProposal['v1'],
	v1Test: testCalls.cancelProposal['v1'],
	v85Dev: devCalls.cancelProposal['v85'],
}
