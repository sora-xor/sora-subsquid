import { Account } from '../model'
import { Context } from '../processor'

import { networkSnapshotsStorage } from './network'

export const getOrCreateAccountEntity = async (ctx: Context, accountAddress: string, timestamp: number) => {
  let account = await ctx.store.get(Account, accountAddress)

  if (!account) {
      account = new Account()
      account.id = accountAddress
      ctx.store.save(account)
      await networkSnapshotsStorage.updateAccountsStats(ctx, timestamp)
  }

  return account
}