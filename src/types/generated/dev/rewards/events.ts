import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const claimed =  {
    name: 'Rewards.Claimed',
    /**
     * The account has claimed their rewards. [account]
     */
    v85: new EventType(
        'Rewards.Claimed',
        v85.AccountId32
    ),
}

export const migrationCompleted =  {
    name: 'Rewards.MigrationCompleted',
    /**
     * Storage migration to version 1.2.0 completed
     */
    v85: new EventType(
        'Rewards.MigrationCompleted',
        sts.unit()
    ),
}
