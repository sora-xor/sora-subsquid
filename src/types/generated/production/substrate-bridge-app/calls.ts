import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v77 from '../v77'

export const mint =  {
    name: 'SubstrateBridgeApp.mint',
    /**
     * Function used to mint or unlock tokens
     * The Origin for this call is the Bridge Origin
     * Only the relayer can call this function
     */
    v77: new CallType(
        'SubstrateBridgeApp.mint',
        sts.struct({
            assetId: v77.AssetId32,
            sender: v77.GenericAccount,
            recipient: v77.AccountId32,
            amount: v77.GenericBalance,
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
    v77: new CallType(
        'SubstrateBridgeApp.finalize_asset_registration',
        sts.struct({
            assetId: v77.AssetId32,
            sidechainAssetId: v77.GenericAssetId,
            assetKind: v77.Type_562,
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
    v77: new CallType(
        'SubstrateBridgeApp.incoming_thischain_asset_registration',
        sts.struct({
            assetId: v77.AssetId32,
            sidechainAssetId: v77.GenericAssetId,
        })
    ),
}

export const burn =  {
    name: 'SubstrateBridgeApp.burn',
    /**
     * Function used by users to send tokens to the sidechain
     */
    v77: new CallType(
        'SubstrateBridgeApp.burn',
        sts.struct({
            networkId: v77.SubNetworkId,
            assetId: v77.AssetId32,
            recipient: v77.GenericAccount,
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
    v77: new CallType(
        'SubstrateBridgeApp.register_sidechain_asset',
        sts.struct({
            networkId: v77.SubNetworkId,
            sidechainAsset: v77.GenericAssetId,
            symbol: v77.AssetSymbol,
            name: v77.AssetName,
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
    v77: new CallType(
        'SubstrateBridgeApp.update_transaction_status',
        sts.struct({
            messageId: v77.H256,
            messageStatus: v77.MessageStatus,
        })
    ),
}
