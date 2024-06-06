import * as productionStorage from '../../production/pswap-distribution/storage'
import * as stageStorage from '../../stage/pswap-distribution/storage'
import * as testStorage from '../../test/pswap-distribution/storage'
import * as devStorage from '../../dev/pswap-distribution/storage'


export const subscribedAccounts = {
	name: 'PswapDistribution.SubscribedAccounts',
	v1: productionStorage.subscribedAccounts['v1'],
	v1Stage: stageStorage.subscribedAccounts['v1'],
	v1Test: testStorage.subscribedAccounts['v1'],
	v85Dev: devStorage.subscribedAccounts['v85'],
}

export const burnRate = {
	name: 'PswapDistribution.BurnRate',
	v1: productionStorage.burnRate['v1'],
	v42: productionStorage.burnRate['v42'],
	v1Stage: stageStorage.burnRate['v1'],
	v42Stage: stageStorage.burnRate['v42'],
	v1Test: testStorage.burnRate['v1'],
	v42Test: testStorage.burnRate['v42'],
	v85Dev: devStorage.burnRate['v85'],
}

export const burnUpdateInfo = {
	name: 'PswapDistribution.BurnUpdateInfo',
	v1: productionStorage.burnUpdateInfo['v1'],
	v42: productionStorage.burnUpdateInfo['v42'],
	v1Stage: stageStorage.burnUpdateInfo['v1'],
	v42Stage: stageStorage.burnUpdateInfo['v42'],
	v1Test: testStorage.burnUpdateInfo['v1'],
	v42Test: testStorage.burnUpdateInfo['v42'],
	v85Dev: devStorage.burnUpdateInfo['v85'],
}

export const shareholderAccounts = {
	name: 'PswapDistribution.ShareholderAccounts',
	v1: productionStorage.shareholderAccounts['v1'],
	v42: productionStorage.shareholderAccounts['v42'],
	v1Stage: stageStorage.shareholderAccounts['v1'],
	v42Stage: stageStorage.shareholderAccounts['v42'],
	v1Test: testStorage.shareholderAccounts['v1'],
	v42Test: testStorage.shareholderAccounts['v42'],
	v85Dev: devStorage.shareholderAccounts['v85'],
}

export const claimableShares = {
	name: 'PswapDistribution.ClaimableShares',
	v1: productionStorage.claimableShares['v1'],
	v42: productionStorage.claimableShares['v42'],
	v1Stage: stageStorage.claimableShares['v1'],
	v42Stage: stageStorage.claimableShares['v42'],
	v1Test: testStorage.claimableShares['v1'],
	v42Test: testStorage.claimableShares['v42'],
	v85Dev: devStorage.claimableShares['v85'],
}

export const parliamentPswapFraction = {
	name: 'PswapDistribution.ParliamentPswapFraction',
	v1: productionStorage.parliamentPswapFraction['v1'],
	v42: productionStorage.parliamentPswapFraction['v42'],
	v1Stage: stageStorage.parliamentPswapFraction['v1'],
	v42Stage: stageStorage.parliamentPswapFraction['v42'],
	v1Test: testStorage.parliamentPswapFraction['v1'],
	v42Test: testStorage.parliamentPswapFraction['v42'],
}

export const buyBackXstFraction = {
	name: 'PswapDistribution.BuyBackXstFraction',
	v53: productionStorage.buyBackXstFraction['v53'],
	v53Stage: stageStorage.buyBackXstFraction['v53'],
	v53Test: testStorage.buyBackXstFraction['v53'],
}

export const buyBackTbcdFraction = {
	name: 'PswapDistribution.BuyBackTbcdFraction',
	v68: productionStorage.buyBackTbcdFraction['v68'],
	v68Stage: stageStorage.buyBackTbcdFraction['v68'],
	v68Test: testStorage.buyBackTbcdFraction['v68'],
	v85Dev: devStorage.buyBackTbcdFraction['v85'],
}
