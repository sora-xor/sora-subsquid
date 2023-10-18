import { Account } from '../model'
import { BlockContext } from '../types'

import { networkSnapshotsStorage } from './network'

export const getAccountEntity = async (ctx: BlockContext, accountAddress: string) => {
	let account = await ctx.store.get(Account, accountAddress)

	if (!account) {
		account = new Account()
		account.id = accountAddress
		account.updatedAtBlock = ctx.block.header.height
		ctx.store.save(account)
		await networkSnapshotsStorage.updateAccountsStats(ctx)
	}

	return account
}