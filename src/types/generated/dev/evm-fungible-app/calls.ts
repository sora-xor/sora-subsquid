import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const mint =  {
    name: 'EVMFungibleApp.mint',
    v85: new CallType(
        'EVMFungibleApp.mint',
        sts.struct({
            token: v85.H160,
            sender: v85.H160,
            recipient: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const registerAssetInternal =  {
    name: 'EVMFungibleApp.register_asset_internal',
    v85: new CallType(
        'EVMFungibleApp.register_asset_internal',
        sts.struct({
            assetId: v85.AssetId32,
            contract: v85.H160,
        })
    ),
}

export const burn =  {
    name: 'EVMFungibleApp.burn',
    v85: new CallType(
        'EVMFungibleApp.burn',
        sts.struct({
            networkId: v85.H256,
            assetId: v85.AssetId32,
            recipient: v85.H160,
            amount: sts.bigint(),
        })
    ),
}

export const registerSidechainAsset =  {
    name: 'EVMFungibleApp.register_sidechain_asset',
    v85: new CallType(
        'EVMFungibleApp.register_sidechain_asset',
        sts.struct({
            networkId: v85.H256,
            address: v85.H160,
            symbol: v85.AssetSymbol,
            name: v85.AssetName,
            decimals: sts.number(),
        })
    ),
}

export const registerExistingSidechainAsset =  {
    name: 'EVMFungibleApp.register_existing_sidechain_asset',
    v85: new CallType(
        'EVMFungibleApp.register_existing_sidechain_asset',
        sts.struct({
            networkId: v85.H256,
            address: v85.H160,
            assetId: v85.AssetId32,
            decimals: sts.number(),
        })
    ),
}

export const registerThischainAsset =  {
    name: 'EVMFungibleApp.register_thischain_asset',
    v85: new CallType(
        'EVMFungibleApp.register_thischain_asset',
        sts.struct({
            networkId: v85.H256,
            assetId: v85.AssetId32,
        })
    ),
}

export const registerNetwork =  {
    name: 'EVMFungibleApp.register_network',
    v85: new CallType(
        'EVMFungibleApp.register_network',
        sts.struct({
            networkId: v85.H256,
            contract: v85.H160,
            symbol: v85.AssetSymbol,
            name: v85.AssetName,
            sidechainPrecision: sts.number(),
        })
    ),
}

export const registerNetworkWithExistingAsset =  {
    name: 'EVMFungibleApp.register_network_with_existing_asset',
    v85: new CallType(
        'EVMFungibleApp.register_network_with_existing_asset',
        sts.struct({
            networkId: v85.H256,
            contract: v85.H160,
            assetId: v85.AssetId32,
            sidechainPrecision: sts.number(),
        })
    ),
}

export const claimRelayerFees =  {
    name: 'EVMFungibleApp.claim_relayer_fees',
    v85: new CallType(
        'EVMFungibleApp.claim_relayer_fees',
        sts.struct({
            networkId: v85.H256,
            relayer: v85.H160,
            signature: v85.Signature,
        })
    ),
}
