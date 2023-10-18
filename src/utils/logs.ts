import { Block, BlockContext, CallItem, Context, EventItem } from '../types'

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

export function getLog(ctx: Context & { block: Block }, module: string | null = null, attrs: Record<string, any> = {}) {
	const blockHeight = ctx.block.header.height
	const attributes: any = { blockHeight, ...attrs }
	if (module) {
		attributes['module'] = module
	}
	return ctx.log.child(attributes)
}

export function getCallHandlerLog(ctx: BlockContext, callItem: CallItem<any>, message: string = '', attrs: Record<string, any> = {}) {
	const extrinsicHash = callItem.extrinsic.hash
	const attributes = { extrinsicHash, callName: toPascalCase(callItem.name), ...attrs }
	return getLog(ctx, 'CallHandler', attributes)
}

export function getEventHandlerLog(ctx: BlockContext, eventItem: EventItem<any>, message: string = '', attrs: Record<string, any> = {}) {
	const extrinsicHash = eventItem.event.extrinsic?.hash ?? null
	const attributes: any = { ...attrs, eventName: toPascalCase(eventItem.name) }
	if (extrinsicHash) {
		attributes['extrinsicHash'] = extrinsicHash
	}
	return getLog(ctx, 'EventHandler', attributes)
}

export function getInitializeAssetsLog(ctx: BlockContext) {
	return getLog(ctx, 'InitializeAssets')
}

export function getInitializePoolsLog(ctx: BlockContext) {
	return getLog(ctx, 'InitializePools')
}

export function getSyncModelsLog(ctx: BlockContext) {
	return getLog(ctx, 'SyncModels')
}

export function getSyncPricesLog(ctx: BlockContext) {
	return getLog(ctx, 'SyncPrices')
}

export function getAssetStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'AssetStorage')
}

export function getAssetSnapshotsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'AssetSnapshotsStorage')
}

export function getNetworkSnapshotsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'NetworkSnapshotsStorage')
}

export function getPoolsStorageLog(ctx: BlockContext) {
	return getLog(ctx, 'PoolsStorage')
}

export function logStartProcessingCall(ctx: BlockContext, callItem: CallItem<any>) {
	return getCallHandlerLog(ctx, callItem).debug('Start processing the call')
}

export function logStartProcessingEvent(ctx: BlockContext, eventItem: EventItem<any>) {
	return getEventHandlerLog(ctx, eventItem).debug('Start processing the event')
}