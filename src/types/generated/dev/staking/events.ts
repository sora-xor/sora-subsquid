import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const eraPaid =  {
    name: 'Staking.EraPaid',
    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    v85: new EventType(
        'Staking.EraPaid',
        sts.struct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
        })
    ),
}

export const rewarded =  {
    name: 'Staking.Rewarded',
    /**
     * The nominator has been rewarded by this amount.
     */
    v85: new EventType(
        'Staking.Rewarded',
        sts.struct({
            stash: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Staking.Slashed',
    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    v85: new EventType(
        'Staking.Slashed',
        sts.struct({
            staker: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashReported =  {
    name: 'Staking.SlashReported',
    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    v85: new EventType(
        'Staking.SlashReported',
        sts.struct({
            validator: v85.AccountId32,
            fraction: v85.Perbill,
            slashEra: sts.number(),
        })
    ),
}

export const oldSlashingReportDiscarded =  {
    name: 'Staking.OldSlashingReportDiscarded',
    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    v85: new EventType(
        'Staking.OldSlashingReportDiscarded',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}

export const stakersElected =  {
    name: 'Staking.StakersElected',
    /**
     * A new set of stakers was elected.
     */
    v85: new EventType(
        'Staking.StakersElected',
        sts.unit()
    ),
}

export const bonded =  {
    name: 'Staking.Bonded',
    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    v85: new EventType(
        'Staking.Bonded',
        sts.struct({
            stash: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'Staking.Unbonded',
    /**
     * An account has unbonded this amount.
     */
    v85: new EventType(
        'Staking.Unbonded',
        sts.struct({
            stash: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Staking.Withdrawn',
    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    v85: new EventType(
        'Staking.Withdrawn',
        sts.struct({
            stash: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const kicked =  {
    name: 'Staking.Kicked',
    /**
     * A nominator has been kicked from a validator.
     */
    v85: new EventType(
        'Staking.Kicked',
        sts.struct({
            nominator: v85.AccountId32,
            stash: v85.AccountId32,
        })
    ),
}

export const stakingElectionFailed =  {
    name: 'Staking.StakingElectionFailed',
    /**
     * The election failed. No new era is planned.
     */
    v85: new EventType(
        'Staking.StakingElectionFailed',
        sts.unit()
    ),
}

export const chilled =  {
    name: 'Staking.Chilled',
    /**
     * An account has stopped participating as either a validator or nominator.
     */
    v85: new EventType(
        'Staking.Chilled',
        sts.struct({
            stash: v85.AccountId32,
        })
    ),
}

export const payoutStarted =  {
    name: 'Staking.PayoutStarted',
    /**
     * The stakers' rewards are getting paid.
     */
    v85: new EventType(
        'Staking.PayoutStarted',
        sts.struct({
            eraIndex: sts.number(),
            validatorStash: v85.AccountId32,
        })
    ),
}

export const validatorPrefsSet =  {
    name: 'Staking.ValidatorPrefsSet',
    /**
     * A validator has set their preferences.
     */
    v85: new EventType(
        'Staking.ValidatorPrefsSet',
        sts.struct({
            stash: v85.AccountId32,
            prefs: v85.ValidatorPrefs,
        })
    ),
}

export const forceEra =  {
    name: 'Staking.ForceEra',
    /**
     * A new force era mode was set.
     */
    v85: new EventType(
        'Staking.ForceEra',
        sts.struct({
            mode: v85.Forcing,
        })
    ),
}
