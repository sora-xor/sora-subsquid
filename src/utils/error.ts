import { Block } from '../processor'

export function unsupportedSpecError(block: Block) {
	const blockHeight = block.header.height
	return new Error(`[${blockHeight}] Unsupported spec`)
}