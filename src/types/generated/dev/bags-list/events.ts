import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const rebagged =  {
    name: 'BagsList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    v85: new EventType(
        'BagsList.Rebagged',
        sts.struct({
            who: v85.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}

export const scoreUpdated =  {
    name: 'BagsList.ScoreUpdated',
    /**
     * Updated the score of some account to the given amount.
     */
    v85: new EventType(
        'BagsList.ScoreUpdated',
        sts.struct({
            who: v85.AccountId32,
            newScore: sts.bigint(),
        })
    ),
}
