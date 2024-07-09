import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const mint =  {
    name: 'SubstrateBridgeApp.mint',
    /**
     * Function used to mint or unlock tokens
     * The Origin for this call is the Bridge Origin
     * Only the relayer can call this function
     */
    v85: new CallType(
        'SubstrateBridgeApp.mint',
        sts.struct({
            assetId: v85.AssetId32,
            sender: v85.GenericAccount,
            recipient: v85.AccountId32,
            amount: v85.GenericBalance,
        })
    ),
}

export const finalizeAssetRegistration =  {
    name: 'SubstrateBridgeApp.finalize_asset_registration',
    /**
     * Function used to finalize asset registration if everything went well on the sidechain
     * The Origin for this call is the Bridge Origin
     * Only the relayer can call this function
     */
    v85: new CallType(
        'SubstrateBridgeApp.finalize_asset_registration',
        sts.struct({
            assetId: v85.AssetId32,
            sidechainAssetId: v85.GenericAssetId,
            assetKind: v85.Type_615,
            sidechainPrecision: sts.number(),
        })
    ),
}

export const incomingThischainAssetRegistration =  {
    name: 'SubstrateBridgeApp.incoming_thischain_asset_registration',
    /**
     * Function used to register this chain asset
     * The Origin for this call is the Bridge Origin
     * Only the relayer can call this function
     * Sends the message to sidechain to finalize asset registration
     */
    v85: new CallType(
        'SubstrateBridgeApp.incoming_thischain_asset_registration',
        sts.struct({
            assetId: v85.AssetId32,
            sidechainAssetId: v85.GenericAssetId,
        })
    ),
}

export const burn =  {
    name: 'SubstrateBridgeApp.burn',
    /**
     * Function used by users to send tokens to the sidechain
     */
    v85: new CallType(
        'SubstrateBridgeApp.burn',
        sts.struct({
            networkId: v85.SubNetworkId,
            assetId: v85.AssetId32,
            recipient: v85.GenericAccount,
            amount: sts.bigint(),
        })
    ),
}

export const registerSidechainAsset =  {
    name: 'SubstrateBridgeApp.register_sidechain_asset',
    /**
     * Function used to register sidechain asset
     * The Origin for this call is the Root Origin
     * Only the root can call this function
     * Sends the message to sidechain to register asset
     */
    v85: new CallType(
        'SubstrateBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v85.SubNetworkId,
            sidechainAsset: v85.GenericAssetId,
            symbol: v85.AssetSymbol,
            name: v85.AssetName,
        })
    ),
}

export const updateTransactionStatus =  {
    name: 'SubstrateBridgeApp.update_transaction_status',
    /**
     * Function used to update transaction status
     * The Origin for this call is the Bridge Origin
     * Only the relayer can call this function
     */
    v85: new CallType(
        'SubstrateBridgeApp.update_transaction_status',
        sts.struct({
            messageId: v85.H256,
            messageStatus: v85.MessageStatus,
        })
    ),
}
