import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const oracleEnabled =  {
    name: 'OracleProxy.OracleEnabled',
    /**
     * Oracle was successfully enabled. [oracle]
     */
    v85: new EventType(
        'OracleProxy.OracleEnabled',
        v85.Oracle
    ),
}

export const oracleDisabled =  {
    name: 'OracleProxy.OracleDisabled',
    /**
     * Oracle was successfully disabled. [oracle]
     */
    v85: new EventType(
        'OracleProxy.OracleDisabled',
        v85.Oracle
    ),
}
