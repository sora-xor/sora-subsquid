import * as productionStorage from '../../production/council/storage'
import * as stageStorage from '../../stage/council/storage'
import * as testStorage from '../../test/council/storage'
import * as devStorage from '../../dev/council/storage'


export const proposals = {
	name: 'Council.Proposals',
	v1: productionStorage.proposals['v1'],
	v33Stage: stageStorage.proposals['v33'],
	v33Test: testStorage.proposals['v33'],
	v70Dev: devStorage.proposals['v70'],
}

export const proposalOf = {
	name: 'Council.ProposalOf',
	v1: productionStorage.proposalOf['v1'],
	v3: productionStorage.proposalOf['v3'],
	v7: productionStorage.proposalOf['v7'],
	v19: productionStorage.proposalOf['v19'],
	v22: productionStorage.proposalOf['v22'],
	v23: productionStorage.proposalOf['v23'],
	v26: productionStorage.proposalOf['v26'],
	v32: productionStorage.proposalOf['v32'],
	v33: productionStorage.proposalOf['v33'],
	v35: productionStorage.proposalOf['v35'],
	v37: productionStorage.proposalOf['v37'],
	v38: productionStorage.proposalOf['v38'],
	v42: productionStorage.proposalOf['v42'],
	v43: productionStorage.proposalOf['v43'],
	v45: productionStorage.proposalOf['v45'],
	v46: productionStorage.proposalOf['v46'],
	v47: productionStorage.proposalOf['v47'],
	v50: productionStorage.proposalOf['v50'],
	v53: productionStorage.proposalOf['v53'],
	v57: productionStorage.proposalOf['v57'],
	v59: productionStorage.proposalOf['v59'],
	v60: productionStorage.proposalOf['v60'],
	v63: productionStorage.proposalOf['v63'],
	v64: productionStorage.proposalOf['v64'],
	v66: productionStorage.proposalOf['v66'],
	v70: productionStorage.proposalOf['v70'],
	v71: productionStorage.proposalOf['v71'],
	v72: productionStorage.proposalOf['v72'],
	v74: productionStorage.proposalOf['v74'],
	v77: productionStorage.proposalOf['v77'],
	v33Stage: stageStorage.proposalOf['v33'],
	v35Stage: stageStorage.proposalOf['v35'],
	v37Stage: stageStorage.proposalOf['v37'],
	v38Stage: stageStorage.proposalOf['v38'],
	v42Stage: stageStorage.proposalOf['v42'],
	v43Stage: stageStorage.proposalOf['v43'],
	v44Stage: stageStorage.proposalOf['v44'],
	v45Stage: stageStorage.proposalOf['v45'],
	v46Stage: stageStorage.proposalOf['v46'],
	v47Stage: stageStorage.proposalOf['v47'],
	v48Stage: stageStorage.proposalOf['v48'],
	v52Stage: stageStorage.proposalOf['v52'],
	v54Stage: stageStorage.proposalOf['v54'],
	v55Stage: stageStorage.proposalOf['v55'],
	v57Stage: stageStorage.proposalOf['v57'],
	v59Stage: stageStorage.proposalOf['v59'],
	v60Stage: stageStorage.proposalOf['v60'],
	v62Stage: stageStorage.proposalOf['v62'],
	v64Stage: stageStorage.proposalOf['v64'],
	v66Stage: stageStorage.proposalOf['v66'],
	v69Stage: stageStorage.proposalOf['v69'],
	v70Stage: stageStorage.proposalOf['v70'],
	v71Stage: stageStorage.proposalOf['v71'],
	v33Test: testStorage.proposalOf['v33'],
	v35Test: testStorage.proposalOf['v35'],
	v37Test: testStorage.proposalOf['v37'],
	v38Test: testStorage.proposalOf['v38'],
	v42Test: testStorage.proposalOf['v42'],
	v43Test: testStorage.proposalOf['v43'],
	v44Test: testStorage.proposalOf['v44'],
	v45Test: testStorage.proposalOf['v45'],
	v46Test: testStorage.proposalOf['v46'],
	v47Test: testStorage.proposalOf['v47'],
	v48Test: testStorage.proposalOf['v48'],
	v52Test: testStorage.proposalOf['v52'],
	v54Test: testStorage.proposalOf['v54'],
	v55Test: testStorage.proposalOf['v55'],
	v57Test: testStorage.proposalOf['v57'],
	v59Test: testStorage.proposalOf['v59'],
	v60Test: testStorage.proposalOf['v60'],
	v62Test: testStorage.proposalOf['v62'],
	v64Test: testStorage.proposalOf['v64'],
	v66Test: testStorage.proposalOf['v66'],
	v69Test: testStorage.proposalOf['v69'],
	v70Test: testStorage.proposalOf['v70'],
	v71Test: testStorage.proposalOf['v71'],
	v70Dev: devStorage.proposalOf['v70'],
}

export const voting = {
	name: 'Council.Voting',
	v1: productionStorage.voting['v1'],
	v33Stage: stageStorage.voting['v33'],
	v33Test: testStorage.voting['v33'],
	v70Dev: devStorage.voting['v70'],
}

export const proposalCount = {
	name: 'Council.ProposalCount',
	v1: productionStorage.proposalCount['v1'],
	v33Stage: stageStorage.proposalCount['v33'],
	v33Test: testStorage.proposalCount['v33'],
	v70Dev: devStorage.proposalCount['v70'],
}

export const members = {
	name: 'Council.Members',
	v1: productionStorage.members['v1'],
	v33Stage: stageStorage.members['v33'],
	v33Test: testStorage.members['v33'],
	v70Dev: devStorage.members['v70'],
}

export const prime = {
	name: 'Council.Prime',
	v1: productionStorage.prime['v1'],
	v33Stage: stageStorage.prime['v33'],
	v33Test: testStorage.prime['v33'],
	v70Dev: devStorage.prime['v70'],
}
