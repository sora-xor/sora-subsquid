import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v77 from '../v77'

export const burned =  {
    name: 'SubstrateBridgeApp.Burned',
    v77: new EventType(
        'SubstrateBridgeApp.Burned',
        sts.struct({
            networkId: v77.SubNetworkId,
            assetId: v77.AssetId32,
            sender: v77.AccountId32,
            recipient: v77.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'SubstrateBridgeApp.Minted',
    v77: new EventType(
        'SubstrateBridgeApp.Minted',
        sts.struct({
            networkId: v77.SubNetworkId,
            assetId: v77.AssetId32,
            sender: v77.GenericAccount,
            recipient: v77.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const failedToMint =  {
    name: 'SubstrateBridgeApp.FailedToMint',
    v77: new EventType(
        'SubstrateBridgeApp.FailedToMint',
        sts.tuple([v77.H256, v77.DispatchError])
    ),
}

export const assetRegistrationProceed =  {
    name: 'SubstrateBridgeApp.AssetRegistrationProceed',
    v77: new EventType(
        'SubstrateBridgeApp.AssetRegistrationProceed',
        v77.AssetId32
    ),
}

export const assetRegistrationFinalized =  {
    name: 'SubstrateBridgeApp.AssetRegistrationFinalized',
    v77: new EventType(
        'SubstrateBridgeApp.AssetRegistrationFinalized',
        v77.AssetId32
    ),
}
