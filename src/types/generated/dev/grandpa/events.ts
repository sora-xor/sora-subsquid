import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const newAuthorities =  {
    name: 'Grandpa.NewAuthorities',
    /**
     * New authority set has been applied.
     */
    v85: new EventType(
        'Grandpa.NewAuthorities',
        sts.struct({
            authoritySet: sts.array(() => sts.tuple(() => [v85.Public, sts.bigint()])),
        })
    ),
}

export const paused =  {
    name: 'Grandpa.Paused',
    /**
     * Current authority set has been paused.
     */
    v85: new EventType(
        'Grandpa.Paused',
        sts.unit()
    ),
}

export const resumed =  {
    name: 'Grandpa.Resumed',
    /**
     * Current authority set has been resumed.
     */
    v85: new EventType(
        'Grandpa.Resumed',
        sts.unit()
    ),
}
