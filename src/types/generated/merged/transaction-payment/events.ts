import * as productionEvents from '../../production/transaction-payment/events'
import * as stageEvents from '../../stage/transaction-payment/events'
import * as testEvents from '../../test/transaction-payment/events'
import * as devEvents from '../../dev/transaction-payment/events'


export const transactionFeePaid = {
	name: 'TransactionPayment.TransactionFeePaid',
	v53: productionEvents.transactionFeePaid['v53'],
	v53Stage: stageEvents.transactionFeePaid['v53'],
	v53Test: testEvents.transactionFeePaid['v53'],
	v85Dev: devEvents.transactionFeePaid['v85'],
}
