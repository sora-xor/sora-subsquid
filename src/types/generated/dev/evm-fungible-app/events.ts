import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v85 from '../v85'

export const burned =  {
    name: 'EVMFungibleApp.Burned',
    /**
     * Transfer to sidechain.
     */
    v85: new EventType(
        'EVMFungibleApp.Burned',
        sts.struct({
            networkId: v85.H256,
            assetId: v85.AssetId32,
            sender: v85.AccountId32,
            recipient: v85.H160,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'EVMFungibleApp.Minted',
    /**
     * Transfer from sidechain.
     */
    v85: new EventType(
        'EVMFungibleApp.Minted',
        sts.struct({
            networkId: v85.H256,
            assetId: v85.AssetId32,
            sender: v85.H160,
            recipient: v85.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const refunded =  {
    name: 'EVMFungibleApp.Refunded',
    /**
     * Transfer failed, tokens refunded.
     */
    v85: new EventType(
        'EVMFungibleApp.Refunded',
        sts.struct({
            networkId: v85.H256,
            recipient: v85.AccountId32,
            assetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const assetRegistered =  {
    name: 'EVMFungibleApp.AssetRegistered',
    /**
     * New asset registered.
     */
    v85: new EventType(
        'EVMFungibleApp.AssetRegistered',
        sts.struct({
            networkId: v85.H256,
            assetId: v85.AssetId32,
        })
    ),
}

export const feesClaimed =  {
    name: 'EVMFungibleApp.FeesClaimed',
    /**
     * Fees paid by relayer in EVM was claimed.
     */
    v85: new EventType(
        'EVMFungibleApp.FeesClaimed',
        sts.struct({
            recipient: v85.AccountId32,
            assetId: v85.AssetId32,
            amount: sts.bigint(),
        })
    ),
}
