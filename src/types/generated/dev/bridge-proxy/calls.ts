import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const burn =  {
    name: 'BridgeProxy.burn',
    v85: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v85.GenericNetworkId,
            assetId: v85.AssetId32,
            recipient: v85.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const addLimitedAsset =  {
    name: 'BridgeProxy.add_limited_asset',
    v85: new CallType(
        'BridgeProxy.add_limited_asset',
        sts.struct({
            assetId: v85.AssetId32,
        })
    ),
}

export const removeLimitedAsset =  {
    name: 'BridgeProxy.remove_limited_asset',
    v85: new CallType(
        'BridgeProxy.remove_limited_asset',
        sts.struct({
            assetId: v85.AssetId32,
        })
    ),
}

export const updateTransferLimit =  {
    name: 'BridgeProxy.update_transfer_limit',
    v85: new CallType(
        'BridgeProxy.update_transfer_limit',
        sts.struct({
            settings: v85.TransferLimitSettings,
        })
    ),
}
