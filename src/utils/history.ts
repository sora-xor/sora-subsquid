import { ExecutionResult, ExecutionError, HistoryElement, HistoryElementCall, HistoryElementType } from '../model'
import { Address, AssetAmount, BlockContext, Call, Event } from '../types'
import { getAccountEntity } from './account'
import { networkSnapshotsStorage } from './network'
import { assertDefined, getBlockTimestamp, getCallId, getEventId, shouldUpdate, toAddress, toCamelCase, toPascalCase } from './index'
import { nToU8a } from '@polkadot/util'
import { toJSON } from '@subsquid/util-internal-json'
import { findEventByExtrinsicHash } from './events'
import { getEventData } from './entities'
import { getUtilsLog } from './logs'
import { events } from '../types/generated/merged'

const INCOMING_TRANSFER_METHODS = ['transfer', 'xorlessTransfer', 'swapTransfer', 'swapTransferBatch']

type EntityItem = {
	kind: 'call',
	entity: Call<any>,
} | {
	kind: 'event',
	entity: Event<any>,
}

class HistoryElementsStorage {
    public readonly maxSize = 1000

    private elements!: HistoryElement[]
    private calls!: HistoryElementCall[]
    private accounts!: Map<Address, string>

    constructor() {
        this.clear()
    }

    get size(): number {
        return this.elements.length
    }

    private clear(): void {
        this.elements = []
        this.calls = []
        this.accounts = new Map()
    }

    private async checkSync(ctx: BlockContext): Promise<void> {
        if (this.maxSize <= this.size || shouldUpdate(ctx, 60)) {
            await this.sync(ctx)
        }
    }

    private async updateElements(ctx: BlockContext) {
		getUtilsLog(ctx).debug(`History Elements saved: ${this.elements.length}`)
        if (this.elements.length) {
			await Promise.all(this.elements.map(element => {
				return ctx.store.save(element)
			}))
            getUtilsLog(ctx).debug(`History Elements saved: ${this.elements.length}`)
        }
    }

    private async updateCalls(ctx: BlockContext) {
        if (this.calls.length) {
			await Promise.all(this.calls.map(call => {
				return ctx.store.save(call)
			}))
            getUtilsLog(ctx).debug(`History Elements Calls saved: ${this.calls.length}`)
        }
    }

    private async updateAccounts(ctx: BlockContext) {
        const accounts = []

        for (const [accountId, historyId] of this.accounts.entries()) {
            const account = await getAccountEntity(ctx, accountId)
			const historyElement = this.elements.find(element => element.id === historyId)
			assertDefined(historyElement)
            account.latestHistoryElement = historyElement
            accounts.push(account)
        }

        if (accounts.length) {
			await Promise.all(accounts.map(account => {
				return ctx.store.save(account)
			}))
            getUtilsLog(ctx).debug(`Accounts updated: ${accounts.length}`)
        }
    }

    public async sync(ctx: BlockContext): Promise<void> {
		getUtilsLog(ctx).debug(`sync`)
        await this.updateElements(ctx)
        await this.updateCalls(ctx)
        await this.updateAccounts(ctx)

        this.clear()
    }

    public async add(
        ctx: BlockContext,
        historyElement: HistoryElement,
        calls: HistoryElementCall[] = [],
        accountsAddresses: Address[] = [],
    ): Promise<void> {
		getUtilsLog(ctx).debug(`add`)
        this.elements.push(historyElement)
        this.calls.push(...calls)
        accountsAddresses.forEach((accountId) => this.accounts.set(accountId, historyElement.id))

        await this.checkSync(ctx)
    }
}
export const historyElementsStorage = new HistoryElementsStorage()

export const getCallNetworkFee = (ctx: BlockContext, call: Call<any>): AssetAmount => {
	assertDefined(call.extrinsic)
	const event = findEventByExtrinsicHash(ctx, call.extrinsic.hash, ['XorFee.FeeWithdrawn'])

	if (event) {
		const eventData = getEventData(ctx, events.xorFee.feeWithdrawn, event)

		return eventData[1] as AssetAmount
	}
	return 0n as AssetAmount
}

