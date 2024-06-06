import * as productionCalls from '../../production/pswap-distribution/calls'
import * as stageCalls from '../../stage/pswap-distribution/calls'
import * as testCalls from '../../test/pswap-distribution/calls'
import * as devCalls from '../../dev/pswap-distribution/calls'


export const claimIncentive = {
	name: 'PswapDistribution.claim_incentive',
	v1: productionCalls.claimIncentive['v1'],
	v1Stage: stageCalls.claimIncentive['v1'],
	v1Test: testCalls.claimIncentive['v1'],
	v85Dev: devCalls.claimIncentive['v85'],
}
