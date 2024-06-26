import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'
import * as v74 from '../v74'
import * as v84 from '../v84'

export const burn =  {
    name: 'BridgeProxy.burn',
    v64: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v64.GenericNetworkId,
            assetId: v64.AssetId32,
            recipient: v64.GenericAccount,
            amount: sts.bigint(),
        })
    ),
    v70: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v70.GenericNetworkId,
            assetId: v70.AssetId32,
            recipient: v70.GenericAccount,
            amount: sts.bigint(),
        })
    ),
    v74: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v74.GenericNetworkId,
            assetId: v74.AssetId32,
            recipient: v74.GenericAccount,
            amount: sts.bigint(),
        })
    ),
    v84: new CallType(
        'BridgeProxy.burn',
        sts.struct({
            networkId: v84.GenericNetworkId,
            assetId: v84.AssetId32,
            recipient: v84.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const addLimitedAsset =  {
    name: 'BridgeProxy.add_limited_asset',
    v64: new CallType(
        'BridgeProxy.add_limited_asset',
        sts.struct({
            assetId: v64.AssetId32,
        })
    ),
}

export const removeLimitedAsset =  {
    name: 'BridgeProxy.remove_limited_asset',
    v64: new CallType(
        'BridgeProxy.remove_limited_asset',
        sts.struct({
            assetId: v64.AssetId32,
        })
    ),
}

export const updateTransferLimit =  {
    name: 'BridgeProxy.update_transfer_limit',
    v64: new CallType(
        'BridgeProxy.update_transfer_limit',
        sts.struct({
            settings: v64.TransferLimitSettings,
        })
    ),
}
