import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const endowed =  {
    name: 'Tokens.Endowed',
    /**
     * An account was created with some free balance.
     */
    v85: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Tokens.DustLost',
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v85: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Tokens.Transfer',
    /**
     * Transfer succeeded.
     */
    v85: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v85.AssetId32,
            from: v85.AccountId32,
            to: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Tokens.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v85: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Tokens.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v85: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Tokens.ReserveRepatriated',
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v85: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v85.AssetId32,
            from: v85.AccountId32,
            to: v85.AccountId32,
            amount: sts.bigint(),
            status: v85.BalanceStatus,
        })
    ),
}

export const balanceSet =  {
    name: 'Tokens.BalanceSet',
    /**
     * A balance was set by root.
     */
    v85: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const totalIssuanceSet =  {
    name: 'Tokens.TotalIssuanceSet',
    /**
     * The total issuance of an currency has been set
     */
    v85: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Tokens.Withdrawn',
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v85: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Tokens.Slashed',
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v85: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
}

export const deposited =  {
    name: 'Tokens.Deposited',
    /**
     * Deposited some balance into an account
     */
    v85: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockSet =  {
    name: 'Tokens.LockSet',
    /**
     * Some funds are locked
     */
    v85: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockRemoved =  {
    name: 'Tokens.LockRemoved',
    /**
     * Some locked funds were unlocked
     */
    v85: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
        })
    ),
}

export const locked =  {
    name: 'Tokens.Locked',
    /**
     * Some free balance was locked.
     */
    v85: new EventType(
        'Tokens.Locked',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Tokens.Unlocked',
    /**
     * Some locked balance was freed.
     */
    v85: new EventType(
        'Tokens.Unlocked',
        sts.struct({
            currencyId: v85.AssetId32,
            who: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
