import { Account } from '../model'
import { Block, Context } from '../processor'

import { networkSnapshotsStorage } from './network'

export const getOrCreateAccountEntity = async (ctx: Context, block: Block, accountAddress: string) => {
	let account = await ctx.store.get(Account, accountAddress)

	if (!account) {
		account = new Account()
		account.id = accountAddress
		account.updatedAtBlock = block.header.height
		ctx.store.save(account)
		await networkSnapshotsStorage.updateAccountsStats(ctx, block)
	}

	return account
}