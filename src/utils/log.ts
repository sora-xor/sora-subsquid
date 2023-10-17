import { BlockContext, CallItem, EventItem } from '../types'

function toPascalCase(str: string): string {
    return str
        .split('.')
        .map(segment => {
            return segment
                .replace(/([a-z])([A-Z])/g, '$1 $2')  // Separate camelCase
                .replace(/[_\W]+/g, ' ')  // Replace underscores and non-alphanumeric characters with spaces
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        })
        .join('.')
        .toLowerCase()  // Convert the whole string to lowercase
        .replace(/(^|\.)\w/g, match => match.toUpperCase());  // Capitalize the first character of each segment
}

export function debug(ctx: BlockContext, module: string, message: string) {
	ctx.log.debug(`[${ctx.block.header.height}][${module}] ${message}`)
}

export function logCallHandler(ctx: BlockContext, callItem: CallItem<any>) {
	const extrinsicHash = callItem.extrinsic.hash
	const extrinsicHashString = extrinsicHash ? ` found within the extrinsic '${extrinsicHash}'` : ''
	debug(ctx, 'CallHandler', `Processing the '${toPascalCase(callItem.name)}' call${extrinsicHashString}`)
}

export function logEventHandler(ctx: BlockContext, event: EventItem<any>) {
	const extrinsicHash = event.event.extrinsic?.hash
	const extrinsicHashString = extrinsicHash ? ` found within the extrinsic '${extrinsicHash}'` : ''
	debug(ctx, 'EventHandler', `Processing the '${toPascalCase(event.name)}' event${extrinsicHashString}`)
}