import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enabledSourceTypes =  {
    v85: new StorageType('DEXAPI.EnabledSourceTypes', 'Default', [], sts.array(() => v85.LiquiditySourceType)) as EnabledSourceTypesV85,
}

export interface EnabledSourceTypesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v85.LiquiditySourceType[]
    get(block: Block): Promise<(v85.LiquiditySourceType[] | undefined)>
}
