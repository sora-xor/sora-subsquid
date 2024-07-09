import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const updateMultiplier =  {
    name: 'XorFee.update_multiplier',
    /**
     * Update the multiplier for weight -> fee conversion.
     */
    v85: new CallType(
        'XorFee.update_multiplier',
        sts.struct({
            newMultiplier: v85.FixedU128,
        })
    ),
}
