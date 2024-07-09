import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const transfer =  {
    name: 'Faucet.transfer',
    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    v85: new CallType(
        'Faucet.transfer',
        sts.struct({
            assetId: v85.AssetId32,
            target: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const resetRewards =  {
    name: 'Faucet.reset_rewards',
    v85: new CallType(
        'Faucet.reset_rewards',
        sts.unit()
    ),
}

export const updateLimit =  {
    name: 'Faucet.update_limit',
    v85: new CallType(
        'Faucet.update_limit',
        sts.struct({
            newLimit: sts.bigint(),
        })
    ),
}
