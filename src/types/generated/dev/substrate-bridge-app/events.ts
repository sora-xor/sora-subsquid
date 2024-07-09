import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const burned =  {
    name: 'SubstrateBridgeApp.Burned',
    v85: new EventType(
        'SubstrateBridgeApp.Burned',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            sender: v85.AccountId32,
            recipient: v85.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'SubstrateBridgeApp.Minted',
    v85: new EventType(
        'SubstrateBridgeApp.Minted',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            sender: v85.GenericAccount,
            recipient: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const failedToMint =  {
    name: 'SubstrateBridgeApp.FailedToMint',
    v85: new EventType(
        'SubstrateBridgeApp.FailedToMint',
        sts.tuple([v85.H256, v85.DispatchError])
    ),
}

export const assetRegistrationProceed =  {
    name: 'SubstrateBridgeApp.AssetRegistrationProceed',
    v85: new EventType(
        'SubstrateBridgeApp.AssetRegistrationProceed',
        v85.AssetId32
    ),
}

export const assetRegistrationFinalized =  {
    name: 'SubstrateBridgeApp.AssetRegistrationFinalized',
    v85: new EventType(
        'SubstrateBridgeApp.AssetRegistrationFinalized',
        v85.AssetId32
    ),
}
