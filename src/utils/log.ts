import { Block, CallItem, Context, EventItem } from '../types'

export function logCallHandler(ctx: Context, block: Block, callItem: CallItem<any>) {
	ctx.log.debug(`[${block.header.height}][CallHandler] Start processing ${callItem.name} call`)
}

export function logEventHandler(ctx: Context, block: Block, event: EventItem<any>) {
	ctx.log.debug(`[${block.header.height}][EventHandler] Start processing ${event.name} event`)
}