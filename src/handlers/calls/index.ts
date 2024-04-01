import { BlockContext, Call } from '../../types'
import { getCallHandlerLog, incrementLogCounter } from '../../utils/logs'
import { throttleHandler } from '../../utils/throttleHandler'

export async function anyCallHandler(ctx: BlockContext, call: Call<any>): Promise<void> {
	await throttleHandler(async () => {
		if (['Timestamp.set'].includes(call.name)) return
		incrementLogCounter()
		getCallHandlerLog(ctx, call).debug('Found call in block')
	})
}
