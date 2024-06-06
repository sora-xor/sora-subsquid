import * as productionStorage from '../../production/transaction-payment/storage'
import * as stageStorage from '../../stage/transaction-payment/storage'
import * as testStorage from '../../test/transaction-payment/storage'
import * as devStorage from '../../dev/transaction-payment/storage'


export const nextFeeMultiplier = {
	name: 'TransactionPayment.NextFeeMultiplier',
	v1: productionStorage.nextFeeMultiplier['v1'],
	v1Stage: stageStorage.nextFeeMultiplier['v1'],
	v1Test: testStorage.nextFeeMultiplier['v1'],
	v85Dev: devStorage.nextFeeMultiplier['v85'],
}

export const storageVersion = {
	name: 'TransactionPayment.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v1Stage: stageStorage.storageVersion['v1'],
	v42Stage: stageStorage.storageVersion['v42'],
	v1Test: testStorage.storageVersion['v1'],
	v42Test: testStorage.storageVersion['v42'],
	v85Dev: devStorage.storageVersion['v85'],
}
