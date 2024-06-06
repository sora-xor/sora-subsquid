import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const voted =  {
    name: 'HermesGovernancePlatform.Voted',
    /**
     * Voting [who, poll, option]
     */
    v85: new EventType(
        'HermesGovernancePlatform.Voted',
        sts.tuple([v85.AccountId32, v85.H256, sts.bytes()])
    ),
}

export const created =  {
    name: 'HermesGovernancePlatform.Created',
    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    v85: new EventType(
        'HermesGovernancePlatform.Created',
        sts.tuple([v85.AccountId32, v85.BoundedString, sts.bigint(), sts.bigint()])
    ),
}

export const voterFundsWithdrawn =  {
    name: 'HermesGovernancePlatform.VoterFundsWithdrawn',
    /**
     * Voter Funds Withdrawn [who, balance]
     */
    v85: new EventType(
        'HermesGovernancePlatform.VoterFundsWithdrawn',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}

export const creatorFundsWithdrawn =  {
    name: 'HermesGovernancePlatform.CreatorFundsWithdrawn',
    /**
     * Creator Funds Withdrawn [who, balance]
     */
    v85: new EventType(
        'HermesGovernancePlatform.CreatorFundsWithdrawn',
        sts.tuple([v85.AccountId32, sts.bigint()])
    ),
}

export const minimumHermesForVotingChanged =  {
    name: 'HermesGovernancePlatform.MinimumHermesForVotingChanged',
    /**
     * Change minimum Hermes for voting [balance]
     */
    v85: new EventType(
        'HermesGovernancePlatform.MinimumHermesForVotingChanged',
        sts.bigint()
    ),
}

export const minimumHermesForCreatingPollChanged =  {
    name: 'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged',
    /**
     * Change minimum Hermes for creating poll [balance]
     */
    v85: new EventType(
        'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged',
        sts.bigint()
    ),
}
