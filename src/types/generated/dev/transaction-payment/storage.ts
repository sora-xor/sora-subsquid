import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const nextFeeMultiplier =  {
    v85: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v85.FixedU128) as NextFeeMultiplierV85,
}

export interface NextFeeMultiplierV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.FixedU128
    get(block: Block): Promise<(v85.FixedU128 | undefined)>
}

export const storageVersion =  {
    v85: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v85.Releases) as StorageVersionV85,
}

export interface StorageVersionV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.Releases
    get(block: Block): Promise<(v85.Releases | undefined)>
}
