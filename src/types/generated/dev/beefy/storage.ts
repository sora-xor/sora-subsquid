import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const authorities =  {
    /**
     *  The current authorities set
     */
    v85: new StorageType('Beefy.Authorities', 'Default', [], sts.array(() => sts.bytes())) as AuthoritiesV85,
}

/**
 *  The current authorities set
 */
export interface AuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const validatorSetId =  {
    /**
     *  The current validator set id
     */
    v85: new StorageType('Beefy.ValidatorSetId', 'Default', [], sts.bigint()) as ValidatorSetIdV85,
}

/**
 *  The current validator set id
 */
export interface ValidatorSetIdV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Authorities set scheduled to be used with the next session
     */
    v85: new StorageType('Beefy.NextAuthorities', 'Default', [], sts.array(() => sts.bytes())) as NextAuthoritiesV85,
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface NextAuthoritiesV85  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}
