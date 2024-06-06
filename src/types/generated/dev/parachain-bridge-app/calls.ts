import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const mint =  {
    name: 'ParachainBridgeApp.mint',
    v85: new CallType(
        'ParachainBridgeApp.mint',
        sts.struct({
            assetId: v85.AssetId32,
            sender: sts.option(() => v85.VersionedMultiLocation),
            recipient: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const finalizeAssetRegistration =  {
    name: 'ParachainBridgeApp.finalize_asset_registration',
    v85: new CallType(
        'ParachainBridgeApp.finalize_asset_registration',
        sts.struct({
            assetId: v85.AssetId32,
            assetKind: v85.Type_615,
        })
    ),
}

export const burn =  {
    name: 'ParachainBridgeApp.burn',
    v85: new CallType(
        'ParachainBridgeApp.burn',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            recipient: v85.VersionedMultiLocation,
            amount: sts.bigint(),
        })
    ),
}

export const registerThischainAsset =  {
    name: 'ParachainBridgeApp.register_thischain_asset',
    v85: new CallType(
        'ParachainBridgeApp.register_thischain_asset',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            sidechainAsset: v85.V3AssetId,
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const registerSidechainAsset =  {
    name: 'ParachainBridgeApp.register_sidechain_asset',
    v85: new CallType(
        'ParachainBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v85.SubNetworkId,
            sidechainAsset: v85.V3AssetId,
            symbol: v85.AssetSymbol,
            name: v85.AssetName,
            decimals: sts.number(),
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        })
    ),
}

export const addAssetidParaid =  {
    name: 'ParachainBridgeApp.add_assetid_paraid',
    v85: new CallType(
        'ParachainBridgeApp.add_assetid_paraid',
        sts.struct({
            networkId: v85.SubNetworkId,
            paraId: sts.number(),
            assetId: v85.AssetId32,
        })
    ),
}

export const removeAssetidParaid =  {
    name: 'ParachainBridgeApp.remove_assetid_paraid',
    v85: new CallType(
        'ParachainBridgeApp.remove_assetid_paraid',
        sts.struct({
            networkId: v85.SubNetworkId,
            paraId: sts.number(),
            assetId: v85.AssetId32,
        })
    ),
}

export const updateTransactionStatus =  {
    name: 'ParachainBridgeApp.update_transaction_status',
    v85: new CallType(
        'ParachainBridgeApp.update_transaction_status',
        sts.struct({
            messageId: v85.H256,
            transferStatus: v85.XCMAppTransferStatus,
        })
    ),
}

export const setMinimumXcmIncomingAssetCount =  {
    name: 'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count',
    v85: new CallType(
        'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            minimalXcmAmount: sts.bigint(),
        })
    ),
}
