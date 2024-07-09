import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const burned =  {
    name: 'ParachainBridgeApp.Burned',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v85: new EventType(
        'ParachainBridgeApp.Burned',
        sts.tuple([v85.SubNetworkId, v85.AssetId32, v85.AccountId32, v85.VersionedMultiLocation, sts.bigint()])
    ),
}

export const minted =  {
    name: 'ParachainBridgeApp.Minted',
    /**
     * [network_id, asset_id, sender, recepient, amount]
     */
    v85: new EventType(
        'ParachainBridgeApp.Minted',
        sts.tuple([v85.SubNetworkId, v85.AssetId32, sts.option(() => v85.VersionedMultiLocation), v85.AccountId32, sts.bigint()])
    ),
}
