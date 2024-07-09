import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const migrated =  {
    name: 'IrohaMigration.Migrated',
    /**
     * Migrated. [source, target]
     */
    v85: new EventType(
        'IrohaMigration.Migrated',
        sts.tuple([sts.string(), v85.AccountId32])
    ),
}
