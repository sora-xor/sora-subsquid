import { AnyEntityItem, Block, Context } from '../types'

export class UnsupportedSpecError extends Error {
    constructor(ctx: Context, block: Block, { kind, name }: { kind: 'call' | 'event' | 'storage', name: string }) {
		const blockHeight = block.header.height
		let specHash: string | undefined
		switch (kind) {
			case 'call':
				specHash = ctx._chain.getCallHash(name)
				break
			case 'event':
				specHash = ctx._chain.getEventHash(name)
				break
			case 'storage':
				// TODO: check if this is correct
				specHash = ctx._chain.getStorageItemTypeHash('', '')
				break
		}	

		if (!specHash) super(`[${blockHeight}] There is no hash for ${name} ${kind}`)

        super(`[${blockHeight}] Unsupported spec ${specHash} for ${name} ${kind}`)
    }
}

const getCannotFindEntityErrorMessage = (block: Block, kind: AnyEntityItem['kind'], extrinsicHash: string, entityNames?: string | string[]): string => {
	const blockHeight = block.header.height

	if (!entityNames) {
		return `[${blockHeight}] Cannot find any ${kind}s with extrinsic hash ${extrinsicHash}`
	} else if (Array.isArray(entityNames)) {
		return `[${blockHeight}] Cannot find ${kind}s ${entityNames.join(', ')} with extrinsic hash ${extrinsicHash}`
	} else {
		return `[${blockHeight}] Cannot find ${kind} ${entityNames} with extrinsic hash ${extrinsicHash}`
	}
}

export class CannotFindCallError extends Error {
	constructor(block: Block, extrinsicHash: string, callNames?: string | string[]) {
		super(getCannotFindEntityErrorMessage(block, 'call', extrinsicHash, callNames))
	}
}

export class CannotFindEventError extends Error {
	constructor(block: Block, extrinsicHash: string, eventNames: string | string[]) {
		super(getCannotFindEntityErrorMessage(block, 'event', extrinsicHash, eventNames))
	}
}
