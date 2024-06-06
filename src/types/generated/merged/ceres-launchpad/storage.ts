import * as productionStorage from '../../production/ceres-launchpad/storage'
import * as stageStorage from '../../stage/ceres-launchpad/storage'
import * as testStorage from '../../test/ceres-launchpad/storage'
import * as devStorage from '../../dev/ceres-launchpad/storage'


export const penaltiesAccount = {
	name: 'CeresLaunchpad.PenaltiesAccount',
	v26: productionStorage.penaltiesAccount['v26'],
	v26Stage: stageStorage.penaltiesAccount['v26'],
	v26Test: testStorage.penaltiesAccount['v26'],
	v85Dev: devStorage.penaltiesAccount['v85'],
}

export const ceresBurnFeeAmount = {
	name: 'CeresLaunchpad.CeresBurnFeeAmount',
	v26: productionStorage.ceresBurnFeeAmount['v26'],
	v26Stage: stageStorage.ceresBurnFeeAmount['v26'],
	v26Test: testStorage.ceresBurnFeeAmount['v26'],
	v85Dev: devStorage.ceresBurnFeeAmount['v85'],
}

export const ceresForContributionInIlo = {
	name: 'CeresLaunchpad.CeresForContributionInIlo',
	v26: productionStorage.ceresForContributionInIlo['v26'],
	v26Stage: stageStorage.ceresForContributionInIlo['v26'],
	v26Test: testStorage.ceresForContributionInIlo['v26'],
	v85Dev: devStorage.ceresForContributionInIlo['v85'],
}

export const authorityAccount = {
	name: 'CeresLaunchpad.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v26Stage: stageStorage.authorityAccount['v26'],
	v26Test: testStorage.authorityAccount['v26'],
	v85Dev: devStorage.authorityAccount['v85'],
}

export const ilOs = {
	name: 'CeresLaunchpad.IlOs',
	v26: productionStorage.ilOs['v26'],
	v33: productionStorage.ilOs['v33'],
	v37: productionStorage.ilOs['v37'],
	v42: productionStorage.ilOs['v42'],
	v47: productionStorage.ilOs['v47'],
	v26Stage: stageStorage.ilOs['v26'],
	v33Stage: stageStorage.ilOs['v33'],
	v37Stage: stageStorage.ilOs['v37'],
	v42Stage: stageStorage.ilOs['v42'],
	v47Stage: stageStorage.ilOs['v47'],
	v26Test: testStorage.ilOs['v26'],
	v33Test: testStorage.ilOs['v33'],
	v37Test: testStorage.ilOs['v37'],
	v42Test: testStorage.ilOs['v42'],
	v47Test: testStorage.ilOs['v47'],
	v85Dev: devStorage.ilOs['v85'],
}

export const contributions = {
	name: 'CeresLaunchpad.Contributions',
	v26: productionStorage.contributions['v26'],
	v42: productionStorage.contributions['v42'],
	v26Stage: stageStorage.contributions['v26'],
	v42Stage: stageStorage.contributions['v42'],
	v26Test: testStorage.contributions['v26'],
	v42Test: testStorage.contributions['v42'],
	v85Dev: devStorage.contributions['v85'],
}

export const whitelistedContributors = {
	name: 'CeresLaunchpad.WhitelistedContributors',
	v33: productionStorage.whitelistedContributors['v33'],
	v33Stage: stageStorage.whitelistedContributors['v33'],
	v33Test: testStorage.whitelistedContributors['v33'],
	v85Dev: devStorage.whitelistedContributors['v85'],
}

export const whitelistedIloOrganizers = {
	name: 'CeresLaunchpad.WhitelistedIloOrganizers',
	v33: productionStorage.whitelistedIloOrganizers['v33'],
	v33Stage: stageStorage.whitelistedIloOrganizers['v33'],
	v33Test: testStorage.whitelistedIloOrganizers['v33'],
	v85Dev: devStorage.whitelistedIloOrganizers['v85'],
}

export const feePercentOnRaisedFunds = {
	name: 'CeresLaunchpad.FeePercentOnRaisedFunds',
	v47: productionStorage.feePercentOnRaisedFunds['v47'],
	v47Stage: stageStorage.feePercentOnRaisedFunds['v47'],
	v47Test: testStorage.feePercentOnRaisedFunds['v47'],
	v85Dev: devStorage.feePercentOnRaisedFunds['v85'],
}
