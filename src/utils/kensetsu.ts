import { VaultAccount } from "../model"
import { BlockContext } from "../types"

import { getUtilsLog } from "./logs"

export const getVaultAccountEntity = async (ctx: BlockContext, accountAddress: string) => {
	let account = await ctx.store.get(VaultAccount, accountAddress)

	if (account) {
		getUtilsLog(ctx).debug({ address: accountAddress }, 'VaultAccount found in store')
	} else {
		account = new VaultAccount({
			id: accountAddress
		})
		await ctx.store.save(account)
		getUtilsLog(ctx).debug({ address: accountAddress }, 'VaultAccount created')
	}

	return account
};