export const createHistoryElement = async (
	ctx: BlockContext,
	{ kind, entity }: EntityItem,
	data?: {},
	calls?: HistoryElementCall[], 
	address?: Address,
): Promise<HistoryElement> => {
	const historyElement = new HistoryElement()

	const extrinsic = entity.extrinsic

	historyElement.id = kind === 'call' ? getCallId(ctx, entity) : getEventId(ctx, entity)
	historyElement.type = kind === 'call' ? HistoryElementType.CALL : HistoryElementType.EVENT
	historyElement.blockHeight = ctx.block.header.height
	historyElement.blockHash = ctx.block.header.hash.toString()
	historyElement.module = toCamelCase(entity.name.split('.')[0])
	historyElement.method = kind === 'call' ? toCamelCase(entity.name.split('.')[1]) : toPascalCase(entity.name.split('.')[1])
	historyElement.name = historyElement.module + '.' + historyElement.method
	historyElement.updatedAtBlock = ctx.block.header.height
	historyElement.callNames = []
	historyElement.networkFee = kind === 'call' ? getCallNetworkFee(ctx, entity).toString() : '0'
	historyElement.timestamp = getBlockTimestamp(ctx)
	if (address) {
		historyElement.address = address
	} else if (kind === 'call') {
		assertDefined(extrinsic?.signature)
		historyElement.address = toAddress(extrinsic.signature.address as string)
	} else {
		historyElement.address = getEventId(ctx, entity)
	}

	const success = extrinsic?.success

	if (success) {
		historyElement.execution = new ExecutionResult({
			success,
		})
	} else if (extrinsic) {
		// TODO: change 'any' type to something better
		const extrinsicError = extrinsic.error as any
		const error =
			extrinsicError.__kind === 'Module'
				? new ExecutionError({
						moduleErrorId: nToU8a(extrinsicError.value.error).at(-1),
						moduleErrorIndex: extrinsicError.value.index,
				  })
				: new ExecutionError({
						nonModuleErrorMessage: JSON.stringify(extrinsicError),
				  })
		historyElement.execution = new ExecutionResult({
			success,
			error,
		})
	}

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data)
	}

    if (calls) {
        await addCallsToHistoryElement(ctx, historyElement, calls);
    }

    const accountsAddresses = getHistoryElementAccountAddresses(ctx, historyElement);

	await historyElementsStorage.add(
        ctx,
        historyElement,
        calls,
        accountsAddresses
    )

    await updateHistoryElementStats(ctx);

	// TODO: return 'name' to the log
	const {
		id,
		type,
		blockHash,
		module,
		method,
		networkFee,
		timestamp,
		updatedAtBlock,
		execution
	} = historyElement

	getUtilsLog(ctx).debug({
		id,
		type,
		blockHash,
		module,
		method,
		networkFee,
		timestamp,
		updatedAtBlock,
		executionSuccess: execution.success + ''
	}, 'Created history element')

	return historyElement
}

export const createCallHistoryElement = async (
	ctx: BlockContext,
	call: Call<any>,
	data?: {},
) => {
	return createHistoryElement(ctx, { kind: 'call', entity: call }, data)
}

export const createEventHistoryElement = async (
	ctx: BlockContext,
	event: Event<any>,
	address: Address,
	data?: {},
	calls?: HistoryElementCall[]
) => {
	return createHistoryElement(ctx, { kind: 'event', entity: event }, data, calls, address)
}

export const addDataToHistoryElement = async (ctx: BlockContext, historyElement: HistoryElement, data: {}) => {
	historyElement.data = toJSON(data)
	if ('to' in data && typeof data.to === 'string') {
		historyElement.dataTo = data.to
	}
	if ('from' in data && typeof data.from === 'string') {
		historyElement.dataFrom = data.from
	}
	historyElement.updatedAtBlock = ctx.block.header.height

	await ctx.store.save(historyElement)
	getUtilsLog(ctx).debug({
		historyElementId: historyElement.id,
		data: JSON.stringify(data, (key, value) =>
			typeof value === 'bigint'
				? value.toString()
				: value
		).replaceAll('"', '')
	}, 'Updated history element with data')
}

export const addCallsToHistoryElement = async (ctx: BlockContext, historyElement: HistoryElement, calls: HistoryElementCall[]) => {
	historyElement.callNames = calls.map((call) => call.module + '.' + call.method)
	historyElement.updatedAtBlock = ctx.block.header.height

	await ctx.store.save(historyElement)
	await ctx.store.save(calls)
}

const getHistoryElementAccountAddresses = (ctx: BlockContext, history: HistoryElement) => {
    const addresses = [history.address as Address]

    if (
        INCOMING_TRANSFER_METHODS.includes(history.method) &&
        history.dataTo
    ) {
        addresses.push(history.dataTo as Address)
    }

    const accountAddresses = [...new Set(addresses)]

    getUtilsLog(ctx).debug({ historyId: history.id, addresses: accountAddresses.join(', ') }, 'addresses')

    return accountAddresses
}

export const updateHistoryElementStats = async (ctx: BlockContext) => {
	await networkSnapshotsStorage.updateTransactionsStats(ctx)
  
	getUtilsLog(ctx).debug('Updated history element stats')
}
