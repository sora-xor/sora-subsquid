import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v71 from '../v71'

export const enabledSourceTypes =  {
    v1: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v1.LiquiditySourceType)) as EnabledSourceTypesV1,
    v71: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v71.LiquiditySourceType)) as EnabledSourceTypesV71,
}

export interface EnabledSourceTypesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.LiquiditySourceType[]
    get(block: Block): Promise<(v1.LiquiditySourceType[] | undefined)>
}

export interface EnabledSourceTypesV71  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v71.LiquiditySourceType[]
    get(block: Block): Promise<(v71.LiquiditySourceType[] | undefined)>
}
