import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const enableOracle =  {
    name: 'OracleProxy.enable_oracle',
    /**
     * Enables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be enabled
     */
    v85: new CallType(
        'OracleProxy.enable_oracle',
        sts.struct({
            oracle: v85.Oracle,
        })
    ),
}

export const disableOracle =  {
    name: 'OracleProxy.disable_oracle',
    /**
     * Disables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be disabled
     */
    v85: new CallType(
        'OracleProxy.disable_oracle',
        sts.struct({
            oracle: v85.Oracle,
        })
    ),
}
