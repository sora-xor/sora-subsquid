import { BlockContext, Event } from '../../types'
import { getEventHandlerLog, incrementLogCounter } from '../../utils/logs'
import { throttleHandler } from '../../utils/throttleHandler'

export async function anyEventHandler(ctx: BlockContext, event: Event<any>): Promise<void> {
	await throttleHandler(async () => {
		if (['Session'].includes(event.name.split('.')[0])) return
		incrementLogCounter()
		getEventHandlerLog(ctx, event).debug('Found event in block')
	})
}
