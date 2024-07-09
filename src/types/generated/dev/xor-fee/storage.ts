import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const xorToVal =  {
    /**
     *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
     */
    v85: new StorageType('XorFee.XorToVal', 'Default', [], sts.bigint()) as XorToValV85,
}

/**
 *  The amount of XOR to be reminted and exchanged for VAL at the end of the session
 */
export interface XorToValV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const multiplier =  {
    v85: new StorageType('XorFee.Multiplier', 'Default', [], v85.FixedU128) as MultiplierV85,
}

export interface MultiplierV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedU128
    get(block: Block): Promise<(v85.FixedU128 | undefined)>
}
