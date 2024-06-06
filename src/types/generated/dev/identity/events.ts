import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const identitySet =  {
    name: 'Identity.IdentitySet',
    /**
     * A name was set or reset (which will remove all judgements).
     */
    v85: new EventType(
        'Identity.IdentitySet',
        sts.struct({
            who: v85.AccountId32,
        })
    ),
}

export const identityCleared =  {
    name: 'Identity.IdentityCleared',
    /**
     * A name was cleared, and the given balance returned.
     */
    v85: new EventType(
        'Identity.IdentityCleared',
        sts.struct({
            who: v85.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const identityKilled =  {
    name: 'Identity.IdentityKilled',
    /**
     * A name was removed and the given balance slashed.
     */
    v85: new EventType(
        'Identity.IdentityKilled',
        sts.struct({
            who: v85.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const judgementRequested =  {
    name: 'Identity.JudgementRequested',
    /**
     * A judgement was asked from a registrar.
     */
    v85: new EventType(
        'Identity.JudgementRequested',
        sts.struct({
            who: v85.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementUnrequested =  {
    name: 'Identity.JudgementUnrequested',
    /**
     * A judgement request was retracted.
     */
    v85: new EventType(
        'Identity.JudgementUnrequested',
        sts.struct({
            who: v85.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const judgementGiven =  {
    name: 'Identity.JudgementGiven',
    /**
     * A judgement was given by a registrar.
     */
    v85: new EventType(
        'Identity.JudgementGiven',
        sts.struct({
            target: v85.AccountId32,
            registrarIndex: sts.number(),
        })
    ),
}

export const registrarAdded =  {
    name: 'Identity.RegistrarAdded',
    /**
     * A registrar was added.
     */
    v85: new EventType(
        'Identity.RegistrarAdded',
        sts.struct({
            registrarIndex: sts.number(),
        })
    ),
}

export const subIdentityAdded =  {
    name: 'Identity.SubIdentityAdded',
    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    v85: new EventType(
        'Identity.SubIdentityAdded',
        sts.struct({
            sub: v85.AccountId32,
            main: v85.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRemoved =  {
    name: 'Identity.SubIdentityRemoved',
    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    v85: new EventType(
        'Identity.SubIdentityRemoved',
        sts.struct({
            sub: v85.AccountId32,
            main: v85.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const subIdentityRevoked =  {
    name: 'Identity.SubIdentityRevoked',
    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    v85: new EventType(
        'Identity.SubIdentityRevoked',
        sts.struct({
            sub: v85.AccountId32,
            main: v85.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
